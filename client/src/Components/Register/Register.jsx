import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register__container">
      <div className="left__content">
        <h2 className="register__title">Allready have an account?</h2>

        <h3 className="register__description">
          Please login with your personal info
        </h3>

        <Link to="/cloud13/build/login" className="login">
          {" "}
          Sign in
        </Link>
      </div>

      <div className="right__content">
        <h2 className="register__title2">Create account</h2>
        <h3 className="register__description2">
          Use your email for registeration:
        </h3>

        <form className="register__form">
          <input
            type="text"
            className="register__input"
            placeholder="Username"
          />
          <input type="email" className="register__input" placeholder="Email" />
          <input
            type="password"
            className="register__input"
            placeholder="Password"
          />
          <button className="register__button"> Sign up </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
