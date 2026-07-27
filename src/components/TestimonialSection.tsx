import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The care and love my father receives at Sandhyaneed is beyond compare. The staff treats him like family, and he's happier than ever.",
    author: "Priya Sharma",
    relation: "Daughter of a resident",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    quote: "Moving to Sandhyaneed was the best decision I made. I have a comfortable home, great friends, and all the support I need.",
    author: "Raj Malhotra",
    relation: "Resident for 3 years",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    quote: "We were worried about our mother living alone, but Sandhyaneed gave her a new lease on life. The facilities are excellent, and security is top-notch.",
    author: "Vikram & Neha Agarwal",
    relation: "Children of a resident",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
];

const TestimonialSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background with pattern */}
    <div className="absolute inset-0 bg-sandhya-purple bg-opacity-20">
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-sandhya-darkGray"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1
            }}
          />
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-30 text-sandhya-black rounded-full text-sm font-medium mb-4">Testimonials</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-sandhya-black mb-4">What Families Say</h2>
        <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Hear from the families and residents who have experienced the Sandhyaneed difference.</p>
      </div>
      
      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sandhya-purple to-sandhya-peach rounded-t-xl"></div>
            
            {/* Quote icon */}
            <div className="mb-6 text-sandhya-purple">
              <svg className="h-10 w-10 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
              </svg>
            </div>
            
            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(item.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />)}
            </div>
            
            <p className="text-gray-700 mb-8 flex-grow italic leading-relaxed">"{item.quote}"</p>
            
            {/* Author info */}
            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center">
              <img src={item.image} alt={item.author} className="h-12 w-12 rounded-full object-cover border-2 border-sandhya-purple border-opacity-20 mr-4" />
              <div>
                <p className="font-semibold text-sandhya-black">{item.author}</p>
                <p className="text-sm text-gray-500">{item.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 mb-4">Want to share your experience with Sandhyaneed?</p>
        <button className="px-6 py-3 bg-sandhya-darkGray text-white rounded-lg hover:bg-black transition-colors duration-300 inline-flex items-center">
          Share Your Story
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default TestimonialSection;