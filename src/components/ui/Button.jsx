import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', children, href, className = '', ...rest }) => {
  const baseClasses = 'px-6 py-3 rounded-lg transition-colors duration-200 font-body inline-flex items-center justify-center text-center';
  
  const variants = {
    primary: 'bg-gold text-navy-dark font-semibold hover:bg-gold-light',
    secondary: 'border-2 border-teal text-teal hover:bg-teal hover:text-white',
    ghost: 'text-teal hover:text-teal/80 underline-offset-4 hover:underline'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
