import React from 'react';
import { Bed, Utensils, Church, Dumbbell, AirVent, Tv, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedFacilities = () => {
  const facilities = [
    { title: 'Comfortable Accommodations', description: 'Choose from flats, suites, double and four-seater rooms based on your preference and needs.', icon: Bed, color: 'bg-blue-50 text-blue-600' },
    { title: 'Hygienic Food', description: 'Nutritious and well-balanced meals prepared by professional staff in a clean kitchen.', icon: Utensils, color: 'bg-green-50 text-green-600' },
    { title: 'Temple', description: 'A serene prayer area for residents to practice their spiritual beliefs in peace.', icon: Church, color: 'bg-purple-50 text-purple-600' },
    { title: 'Recreational Facilities', description: 'Stay active with our gym, yoga center, library, games, and entertainment options.', icon: Dumbbell, color: 'bg-red-50 text-red-600' },
    { title: 'Air Conditioning', description: 'Climate-controlled environment ensures comfort throughout the year.', icon: AirVent, color: 'bg-cyan-50 text-cyan-600' },
    { title: 'Entertainment', description: 'Music systems and television for relaxation and entertainment.', icon: Tv, color: 'bg-amber-50 text-amber-600' }
  ];
  
  const stats = [
    { value: '24/7', label: 'Care Staff', bg: 'bg-sandhya-peach bg-opacity-20' },
    { value: '100%', label: 'Satisfaction', bg: 'bg-sandhya-purple bg-opacity-20' },
    { value: '15+', label: 'Years Experience', bg: 'bg-blue-50' },
    { value: '50+', label: 'Happy Residents', bg: 'bg-green-50' }
  ];

  const renderFacilityCard = (facility, index) => (
    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-8">
      <div className={`${facility.color} inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}><facility.icon className="h-8 w-8" /></div>
      <h3 className="text-xl font-semibold mb-3 text-sandhya-black group-hover:text-black transition-colors duration-300">{facility.title}</h3>
      <p className="text-gray-600 leading-relaxed">{facility.description}</p>
    </div>
  );

  const renderStatBox = (stat, idx) => (
    <div key={idx} className={`${stat.bg} p-4 rounded-lg flex items-center justify-center`}>
      <div className="text-center">
        <div className="text-4xl font-bold text-sandhya-black mb-2">{stat.value}</div>
        <div className="text-sm text-gray-600">{stat.label}</div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-20 text-sandhya-black rounded-full text-sm font-medium mb-4">Our Amenities</span>
          <h2 className="text-4xl font-playfair font-semibold text-sandhya-black mb-4">Modern Facilities for Comfort</h2>
          <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We provide a range of amenities designed for comfort, health, and enjoyment of our residents.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{facilities.map(renderFacilityCard)}</div>

        <div className="text-center mt-16">
          <Link to="/facilities" className="inline-flex items-center justify-center px-6 py-3 bg-sandhya-darkGray text-white rounded-lg hover:bg-black transition-colors duration-300 group">
            <span>View All Facilities</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-sandhya-black mb-4">Need Custom Accommodations?</h3>
              <p className="text-gray-600 mb-6">We understand that each resident has unique needs. Our team is ready to discuss personalized care plans and accommodation options to ensure your comfort and well-being.</p>
              <Link to="/contact" className="inline-flex items-center text-sandhya-black hover:text-sandhya-purple font-medium transition-colors duration-300">Contact Us For Details<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">{stats.map(renderStatBox)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFacilities;