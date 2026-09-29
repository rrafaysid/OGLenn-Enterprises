import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  const baseClasses = 'bg-white rounded-xl border border-border shadow-sm p-6';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
