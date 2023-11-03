import React from 'react';
import { Logo, ScaleDiv } from '../index';
import { navItems, socialLinks, services, resources } from '../data';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  console.log(socialLinks);
  return (
    <footer className="px-5 lg:px-24 py-5 bg-mateBlack text-white font-Poppins flex justify-between flex-col gap-10">
      {/* tier-1 */}
      <div className="flex justify-between">
        {/* contact section and social icons section */}
        <div className="flex justify-between text-lightGrey w-full">
          <div className="flex flex-col gap-2 border-l-2 pl-4">
            <div className="text-2xl uppercase font-semibold">call us now</div>
            <div className="text-white">+91 9824336161</div>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-4">
            <div className="text-2xl uppercase font-semibold">
              sent us message
            </div>
            <div className="text-white">decentsettelment@gmail.com</div>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-4">
            <div className="text-2xl uppercase font-semibold">follow us on</div>
            <div className="text-white flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.imageURL} to={link.slug}>
                  <div
                    className="w-10 h-10 hover:shadow-lg hover:shadow-profBlue cursor-pointer rounded-lg"
                    key={link.slug}
                  >
                    <img src={link.imageURL} alt="social-image" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* tier-2 */}
      <div className="flex justify-between items-center text-lightGrey">
        {/* logo section */}
        <Logo />
        {/* navigate section */}
        <div className="nav-items flex gap-5 capitalize justify-center items-left">
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
      {/* tier-3 */}
      <div className="copyrights flex justify-between items-center">
        <div className="flex flex-row items-center gap-3">
          <p>@decentsettelment.com All Rights reserved.</p>
          <div className="flex gap-3 text-profBlue">
            <span className="hover:text-white border-b-2 hover:border-b-2 cursor-pointer">
              Terms and Conditions
            </span>
            <span className="text-white">|</span>
            <span className="capitalize hover:text-white border-b-2 hover:border-b-2 cursor-pointer">
              Privacy policy
            </span>
          </div>
        </div>

        <div className="">
          Developed by{' '}
          <Link to={'https://www.jayraiweb.com'}>
            <span className="text-profBlue border-b-2 hover:text-white cursor-pointer">
              JayRai Web
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
