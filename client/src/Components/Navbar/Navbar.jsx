import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav__wrapper">
    <div className="nav__container">
      <nav className="nav__content-right">

      <Link to="/cloud13/project/build/add">
          <i class="uil uil-estate"></i>
          Add item
        </Link> 

        <Link to="/cloud13/project/build/">
          <i class="uil uil-estate"></i>
          Home
        </Link>

        <Link to="/cloud13/project/build/login">
          <i class="uil uil-signin"></i>
          Login
        </Link>

      </nav>
    </div>
    </div>
  );
};

export default Navbar;
