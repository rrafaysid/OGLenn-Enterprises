import React from 'react';

const SectionHeading = ({ title, subtitle, centered, align, className = '' }) => {
  // Support both 'centered' boolean and 'align' string props
  const isCentered = align ? align === 'center' : (centered !== undefined ? centered : true);
  return (
    <div className={`mb-12 ${isCentered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
        {title}
      </h2>
      <div className={`w-16 h-1 bg-gold rounded-full mt-4 ${isCentered ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className={`text-lg text-ink-muted mt-4 max-w-2xl ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
