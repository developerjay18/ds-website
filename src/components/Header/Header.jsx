import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data';
import { Button, ScaleDiv, Logo } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/stateSlice';

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  return (
    <header className="px-5 lg:px-24 py-5 bg-transparent text-white flex items-center justify-between font-Poppins w-full">
      {/* logo | left-side */}
      <Logo />
      {/* nav-items | right-side */}
      <div className="right gap-16 items-center hidden lg:flex">
        <div className="nav-items flex gap-8 capitalize">
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

      {/* navlinks button */}
      <div
        className={`navlink-btn px-3 py-2 lg:hidden block ${
          state ? 'border' : ''
        }`}
        onClick={() => {
          dispatch(toggleState());
        }}
      >
        <i className={`fa-solid fa-bars fa-xl`}></i>
      </div>
    </header>
  );
}

export default Header;
