import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [toggleClass, setToggleClass] = useState({
    navCls: "hideNav",
    btnCls1: "sowIcon",
    btnCls2: "hideIcon",
  });

  const HamHandle = () => {
    setToggleClass({
      navCls: toggleClass.navCls === "showNav" ? "hideNav" : "showNav",
      btnCls1: toggleClass.btnCls1 === "hideIcon" ? "sowIcon" : "hideIcon",
    });
  };

  const CrossHandle = () => {
    setToggleClass({
      navCls: toggleClass.navCls === "hideNav " ? "showNav" : "hideNav ",
      btnCls2: toggleClass.btnCls2 === "sowIcon" ? "hideIcon" : "sowIcon",
    });
  };

  return (
    <>
      <div className="headerParent" data-aos="fade-down">
        <div className={`navHam ${toggleClass.btnCls1}`}>
          <FaHamburger onClick={HamHandle} />
        </div>
        <div className="header container">
          <div className="logo">
            <h1>
              <span className="first-logo">Mateen </span>
              <span className="last-logo">Mahi</span>
            </h1>
          </div>

          <div className={`navbar ${toggleClass.navCls}`}>
            <div className={`navCross ${toggleClass.btnCls2}`}>
              <RxCrossCircled onClick={CrossHandle} />
            </div>
            <ul className="navList">
              <li className="listItems">
                <NavLink to="/" activeClassName="active" className="navLinks">
                  Home
                </NavLink>
              </li>
              <li className="listItems">
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="navLinks"
                >
                  About
                </NavLink>
              </li>
              <li className="listItems">
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="navLinks"
                >
                  Contact
                </NavLink>
              </li>
              <li className="listItems">
                <NavLink
                  to="/portfolio"
                  activeClassName="active"
                  className="navLinks"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="listItems">
                <NavLink
                  to="/services"
                  activeClassName="active"
                  className="navLinks"
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
