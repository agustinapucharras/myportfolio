import React from "react";
import "../../css/MainHome.css";
import myImage from "../../images/me.JPG";
import CardProjects from "../CardProjects";
import useThemeStore from "../../store/authStore"


const MainHome = () => {
  const { background } = useThemeStore();

  return (
    <div className={`divMainHome ${background ? "dark" : "light"}`}>
      <div className="divMainHome d-flex justify-content-evenly align-items-center pt-3 ">
        <div className={`${background} ? "dark" : "light"`}>
          <h2>Hello! </h2>
          <h2>Welcome to My Portfolio</h2>
          <h2>My name is Agustina Pucharras</h2>
          <h2>
            I am a <span className="textMainHome">Full-Stack Developer </span>
          </h2>
        </div>
      </div>
      <hr className="hr" />
      <div>
        <h2
          className={`text-center projects mb-3 ${
            background ? "dark" : "light"
          }`}
        >
          PROJECTS
        </h2>

        <CardProjects />
      </div>
    </div>
  );
};

export default MainHome;
