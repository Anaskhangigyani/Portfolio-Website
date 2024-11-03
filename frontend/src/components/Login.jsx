import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email and password are required 📝");
    }
    try {
      const url = `http://localhost:8000/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, username, error } = result;
      if (success) {
        handleSuccess(`Logged in successfully 🎉`);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("username", username);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (!success) {
        handleError(`Failed to login: ${message} 😞`);
      }
    } catch (err) {
      handleError(`Error: ${err} 😞`);
    }
  };

  return (
    <div className="container signup flex column">
      <form
        className="form flex column gap align-center"
        onSubmit={handleLogin}
      >
        <h1 className="center mb-20">Login 📝</h1>
        <label htmlFor="email">Email 📧</label>
        <input
          name="email"
          type="email"
          id="email"
          value={loginInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password 🔒</label>
        <input
          name="password"
          type="password"
          id="password"
          value={loginInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button type="submit">Login 📝</button>
        <p>
          Don't have an account <Link to="/signup">Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
