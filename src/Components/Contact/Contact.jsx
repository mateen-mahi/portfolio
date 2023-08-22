import React from "react";
import { useState } from "react";
import bgContact from "../../styleitems/bgContact.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import "./contact.css";
import Intro from "../Introduction/Intro";
import Swal from "sweetalert2";

const Home = () => {
  const[inputText,setInputText] = useState({
    name:"",
    email:"",
    number:"",
    subject:"",
    textMessage:""
  })

  const ValueEmptyHandle = () => {
    Swal.fire({
      icon: "warning",
      title: "Missed Value",
      text: "Plz Fill all The Requirements",
     });
  }

  const ValueFilledHandle = () => {
    Swal.fire({
      icon: "success",
      title: "Submitted",
      text: "We Will response as soon as possible",
    });
  }

  const InputHandle = (e)=>{
    const value = e.target.value
    const name = e.target.name
    setInputText({...inputText,[name]:value})
  }
  const SubmitBTn = () => {
    if (
      inputText.name ===""||
      inputText.email === "" ||
      inputText.number === "" ||
      inputText.subject === "" ||
      inputText.textMessage===''
     ) {
      ValueEmptyHandle();
    } else {
      ValueFilledHandle();
      setInputText({
        name:"",
        email:"",
        number:"",
        subject:"",
        textMessage:""
      })
    }
  };

 const  HandleSubmit = (event)=>{
    event.preventDefault()
 }
  
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="flip-right">
          <video src={bgContact} loop autoPlay muted></video>
        </div>
        <div className="hometext">
          <h1>Let's Connect and Collaborate Today.</h1>
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
    
      <div className="container " id="contactForm" data-aos="zoom-in">
        <form
          className="inputContainer"
          // action="/"
          // method="POST"
          onSubmit={HandleSubmit}
        >
          <h1>Have a Question? </h1>
          <input
  type="text"
  placeholder="Name"
  name="name"
  onChange={InputHandle}
  value={inputText.name}
  required
  data-aos="fade-up"
/>
<input
  type="email"
  name="email"
  onChange={InputHandle}
  value={inputText.email}
  placeholder="Email"
  required
  data-aos="fade-up"
/>
<input
  type="number"
  name="number"
  onChange={InputHandle}
  value={inputText.number}
  placeholder="Phone"
  required
  data-aos="fade-up"
/>
<input
  type="text"
  name="subject" 
  onChange={InputHandle}
  value={inputText.subject}
  placeholder="Subject"
  required
  data-aos="fade-up"
/>
<textarea
  name="textMessage"
  value={inputText.textMessage}
  onChange={InputHandle}
  placeholder="Message"
  cols="30"
  rows="5"
  required
  data-aos="fade-down"
></textarea>

          <button type="submit" onClick={SubmitBTn} className="button formbtn" 
          data-aos="fade-up">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
