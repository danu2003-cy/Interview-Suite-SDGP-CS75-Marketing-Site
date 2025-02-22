import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'
import logo from '../../assets/Navbar/logo-2.png'

function NavigationBar() {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className='nav-logo' alt="Interview Suite" height="40" /> 
          <span>INTERVIEW SUITE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Button variant="light" className="ms-3">JOIN US</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;