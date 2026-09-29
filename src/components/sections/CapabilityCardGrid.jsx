import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cog, GraduationCap, Stethoscope, Heart, Users, BookOpen, Building2, ArrowRight } from 'lucide-react';
import { capabilities } from '../../data/capabilities';
import Card from '../ui/Card';

const iconMap = { Cog, GraduationCap, Stethoscope, Heart, Users, BookOpen, Building2 };

const CapabilityCardGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {capabilities.map((cap, index) => {
        const Icon = iconMap[cap.icon];
        
        // Make the last item (7th) center if in a 3-col or 2-col grid
        const isLastAndOdd = index === 6;
        const colSpanClass = isLastAndOdd ? 'md:col-span-2 lg:col-span-1 xl:col-span-1 md:w-1/2 lg:w-full mx-auto md:justify-self-center lg:justify-self-auto' : '';

        return (
          <motion.div key={cap.id} variants={itemVariants} className={`h-full ${isLastAndOdd ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <Link to={`/core-capabilities#${cap.id}`} className="block h-full">
              <Card hover={true} className="h-full flex flex-col items-start hover:border-gold/50 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-6 h-6 text-navy" />}
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3 line-clamp-2">
                  {cap.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                  {cap.summary}
                </p>
                <div className="text-teal font-semibold text-sm flex items-center mt-auto group">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CapabilityCardGrid;
