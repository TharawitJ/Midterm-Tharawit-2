import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useUserStore from "../store/UserStore.js";

function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });
  //   create setToken at userStore
  const setToken = useUserStore((state) => state.setToken);
  const setId = useUserStore((state) => state.setId);
  const navigate = useNavigate();
  // style
  const inputStyle = "border rounded-xl p-1";

  // login function
  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    console.log(login);
    const resp = await axios
      .post(
        "https://drive-accessible-pictures-send.trycloudflare.com/auth/login",
        login,
      )
      // setUser to storage
    const { userId, token } = resp.data.user;
    setToken({ token });
    setId({ userId });
    navigate("/Todolist");
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col max-w-75 gap-2 justify-center items-center border rounded-2xl p-4 m-auto mt-40"
        onSubmit={hdlSubmit}
      >
        <div className="flex items-start mr-auto">Welcome</div>
        <input
          value={login.username}
          name="username"
          className={inputStyle}
          type="text"
          placeholder="Username"
          onChange={(evt) => hdlChange(evt)}
        />
        <input
          value={login.password}
          name="password"
          className={inputStyle}
          type="password"
          placeholder="Password"
          onChange={(evt) => hdlChange(evt)}
        />
        <button className="border rounded-xl p-1 w-20">Login</button>
      </form>
    </>
  );
}

export default Login;
