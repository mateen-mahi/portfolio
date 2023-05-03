import "./intro.css";
import Mateenimg from "../../styleitems/Mateenpro.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Swal from "sweetalert2";

const Intro = () => {
  const ContactUsHandle = () => {
    Swal.fire({
      icon: "error",
      title: "Service Interruption",
      text: "Temporary Contact Unavailable",
      footer: '<a href="/contact">Click Access Alternate Contact Options</a>',
    });
  };

  return (
    <>
      <div className="introCard" data-aos="flip-up">
        <div className="introImg">
          <a href="">
            <img src={Mateenimg} alt="my profile picture" />
            <h3>Mateen Mahi</h3>
          </a>
          <div className="wrapper">
            <ul className="dynamic-txts">
              <li>
                <span>founder & ceo of InnovX Solutions</span>
              </li>
              <li>
                <span>Html, CSS, Bootstrap, JS, React</span>
              </li>
              <li>
                <span>frontend web developer </span>
              </li>
              <li>
                <span>Artificial Intelligence is my goal</span>
              </li>
              <li>
                <span>Full stack with Python (Django)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pLinks">
          <ul className="iconList">
            <li className="Listicons">
              <a
                href="https://www.linkedin.com/in/m-mateen-048555249/"
                target="_blank"
                className="iconP"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://twitter.com/MateenMahi74916"
                target="_blank"
                className="iconP"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://web.facebook.com/profile.php?id=100072474049162"
                target="_blank"
                className="iconP"
              >
                <AiFillFacebook />{" "}
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://www.instagram.com/mateen_mahi/"
                target="_blank"
                className="iconP"
              >
                <FiInstagram />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://github.com/mateen-mahi"
                target="_blank"
                className="iconP"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="adressP">
          <h4>InnovX Solutions</h4>
          <p>Innovative solutions for modern technology challenges.</p>
        </div>
        <div className="adressP">
          <p>
            InnovX Solutions,SPRING VALLEY ESTATE - 50 GREEN AVENUE, BLOCK B,
            GULBERG III, LAHORE, PAKISTAN.
          </p>
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
