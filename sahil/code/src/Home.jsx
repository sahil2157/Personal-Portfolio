import { useEffect } from "react";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Myimg from "../src/Images/sahil-img.png";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Nav />

      <div className="Main-Home" data-aos="fade-up">
        <div className="main-container">
          <h3>Hello, Its Me</h3>
          <h1>Sahil Salunkhe</h1>
          <h2>
            And I'm a <span className="Work-Name">Software Developer</span>
          </h2>
          <p>
          "From design to deployment, I bring your vision to life with precision and creativity."
          </p>
          <Button
            variant="outlined"
            sx={{
              color: "rgb(255, 0, 106)",
              borderColor: "rgb(255, 0, 106)",
              "&:hover": {
                backgroundColor: "rgb(255, 0, 106)",
                color: "white",
                borderColor: "rgb(255, 0, 106)",
              },
            }}
            className="h-button"
          >
            Download Resume
          </Button>
        </div>
        <div className="img-container">
          <img src={Myimg} alt="My Imgage" id="imgg" />
        </div>
      </div>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
