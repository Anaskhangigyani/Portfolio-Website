import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import RefreshHandler from "./RefreshHandler";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactPage from "./components/Contact";
import Account from "./components/Account";
import DeleteAccount from "./components/DeleteAccount";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete-account"
          element={
            <PrivateRoute>
              <DeleteAccount setIsAuthenticated={setIsAuthenticated} />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
