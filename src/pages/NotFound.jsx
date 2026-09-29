import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | OGlenn Enterprises LLC</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <div className="min-h-[70vh] bg-navy flex items-center justify-center py-20 px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-8xl md:text-9xl font-heading font-black text-gold mb-6 tracking-tighter">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 font-body mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-lg transition-colors text-lg"
            >
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-colors text-lg"
            >
              Or contact us for help
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
