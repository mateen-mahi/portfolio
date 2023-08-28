import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import "./Social-Icon.css"

const Social = () => {
  return (
    <>
    <div className="pLinks">
          <ul className="iconList">
            <li className="Listicons">
              <a
                href="https://www.linkedin.com/in/m-mateen-048555249/"
                target="_blank"
                className="linkedin"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://twitter.com/MateenMahi74916"
                target="_blank"
                className="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://web.facebook.com/profile.php?id=100072474049162"
                target="_blank"
                className="facebook"
              >
                <AiFillFacebook />{" "}
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://www.instagram.com/mateen_mahi/"
                target="_blank"
                className="instagram"
              >
                <FiInstagram />
              </a>
            </li>
            <li className="Listicons">
              <a
                href="https://github.com/mateen-mahi"
                target="_blank"
                className="github"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
        </>
  )
}

export default Social