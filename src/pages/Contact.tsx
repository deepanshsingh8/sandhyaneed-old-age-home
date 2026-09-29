import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ClickToLoadEmbed from '@/components/ClickToLoadEmbed';
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow bg-[#faf9f6] outline-none">
        <header className="px-5 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-16 lg:pt-20">
          <div className="max-w-6xl mx-auto">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">We’re here for your family</p>
            <h1 className="max-w-3xl font-playfair text-3xl leading-tight text-stone-900 sm:text-4xl lg:text-5xl">Contact Sandhyaneed near Jaipur</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">Finding the right home starts with a conversation. Get to know us, ask your questions, and plan a visit at your own pace.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-200 bg-white px-4 text-sm text-stone-700 transition-colors hover:border-teal-700 hover:text-teal-800"><Phone className="h-4 w-4" aria-hidden="true" />Call our team</a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-200 bg-white px-4 text-sm text-stone-700 transition-colors hover:border-teal-700 hover:text-teal-800"><MapPin className="h-4 w-4" aria-hidden="true" />Get directions</a>
            </div>
          </div>
        </header>
        <div className="max-w-6xl mx-auto grid gap-8 px-5 pb-12 sm:px-6 sm:pb-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-20">
          <ContactForm />
          <aside aria-label="Contact information" className="min-w-0 lg:pt-6">
            <h2 className="font-playfair text-2xl text-stone-900 sm:text-3xl">Come feel at home</h2>
            <p className="mt-3 mb-8 text-sm leading-relaxed text-stone-500 sm:text-base">A visit is the best way to explore our spaces and meet the team. Call ahead so we can make time for your family.</p>
            <div className="divide-y divide-stone-200">
              <section className="flex gap-4 pb-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-800/5 text-teal-800"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <h3 className="mb-2 text-sm font-semibold text-stone-900">Visit us</h3>
                  <address className="not-italic text-sm leading-relaxed text-stone-600">Sandhyaneed Old Age Home<br />{site.streetAddress}<br />Rajasthan, India</address>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-8 items-center gap-1 text-sm font-medium text-teal-800 hover:underline">Find us on Google Maps <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
                </div>
              </section>
              <section className="flex gap-4 py-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-800/5 text-teal-800"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <h3 className="mb-2 text-sm font-semibold text-stone-900">Prefer to talk?</h3>
                  <a href={site.phoneHref} className="block py-1 text-base font-medium text-stone-800 hover:text-teal-800">{site.phone}</a>
                  <a href={site.alternatePhoneHref} className="block py-1 text-sm text-stone-600 hover:text-teal-800">{site.alternatePhone}</a>
                  <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-teal-800"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" /><span className="break-all">{site.email}</span></a>
                </div>
              </section>
              <section className="flex gap-4 py-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-800/5 text-teal-800"><Clock className="h-5 w-5" aria-hidden="true" /></span>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-stone-900">Plan your visit</h3>
                  <dl className="space-y-3 text-sm leading-relaxed">
                    <div><dt className="text-stone-500">Visiting hours</dt><dd className="text-stone-800">{site.visitingHours}</dd></div>
                    <div><dt className="text-stone-500">Office hours</dt><dd className="text-stone-800">{site.officeHours}</dd></div>
                  </dl>
                </div>
              </section>
            </div>
          </aside>
        </div>
        <section className="border-t border-stone-200/70 bg-white px-5 py-10 sm:px-6 sm:py-14">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div><h2 className="font-playfair text-2xl text-stone-900 sm:text-3xl">A peaceful place, within reach</h2><p className="mt-2 text-sm text-stone-500">Dhodsar Village, on the Jaipur-Sikar Highway.</p></div>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-teal-800 hover:underline">Open directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <ClickToLoadEmbed
              title="Location of Sandhyaneed Old Age Home in Dhodsar near Jaipur"
              provider="Google Maps" action="Load Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.48020696331!2d75.6192291!3d27.298155999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cfb4f785079df%3A0x6925edf96d6e5cc9!2sSandhya%20Need!5e0!3m2!1sen!2sin!4v1746901470300!5m2!1sen!2sin"
              className="h-64 w-full sm:h-[338px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
