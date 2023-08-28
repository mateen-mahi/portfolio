import React from "react";
import Typewriter from "typewriter-effect";
import bgAbout from "../../styleitems/bgAbout.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import { objectValue } from "../../Context Hook/Context";
import "../globalcom.css";
import "./about.css";

const Home = () => {
//Context Dynamic Data 
const object = objectValue()

  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="flip-left">
          <video src={bgAbout} loop autoPlay muted></video>
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
      <div className="homeSlider">
        <Typewriter
          options={{
            strings:[object.aboutSliderTxt],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="container">
        <div className="aboutContainer" data-aos="fade-up">
          <h5>{object.fCardHeading}</h5>
          <p>
            <span>{object.fCardDuration}</span>
            <br />
            {object.fEduDetails}
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-up">
          <h5>{object.sCardHeading}</h5>
          <p>
            <span>{object.sCardDuration}</span>
            <br />
            {object.sEduDetails}
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-right">
          <h5>{object.tCardHeading}</h5>
          <p>
            <span>{object.tCardDuration}</span>
            <br />
            {object.tEduDetails}
           </p>
        </div>

        <div className="aboutContainer" data-aos="fade-left">
          <h5>{object.forthCardHeading}</h5>
          <p>
            <span>{object.forthCardDuration}</span>
            <br />
            {object.forthEduDetails}  
          </p>
        </div>


        <div className="aboutContainer" data-aos="fade-right">
          <h5>{object.fifthCardHeading}</h5>
          <p>
            <span>{object.fifthCardDuration}</span>
            <br />
            {object.fifthEduDetails}  
          </p>
        </div>



        <div className="aboutContainer" data-aos="fade-left">
          <h5>{object.sixCardHeading}</h5>
          <p>
            <span>{object.sixCardDuration}</span>
            <br />
            {object.sixEduDetails}  
          </p>
        </div>


        
        <div className="aboutContainer" data-aos="zoom-in">
          <h1>Our Mission</h1>
          <p className="mission">
            Our company, InnovX Solutions, is a technology-focused organization
            with a vision to become one of the best in the world of emerging
            technologies like artificial intelligence. We have a team of highly
            skilled professionals who are passionate about technology and have a
            strong desire to make a positive impact on society. With our hard
            work and dedication, we are confident that we will achieve our goal.
            <br />
            As we grow and expand, we are committed to creating opportunities
            for underprivileged students who are unable to afford education. We
            believe that education is the foundation for progress and
            development and that everyone should have equal access to it. Our
            aim is to provide scholarships, mentorship, and training programs to
            these students to help them realize their full potential and achieve
            their dreams.
            <br /> In addition to our focus on education, we also recognize the
            importance of health and wellbeing. We are dedicated to creating a
            health system for poor people who are often neglected in this
            regard. Our goal is to provide affordable and accessible healthcare
            services to those who need it the most. We believe that good health
            is essential for personal growth and development, and we are
            committed to doing our part in improving the health of society.
            <br /> At InnovX Solutions, we are driven by innovation and
            excellence. We understand the importance of staying ahead of the
            curve and continuously updating our knowledge and skills. We invest
            heavily in research and development to ensure that we are at the
            forefront of emerging technologies. Our team is constantly exploring
            new ways to leverage technology to solve real-world problems and
            create new opportunities for growth and development.
            <br /> We believe that our success is not just measured by our
            financial growth but also by the impact that we make on society. We
            are committed to creating a better future for everyone, and we
            invite others to join us on this journey. We believe that by working
            together, we can achieve great things and make a positive impact on
            the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
