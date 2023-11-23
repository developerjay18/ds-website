import React from 'react';

function ProcessCard({ imgSrc, title, detail }) {
  return (
    <div className="shadow-lg hover:shadow-profBlue cursor-pointer py-5 px-3 rounded-xl w-full lg:w-[30%] flex flex-col justify-center items-center gap-5 bg-[#eeeeee] text-mateBlack">
      {/* images */}
      <div className="image flex justify-center h-[40%]">
        <img
          src={imgSrc}
          alt="process-img"
          className="bg-white cloudy-wavy p-2 w-[50%] hover:shadow-lg hover:shadow-profBlue"
        />
      </div>
      <div className="title h-[10%] w-full flex justify-center items-center font-semibold capitalize text-2xl hover:text-profBlue text-mateBlack">
        {title}
      </div>
      <div className="detail h-[50%] text-mateBlack text-md text-center text-md">
        {detail}
      </div>
    </div>
  );
}

export default ProcessCard;
