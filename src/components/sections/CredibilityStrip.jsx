import React from 'react';
import { ShieldCheck, Award, Clock, Handshake } from 'lucide-react';

const CredibilityStrip = () => {
  const items = [
    { icon: ShieldCheck, text: 'SAM.gov Registered' },
    { icon: Award, text: 'PhD-Led' },
    { icon: Clock, text: '30+ Years Experience' },
    { icon: Handshake, text: 'Prime & Subcontractor Ready' }
  ];

  return (
    <div className="w-full bg-surface-alt border-y border-border py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-teal" />
                <span className="text-navy font-semibold text-sm md:text-base font-body tracking-wide">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CredibilityStrip;
