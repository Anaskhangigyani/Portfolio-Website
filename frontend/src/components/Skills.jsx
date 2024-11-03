import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = [
    {
      name: "JS",
      description:
        "Proficient in JavaScript, the language of the web, with expertise in syntax, semantics, and ecosystem 💻",
      level: "Advanced",
      experience: "2+ years",
    },
    {
      name: "HTML",
      description:
        "Skilled in structuring and styling web pages using HTML5, with knowledge of semantic elements and accessibility 📄",
      level: "Intermediate",
      experience: "1+ year",
    },
    {
      name: "CSS",
      description:
        "Experienced in designing and styling web pages using CSS3, with expertise in layout, typography, and responsive design 🎨",
      level: "Advanced",
      experience: "2+ years",
    },
    {
      name: "Node.js",
      description:
        "Knowledgeable in building fast, scalable, and concurrent server-side applications using Node.js and its ecosystem 🚀",
      level: "Intermediate",
      experience: "1+ year",
    },
    {
      name: "Express.js",
      description:
        "Familiar with building fast, flexible, and modular server-side applications using Express.js, a popular Node.js framework 🚂",
      level: "Intermediate",
      experience: "1+ year",
    },
    {
      name: "React",
      description:
        "Proficient in building reusable UI components, managing state changes, and optimizing performance using React, a popular JavaScript library ⚛️",
      level: "Advanced",
      experience: "2+ years",
    },
    {
      name: "MongoDB",
      description:
        "Skilled in designing and implementing scalable, flexible, and high-performance NoSQL databases using MongoDB 📊",
      level: "Intermediate",
      experience: "1+ year",
    },
    {
      name: "Python",
      description:
        "Experienced in building data-driven applications, scripts, and tools using Python, with knowledge of popular libraries and frameworks 🐍",
      level: "Intermediate",
      experience: "1+ year",
    },
    {
      name: "MERN Stack",
      description:
        "Proficient in building full-stack applications using MongoDB, Express.js, React, and Node.js, with expertise in integrating these technologies 🌟",
      level: "Advanced",
      experience: "2+ years",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="center para">My Skills 🤓</h1>
        <div className="skills skills-grid gap">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h2 className="para">{skill.name}</h2>
              <p>{skill.description}</p>
              <p>
                <span>Experience</span>: {skill.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
