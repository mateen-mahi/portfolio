import React from "react";
import Typewriter from "typewriter-effect";
import bgPortfolio from "../../styleitems/bgPortfolio.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import "./portfolio.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="zoom-in">
          <video
            src={bgPortfolio}
            loop
            autoPlay
            muted
            data-aos="fade-up"
          ></video>
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
            strings: [
              "Welcome Here",
              "Bringing ideas to life through design. ",
              "Crafting efficient and scalable code.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="container">
        <div className="SkillSetCon" data-aos="Zoom-in">
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Android App Development &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Block Chain &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Full Stack Web Development &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">HtML,CSS,JS, React, BootStrap&nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Python Django &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Artificial Intelligence &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
