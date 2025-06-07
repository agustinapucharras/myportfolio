import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Contact.css";
import useThemeStore from "../store/authStore";


const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(null)
  const { background } = useThemeStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting me, ${name}!😃 . I will get back to you at ${email} or ${phone}.`)
    e.target.reset()
  };


  return (
    <div>
      <Header />
      
      <div className={`containerContact pt-4 ${background ? "dark" : "light"}`} >
        <h2 className="aboutMe text-center">CONTACT ME</h2>
        <Form onSubmit={handleSubmit}>

          <div
            className="container mt-3"
            controlId="formBasicEmail"
          >
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Label style={{color:"white"}}>Name</Form.Label>
            </div>
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Control
                type="name"
                style={{ width: "30%" }}
                placeholder="Your name"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className="container mt-3"
            controlId="formBasicEmail"
          >
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Label style={{color:"white"}}>Email address</Form.Label>
            </div>
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Control
                type="email"
                style={{ width: "30%" }}
                placeholder="Your email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div
            className="container mt-3"
            controlId="formBasicEmail"
          >
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Label style={{color:"white"}}>Phone number</Form.Label>
            </div>
            <div className="d-flex gap-2 justify-content-evenly">
              <Form.Control
                type="tel"
                style={{ width: "30%" }}
                placeholder="Your phone number"
                name="phone"
                onChange={(e)=>setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Button type="submit" className="btnContact mt-4">
              Send
            </Button>
          </div>
        </Form>
      </div>
  
      <Footer />
    </div>
  );
};

export default Contact;
