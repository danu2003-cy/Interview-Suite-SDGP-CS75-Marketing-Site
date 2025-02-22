import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navbar/Navbar';
import Vision from './components/Vision/Vision';
import DemoVideo from './components/DemoVideo/DemoVideo';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Hero />
      {/* <Stats /> */}
      <Features />
      <DemoVideo/>
      <AboutUs />
      <Vision/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;