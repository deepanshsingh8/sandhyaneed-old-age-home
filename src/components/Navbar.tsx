import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '/img/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Facilities", path: "/facilities" },
    { title: "Activities", path: "/activities" },
    { title: "Health & Security", path: "/health-security" },
    { title: "Gallery", path: "/gallery" },
    { title: "Rules & Regulations", path: "/rules" },
    { title: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Sandhya Need Senior Care Home" className="h-9 sm:h-11 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`text-sandhya-black hover:text-black px-2 py-1 text-sm font-medium rounded-md hover:bg-sandhya-purple transition duration-300 whitespace-nowrap relative ${isActive(link.path) ? 'font-semibold' : ''}`}
              >
                {link.title}
                {isActive(link.path) && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sandhya-purple"></span>}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-md text-sandhya-black hover:text-black focus-visible:ring-2 focus-visible:ring-teal-700"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-navigation" className="xl:hidden grid grid-cols-2 gap-1 bg-white border-t px-4 py-3 sm:px-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex min-h-11 items-center px-3 py-2 rounded-md text-sm sm:text-base font-medium text-sandhya-black hover:bg-sandhya-purple hover:text-black ${isActive(link.path) ? 'border-l-2 border-sandhya-purple pl-4 bg-sandhya-purple/10' : ''}`}
              aria-current={isActive(link.path) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
