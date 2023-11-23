import React from 'react';
import { DSVideo } from '../../assets';
import { Button, Header } from '../index';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div className="bg-hero home pt-24 lg:pt-28 section">
      <div className="text-white font-Poppins">
        {/* opacity cover */}
        <div className="px-5 lg:px-24 py-10 flex lg:flex-row flex-col">
          {/* left section */}
          <div className="left  w-full lg:w-[60%] lg:pr-20 flex flex-col gap-10 justify-center">
            <h1 className="capitalize flex flex-col gap-5  w-full text-center lg:text-left">
              <span className=" text-4xl lg:text-6xl font-semibold">
                welcome to <br /> decent settlement-
              </span>
              <span className=" text-2xl lg:text-4xl">
                <Typewriter
                  options={{
                    strings: [
                      'Personal Loan Settlement',
                      'Business Loan Settlement',
                      'Credit Card Settlement',
                      'Anti-Harassment Service',
                    ],
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
            <p className="lg:pr-24 text-lightGrey text-center lg:text-left">
              Your Trusted debt relief partner. Yes, Debt settlement is possible
              begin on your journey to financial freedom today.
            </p>
            <motion.div
              className="box flex lg:block justify-center lg:justify-start"
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button className={'w-[62%] lg:w-[35%]'}>
                Book an appointment
              </Button>
            </motion.div>
          </div>
          {/* right section */}
          <div className="right w-full lg:w-[40%] flex justify-center lg:justify-end pt-10 lg:pt-0">
            <video
              controls
              className="w-[55%] rounded-3xl hover:shadow-lg hover:shadow-profBlue"
              autoPlay
            >
              <source src={DSVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
