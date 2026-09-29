import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import { naicsCodes } from '../data/naicsCodes';

const NaicsPscCodes = () => {
  return (
    <>
      <Helmet>
        <title>NAICS & PSC Codes — OGlenn Enterprises LLC</title>
        <meta name="description" content="View OGlenn Enterprises' NAICS and PSC codes for government contracting across engineering, education, healthcare, and consulting services." />
      </Helmet>

      <HeroSection 
        title="NAICS & PSC Codes" 
        subtitle="Our registered North American Industry Classification System codes for government contracting." 
        variant="navy" 
      />

      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed max-w-4xl">
              The following NAICS codes represent OGlenn Enterprises LLC's primary service classifications for federal, state, and local government contracting. These codes are registered in our SAM.gov profile.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PlaceholderNote label="Placeholder — confirm exact codes with client/SAM.gov profile">
              <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white font-heading">
                        <th className="py-4 px-6 font-semibold">Code</th>
                        <th className="py-4 px-6 font-semibold">Description</th>
                        <th className="py-4 px-6 font-semibold text-center">Primary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {naicsCodes?.map((code, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-surface-alt'}>
                          <td className="py-4 px-6 font-medium text-navy">{code.code}</td>
                          <td className="py-4 px-6 text-ink-muted">{code.description}</td>
                          <td className="py-4 px-6 text-center">
                            {code.primary && (
                              <span className="inline-flex items-center justify-center bg-gold/20 text-gold-light rounded-full p-1">
                                <Check className="w-5 h-5" />
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </PlaceholderNote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <PlaceholderNote label="PSC Codes Note">
              <p className="text-ink-muted">
                Product Service Codes (PSC) corresponding to the above NAICS codes are available in our capability statement and SAM.gov profile.
              </p>
            </PlaceholderNote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link to="/capability-statement" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-light transition-colors duration-300 shadow-md">
              View Capability Statement
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-navy bg-white hover:bg-surface-alt transition-colors duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NaicsPscCodes;
