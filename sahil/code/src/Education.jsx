import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Education.css';

const educationData = [
  {
    year: "2024",
    title: "Bachelor of Eengineering in Information Technology",
    institution: "A. P. Shah Institute Of Technology, Thane",
    description: "Focusing on Information Technology with a advance technologies.",
  },
  {
    year: "2024",
    title: "Diploma in Information Technology",
    institution: "Vidyalankar Polytechnic, Wadala",
    description: "Focused on Information Technology with a keen interest in Web Development & Problem Solving.",
  },
  {
    year: "2021",
    title: "High School",
    institution: "Vidya Vikas High School, Chunabhatti",
    description: "Completed with a strong focus on Science and Mathematics.",
  },
];

const Education = () => {
  return (
    <>
    <Nav/>
    <div className="timeline-container">
      <h1 className="timeline-title">My Education Journey</h1>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" data-aos="fade-up"></div>
            <div className="timeline-content" data-aos="fade-up">
              <h2 className="timeline-year">{item.year}</h2>
              <h3 className="timeline-t">{item.title}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Education;
