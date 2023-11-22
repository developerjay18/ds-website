import React from 'react';
import { navItems } from '../data';
import { Button, ScaleDiv } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/stateSlice';
import { Link } from 'react-scroll';
import { Logo } from '../../assets';

function Header({ BG }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  return (
    <header
      className={`
      ${BG ? `${BG}` : 'bg-transparent'}
          px-5 lg:px-24 py-5  text-white flex items-center justify-between font-Poppins w-full
      `}
    >
      {/* logo | left-side */}
      <div className="image w-[30%]">
        <img src={Logo} alt="compnay-logo" className="w-[70%]" />
      </div>
      {/* nav-items | right-side */}
      <div className="right pr-8 gap-16 items-center hidden lg:flex w-[70%]">
        <div className="nav-items flex gap-10 capitalize w-[80%]">
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
        <div className="btn w-[32%]">
          <Button className={'w-full'}>Whatsapp now</Button>
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
