import React from "react";
import "../../css/MainAboutMe.css";
import myImage from "../../images/me.JPG";
import axios from "axios";
import { BASE_URL_PERSINFO } from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";
import CardSkills from "../CardSkills";
import useThemeStore from "../../store/authStore";

const MainAboutMe = () => {
  const [data, setData] = useState({});
  const { background } = useThemeStore();

  const getPersonalInfor = async () => {
    try {
      let respuesta = await axios.get(BASE_URL_PERSINFO);
      let response = respuesta.data;
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPersonalInfor();
  }, []);

  return (
    <div className={`divContainerAboutMe ${background ? "dark" : "light"}`}>
      <div className={`d-flex justify-content-around align-items-center pt-4 ${background ? "dark" : "light"}`}>
        <div className={`text-center  ${background ? "dark" : "light"}`}>
          <h2 className={`aboutMe text-center ${background ? "dark" : "light"}`}>ABOUT ME</h2>
          <h4 className="whoAmI">Who Am I?</h4>
          <p className={`text-center  ${background ? "dark" : "light"}`}>
            My name is {data.name} {data.surname}.
          </p>
          <p className={`text-center  ${background ? "dark" : "light"}`}>
            {" "}
            I am {data.age} years old and a passionate software developer.
          </p>
          <p className={`text-center  ${background ? "dark" : "light"}`}>
            I enjoy working in a team and learning new things every day
          </p>
          
          <br />
         
        </div>
        <div>
          <img src={myImage} alt="" className="meAboutMe" />
        </div>
      </div>
      <h2 className="skills mb-3">SKILLS</h2>

        <CardSkills />

        
     
      
    </div>
  );
};

export default MainAboutMe;
