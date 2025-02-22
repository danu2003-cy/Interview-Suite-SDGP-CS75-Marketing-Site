import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaRobot, FaChartLine, FaGamepad, FaBrain, FaMicrophone, FaTrophy, FaFolderOpen, FaUserCheck, FaCogs, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import "./Features.css";

function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

  const features = [
    { icon: <FaRobot />, title: "AI-Powered Mock Interviews", text: "Practice with AI-driven simulations for real interview scenarios." },
    { icon: <FaChartLine />, title: "Real-Time Feedback", text: "Get instant insights on voice clarity, confidence, and body language." },
    { icon: <FaGamepad />, title: "Gamified Preparation", text: "Track progress, earn points, and stay motivated with challenges." },
    { icon: <FaBrain />, title: "Dynamic Question Generation", text: "Get AI-generated questions tailored to your skills and job role." },
    { icon: <FaMicrophone />, title: "Voice-to-Text Answering", text: "Respond using voice input, and AI will analyze and evaluate your answers." },
    { icon: <FaTrophy />, title: "Leaderboard & Achievements", text: "Compete with peers, earn badges, and climb the ranks." },
    { icon: <FaFolderOpen />, title: "Past Interview Review", text: "Access and analyze your previous interview sessions for improvement." },
    { icon: <FaUserCheck />, title: "Personalized Performance Reports", text: "Receive AI-generated insights on strengths and improvement areas." },
    { icon: <FaCogs />, title: "Customized Interview Tracks", text: "Choose your preferred interview difficulty level and question categories." },
    
  ];

  return (
    <section className="features text-center" id="features">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2>We're Interview Suite</h2>
          <h3>AI-Powered Mock Interview Platform</h3>
        </motion.div>

        <motion.div
          className="feature-cards pt-5 row"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <motion.div variants={cardVariants}>
                <Tilt options={tiltOptions}>
                  <Card className="feature-card">
                    <Card.Body>
                      <div className="feature-icon">{feature.icon}</div>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Tilt>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Features;
