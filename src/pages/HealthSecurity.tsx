import React from 'react';
import InfoCard from '@/components/InfoCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { HeartPulse, Stethoscope, Ambulance, Shield, Cctv, ArrowRight } from 'lucide-react';

// Data collections
const healthServices = [
  {
    icon: HeartPulse, color: "bg-blue-50 text-blue-600", title: "Regular Health Check-ups",
    description: "Our residents receive routine health assessments, including vital signs monitoring, medication reviews, and preventive screenings to detect and address health issues early.",
    bulletPoints: ["Weekly vital sign monitoring", "Monthly doctor visits", "Quarterly comprehensive assessments"]
  },
  {
    icon: Stethoscope, color: "bg-green-50 text-green-600", title: "Medical Staff",
    description: "Discuss your family member’s care needs with management and confirm the staffing, clinical support and services currently available before arranging admission.",
    bulletPoints: ["Confirm nursing support and hours", "Ask about physician visits", "Discuss specialist referrals and individual needs"]
  },
  {
    icon: Ambulance, color: "bg-amber-50 text-amber-600", title: "Emergency Services",
    description: "We maintain emergency protocols and ambulance services to ensure immediate response and transportation in case of medical emergencies.",
    bulletPoints: ["On-call ambulance service", "Emergency response training for all staff", "Coordination with nearby hospitals"]
  }
];

const additionalHealthServices = [
  { title: "Medication Management", description: "Our staff ensures timely and correct administration of medications as prescribed by physicians." },
  { title: "Physiotherapy", description: "Regular sessions to maintain mobility, reduce pain, and improve overall physical functioning." },
  { title: "Nutritional Planning", description: "Personalized dietary plans considering health conditions, preferences, and nutritional needs." },
  { title: "Mental Health Support", description: "Counseling services and activities to promote psychological well-being and emotional health." }
];

const cctvFeatures = [
  "24/7 video surveillance of all entry and exit points",
  "Monitoring of common areas while respecting privacy in personal spaces",
  "Digital recording system for security review if needed",
  "Regular maintenance and upgrades of surveillance equipment"
];

const securityMeasures = [
  {
    icon: Shield, color: "bg-blue-50 text-blue-600", title: "Security Personnel",
    description: "Trained security staff maintain vigilance around the clock to ensure the safety of our residents and the security of our premises.",
    bulletPoints: ["Professional security guards", "Regular patrols throughout the grounds", "Visitor verification system"]
  },
  {
    icon: ArrowRight, color: "bg-green-50 text-green-600", title: "Access Control",
    description: "Secure entry systems to monitor and control access to the facility, ensuring only authorized individuals can enter.",
    bulletPoints: ["Electronic access cards", "Visitor registration system", "Monitored entry points"]
  },
  {
    icon: HeartPulse, color: "bg-amber-50 text-amber-600", title: "Emergency Response",
    description: "Comprehensive emergency response systems to handle any situation quickly and effectively.",
    bulletPoints: ["Emergency call buttons in all rooms", "Trained staff for emergency situations", "Fire safety and evacuation protocols"]
  }
];

const safetyFeatures = [
  { title: "Fire Safety Systems", description: "Comprehensive fire detection and suppression systems, clearly marked exits, and regular evacuation drills.", color: "bg-red-50" },
  { title: "Medical Alert System", description: "Emergency call buttons in all rooms for residents to quickly summon assistance in the facility.", color: "bg-blue-50" },
  { title: "Secure Grounds", description: "Well-lit pathways, secure perimeter, and landscaping designed with safety in mind.", color: "bg-green-50" }
];

// Reusable components (refactored to be more concise)
const SectionTitle = ({ subtitle, title, description, as: Heading = "h2" }: { subtitle: string; title: string; description: string; as?: "h1" | "h2" }) => (
  <div className="text-center mb-8 md:mb-16">
    {subtitle && <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">{subtitle}</span>}
    <Heading className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-sandhya-black mb-4">{title}</Heading>
    <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
    <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">{description}</p>
  </div>
);

const ServiceCard = ({ service }) => (
  <InfoCard icon={<service.icon />} iconClassName={service.color} title={service.title} description={service.description}>
    <ul className="space-y-2">
      {service.bulletPoints.map((point, i) => (
        <li key={i} className="flex items-start text-gray-600"><span className="mr-2 text-gray-800">•</span><span>{point}</span></li>
      ))}
    </ul>
  </InfoCard>
);

const HealthSecurity = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-sandhya-blue py-10 sm:py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            as="h1"
            subtitle="Our Services"
            title="Health & Security"
            description="At Sandhyaneed, the health, safety, and security of our residents are our top priorities. Learn about our comprehensive health services and security measures."
          />
        </div>
      </div>

      {/* Health Services Section */}
      <section className="bg-gradient-to-b from-sandhya-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-3">Healthcare Services</h2>
            <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">We provide comprehensive healthcare services to ensure the well-being of our residents at all times.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-16">
            {healthServices.map((service, idx) => <ServiceCard key={idx} service={service} />)}
          </div>

          {/* Additional Health Services */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-12 shadow-lg mb-8 md:mb-16">
            <h3 className="font-playfair text-2xl font-semibold text-sandhya-black mb-6">Additional Health Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalHealthServices.map((service, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-800 mr-3 text-base sm:text-lg">•</span>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Your Safety"
            title="Security Measures"
            description="We implement comprehensive security protocols to ensure a safe and protected environment for all residents."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-50 text-purple-600 inline-flex rounded-xl p-4"><Cctv className="h-8 w-8" /></div>
                <h2 className="font-playfair text-2xl font-semibold text-sandhya-black">Surveillance Systems</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Our facility is equipped with state-of-the-art CCTV cameras strategically placed throughout
                the premises for continuous monitoring and resident safety.
              </p>
              <ul className="space-y-4 black">
                {cctvFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start"><span className="text-gray-800 mr-3 text-base sm:text-lg">•</span><span className="text-gray-600">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" src="/img/faci/cctv.webp" alt="Security monitoring center" className="object-cover h-full w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-16">
            {securityMeasures.map((measure, idx) => <ServiceCard key={idx} service={measure} />)}
          </div>

          {/* Safety Features */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-12 shadow-lg mb-8 md:mb-16">
            <h3 className="font-playfair text-2xl font-semibold text-sandhya-black mb-8 text-center">Additional Safety Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyFeatures.map((feature, idx) => (
                <div key={idx} className={`${feature.color} rounded-lg p-6 transition-all hover:shadow-md`}>
                  <h4 className="text-xl font-semibold text-sandhya-black mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 cta-button rounded-lg transition-colors duration-300 group">
                <span>Learn More About Our Safety Features</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default HealthSecurity;
