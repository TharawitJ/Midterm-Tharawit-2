import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="/Login">Login</NavLink> | 
        <NavLink to="/Register">Register</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
