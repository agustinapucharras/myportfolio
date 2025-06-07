import React from "react";
import "../../css/MainHome.css";
import myImage from "../../images/me.JPG";
import CardProjects from "../CardProjects";


const MainHome = () => {
  return (
    <div className="divMainHome ">
      <div className="divMainHome d-flex justify-content-evenly align-items-center pt-3 ">

        <div className="text-center text-light">
          <h2>Hello! </h2>
          <h2>Welcome to My Portfolio</h2>
          <h2>My name is Agustina Pucharras.</h2>
          <h2>
            I am a <span className="textMainHome">Full-Stack Developer </span>
          </h2>
        </div>
        </div>
        <hr className="hr" />
        <div>
          <h2 className="text-center projects mb-3">PROJECTS</h2>
          <CardProjects/>
        </div>

        
      
    </div>
  );
};

export default MainHome;
