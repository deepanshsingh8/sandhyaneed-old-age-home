import React, { useState, useRef, useEffect } from 'react';
import { Filter, Leaf, ChevronLeft, ChevronRight, X, Home, Calendar, FileText, Stethoscope, Image, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

// Data and configuration
const categoryOptions = [
  { id: "all", title: "All Photos", icon: Filter, iconBg: "bg-gray-50 text-gray-600" },
  { id: "rooms", title: "Rooms", icon: Home, iconBg: "bg-blue-50 text-blue-600" },
  { id: "activities", title: "Activities", icon: Calendar, iconBg: "bg-green-50 text-green-600" },
  { id: "facilities", title: "Facilities", icon: FileText, iconBg: "bg-amber-50 text-amber-600" },
  { id: "garden", title: "Garden", icon: Leaf, iconBg: "bg-emerald-50 text-emerald-600" },
  { id: "health-checkup", title: "Health Checkup", icon: Stethoscope, iconBg: "bg-purple-50 text-purple-600" }
];

const galleryImages = [
  // Rooms
  { src: "/img/room/flat.webp", caption: "Comfortable private room", category: "rooms" },
  { src: "/img/room/doublebed.webp", caption: "Shared accommodation", category: "rooms" },
  { src: "/img/room/suite.webp", caption: "Luxury suite", category: "rooms" },
  { src: "/img/faci/common-area.webp", caption: "Family room", category: "rooms" },
  { src: "/img/room/tv.webp", caption: "TV Cabinet", category: "rooms" },
  { src: "/img/room/ac.webp", caption: "AC Rooms", category: "rooms" },
  { src: "/img/room/washroom.webp", caption: "Washroom", category: "rooms" },
  
  // Activities
  { src: "/img/events/aarti.webp", caption: "Aarti in Temple", category: "activities" },
  { src: "/img/events/tour.webp", caption: "tour", category: "activities" },
  { src: "/img/events/activity.webp", caption: "Morning walk", category: "activities" },
  { src: "/img/events/event.webp", caption: "Cultural program", category: "activities" },
  { src: "/img/events/event3.webp", caption: "Culural program", category: "activities" },
  { src: "/img/events/celebrate2.webp", caption: "Cultural program", category: "activities" },
  { src: "/img/events/celebrate.webp", caption: "Cultural program", category: "activities" },
  { src: "/img/events/activity2.webp", caption: "Cultural program", category: "activities" },
  
  // Facilities
  { src: "/img/room/dining-hall.webp", caption: "Dining hall", category: "facilities" },
  { src: "/img/faci/library.webp", caption: "Library", category: "facilities" },
  { src: "/img/faci/common-area2.jpg", caption: "Common area", category: "facilities" },
  { src: "/img/faci/gym.webp", caption: "Workout Machine", category: "facilities" },
  { src: "/img/faci/gym2.webp", caption: "Workout Machine", category: "facilities" },
  { src: "/img/faci/transport.webp", caption: "Transportation", category: "facilities" },
  { src: "/img/faci/ramp.webp", caption: "Ramp for wheelchair", category: "facilities" },

  // Garden
  { src: "/img/garden/view.webp", caption: "Sandhya Need", category: "garden" },
  { src: "/img/garden/night.webp", caption: "Sandhya Need Night view", category: "garden" },
  { src: "/img/garden/garden2.webp", caption: "Main Garden", category: "garden" },
  { src: "/img/garden/garden.webp", caption: "Temple", category: "garden" },
  { src: "/img/garden/garden3.webp", caption: "Walking path", category: "garden" },
  { src: "/img/garden/garden4.webp", caption: "Walking path", category: "garden" },
  { src: "/img/garden/garden5.webp", caption: "Seating area", category: "garden" },
  
  // Health Checkup
  { src: "/img/health/health1.webp", caption: "Weekly checkupss", category: "health-checkup" },
  { src: "/img/health/health2.webp", caption: "Weekly checkups", category: "health-checkup" },
  { src: "/img/health/health3.webp", caption: "Weekly checkups", category: "health-checkup" },
  { src: "/img/health/health5.webp", caption: "Weekly checkups", category: "health-checkup" }
];

const viewModeOptions = [
  { id: "masonry", title: "Masonry", icon: Grid },
  { id: "carousel", title: "Carousel", icon: Image },
  { id: "grid", title: "Grid", icon: Grid },
];

// Animation variants
const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 }}
  },
  image: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 }}
  },
  header: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 }}
  },
  text: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
  }
};

// PhotoViewer component
const PhotoViewer = ({ isOpen, onClose, currentImage, onPrev, onNext }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <X className="w-6 h-6" />
      </button>
      <button onClick={onPrev} className="absolute left-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <motion.div 
        key={currentImage.src}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }} className="max-w-4xl max-h-full px-4"
      >
        <img src={currentImage.src} alt={currentImage.caption} className="max-h-screen mx-auto object-contain" />
        <div className="text-center text-white mt-4">
          <p className="text-xl font-medium">{currentImage.caption}</p>
          <p className="text-sm opacity-70 mt-1">
            {categoryOptions.find(cat => cat.id === currentImage.category)?.title}
          </p>
        </div>
      </motion.div>
      
      <button onClick={onNext} className="absolute right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <ChevronRight className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

// Main Gallery component
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("masonry");
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const carouselRef = useRef(null);

  // Filter images based on selected category
  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
    
  // Photo viewer handlers
  const openPhotoViewer = (index) => { setCurrentPhotoIndex(index); setIsPhotoViewerOpen(true); };
  const closePhotoViewer = () => setIsPhotoViewerOpen(false);
  const goToPrevPhoto = () => setCurrentPhotoIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
  const goToNextPhoto = () => setCurrentPhotoIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPhotoViewerOpen) return;
      if (e.key === 'ArrowLeft') goToPrevPhoto();
      if (e.key === 'ArrowRight') goToNextPhoto();
      if (e.key === 'Escape') closePhotoViewer();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoViewerOpen]);

  // Category badge component
  const CategoryBadge = ({ category, className = "" }) => {
    const cat = categoryOptions.find(c => c.id === category);
    return (
      <span className={`flex items-center ${className}`}>
        {React.createElement(cat?.icon, { className: "w-3 h-3 mr-1" })}
        {cat?.title}
      </span>
    );
  };

  // Gallery view renderers
  const galleryViews = {
    masonry: () => {
      // Split images into 3 columns
      const columns = [[], [], []];
      filteredImages.forEach((image, index) => columns[index % 3].push({...image, index}));
      
      return (
        <motion.div variants={variants.container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((image) => (
                <motion.div 
                  key={image.index} variants={variants.image}
                  className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openPhotoViewer(image.index)}
                  style={{ height: `${Math.floor(Math.random() * 150) + 250}px` }}
                >
                  <img 
                    src={image.src} alt={image.caption} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-medium">{image.caption}</h3>
                      <CategoryBadge category={image.category} className="text-sm opacity-80" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <CategoryBadge category={image.category} className="px-2 py-1 rounded-full bg-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      );
    },
    
    carousel: () => (
      <div className="relative overflow-hidden py-8">
        <div ref={carouselRef} className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-6 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div 
              key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="snap-center shrink-0 w-full md:w-4/5 lg:w-2/3 p-2"
            >
              <div className="relative h-96 w-full rounded-xl overflow-hidden cursor-pointer shadow-lg"
                   onClick={() => openPhotoViewer(index)}>
                <img src={image.src} alt={image.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{image.caption}</h3>
                    <CategoryBadge category={image.category} className="text-sm opacity-80 mt-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 text-gray-800 hover:bg-white/75 transition-all"
                onClick={() => carouselRef.current?.scrollBy({ left: -carouselRef.current.offsetWidth * 0.8, behavior: 'smooth' })}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 text-gray-800 hover:bg-white/75 transition-all"
                onClick={() => carouselRef.current?.scrollBy({ left: carouselRef.current.offsetWidth * 0.8, behavior: 'smooth' })}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    ),
    
    grid: () => (
      <motion.div variants={variants.container} initial="hidden" animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <motion.div key={index} variants={variants.image}
                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                     onClick={() => openPhotoViewer(index)}>
            <div className="relative h-64 overflow-hidden">
              <img src={image.src} alt={image.caption} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-2 left-2 bg-white/80 rounded-full px-3 py-1 text-xs font-medium">
                <CategoryBadge category={image.category} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{image.caption}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div className="bg-gradient-to-b from-white to-blue-50 py-16"
                    initial="hidden" animate="visible" variants={variants.header}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span variants={variants.text} className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Visual Experience
            </motion.span>
            <motion.h1 variants={variants.text} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </motion.h1>
            <motion.div variants={variants.text} className="w-16 h-1 bg-gray-900 mx-auto mb-6"></motion.div>
            <motion.p variants={variants.text} className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore life at Sandhyaneed through our collection of photographs showcasing our facilities, activities, and community.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Controls Section */}
        <section className="py-4 bg-white sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">            
            <div className="flex flex-wrap justify-between items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                {categoryOptions.map((category) => (
                  <button key={category.id} onClick={() => setActiveFilter(category.id)}
                          className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 flex items-center
                            ${activeFilter === category.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
                    {React.createElement(category.icon, { className: "h-3 w-3 mr-1" })}
                    <span className="hidden sm:inline">{category.title}</span>
                  </button>
                ))}
              </div>
              
              {/* View Mode Controls */}
              <div className="bg-gray-100 rounded-lg p-1 flex">
                {viewModeOptions.map(mode => (
                  <button key={mode.id} onClick={() => setViewMode(mode.id)}
                          className={`p-1.5 rounded flex items-center ${viewMode === mode.id ? "bg-white shadow" : ""}`}
                          title={mode.title}>
                    {React.createElement(mode.icon, { className: "h-4 w-4" })}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-8 bg-gradient-to-b from-white to-gray-50 flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3 }} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                {React.createElement(categoryOptions.find(cat => cat.id === activeFilter)?.icon, { className: "h-5 w-5 mr-2" })}
                {categoryOptions.find(cat => cat.id === activeFilter)?.title}
              </h2>
              <p className="text-gray-600">{filteredImages.length} photos</p>
            </motion.div>
            
            {galleryViews[viewMode]()}
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
      
      {/* Photo Viewer Modal */}
      <AnimatePresence>
        {isPhotoViewerOpen && (
          <PhotoViewer 
            isOpen={isPhotoViewerOpen}
            onClose={closePhotoViewer}
            currentImage={filteredImages[currentPhotoIndex]}
            onPrev={goToPrevPhoto}
            onNext={goToNextPhoto}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;