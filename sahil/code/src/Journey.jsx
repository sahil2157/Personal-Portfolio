import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Journey.css";

const Journey = () => {
  return (
    <>
      <Nav />
      <div className="j-container">
        <div className="experience" data-aos="fade-right">
          <h1>Experience</h1>
          <h3>Sagar An Systems</h3>
          <p>
            During my internship at Sans Company, I gained valuable experience,
            particularly in React.js. I contributed to our team’s success in a
            hackathon competition, where we won Second place.
          </p>
          <h3>Innovest</h3>
          <p>
            For our final year project, we developed Innovest, a platform that
            bridges the gap between investors, startups, and public users.
            Investors can connect with promising startups, while public users
            play a role in idea validation by testing concepts. The project was
            lauded for its innovation and practical approach, showcasing strong
            teamwork and creativity.
          </p>
          <h3>Hackathon</h3>
          <p>
            During our internship, our team was tasked with building a medical
            website from scratch. This project gave me valuable experience in
            web development and teamwork, and I gained a lot from collaborating
            closely with my peers to create a fully functional site.
          </p>
        </div>
        <div className="achievements" data-aos="fade-left">
          <h1>Achievement</h1>
          <h3>SSC Rank 1</h3>
          <p>
            In my 10th standard, I was honored to achieve 1st rank in my school.
            This accomplishment motivated me to continue excelling academically
            and pursue my passion for technology and creativity.
          </p>
          <h3>Innovest Runner-Up</h3>
          <p>
            You can add the following to your education or achievement section:
            "My Team was the runner-up in our final year project, Innovest,
            which is a platform that connects investors with startups and allows
            public users to test ideas. This project was recognized for its
            creativity and practicality."
          </p>
          <h3>Hackathon Runner-up</h3>
          <p>
            You can include this in your achievements section like this: "During
            my internship, my team competed in a hackathon competition and
            secured the runner-up position, showcasing our collaborative skills
            and problem-solving abilities."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Journey;
