import React from "react";
import "../../css/MainAboutMe.css";
import myImage from "../../images/me.JPG";
import axios from "axios";
import { BASE_URL_PERSINFO } from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";

const MainAboutMe = () => {
  const [data, setData] = useState({});

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
    <div className="d-flex justify-content-around mt-4">
      <div className="text-center">
        <h2 className="aboutMe">ABOUT ME</h2>
        <h4 className="whoAmI">Who Am I?</h4>
        <p>
          My name is {data.name} {data.surname}.
        </p>
        <p> I am {data.age} years old and a passionate software developer.</p>
        <p>I enjoy working in a team and learning new things every day</p>
        <h2 className="aboutMe">SKILLS</h2>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
      <div>
        <img src={myImage} alt="" className="meAboutMe" />
      </div>
    </div>
  );
};

export default MainAboutMe;
