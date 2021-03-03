import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

import Footer from '../Footer';
import VideoUpdate from './VideoUpdate.js';
// import Addcards from '../SolarSelling.js';
import MoreDeets from '../SolarSelling.js';
// import CardGridExt from '../CardGridExt.js';
// import CardGridExt from '../CardGridExt.js';
// this page is to render home elements in the home page and adding each session in the order
function Home() {
  return (
    <>
      <HeroSection />
       <VideoUpdate />
       
           <MoreDeets />
      <Footer />
    </>
  );
}

export default Home;
