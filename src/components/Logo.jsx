import React from 'react';
import { Logo as logo } from '../assets';

function Logo() {
  return (
    <div className="logo w-[40%] md:w-[22%] lg:w-[20%]">
      <img src={logo} alt="company-logo" />
    </div>
  );
}

export default Logo;
