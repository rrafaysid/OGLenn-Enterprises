import React from 'react';

const Badge = ({ variant = 'default', children, className = '' }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-body';
  
  const variants = {
    default: 'bg-surface-alt text-ink-muted',
    success: 'bg-success/10 text-success',
    warning: 'bg-gold/10 text-gold',
    gold: 'bg-gold text-navy-dark'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
