import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function About() {
  const uniquePoints = [
    "Multidisciplinary expertise under one roof — engineering, science, education, healthcare, leadership, and chaplaincy",
    "PhD-level leadership with 30+ years of hands-on experience",
    "Deep experience with government agencies, HBCUs, K-12 school districts, healthcare organizations, and faith communities",
    "Track record bridging technical and human-services domains",
    "Commitment to measurable impact and sustainable community outcomes",
    "Cultural competency and sensitivity across diverse populations"
  ];

  const engagementModels = [
    { title: "Prime Contractor", desc: "Leading projects and assembling teams to deliver comprehensive solutions for government and institutional contracts." },
    { title: "Subcontractor", desc: "Providing specialized technical, educational, or healthcare expertise to complement prime contractor teams." },
    { title: "Consultant", desc: "Advising organizations on process improvement, curriculum design, program evaluation, and strategic planning." },
    { title: "Training Provider", desc: "Delivering workforce development, leadership workshops, and technical training programs." },
    { title: "Program Developer", desc: "Designing and implementing community health, STEM education, and human-services initiatives." },
    { title: "Community Partner", desc: "Collaborating with faith-based organizations and nonprofits to amplify social impact." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us — OGlenn Enterprises LLC</title>
        <meta name="description" content="Learn about OGlenn Enterprises LLC, our mission, history, and multidisciplinary approach to engineering, education, healthcare, and community services." />
      </Helmet>

      <HeroSection
        title="About OGlenn Enterprises"
        subtitle="Transforming expertise into impact across engineering, education, healthcare, and community development."
        variant="navy"
      />

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <SectionHeading title="Company History & Origin" />
              <div className="prose prose-lg text-ink-muted mt-6">
                <p>
                  OGlenn Enterprises LLC was founded by Odell Glenn Jr., PhD, to bridge the gap between technical expertise and community impact. With a career spanning pharmaceutical manufacturing at Johnson & Johnson, university-level engineering education, STEM outreach, healthcare consulting, and faith-based community leadership, Dr. Glenn recognized that the most pressing challenges facing government agencies, institutions, and communities require solutions that transcend traditional disciplinary boundaries.
                </p>
                <p>
                  OGlenn Enterprises was established to deliver exactly that — integrated, expert-driven solutions across engineering, science, education, health, and human services.
                </p>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Our Mission" />
              <div className="prose prose-lg text-ink-muted mt-6 bg-white p-8 rounded-xl shadow-sm border border-border">
                <p className="font-medium text-navy text-xl leading-relaxed">
                  "OGlenn Enterprises LLC exists to transform expertise into impact. We provide innovative engineering, scientific, educational, workforce development, healthcare, leadership, and community-based solutions that help government agencies, educational institutions, healthcare organizations, corporations, nonprofits, and faith-based organizations accomplish their missions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="What Makes Us Unique" align="center" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {uniquePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-surface-alt p-6 rounded-lg">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-gold shrink-0"></div>
                  <p className="text-ink-muted text-lg">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Engagement Models" align="center" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {engagementModels.map((model, idx) => (
                <Card key={idx} className="p-8 hover:shadow-md transition-shadow bg-white">
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">{model.title}</h3>
                  <p className="text-ink-muted">{model.desc}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Button href="/key-personnel">
              Meet our leadership team
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
