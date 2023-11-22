import React, { useState } from 'react';
import ProcessCard from './ProcessCard';
import { Button } from '../index';
import data from './data';

function ProcessSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins flex flex-col justify-center items-center gap-8 bg-[#f4f4f4] border-0 process section">
      {/* heading section */}
      <div className="px-20 flex flex-col gap-8">
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
            How our debt settlement relief program works?
          </h2>
          <div
            className={`liner h-1 w-[40%] bg-mateBlack ${
              hover ? 'bg-profBlue' : 'bg-mateBlack'
            }`}
          ></div>
        </div>
        <p className="text-center ">
          Debt relief, also known as &rdquo;loan settlement,&rdquo; presents a
          chance to escape the burden of your loans or debts without having to
          cover the entire outstanding balance. Our skilled professional banking
          experts engage in negotiations with your creditors to secure their
          consent for a reduced settlement amount compared to your total debt.
        </p>
      </div>
      {/* cards section */}
      <div className="cards w-full flex flex-wrap justify-evenly gap-10">
        {data.map((dataItem) => (
          <ProcessCard
            key={dataItem.title}
            imgSrc={dataItem.imageUrl}
            title={dataItem.title}
            detail={dataItem.desc}
          />
        ))}
      </div>
      {/* appointment section */}
      <Button className={`text-white mt-3`}>Book an appointment</Button>
    </div>
  );
}

export default ProcessSection;
