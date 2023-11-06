import React from 'react';
import { DSVideo } from '../../assets';
import { Button } from '../index';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div className="mt-[6.7rem] bg-hero text-white font-Poppins">
      {/* opacity cover */}
      <div className="px-5 lg:px-24 py-16 flex">
        {/* left section */}
        <div className="left w-[60%] pr-20 flex flex-col gap-10 justify-center">
          <h1 className="capitalize flex flex-col gap-5">
            <span className="text-6xl font-semibold">
              welcome to <br /> decent settlement-
            </span>
            <span className="text-4xl">
              <Typewriter
                options={{
                  strings: ['your trusted debt relief partner'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  cursor: '|',
                  cursorClassName: 'text-Purple',
                }}
              />
            </span>
          </h1>
          <p className="pr-24 text-lightGrey">
            Yes Debt settlement is possible embark on your journey to financial
            freedom today.
          </p>
          <motion.div
            className="box"
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Button className={'w-[35%]'}>Book an appointment</Button>
          </motion.div>
        </div>
        {/* right section */}
        <div className="right w-[40%] flex justify-center">
          <video
            controls
            className="w-[60%] rounded-3xl hover:shadow-lg hover:shadow-profBlue"
            autoPlay
          >
            <source src={DSVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
