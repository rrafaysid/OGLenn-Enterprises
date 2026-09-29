import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const StatBand = ({ stats }) => {
  return (
    <div className="bg-navy w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon ? LucideIcons[stat.icon] : null;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {Icon && <Icon className="w-8 h-8 text-gold" />}
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold tabular-nums">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium font-body text-lg">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatBand;
