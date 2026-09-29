import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

{/* NOTE: This privacy policy is a template/placeholder. Final legal text must be reviewed and approved by an attorney before launch. */}

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises LLC privacy policy — how we collect, use, and protect your information." />
      </Helmet>

      <section className="py-24 bg-surface text-ink min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading title="Privacy Policy" subtitle="Last updated: [Date — confirm before launch]" align="left" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg prose-headings:text-navy prose-a:text-teal max-w-none font-body leading-relaxed text-ink-muted"
          >
            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide when using our website, including: name, email address, phone number, organization name, and any information submitted through our contact forms. We may also automatically collect certain technical information such as IP address, browser type, and pages visited.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">How We Use Your Information</h3>
            <p>
              We use the information we collect to: respond to your inquiries and requests, provide information about our services, improve our website and user experience, comply with legal obligations, and communicate with you about opportunities relevant to your expressed interests.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Cookies and Tracking</h3>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Data Security</h3>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Your Rights</h3>
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us at the information below.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Contact for Privacy Inquiries</h3>
            <p>
              For questions about this privacy policy, contact us at: <br/>
              Email: oglennenterprises@gmail.com <br/>
              Phone: 1-800-379-5426
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Changes to This Policy</h3>
            <p>
              We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
