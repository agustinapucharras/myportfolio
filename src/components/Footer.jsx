import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <br />
      <hr className="hr " />
      <div className="flex justify-center items-center divFooter">
        <a href="https://www.linkedin.com/in/agustina-nahir-pucharras-4087a8209/" target="_blank"><i className="fa-brands fa-linkedin m-4 icon"></i></a>
        <a href="https://github.com/agustinapucharras" target="_blank"><i className="fa-brands fa-github m-4 icon"></i></a>
        <a href="https://wa.me/5493814060647" target="_blank"><i className="fa-brands fa-whatsapp m-4 icon"></i></a>
      </div>
  
    </div>
);    
};

export default Footer;
