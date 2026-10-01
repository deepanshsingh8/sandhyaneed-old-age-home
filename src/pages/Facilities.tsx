import React from 'react';
import InfoCard from '@/components/InfoCard';
import { seniorLivingHighlights } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { DoorOpen, Dice4, BriefcaseConveyorBelt, BedDouble, Utensils, Church, Sofa, AirVent, Gamepad, Music, Tv, LibraryBig, Dumbbell, Phone, ArrowRight } from 'lucide-react';
import Img from "@/components/Img";

// Consolidated facility data
const facilities = [
  {
    category: "Accommodation Options",
    items: [
      { title: "Flats", description: "Self-contained units with private bathrooms and kitchenettes for independent living.", icon: DoorOpen, color: 'bg-blue-50 text-blue-600' },
      { title: "Suites", description: "Spacious rooms with en-suite bathrooms and premium furnishings for enhanced comfort.", icon: BriefcaseConveyorBelt, color: 'bg-green-50 text-green-600' },
      { title: "Double-seated Rooms", description: "Shared accommodations for couples or companions with all necessary amenities.", icon: BedDouble, color: 'bg-purple-50 text-purple-600' },
      { title: "Four-Seater Rooms", description: "Communal living spaces for residents who prefer company and social interaction.", icon: Dice4, color: 'bg-red-50 text-red-600' }
    ]
  },
  {
    category: "Comfort & Amenities",
    items: [
      { title: "Hygienic Food", description: "Nutritious and well-balanced meals prepared in a clean kitchen by professional staff.", icon: Utensils, color: 'bg-amber-50 text-amber-600' },
      { title: "Temple", description: "A dedicated spiritual space for prayer, meditation, and religious ceremonies.", icon: Church, color: 'bg-cyan-50 text-cyan-600' },
      { title: "Furnished Rooms", description: "Comfortable beds, wardrobes, tables, chairs, and essential furnishings in all rooms.", icon: Sofa, color: 'bg-blue-50 text-blue-600' },
      { title: "Air Conditioning", description: "Climate control in common areas and select accommodations for year-round comfort.", icon: AirVent, color: 'bg-green-50 text-green-600' }
    ]
  },
  {
    category: "Recreation & Wellness",
    items: [
      { title: "Gymnasium", description: "Equipment for light exercise and physical fitness suitable for seniors.", icon: Dumbbell, color: 'bg-purple-50 text-purple-600' },
      { title: "Indoor Games", description: "Carrom, chess, cards, and other recreational games for entertainment and socializing.", icon: Gamepad, color: 'bg-red-50 text-red-600' },
      { title: "Music System", description: "For listening to music and hosting cultural programs and entertainment events.", icon: Music, color: 'bg-amber-50 text-amber-600' },
      { title: "Television Lounge", description: "Common area with television for news, entertainment, and social viewing.", icon: Tv, color: 'bg-cyan-50 text-cyan-600' }
    ]
  },
  {
    category: "Communication & Services",
    items: [
      { title: "Intercom Facility", description: "Internal communication system for residents to easily contact staff when needed.", icon: Phone, color: 'bg-blue-50 text-blue-600' },
      { title: "Library", description: "Collection of books, magazines, and newspapers in multiple languages.", icon: LibraryBig, color: 'bg-green-50 text-green-600' }
    ]
  }
];

// Room data
const rooms = [
  { type: "Flat", image: "/img/room/flat.webp", description: "Self-contained living with privacy and independence" },
  { type: "Suite", image: "/img/room/suite.webp", description: "Premium accommodations with enhanced amenities" },
  { type: "Double Room", image: "/img/room/doublebed.webp", description: "Comfortable shared spaces for couples" }
];


// Reusable components with reduced lines
const SectionTitle = ({ subtitle, title, description, as: Heading = "h2" }: { subtitle: string; title: string; description: string; as?: "h1" | "h2" }) => (
  <div className="text-center mb-8 md:mb-16">
    {subtitle && <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">{subtitle}</span>}
    <Heading className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-sandhya-black mb-4">{title}</Heading>
    <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
    <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">{description}</p>
  </div>
);

const Facilities = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-sandhya-blue py-10 sm:py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            as="h1"
            subtitle="Our Services"
            title="Senior Living Facilities near Jaipur"
            description="At Sandhyaneed, we offer a range of accommodation options and amenities designed for comfort, engagement, and peace of mind."
          />
        </div>
      </div>

      {/* Facilities Overview */}
      <section className="bg-gradient-to-b from-sandhya-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {facilities.map((category, idx) => (
            <div key={idx} className="mb-12 md:mb-24 last:mb-0">
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-6 md:mb-12 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {category.items.map((facility, index) => (
                  <InfoCard key={index} icon={<facility.icon />} iconClassName={facility.color} title={facility.title} description={facility.description} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodation Gallery */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Rooms"
            title="Our Accommodations"
            description="Explore our comfortable living spaces designed for relaxation and convenience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9">
                  <Img src={room.image} alt={`${room.type} at Sandhyaneed Old Age Home`} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover h-64 w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-sandhya-black group-hover:text-black transition-colors duration-300">{room.type}</h3>
                  <p className="text-gray-600">{room.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 cta-button rounded-lg transition-colors duration-300 group">
              <span>Inquire About Accommodations</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-sandhya-black mb-4">Need Custom Accommodations?</h3>
                <p className="text-gray-600 mb-6">
                  We understand that each resident has unique needs. Our team is ready to discuss personalized care plans and accommodation options to ensure your comfort and well-being.
                </p>
                <a href="/contact" className="inline-flex items-center text-sandhya-black hover:text-sandhya-purple font-medium transition-colors duration-300">
                  Contact Us For Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {seniorLivingHighlights.map((stat, index) => (
                  <div key={index} className={`${stat.bg} bg-opacity-100 p-4 rounded-lg flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sandhya-black mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default Facilities;
