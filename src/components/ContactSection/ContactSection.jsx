import React, { useState } from 'react';
import { ContactCall } from '../../assets';

function ContactSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins bg-gradient-two text-white  contact">
      {/* heading section */}
      <div className="px-20 flex flex-col gap-8 text-white">
        <div
          className="text-4xl font-bold flex flex-col justify-center items-center gap-4 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2
            className={`${hover ? 'text-profBlue' : 'text-white'} capitalize`}
          >
            contact us
          </h2>
          <div
            className={`liner h-1 w-[10%] ${
              hover ? 'bg-profBlue' : 'bg-white'
            }`}
          ></div>
        </div>
      </div>
      {/* main conatiner */}
      <div className="flex justify-between py-10 items-center mt-5">
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
  );
}

export default ContactSection;
