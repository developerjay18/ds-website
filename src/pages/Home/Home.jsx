import React from 'react';
import {
  Container,
  HeroSection,
  ProcessSection,
  ServiceSection,
  StatSection,
  FAQsSection,
} from '../../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <ProcessSection />
      <ServiceSection />
      <StatSection />
      <FAQsSection />
    </Container>
  );
}

export default Home;
