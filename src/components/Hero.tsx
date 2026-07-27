import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Leaf, Coffee, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImage from '/img/main-logo.webp';

const Hero = () => {
  const [loaded, setLoaded] = useState(false), 
        [activeSection, setActiveSection] = useState(0), 
        navigate = useNavigate();
  
  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setActiveSection(prev => (prev + 1) % 3), 4000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const sections = [
    { title: "Peaceful Living", subtitle: "Serene environment for restful retirement", image: "/img/homepage/hero1.webp", color: "from-orange-500/20 to-orange-600/30", icon: <Sun className="h-8 w-8" /> },
    { title: "Vibrant Community", subtitle: "Foster meaningful connections and friendships", image: "img/homepage/hero2.webp", color: "from-purple-500/20 to-purple-600/30", icon: <Coffee className="h-8 w-8" /> },
    { title: "Compassionate Care", subtitle: "Professional staff dedicated to well-being", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop", color: "from-green-500/20 to-green-600/30", icon: <Leaf className="h-8 w-8" /> }
  ];

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, label: "VPO-Dhodsar Jaipur-Sikar Highway", title: "Location", isLink: true, href: "https://maps.app.goo.gl/Xq9AU7hc2Hp7UoVP8", ariaLabel: "View our location on Google Maps" },
    { icon: <Phone className="h-5 w-5" />, label: "+91 96801 47319", title: "Contact" },
    { icon: <Clock className="h-5 w-5" />, label: "Tours daily: 9 AM - 5 PM", title: "Visit Us" }
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", 
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", 
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  ];

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left section */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-16">
        <div className={`max-w-lg transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {/* Logo area */}
          <div className="mb-12">
            <div className="flex items-center"><img src={logoImage} alt="Sandhya Need Senior Care Home" className="h-12 w-auto" /></div>
            <h2 className="text-teal-600 font-medium">SANDHYANEED</h2>
          </div>
          
          {/* Main content */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6 leading-tight">Senior Living <br /><span className="text-teal-600">Reimagined</span></h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">Sandhyaneed combines homelike comfort, attentive care, and vibrant community life to create an exceptional living experience for seniors.</p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 h-auto text-base rounded-xl shadow-lg" onClick={() => navigate("/about")}>About Us</Button>
            <Button variant="outline" className="border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-8 py-6 h-auto text-base rounded-xl" onClick={() => navigate("/contact")}>Contact Us</Button>
          </div>
          
          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, idx) => (
              <div key={idx} 
                className={`flex gap-3 items-start ${item.isLink ? "cursor-pointer group" : ""}`}
                onClick={item.isLink ? () => window.open(item.href, '_blank', 'noopener,noreferrer') : undefined}
                role={item.isLink ? "button" : undefined}
                aria-label={item.isLink ? item.ariaLabel : undefined}
                tabIndex={item.isLink ? 0 : undefined}>
                <div className="p-2 bg-gray-100 text-teal-600 rounded-lg">{item.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <div className="flex items-center">
                    <p className={`text-sm ${item.isLink ? "text-teal-600 group-hover:underline" : "text-gray-500"}`}>{item.label}</p>
                    {item.isLink && <ExternalLink className="h-3 w-3 ml-1 text-teal-600" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section - image slider */}
      <div className="w-full md:w-1/2 h-screen md:h-auto relative bg-gray-900">
        <div className="relative h-full">
          {sections.map((section, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${activeSection === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <img src={section.image} alt={`Slide ${idx+1}`} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-b ${section.color}`} />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 text-white">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block mb-4">{section.icon}</div>
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                <p className="text-white/80">{section.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider navigation dots */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {sections.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSection(idx)} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"}`} 
              aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>
        
        {/* Since 2015 label */}
        <div className="hidden z-50 lg:flex absolute top-1/2 -left-12 -rotate-90 transform -translate-y-1/2 items-center gap-4">
          <div className="w-16 h-px bg-white"></div>
          <span className="text-white uppercase tracking-widest text-sm font-medium">Since 2015</span>
        </div>
      </div>

      {/* Ratings badge */}
      <div className={`hidden md:block absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <img src={avatar} alt={`Resident ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-sm font-medium"><span className="text-teal-600">4.9</span> from 200+ families</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;