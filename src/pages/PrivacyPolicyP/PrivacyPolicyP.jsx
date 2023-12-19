import React from 'react';
import {
  Header,
  PrivacyPolicy,
  Container,
  ScrollToTop,
  Header2,
} from '../../components';

function PrivacyPolicyP() {
  return (
    <Container>
      <ScrollToTop />
      <Header2 BG={'bg-black-gr'} />
      <PrivacyPolicy />
    </Container>
  );
}

export default PrivacyPolicyP;
