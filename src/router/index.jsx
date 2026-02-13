import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register.jsx";
import Todolist from "../pages/Todolist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "Todolist", element: <Todolist /> },
    ],
  },
]);

export default router;
