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

// function Home() {
//   return (
//     <div className="main-container">
//       <div className="section">
//         <HeroSection />
//       </div>
//       <div className="section">
//         <ProcessSection />
//       </div>
//       <div className="section">
//         <ServiceSection />
//         <StatSection />
//       </div>
//       <div className="section">
//         <FAQsSection />
//       </div>
//       <div className="section">
//         <SliderSection />
//       </div>
//       <div className="section">
//         <InfoSection />
//       </div>
//       <div className="section">
//         <ContactSection />
//       </div>
//       <div className="section">
//         <Footer />
//       </div>
//     </div>
//   );
// }

export default Home;
