import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navItems, navItems2 } from './data';
import { ScaleDiv } from './index';
import { Link as RLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { toggleState } from '../store/stateSlice';

function BurgerMenu() {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  const isTNC = location.pathname === '/terms-and-conditions';
  const isPP = location.pathname === '/privacy-policy';

  console.log(location);

  return (
    <div
      className={`bg-[#000000] absolute h-[70vh] w-full opacity-90 flex justify-center font-Poppins z-10 -mt-5 ${
        state ? 'block' : 'hidden'
      }`}
    >
      {/* TNC and PP page burger menu  */}
      {(isTNC || isPP) && (
        <div className="nav-items flex flex-col items-center justify-center text-2xl gap-10 capitalize text-white pt-20">
          {navItems2.map((item) => (
            <ScaleDiv key={item.name}>
              <RLink
                key={item.name}
                to={item.slug}
                className=""
                onClick={() => dispatch(toggleState())}
              >
                {item.name}
              </RLink>
            </ScaleDiv>
          ))}
        </div>
      )}
      {/* home page burger menu  */}
      {!isTNC && !isPP && (
        <div className="nav-items flex flex-col items-center justify-center text-2xl gap-10 capitalize text-white pt-20">
          {navItems.map((item) => (
            <ScaleDiv key={item.name}>
              <Link
                key={item.name}
                to={item.slug}
                onClick={() => dispatch(toggleState())}
              >
                {item.name}
              </Link>
            </ScaleDiv>
          ))}
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
