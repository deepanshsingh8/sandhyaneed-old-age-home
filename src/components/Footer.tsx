import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/facilities", label: "Facilities" },
    { to: "/contact", label: "Contact Us" },
    { to: "/gallery", label: "Gallery" }
  ];

  return (
    <footer className="bg-gradient-to-b from-sandhya-gray to-gray-100 pt-16 pb-8 border-t border-sandhya-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Logo and Contact */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-sandhya-black mb-4">Sandhyaneed</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Sandhyaneed is one of the top-rated old age homes in Jaipur, Rajasthan, offering compassionate elderly care in Pink City.</p>
            {[
              { Icon: Phone, text: "+91 94140 47082" },
              { Icon: Mail, text: "contact@sandhyaneed.com" }
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center space-x-3 mb-3 group hover:translate-x-1 transition-transform duration-300">
                <Icon size={18} className="text-sandhya-black" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sandhya-black mb-6 text-lg">Quick Links</h3>
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
            <h3 className="font-bold text-sandhya-black mb-6 text-lg">Visit Us</h3>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin size={18} className="text-sandhya-black flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Sandhyaneed Old Age Home<br />Dhodsar Village<br />Jaipur-Sikar Highway<br />Rajasthan, India
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={18} className="text-sandhya-black" />
              <span className="text-sm text-gray-600">Visiting Hours: 10:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sandhya-black mb-6 text-lg">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for updates and events.</p>
            <div className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md border border-sandhya-lightGray focus:outline-none focus:ring-2 focus:ring-sandhya-darkGray text-sm" />
              <button className="bg-sandhya-darkGray text-white px-4 py-2 rounded-md text-sm hover:bg-black transition-all duration-300">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-sandhya-lightGray pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sandhyaneed Old Age Home. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            A CSR initiative by <span className="ml-1 text-sandhya-black font-medium">NK Shikshan Sankul</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;