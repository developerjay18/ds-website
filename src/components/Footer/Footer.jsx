import React from 'react';
import { ScaleDiv } from '../index';
import { navItems, socialLinks } from '../data';
import { Link, NavLink } from 'react-router-dom';
import { Logo, Gmail, PCall } from '../../assets';

function Footer() {
  console.log(socialLinks);
  return (
    <footer className="px-5 lg:px-24 py-5 font-Poppins flex justify-between gap-10 text-lightGrey flex-col bg-black-gr">
      <div className="upper-section flex justify-between gap-10">
        {/* tier-1 */}
        <div className="w-[33%] flex flex-col bg-[#333333] p-5 rounded-md">
          <div className="image">
            <img src={Logo} alt="compnay-logo" className="w-[47%]" />
          </div>
          <p className="mt-2 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla
            recusandae quae consectetur autem distinctio magnam asperiores neque
            velit explicabo!
          </p>
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

        {/* tier-2 */}
        <div className="w-[30%] flex flex-col gap-10 pt-5">
          <div className="mail  flex gap-5 border-l-2 pl-2">
            <div className="w-[10%]">
              <img src={Gmail} alt="mail-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                Email us Now
              </div>
              <div>decentsettelment@gmail.com</div>
            </div>
          </div>
          <div className="nav-items flex flex-col gap-4 capitalize">
            <h2 className="capitalize text-2xl font-semibold border-b-2 w-1/2 pb-2">
              Useful links
            </h2>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <ScaleDiv key={item.name} className={'pl-2'}>
                  <NavLink
                    key={item.name}
                    to={item.slug}
                    className={({ isActive }) =>
                      isActive ? 'border-b-2 border-profBlue pb-2' : ''
                    }
                  >
                    &gt; {item.name}
                  </NavLink>
                </ScaleDiv>
              ))}
            </div>
          </div>
        </div>

        {/* tier-3 */}
        <div className="w-[33%] pt-5 flex flex-col gap-10">
          <div className="call  flex gap-5 border-l-2 pl-2">
            <div className="w-[10%]">
              <img src={PCall} alt="call-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                call us Now
              </div>
              <div>+91 9824336161</div>
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
                className="flex flex-col gap-3 w-[80%] text-mateBlack"
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
                  className="capitalize rounded-lg w-1/4 ml-1 px-1 py-2 bg-profBlue hover:bg-darkProfBlue text-white"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-section flex justify-between">
        <div className="flex gap-5">
          <span>@decentsettelment.com All Rights reserved.</span>
          <span className="flex gap-3">
            <Link className="text-profBlue hover:text-white">
              Terms and conditions
            </Link>
            <span>|</span>
            <Link className="text-profBlue hover:text-white">
              Privacy Policy
            </Link>
          </span>
        </div>
        <div className="">
          Developed by{' '}
          <span>
            <Link className="text-profBlue hover:text-white">JayRai web</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
