import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/jooba_logo.png";

function NavBar() {
  return (
    <Navbar
      className="shadow-sm"
      style={{
        backgroundColor: "#FFFFFF",
        transition: "all 0.3s ease",
      }}
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="JOOBA Logo"
            style={{
              height: "40px",
              width: "auto",
              transition: "transform 0.3s ease",
            }}
            className="hover-scale"
          />
        </Navbar.Brand>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-primary">
            ENG
          </button>
          <button type="button" className="btn btn-outline-primary">
            Hebrew
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
