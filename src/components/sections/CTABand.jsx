import React from 'react';
import Button from '../ui/Button';

const CTABand = ({ 
  title = 'Ready to Partner with OGlenn Enterprises?', 
  subtitle, 
  variant = 'navy' 
}) => {
  const isGold = variant === 'gold';
  const bgClass = isGold ? 'bg-gold' : 'bg-navy';
  const titleClass = isGold ? 'text-navy-dark' : 'text-white';
  const subtitleClass = isGold ? 'text-navy/80' : 'text-white/80';
  const linkClass = isGold ? 'text-navy-dark hover:text-navy hover:underline' : 'text-white hover:text-gold hover:underline';

  return (
    <section className={`w-full py-16 ${bgClass} text-center`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${titleClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto font-body ${subtitleClass}`}>
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button 
            href="/contact" 
            variant={isGold ? 'primary' : 'primary'}
            className={isGold ? 'bg-navy-dark text-white hover:bg-navy' : ''}
          >
            Contact Our Team
          </Button>
          <Button 
            href="tel:18003795426" 
            variant={isGold ? 'ghost' : 'ghost'}
            className={isGold ? 'text-navy-dark border-navy-dark hover:bg-navy-dark/10' : 'text-white border-white hover:bg-white/10 border-2'}
          >
            Call 1-800-379-5426
          </Button>
        </div>
        
        <p className={`text-sm font-body ${linkClass}`}>
          or email us at <a href="mailto:oglennenterprises@gmail.com" className="font-semibold underline-offset-4">oglennenterprises@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default CTABand;
