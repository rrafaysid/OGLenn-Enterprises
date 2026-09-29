import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PlaceholderNote = ({ children, label = 'Placeholder' }) => {
  return (
    <div className="border-2 border-dashed border-gold/40 bg-gold/5 rounded-lg p-4 relative my-4">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-4 h-4 text-gold" />
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-ink-muted">
        {children}
      </div>
    </div>
  );
};

export default PlaceholderNote;
