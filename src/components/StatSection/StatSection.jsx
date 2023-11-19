import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

function StatSection() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const statsData = [
    {
      number: '5500',
      extension: '+',
      title: 'client conversations',
    },
    {
      number: '10',
      extension: 'CR+',
      title: 'debt handled',
    },
    {
      number: '700',
      extension: '+',
      title: 'trusted clients',
    },
    {
      number: '100',
      extension: '%',
      title: 'clients satisfied',
    },
  ];

  return (
    <div className="font-Poppins w-full flex px-5 lg:px-24 py-16 justify-between flex-col md:flex-row flex-wrap gap-12 md:gap-0 lg:gap-0 bg-black-gr">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-full flex justify-between flex-col md:flex-row gap-12 md:gap-0 rounded-lg"
      >
        {statsData.map((data) => (
          <div
            id="count-up-section"
            className="w-full md:w-[50%] lg:w-[17%] "
            key={data.number}
          >
            {isVisible && (
              <div className="flex flex-col justify-center items-center gap-3  text-white py-5 px-1 rounded-lg cursor-pointer">
                <div className="text-4xl lg:text-[2.8rem] text-gradient font-semibold ">
                  <span>
                    <CountUp
                      start={0}
                      end={data.number}
                      duration={7}
                      className=""
                    />
                  </span>
                  <span>{data.extension}</span>
                </div>
                <div className="text-md md:text-lg capitalize">
                  {data.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default StatSection;
