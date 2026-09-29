import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Star, Shield, TrendingUp, MapPin } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import Badge from '../components/ui/Badge';
import { certifications } from '../data/certifications';

const iconMap = { ShieldCheck, Award, Star, Shield, TrendingUp, MapPin };

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Certifications & Registrations — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises' government contracting certifications and registrations including SAM.gov, SBA, and small business designations." />
      </Helmet>

      <HeroSection 
        title="Certifications & Registrations" 
        subtitle="Our active registrations and certification status for government contracting." 
        variant="navy" 
      />

      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-lg leading-relaxed max-w-4xl text-ink-muted">
              OGlenn Enterprises LLC maintains active registrations and pursues relevant certifications to maximize our competitiveness in government contracting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications?.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              const isConfirmed = cert.status === 'confirmed';
              
              const CardContent = (
                <div className="bg-white rounded-xl p-6 h-full border border-border shadow-sm flex flex-col">
                  <div className="mb-4 text-gold">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">{cert.name}</h3>
                  <div className="mb-4">
                    {isConfirmed ? (
                      <Badge variant="success" text="Active" />
                    ) : (
                      <Badge variant="warning" text="Pending Confirmation" />
                    )}
                  </div>
                  <p className="text-ink-muted mt-auto">
                    {cert.description}
                  </p>
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
                  {!isConfirmed ? (
                    <PlaceholderNote label="Pending/To Be Confirmed">
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
            className="mb-16"
          >
            <h2 className="text-2xl font-heading font-bold text-navy mb-8">Company Registration Data</h2>
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm space-y-6">
              <PlaceholderNote label="[CAGE Code — confirm with client]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4">
                  <span className="text-ink-muted font-medium">CAGE Code</span>
                  <span className="text-navy font-semibold font-mono text-lg">[TBD]</span>
                </div>
              </PlaceholderNote>
              <PlaceholderNote label="[UEI Number — confirm with client]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4">
                  <span className="text-ink-muted font-medium">UEI (SAM)</span>
                  <span className="text-navy font-semibold font-mono text-lg">[TBD]</span>
                </div>
              </PlaceholderNote>
              <PlaceholderNote label="[DUNS Number — confirm with client]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2">
                  <span className="text-ink-muted font-medium">DUNS</span>
                  <span className="text-navy font-semibold font-mono text-lg">[TBD]</span>
                </div>
              </PlaceholderNote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-xl p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between"
          >
            <p className="text-lg mb-6 sm:mb-0 sm:mr-6 max-w-3xl">
              Each certification expands our eligibility for set-aside contracts and strengthens our value as a teaming partner. For current certification status and teaming opportunities, please contact us.
            </p>
            <Link to="/contact" className="inline-flex flex-shrink-0 items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-gold hover:bg-gold-light transition-colors duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
