import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './AboutUs.css';

import tharindu from '../../assets/Team/Tharindu.jpg'
import dhanushi from '../../assets/Team/Dhanushi.jpeg'
import chamith from '../../assets/Team/Chamith.jpg'
import vihanga from '../../assets/Team/Vihanga.jpg'
import anju from '../../assets/Team/Anju.jpg'
import ometh from '../../assets/Team/Ometh.jpg'

const teamMembers = [
  { name: 'Anju Gunathilaka', img: anju, linkedin: 'https://www.linkedin.com/in/anju-gunathilaka-5a3b22133/', twitter: '#', github: 'https://github.com/Rashmika523' },
  { name: 'Dhanushi Dewmindi', img: dhanushi, linkedin: 'https://www.linkedin.com/in/danushi-dewmindi-55bb9a27b/', twitter: '#', github: 'https://github.com/danu2003-cy' },
  { name: 'Chamith Wijewantha', img: chamith, linkedin: 'https://www.linkedin.com/in/chamith-sandeepa-72021a294/', twitter: '#', github: 'https://github.com/codingchami' },
  { name: 'Vihanga Rathnasekara', img: vihanga, linkedin: 'https://www.linkedin.com/in/vihanga-rathnasekera/', twitter: '#', github: 'https://github.com/vihanga-isuru' },
  { name: 'Ometh Welihinda', img: ometh, linkedin: 'https://www.linkedin.com/in/vinura-ometh/', twitter: '#', github: 'https://github.com/Omethw' },
  { name: 'Tharindu Madushanka', img: tharindu, linkedin: 'https://www.linkedin.com/in/tharindu-d-madushanaka-94a958306/', twitter: '#', github: 'https://github.com/TharinduDMadushanka' }
];

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <Container>
        <div className="about-section-header text-center">
          <h2 className="fade-in text-white">Meet Our Team</h2>
          <p className="lead mb-5 text-center fade-in">A passionate team dedicated to redefining interview preparation</p>
        </div>

        <div className="row text-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="team-card slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="team-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <div className="team-social">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    {/* <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a> */}
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;
