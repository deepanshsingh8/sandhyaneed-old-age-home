import { site } from './site';

export type LegalPath = '/privacy' | '/terms' | '/legal' | '/accessibility';
type PolicyLink = { label: string; href: string };
type PolicySection = { id: string; title: string; paragraphs: string[]; links?: PolicyLink[] };
type LegalDocument = {
  title: string;
  description: string;
  contactSubject: string;
  sections: PolicySection[];
};

export const legalUpdated = { date: '2026-10-01', label: '1 October 2026' };

export const legalPages: Record<LegalPath, LegalDocument> = {
  '/privacy': {
    title: 'Privacy & Cookies',
    description: 'How Sandhyaneed’s website enquiry form works, information shared by email, third-party services, cookies and privacy requests.',
    contactSubject: 'Privacy request',
    sections: [
      {
        id: 'scope', title: 'Who this notice is for',
        paragraphs: [
          `This notice covers visitors to ${site.name}’s website and people who contact the home through the website. Sandhyaneed is operated by ${site.operator}. Our public contact is ${site.email}, at ${site.streetAddress}, Rajasthan, India.`,
          'Admission forms, identity documents, health assessments, resident records and information collected during a visit are separate from the website enquiry form. Ask management for the notices and permissions that apply before providing those records.',
        ],
      },
      {
        id: 'enquiries', title: 'Information in an enquiry',
        paragraphs: [
          'The enquiry form asks for your name, email address, enquiry topic and message. A phone number is optional. These details are used only to reply to your enquiry, including questions about senior living or a requested visit.',
          'Please keep your initial message brief. Avoid including identity document numbers, financial details or medical records. If you contact us about someone else, make sure you have appropriate permission to share their information.',
        ],
      },
      {
        id: 'email', title: 'How the email handoff works',
        paragraphs: [
          'The form holds its draft in the current page’s memory. It does not upload the draft to a website form service or save it in browser storage. Continuing opens a prefilled message in your email app; you can review, change or discard it. The enquiry reaches the mailbox only when you send that email.',
          'Your email app or provider may keep a draft after the handoff. Once sent, your details and email correspondence are handled by your email provider and the provider of Sandhyaneed’s mailbox, under their respective terms. If no email app is configured, use the email address or phone numbers on the Contact page.',
        ],
      },
      {
        id: 'use-sharing', title: 'Use and sharing of enquiries',
        paragraphs: [
          'Enquiry information is used only to reply to your enquiry. We do not use it for marketing, send marketing emails or send follow-up emails. The acknowledgement in the form relates only to responding to your enquiry; it is not a marketing opt-in.',
          'Email delivery necessarily involves mailbox providers. Hosting and other website services may process technical request information. Ask the team about the people, providers or other recipients involved in handling your particular enquiry, especially before sharing sensitive records.',
        ],
      },
      {
        id: 'retention', title: 'Retention and privacy requests',
        paragraphs: [
          'The website does not create a stored copy of a form draft; entries remain in the current page’s memory. Your browser or email app may retain or restore information according to its settings. Closing or clearing the website form does not delete email drafts or copies of a message you have sent.',
          'This notice does not specify a fixed retention period for mailbox correspondence or resident records. Contact the team for the applicable retention arrangements, or to request access, correction or deletion of information you have shared. Some records may need to be retained to meet applicable legal obligations; ask which requirements apply to your request.',
        ],
      },
      {
        id: 'cookies', title: 'Cookies and browser storage',
        paragraphs: [
          'The website’s own application code does not set cookies, store enquiry details in local or session storage, or include analytics and advertising trackers. The hosting service may keep technical logs such as IP addresses, request times and browser information.',
          'External services can process information under their own policies. Loading a map or video may allow its provider to read or set cookies or use other storage, depending on your browser settings and existing sign-in state. You can leave those embeds unloaded and manage cookies through your browser.',
        ],
      },
      {
        id: 'third-parties', title: 'Maps, videos, fonts and images',
        paragraphs: [
          'Google Maps, YouTube and Vimeo embeds load only after you press their load or play button. That action connects your browser to the named provider and shares technical information, including your IP address and browser details. External links also take you to the provider’s own service.',
          'The website font and photographs are served from this website itself, so loading a page does not contact Google or another third party unless you choose to load a map or video.',
        ],
        links: [
          { label: 'Google privacy policy', href: 'https://policies.google.com/privacy' },
          { label: 'Vimeo privacy policy', href: 'https://vimeo.com/privacy' },
        ],
      },
      {
        id: 'security', title: 'Security and contacting us',
        paragraphs: [
          'No website or email service can guarantee absolute security. Use the public enquiry channel for an initial conversation; agree a suitable way to provide confidential records directly with management.',
          `For a privacy request, email ${site.email} with the subject “Privacy request”. Describe the information or enquiry concerned and the help you need. Do not send identity documents unless the team explains why they are needed and how to provide them safely.`,
        ],
      },
    ],
  },
  '/terms': {
    title: 'Terms & Website Notices',
    description: 'Sandhyaneed website-use terms, enquiry and admission notices, content limitations, intellectual property and copyright concerns.',
    contactSubject: 'Website terms enquiry',
    sections: [
      {
        id: 'website-use', title: 'Using this website',
        paragraphs: [
          'This website provides information about Sandhyaneed Old Age Home and ways to contact the team. Use it lawfully and respectfully. Do not attempt to disrupt it, gain unauthorised access, impersonate another person or use its contact details to send abusive or unsolicited messages.',
          'Provide accurate contact information and share another person’s details only with appropriate permission. If these website notices change, the updated date on the relevant page identifies the latest published version.',
        ],
      },
      {
        id: 'enquiries-admission', title: 'An enquiry is not a confirmed admission',
        paragraphs: [
          'Sending an email, requesting a visit or downloading a registration form does not reserve a room, confirm admission or create an agreement for accommodation or care. The website has no online booking, checkout or payment facility.',
          'Confirm availability, suitability, fees, deposits, services, care arrangements and admission requirements directly with management. Residency and payments are governed by the applicable written admission documents and law.',
        ],
        links: [{ label: 'Legal & Admission Notices', href: '/legal' }, { label: 'Rules & Regulations', href: '/rules' }],
      },
      {
        id: 'website-content', title: 'Website content and care information',
        paragraphs: [
          'Photographs, descriptions, visiting information and downloadable documents help you explore the home. Availability, services and requirements can change. Some downloadable documents are dated; check the current version and arrangements with the team before relying on them or making a payment.',
          'Health and care descriptions are general information, not a personal medical assessment, diagnosis or treatment recommendation. Discuss individual care needs with qualified professionals and management. The website enquiry form is not monitored as an emergency service.',
        ],
      },
      {
        id: 'copyright', title: 'Intellectual property and copyright concerns',
        paragraphs: [
          'Website text, branding, photographs and other materials may belong to Sandhyaneed or their respective creators. Viewing the site or downloading an admission document does not grant permission to republish branding or use photographs of residents or staff commercially. Third-party materials remain subject to their owners’ rights and terms.',
          `If you believe material on the site infringes your copyright or misuses a photograph, email ${site.email}. Identify the page and material, explain your rights or concern and provide a contact address so the team can review it.`,
        ],
      },
      {
        id: 'external-services', title: 'External services and availability',
        paragraphs: [
          'Maps, videos and external links are operated by their providers. Their availability, content and terms are outside the website’s control. The site may also be temporarily unavailable because of maintenance, technical issues or circumstances outside the operator’s control.',
          'If an enquiry form, video, map or document is difficult to use, contact the home by phone or email for assistance.',
        ],
        links: [{ label: 'Privacy & Cookies', href: '/privacy' }, { label: 'Accessibility Statement', href: '/accessibility' }],
      },
      {
        id: 'responsibility-law', title: 'Responsibility and applicable law',
        paragraphs: [
          'Please verify information relevant to an admission or payment directly with management. The website does not guarantee uninterrupted availability or that every item of general information is current.',
          'These website notices do not exclude any liability that cannot lawfully be excluded, waive consumer or resident rights, or replace obligations under an admission agreement. Applicable Indian law and the competent forums available under that law govern relevant matters. Separate written admission terms may apply, subject to those legal rights.',
        ],
      },
    ],
  },
  '/legal': {
    title: 'Legal & Admission Notices',
    description: 'Sandhyaneed’s public identity, operator information requests, admission documents, fees, security deposits, cancellation and refund enquiries.',
    contactSubject: 'Admission terms or refund enquiry',
    sections: [
      {
        id: 'identity', title: 'Public identity and operator information',
        paragraphs: [
          `${site.name} is operated by ${site.operator} and is located at ${site.streetAddress}, Rajasthan, India. Sandhyaneed is a CSR initiative by ${site.operator}.`,
          'Before admission or payment, ask management for the operator’s registration details, the organisation named in the admission agreement and any approvals or credentials you need to verify. The CSR attribution does not certify tax exemptions, healthcare licensing or other regulatory status.',
        ],
      },
      {
        id: 'admission', title: 'Admission and care arrangements',
        paragraphs: [
          'Visits and enquiries are an opportunity to discuss accommodation and individual support needs. Admission depends on management’s confirmation and the applicable written documents. Website descriptions do not guarantee that a particular room, service or level of care is available for every applicant.',
          'Confirm the services included, any additional charges, emergency arrangements, family responsibilities and the process for sharing identity or health records before signing an admission agreement.',
        ],
      },
      {
        id: 'fees-documents', title: 'Fees, deposits and dated documents',
        paragraphs: [
          'The Rules & Regulations page provides a rules-and-rent document dated April 2023 and a registration form dated December 2024. These dates should be considered when reviewing the downloads. Obtain current fees, deposit amounts, payment instructions and the latest admission terms directly from management.',
          'The 2023 rent document describes refundable security deposits for certain room types. It does not establish the current refund procedure or settlement timeframe. Confirm the applicable conditions in writing; this page does not promise a deposit amount, refund deadline or fee schedule.',
          'There is no payment facility on this website. Verify the recipient and payment instructions directly with management, and request a receipt for any payment made outside the website.',
        ],
        links: [{ label: 'View rules and downloadable admission documents', href: '/rules' }],
      },
      {
        id: 'cancellations-refunds', title: 'Cancellations, departures and refunds',
        paragraphs: [
          'If you need to cancel an admission arrangement, change a planned move-in date, end a stay or request a refund, contact management with the relevant admission or payment reference. Avoid including bank details or identity documents in an initial website enquiry.',
          'Ask for the applicable notice period, any deductions or outstanding charges, whether an advance or deposit is refundable, the settlement process and the expected timeframe. These matters depend on the current agreement and applicable law; no blanket non-refundable policy or automatic refund entitlement is created by this website notice.',
          'Keep copies of the terms, correspondence and payment receipts. Nothing here limits rights or remedies available under applicable law.',
        ],
      },
      {
        id: 'questions', title: 'Questions about credentials or terms',
        paragraphs: [
          `For operator details, admission terms or a payment concern, email ${site.email} or call ${site.phone}. Explain the information you need so the team can direct your request.`,
        ],
        links: [{ label: 'Contact the team', href: '/contact' }, { label: 'Terms & Website Notices', href: '/terms' }],
      },
    ],
  },
  '/accessibility': {
    title: 'Accessibility Statement',
    description: 'Sandhyaneed’s website accessibility goals, available features, known limitations and contact options for assistance or reporting barriers.',
    contactSubject: 'Website accessibility assistance',
    sections: [
      {
        id: 'goal', title: 'Our accessibility goal',
        paragraphs: [
          'We aim to make information about Sandhyaneed easy to use for older people, families and visitors with disabilities. WCAG 2.2 Level AA is a goal for ongoing improvements, not a claim that this website has been independently certified or meets every requirement.',
        ],
        links: [{ label: 'About the W3C Web Content Accessibility Guidelines', href: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }],
      },
      {
        id: 'features', title: 'Features available on the website',
        paragraphs: [
          'Pages use headings and navigation landmarks, and a skip link helps keyboard users reach the main content. The enquiry form has visible labels and browser validation. Mobile layouts adapt card sizes and photo grids, and primary controls have larger touch targets.',
          'The site respects the browser’s reduced-motion setting for CSS transitions. Maps and videos require a load or play action, so you can use the other contact options without activating those services.',
        ],
      },
      {
        id: 'limitations', title: 'Known limitations',
        paragraphs: [
          'Some older downloadable PDFs may have incomplete text extraction, reading order or document tagging. Embedded maps and videos depend on their providers; captions, transcripts and controls may vary. Contact the team if you need the information in another format.',
          'Some photo gallery interactions, slideshow controls and animations may present difficulties with particular keyboards, assistive technologies or motion preferences. A full independent accessibility audit has not been completed, so other barriers may exist.',
          'The enquiry form requires JavaScript and opens an email app rather than sending a message within the website. If that flow is unavailable or difficult to use, you can email or call the team directly.',
        ],
      },
      {
        id: 'assistance', title: 'Request help or report a barrier',
        paragraphs: [
          `Email ${site.email} with the subject “Website accessibility assistance”, or call ${site.phone} or ${site.alternatePhone}. Tell us which page or document you need, what you were trying to do and your preferred way to receive the information.`,
          'If useful, include your browser or assistive technology and a description of the barrier. You do not need to disclose a disability or medical information to ask for help. The team can discuss an alternative way to provide information or arrange a conversation.',
        ],
        links: [{ label: 'Contact options', href: '/contact' }],
      },
    ],
  },
};

export const legalRedirects = {
  '/cookies': '/privacy#cookies',
  '/disclaimer': '/terms#website-content',
  '/copyright': '/terms#copyright',
  '/refund-cancellation': '/legal#cancellations-refunds',
};
