import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const images = [
    { src: '/img/room/suite.webp', alt: 'Comfortable living quarters', caption: 'Modern & Comfortable Living Spaces' },
    { src: '/img/garden/night.webp', alt: 'Beautiful garden at night', caption: 'Serene Garden Spaces' },
    { src: '/img/garden/garden.webp', alt: 'Temple in the garden', caption: 'practicing spirituality' },
    { src: '/img/garden/garden5.webp', alt: 'Outdoor excursion', caption: 'Refreshing Outdoor Excursions' }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden bg-sandhya-purple bg-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-500 text-white rounded-full text-sm font-medium mb-4">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Glimpses of Life at Sandhyaneed
          </h2>
          <div className="w-16 h-1 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Take a virtual tour through our facilities and witness the vibrant
            community life our residents enjoy every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-6 py-3 bg-sandhya-darkGray text-white rounded-lg hover:bg-black transition-colors duration-300 group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;