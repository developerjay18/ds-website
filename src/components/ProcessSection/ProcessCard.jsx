import React from 'react';

function ProcessCard({ imgSrc, title, detail }) {
  return (
    <div className="shadow-lg hover:shadow-profBlue cursor-pointer p-5 rounded-lg w-[30%] flex flex-col justify-center items-center gap-5 bg-mateBlack text-white">
      {/* images */}
      <div className="image flex justify-center h-[40%]">
        <img
          src={imgSrc}
          alt="process-img"
          className="bg-white border-2 border-profBlue cloudy-wavy p-2 w-[60%] hover:shadow-lg hover:shadow-profBlue"
        />
      </div>
      <div className="title h-[10%] w-full flex justify-center items-center font-semibold capitalize text-2xl hover:text-white text-profBlue">
        {title}
      </div>
      <div className="detail h-[50%] text-lightGrey text-center">{detail}</div>
    </div>
  );
}

export default ProcessCard;
