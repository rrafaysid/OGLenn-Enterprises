import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Map, Laptop, RefreshCw } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import CTABand from '../components/sections/CTABand';

const ServiceAreas = () => {
  return (
    <>
      <Helmet>
        <title>Service Areas — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises serves clients nationwide with engineering, education, healthcare, and government consulting services." />
      </Helmet>

      <HeroSection 
        title="Service Areas" 
        subtitle="Serving clients across the nation with flexible delivery models." 
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
            <PlaceholderNote label="Placeholder — confirm service radius/states with client">
              <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center">
                <p className="text-xl text-navy font-medium max-w-3xl mx-auto">
                  Serving clients nationwide, with concentrated experience in [Region/State — confirm with client]. OGlenn Enterprises LLC maintains the capacity to serve federal, state, and local government agencies across the United States.
                </p>
              </div>
            </PlaceholderNote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">Delivery Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Map className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3">On-Site</h3>
                <p className="text-ink-muted">
                  Direct, in-person service delivery at client facilities and locations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3">Virtual / Remote</h3>
                <p className="text-ink-muted">
                  Full-capability remote delivery for consulting, training, education, and program management engagements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-teal" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-3">Hybrid</h3>
                <p className="text-ink-muted">
                  Flexible combination of on-site and remote delivery tailored to project needs and client preferences.
                </p>
              </div>

            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Sector Coverage</h2>
              <p className="text-lg text-ink-muted mb-8">
                Our services reach clients across multiple sectors:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Federal Government Agencies',
                  'State & Local Government',
                  'K-12 School Districts',
                  'Colleges, Universities & HBCUs',
                  'Healthcare Organizations & Hospitals',
                  'Nonprofit Organizations & Foundations',
                  'Faith-Based Organizations & Churches',
                  'Corporations & Private Sector'
                ].map((sector, i) => (
                  <li key={i} className="flex items-center text-ink-muted">
                    <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                    {sector}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy rounded-xl p-8 lg:p-10 text-white shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              <h3 className="text-2xl font-heading font-bold mb-4">National Capacity</h3>
              <p className="text-lg text-white/80 leading-relaxed relative z-10">
                OGlenn Enterprises is equipped for national and federal engagement. Our virtual delivery capabilities for education, consulting, and training services eliminate geographic barriers, allowing us to serve clients regardless of location.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <CTABand 
        title="Discuss Your Next Project" 
        subtitle="Contact us today to explore how our delivery models can meet your specific needs." 
        primaryAction={{ label: "Contact Us", to: "/contact" }} 
      />
    </>
  );
};

export default ServiceAreas;
