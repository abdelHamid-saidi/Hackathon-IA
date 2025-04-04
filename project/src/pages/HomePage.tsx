import React from 'react';
import Hero from '../components/Hero';
import ImpactStories from '../components/ImpactStories';
import DailyChallenges from '../components/DailyChallenges';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImpactStories />
      <DailyChallenges />
      <Testimonials />
      <VideoSection />
      <CallToAction />
    </>
  );
};

export default HomePage;