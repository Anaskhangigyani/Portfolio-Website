import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { han } from "../Utils";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetch("http://localhost:8000/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            setIsAuthenticated(false);
            handleError(data.message);
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          handleError(error);
        });
    }

    if (
      token &&
      (location.pathname === "/login" || location.pathname === "/signup")
    ) {
      navigate("/");
    }
  }, [token, location, setIsAuthenticated]);

  return null;
};

export default RefreshHandler;
