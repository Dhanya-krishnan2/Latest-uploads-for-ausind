import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

import Footer from '../Footer';
import VideoUpdate from './VideoUpdate.js';
// this page is to render home elements in the home page and adding each session in the order
function Home() {
  return (
    <>
      <HeroSection />
      <VideoUpdate />
      // <Cards />
      <Footer />
    </>
  );
}

export default Home;
