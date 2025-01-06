import React from "react";
import "./About.css";
import SImg from "../src/Images/sahil-img3.png";
const About = () => {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <h1 className="title">About Me</h1>
        <div className="main-about">
          <img src={SImg} alt="My-Image" id="img1" />
          <p className="about-text">
            Hello! I'm Sahil Salunkhe, a passionate web developer and problem
            solver. I have completed my Diploma in Information Technology from
            Vidyalankar Polytechnic, and I am currently pursuing a Bachelor’s
            Degree in Engineering (B.E.) at A.P. Shah Institute of Technology.
            <br/>
            My journey into the world of technology began with a deep curiosity
            about how websites and applications are built. As I learned more, my
            passion for web development grew. I find joy in solving complex
            problems and turning ideas into functional, user-friendly digital
            solutions.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
