import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import Typed from 'typed.js';
import './Hero.css';

import logo from '../../assets/Home/logo.png';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const particlesInit = async (main) => {
    try {
      await loadFull(main);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  const particlesConfig = {
    fpsLimit: 120,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#9D4EDD" },
      links: { enable: true, color: "#5A189A", opacity: 0.4, distance: 150 },
      move: { enable: true, speed: 1, direction: "none" },
      size: { value: 2 },
      opacity: { value: 0.5 }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 1 } } }
    },
    background: { color: "transparent" },
    detectRetina: true
  };

  // Typed.js Effect
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: ["Ace Your Next Interview with Us!"],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: false,
    });

    return () => {
      typedTitle.destroy();
    };
  }, []);

  return (
    <section className="hero" id='home'>
      {/* Particles Effect */}
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="particles-bg" />

      <Container>
        <motion.div 
          className="hero-content"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* Animated Hero Logo */}
          <motion.div 
            className="hero-logo"
            animate={{ y: [0, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img src={logo} alt="Logo" />
          </motion.div>

          <div className="hero-caption">
            <h1 ref={titleRef} className="coding-effect"></h1>
            <p ref={subtitleRef} className="coding-effect"></p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="btn btn-light btn-lg glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
