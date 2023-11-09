import React from 'react';

function ServiceCard({ url, title, content }) {
  return (
    <>
      {/* left one */}
      <div className="w-full flex justify-center items-center gap-5 cursor-pointer border-r-2 border-b-2 rounded-full">
        <div className="image w-[80%] overflow-hidden">
          <img
            src={url}
            alt="service-image"
            className="rounded-l-full min-h-[100%] object-cover"
          />
        </div>
        <div className="px-2 h-full flex flex-col gap-5">
          <div className="title flex items-center h-[10%] font-semibold text-3xl capitalize hover:text-profBlue">
            {title}
          </div>
          <div className="desc h-[50%] pb-2 text-sm">{content}</div>
        </div>
      </div>
      {/* right one */}
      <div className="w-full flex justify-center items-center gap-5 cursor-pointer border-l-2 rounded-full pl-5 border-b-2">
        <div className="px-2 h-full flex flex-col gap-5">
          <div className="title flex items-center h-[10%] font-semibold text-3xl capitalize hover:text-profBlue">
            {title}
          </div>
          <div className="desc h-[50%] pb-2 text-sm">{content}</div>
        </div>
        <div className="image w-[80%] overflow-hidden">
          <img
            src={url}
            alt="service-image"
            className="rounded-r-full min-h-[100%] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
