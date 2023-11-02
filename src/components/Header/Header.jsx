import React from 'react';
import { Logo } from '../../assets';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data';
import { Button, ScaleDiv } from '../index';

function Header() {
  return (
    <header className="px-24 py-5 bg-mateBlack text-white flex items-center justify-between font-Poppins">
      {/* logo | left-side */}
      <div className="logo w-[15%]">
        <img src={Logo} alt="company-logo" />
      </div>
      {/* nav-items | right-side */}
      <div className="right flex gap-16 items-center">
        <div className="nav-items flex gap-8">
          {navItems.map((item) => (
            <ScaleDiv key={item.name}>
              <NavLink
                key={item.name}
                to={item.slug}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-profBlue pb-2' : ''
                }
              >
                {item.name}
              </NavLink>
            </ScaleDiv>
          ))}
        </div>
        <div className="btn">
          <Button>Whatsapp now</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
