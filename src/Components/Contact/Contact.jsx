import React from "react";
import bgContact from "../../styleitems/bgContact.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import Intro from "../Introduction/Intro";
import Form from "./form";
import { objectValue } from "../../Context Hook/Context";

const Home = () => {
  //for Dynamic Text 
 const contextData = objectValue();
  
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="flip-right">
          <video src={bgContact} loop autoPlay muted></video>
        </div>
        <div className="hometext">
          <h1>{contextData.contactVideoTxt}</h1>
        </div>
        <a href="#bottom-side">
        <img
          className="scrollGif"
          data-aos="fade-up"
          src={scrollGif}
          alt="scroll Gif"
          />
          </a>

      </div>
      <Intro />
      <Form/>
    
          </>
  );
};

export default Home;
