import React, { useState } from 'react';
import { Vision, Mission } from '../../assets/about';

function InfoBoxes() {
  const [hover, setHover] = useState(false);
  return (
    <div className="pt-20 pb-14 flex flex-col gap-10">
      {/* vision */}
      <div className="vision shadow-lg bg-[#eeeeee] flex justify-between rounded-lg hover:shadow-profBlue cursor-pointer">
        <div className="image w-[30%]">
          <img
            src={Vision}
            alt="vision-image"
            className="rounded-l-lg h-full object-cover"
          />
        </div>
        <div className="text w-[70%] p-5 flex flex-col justify-center">
          {/* heading section */}
          <div className="flex flex-col gap-8 text-white pb-5">
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
                our vision
              </h2>
              <div
                className={`liner h-1 w-[20%] bg-mateBlack ${
                  hover ? 'bg-profBlue' : 'bg-mateBlack'
                }`}
              ></div>
            </div>
          </div>
          <p>
            At Decent Settlement, we&apos;re dedicated to creating a world where
            financial freedom is within reach for everyone, irrespective of
            their debt load. Our mission is to serve as a guiding light, helping
            individuals emerge from the shadow of debt and embark on a more
            secure financial journey. Our focus is to save you money, liberate
            you from debt, and ensure transparent, confident building
            partnerships with every customer.
          </p>
        </div>
      </div>
      {/* mission */}
      <div className="mission shadow-lg bg-[#eeeeee] flex justify-between rounded-lg hover:shadow-profBlue cursor-pointer">
        <div className="text w-[70%] p-5 flex flex-col">
          {/* heading section */}
          <div className="flex flex-col gap-8 text-white pb-5">
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
                our mission
              </h2>
              <div
                className={`liner h-1 w-[20%] bg-mateBlack ${
                  hover ? 'bg-profBlue' : 'bg-mateBlack'
                }`}
              ></div>
            </div>
          </div>
          <p>
            Our mission at Decent Settlement is to be the trusted partner on the
            journey to debt relief and financial stability. We are committed to
            delivering exceptional debt settlement services that go beyond
            conventional norms, ensuring our clients achieve lasting financial
            freedom.
          </p>
        </div>
        <div className="image w-[30%]">
          <img
            src={Mission}
            alt="Mission-image"
            className="rounded-r-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoBoxes;
