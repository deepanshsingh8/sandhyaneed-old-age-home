
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedFacilities from '@/components/FeaturedFacilities';
import MissionSection from '@/components/MissionSection';
import TestimonialSection from '@/components/TestimonialSection';
import GalleryPreview from '@/components/GalleryPreview';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <FeaturedFacilities />
        <TestimonialSection />
        <GalleryPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
