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
  Footer,
  Header,
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
      <Footer />
    </Container>
  );
}

export default Home;
