import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <hr className="text-gray-700 w-98/100 m-auto"/>
      <Outlet />
    </>
  );
}
