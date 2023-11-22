import React from 'react';
import { navItems } from '../data';
import { Button, ScaleDiv, Logo } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/stateSlice';
import { Link } from 'react-scroll';

function Header({ BG }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  return (
    <header
      className={`
      ${BG ? `${BG}` : 'bg-transparent'}
          px-5 lg:px-24 py-5  text-white flex items-center justify-between font-Poppins w-full absolute
      `}
    >
      {/* logo | left-side */}
      <Logo />
      {/* nav-items | right-side */}
      <div className="right pr-12 gap-16 items-center hidden lg:flex">
        <div className="nav-items flex gap-8 capitalize">
          {navItems.map((item) => (
            <ScaleDiv key={item.name} className={'cursor-pointer'}>
              <Link
                key={item.name}
                to={item.slug}
                className="text-lg hover:border-b-2 hover:border-profBlue"
                smooth={true}
                duration={600}
              >
                {item.name}
              </Link>
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
