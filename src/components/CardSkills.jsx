import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL_PERSINFO } from "../constants/constants";
import Card from "react-bootstrap/Card";

const CardSkills = () => {
  const [tech, setTech] = useState([]);

  const getPersonalInfor = async () => {
    try {
      let respuesta = await axios.get(BASE_URL_PERSINFO);
      let response = respuesta.data;
      setTech(response.technologies);
      //console.log(response.technologies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPersonalInfor();
  }, []);
  return (
    <div className="d-flex justify-content-around flex-wrap"> 
      {tech.map((technology, index) => (
        <Card style={{ width: "18rem" }} className="cardProject">
          <Card.Img
            variant="top"
            src={technology.image}
            className="imgCardProject"
          />
          <Card.Body className="cardBodyProject">
            <Card.Title className="text-center cardTitle">
              {technology.name}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardSkills;
