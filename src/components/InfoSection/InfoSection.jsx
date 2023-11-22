import React, { useState } from 'react';
import * as Image from '../../assets/about';
import { Button } from '../index';
import InfoBoxes from './InfoBoxes';

function InfoSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 pt-16 font-Poppins about-us">
      {/* upper layer */}
      <div className="rounded-lg flex bg-[#eeeeee] shadow-lg hover:shadow-profBlue cursor-pointer info">
        <div className="text w-1/2 flex flex-col gap-5">
          {/* heading section */}
          <div className="flex flex-col gap-8 text-white pl-5 py-5">
            <div
              className="text-4xl font-bold flex flex-col justify-start gap-4 cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h2
                className={`${
                  hover ? 'text-profBlue' : 'text-mateBlack'
                } capitalize`}
              >
                about us
              </h2>
              <div
                className={`liner h-1 w-[20%] bg-mateBlack ${
                  hover ? 'bg-profBlue' : 'bg-mateBlack'
                }`}
              ></div>
            </div>
          </div>
          {/* text */}
          <div className="px-5 flex gap-4 flex-col">
            <p>
              We&apos;re a modern fintech company aiming to help people in
              financial trouble get away from their debts. In India, missing
              loan payments often lead to trouble from recovery agents.
            </p>
            <p>
              Debt settlement is common in the USA and Europe but not so much in
              India. We&apos;re here for consumers who can&apos;t repay their
              loans due to job loss or medical emergencies and other financial
              losses.
            </p>
            <p>
              The COVID-19 pandemic has made job losses and pay cuts worse,
              making debt settlement even more important.
            </p>
          </div>
          {/* button */}
          <div className="px-5 pb-5">
            <Button className={`text-white`}>Book an appointment</Button>
          </div>
        </div>
        <div className="image w-1/2">
          <img
            src={Image.About}
            alt="about-image"
            className="rounded-r-lg h-full object-cover"
          />
        </div>
      </div>
      {/* lower layer */}
      <InfoBoxes />
    </div>
  );
}

export default InfoSection;
