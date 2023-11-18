import React from 'react';

function ServiceCard({ url, title, content }) {
  return (
    <>
      <div className="w-[45%] shadow-lg flex flex-col justify-center py-5 items-center gap-5 cursor-pointer hover:shadow-profBlue rounded-lg bg-[#eeeeee]">
        <div className="w-[90%] h-[90%] overflow-hidden">
          <img
            src={url}
            alt="image-url"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-2xl capitalize">{title}</h3>
        </div>
        <p className="text-gray-500 px-5">{content}</p>
      </div>
    </>
  );
}

export default ServiceCard;
