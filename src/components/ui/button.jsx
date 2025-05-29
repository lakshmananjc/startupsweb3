import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
