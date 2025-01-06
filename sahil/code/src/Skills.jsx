import React from "react";
import "./Skills.css";
import imghtml from "../src/Images/html.png";
import imgcss from "../src/Images/css.png";
import imgjs from "../src/Images/javascript.png";
import imgreact from "../src/Images/reactjs.png";
import imgc from "../src/Images/c.png";
import imgcc from "../src/Images/cc.png";
import imgjava from "../src/Images/java.png";
import imgpython from "../src/Images/python.png";
import imgsql from "../src/Images/sql.png";
import imgcanva from "../src/Images/canva.png";
import imglr from "../src/Images/lr.png";
import imgve from "../src/Images/v-editing.png";

const Skills = () => {
  const skills = [
    { img: imghtml, name: "HTML" },
    { img: imgcss, name: "CSS" },
    { img: imgjs, name: "JavaScript" },
    { img: imgreact, name: "React" },
    { img: imgc, name: "C" },
    { img: imgcc, name: "C++" },
    { img: imgjava, name: "Java" },
    { img: imgpython, name: "Python" },
    { img: imgsql, name: "SQL" },
    { img: imgcanva, name: "Canva" },
    { img: imglr, name: "Lightroom" },
    { img: imgve, name: "Video Editing" },
  ];

  return (
    <div className="skill-container" data-aos="fade-up">
      <h1 className="s-title">Skills</h1>
      <div className="cards">
        {skills.map((skill, index) => (
          <div key={index} className="c1" data-aos="fade-up" delay="0">
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
