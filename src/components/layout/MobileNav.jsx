import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const MobileNav = ({ isOpen, onClose, navLinks, govLinks }) => {
  const [isGovOpen, setIsGovOpen] = useState(false);

  // Trap focus and prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const allNavLinks = [...navLinks];
  // Insert government contracting link
  allNavLinks.splice(3, 0, { name: 'Government Contracting', path: '/government-contracting', isDropdown: true });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-dark z-[60] lg:hidden flex flex-col shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="text-white hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col px-6 space-y-2 flex-1">
              {allNavLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col space-y-1">
                      <button
                        onClick={() => setIsGovOpen(!isGovOpen)}
                        className="flex items-center justify-between text-left text-white text-xl font-medium py-3 border-b border-white/10 hover:text-gold transition-colors"
                      >
                        {link.name}
                        {isGovOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                      <AnimatePresence>
                        {isGovOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col space-y-2 pl-4 py-2"
                          >
                            <Link
                              to="/government-contracting"
                              onClick={onClose}
                              className="text-white/70 hover:text-white py-2"
                            >
                              Overview
                            </Link>
                            {govLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.path}
                                onClick={onClose}
                                className="text-white/70 hover:text-white py-2"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className="text-white text-xl font-medium py-3 border-b border-white/10 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-6 mt-auto">
              <Button href="/capability-statement" onClick={onClose} className="w-full">
                Capability Statement
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
