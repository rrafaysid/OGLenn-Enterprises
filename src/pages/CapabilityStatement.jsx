import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';
import PlaceholderNote from '../components/ui/PlaceholderNote';
import { naicsCodes } from '../data/naicsCodes';
import { certifications } from '../data/certifications';

export default function CapabilityStatement() {
  const coreCompetencies = [
    "Engineering Consulting & Process Optimization",
    "STEM Education Curriculum & Program Development",
    "Medical & Scientific Services (Technical support, Lab oversight)",
    "Community Health Programming & Education",
    "Leadership & Professional Development Training",
    "Chaplaincy, Emotional Care & Crisis Support",
    "Government & Institutional Support Services"
  ];

  const differentiators = [
    "Multidisciplinary capabilities (Engineering, STEM, Health, Leadership, Chaplaincy)",
    "Led by PhD-level engineer/scientist with 30+ years corporate and academic experience",
    "Proven track record across federal agencies, K-12, higher ed, and healthcare",
    "Holistic approach bridging technical solutions with human-centric program delivery",
    "Deeply rooted in diverse communities with established cultural competency"
  ];

  const primaryNaics = naicsCodes.filter(c => c.primary || c.category === "Professional, Scientific & Technical Services").slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Capability Statement — OGlenn Enterprises LLC</title>
        <meta name="description" content="Download the OGlenn Enterprises LLC capability statement — a comprehensive overview of our competencies, certifications, and contracting information." />
      </Helmet>

      {/* Note: In index.css, .capability-statement-page defines print styles */}
      <div className="capability-statement-page bg-surface py-12 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Download Button (hidden in print) */}
          <div className="mb-8 flex justify-end print:hidden">
            {/* TODO: Client must supply the final PDF file at public/documents/OGlenn-Enterprises-Capability-Statement.pdf */}
            <a 
              href="/documents/OGlenn-Enterprises-Capability-Statement.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              <Download className="w-5 h-5" />
              Download Official PDF
            </a>
          </div>

          {/* Statement Document Container */}
          <div className="bg-white shadow-xl p-8 md:p-12 border-t-8 border-navy">
            
            {/* Header */}
            <header className="border-b-2 border-border pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-black text-navy uppercase tracking-tight">OGlenn Enterprises LLC</h1>
                <p className="text-lg text-gold font-bold mt-2">Engineering Knowledge. Developing People. Transforming Communities.</p>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-ink-muted text-right">
                <p className="font-bold text-navy">CAPABILITY STATEMENT</p>
                <p>oglennenterprises@gmail.com</p>
                <p>1-800-379-5426</p>
              </div>
            </header>

            {/* Overview */}
            <section className="mb-8">
              <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">COMPANY OVERVIEW</h2>
              <p className="text-ink text-sm leading-relaxed">
                OGlenn Enterprises LLC exists to transform expertise into impact. We are a multidisciplinary professional services firm providing innovative engineering, scientific, educational, workforce development, healthcare, leadership, and community-based solutions. Led by a PhD-level engineer and educator, we deliver holistic solutions that help government agencies, educational institutions, healthcare organizations, and community partners accomplish their missions.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div>
                <section className="mb-8">
                  <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">CORE COMPETENCIES</h2>
                  <ul className="space-y-2 text-sm text-ink">
                    {coreCompetencies.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold font-bold mt-0.5">•</span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">DIFFERENTIATORS</h2>
                  <ul className="space-y-2 text-sm text-ink">
                    {differentiators.map((diff, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold font-bold mt-0.5">•</span>
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Right Column */}
              <div>
                <section className="mb-8">
                  <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">COMPANY DATA</h2>
                  <div className="bg-surface-alt p-4 rounded text-sm text-ink space-y-3">
                    <PlaceholderNote className="!p-2 !text-xs">
                      <div><span className="font-bold text-navy">UEI:</span> [Insert UEI]</div>
                      <div><span className="font-bold text-navy">CAGE Code:</span> [Insert CAGE]</div>
                      <div><span className="font-bold text-navy">DUNS:</span> [Insert DUNS]</div>
                    </PlaceholderNote>
                    <div><span className="font-bold text-navy">Entity Structure:</span> LLC</div>
                    <div><span className="font-bold text-navy">Socioeconomic:</span> Small Business (Self-Certified)</div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">PRIMARY NAICS CODES</h2>
                  <div className="grid grid-cols-1 gap-2 text-sm text-ink">
                    {primaryNaics.map((code) => (
                      <div key={code.code} className="flex gap-3">
                        <span className="font-bold text-navy min-w-[60px]">{code.code}</span>
                        <span className="truncate" title={code.title}>{code.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-ink-muted italic">Additional codes available.</div>
                </section>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">CERTIFICATIONS</h2>
                <ul className="space-y-1 text-sm text-ink">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>• {cert.name}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-navy border-b border-border pb-2 mb-4">PAST PERFORMANCE SNAPSHOT</h2>
                <PlaceholderNote className="!p-4">
                  <ul className="space-y-3 text-sm text-ink">
                    <li><span className="font-bold text-navy">[Agency/Client Name 1]</span> - Brief description of services provided and outcomes.</li>
                    <li><span className="font-bold text-navy">[Agency/Client Name 2]</span> - Brief description of services provided and outcomes.</li>
                  </ul>
                </PlaceholderNote>
              </section>
            </div>

            {/* Footer Contact */}
            <footer className="mt-12 pt-6 border-t-2 border-border text-center text-sm text-ink-muted">
              <PlaceholderNote className="inline-block mx-auto">
                <p className="font-bold text-navy mb-1">CONTACT INFORMATION</p>
                <p>Odell Glenn Jr., PhD | Principal</p>
                <p>[Street Address], [City], [State] [ZIP]</p>
                <p>Phone: 1-800-379-5426 | Email: oglennenterprises@gmail.com</p>
              </PlaceholderNote>
            </footer>

          </div>
        </div>
      </div>
    </>
  );
}
