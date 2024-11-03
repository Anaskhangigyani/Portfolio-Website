import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Signup = () => {
  const navigate = useNavigate();
  const [emailInfo, setEmailInfo] = useState({
    from: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { from, subject, message } = emailInfo;

    if (!from || !subject || !message) {
      return handleError("Email, subject, and message are required 📝");
    }

    try {
      const url = "http://localhost:8000/email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailInfo),
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(`Error: ${err} 😞`);
    }
  };

  return (
    <div className="container signup flex column">
      <form
        className="form flex column gap align-center"
        onSubmit={handleSubmit}
      >
        <h1 className="center mb-20">Contact us 📲</h1>
        <label htmlFor="from">Email 📧</label>
        <input
          placeholder="Enter Your Email"
          name="from"
          type="from"
          id="from"
          value={emailInfo.from}
          onChange={handleChange}
        />
        <label htmlFor="subject">Subject 📝</label>
        <input
          placeholder="Enter Your Subject"
          name="subject"
          type="text"
          id="subject"
          value={emailInfo.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">Message 📝</label>
        <textarea
          placeholder="Enter Your Message"
          name="message"
          id="message"
          value={emailInfo.message}
          onChange={handleChange}
        />
        <button type="submit">Send 📨</button>
        <div className="social-media flex justify-center  wrap">
          <a href="#" target="_blank">
            <img src="/linkden.webp" alt="linkden" />
          </a>
          <a href="#" target="_blank">
            <img src="/instagram.webp" alt="instagram" />
          </a>
          <a href="#" target="_blank">
            <img src="/twitter.webp" alt="twitter" />
          </a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
