// Keep public contact details consistent across pages and structured data.
export const site = {
  name: "Sandhyaneed Old Age Home",
  operator: "NK Shikshan Sankul",
  url: "https://www.sandhyaneed.com",
  email: "contact@sandhyaneed.com",
  phone: "+91 96801 47319",
  phoneHref: "tel:+919680147319",
  alternatePhone: "+91 94140 47082",
  alternatePhoneHref: "tel:+919414047082",
  streetAddress: "Dhodsar Village, Jaipur-Sikar Highway",
  locality: "Dhodsar",
  region: "Rajasthan",
  mapsUrl: "https://maps.app.goo.gl/Xq9AU7hc2Hp7UoVP8",
  officeHours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  visitingHours: "Daily: 10:00 AM - 7:00 PM",
  image: "/img/homepage/hero1.webp",
};

export const seniorLivingHighlights = [
  { value: "2015", label: "Established", bg: "bg-sandhya-peach bg-opacity-20" },
  { value: "4", label: "Room Types", bg: "bg-sandhya-purple bg-opacity-20" },
  { value: "Jaipur", label: "Region Served", bg: "bg-blue-50" },
  { value: "Daily", label: "Visiting Hours", bg: "bg-green-50" },
];

export const homeFAQs = [
  {
    question: "Where is Sandhyaneed Old Age Home near Jaipur?",
    answer: "Sandhyaneed is in Dhodsar Village on the Jaipur-Sikar Highway in Rajasthan. Families looking for an old age home near Jaipur can contact our team for directions and arrange a visit.",
  },
  {
    question: "How do I choose the best old age home in Jaipur for my family?",
    answer: "Visit the home and compare accommodation, food, accessibility, staff support, health and security arrangements, and opportunities for companionship. Ask about current fees and admission requirements, and discuss your family member’s care needs before deciding.",
  },
  {
    question: "What accommodation and facilities does Sandhyaneed offer?",
    answer: "Sandhyaneed offers flats, suites, double-seated and four-seater rooms, along with dining facilities, a library, gardens, a temple, and recreational activities. Contact the team to confirm current room availability and which facilities suit your needs.",
  },
  {
    question: "What are the fees and admission requirements?",
    answer: "Contact Sandhyaneed for current fees, room availability, and admission requirements. The Rules & Regulations page includes downloadable rules and a registration form; confirm the latest terms with the team before applying.",
  },
  {
    question: "How can I arrange a visit to Sandhyaneed?",
    answer: `Call ${site.phone} or ${site.alternatePhone}, or email ${site.email}, to arrange a visit and discuss senior living options. Visiting hours are ${site.visitingHours.toLowerCase()}.`,
  },
];
