import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Award, Building2, ArrowRight } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import PlaceholderNote from '../components/ui/PlaceholderNote';

export default function GovernmentContracting() {
  const contractCapabilities = [
    { title: "Federal Contracting", desc: "Direct support for federal agencies in engineering, education, health, and administrative programs." },
    { title: "State & Local Government", desc: "Partnering with state agencies, municipalities, and K-12 school districts to deliver community-focused solutions." },
    { title: "Subcontracting & Teaming", desc: "Serving as a reliable small business partner to prime contractors on large-scale government procurements." },
    { title: "Training & Technical Assistance", desc: "Providing specialized workforce development, leadership training, and program implementation support." }
  ];

  return (
    <>
      <Helmet>
        <title>Government Contracting — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises is a SAM.gov-registered government contractor offering prime and subcontracting services across engineering, education, healthcare, and community programs." />
      </Helmet>

      <HeroSection
        title="Government Contracting"
        subtitle="SAM.gov-registered. Prime & subcontractor ready. Delivering mission-critical solutions for federal, state, and local agencies."
        variant="gradient"
      />

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7">
              <SectionHeading title="Contracting Overview" />
              <p className="text-lg text-ink-muted mt-6 leading-relaxed">
                OGlenn Enterprises LLC is positioned to serve as a prime contractor, subcontractor, consultant, training provider, and program implementation partner for government agencies at every level. Our multidisciplinary capabilities span engineering, STEM education, medical/scientific services, community health, leadership development, and institutional support — enabling us to respond to a wide range of contract opportunities with depth and agility.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <Card className="p-8 border-gold/30 bg-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-10 -mt-10" />
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold" />
                  <h3 className="text-2xl font-heading font-bold text-navy">SAM.gov Registered</h3>
                </div>
                <p className="text-ink-muted mb-6">
                  Active registration in the System for Award Management. UEI and CAGE Code available upon request.
                </p>
                <div className="space-y-3">
                  <PlaceholderNote>UEI: [Insert UEI here]</PlaceholderNote>
                  <PlaceholderNote>CAGE Code: [Insert CAGE here]</PlaceholderNote>
                </div>
              </Card>
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
            <SectionHeading title="Contracting Capabilities" align="center" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {contractCapabilities.map((cap, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl bg-surface-alt border border-border">
                  <div className="p-3 bg-navy/5 rounded-lg h-fit">
                    <Building2 className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-navy mb-2">{cap.title}</h4>
                    <p className="text-ink-muted">{cap.desc}</p>
                  </div>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Link to="/naics-psc-codes" className="group">
              <Card className="h-full p-8 hover:border-navy transition-colors bg-white">
                <FileText className="w-10 h-10 text-teal mb-6" />
                <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-gold transition-colors">NAICS & PSC Codes</h3>
                <p className="text-ink-muted mb-6">Review our comprehensive list of classification codes across multiple industries.</p>
                <div className="flex items-center text-teal font-medium mt-auto">
                  View Codes <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/certifications" className="group">
              <Card className="h-full p-8 hover:border-navy transition-colors bg-white">
                <Award className="w-10 h-10 text-teal mb-6" />
                <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-gold transition-colors">Certifications & Registrations</h3>
                <p className="text-ink-muted mb-6">See our small business designations, state registrations, and professional credentials.</p>
                <div className="flex items-center text-teal font-medium mt-auto">
                  View Certifications <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/capability-statement" className="group">
              <Card className="h-full p-8 hover:border-navy transition-colors bg-white">
                <FileText className="w-10 h-10 text-teal mb-6" />
                <h3 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-gold transition-colors">Capability Statement</h3>
                <p className="text-ink-muted mb-6">Download our one-page capabilities overview for government agencies and prime partners.</p>
                <div className="flex items-center text-teal font-medium mt-auto">
                  Download PDF <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-transparent opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Interested in Teaming or Partnership Opportunities?</h2>
            <p className="text-xl text-surface/90 mb-10">
              We actively seek strategic partnerships with prime contractors and other small businesses to deliver comprehensive solutions for government clients.
            </p>
            <Button variant="primary" href="/contact">
              Contact Our Contracting Team
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
