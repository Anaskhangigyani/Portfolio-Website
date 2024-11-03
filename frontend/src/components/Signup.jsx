import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Signup = () => {
  let navigate = useNavigate();
  let [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    let copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("name, email and password are required 📝");
    }
    try {
      const url = `http://localhost:8000/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message } = result;
      if (success) {
        handleSuccess(`Account created successfully 🎉`);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (!success) {
        handleError(`Failed to create account: ${message} 😞`);
      }
    } catch (err) {
      handleError(`Error: ${err} 😞`);
    }
  };
  return (
    <div className="container signup flex column ">
      <form
        className="form flex column gap align-center"
        onSubmit={handleSubmit}
      >
        <h1 className="center mb-20">Signup 📝</h1>

        <label htmlFor="username">UserName 👤</label>
        <input
          name="name"
          type="text"
          id="username"
          value={signupInfo.name}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <label htmlFor="email">Email 📧</label>
        <input
          name="email"
          type="email"
          id="email"
          value={signupInfo.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password 🔒</label>
        <input
          name="password"
          type="password"
          id="password"
          value={signupInfo.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button type="submit">Signup 📝</button>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
