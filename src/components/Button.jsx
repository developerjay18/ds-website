import React from 'react';

function Button({ children, className }) {
  return (
    <button
      className={`capitalize bg-profBlue px-5 py-3 rounded-md hover:bg-mateBlack ${className} hover:shadow-lg hover:shadow-darkProfBlue`}
    >
      {children}
    </button>
  );
}

export default Button;
