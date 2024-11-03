import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="nav">
      <div className="container flex space-between align-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home 🏠
        </NavLink>
        <label
          className="hide-cm initial-mb"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>☰</span>
        </label>
        <ul
          className={`pages flex gap hide-mb mb-veiw ${
            isOpen ? "open" : "close"
          }`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About 📚
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skills 💪
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact 📞
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink
                onClick={handleLogout}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Logout 🚪
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Account 👤
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login 🔑
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Signup ✍️
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
