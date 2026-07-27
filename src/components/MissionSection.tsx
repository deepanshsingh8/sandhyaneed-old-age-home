import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-36 bg-sandhya-gray bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="/img/homepage/innogration.webp" 
                  alt="Comfortable living space at Sandhyaneed - Best Old Age Home in Rajasthan" 
                  className="object-cover h-full w-full rounded-lg shadow-md"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sandhya-peach rounded-lg p-4 shadow-md hidden md:block">
                <span className="font-playfair text-xl font-semibold text-sandhya-black">
                  Supporting elderly with dignity
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-playfair text-3xl font-semibold text-sandhya-black mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              Sandhyaneed is recognized as the <strong>best old age home in Rajasthan</strong>, offering trusted elderly care in the heart of Jaipur. Founded in 2015 by Dr. N.C. Lunayach, our mission is to provide a nurturing and affordable space where senior citizens receive love, respect, and quality care.
            </p>
            <p className="text-gray-700 mb-4">
              As a <strong>trusted old age home in Jaipur</strong>, Sandhyaneed was inaugurated by Mr. Sumedha Nand Saraswati (MP, Sikar) and Shri Ratan Jaldhari (MLA, Sikar) to symbolize compassion, dignity, and social responsibility for elderly care across Rajasthan.
            </p>
            <p className="text-gray-700">
              We provide <strong>modern senior living amenities</strong> including a large library, spacious dining area, and a peaceful garden for evening strolls—making Sandhyaneed a top choice for those seeking <strong>affordable senior care in Jaipur</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
