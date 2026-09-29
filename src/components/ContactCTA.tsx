
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

const ContactCTA = () => {
  return (
    <section className="py-10 md:py-16 bg-sandhya-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-4">
          Have Questions or Want to Visit?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          We're here to address your questions and concerns. Reach out to our team or schedule a visit to experience Sandhyaneed firsthand.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button asChild variant="cta" className="min-h-11 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" className="min-h-11 border-sandhya-darkGray text-sandhya-black hover:text-black rounded-md">
            <a href={site.phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              <span>{site.phone}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
