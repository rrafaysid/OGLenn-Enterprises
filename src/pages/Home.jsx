import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import CredibilityStrip from '../components/sections/CredibilityStrip';
import CapabilityCardGrid from '../components/sections/CapabilityCardGrid';
import LeadershipTeaser from '../components/sections/LeadershipTeaser';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTABand from '../components/sections/CTABand';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>OGlenn Enterprises LLC — Engineering Knowledge. Developing People. Transforming Communities.</title>
        <meta name="description" content="OGlenn Enterprises LLC is a multidisciplinary professional services firm providing engineering, STEM education, healthcare, and government contracting solutions." />
      </Helmet>

      <HeroSection
        title="Engineering Knowledge. Developing People. Transforming Communities."
        subtitle="Technical Expertise. Strategic Solutions. Measurable Impact. — A multidisciplinary professional services firm and SAM.gov-registered government contractor delivering innovative engineering, scientific, educational, and community-based solutions."
        primaryCTA={{ label: 'Contact Our Contracting Team', href: '/contact' }}
        secondaryCTA={{ label: 'Download Capability Statement', href: '/capability-statement' }}
        variant="gradient"
      />

      <CredibilityStrip />

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <SectionHeading title="Company Overview" align="center" />
            <p className="text-xl md:text-2xl text-ink font-body leading-relaxed mt-6 font-medium">
              OGlenn Enterprises LLC exists to transform expertise into impact. We provide innovative engineering, scientific, educational, workforce development, healthcare, leadership, and community-based solutions that help government agencies, educational institutions, healthcare organizations, corporations, nonprofits, and faith-based organizations accomplish their missions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeading title="Core Capabilities" align="center" />
          <div className="mt-12">
            <CapabilityCardGrid />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Why OGlenn Enterprises" align="left" />
              <p className="text-lg text-ink-muted leading-relaxed mt-6">
                What sets OGlenn Enterprises apart is our ability to bridge technical, educational, and human-services domains under one roof. Led by a PhD-level engineer, scientist, and educator with over 30 years of experience, we bring multidisciplinary depth that most firms simply cannot match. From pharmaceutical process engineering to STEM curriculum design, from community health programs to chaplaincy services — our integrated approach delivers holistic solutions for complex institutional challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-navy text-white p-8 border-none shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/20 rounded-lg">
                    <ShieldCheck className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">Government Contracting</h3>
                </div>
                <p className="text-surface mb-8 text-lg">
                  We are a SAM.gov-registered small business, fully prepared to serve as a prime contractor or reliable subcontractor for federal, state, and local agencies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/government-contracting">
                    Contracting Capabilities
                  </Button>
                  <Button variant="secondary" href="/capability-statement" className="border-white text-white hover:bg-white/10 hover:text-white">
                    Capability Statement
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <LeadershipTeaser />
      
      <TestimonialCarousel />

      <CTABand />
    </>
  );
}
