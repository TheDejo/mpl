import React, {useState} from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import {SliderData} from '../data/SliderData';
import { InfoData } from '../data/InfoData';

const Home = () => {
   return (
    <>
      <Hero slides={SliderData}/>
      <InfoSection  {...InfoData}/>
    </>
  );
};

export default Home;