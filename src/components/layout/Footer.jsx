import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">OGlenn Enterprises</h3>
            <p className="text-gold font-medium mb-2">
              Engineering Knowledge. Developing People. Transforming Communities.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              A multidisciplinary consulting firm delivering engineering solutions, STEM education, healthcare consulting, and community development services to government agencies and institutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/core-capabilities" className="text-white/70 hover:text-gold transition-colors text-sm">Core Capabilities</Link></li>
              <li><Link to="/government-contracting" className="text-white/70 hover:text-gold transition-colors text-sm">Government Contracting</Link></li>
              <li><Link to="/key-personnel" className="text-white/70 hover:text-gold transition-colors text-sm">Key Personnel</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Government Contracting */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Government Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/government-contracting#naics" className="text-white/70 hover:text-gold transition-colors text-sm">NAICS & PSC Codes</Link></li>
              <li><Link to="/government-contracting#certifications" className="text-white/70 hover:text-gold transition-colors text-sm">Certifications</Link></li>
              <li><Link to="/government-contracting#past-performance" className="text-white/70 hover:text-gold transition-colors text-sm">Past Performance</Link></li>
              <li><Link to="/capability-statement" className="text-white/70 hover:text-gold transition-colors text-sm">Capability Statement</Link></li>
              <li><Link to="/about#quality" className="text-white/70 hover:text-gold transition-colors text-sm">Quality & Compliance</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:18003795426" className="flex items-center space-x-3 text-white/70 hover:text-gold transition-colors group">
                  <Phone className="w-5 h-5 text-teal group-hover:text-gold transition-colors" />
                  <span className="text-sm">1-800-379-5426</span>
                </a>
              </li>
              <li>
                <a href="mailto:oglennenterprises@gmail.com" className="flex items-start space-x-3 text-white/70 hover:text-gold transition-colors group">
                  <Mail className="w-5 h-5 text-teal group-hover:text-gold transition-colors mt-0.5" />
                  <span className="text-sm break-all">oglennenterprises@gmail.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-2 bg-navy-dark p-3 rounded-lg border border-white/10 w-max">
              <ShieldCheck className="w-6 h-6 text-success" />
              <span className="text-sm font-semibold text-white">SAM.gov Registered</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} OGlenn Enterprises LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
