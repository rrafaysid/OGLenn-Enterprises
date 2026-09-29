import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import Card from '../ui/Card';
import PlaceholderNote from '../ui/PlaceholderNote';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const content = (
    <div className="flex flex-col items-center text-center px-4 md:px-12 py-8">
      <div className="text-gold text-6xl font-serif leading-none mb-6">"</div>
      <p className="text-xl md:text-2xl font-body italic text-navy mb-8 leading-relaxed">
        {currentTestimonial.quote}
      </p>
      <div>
        <h4 className="font-heading font-bold text-navy text-lg">{currentTestimonial.name}</h4>
        <p className="text-ink-muted text-sm mt-1">{currentTestimonial.title}</p>
        <p className="text-teal font-medium text-sm">{currentTestimonial.organization}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto relative group">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="min-h-[300px] flex items-center justify-center relative">
              {currentTestimonial.isPlaceholder ? (
                <PlaceholderNote label="Placeholder Testimonial">
                  {content}
                </PlaceholderNote>
              ) : (
                content
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-md border border-border flex items-center justify-center text-navy hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold z-10 opacity-0 group-hover:opacity-100 sm:opacity-100"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-md border border-border flex items-center justify-center text-navy hover:text-gold hover:border-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold z-10 opacity-0 group-hover:opacity-100 sm:opacity-100"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gold' : 'bg-border hover:bg-gold/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
