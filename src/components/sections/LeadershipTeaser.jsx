import React from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';

const LeadershipTeaser = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Image Placeholder */}
        <div className="md:w-2/5 bg-surface-alt flex items-center justify-center p-12 relative min-h-[300px]">
          <div className="text-center">
            <div className="w-32 h-32 bg-border rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">
              <User className="w-16 h-16 text-ink-muted" />
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-ink-muted bg-white px-3 py-1 rounded-full shadow-sm">
              Photo Placeholder
            </span>
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">Founder & Principal Consultant</span>
          </div>
          <h3 className="text-3xl font-heading font-bold text-navy mb-4">
            Odell Glenn Jr., PhD
          </h3>
          <div className="w-12 h-1 bg-gold rounded-full mb-6"></div>
          
          <p className="text-ink-muted leading-relaxed font-body mb-8 text-lg">
            Engineer, scientist, university educator, entrepreneur, author, TEDx speaker, ordained minister, pastor, and community leader with 30+ years of experience across engineering, education, healthcare, and community development.
          </p>
          
          <Link 
            to="/key-personnel" 
            className="inline-flex items-center text-teal font-semibold hover:text-navy transition-colors group w-max"
          >
            Meet Our Team
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeaser;
