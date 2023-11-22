import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import data from './data.js';
import { Button } from '../index.js';

function ServiceSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins flex flex-col gap-10">
      {/* heading section */}
      <div className="px-20 flex flex-col gap-8 text-white">
        <div
          className="text-4xl font-bold flex flex-col justify-center items-center gap-4 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2
            className={`${
              hover ? 'text-profBlue' : 'text-mateBlack'
            } capitalize`}
          >
            our debt relief services
          </h2>
          <div
            className={`liner h-1 w-[30%] bg-mateBlack ${
              hover ? 'bg-profBlue' : 'bg-mateBlack'
            }`}
          ></div>
        </div>
      </div>
      {/* cards section */}
      <div className="flex flex-wrap justify-between">
        {data.map((dataItem) => (
          <ServiceCard
            key={dataItem.title}
            url={dataItem.imageUrl}
            title={dataItem.title}
            content={dataItem.desc}
          />
        ))}
      </div>

      {/* button section */}
      <Button className={`text-white w-[20%] mx-auto`}>
        Book An appointment
      </Button>
    </div>
  );
}

export default ServiceSection;
