import React from 'react';
import {
  Container,
  HeroSection,
  ProcessSection,
  ServiceSection,
  StatSection,
  FAQsSection,
  SliderSection
} from '../../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <ProcessSection />
      <ServiceSection />
      <StatSection />
      <FAQsSection />
      <SliderSection/>
    </Container>
  );
}

export default Home;
