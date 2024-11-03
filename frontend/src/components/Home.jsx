import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="home flex gap grow-1 res-hero ">
        <div className="left flex column  justify-center">
          <h1>Welcome to my portfolio! 🎉</h1>
          <p className="para">
            Welcome to my corner of the internet, where I share my thoughts and
            experiences 😊. As a <span>14</span> years old <span>STUDENT</span>{" "}
            and <span>DEVELOPER</span>, I'm still figuring out who I am and
            where I'm going, but I'm excited to take you along for the ride 🎉.
            In real life, you'll get to know me, not just as a student or a
            developer, but as a person with hopes, dreams, and aspirations 💫. I
            hope that my story can inspire you to be brave, to take risks, and
            to chase your own dreams 🌟.
          </p>
          <Link to="/about" id="go">
            Learn more →
          </Link>
        </div>
        <div className="right flex align-center justify-center">
          <img src="/pic1.webp" alt="Your Profile Picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
