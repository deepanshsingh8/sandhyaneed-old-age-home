import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { legalPages, legalUpdated, type LegalPath } from '@/lib/legal';
import { site } from '@/lib/site';

export default function LegalPage({ path }: { path: LegalPath }) {
  const document = legalPages[path];
  const contents = (
    <ol className="space-y-1">
      {document.sections.map(section => (
        <li key={section.id}><a href={`#${section.id}`} className="block rounded-md px-2 py-2 text-sm leading-relaxed text-stone-600 hover:bg-white hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700">{section.title}</a></li>
      ))}
    </ol>
  );
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow bg-[#faf9f6] px-5 py-10 outline-none sm:px-6 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="max-w-3xl border-b border-stone-200 pb-8 sm:pb-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">Information & website notices</p>
            <h1 className="font-playfair text-3xl leading-tight text-stone-900 sm:text-4xl lg:text-5xl">{document.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">{document.description}</p>
            <p className="mt-5 text-sm text-stone-500">Last updated <time dateTime={legalUpdated.date}>{legalUpdated.label}</time></p>
          </header>
          <div className="mt-8 grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-label="On this page" className="hidden self-start lg:block lg:sticky lg:top-28">
              <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-stone-500">On this page</p>
              {contents}
            </nav>
            <div className="min-w-0 max-w-3xl">
              <details className="mb-8 rounded-xl border border-stone-200 bg-white p-4 lg:hidden">
                <summary className="min-h-6 cursor-pointer text-sm font-semibold text-teal-800">On this page</summary>
                <nav aria-label="On this page" className="mt-3">{contents}</nav>
              </details>
              <article className="space-y-8 sm:space-y-10">
                {document.sections.map(section => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24 md:scroll-mt-28">
                    <h2 id={`${section.id}-heading`} className="mb-4 font-playfair text-xl leading-snug text-stone-900 sm:text-2xl">{section.title}</h2>
                    <div className="space-y-4 text-base leading-7 text-stone-600">
                      {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </div>
                    {section.links && <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      {section.links.map(link => <li key={link.href}>
                        {link.href.startsWith('/') ? <Link to={link.href} className="inline-flex min-h-9 items-center font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950">{link.label}</Link> :
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950">{link.label}</a>}
                      </li>)}
                    </ul>}
                  </section>
                ))}
              </article>
              <aside aria-label="Questions about this notice" className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
                <h2 className="font-playfair text-xl text-stone-900">Need clarification or assistance?</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">Contact the Sandhyaneed team about this notice or the information you need.</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <a href={`mailto:${site.email}?subject=${encodeURIComponent(document.contactSubject)}`} className="inline-flex min-h-11 items-center break-all font-medium text-teal-800 underline underline-offset-4">{site.email}</a>
                  <a href={site.phoneHref} className="inline-flex min-h-11 items-center font-medium text-teal-800 underline underline-offset-4">{site.phone}</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
