import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:5000/register", {
      username: username,
      email: email,
      password: password,
    }).then(() => {
      console.log("Success");
    });
  };

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
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input type="email" 
          className="register__input" 
          placeholder="Email" 
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>

          <input
            type="password"
            className="register__input"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="register__button" onClick={addUser}> Sign up </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
