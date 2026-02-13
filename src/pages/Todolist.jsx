import React, { useEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../store/UserStore.js";

function Todolist() {
  // State
  const { id, token } = useUserStore();
  const { userId } = id;
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

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setPostTodo((prev) => ({ ...prev, [name]: value }));
    console.log(postTodo);
  };

  //   style
  const insideStyle = "w-full h-full flex justify-between flex-col text-xl";

  return (
    <>
      <div>Todolist</div>

      <form onSubmit={hdlSubmit}>
        <input
          className="border rounded-xl p-1 m-1"
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
            className="border rounded-xl flex gap-3 m-5 h-30 flex-row p-5 min-w-120 max-w-120"
          >
            <div className={insideStyle}>
              <p>Content : {item.content}</p>
              <p>
                Status :{" "}
                <span
                  className={`${item.isdone ? "text-green-500" : "text-red-500"}`}
                >{`${item.isdone ? "Done" : "Not Done"}`}</span>
              </p>
            </div>
            {/* <div className={insideStyle}>
            <p>Create Date : {item.createdAt}</p>
            <p>Update Date : {item.updatedAt}</p>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Todolist;
