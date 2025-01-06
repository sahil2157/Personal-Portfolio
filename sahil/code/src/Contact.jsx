import React from "react";
import imgcontact from "../src/Images/contact.png";
import "./Contact.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <>
      <div className="c-container" data-aos="fade-up">
        <h1 id="c-title">Contact Me</h1>
        <div className="cm">
          <div className="c-info" data-aos="fade-right">
            <h2 id="subc-title">Connect With Me</h2>
            <h3>
              <span className="c-span">Name </span>: Sahil Ashok Salunkhe
            </h3>
            <h3>
              <span className="c-span">Phone </span>: +91 93564 40856
            </h3>
            <h3>
              <span className="c-span">Email </span>: salunkhesahil42@gmail.com
            </h3>
            <h3>
              <span className="c-span">Address </span>: Chunabhatti,
              Mumbai-400022
            </h3>
          </div>
          <img src={imgcontact} alt="" id="c-img" data-aos="fade-left" />
        </div>
        <div className="c-icon">
          <a
            href="https://www.linkedin.com/in/sahil-salunkhe-a140a8272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="icon" />
          </a>
          <a
            href="https://www.instagram.com/sahil_2210__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="mailto:salunkhesahil42@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="icon" />
          </a>
          <a
            href="https://wa.me/9321176546"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="icon" />
          </a>
          <a
            href="https://github.com/sahil2157"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
