import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Vision.css";

import challange from '../../assets/Vision/struggle.jpg'
import solution from '../../assets/Vision/not-struggle.jpg'

const Vision = () => {
  return (
    <section className="vision-section">
      <Container>
        {/* Vision Section */}
        <div className="vision-header text-center">
          <h2>🔍 The Vision</h2>
          <p>
            <strong>Interview Suite</strong> is an AI-powered interview preparation platform designed to help fresh IT interns 
            practice mock interviews in a structured and realistic way. Our mission is to boost confidence and improve interview performance 
            through AI-driven feedback, real-time analysis, and an interactive learning experience.
          </p>
        </div>

        {/* Challenge & Solution */}
        <Row className="mt-5">
          {/* Challenge */}
          <Col md={6} className="challenge">
            <div className="content-box">
              <h3 className="text-white">⚠️ The Challenge</h3>
              <p>
              Many fresh IT interns struggle to succeed in real interviews due to a lack of structured preparation.  
                The most common issues include:
          
              <ul>
                <li>😰 <strong>Interview Anxiety:</strong> Fear of facing technical and HR interviews.</li>
                <li>⏳ <strong>Poor Time Management:</strong> Difficulty managing response times effectively.</li>
                <li>💬 <strong>Limited Real-World Feedback:</strong> No access to personalized improvement insights.</li>
              </ul></p>

              <div className="stats">
                <div className="stat-box">🕒 60% <br /> Struggle with time management</div>
                <div className="stat-box">💬 75% <br /> Lack real interview experience</div>
              </div>

              <img src={challange} alt="Interview Struggles" className="challenge-img mt-4" />
              <p className="text-muted">Common struggles faced by fresh IT interns</p>

            </div>
          </Col>

          {/* Solution */}
          <Col md={6} className="solution">
            <div className="content-box">
              <h3 className="text-white">✅ Our Solution</h3>
              <p>
                <strong>Interview Suite</strong>is a next-generation AI-powered platform that transforms how IT interns prepare for interviews.  
                Our system offers:
                <ul>
                <li>🤖 <strong>AI-Generated Questions:</strong> Tailored for software engineering & CS domains.</li>
                <li>🎤 <strong>Voice-to-Text Answering:</strong> Practice speaking responses for technical questions.</li>
                <li>👀 <strong>AI-Powered Engagement Analysis:</strong> Tracks eye contact & body language.</li>
                <li>📊 <strong>Performance Reports:</strong> Get detailed feedback & improvement suggestions.</li>
                <li>🎙️ <strong>Interactive Mock Interviews:</strong> Voice-based Q&A with real-time grading.</li>
                <li>🏆 <strong>Gamified Learning:</strong> Earn badges with progress tracking & leaderboards.</li>
                </ul>
                {/* <strong>...................</strong> */}
              </p>
              <img src={solution} alt="AI-Powered Mock Interviews" className="solution-img mt-5" />
              <p className="text-muted">Experience real-world interview simulations</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vision;
