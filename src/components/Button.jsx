import React from 'react';

function Button({ children,className }) {
  return (
    <button className={`capitalize bg-profBlue px-5 py-3 rounded-md hover:bg-darkProfBlue ${className}`}>
      {children}
    </button>
  );
}

export default Button;
