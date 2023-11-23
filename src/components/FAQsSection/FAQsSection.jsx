import React, { useState } from 'react';
import faqItems from './data';

const FAQsSection = () => {
  const [selected, setSelected] = useState(null);
  const [hover, setHover] = useState(false);

  const handleItemClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="font-Poppins px-5 lg:px-24 py-16 flex flex-col gap-10">
      {/* heading section */}
      <div className="lg:px-20 flex flex-col gap-8 text-white">
        <div
          className="text-3xl lg:text-4xl font-bold flex flex-col justify-center items-center gap-4 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2
            className={`${
              hover ? 'text-profBlue' : 'text-mateBlack'
            } capitalize text-center`}
          >
            frequently asked questions
          </h2>
          <div
            className={`liner h-1 w-[40%] bg-mateBlack ${
              hover ? 'bg-profBlue' : 'bg-mateBlack'
            }`}
          ></div>
        </div>
      </div>
      {/* FAQs section */}
      <div className="flex justify-center">
        <div className="faq lg:w-[60%] flex flex-col gap-2">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="faq-item mb-3 shadow-lg overflow-hidden"
            >
              <div
                className="faq-question font-semibold p-3 bg-[#eeeeee] cursor-pointer select-none flex justify-between text-lg"
                onClick={() => handleItemClick(index)}
              >
                <span>{item.question}</span>
                <span>
                  <i className={`fa-solid fa-plus `}></i>
                </span>
              </div>
              <div
                className={`faq-answer${
                  selected === index ? ' open pb-5' : ''
                } pl-5`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
