import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import Home from "./Home";
import Education from "./Education";
import Journey from "./Journey";
import Projects from "./Projects";
import Contact from "./Contact";
import {Route, Routes} from 'react-router-dom';
const App = ()=>{
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration:1000
    });
  }, []);
  return(
    <>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/journey" element={<Journey/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}
export default App;