import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="home flex gap grow-1 res-hero ">
        <div className="right flex align-center justify-center">
          <img src="/pic2.webp" alt="Your Profile Picture" />
        </div>
        <div className="left flex column  justify-center">
          <h1>About Me 😊</h1>
          <p className="para">
            Hi, I'm Anas Khan 👋, a 14-year-old student and{" "}
            <span>FULL stack</span> developer. I'm passionate about building
            innovative solutions that make a difference 🌟. With a keen eye for
            detail and a love for learning, I'm constantly seeking new
            challenges and opportunities to grow 🚀.
          </p>
          <p className="para">
            When I'm not coding, you can find me reading books 📚, playing games
            🎮, or exploring new places 🗺️. I'm always excited to meet new
            people and collaborate on new projects 🤝.
          </p>
          <Link to="/contact" id="go">
            Contact me 📲
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
