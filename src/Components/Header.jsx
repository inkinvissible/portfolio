import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="header">
      <Container>
        <Navbar.Brand href="#home">AM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#portfolio">Portafolio</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;