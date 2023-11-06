import React from 'react';

function ServiceCard({ url, title, content }) {
  return (
    <div className="shadow-xl w-[24%] rounded-lg flex justify-center flex-col items-center gap-5 bg-[#eeeeee] cursor-pointer hover:shadow-lg hover:shadow-profBlue">
      <div className="image h-[40%] overflow-hidden">
        <img
          src={url}
          alt="service-image"
          className="rounded-t-lg min-h-[100%] object-cover"
        />
      </div>
      <div className="title flex justify-center items-center h-[10%] font-semibold text-2xl capitalize text-center hover:text-profBlue">
        {title}
      </div>
      <div className="desc h-[50%] pb-2 px-2 text-sm">{content}</div>
    </div>
  );
}

export default ServiceCard;
