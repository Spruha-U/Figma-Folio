/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import '../src/index.css';


const App = () => {

  return (
    <div className="bg-maroon text-gold">
      <Header />
      < HeroSection />
      <Footer />
    </div>
  );
};

export default App;
