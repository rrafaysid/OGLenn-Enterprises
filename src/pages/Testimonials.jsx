import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import CTABand from '../components/sections/CTABand';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials — OGlenn Enterprises LLC</title>
        <meta name="description" content="Read what clients and partners say about working with OGlenn Enterprises LLC." />
      </Helmet>

      <HeroSection 
        title="Testimonials" 
        subtitle="What our clients and partners say about working with OGlenn Enterprises." 
        variant="navy" 
      />

      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials?.map((t, index) => {
              const CardContent = (
                <div className="bg-white rounded-xl p-8 border border-border shadow-sm h-full flex flex-col">
                  <Quote className="w-10 h-10 text-gold mb-6 opacity-80" />
                  <p className="text-lg italic text-ink-muted mb-8 flex-grow">
                    "{t.quote}"
                  </p>
                  <div className="w-full h-px bg-border mb-6"></div>
                  <div>
                    <p className="font-bold text-navy text-lg">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.title}</p>
                    <p className="text-sm text-ink-muted">{t.organization}</p>
                  </div>
                </div>
              );

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {t.isPlaceholder ? (
                    <PlaceholderNote label="Placeholder testimonial — replace with real client feedback">
                      {CardContent}
                    </PlaceholderNote>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-alt rounded-xl p-8 border-l-4 border-navy max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between"
          >
            <p className="text-ink-muted text-lg mb-6 sm:mb-0 sm:mr-6">
              <strong>References available upon request</strong> for qualified opportunities. Contact us to discuss specific project references relevant to your requirements.
            </p>
            <Link to="/contact" className="inline-flex flex-shrink-0 items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy hover:bg-navy-dark transition-colors duration-300">
              Request References
            </Link>
          </motion.div>

        </div>
      </section>

      <CTABand 
        title="Ready to Start Your Project?" 
        subtitle="Join our growing list of satisfied clients and partners." 
        primaryAction={{ label: "Contact Us", to: "/contact" }} 
      />
    </>
  );
};

export default Testimonials;
