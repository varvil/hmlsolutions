import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__container">
      <h1 className="login__title">Login</h1>
      <div className="login__section">
        <form className="login__form">
          <input
            type="text"
            id="username"
            className="login__username"
            placeholder="Username"
          />
          <div className="line"></div>
          <br></br>
          <input
            type="password"
            id="password"
            className="login__password"
            placeholder="Password"
          />
          <div className="line"></div>
          <button className="login">Sign in</button>
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
          <Link to="/cloud13/build/register" className="register">
            register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
