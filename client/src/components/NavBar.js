import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/jooba_logo.png";

function NavBar() {
  return (
    <Navbar
      style={{
        backgroundColor: "FFFFFF",
        transition: "color 0.3s ease",
      }}
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="JOOBA Logo"
            style={{
              height: "50px",
              width: "auto",
            }}
          />
        </Navbar.Brand>
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" class="btn btn-outline-dark">
            ENG
          </button>
          <button type="button" class="btn btn-outline-dark">
            Hebrew
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
