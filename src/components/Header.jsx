import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useThemeStore from "../store/authStore";

const Header = () => {
  const { background, toggleTheme } = useThemeStore();
  return (
    <div>
      <Navbar expand="lg" className={`navBarGeneral ${background ? 'dark-theme' : 'light-theme'}`}>
        <Container className="p-2 " >
          <Navbar.Brand as={Link} to="/" className="navBarGeneral pagesMenu fontMyPort">
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="d-flex justify-content-center ">
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="px-4 pagesMenu navBarGeneral">
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about-me" className="px-4 pagesMenu navBarGeneral">
                  <i className="fa-solid fa-person"></i> About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="px-4 pagesMenu navBarGeneral">
                  <i className="fa-solid fa-file"></i> Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="px-4 pagesMenu navBarGeneral">
                 <i className="fa-solid fa-envelope"></i> Contact
                </Nav.Link>
                <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn btn btn-sm ms-auto"
              style={{ whiteSpace: "nowrap" }}
            >
              {background ? <i className="fa-solid fa-sun" style={{color:"white"}}></i> : <i className="fa-solid fa-moon " style={{color:"black"}}></i> }
            </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
