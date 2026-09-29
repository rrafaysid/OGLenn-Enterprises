import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cog, GraduationCap, Stethoscope, Heart, Users, BookOpen, Building2 } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import CTABand from '../components/sections/CTABand';
import { capabilities } from '../data/capabilities';

const iconMap = { Cog, GraduationCap, Stethoscope, Heart, Users, BookOpen, Building2 };

export default function CoreCapabilities() {
  return (
    <>
      <Helmet>
        <title>Core Capabilities — OGlenn Enterprises LLC</title>
        <meta name="description" content="Explore OGlenn Enterprises' 7 core capability areas: engineering, STEM education, medical/scientific services, community health, leadership, chaplaincy, and government support." />
      </Helmet>

      <HeroSection
        title="Core Capabilities"
        subtitle="Seven integrated service lines delivering comprehensive solutions for government, institutional, and community clients."
        variant="navy"
      />

      {/* Sticky sub-nav */}
      <div className="sticky top-[72px] lg:top-[80px] z-40 bg-white border-b border-border shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex space-x-8 min-w-max py-4">
            {capabilities.map((cap) => (
              <a
                key={cap.id}
                href={`#${cap.id}`}
                className="text-ink-muted hover:text-navy font-medium text-sm transition-colors whitespace-nowrap"
              >
                {cap.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Capability Sections */}
      <div className="pt-8">
        {capabilities.map((capability, index) => {
          const Icon = iconMap[capability.icon] || Cog;
          const isEven = index % 2 === 0;
          
          return (
            <section
              key={capability.id}
              id={capability.id}
              className={`py-20 scroll-mt-24 ${isEven ? 'bg-white' : 'bg-surface-alt'}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-navy rounded-xl">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-navy">{capability.title}</h2>
                    </div>
                    <p className="text-lg text-ink-muted leading-relaxed">
                      {capability.summary}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <div className="bg-surface p-8 rounded-xl border border-border">
                      <h3 className="text-xl font-heading font-bold text-navy mb-6">Service Offerings</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {capability.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gold shrink-0" />
                            <span className="text-ink text-base">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABand />
    </>
  );
}
