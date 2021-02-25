import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Form from "./Form"

function HeroSection() {
  return (
    <div className='hero-container'>
      
      
      <div class="home-ban-container">
        <div class="home-ban-left"> <h1>Get Solar With</h1>
        <h2>15 Years Warranty</h2>
      <p>Save on Electricity Bills with Solar Energy</p>
      <div className='hero-btns'>
    {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          {/* Cheack out for your services<i className='far fa-play-circle' /> */}
          Read more
        </Button>
      </div></div>
      <div class="home-ban-right">
      <div class="home-form">
        <Form />
      </div></div>
      </div>
     
    </div>
  );
}

export default HeroSection;
