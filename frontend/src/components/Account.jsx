import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Account() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from local storage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="container flex column align-center">
      <img
        className="profile-pic"
        src="/accountpic.webp"
        alt="Profile"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }} // Added style for better appearance
      />
      <h1 className="para">
        {username
          ? `👋 Welcome, ${username}! 😊`
          : "No username found in Local Storage. 😔"}
      </h1>
      <Link to="/delete-account" style={{ color: "red", fontWeight: "bold" }}>
        🗑️ Delete Account
      </Link>
    </div>
  );
}

export default Account;
