import React from 'react';
import { NavLink } from "react-router-dom";
import { objectValue } from '../../Context Hook/Context';
import Social from '../Introduction/Social-Icon';
import Location from './Location';
import"./Footer.css";

const Footer = () => {
    //Context hook Data 
  const comData = objectValue();
  return (
    <>
     <div className=" container footer-container" data-aos="flip-up">
        <div className="row">
            <div className="col-md-4">
                <div className="page-con">
                    <h3>Explore Links</h3>
                    <NavLink to="/">Home page</NavLink>
                    <NavLink to="/about">about us</NavLink>
                    <NavLink to="/contact">Contact US</NavLink>
                    <NavLink to="/portfolio">portfolio</NavLink>
                    <NavLink to="/services">our Services</NavLink>
                    </div>
            </div>
            <div className="col-md-8">
                <div className="Address-con">
                    <h4>Address</h4>
                    <h5>{comData.companyAddress}</h5>

                    <div className='location-con'>
                        <Location/>
                    </div>
                    </div>
            </div>
        </div>
        <div className="col-12 footer-social">
                    <h3 className='pt-3'>Our Social Media</h3>
                <div className="social-icon-f">
                <Social/>
                    </div>
            </div>
        <div className="copywriteText">
      <p id="bottom-side"> &copy; 2023 {comData.companyName}. All rights reserved.</p>
      </div>
        </div>
    </>
  )
}

export default Footer;