import React from "react";
import Typewriter from "typewriter-effect";
import bgAbout from "../../styleitems/bgAbout.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import "./about.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="zoom-out">
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
            strings: ["Qualification & Our Goals"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="container">
        <div className="aboutContainer" data-aos="fade-up">
          <h5>SSC</h5>
          <p>
            <span>2013 - 2015</span>
            <br />
            SSC stands for Secondary School Certificate, which is an educational
            qualification typically earned by students after completing 10 years
            of schooling in countries like India, Pakistan, and Bangladesh.
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-up">
          <h5>HSSC</h5>
          <p>
            <span>2018 - 2020</span>
            <br />
            HSSC stands for Higher Secondary School Certificate, which is an
            academic qualification awarded to students after completing 12 years
            of education
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-right">
          <h5>Digital literacy</h5>
          <p>
            <span>2021</span>
            <br />
            Digital literacy refers to the ability to use digital technology
            effectively and efficiently to access, evaluate, create, and
            communicate information and ideas in various digital contexts.
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-left">
          <h5>Communication &amp; soft skills</h5>
          <p>
            <span>2022</span>
            <br />
            Communication and soft skills refer to a set of abilities and
            behaviors that enable effective and positive interactions with
            others, including listening, speaking, writing, and nonverbal
            communication.
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-right">
          <h5>CS 101</h5>
          <p>
            <span>2023</span>
            <br />
            CS 101 is an introductory course in computer science offered by many
            universities and online learning platforms. The course typically
            covers basic programming concepts, algorithms, data structures, and
            problem-solving techniques. It is designed to give students a
            foundation in computer science and prepare them for more advanced
            courses.
          </p>
        </div>
        <div className="aboutContainer" data-aos="flip-up">
          <h5>Python programming</h5>
          <p>
            <span>2023 - In Progress</span>
            <br />
            Python programming is a high-level, interpreted programming language
            used for developing various applications such as web development,
            data analysis, artificial intelligence, and scientific computing.
          </p>
        </div>
        <div className="aboutContainer" data-aos="fade-left">
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
