import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/OurServices/Services";
import Navbar from "./Components/navbar/Navbar";
import ScrollButton from "./Components/ScroolBtn/Scrollbtn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ScrollButton/>
        <div className="copywriteText" data-aos="flip-up">
          <p id="bottom-side"> &copy; 2023 InnovX Solutions. All rights reserved.</p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
