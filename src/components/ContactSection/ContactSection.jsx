import React, { useState } from 'react';
import { ContactCall, Gmail, RoundWP } from '../../assets';
import { Link } from 'react-router-dom';

function ContactSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins bg-gradient-two text-white  contact">
      {/* heading section */}
      <div className="flex flex-col gap-8 text-white">
        <div className=" font-bold flex flex-col lg:flex-row justify-between items-center cursor-pointer gap-5 lg:gap-0">
          {/*desktop call */}
          <div className="call hidden lg:flex gap-5 text-lightGrey w-full lg:w-[30%]">
            <div className="w-[13%] pl-2">
              <img src={RoundWP} alt="call-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                call us Now
              </div>
              <Link to={'tel:+919824336161'}>
                <div className="font-normal text-profBlue hover:text-white">
                  +91 9824336161
                </div>
              </Link>
            </div>
          </div>

          {/* mobile call */}
          <div className="call flex gap-5 text-lightGrey w-full lg:w-[30%] lg:justify-end justify-start lg:hidden">
            <div className="w-[13%] pl-2">
              <img src={RoundWP} alt="call-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                call us Now
              </div>
              <Link to={'tel:+919824336161'}>
                <div className="font-normal text-profBlue hover:text-white">
                  +91 9824336161
                </div>
              </Link>
            </div>
          </div>
          {/* heading */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h2
              className={`${
                hover ? 'text-profBlue' : 'text-white'
              } text-4xl capitalize`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              contact us
            </h2>
            <div
              className={`liner h-1 w-[80%] ${
                hover ? 'bg-profBlue' : 'bg-white'
              }`}
            ></div>
          </div>
          {/* email */}
          <div className="mail text-lightGrey lg:w-[30%] w-full  flex gap-5 pl-2">
            <div className="w-[10%]">
              <img src={Gmail} alt="mail-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                Email us Now
              </div>
              <Link
                to={
                  'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=decentsettlement@gmail.com'
                }
                className="text-profBlue hover:text-white"
              >
                <div className="font-normal">decentsettelment@gmail.com</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* main conatiner */}
      <div className="flex justify-between pt-10 items-center flex-col w-full">
        {/* upper section */}
        <div className="upper flex lg:flex-row flex-col w-full justify-between items-center">
          {/* form */}
          <div className="form w-full lg:w-1/2 flex justify-center lg:justify-start">
            <form
              action="#"
              method="post"
              className="flex flex-col gap-5 w-full lg:w-[80%] justify-start"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name"
                className="bg-glass p-2 rounded-lg hover:shadow-lg hover:shadow-profBlue cursor-pointer text-white capitalize"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address"
                className="bg-glass p-2 rounded-lg hover:shadow-lg hover:shadow-profBlue cursor-pointer text-white capitalize"
              />
              <input
                type="tel"
                name="p-no"
                id="p-no"
                className="bg-glass p-2 rounded-lg hover:shadow-lg hover:shadow-profBlue cursor-pointer text-white capitalize"
                placeholder="phone no"
              />
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="5"
                className="bg-glass p-2 rounded-lg hover:shadow-lg hover:shadow-profBlue cursor-pointer text-white capitalize"
                value={'message'}
              ></textarea>
              <button
                type="submit"
                className="rounded-lg w-[40%] capitalize hover:bg-white bg-profBlue hover:text-mateBlack hover:shadow-lg hover:shadow-profBlue p-3"
              >
                send message
              </button>
            </form>
          </div>
          {/* image */}
          <div className="image w-full pt-10 lg:pt-0 lg:w-[40%]">
            <img src={ContactCall} alt="contact-svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
