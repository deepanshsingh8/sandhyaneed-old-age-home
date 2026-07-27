import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Activity, Music, PartyPopper, Users, Heart, Brain, Smile } from "lucide-react";
import { LucideProps } from "lucide-react";  // Import LucideProps for TypeScript

const Activities: React.FC = () => {
  // Data
  const data = {
    dailyActivities: [
      "Morning yoga and light exercise sessions", "Group reading and discussion circles",
      "Art and craft workshops", "Indoor games and recreational activities",
      "Gardening and nature appreciation", "Meditation and mindfulness practices",
    ],
    programs: [
      {
        icon: Users, color: "bg-blue-50 text-blue-600", title: "Hobby Centers",
        description: "Our dedicated hobby centers provide space and resources for residents to pursue their passions or discover new interests.",
        items: ["Reading corner with diverse literature", "Art studio for painting and crafts", 
                "Music room with instruments", "Kitchen for cooking workshops"]
      },
      {
        icon: PartyPopper, color: "bg-purple-50 text-purple-600", title: "Festival Celebrations",
        description: "We enthusiastically celebrate various festivals throughout the year, honoring diverse cultural traditions.",
        items: ["Diwali celebrations with lights and sweets", "Holi festival with safe colors and music", 
                "Christmas gatherings with decorations", "Birthdays and personal milestones"]
      },
      {
        icon: Music, color: "bg-amber-50 text-amber-600", title: "Cultural Programs",
        description: "Regular cultural events and performances enrich our community life and provide entertainment.",
        items: ["Music performances by local artists", "Dance and drama presentations", 
                "Poetry recitation sessions", "Movie screenings and documentaries"]
      }
    ],
    benefits: [
      {
        title: "Physical Health", icon: Heart, color: "bg-red-50 text-red-600",
        description: "Regular physical activities help maintain mobility, strength, and overall health."
      },
      {
        title: "Mental Stimulation", icon: Brain, color: "bg-blue-50 text-blue-600",
        description: "Creative and intellectual activities keep the mind sharp and engaged."
      },
      {
        title: "Social Connection", icon: Users, color: "bg-green-50 text-green-600",
        description: "Group activities foster friendships and a sense of belonging in the community."
      },
      {
        title: "Emotional Well-being", icon: Smile, color: "bg-purple-50 text-purple-600",
        description: "Meaningful engagement contributes to happiness, purpose, and reduced stress."
      }
    ]
  };

  // Reusable Components
  const List = ({ items }: { items: string[] }) => (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-gray-600">
          <span className="text-gray-800 mr-2">•</span><span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const Header = ({ tag, title, description }: { tag?: string; title: string; description: string }) => (
    <div className="text-center mb-16">
      {tag && <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">{tag}</span>}
      <h2 className="font-playfair text-4xl font-semibold text-sandhya-black mb-4">{title}</h2>
      <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">{description}</p>
    </div>
  );

  // Using TypeScript interface to ensure items is optional
  interface CardProps {
    icon: React.ComponentType<any>;
    color: string;
    title: string;
    description: string;
    items?: string[];  // Optional property
  }
  
  const Card = ({ icon: Icon, color, title, description, items }: CardProps) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-8">
      <div className={`${color} inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-sandhya-black group-hover:text-black transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {items && <List items={items} />}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-sandhya-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header 
              tag="Our Programs"
              title="Activities & Engagement"
              description="Discover the various activities and programs we offer to keep our residents engaged, active, and socially connected."
            />
          </div>
        </div>

        {/* Activities Overview */}
        <section className="bg-gradient-to-b from-sandhya-blue to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="text-center mb-16">
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                At Sandhyaneed, we believe that staying active and engaged is essential for overall well-being. 
                Our diverse range of activities caters to various interests and abilities, ensuring that every 
                resident finds something enjoyable and meaningful.
              </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-50 text-green-600 inline-flex rounded-xl p-4">
                    <Activity className="h-8 w-8" />
                  </div>
                  <h2 className="font-playfair text-3xl font-semibold text-sandhya-black">Daily Activities</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Our daily schedule includes a variety of activities designed to promote physical health, 
                  mental stimulation, and social interaction among our residents.
                </p>
                <List items={data.dailyActivities} />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/img/events/aarti.webp" alt="Residents engaged in daily activities" className="object-cover h-full w-full" />
              </div>
            </div>

            <h2 className="font-playfair text-3xl font-semibold text-sandhya-black mb-12 text-center">Engagement Programs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {data.programs.map((program, idx) => <Card key={idx} {...program} />)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header 
              tag="Why It Matters"
              title="Benefits of Our Activity Programs"
              description="Our carefully designed activity programs offer numerous benefits for the physical, mental, and emotional well-being of our residents."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.benefits.map((benefit, idx) => <Card key={idx} {...benefit} />)}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Activities;