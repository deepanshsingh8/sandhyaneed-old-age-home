import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for your message. We will get back to you soon.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const FormField = ({ id, label, type = 'text', required = false, as = 'input', options = [] }) => {
    const isActive = activeField === id || formData[id];
    const baseClasses = "w-full px-4 py-4 pt-6 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white focus:bg-white shadow-sm";
    const fieldProps = {
      id, name: id, value: formData[id],
      onChange: (e) => setFormData({ ...formData, [e.target.name]: e.target.value }),
      onFocus: () => setActiveField(id),
      onBlur: () => setActiveField(null),
      required, className: baseClasses + (as === 'textarea' ? " resize-none" : "")
    };
    
    return (
      <div className="relative">
        <label htmlFor={id} className={`absolute left-3 transition-all duration-200 ${
          isActive ? '-top-2.5 text-xs text-blue-600 bg-white px-1' : 'top-3.5 text-sm text-gray-500'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        {as === 'textarea' ? <textarea {...fieldProps} rows={5} /> :
         as === 'select' ? (
          <div className="relative">
            <select {...fieldProps} className={baseClasses + " appearance-none"}>
              <option value=""></option>
              {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ) : <input type={type} {...fieldProps} />}
      </div>
    );
  };

  return (
    <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-50 opacity-50"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-purple-50 opacity-50"></div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 flex items-center">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
        Send Us a Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="name" label="Your Name" required={true} />
          <FormField id="email" label="Email Address" type="email" required={true} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="phone" label="Phone Number" type="tel" />
          <FormField id="subject" label="Subject" as="select" required={true}
            options={["General Inquiry", "Admission Information", "Visit Request", "Employment", "Other"]} />
        </div>
        
        <FormField id="message" label="Your Message" as="textarea" required={true} />
        
        <div className="pt-4">
          <Button type="submit" disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg flex items-center justify-center">
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </Button>
        </div>
        
        <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p>We respect your privacy. Fields marked with <span className="text-red-500">*</span> are required</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;