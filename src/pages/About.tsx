import React from "react";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ClickToLoadEmbed from "@/components/ClickToLoadEmbed";
import { Users, Target, Award, BookOpen, Heart, ArrowRight } from "lucide-react";
import Img from "@/components/Img";

const About = () => {
  // Data objects
  const data = {
    initiatives: [
      { title: "Senior Citizen Welfare", description: "Work for the betterment of senior citizens and provide them with proper care and welfare." },
      { title: "Family Awareness", description: "Promote love and affection towards elderly people amongst families." },
      { title: "Elderly Upliftment", description: "Work and launch various projects for the upliftment of senior citizens in our society." },
      { title: "Child Welfare", description: "To work for the betterment of child labor, to provide them education and to manage their rehabilitation." },
      { title: "Environmental Initiatives", description: "To make the Pink City Jaipur full of greenery and to organize rallies to spread consciousness towards the environment." },
      { title: "Medicinal Plants", description: "To promote the production of medicinal plants and to distribute them for public welfare." }
    ],
    objectives: [
      { title: "Dignified Living", description: "To provide a respectful and loving environment where seniors live with dignity and grace." },
      { title: "Compassionate Care", description: "To deliver personalized attention and care tailored to each resident's physical and emotional needs." },
      { title: "Community & Companionship", description: "To build lasting friendships and promote social engagement among residents and caregivers." },
      { title: "Affordable Comfort", description: "To offer superior living facilities with modern amenities at affordable costs." },
      { title: "Active Lifestyle", description: "To encourage intellectual and physical activity through libraries, gardens, and social programs." },
      { title: "Family Peace of Mind", description: "To ensure families feel secure knowing their loved ones are in trusted hands and a caring atmosphere." }
    ],
    socialCommitments: [
      "To work for eradicating social evils and superstitions",
      "To render a helping hand to the disabled and needy people from all communities and religions",
      "To prepare projects for community service and implement them",
      "To prepare helpline for tourists and render them every possible help",
      "To make creative efforts for the establishment of love and peace in society",
      "To work for the exchange of art, literature, and culture at the international level",
      "To promote brotherhood among the people of the world",
      "To organize training workshops for leading a stress-free life"
    ],
    trustees: [
      { name: "Dr. N. C. Lunayach", position: "TRUSTEE", image: "/img/about/1-500x500.webp" },
      { name: "Mr. Kuldeep Singh", position: "TRUSTEE", image: "/img/about/3-500x500.webp" },
      { name: "Smt. Kamla Lunayach", position: "TRUSTEE", image: "/img/about/2-500x500.webp" },
      { name: "Smt. Manisha Choudhary", position: "TRUSTEE", image: "/img/about/4-500x500.webp" }
    ]
  };

  // Reusable components
  const Section = ({ children, bgClass = "bg-white" }) => (
    <section className={`py-12 sm:py-16 md:py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );

  const SectionHeader = ({ tag, title, description }) => (
    <div className="text-center mb-8 md:mb-16">
      <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">{tag}</span>
      <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-3">{title}</h2>
      <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
      {description && <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  );

  const Card = ({ title, description, icon, colorClass = null, index }) => {
    const colorClasses = ["bg-blue-50 text-blue-600", "bg-green-50 text-green-600", "bg-amber-50 text-amber-600",
                          "bg-purple-50 text-purple-600", "bg-red-50 text-red-600", "bg-indigo-50 text-indigo-600"];
    const IconComponent = icon || <Heart className="h-8 w-8" />;
    const colorClassName = colorClass || colorClasses[index % colorClasses.length];

    return <InfoCard icon={IconComponent} iconClassName={colorClassName} title={title} description={description} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-sandhya-blue py-10 sm:py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">Who We Are</span>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-sandhya-black mb-4">About Sandhyaneed</h1>
              <div className="w-16 h-1 bg-sandhya-darkGray mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Sandhyaneed is an old age home in Dhodsar on the Jaipur-Sikar Highway in Rajasthan,
                offering care, love, and companionship to senior citizens since 2015.
              </p>
              <p className="text-xl text-black font-semibold mt-4">"Let elderly people be healthy and happy"</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <Section bgClass="bg-gradient-to-b from-sandhya-blue to-white">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="w-full min-w-0 md:w-1/2">
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-6">Our History</h2>
              <div className="w-16 h-1 bg-sandhya-darkGray mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded by Honorable Dr. N.C. Lunayach in 2015, Sandhyaneed is a symbol of trust, compassion and elderly care
                for seniors in Rajasthan. We had the immense pleasure to invite Mr. Sumedha Nand Saraswati (MP, Sikar) and
                Shri Ratan Jaldhari (MLA, Sikar) to inaugurate our old age home.
              </p>
              <p className="text-gray-700 mb-4">
                Since inception, Sandhyaneed has evolved into a nurturing home where elders find not just shelter, but warmth,
                dignity, and companionship. With modern amenities and a compassionate staff, we aim to provide a peaceful and
                vibrant environment for our residents.
              </p>
              <p className="text-gray-700">
                At Sandhyaneed, we offer high bed capacity and all modern facilities to offer high-quality living to senior citizens.
                We aim to offer world-class facilities and exceptional care for senior citizens, so they get the best of comfort in their lives.
              </p>
            </div>
            <div className="w-full min-w-0 md:w-1/2 mt-8 md:mt-16">
              <ClickToLoadEmbed provider="YouTube" action="Load introduction video" src="https://www.youtube.com/embed/Xn9MuIuzIvc?start=31" title="Sandhyaneed introduction video on YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="aspect-video shadow-lg" />
            </div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section bgClass="bg-gradient-to-b from-white to-gray-50">
          <SectionHeader
            tag="Our Purpose"
            title="Mission & Vision"
            description="We are dedicated to providing a loving and caring environment for senior citizens."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Mission */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 text-blue-600 inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold text-sandhya-black mb-6 group-hover:text-black transition-colors duration-300">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Dr. N.C. Lunayach wanted to help every citizen in India who is unable to lead a healthy life due to old age.
                He wanted to build one of the best old age homes in Rajasthan. Sandhyaneed was his creation to offer love and care to senior citizens.
                The old age home was founded with a motto – <span className="italic font-semibold">Let elderly people be healthy and happy</span>.
              </p>
              <p className="text-gray-700">
                Our mission is to offer exceptional care to senior citizens at affordable rates, giving equal opportunity for all
                who wish to join our home. This makes us amongst the top old age homes in Jaipur and Rajasthan.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="bg-amber-50 text-amber-600 inline-flex rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-semibold text-sandhya-black mb-6 group-hover:text-black transition-colors duration-300">Our Vision</h2>
              <p className="text-gray-700 mb-6">Our vision is to become the epitome of old age homes in India.</p>
              <blockquote className="border-l-4 border-sandhya-purple pl-6 py-2 italic text-base sm:text-lg text-gray-700 mb-6">
                "We aim to offer world-class facilities and exceptional care for senior citizens"
              </blockquote>
              <h3 className="font-playfair text-base sm:text-lg font-semibold text-sandhya-black mt-8 mb-4">What We Offer</h3>
              <p className="text-gray-700">
                We provide numerous facilities including well-furnished rooms, a library, dining hall, temple,
                and garden for a home-like environment filled with love and affection.
              </p>
            </div>
          </div>
        </Section>

        {/* Founder's Message */}
        <Section bgClass="bg-gradient-to-b from-gray-50 to-white">
          <SectionHeader
            tag="From Our Founder"
            title="Founder's Message"
            description="A message from Dr. N.C. Lunayach, the visionary behind Sandhyaneed Old Age Home."
          />

          <blockquote className="bg-white p-5 sm:p-6 md:p-8 md:p-10 rounded-xl shadow-lg max-w-3xl mx-auto border-l-4 border-sandhya-purple">
            <div className="bg-purple-50 text-purple-600 inline-flex rounded-xl p-4 mb-6"><BookOpen className="h-8 w-8" /></div>
            <p className="text-base sm:text-lg text-gray-700 italic mb-6">
              "At Sandhyaneed, our mission is to ensure that every elderly individual receives the love, dignity, and care they deserve.
              What started as a dream in 2015 has blossomed into a home filled with warmth, companionship, and happiness.
            </p>
            <p className="text-base sm:text-lg text-gray-700 italic">
              We invite you to be a part of this journey—to help us continue delivering exceptional love and support to our elders."
            </p>
            <footer className="mt-6">
              <div className="flex items-center">
                <div>
                  <p className="text-sandhya-black font-semibold">Dr. N.C. Lunayach</p>
                  <p className="text-gray-500">Founder, Sandhyaneed Old Age Home</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </Section>

        {/* Our Initiatives */}
        <Section bgClass="bg-gradient-to-b from-white to-sandhya-blue">
          <SectionHeader tag="Our Work" title="Our Initiatives" description="With Sandhyaneed old age home, we aim to:" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.initiatives.map((initiative, index) => (
              <Card key={index} title={initiative.title} description={initiative.description} index={index} icon={<Heart className="h-8 w-8" />} colorClass={null} />
            ))}
          </div>
        </Section>

        {/* Our Objectives */}
        <Section bgClass="bg-gradient-to-b from-sandhya-blue to-white">
          <SectionHeader
            tag="Our Goals"
            title="Our Objectives"
            description="We are committed to enriching the lives of the elderly with purpose, compassion, and modern comforts."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.objectives.map((objective, index) => (
              <Card key={index} title={objective.title} description={objective.description} icon={<Target className="h-8 w-8" />} index={index} colorClass={null} />
            ))}
          </div>
        </Section>

        {/* Our Trustees */}
        <Section bgClass="bg-gradient-to-b from-white to-gray-50">
          <SectionHeader
            tag="Our Leadership"
            title="Our Trustees"
            description="Meet our trustees who are responsible for the overall control and development of our old age home. Under their esteemed guidance, we have been able to achieve this proud position of one of the best old age homes in Jaipur."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8">
            {data.trustees.map((trustee, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-3 sm:p-6 text-center">
                <div className="w-full max-w-48 aspect-square rounded-xl overflow-hidden shadow-lg mb-3 sm:mb-4 mx-auto">
                  <Img src={trustee.image} alt={trustee.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="text-sm leading-snug sm:text-xl font-bold text-sandhya-black mb-1 group-hover:text-black transition-colors duration-300">{trustee.name}</h3>
                <p className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">{trustee.position}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Video Introduction */}
        <Section bgClass="bg-gradient-to-b from-gray-50 to-white">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
            <div className="w-full min-w-0 lg:w-1/2">
              <ClickToLoadEmbed provider="Vimeo" action="Load virtual tour" title="Sandhyaneed virtual tour on Vimeo" src="https://player.vimeo.com/video/457657996?h=6e17e74f06" className="aspect-video shadow-lg md:h-[360px] lg:h-[400px]" />
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <span className="inline-block px-4 py-1 bg-sandhya-purple bg-opacity-100 text-sandhya-black rounded-full text-sm font-medium mb-4">Virtual Tour</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-4">See Sandhyaneed in Action</h2>
              <div className="w-16 h-1 bg-sandhya-darkGray mb-6"></div>
              <p className="text-gray-700 mb-4">
                Take a virtual tour of our facilities and see firsthand the loving environment we've created for our residents.
                Our video showcases the daily life, activities, and care provided at Sandhyaneed Old Age Home.
              </p>
            </div>
          </div>
        </Section>

        {/* Society Betterment */}
        <Section bgClass="bg-gradient-to-b from-white to-sandhya-blue">
          <SectionHeader
            tag="Social Impact"
            title="Our Commitment to Society"
            description="Beyond elderly care, we are committed to creating a better society."
          />
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 text-blue-600 inline-flex rounded-xl p-4"><Users className="h-8 w-8" /></div>
              <h3 className="font-playfair text-2xl font-semibold text-sandhya-black">Social Initiatives</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.socialCommitments.map((commitment, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-800 mr-3 text-base sm:text-lg">•</span>
                  <span className="text-gray-600">{commitment}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 cta-button rounded-lg transition-colors duration-300 group">
                <span>Get Involved</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </Section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
