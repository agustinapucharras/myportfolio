import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProjects from "../components/CardProjects";
import useThemeStore from "../store/authStore";
import "../css/Projects.css";

const Projects = () => {
  const { background } = useThemeStore();
  return (
    <div>
      <Header />
      <div className={`divContainerProjects ${background ? "dark" : "light"}`}>
        <h2 className="aboutMe text-center">MY PROJECTS</h2>
        <h5 className="text-center pt-5 py-5 mb-0">
          Here you can find some of the projects I’ve worked on. Each one
          reflects my passion for coding, problem-solving, and continuous
          learning. Feel free to explore them!
        </h5>
      </div>

      <CardProjects />
      <Footer />
    </div>
  );
};

export default Projects;
