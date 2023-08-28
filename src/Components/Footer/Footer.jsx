import React from 'react';
import { objectValue } from '../../Context Hook/Context';
import"./Footer.css";
import Social from '../Introduction/Social-Icon';
import Location from './Location';

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
                    <a href="/">Home page</a>
                    <a href="/about">about us</a>
                    <a href="/contact">Contact US</a>
                    <a href="/portfolio">portfolio</a>
                    <a href="/services">our Services</a>
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