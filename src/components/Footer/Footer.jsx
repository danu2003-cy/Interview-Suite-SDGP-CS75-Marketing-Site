import React from 'react';
import { Container, Nav, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

import logo from '../../assets/Navbar/logo-2.png';

function Footer() {
  // Function to handle email subscription using mailto
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const userEmail = document.getElementById("userEmail").value;

    if (userEmail) {
      const mailtoLink = `mailto:dewmindidhanushi2003@gmail.com?subject=Newsletter Subscription&body=Hello, I would like to subscribe to the newsletter. My email: ${userEmail}`;
      window.location.href = mailtoLink;
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer">
      <Container>
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-3 footer-left">
            <img src={logo} alt="Interview Suite" className="footer-logo" />
            <p>Empowering careers through AI driven interview preparation.</p>
          </div>

          {/* Sitemap */}
          <div className="col-md-3 footer-right">
            <h5>SITEMAP</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </div>

          {/* Social Links */}
          <div className="col-md-3">
            <h5>SOCIALS</h5>
            <Nav className="flex-column">
              <Nav.Link href="#"><FaFacebook /> Facebook</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/interview-suite-a9363933b/" target='_blank'><FaLinkedin /> LinkedIn</Nav.Link>
              <Nav.Link href="https://www.instagram.com/interviewsuite/" target='_blank'><FaInstagram /> Instagram</Nav.Link>
              <Nav.Link href="#"><FaTwitter /> Twitter</Nav.Link>
            </Nav>
          </div>

          {/* Contact Form */}
          <div className="col-md-3 footer-down">
            <h5>CONTACT US</h5>
            <Form className="newsletter-form" onSubmit={handleEmailSubmit}>
              <Form.Control type="email" id="userEmail" placeholder="Enter your email address" required />
              <Button variant="primary" type="submit" className='newsletter-form-btn'>→</Button>
            </Form>
            <p className="phone">interviewsuite@gmail.com</p>
            <p className="copyright">© 2024 Interview Suite. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
