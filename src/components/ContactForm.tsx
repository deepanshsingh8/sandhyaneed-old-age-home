import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';
import { Link } from 'react-router-dom';

type Enquiry = { name: string; email: string; phone: string; subject: string; message: string };
type FieldProps = {
  id: keyof Enquiry;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  as?: 'input' | 'select' | 'textarea';
  options?: string[];
};

function FormField({ id, label, value, onChange, type = 'text', required = false, as = 'input', options = [] }: FieldProps) {
  const inputClasses = 'w-full min-w-0 rounded-xl border border-stone-200 bg-stone-50/60 px-4 py-3 text-base text-stone-900 transition-colors placeholder:text-stone-400 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/10';
  const props = { id, name: id, value, onChange, required, className: inputClasses };
  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-stone-700">
        {label} {required ? <span className="text-teal-800" aria-hidden="true">*</span> : <span className="font-normal text-stone-400">(optional)</span>}
      </label>
      {as === 'textarea' ? <textarea {...props} rows={4} className={`${inputClasses} min-h-32 resize-y`} placeholder="Tell us a little about what you’re looking for…" /> :
        as === 'select' ? (
          <div className="relative">
            <select {...props} className={`${inputClasses} appearance-none pr-10`}>
              <option value="">Choose a topic</option>
              {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-stone-500" />
          </div>
        ) : <input {...props} type={type} autoComplete={id === 'phone' ? 'tel' : id === 'name' || id === 'email' ? id : undefined} />}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<Enquiry>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [privacyAcknowledged, setPrivacyAcknowledged] = useState(false);
  const [formReady, setFormReady] = useState(false);
  useEffect(() => { setFormReady(true); }, []);
  const handleChange: FieldProps['onChange'] = event => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formReady || !event.currentTarget.reportValidity() || !privacyAcknowledged) return;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPrivacy acknowledgement: Read Privacy & Cookies; enquiry use acknowledged.\n\n${formData.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };
  const fieldProps = { onChange: handleChange };

  return (
    <section aria-labelledby="enquiry-heading" className="w-full rounded-2xl border border-stone-200/80 bg-white p-5 shadow-[0_8px_40px_-24px_rgba(28,25,23,0.2)] sm:rounded-3xl sm:p-8 lg:p-10">
      <div className="mb-7 border-b border-stone-100 pb-6 sm:mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">A conversation starts here</p>
        <h2 id="enquiry-heading" className="font-playfair text-2xl leading-tight text-stone-900 sm:text-3xl">Tell us how we can help</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-500 sm:text-base">Ask about rooms, arrange a visit, or share what your loved one needs. Our team is here for you.</p>
      </div>
      <noscript><p className="mb-5 text-sm leading-relaxed text-stone-600">The form needs JavaScript to open your email app. Please email <a href={`mailto:${site.email}`} className="text-teal-800 underline">{site.email}</a> or <a href={site.phoneHref} className="text-teal-800 underline">call the team</a> instead.</p></noscript>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={!formReady} aria-labelledby="enquiry-heading" className="min-w-0 space-y-5 sm:space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField {...fieldProps} id="name" label="Your name" value={formData.name} required />
          <FormField {...fieldProps} id="email" label="Email address" value={formData.email} type="email" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField {...fieldProps} id="phone" label="Phone number" value={formData.phone} type="tel" />
          <FormField {...fieldProps} id="subject" label="I’d like to ask about" value={formData.subject} as="select" required options={['Admission Information', 'Visit Request', 'General Inquiry', 'Employment', 'Other']} />
        </div>
        <FormField {...fieldProps} id="message" label="Your message" value={formData.message} as="textarea" required />
        <div className="flex min-h-11 items-start gap-3">
          <input id="privacy-acknowledgement" name="privacyAcknowledged" type="checkbox" required checked={privacyAcknowledged} onChange={event => setPrivacyAcknowledged(event.target.checked)} className="mt-1 h-5 w-5 shrink-0 rounded border-stone-300 accent-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2" />
          <div>
            <label htmlFor="privacy-acknowledgement" className="text-sm leading-relaxed text-stone-600">I have read <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-teal-800 underline underline-offset-4">Privacy & Cookies</Link> and understand that my details will be used to respond to my enquiry.</label>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">We only reply to your enquiry. No marketing or follow-up emails.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-stone-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-xs leading-relaxed text-stone-500">Continue in your email app, where you can review and send your enquiry.</p>
          <Button type="submit" variant="cta" className="min-h-12 w-full rounded-xl px-6 text-sm sm:w-auto">
            Continue in email <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        </fieldset>
      </form>
      <a href={`mailto:${site.email}`} className="mt-5 inline-flex max-w-full items-center gap-2 text-xs text-stone-500 hover:text-teal-800">
        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /><span className="break-all">{site.email}</span>
      </a>
    </section>
  );
}
