import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section   */}
        <div className="bg-gradient-to-b from-white to-sandhya-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-sandhya-black mb-4">
                Contact Us
              </h1>
              <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Have questions about our services or want to schedule a visit?
                We're here to help you get the information you need.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information & Form*/}
        <section className="bg-gradient-to-b from-sandhya-blue to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We welcome your inquiries and look forward to assisting you.
                Feel free to contact us through the form, by phone, or email. We
                aim to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-playfair text-3xl font-semibold text-sandhya-black mb-12">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-8">
                    <div className="bg-blue-50 text-blue-600 inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-sandhya-black group-hover:text-black transition-colors duration-300">
                      Visit Us
                    </h3>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      Sandhyaneed Old Age Home
                      <br />
                      Dhodsar Village
                      <br />
                      Jaipur-Sikar Highway
                      <br />
                      Rajasthan, India
                    </address>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-8">
                    <div className="bg-green-50 text-green-600 inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-sandhya-black group-hover:text-black transition-colors duration-300">
                      Contact Information
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-sandhya-black" />
                        <span>+91-96801 47319</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-sandhya-black" />
                        <span>+91 94140 47082</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-sandhya-black" />
                        <span>info@sandhyaneed.org</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-8">
                    <div className="bg-purple-50 text-purple-600 inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-sandhya-black group-hover:text-black transition-colors duration-300">
                      Hours of Operation
                    </h3>
                    <div className="space-y-2 text-gray-600 leading-relaxed">
                      <p>
                        <span className="font-medium">Office Hours:</span>
                        <br />
                        Monday - Saturday: 9:00 AM - 5:00 PM
                      </p>
                      <p>
                        <span className="font-medium">Visiting Hours:</span>
                        <br />
                        Daily: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">
                Location
              </span>
              <h2 className="font-playfair text-4xl font-semibold text-sandhya-black mb-4">
                How to Find Us
              </h2>
              <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Located in the tranquil surroundings of Dhodsar Village on the
                Jaipur-Sikar Highway, our facility is easily accessible by road.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Map embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.48020696331!2d75.6192291!3d27.298155999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cfb4f785079df%3A0x6925edf96d6e5cc9!2sSandhya%20Need!5e0!3m2!1sen!2sin!4v1746901470300!5m2!1sen!2sin"
                width="100%"
                height="338"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;