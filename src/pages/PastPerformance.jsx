import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import CTABand from '../components/sections/CTABand';
import Card from '../components/ui/Card';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import { pastPerformance } from '../data/pastPerformance';

export default function PastPerformance() {
  return (
    <>
      <Helmet>
        <title>Past Performance — OGlenn Enterprises LLC</title>
        <meta name="description" content="Review OGlenn Enterprises' past performance across engineering, education, healthcare, and government consulting engagements." />
      </Helmet>

      <HeroSection
        title="Past Performance"
        subtitle="Demonstrated results across engineering, education, healthcare, and institutional consulting."
        variant="navy"
      />

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-ink-muted leading-relaxed">
              OGlenn Enterprises LLC has delivered measurable outcomes for government agencies, educational institutions, healthcare organizations, and community partners. Below is a selection of representative engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastPerformance.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <PlaceholderNote label="Placeholder — insert project details">
                  <Card className="h-full p-8 bg-white hover:shadow-lg transition-shadow border-t-4 border-t-gold">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-4">{project.client}</h3>
                    
                    <div className="space-y-4 text-ink-muted">
                      <div>
                        <span className="font-bold text-ink block text-sm uppercase tracking-wider mb-1">Scope of Work</span>
                        <p>{project.scope}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-bold text-ink block text-sm uppercase tracking-wider mb-1">Period</span>
                          <p>{project.period}</p>
                        </div>
                        {project.value && (
                          <div>
                            <span className="font-bold text-ink block text-sm uppercase tracking-wider mb-1">Contract Value</span>
                            <p>{project.value}</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <span className="font-bold text-ink block text-sm uppercase tracking-wider mb-2 mt-4">Outcomes & Impact</span>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-teal shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </PlaceholderNote>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-ink-muted mb-4">
              References available upon request for qualified opportunities.
            </p>
            <Link to="/testimonials" className="text-teal font-bold hover:text-navy transition-colors underline underline-offset-4">
              Read Client Testimonials
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
