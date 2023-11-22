import React from 'react';

function ServiceCard({ url, title, content }) {
  return (
    <>
      <div className="w-[24%] shadow-lg flex flex-col justify-center items-center cursor-pointer hover:shadow-profBlue rounded-lg bg-[#eeeeee] gap-y-2">
        <div className="overflow-hidden h-[40%] rounded-lg">
          <img
            src={url}
            alt="image-url"
            className="w-full h-full object-cover rounded-lg p-2"
          />
        </div>
        <div className="h-[10%] p-2 justify-center flex items-center">
          <h3 className="font-bold text-xl capitalize text-center">{title}</h3>
        </div>
        <p className="text-gray-500 px-5 h-[50%] p-2 text-center">{content}</p>
      </div>
    </>
  );
}

export default ServiceCard;
