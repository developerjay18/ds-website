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
  ScrollToTop,
} from '../../components';

function Home() {
  return (
    <Container>
      <ScrollToTop />
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
