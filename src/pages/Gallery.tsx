import React, { useState, useRef, useEffect } from 'react';
import { Filter, Leaf, ChevronLeft, ChevronRight, X, Home, Calendar, FileText, Stethoscope, Image, Grid } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Img from "@/components/Img";

// Data and configuration
const categoryOptions = [
  { id: "all", title: "All Photos", icon: Filter, iconBg: "bg-gray-50 text-gray-600" },
  { id: "rooms", title: "Rooms", icon: Home, iconBg: "bg-blue-50 text-blue-600" },
  { id: "activities", title: "Activities", icon: Calendar, iconBg: "bg-green-50 text-green-600" },
  { id: "facilities", title: "Facilities", icon: FileText, iconBg: "bg-amber-50 text-amber-600" },
  { id: "garden", title: "Garden", icon: Leaf, iconBg: "bg-emerald-50 text-emerald-600" },
  { id: "health-checkup", title: "Health Checkup", icon: Stethoscope, iconBg: "bg-purple-50 text-purple-600" }
];

type GalleryImage = { src: string; caption: string; category: string; alt?: string };

const galleryImages = ([
  // Rooms
  { src: "/img/room/flat.webp", caption: "Comfortable private room", category: "rooms" },
  { src: "/img/room/doublebed.webp", caption: "Shared accommodation", category: "rooms" },
  { src: "/img/room/suite.webp", caption: "Luxury suite", category: "rooms" },
  { src: "/img/faci/common-area.webp", caption: "Family room", alt: "A bright sitting room with floral sofas, chairs, low tables and framed photos of the home.", category: "rooms" },
  { src: "/img/room/tv.webp", caption: "TV unit", alt: "A wall-mounted TV above a low cabinet in a resident room, with a split AC overhead.", category: "rooms" },
  { src: "/img/room/ac.webp", caption: "Air-conditioned room", alt: "A resident room ceiling with a fan and a wall-mounted split air conditioner.", category: "rooms" },
  { src: "/img/room/washroom.webp", caption: "Washroom", category: "rooms" },
  { src: "/img/room/twin-room.webp", caption: "Twin-bed shared room", category: "rooms" },

  // Activities
  { src: "/img/events/aarti.webp", caption: "Temple gathering", alt: "Residents holding sweets stand under the temple arch at Sandhyaneed, with the home behind them.", category: "activities" },
  { src: "/img/events/tour.webp", caption: "Train journey outing", alt: "Residents seated in blue seats inside a modern train coach during an outing.", category: "activities" },
  { src: "/img/events/activity.webp", caption: "Residents in the garden", alt: "Seven women residents in colourful saris and dupattas stand together in the garden at Sandhyaneed.", category: "activities" },
  { src: "/img/events/event.webp", caption: "Outdoor gathering", alt: "Residents and guests wearing rosette badges, seated on sofas and red chairs along the campus driveway.", category: "activities" },
  { src: "/img/events/event3.webp", caption: "Felicitation ceremony", alt: "An elderly man in white holding bouquets and wearing garlands, surrounded by guests under a pink-and-white tent.", category: "activities" },
  { src: "/img/events/celebrate2.webp", caption: "Lawn get-together", alt: "Residents and family sit around a table on the lawn in front of the Sandhyaneed Senior Care Home building.", category: "activities" },
  { src: "/img/events/celebrate.webp", caption: "Group photo with guests", alt: "Elderly women and guests pose together outside the building beside a festive banner.", category: "activities" },
  { src: "/img/events/activity2.webp", caption: "Cheque handover", alt: "Four people in formal clothes stand indoors as a cheque is handed over in front of a landscape painting.", category: "activities" },
  { src: "/img/homepage/group-photo.webp", caption: "Our residents and family", category: "activities" },

  // Facilities
  { src: "/img/room/dining-hall.webp", caption: "Dining hall", category: "facilities" },
  { src: "/img/faci/library.webp", caption: "Library", category: "facilities" },
  { src: "/img/faci/common-area2.webp", caption: "Common room with ramp", alt: "A common room with a wall-mounted TV, a table and chairs, and a tiled ramp with steel handrails.", category: "facilities" },
  { src: "/img/faci/gym.webp", caption: "Exercise cycle", alt: "A grey air exercise bike next to a twister disc in the exercise area.", category: "facilities" },
  { src: "/img/faci/gym2.webp", caption: "Ab trainer and gym ball", alt: "A teal ab exercise frame and a green exercise ball on a patterned rug.", category: "facilities" },
  { src: "/img/faci/transport.webp", caption: "Transportation", category: "facilities" },
  { src: "/img/faci/ramp.webp", caption: "Ramp for wheelchair", category: "facilities" },
  { src: "/img/faci/gym3.webp", caption: "Exercise and yoga area", category: "facilities" },

  // Garden
  { src: "/img/garden/view.webp", caption: "Aerial campus view", alt: "Aerial view of Sandhyaneed: red-and-white buildings around a landscaped garden, a white temple and open farmland.", category: "garden" },
  { src: "/img/garden/night.webp", caption: "Temple at dusk", alt: "The campus temple lit with string lights at dusk, seen across the garden lawn and a covered swing.", category: "garden" },
  { src: "/img/garden/garden2.webp", caption: "Main Garden", alt: "Wide lawn with trimmed hedges, palms and a central flower bed, with the white temple in the background.", category: "garden" },
  { src: "/img/garden/garden.webp", caption: "Campus temple", alt: "White carved stone temple with arched entrances, a tall spire and a row of potted plants along the front.", category: "garden" },
  { src: "/img/garden/garden3.webp", caption: "Hedge archway", alt: "A hedge trained into an archway and a rounded shrub against a red building wall, with grass in front.", category: "garden" },
  { src: "/img/garden/garden4.webp", caption: "Courtyard lawn", alt: "Lawn and palms between the residential building and the temple, edged by hedges.", category: "garden" },
  { src: "/img/garden/garden5.webp", caption: "Newspaper on the bench", alt: "An elderly resident relaxes on a blue garden bench reading a Hindi newspaper.", category: "garden" },
  { src: "/img/garden/garden6.webp", caption: "Garden and temple view", category: "garden" },
  
  // Health Checkup
  { src: "/img/health/health1.webp", caption: "Doctor's consultation", alt: "A doctor in a white coat with a stethoscope fills in a resident's health form.", category: "health-checkup" },
  { src: "/img/health/health2.webp", caption: "Recording health details", alt: "A doctor fills in a health form while talking with an elderly resident in glasses.", category: "health-checkup" },
  { src: "/img/health/health3.webp", caption: "Nurse consultation", alt: "A nurse reviews papers with a woman in a red sari as residents wait nearby.", category: "health-checkup" },
  { src: "/img/health/health5.webp", caption: "Health camp registration", alt: "A seated elderly woman holds leaflets as a staff member records her details on forms.", category: "health-checkup" }
] as GalleryImage[]).map(image => ({ ...image, alt: image.alt ?? `${image.caption} at Sandhyaneed Old Age Home near Jaipur` }));

const viewModeOptions = [
  { id: "masonry", title: "Masonry", icon: Grid },
  { id: "carousel", title: "Carousel", icon: Image },
  { id: "grid", title: "Grid", icon: Grid },
];

// PhotoViewer component
const PhotoViewer = ({ isOpen, onClose, currentImage, onPrev, onNext }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLButtonElement>('button')?.focus();
    const containFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialog) return;
      const buttons = dialog.querySelectorAll<HTMLButtonElement>('button');
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener('keydown', containFocus);
    return () => {
      document.removeEventListener('keydown', containFocus);
      trigger?.focus();
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog" aria-modal="true" aria-label="Photo viewer" className="animate-fade-in fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center pb-20 sm:pb-0"
    >
      <button aria-label="Close photo viewer" onClick={onClose} className="absolute top-4 right-4 min-h-11 min-w-11 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <X className="w-6 h-6" />
      </button>
      <button aria-label="Previous photo" onClick={onPrev} className="absolute bottom-5 left-[calc(50%-4rem)] sm:bottom-auto sm:left-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div key={currentImage.src} className="animate-fade-in max-w-4xl max-h-full px-4">
        <Img src={currentImage.src} alt={currentImage.alt} loading="eager" sizes="(min-width: 896px) 896px, 100vw" className="max-h-[70dvh] max-w-full mx-auto object-contain" />
        <div className="text-center text-white mt-4">
          <p className="text-xl font-medium">{currentImage.caption}</p>
          <p className="text-sm opacity-70 mt-1">
            {categoryOptions.find(cat => cat.id === currentImage.category)?.title}
          </p>
        </div>
      </div>

      <button aria-label="Next photo" onClick={onNext} className="absolute bottom-5 right-[calc(50%-4rem)] sm:bottom-auto sm:right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

// Main Gallery component
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("masonry");
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPhotoViewerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isPhotoViewerOpen]);

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
      if (e.key === 'ArrowLeft') setCurrentPhotoIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
      if (e.key === 'ArrowRight') setCurrentPhotoIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1);
      if (e.key === 'Escape') closePhotoViewer();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoViewerOpen, filteredImages.length]);

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
    masonry: () => (
      <div className="columns-2 lg:columns-3 gap-3 md:gap-4">
        {filteredImages.map((image, index) => (
          <button type="button" key={image.src}
            aria-label={`View ${image.caption}`}
            className="relative mb-3 md:mb-4 block w-full break-inside-avoid aspect-[4/5] md:aspect-auto md:h-[var(--photo-height)] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group text-left focus-visible:ring-2 focus-visible:ring-teal-700"
            style={{ '--photo-height': `${(index % 4) * 40 + 250}px` } as React.CSSProperties}
            onClick={() => openPhotoViewer(index)}>
            <Img src={image.src} alt={image.alt} priority={index < 2} sizes="(min-width: 1024px) 33vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 md:p-4">
              <h3 className="text-white text-xs leading-snug sm:text-lg font-medium">{image.caption}</h3>
              <CategoryBadge category={image.category} className="hidden md:flex text-white text-sm opacity-80" />
            </div>
          </button>
        ))}
      </div>
    ),

    carousel: () => (
      <div className="relative overflow-hidden py-8">
        <div ref={carouselRef} className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide pb-6 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index} style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
              className="animate-fade-in snap-center shrink-0 w-full md:w-4/5 lg:w-2/3 p-2"
            >
              <button type="button" aria-label={`View ${image.caption}`} className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden cursor-pointer shadow-lg text-left focus-visible:ring-2 focus-visible:ring-teal-700"
                   onClick={() => openPhotoViewer(index)}>
                <Img src={image.src} alt={image.alt} sizes="(min-width: 1024px) 67vw, (min-width: 768px) 80vw, 100vw" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{image.caption}</h3>
                    <CategoryBadge category={image.category} className="text-sm opacity-80 mt-2" />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <button type="button" aria-label="Scroll to previous photos" className="absolute left-4 top-1/2 -translate-y-1/2 min-h-11 min-w-11 p-2 rounded-full bg-white/50 text-gray-800 hover:bg-white/75 transition-all"
                onClick={() => carouselRef.current?.scrollBy({ left: -carouselRef.current.offsetWidth * 0.8, behavior: 'smooth' })}>
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button type="button" aria-label="Scroll to next photos" className="absolute right-4 top-1/2 -translate-y-1/2 min-h-11 min-w-11 p-2 rounded-full bg-white/50 text-gray-800 hover:bg-white/75 transition-all"
                onClick={() => carouselRef.current?.scrollBy({ left: carouselRef.current.offsetWidth * 0.8, behavior: 'smooth' })}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    ),

    grid: () => (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <button type="button" aria-label={`View ${image.caption}`} key={index}
                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-teal-700"
                     onClick={() => openPhotoViewer(index)}>
            <div className="relative aspect-[4/3] sm:aspect-auto sm:h-64 overflow-hidden">
              <Img src={image.src} alt={image.alt} sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="hidden sm:block absolute top-2 left-2 bg-white/80 rounded-full px-3 py-1 text-xs font-medium">
                <CategoryBadge category={image.category} />
              </div>
            </div>
            <div className="p-2.5 sm:p-4">
              <h3 className="text-xs sm:text-base leading-snug font-medium text-gray-900">{image.caption}</h3>
            </div>
          </button>
        ))}
      </div>
    )
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-blue-50 py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Visual Experience
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Explore life at Sandhyaneed through our collection of photographs showcasing our facilities, activities, and community.
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <section className="py-4 bg-white sticky top-16 md:top-20 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
              {/* Category Filters */}
              <div className="flex w-full min-w-0 gap-2 items-center overflow-x-auto pb-1 lg:w-auto">
                {categoryOptions.map((category) => (
                  <button key={category.id} aria-pressed={activeFilter === category.id} onClick={() => setActiveFilter(category.id)}
                          className={`shrink-0 min-h-11 px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 flex items-center
                            ${activeFilter === category.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
                    {React.createElement(category.icon, { className: "h-3 w-3 mr-1" })}
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Controls */}
              <div className="bg-gray-100 rounded-lg p-1 flex self-end shrink-0">
                {viewModeOptions.map(mode => (
                  <button key={mode.id} onClick={() => setViewMode(mode.id)}
                          className={`min-h-11 min-w-11 p-2 rounded flex items-center justify-center ${viewMode === mode.id ? "bg-white shadow" : ""}`}
                          title={mode.title} aria-label={`${mode.title} view`} aria-pressed={viewMode === mode.id}>
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
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                {React.createElement(categoryOptions.find(cat => cat.id === activeFilter)?.icon, { className: "h-5 w-5 mr-2" })}
                {categoryOptions.find(cat => cat.id === activeFilter)?.title}
              </h2>
              <p className="text-gray-600">{filteredImages.length} photos</p>
            </div>

            {galleryViews[viewMode]()}
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />

      {/* Photo Viewer Modal */}
      {isPhotoViewerOpen && (
          <PhotoViewer
            isOpen={isPhotoViewerOpen}
            onClose={closePhotoViewer}
            currentImage={filteredImages[currentPhotoIndex]}
            onPrev={goToPrevPhoto}
            onNext={goToNextPhoto}
          />
        )}
    </div>
  );
};

export default Gallery;
