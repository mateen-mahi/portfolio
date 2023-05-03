import React from "react";
import bgContact from "../../styleitems/bgContact.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import "./contact.css";
import Intro from "../Introduction/Intro";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="flip-right">
          <video src={bgContact} loop autoPlay muted></video>
        </div>
        <div className="hometext">
          <h1>Let's Connect and Collaborate Today.</h1>
        </div>
        <img
          className="scrollGif"
          data-aos="fade-up"
          src={scrollGif}
          alt="scroll Gif"
        />
      </div>
      <Intro />

      <div className="container " data-aos="zoom-in">
        <form
          className="inputContainer"
          action="https://formspree.io/f/myyaowow"
          method="post"
        >
          <h1>Have a Question? </h1>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            data-aos="fade-up"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            data-aos="fade-up"
          />
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            data-aos="fade-up"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            data-aos="fade-up"
          />
          <textarea
            name="Text Area"
            placeholder="Message"
            cols="30"
            rows="5"
            data-aos="fade-down"
          ></textarea>
          <button type="submit" className="button formbtn" data-aos="fade-up">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
