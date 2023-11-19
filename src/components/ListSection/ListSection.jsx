import React, { useState } from 'react';
import { services, resources } from './data';
import { ScaleDiv, Button } from '../index';
import { Logo } from '../../assets';

function ListSection() {
  const [hover, setHover] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins flex justify-between">
      {/* servies */}
      <div className="shadow-lg services bg-[#eeeeee] rounded-lg p-5 flex flex-col gap-6">
        {/* heading section */}
        <div className="flex flex-col gap-8 text-white">
          <div
            className="text-4xl font-bold flex flex-col justify-start items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <h2
              className={`${
                hover ? 'text-profBlue' : 'text-mateBlack'
              } capitalize`}
            >
              services
            </h2>
            <div
              className={`liner h-1 w-[60%] bg-mateBlack ${
                hover ? 'bg-profBlue' : 'bg-mateBlack'
              }`}
            ></div>
          </div>
        </div>
        {/* list items */}
        <ul className="flex flex-col gap-1">
          {services.map((service, index) => (
            <ScaleDiv
              key={index}
              className={`cursor-pointer hover:text-profBlue`}
            >
              <li key={index} className="flex gap-2">
                <span className="font-semibold">&gt;</span>
                <span>{service}</span>
              </li>
            </ScaleDiv>
          ))}
        </ul>
      </div>
      {/* image */}
      {/* <div className="image w-[40%]">
        <img
          src={ListImage}
          alt="list-image"
          className="h-full object-cover rounded-lg"
        />
      </div> */}
      {/* resources */}
      <div className="shadow-lg resources bg-[#eeeeee] rounded-lg p-5 flex flex-col gap-6">
        {/* heading section */}
        <div className="flex flex-col gap-8 text-white">
          <div
            className="text-4xl font-bold flex flex-col justify-start items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHoverTwo(true)}
            onMouseLeave={() => setHoverTwo(false)}
          >
            <h2
              className={`${
                hoverTwo ? 'text-profBlue' : 'text-mateBlack'
              } capitalize`}
            >
              resources
            </h2>
            <div
              className={`liner h-1 w-[60%] bg-mateBlack ${
                hoverTwo ? 'bg-profBlue' : 'bg-mateBlack'
              }`}
            ></div>
          </div>
        </div>
        {/* list items */}
        <ul className="flex flex-col gap-1">
          {resources.map((service, index) => (
            <ScaleDiv
              key={index}
              className={`cursor-pointer hover:text-profBlue`}
            >
              <li key={index} className="flex gap-2">
                <span className="font-semibold">&gt;</span>
                <span>{service}</span>
              </li>
            </ScaleDiv>
          ))}
        </ul>
      </div>
      {/* extra */}
      <div className="shadow-lg hover:shadow-profBlue w-[50%] bg-mateBlack px-5 py-4 rounded-lg text-lightGrey flex flex-col gap-5 cursor-pointer">
        <div className="w-[50%]">
          <img src={Logo} alt="logo" className="" />
        </div>
        <p>
          We&apos;re a modern fintech company aiming to help people in financial
          trouble get away from their debts. we&apos;re dedicated to creating a
          world where financial freedom is within reach for everyone,
          irrespective of their debt load
        </p>
        <div className="pt-5">
          <Button className={`text-white`}>Book an appointment</Button>
        </div>
      </div>
    </div>
  );
}

export default ListSection;
