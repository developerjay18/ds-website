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
  Header,
  Footer,
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
      <Footer />
    </Container>
  );
}

export default Home;
