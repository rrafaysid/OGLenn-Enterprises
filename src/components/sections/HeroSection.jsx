import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  variant = 'navy' 
}) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-navy to-navy-dark';
      case 'image':
        return 'bg-navy relative overflow-hidden'; // Background image would be handled with a pseudo element or absolute div
      case 'navy':
      default:
        return 'bg-navy';
    }
  };

  return (
    <section className={`w-full py-20 md:py-32 ${getBackgroundClass()} text-white relative`}>
      {variant === 'image' && (
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507675900599-231362be44f0?auto=format&fit=crop&q=80&w=2000)' }}
        />
      )}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-3xl leading-relaxed font-body">
              {subtitle}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
