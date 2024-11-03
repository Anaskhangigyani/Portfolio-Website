import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="container flex column align-center">
      <h1 className="para">Erorr : 404</h1>
      <h1>Page Not Found</h1>
      <p className="para">This page does not exist</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default PageNotFound;
