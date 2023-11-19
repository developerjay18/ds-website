import React from 'react';
import {
  Container,
  HeroSection,
  ProcessSection,
  ServiceSection,
  StatSection,
  FAQsSection,
  SliderSection,
  InfoSection,
  ContactSection,
  ListSection,
  Header
} from '../../components';

function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <ProcessSection />
      <ServiceSection />
      <StatSection />
      <FAQsSection />
      <SliderSection />
      <InfoSection />
      <ContactSection />
      <ListSection />
    </Container>
  );
}

export default Home;
