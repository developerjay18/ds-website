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
} from '../../components';

// function Home() {
//   return (
//     <Container>
//       <Header />
//       <HeroSection />
//       <ProcessSection />
//       <ServiceSection />
//       <StatSection />
//       <FAQsSection />
{
  /* <SliderSection /> */
}
//       <InfoSection />
//       <ContactSection />
//       <ListSection />
//       <Footer />
//     </Container>
//   );
// }

function Home() {
  return (
    <div className="main-container">
      <div className="section">
        <HeroSection />
      </div>
      <div className="section">
        <ProcessSection />
      </div>
      <div className="section">
        <ServiceSection />
      </div>
      <div className="section">
        <StatSection />
        <FAQsSection />
      </div>
      <div className="section">
        <SliderSection />
      </div>
      <div className="section">
        <InfoSection />
      </div>
      <div className="section">
        <ContactSection />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
