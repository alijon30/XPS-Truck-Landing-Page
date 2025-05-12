import React from 'react';
import Header from './utils/Header';
import Hero from './utils/Hero';
import About from './utils/About';
import Fleet from './utils/Fleet';
import Reviews from './utils/Reviews';
import Contact from './utils/Contact';
import Footer from './utils/Footer';

export default function LandingPage() {
    return (
        <div className="text-gray-800">
          <Header />
          <Hero />
          <About />
          <Fleet />
          <Reviews/>
          <Contact />
          <Footer />
        </div>
      );
}
