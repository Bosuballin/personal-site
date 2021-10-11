import React, { Profiler } from "react";
import { Nav, Navbar, NavDropdown, Container, Image } from "react-bootstrap";
import Profile from "../images/profile.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#hello">
          <Image src={Profile} width="70" className="me-4" fluid />
        </Navbar.Brand>
        <Navbar.Text>Beau Behrends</Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#hello">Hello</Nav.Link>
            <Nav.Link href="#cv">CV</Nav.Link>
            <NavDropdown
              alignCenter
              title="Portfolio"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#cv">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cv">Contact Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#hobbies">HOBBIES</Nav.Link>
            <Nav.Link eventKey={2} href="#socials">
              SOCIALS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
