import React, { useEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../store/UserStore.js";

function Todolist() {
  // State
  const { objUserId, token } = useUserStore();
  const { userId } = objUserId;
  const [todo, setTodo] = useState([]);
  const [postTodo, setPostTodo] = useState({ content: "" });
  // get and post

  async function getData(userId) {
    const resp = await axios.get(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}`,
    );
    setTodo(resp.data);
  }

  useEffect(() => {
    getData(userId);
  }, []);

  //   add
  const hdlSubmit = async (evt) => {
    evt.preventDefault();

    try {
      // console.log("test")
      const postResp = await axios.post(
        `https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}`,
        postTodo,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        },
      );
      getData(userId);
    } catch (error) {
      console.log("error");
    }
  };
  // track input change
  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setPostTodo((prev) => ({ ...prev, [name]: value }));
    // console.log(postTodo);
  };
  //   Delete
  const hdlDelete = async (evt, itemId) => {
    evt.preventDefault();
    console.log(itemId);
    const resp = await axios.delete(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}/${itemId}`,
    );
    getData(userId);
  };

  //   style
  const insideStyle = "w-full h-full flex justify-between flex-col text-xl";

  return (
    <>
      <div className="text-4xl m-5 flex flex-col justify-center items-center">
        Todolist
      </div>

      <form
        onSubmit={hdlSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <input
          className="border rounded-xl p-1 m-1 text-center"
          type="text"
          name="content"
          value={postTodo.content}
          placeholder="Content"
          onChange={hdlChange}
        />
        <button className="border rounded-xl w-15 p-1">Add</button>
      </form>
      <div className="flex flex-wrap">
        {todo.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl flex gap-3 m-5 h-30 flex-row p-5 min-w-120 max-w-120 justify-between"
          >
            <div className={insideStyle}>
              <p>Content : {item.content}</p>
              <p>
                Status :{" "}
                <span
                  className={`${item.isdone ? "text-green-500" : "text-red-500"}`}
                >{`${item.isdone ? "Done" : "Not Done"}`}</span>
              </p>
              <div className="flex justify-center gap-1">
                <button className="border rounded-xl w-23 bg-gray-200">
                  Edit
                </button>
                <button
                  className="border rounded-xl w-23 bg-gray-200"
                  onClick={(evt) => hdlDelete(evt, item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
