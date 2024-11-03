import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { handleError, handleSuccess } from "../utils";

const DeleteAccount = ({ setIsAuthenticated }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      };

      const response = await fetch(
        "http://localhost:8000/auth/delete-account",
        requestOptions
      );
      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        handleSuccess(data.message);
        setTimeout(() => {
          setIsAuthenticated(false);
          navigate("/");
        }, 1000); // Added delay for navigation
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError(
        "An error occurred while trying to delete your account. Please try again later. 😔"
      );
    }
  };

  return (
    <div className="container flex column align-center">
      <h2 className="para">Are you sure you want to delete your account? 😢</h2>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleDeleteAccount}
      >
        Yes, I'm sure 🚀
      </button>
      <ToastContainer />
    </div>
  );
};

export default DeleteAccount;
