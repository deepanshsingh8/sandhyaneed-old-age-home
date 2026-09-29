
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedFacilities from '@/components/FeaturedFacilities';
import MissionSection from '@/components/MissionSection';
import TestimonialSection from '@/components/TestimonialSection';
import GalleryPreview from '@/components/GalleryPreview';
import ContactCTA from '@/components/ContactCTA';
import HomeFAQ from '@/components/HomeFAQ';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        <Hero />
        <MissionSection />
        <FeaturedFacilities />
        <TestimonialSection />
        <GalleryPreview />
        <HomeFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
