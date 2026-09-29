import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import PlaceholderNote from '../components/ui/PlaceholderNote';

{/* NOTE: These terms of use are a template/placeholder. Final legal text must be reviewed and approved by an attorney before launch. */}

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use — OGlenn Enterprises LLC</title>
        <meta name="description" content="OGlenn Enterprises LLC terms of use for website visitors." />
      </Helmet>

      <section className="py-24 bg-surface text-ink min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionHeading title="Terms of Use" subtitle="Last updated: [Date — confirm before launch]" align="left" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg prose-headings:text-navy prose-a:text-teal max-w-none font-body leading-relaxed text-ink-muted"
          >
            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Acceptance of Terms</h3>
            <p>
              By accessing and using the OGlenn Enterprises LLC website (oglennenterprises.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Use of Website</h3>
            <p>
              This website is provided for informational purposes about OGlenn Enterprises LLC and its services. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of OGlenn Enterprises LLC or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Disclaimer of Warranties</h3>
            <p>
              This website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. OGlenn Enterprises LLC does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Limitation of Liability</h3>
            <p>
              In no event shall OGlenn Enterprises LLC be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use this website.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Governing Law</h3>
            <PlaceholderNote label='[Confirm governing state/jurisdiction with client — e.g., "These terms shall be governed by the laws of the State of [State], without regard to conflict of law principles."]'>
              <p>
                [Placeholder governing law text]
              </p>
            </PlaceholderNote>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms.
            </p>

            <h3 className="text-xl font-heading font-semibold text-navy mt-8 mb-4">Contact</h3>
            <p>
              For questions about these Terms of Use, contact us at: <br/>
              Email: oglennenterprises@gmail.com <br/>
              Phone: 1-800-379-5426
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
