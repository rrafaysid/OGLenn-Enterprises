import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import SectionHeading from '../components/ui/SectionHeading';
import CTABand from '../components/sections/CTABand';

const QualityCompliance = () => {
  return (
    <>
      <Helmet>
        <title>Quality & Compliance — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises' commitment to quality assurance, safety, regulatory compliance, data security, and ethical standards." />
      </Helmet>

      <HeroSection 
        title="Quality & Compliance" 
        subtitle="Commitment to excellence, safety, and ethical standards in every engagement." 
        variant="navy" 
      />

      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Quality Assurance" align="left" />
            <div className="prose prose-lg text-ink-muted max-w-none">
              <p>
                OGlenn Enterprises LLC is committed to delivering services that meet or exceed client expectations and industry standards. Our quality assurance approach includes:
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>Systematic project planning and milestone tracking</li>
                <li>Regular client communication and feedback integration</li>
                <li>Documented processes and standard operating procedures</li>
                <li>Continuous improvement based on lessons learned and client feedback</li>
                <li>Performance metrics and outcome measurement for every engagement</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Safety & Regulatory Compliance" align="left" />
            <div className="prose prose-lg text-ink-muted max-w-none">
              <p>
                We maintain strict adherence to all applicable safety regulations and industry standards. For engineering and technical projects, we follow relevant OSHA, EPA, and industry-specific safety protocols. For healthcare-related engagements, we comply with HIPAA and applicable patient privacy regulations. For educational programs, we adhere to relevant state and federal education standards and requirements.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Data Security & Cybersecurity" align="left" />
            <PlaceholderNote label="[Confirm specific frameworks: NIST SP 800-171, CMMC Level, FedRAMP considerations, or other applicable cybersecurity standards. Detail any current certifications or compliance programs.]">
              <div className="prose prose-lg text-ink-muted max-w-none">
                <p>
                  OGlenn Enterprises takes data security seriously and implements appropriate safeguards for all client information and project data.
                </p>
              </div>
            </PlaceholderNote>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Ethical Standards & Professional Conduct" align="left" />
            <div className="prose prose-lg text-ink-muted max-w-none">
              <p>
                Given our work across healthcare, education, chaplaincy, and community services — often involving sensitive populations and confidential information — we maintain the highest standards of professional ethics and conduct. This includes:
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>Strict confidentiality and data protection protocols</li>
                <li>Cultural competency and sensitivity in all engagements</li>
                <li>Conflict of interest policies and transparency</li>
                <li>Professional licensing and credential maintenance</li>
                <li>Adherence to applicable codes of professional ethics (engineering, healthcare, chaplaincy)</li>
                <li>Informed consent and participant protection in research-related work</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      <CTABand 
        title="Partner With a Trusted Provider" 
        subtitle="Learn more about our compliance standards or discuss specific requirements for your agency." 
        primaryAction={{ label: "Contact Us", to: "/contact" }} 
      />
    </>
  );
};

export default QualityCompliance;
