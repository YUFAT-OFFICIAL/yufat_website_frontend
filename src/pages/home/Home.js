import React from 'react';
import Banner from './Banner';
import Causes from './Causes';
import Testimonials from './Testimonials';
import ServicesSection from './ServicesSection';

const Home = () => (
  <main>
    <Banner />
    <ServicesSection />
    <Causes />
    <Testimonials />
  </main>
);

export default Home;
