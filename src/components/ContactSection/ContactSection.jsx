import React, { useState } from 'react';
import { ContactCall, Gmail, PCall } from '../../assets';

function ContactSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins bg-gradient-two text-white  contact">
      {/* heading section */}
      <div className="flex flex-col gap-8 text-white">
        <div
          className=" font-bold flex justify-between items-center cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* email */}
          <div className="mail text-lightGrey w-[30%]  flex gap-5 border-l-2 pl-2">
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
          {/* heading */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h2
              className={`${
                hover ? 'text-profBlue' : 'text-white'
              } text-4xl capitalize`}
            >
              contact us
            </h2>
            <div
              className={`liner h-1 w-[80%] ${
                hover ? 'bg-profBlue' : 'bg-white'
              }`}
            ></div>
          </div>
          {/* call */}
          <div className="call flex gap-5 text-lightGrey w-[30%] justify-end">
            <div className="w-[13%] border-l-2 pl-2">
              <img src={PCall} alt="call-icon" />
            </div>
            <div>
              <div className="text-2xl uppercase font-semibold">
                call us Now
              </div>
              <div>+91 9824336161</div>
            </div>
          </div>
        </div>
      </div>
      {/* main conatiner */}
      <div className="flex justify-between pt-10 items-center flex-col w-full">
        {/* upper section */}
        <div className="upper flex w-full justify-between items-center">
          {/* form */}
          <div className="form w-1/2 flex">
            <form
              action="#"
              method="post"
              className="flex flex-col gap-5 w-[80%] justify-start"
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
                className="rounded-lg w-[40%] capitalize hover:bg-darkProfBlue bg-profBlue p-3"
              >
                send message
              </button>
            </form>
          </div>
          {/* image */}
          <div className="image w-[40%]">
            <img src={ContactCall} alt="contact-svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
