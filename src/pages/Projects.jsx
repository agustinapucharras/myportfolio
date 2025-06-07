import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProjects from "../components/CardProjects";

const Projects = () => {
  return (
    <div>
      <Header />
      <h2 className="aboutMe text-center">MY PROJECTS</h2>
      <h5 className="text-center text-light mt-5 mb-5 ">
        Here you can find some of the projects I’ve worked on. Each one reflects
        my passion for coding, problem-solving, and continuous learning. Feel
        free to explore them!
      </h5>
      <CardProjects />
      <Footer />
    </div>
  );
};

export default Projects;
