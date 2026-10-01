import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Leaf, Coffee, MapPin, Phone, Clock, ExternalLink, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { site } from "@/lib/site";
import Img from "@/components/Img";

const Hero = () => {
  const [loaded, setLoaded] = useState(false),
        [activeSection, setActiveSection] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setLoaded(true);
    if (paused || reducedMotion) return;
    const timer = setTimeout(() => setActiveSection(prev => (prev + 1) % 3), 4000);
    return () => clearTimeout(timer);
  }, [activeSection, paused, reducedMotion]);

  const sections = [
    { title: "Peaceful Living", subtitle: "Serene environment for restful retirement", image: "/img/homepage/hero1.webp", color: "from-orange-500/20 to-orange-600/30", icon: <Sun className="h-8 w-8" /> },
    { title: "Vibrant Community", subtitle: "Foster meaningful connections and friendships", image: "/img/homepage/hero2.webp", color: "from-purple-500/20 to-purple-600/30", icon: <Coffee className="h-8 w-8" /> },
    { title: "Compassionate Care", subtitle: "Professional staff dedicated to well-being", image: "/img/homepage/community-greeting.webp", color: "from-green-500/20 to-green-600/30", icon: <Leaf className="h-8 w-8" /> }
  ];

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, label: site.streetAddress, title: "Location", href: site.mapsUrl, external: true },
    { icon: <Phone className="h-5 w-5" />, label: site.phone, title: "Contact", href: site.phoneHref, external: false },
    { icon: <Clock className="h-5 w-5" />, label: site.officeHours, title: "Office Hours" },
    { icon: <Clock className="h-5 w-5" />, label: site.visitingHours, title: "Visiting Hours" }
  ];

  return (
    <div className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] flex flex-col md:flex-row">
      {/* Left section */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-5 py-10 sm:p-8 lg:p-12 xl:p-16">
        <div className={`hero-content max-w-lg transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {/* Main content */}
          <h1 className="text-[clamp(2.25rem,10vw,3rem)] md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-800 mb-4 md:mb-6 leading-tight">Senior Living <br /><span className="text-teal-600">Reimagined</span></h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed">Sandhyaneed combines homelike comfort, attentive care, and vibrant community life to create an exceptional living experience for seniors.</p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 mb-8 md:mb-16">
            <Button asChild className="bg-teal-700 hover:bg-teal-800 text-white flex-1 sm:flex-none px-4 py-3 sm:px-8 sm:py-6 min-h-12 h-auto text-sm sm:text-base rounded-xl shadow-lg"><Link to="/about">About Us</Link></Button>
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white flex-1 sm:flex-none px-4 py-3 sm:px-8 sm:py-6 min-h-12 h-auto text-sm sm:text-base rounded-xl"><Link to="/contact">Contact Us</Link></Button>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {contactInfo.map((item, idx) => {
              const Tag = item.href ? "a" : "div";
              return <Tag key={idx}
                className={`flex min-w-0 gap-2 sm:gap-3 items-start rounded-lg ${item.href ? "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700" : ""}`}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                >
                <div className="p-2 shrink-0 bg-gray-100 text-teal-600 rounded-lg">{item.icon}</div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <div className="flex items-center">
                    <p className={`text-xs sm:text-sm ${item.href ? "text-teal-700 group-hover:underline" : "text-gray-500"}`}>{item.label}</p>
                    {item.external && <><ExternalLink aria-hidden="true" className="h-3 w-3 ml-1 shrink-0 text-teal-700" /><span className="sr-only"> (opens Google Maps in a new tab)</span></>}
                  </div>
                </div>
              </Tag>;
            })}
          </div>
        </div>
      </div>

      {/* Right section - image slider */}
      <div className="w-full md:w-1/2 h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)] shrink-0 relative bg-gray-900">
        <div className="relative h-full">
          {sections.map((section, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${activeSection === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              {/* Later slides sit in the viewport behind the first, so lazy loading can't defer them; mount them after hydration. */}
              {(idx === 0 || loaded) && <Img src={section.image} alt={`${section.title} at Sandhyaneed Old Age Home near Jaipur`} priority={idx === 0} sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />}
              <div className={`absolute inset-0 bg-gradient-to-b ${section.color}`} />
              <div className="absolute inset-x-0 bottom-0 p-5 pb-14 sm:p-8 md:p-16 text-white">
                <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl inline-block mb-3 sm:mb-4">{section.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{section.title}</h2>
                <p className="text-sm sm:text-base text-white/80">{section.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider navigation dots */}
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 flex sm:gap-2">
          <button type="button" disabled={loaded && !!reducedMotion} onClick={() => setPaused(value => !value)} aria-label={loaded && reducedMotion ? "Slideshow paused for reduced motion" : paused ? "Play slideshow" : "Pause slideshow"} className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60">
            {paused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
          </button>
          {sections.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSection(idx)}
              className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Go to slide ${idx + 1}`} aria-pressed={activeSection === idx}>
              <span className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === idx ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"}`} />
            </button>
          ))}
        </div>

        {/* Since 2015 label */}
        <div className="hidden z-50 lg:flex absolute top-1/2 -left-12 -rotate-90 transform -translate-y-1/2 items-center gap-4">
          <div className="w-16 h-px bg-white"></div>
          <span className="text-white uppercase tracking-widest text-sm font-medium">Since 2015</span>
        </div>
      </div>

      {/* Established date */}
      <div className={`hidden md:block absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white rounded-full py-3 px-5 shadow-lg text-sm font-medium text-teal-700">
          Serving seniors since 2015
        </div>
      </div>
    </div>
  );
};

export default Hero;
