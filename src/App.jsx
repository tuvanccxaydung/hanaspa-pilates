import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg-cream selection:bg-brand-primary selection:text-white font-sans text-brand-text">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
