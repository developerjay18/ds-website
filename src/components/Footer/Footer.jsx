import React from 'react';
import { ScaleDiv, ListSection } from '../index';
import { navItems, socialLinks } from '../data';
import { NavLink } from 'react-router-dom';
import { Logo, Gmail, RoundWP } from '../../assets';
import { Link } from 'react-scroll';
import { Link as RLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <ListSection />
      <footer className="px-5 lg:px-24 py-5 font-Poppins flex justify-between gap-10 text-lightGrey flex-col bg-black-gr">
        <div className="upper-section flex lg:flex-row flex-col justify-between gap-10">
          {/* tier-1 */}
          <div className=" w-full lg:w-[33%] flex flex-col bg-[#333333] p-5 rounded-md gap-2">
            <div className="image">
              <img src={Logo} alt="compnay-logo" className="w-[70%]" />
            </div>
            <p className="mt-2 mb-7">
              We&apos;re a modern fintech company aiming to help people in
              financial trouble get away from their debts. we&apos;re dedicated
              to creating a world where financial freedom is within reach for
              everyone, irrespective of their debt load
            </p>
            <div className="flex flex-col gap-2 border-l-2 pl-4">
              <div className="text-2xl uppercase font-semibold">
                follow us on
              </div>
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

          {/* tier-2 */}
          <div className="lg:w-[30%] flex flex-col gap-10 pt-5">
            <div className="mail  flex gap-5 border-l-2 pl-2">
              <div className="w-[10%]">
                <img src={Gmail} alt="mail-icon" />
              </div>
              <div>
                <div className="text-2xl uppercase font-semibold">
                  Email us Now
                </div>
                <RLink
                  to={
                    'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=decentsettlement@gmail.com'
                  }
                >
                  <div className="hover:text-white text-profBlue">
                    decentsettelment@gmail.com
                  </div>
                </RLink>
              </div>
            </div>
            <div className="nav-items flex flex-col gap-4 capitalize">
              <h2 className="capitalize text-2xl font-semibold border-b-2 w-1/2 pb-2">
                Useful links
              </h2>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <ScaleDiv
                    key={item.name}
                    className={
                      'pl-2 w-[35%] hover:text-profBlue cursor-pointer'
                    }
                  >
                    <Link
                      key={item.name}
                      to={item.slug}
                      smooth={true}
                      duration={600}
                      className={({ isActive }) =>
                        isActive ? 'border-b-2 border-profBlue pb-2' : ''
                      }
                    >
                      &gt; {item.name}
                    </Link>
                  </ScaleDiv>
                ))}
              </div>
            </div>
          </div>

          {/* tier-3 */}
          <div className="w-full lg:w-[33%] pt-5 flex flex-col gap-10">
            <div className="call  flex gap-5 border-l-2 pl-2">
              <div className="w-[10%]">
                <img src={RoundWP} alt="call-icon" />
              </div>
              <div>
                <div className="text-2xl uppercase font-semibold">
                  call us Now
                </div>
                <RLink to={'tel:+919824336161'}>
                  <div className="hover:text-white text-profBlue cursor-pointer">
                    +91 9824336161
                  </div>
                </RLink>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="capitalize text-2xl font-semibold border-b-2 w-2/3 pb-2">
                Message us now
              </h2>
              <div className="form">
                <form
                  action="#"
                  method="post"
                  className="flex flex-col gap-3 lg:w-[80%] text-mateBlack"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" p-2 rounded-lg"
                    placeholder="email address"
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="2"
                    className=" p-3 rounded-lg"
                  >
                    Message
                  </textarea>
                  <button
                    type="submit"
                    className="capitalize rounded-lg w-1/4 ml-1 px-1 py-2 bg-profBlue hover:bg-white hover:text-mateBlack text-white hover:shadow-lg hover:shadow-profBlue"
                  >
                    send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-section flex justify-between lg:flex-row flex-col">
          <div className="flex gap-2 lg:gap-5 lg:flex-row flex-col">
            <span>@decentsettelment.com All Rights reserved.</span>
            <span className="flex gap-3 justify-center">
              <NavLink
                to={'/terms-and-conditions'}
                className="text-profBlue hover:text-white"
              >
                Terms and conditions
              </NavLink>
              <span>|</span>
              <NavLink
                to={'/privacy-policy'}
                className="text-profBlue hover:text-white"
              >
                Privacy Policy
              </NavLink>
            </span>
          </div>
          <div className="pt-5 lg:pt-0 text-center lg:text-left">
            Developed by{' '}
            <span>
              <NavLink
                to={'https://www.jayraiweb.com'}
                className="text-profBlue hover:text-white"
              >
                JayRai web
              </NavLink>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
