import React from 'react';
import { useState } from "react";
import Swal from "sweetalert2";
import "./form.css"

const Form = () => {

//UseState Hook For All Inputs 

    const[inputText,setInputText] = useState({
        name:"",
        email:"",
        number:"",
        subject:"",
        textMessage:""
      })

      //Alert Function for empty Inputs 
    
      const ValueEmptyHandle = () => {
        Swal.fire({
          icon: "warning",
          title: "Missed Value",
          text: "Plz Fill all The Requirements",
         });
      }

      //Alert Function for Submit Form
    
      const ValueFilledHandle = () => {
        Swal.fire({
          icon: "success",
          title: "Submitted",
          text: "We Will response as soon as possible",
        });
      }

      //Function For Setting Input Values 
    
      const InputHandle = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setInputText({...inputText,[name]:value})
      }

      //Submit Btn Function that Submit Form on fireBase 
      const SubmitBTn = async (event) => {
        event.preventDefault();
        const { name,email,number,subject,textMessage} = inputText;
    
        if (name && number && email && subject && textMessage) {
          const res = await fetch(
            "https://contact-295fa-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                number,
                subject,
                textMessage
              }),
            }
          );
    
          if (res) {
            setInputText({
              name:"",
              email:"",
              number:"",
              subject:"",
              textMessage:""
                    });
            ValueFilledHandle();
          } else {
            ValueEmptyHandle();
          }
        } else {
            ValueEmptyHandle();
        }
      };
      




  return (

    <div className="container " id="contactForm" data-aos="zoom-in">
        <form
          className="inputContainer"
          autoComplete="off"
        >
          <h1>Have a Question? </h1>
          <input
  type="text"
  placeholder="Name"
  name="name"
  onChange={InputHandle}
  autoComplete="off"
  value={inputText.name}
  required
  data-aos="fade-up"
/>
<input
  type="email"
  name="email"
  onChange={InputHandle}
  autoComplete="off"
  value={inputText.email}
  placeholder="Email"
  required
  data-aos="fade-up"
/>
<input
  type="number"
  name="number"
  onChange={InputHandle}
  autoComplete="off"
  value={inputText.number}
  placeholder="Phone"
  required
  data-aos="fade-up"
/>
<input
  type="text"
  name="subject" 
  onChange={InputHandle}
  autoComplete="off"
  value={inputText.subject}
  placeholder="Subject"
  required
  data-aos="fade-up"
/>
<textarea
  name="textMessage"
  value={inputText.textMessage}
  onChange={InputHandle}
  autoComplete="off"
  placeholder="Message"
  cols="30"
  rows="5"
  required
  data-aos="fade-down"
></textarea>

<button
  type="submit"
  onClick={SubmitBTn}
  className="button formbtn"
  data-aos="flip-left"
>
  Send
</button>


        </form>
      </div>

    
  )
}

export default Form