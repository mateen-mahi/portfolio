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
import Footer from "./Components/Footer/Footer";
import "./App.css";
import WhatsAppButton from "./Components/Whatsapp Button/Whatsapp";

function App() {

  //Scroll Initial Render  For animation 
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])  
  
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
        <div id="whatsapp-btn"><WhatsAppButton/></div>
        <ScrollButton/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
