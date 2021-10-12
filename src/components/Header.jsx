import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import Profile from "../images/profile.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#hello">
          <Image src={Profile} width="40" fluid />
        </Navbar.Brand>
        <Navbar.Brand>Beau Behrends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="nav-about" href="#hello">
              about
            </Nav.Link>
            <Nav.Link id="nav-portfolio" href="#portfolio">
              portfolio
            </Nav.Link>
            <Nav.Link id="nav-contact" href="#cv">
              contact
            </Nav.Link>
            <Nav.Link id="nav-hobbies" href="#hobbies">
              hobbies
            </Nav.Link>
            <Nav.Link href="#socials">socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
