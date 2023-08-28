import { useState } from "react";
import Mateenimg from "../../styleitems/Mateenpro.jpg";
import { ImCross } from "react-icons/im";
import Form from "../Contact/form";
import { objectValue } from "../../Context Hook/Context";
import "./intro.css";
import Social from "./Social-Icon";

const Intro = () => {

  //Context Data 
  const companyData = objectValue();

//Small Contact Popup 
  const [contactForm,setContactForm] = useState({
    crossCls:'hidden',
    contactCls:'hidden',
  })

  //Small Contact Submit Fuction On btnClick 
  const ContactUsHandle = () => {
   setContactForm((prev)=>({ 
   crossCls: prev.crossCls === "hidden"?"contact-cross":"hidden",
   contactCls: prev.contactCls === "hidden"?"popupContact":"hidden"
  }));

  };
  return (
    <>
    <div onClick={ContactUsHandle} className={contactForm.crossCls}><ImCross/></div>
    <div className={contactForm.contactCls}><Form/></div>

      <div className="introCard" data-aos="flip-up">
        <div className="introImg">
          <a href="">
            <img src={Mateenimg} alt="my profile picture"/>
            <h3>{companyData.ownerName}</h3>
          </a>
          <div className="wrapper">
            <ul className="dynamic-txts">
              <li>
                <span>{companyData.slideOne}</span>
              </li>
              <li>
                <span>{companyData.slideTwo}</span>
              </li>
              <li>
                <span>{companyData.slideThree}</span>
              </li>
              <li>
                <span>{companyData.slideFour}</span>
              </li>
              <li>
                <span>{companyData.slideFive}</span>
              </li>
            </ul>
          </div>
        </div>
        <Social/>
                <div className="adressP">
          <h4>{companyData.companyName}</h4>
          <p>{companyData.cardTagline}</p>
        </div>
        <div className="adressP">
          <p>{companyData.companyAddress}</p>
        </div>
        <div className="adressbtn">
          <button className="button " onClick={ContactUsHandle}>
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
