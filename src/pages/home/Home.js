import React from 'react';
import Banner from './Banner';
import Causes from './Causes';
import Testimonials from './Testimonials';
import Services_section from './ServicesSection';

const Home = () => (
  <main>
    <Banner />
    <Services_section />
    <Causes />
    <Testimonials />
  </main>
);

export default Home;
