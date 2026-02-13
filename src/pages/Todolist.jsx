import React, { useEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../store/UserStore.js";

function Todolist() {
  // State
  const { id } = useUserStore();
  const { userId } = id;
  const [todo, setTodo] = useState([]);

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

//   style
const insideStyle="w-1/2 h-full flex justify-between flex-col"

  return (
    <>
      <div>Todolist</div>
      {todo.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl flex gap-3 m-5 h-30 flex-wrap flex-col p-5"
        >
          <div className={insideStyle}>
            <p>Content : {item.content}</p>
            <p>Status : {item.isdone}</p>
          </div>
          <div className={insideStyle}>
            <p>Create Date : {item.createdAt}</p>
            <p>Update Date : {item.updatedAt}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todolist;

