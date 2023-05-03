import React from "react";
import Typewriter from "typewriter-effect";
import bgServices from "../../styleitems/bgServices.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="Zoom-out">
          <video src={bgServices} loop autoPlay muted></video>
        </div>

        <img
          className="scrollGif"
          data-aos="fade-up"
          src={scrollGif}
          alt="scroll Gif"
        />
      </div>
      <div className="homeSlider">
        <Typewriter
          options={{
            strings: ["Exceeding expectations with exceptional solutions. "],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default Home;
