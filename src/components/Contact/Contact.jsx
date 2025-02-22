import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css'
import BackToTop from '../BackToTop/BackToTop';

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h2>Want to WOW Your Customers?</h2>
            <div className="contact-info">
              <p className="lead mb-4">Ready to transform your interview experience? Get in touch with our team today!</p>
              <div className="d-flex align-items-center mb-4">
                {/* <div className="contact-icon me-3">📞</div> */}
                {/* <div>
                  <p className="mb-0">Call us for fast support:</p>
                  <h3 className="phone">800 2563 123</h3>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Form className="contact-form">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name*" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email*" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Website" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 contact-btn">SEND MESSAGE</Button>
            </Form>
          </div>
        </div>
      </Container>

       {/* Back to Top Button */}
       <BackToTop />

    </section>
  );
}

export default Contact;