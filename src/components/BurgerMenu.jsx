import React from 'react';
import { useSelector } from 'react-redux';
import { navItems } from './data';
import { ScaleDiv } from './index';
import { NavLink } from 'react-router-dom';

function BurgerMenu() {
  const state = useSelector((state) => state.menuClick);

  return (
    <div
      className={`bg-mateBlack absolute h-[50vh] w-full opacity-70 flex justify-center font-Poppins z-10 -mt-5 ${
        state ? 'block' : 'hidden'
      }`}
    >
      <div className="nav-items flex flex-col items-center justify-center text-2xl gap-10 capitalize text-white">
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
    </div>
  );
}

export default BurgerMenu;
