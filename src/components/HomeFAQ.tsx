import { Link } from "react-router-dom";
import { homeFAQs } from "@/lib/site";

export default function HomeFAQ() {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 md:py-20" aria-labelledby="senior-living-questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="senior-living-questions" className="font-playfair text-2xl sm:text-3xl font-semibold text-sandhya-black mb-6">
          Choosing an Old Age Home in Jaipur
        </h2>
        <p className="text-gray-700 mb-8">
          Find answers about Sandhyaneed’s location, senior living facilities and how to plan your visit.
        </p>
        <div className="space-y-4">
          {homeFAQs.map(({ question, answer }) => (
            <details key={question} className="rounded-xl border border-gray-200 bg-white p-5 group">
              <summary className="cursor-pointer font-semibold text-black focus-visible:outline-teal-700">{question}</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-gray-700">
          Explore our <Link className="underline hover:text-teal-700" to="/facilities">rooms and facilities</Link>,{" "}
          <Link className="underline hover:text-teal-700" to="/health-security">health and security arrangements</Link>, and{" "}
          <Link className="underline hover:text-teal-700" to="/rules">admission documents</Link>, or{" "}
          <Link className="underline hover:text-teal-700" to="/contact">contact the team</Link> for current details.
        </p>
      </div>
    </section>
  );
}
