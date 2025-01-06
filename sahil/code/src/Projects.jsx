import React from "react";
import imgp from "../src/Images/portfolio.png";
import imgi from "../src/Images/innovest.jpeg";
import imgr from "../src/Images/rock.jpeg";
import imgt from "../src/Images/tic.jpg";
import imga from "../src/Images/age.avif";
import imgm from "../src/Images/coming.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Projects.css";

const Projects = () => {
  const cardData = [
    {
      img: imgp,
      title: "Portfolio Website",
      description: "A website where you can learn more about me, my skills, and the projects I’m passionate about.",
    },
    {
      img: imgi,
      title: "Innovest",
      description: "A platform that connects investors, public users, and startups, providing them with a variety of collaboration features. ",
    },
    {
      img: imgt,
      title: "Tic-Tac-Toe Game",
      description: "This project allows players to enjoy a classic game experience, with the ability to play against another player in a user-friendly interface.",
    },
    {
      img: imgr,
      title: "Rock-Paper-Scissors Game",
      description: " This project lets users play against the computer with intuitive controls and immediate feedback on their choices.",
    },
    {
      img: imga,
      title: "Age Calculator",
      description: "A simple yet useful Age Calculator that lets users enter their birthdate and instantly calculates their age in years, months, and days.",
    },
    {
      img: imgm,
      title: "Makeup Appointment",
      description: "A platform designed for my sister, where she can efficiently manage and receive appointments for makeup services",
    },
  ];

  return (
    <>
      <Nav />
      <h1 id="title-p" data-aos="fade-up">
        My Projects
      </h1>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div className="card" key={index} data-aos="fade-up">
            <img src={card.img} alt={card.title} className="card-img" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
