import React from 'react';

function Button({ children }) {
  return (
    <button className="capitalize bg-profBlue px-5 py-3 rounded-md hover:bg-darkProfBlue">
      {children}
    </button>
  );
}

export default Button;
