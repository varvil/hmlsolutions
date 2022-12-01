import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*Login is not ready yet but when it is it should work like that when user 
    enters username and password, they are posted to backend where authentication is executed
    and there is checked if username and password is found in the database and they are compared to input
  */
  const loginHandler = (e) => {
    e.preventDefault();

    fetch("https://hmlsolutions.com/cloud13/project/api/login.php?", {
      method: "POST",
      mode: "no-cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log({ username, password});

  };

  return (
    <div className="login__container">
      <h1 className="login__title">Login</h1>
      <div className="login__section">
        <form className="login__form">
          <input
            type="text"
            id="usr_name"
            className="login__username"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div className="line"></div>
          <br></br>
          <input
            type="password"
            id="pwd"
            className="login__password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="line"></div>
          <button className="login" onClick={loginHandler}>Sign in</button>
        </form>

        {/*Remove socials I:s <p className="description">Or login with</p>
         <div className="social__container">
          <ul className="socials">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <i className="uil uil-facebook-f"></i>
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="uil uil-twitter"></i>
              </span>
            </li>
          </ul>
        </div>
        */}

        <div className="register__section">
          Not a member?
          <Link to="/cloud13/project/build/register" className="register">
            register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
