import React, { useState, useEffect } from "react";
import { BiUpArrowAlt} from "react-icons/bi";
import "./ScrollButton.css";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (document.documentElement.scrollTop > 300 ||window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <BiUpArrowAlt/>
      
    </div>
  );
}

export default ScrollButton;
