import React from 'react';
import { Logo } from '../../assets';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data';
import { Button, ScaleDiv } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/stateSlice';

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  return (
    <header className="px-5 lg:px-24 py-5 bg-mateBlack text-white flex items-center justify-between font-Poppins fixed top-0 w-full">
      {/* logo | left-side */}
      <div className="logo w-[40%] md:w-[22%] lg:w-[15%]">
        <img src={Logo} alt="company-logo" />
      </div>
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