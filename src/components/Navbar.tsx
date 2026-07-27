import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
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
  
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Sandhya Need Senior Care Home" className="h-12 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
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
            className="md:hidden p-2 rounded-md text-sandhya-black hover:text-black focus:outline-none"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium text-sandhya-black hover:bg-sandhya-purple hover:text-black ${isActive(link.path) ? 'border-l-2 border-sandhya-purple pl-4 bg-sandhya-purple/10' : ''}`}
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