import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import Badge from '../components/ui/Badge';
import CTABand from '../components/sections/CTABand';

const KeyPersonnel = () => {
  return (
    <>
      <Helmet>
        <title>Key Personnel — OGlenn Enterprises LLC</title>
        <meta name="description" content="Meet the leadership team of OGlenn Enterprises LLC, led by founder Odell Glenn Jr., PhD — engineer, scientist, educator, and community leader." />
      </Helmet>

      <HeroSection 
        title="Key Personnel" 
        subtitle="Leadership with depth, experience, and commitment to mission." 
        variant="navy" 
      />

      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md border border-border overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 bg-surface-alt p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
                <div className="w-48 h-48 md:w-64 md:h-80 bg-gray-200 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <User className="w-24 h-24 text-gray-400" />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">Education</h3>
                  <ul className="text-sm text-ink-muted space-y-2 text-left bg-white p-4 rounded-lg border border-border shadow-sm">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" /> <span>PhD, Chemical Engineering</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" /> <span>MS, Electrical Engineering</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" /> <span>MS, Manufacturing Systems Engineering</span></li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" /> <span>BS, Mechanical Engineering</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-8 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2">Odell Glenn Jr., PhD</h2>
                <p className="text-xl text-gold font-medium mb-6">Founder & Principal Consultant</p>
                
                <div className="prose prose-lg text-ink-muted mb-8 max-w-none">
                  <p className="mb-4">
                    Dr. Odell Glenn Jr. is an engineer, scientist, university educator, entrepreneur, author, TEDx speaker, ordained minister, pastor, and community leader with over 30 years of experience spanning engineering, education, healthcare, and community development.
                  </p>
                  <p className="mb-4">
                    He holds a PhD in Chemical Engineering, master's degrees in Electrical Engineering and Manufacturing Systems Engineering, and a bachelor's degree in Mechanical Engineering. His professional background includes pharmaceutical manufacturing experience with Johnson & Johnson, where he contributed to process engineering and quality systems in regulated manufacturing environments.
                  </p>
                  <p className="mb-4">
                    As a university educator, Dr. Glenn has developed and delivered STEM curricula at the undergraduate and graduate levels, with particular focus on engineering education at HBCUs and minority-serving institutions. His work in medical and scientific communication bridges the gap between complex research and community understanding.
                  </p>
                  <p>
                    Beyond technical domains, Dr. Glenn serves as an ordained minister and pastor, leading faith-based community initiatives and providing chaplaincy and spiritual care services. This unique combination of technical expertise, educational experience, healthcare knowledge, and community leadership enables OGlenn Enterprises to deliver truly integrated solutions.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-heading font-bold text-navy mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Engineering', 'STEM Education', 'Medical/Scientific Communication', 'Workforce Development', 'Leadership Development', 'Chaplaincy & Spiritual Care', 'Community Health', 'Government Consulting', 'Program Management', 'Curriculum Design'].map((tag, i) => (
                      <Badge key={i} variant="default" text={tag} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-4">Select Credentials</h3>
                  <div className="flex flex-wrap gap-2">
                    {['TEDx Speaker', 'Published Author', 'Ordained Minister', 'University Educator'].map((tag, i) => (
                      <Badge key={i} variant="outline" text={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-alt border-l-4 border-teal rounded-r-xl p-6"
          >
            <p className="text-ink-muted">
              <strong>Future Team Members:</strong> As OGlenn Enterprises grows, additional team members and subject matter experts will be featured here. Our network of consultants and partners extends our capabilities across all seven service lines.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABand 
        title="Ready to Work with Us?" 
        subtitle="Contact us to discuss your project requirements and how our expertise can support your mission." 
        primaryAction={{ label: "Contact Us", to: "/contact" }} 
      />
    </>
  );
};

export default KeyPersonnel;
