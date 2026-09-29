import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import CTABand from '../components/sections/CTABand';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import GeneralContactForm from '../components/forms/GeneralContactForm';
import ContractingInquiryForm from '../components/forms/ContractingInquiryForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — OGlenn Enterprises LLC</title>
        <meta name="description" content="Contact OGlenn Enterprises LLC for general inquiries, government contracting opportunities, and teaming partnerships." />
      </Helmet>

      <HeroSection
        title="Contact Us"
        subtitle="General inquiries, government contracting opportunities, and teaming partnerships."
        variant="navy"
      />

      <section className="py-12 bg-surface border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="p-4 bg-navy/5 rounded-full mb-4">
                <Phone className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold font-heading text-navy mb-2">Phone</h3>
              <a href="tel:1-800-379-5426" className="text-teal hover:text-navy font-medium transition-colors">
                1-800-379-5426
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="p-4 bg-navy/5 rounded-full mb-4">
                <Mail className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold font-heading text-navy mb-2">Email</h3>
              <a href="mailto:oglennenterprises@gmail.com" className="text-teal hover:text-navy font-medium transition-colors break-all">
                oglennenterprises@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="p-4 bg-navy/5 rounded-full mb-4">
                <Clock className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold font-heading text-navy mb-2">Hours</h3>
              <PlaceholderNote className="!text-sm !p-2">
                Monday–Friday, 9:00 AM – 5:00 PM [Confirm timezone]
              </PlaceholderNote>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="p-4 bg-navy/5 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold font-heading text-navy mb-2">Mailing Address</h3>
              <PlaceholderNote className="!text-sm !p-2">
                Street Address, City, State ZIP [Confirm with client]
              </PlaceholderNote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* General Form */}
            <div>
              <SectionHeading title="General Inquiries" />
              <p className="text-ink-muted mt-4 mb-8">
                Use this form for general questions about our services, educational programs, or consulting.
              </p>
              <div className="bg-surface p-8 rounded-xl border border-border">
                <GeneralContactForm />
              </div>
            </div>

            {/* Contracting Form */}
            <div>
              <SectionHeading title="Government Contracting & Teaming" />
              <p className="text-ink-muted mt-4 mb-8">
                Use this form if you represent a government agency, or a prime contractor interested in teaming.
              </p>
              <div className="bg-navy p-8 rounded-xl shadow-lg border border-navy-dark">
                <ContractingInquiryForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand title="Ready to discuss your project?" subtitle="Call us at 1-800-379-5426 or email oglennenterprises@gmail.com" buttonText="Call Now" buttonLink="tel:1-800-379-5426" />
    </>
  );
}
