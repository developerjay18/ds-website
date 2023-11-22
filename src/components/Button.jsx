import React from 'react';

function Button({ children, className }) {
  return (
    <button
      className={`capitalize bg-profBlue px-5 py-3 rounded-md hover:text-mateBlack ${className} hover:shadow-lg hover:shadow-darkProfBlue hover:bg-white`}
    >
      {children}
    </button>
  );
}

export default Button;
