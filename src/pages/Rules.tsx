import React from 'react';
import { site } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { FileText, Wallet, Home, Coffee, Clock, Users, Shield, HeartPulse, ArrowRight } from 'lucide-react';

const Rules = () => {
  const icons = { FileText, Wallet, Home, Coffee, Clock, Users, HeartPulse };
  const data = {
    sections: [
      {icon: "FileText", title: "Eligibility & Admission", color: "blue", items: [
        {subtitle: "Age Requirement", content: "Residents must be 60 years of age or older at the time of admission."},
        {subtitle: "Health Assessment", content: "A comprehensive health assessment is required before admission to determine if we can adequately meet the individual's care needs."},
        {subtitle: "Documentation", content: "The following documents are required:", list: ["Valid government ID proof", "Recent medical records", "Emergency contact information", "Signed consent forms"]}
      ]},
      {icon: "Wallet", title: "Fees & Payment", color: "green", items: [
        {subtitle: "Fee Structure", content: "Fees vary based on the type of accommodation (flats, suites, double rooms, or four-seated rooms) and the level of care required."},
        {subtitle: "Payment Schedule & Deposit", content: "Payment schedules and security deposits are set out in the applicable admission agreement. Confirm the current amounts, payment instructions and refund conditions with management before making a payment."},
        {subtitle: "Late Payment", content: "A late fee will be applied for payments received after the due date. Consistent late payments may result in a review of residency."}
      ]},
      {icon: "Home", title: "Accommodation Rules", color: "amber", items: [
        {subtitle: "Room Maintenance", content: "Residents are expected to keep their living spaces tidy. Housekeeping services are provided regularly, but personal items should be organized by residents."},
        {subtitle: "Modifications", content: "No structural changes or modifications to the rooms are permitted without prior approval from management."},
        {subtitle: "Electrical Appliances", content: "Use of personal electrical appliances must be approved by management for safety reasons."}
      ]},
      {icon: "Coffee", title: "Meal Services", color: "purple", items: [
        {subtitle: "Meal Schedule", content: "Meals are served at fixed times in the dining hall:", list: ["Breakfast: 8:00 AM - 9:00 AM", "Lunch: 12:30 PM - 1:30 PM", "Evening Tea: 4:30 PM - 5:00 PM", "Dinner: 7:30 PM - 8:30 PM"]},
        {subtitle: "Special Dietary Requirements", content: "Special dietary needs due to medical conditions must be communicated to the management, and we will make reasonable accommodations."}
      ]},
      {icon: "Clock", title: "Visiting Hours & Guest Policies", color: "blue", items: [
        {subtitle: "Visiting Hours", content: `Visitors are welcome ${site.visitingHours.toLowerCase()}. Exceptions may be made in case of emergencies.`},
        {subtitle: "Guest Registration", content: "All visitors must sign in at the reception and obtain a visitor's pass."},
        {subtitle: "Overnight Guests", content: "Overnight stays by guests require prior permission from management and may incur additional charges."}
      ]},
      {icon: "Users", title: "General Conduct", color: "green", items: [
        {subtitle: "Respectful Behavior", content: "Residents are expected to treat fellow residents, staff, and visitors with respect and courtesy at all times."},
        {subtitle: "Noise Levels", content: "Residents should maintain reasonable noise levels, especially during designated quiet hours (10:00 PM to 6:00 AM)."},
        {subtitle: "Smoking & Alcohol", content: "Smoking is prohibited inside the building. Alcohol consumption is restricted to designated areas and should be moderate."}
      ]},
      {icon: "HeartPulse", title: "Health & Safety", color: "amber", items: [
        {subtitle: "Medical Information", content: "Residents must disclose all relevant medical information and keep the management informed of any changes in their health status."},
        {subtitle: "Medication", content: "Staff can assist with medication management if needed. Self-administered medications must be stored safely."},
        {subtitle: "Emergency Protocols", content: "All residents must familiarize themselves with emergency exits and procedures. Regular drills may be conducted."}
      ]}
    ],
    safety: [
      {title: "Fire Safety Systems", description: "Comprehensive fire detection and suppression systems, clearly marked exits, and regular evacuation drills.", color: "bg-red-50"},
      {title: "Medical Alert System", description: "Wearable alert devices for residents to quickly summon assistance from anywhere in the facility.", color: "bg-blue-50"},
      {title: "Secure Grounds", description: "Well-lit pathways, secure perimeter, and landscaping designed with safety in mind.", color: "bg-green-50"}
    ]
  };

  const RuleSection = ({section}) => (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className={`bg-${section.color}-50 text-${section.color}-600 inline-flex rounded-xl p-4`}>
          {React.createElement(icons[section.icon], {className: "h-8 w-8"})}
        </div>
        <h2 className="font-playfair text-2xl font-semibold text-sandhya-black">{section.title}</h2>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-5 sm:p-6 md:p-8">
        <div className="space-y-4">
          {section.items.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-base sm:text-lg font-medium mb-2">{item.subtitle}</h3>
              <p className="text-gray-700">{item.content}</p>
              {item.list && (
                <ul className="space-y-2 mt-2">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-start"><span className="text-gray-800 mr-2">•</span><span className="text-gray-700">{li}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-sandhya-blue py-10 sm:py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">
              Our Policies
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-sandhya-black mb-4">
              Rules & Regulations
            </h1>
            <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Our guidelines are designed to ensure the comfort, safety, and
              well-being of all residents in our community.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="bg-gradient-to-b from-sandhya-blue to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-sandhya-black mb-4">
                Important Notice
              </h2>
              <p className="text-gray-700">
                The following rules and regulations have been established to
                ensure a harmonious, safe, and comfortable living environment
                for all residents at Sandhyaneed Old Age Home. We request all
                residents and their families to familiarize themselves with
                these guidelines and adhere to them diligently.
              </p>
            </div>
          </div>
        </section>
        {/* Download Buttons Section */}
        <section className="py-10 bg-gradient-to-br from-sandhya-purple/10 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sandhya-black mb-8">
              Download Essential Documents
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-10 max-w-2xl mx-auto">
              {[
                {
                  label: "Rules & Regulations",
                  href: "/forms/Sandhaneed rules and Rent wef 21April 2023.pdf",
                  iconPath:
                    "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                },
                {
                  label: "Registration Form",
                  href: "/forms/SAANDHYANEED FORMS wef 01 DECMBER 2024.pdf",
                  iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map(({ label, href, iconPath }, i) => (
                <a
                  key={i}
                  href={href}
                  download
                  className="group block px-5 py-3 sm:px-7 sm:py-4 cta-button rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sandhya-purple transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={iconPath}
                      />
                    </svg>
                    <span className="text-base sm:text-lg font-semibold">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Sections */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 md:space-y-16">
              {data.sections.map((section, i) => (
                <RuleSection key={i} section={section} />
              ))}

              {/* Additional Safety Features */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-12 shadow-lg">
                <h3 className="font-playfair text-2xl font-semibold text-sandhya-black mb-8 text-center">
                  Safety & Security Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.safety.map((feature, i) => (
                    <div
                      key={i}
                      className={`${feature.color} rounded-lg p-6 transition-all hover:shadow-md`}
                    >
                      <h4 className="text-xl font-semibold text-sandhya-black mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amendment Notice */}
              <div className="bg-gradient-to-r from-sandhya-blue to-sandhya-purple bg-opacity-30 p-5 sm:p-6 md:p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-8 w-8 text-sandhya-black" />
                  <h3 className="text-xl font-semibold text-sandhya-black">
                    Amendment Notice
                  </h3>
                </div>
                <p className="text-gray-700">
                  Sandhyaneed Old Age Home reserves the right to amend these
                  rules and regulations as necessary. Residents will be notified
                  of any changes, and the updated rules will be posted in common
                  areas.
                </p>
                <div className="text-center mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 cta-button rounded-lg transition-colors duration-300 group"
                  >
                    <span>Contact Us For More Information</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
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
};

export default Rules;
