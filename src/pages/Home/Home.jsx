import React from 'react';
import {
  Container,
  HeroSection,
  ProcessSection,
  ServiceSection,
  StatSection
} from '../../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <ProcessSection />
      <ServiceSection />
      <StatSection/>
    </Container>
  );
}

export default Home;
