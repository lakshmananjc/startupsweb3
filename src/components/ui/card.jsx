import React from 'react';

export const Card = ({ className = '', children }) => (
  <div className={`rounded-lg border bg-white p-6 shadow ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ className = '', children }) => (
  <div className={`mt-2 text-sm text-gray-600 ${className}`}>
    {children}
  </div>
);
