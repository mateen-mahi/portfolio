import React,{useState} from "react";
import Typewriter from "typewriter-effect";
import bgServices from "../../styleitems/bgServices.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import Swal from "sweetalert2";
import "../globalcom.css";
import "./Services.css";
import { objectValue } from "../../Context Hook/Context";

const Home = () => {

  //useState hook for out Text Area 
const [text , setText] = useState("")

//Context Hook Text Object
const dynamic = objectValue();

//Upper Case Alert 

  const UpperCaseAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Upper Case",
      text: "Your Text is Changed into Upper Case",
     });
  }

//LowerCase Alert 

  const LowerCaseAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Lower Case",
      text: "Your Text is Changed into Lower Case",
     })}


//Capitalize Alert 

  const CapitalizeAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Text Capitalized",
      text: "Your Text Is Capitalized",
     });
  }


//Delete text Alert 

  const DeleteAlert = () => {
    Swal.fire({
      icon:"info",
      title: "Deleted",
      text: "Your Text is deleted",
     });
  }



  //Copy The Text From text Area Alert 

  const CopyAlert = () => {
    Swal.fire({
      icon:"info",
      title: "Copy Text",
      text: "Your Text Is Copied to Clipboard",
     });
  }

//UpperCase Function 

  function upperCasefunc(){
    let newText = text.toUpperCase();
    setText(newText);
  UpperCaseAlert();}

  //Delete Txt Function 

function deltefunc(){
    let newText = ("")
    setText(newText);
    DeleteAlert();
}

//Capitalize Function 

function capitalizeFunc() {
    let words = text.split(" ");
    let capitalizedWords = words.map((word) => {
       return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      
    });
    let newText = capitalizedWords.join(" ");
    setText(newText);
    CapitalizeAlert();
  }
  

//Lower Case Function 


function lowerCaseFunc(){
    let newText = text.toLowerCase();
    setText(newText);
    LowerCaseAlert();
}

//Copy To Clip board Function 
function copyfunc(){
    navigator.clipboard.writeText(text)
    CopyAlert();
    
}

//Vale getting from text area 

function valuedefiner(event) {
    setText(event.target.value)      
}





  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="Zoom-out">
          <video src={bgServices} loop autoPlay muted></video>
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
            strings: [dynamic.serviceVideoTxt],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="container util-heading">
        <h1 className="text-center my-3 bold" >My Text Util Function</h1></div>
      <div className={`container util-container`}>
    <div className=" mt-5">
        <h1>Write Your Text Below</h1>
        <textarea className={`form-control text-dark bg-white`} value={text} onChange={valuedefiner}  id="myBox"  rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-lg m-3 btn-primary" onClick={upperCasefunc}>UpperCase</button>
      <button disabled={text.length===0} className="btn btn-lg m-3 btn-danger" onClick={lowerCaseFunc}>LowerCase</button>
      <button disabled={text.length===0} className="btn btn-lg m-3 btn-warning " onClick={capitalizeFunc}>Capitalize</button>
      <button disabled={text.length===0} className="btn btn-lg m-3 btn-info " onClick={deltefunc}>Delete Text</button>
      <button disabled={text.length===0} className="btn btn-lg m-3 btn-dark" onClick={copyfunc}>Copy Text</button>
      </div>

      <div className={`container summary-cls`}>
        <h1>Text Summary</h1>
        <p> {text.length} Characters</p>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words</p>
        <p>{text.length===0?' 0 ':text.split(' ').length/300}Minutes To read </p>
        <h2>Text Preview</h2>
        <p >{text.length>0? text:("Nothing to preview")} </p>
      </div>







    </>
  );
};

export default Home;
