import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { site } from '@/lib/site';
import { legalPages } from '@/lib/legal';

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/facilities", label: "Facilities" },
    { to: "/contact", label: "Contact Us" },
    { to: "/gallery", label: "Gallery" }
  ];

  return (
    <footer className="bg-gradient-to-b from-sandhya-gray to-gray-100 pt-10 md:pt-16 pb-6 md:pb-8 border-t border-sandhya-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-8 md:pb-12">
          {/* Logo and Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-playfair text-2xl font-semibold text-sandhya-black mb-4">Sandhyaneed</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Sandhyaneed Old Age Home offers senior living and companionship in Dhodsar on the Jaipur-Sikar Highway, Rajasthan, serving families near Jaipur since 2015.</p>
            {[
              { Icon: Phone, text: site.phone, href: site.phoneHref },
              { Icon: Phone, text: site.alternatePhone, href: site.alternatePhoneHref },
              { Icon: Mail, text: site.email, href: `mailto:${site.email}` }
            ].map(({ Icon, text, href }, i) => (
              <div key={i} className="flex items-center space-x-3 mb-3 group hover:translate-x-1 transition-transform duration-300">
                <Icon size={18} className="text-sandhya-black" />
                <a href={href} className="text-sm hover:underline">{text}</a>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sandhya-black mb-6 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link to={link.to} className="text-gray-600 hover:text-black flex items-center space-x-2">
                    <span className="w-1 h-1 bg-sandhya-darkGray rounded-full"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="font-bold text-sandhya-black mb-6 text-base sm:text-lg">Visit Us</h3>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin size={18} className="text-sandhya-black flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Sandhyaneed Old Age Home<br />Dhodsar Village<br />Jaipur-Sikar Highway<br />Rajasthan 303712, India
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={18} className="text-sandhya-black" />
              <div className="space-y-1 text-sm text-gray-600">
                <p>Office Hours: {site.officeHours}</p>
                <p>Visiting Hours: {site.visitingHours}</p>
              </div>
            </div>
          </div>

          {/* Stay connected */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-sandhya-black mb-6 text-base sm:text-lg">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">Contact our team for admissions, visits and community events.</p>
            <a href={`mailto:${site.email}`} className="cta-button inline-flex items-center min-h-11 px-4 py-2 rounded-md text-sm">Email Us</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <nav aria-label="Website policies" className="border-t border-sandhya-lightGray py-4">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:text-sm">
            {Object.entries(legalPages).map(([path, page]) => <li key={path}>
              <Link to={path} className="flex min-h-11 items-center leading-relaxed text-gray-600 underline-offset-4 hover:text-teal-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 sm:justify-center">{page.title}</Link>
            </li>)}
          </ul>
        </nav>
        <div className="border-t border-sandhya-lightGray pt-6 grid grid-cols-1 gap-3 items-center text-center text-xs sm:text-sm text-gray-500 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <p className="lg:text-left">&copy; {new Date().getFullYear()} Sandhyaneed Old Age Home. All rights reserved.</p>
          <p className="text-gray-600">A CSR initiative by <strong className="font-semibold text-teal-800">{site.operator}</strong></p>
          <p className="flex items-center justify-self-center lg:justify-self-end">
            Made with <span className="text-red-500 px-1">❤️</span> by
            <a href="https://flux8labs.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-sandhya-black hover:underline font-medium">Flux8labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
