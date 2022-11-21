import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav__container">
      <nav className="nav__content-right">
        <Link to="/cloud13/build">
          <i class="uil uil-estate"></i>
          Home
        </Link>

        <Link to="/cloud13/build/login">
          <i class="uil uil-signin"></i>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
