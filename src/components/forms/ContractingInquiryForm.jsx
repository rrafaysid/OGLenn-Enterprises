import React, { useState } from 'react';
import Button from '../ui/Button';

const ContractingInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    agencyOrganization: '',
    email: '',
    phone: '',
    contractVehicle: '',
    naicsCode: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.agencyOrganization.trim()) newErrors.agencyOrganization = 'Agency/Organization is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // TODO: connect to email service (e.g., Formspree, EmailJS, or backend API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '', agencyOrganization: '', email: '', phone: '',
        contractVehicle: '', naicsCode: '', message: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSuccess && (
        <div className="p-4 bg-success/10 text-success rounded-lg font-medium">
          Thank you for your contracting inquiry. A representative will contact you shortly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors`}
            placeholder="Your Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="agencyOrganization" className="block text-sm font-medium text-navy mb-2">Agency / Organization *</label>
          <input
            type="text"
            id="agencyOrganization"
            name="agencyOrganization"
            value={formData.agencyOrganization}
            onChange={handleChange}
            className={`w-full border ${errors.agencyOrganization ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors`}
            placeholder="e.g. Dept of Defense, State of GA"
          />
          {errors.agencyOrganization && <p className="mt-1 text-sm text-red-500">{errors.agencyOrganization}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Official Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${errors.email ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors`}
            placeholder="name@agency.gov"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contractVehicle" className="block text-sm font-medium text-navy mb-2">Target Contract Vehicle (Optional)</label>
          <input
            type="text"
            id="contractVehicle"
            name="contractVehicle"
            value={formData.contractVehicle}
            onChange={handleChange}
            className="w-full border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
            placeholder="e.g. GSA MAS, Seaport-NxG"
          />
        </div>
        
        <div>
          <label htmlFor="naicsCode" className="block text-sm font-medium text-navy mb-2">Target NAICS Code (Optional)</label>
          <input
            type="text"
            id="naicsCode"
            name="naicsCode"
            value={formData.naicsCode}
            onChange={handleChange}
            className="w-full border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
            placeholder="e.g. 541330"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Project Requirements / Inquiry Details *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`w-full border ${errors.message ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none`}
          placeholder="Please describe the scope, timeline, and requirements..."
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div>
        <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </div>
    </form>
  );
};

export default ContractingInquiryForm;
