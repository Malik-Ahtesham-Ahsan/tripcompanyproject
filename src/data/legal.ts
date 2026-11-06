import { siteConfig } from "@/data/site";

export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/** Shown in the footer "Company" column, in this order. */
export const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const lastUpdated = "3 November 2026";

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information under UK GDPR.`,
  updated: lastUpdated,
  intro: `${siteConfig.name} ("we", "us", "our") is committed to protecting your privacy. This policy explains what personal information we collect when you use our visa consultancy and travel services, how we use it, and the rights you have over it under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
  sections: [
    {
      heading: "1. Who we are",
      body: [
        `${siteConfig.name} is a travel and visa consultancy registered in England and Wales, with its address at ${siteConfig.address}.`,
        `For any privacy question, or to exercise any of the rights described below, contact us at ${siteConfig.email} or on WhatsApp at ${siteConfig.whatsapp}.`,
      ],
    },
    {
      heading: "2. Information we collect",
      body: ["Depending on the service you ask us for, we may collect:"],
      bullets: [
        "Contact details — your full name, phone number and email address, usually submitted through our enquiry form or sent to us on WhatsApp.",
        "Travel details — intended destination, travel dates, purpose of travel and the service you are interested in.",
        "Application information — where you engage us for a visa application, the data needed to complete it: passport details, date and place of birth, nationality, address history, employment and education details, and travel history.",
        "Supporting documents — bank statements, payslips, invitation letters, accommodation and flight reservations, and similar evidence required by the relevant embassy or consulate.",
        "Correspondence — a record of messages, calls and emails exchanged with us.",
        "Technical data — IP address, browser type and basic usage information collected automatically when you visit our website.",
      ],
    },
    {
      heading: "3. Special category data",
      body: [
        "Some visa applications require information that UK GDPR treats as special category data — for example biometric details, or health and medical information where a consulate requires it. We collect this only where it is necessary for your application, we ask for your explicit consent before doing so, and we use it for no other purpose.",
      ],
    },
    {
      heading: "4. How we use your information",
      bullets: [
        "To respond to your enquiry and provide the free consultation you requested.",
        "To prepare, review, submit and track your visa application.",
        "To book flights, hotels and holiday packages on your instruction.",
        "To contact you about the progress of your application or booking.",
        "To take payment and keep accounting records.",
        "To meet our legal and regulatory obligations.",
        "To improve our website and services.",
      ],
    },
    {
      heading: "5. Our legal basis for processing",
      bullets: [
        "Contract — where processing is necessary to deliver the service you have engaged us for.",
        "Consent — for marketing messages, and for any special category data. You can withdraw consent at any time.",
        "Legal obligation — where we must retain records for tax, accounting or anti-fraud purposes.",
        "Legitimate interests — to operate, secure and improve our business, balanced against your rights and freedoms.",
      ],
    },
    {
      heading: "6. Who we share your information with",
      body: [
        "We do not sell your personal information to anyone. We share it only where it is necessary to deliver your service, and only with:",
      ],
      bullets: [
        "Embassies, consulates and their appointed visa application centres (such as VFS Global or TLScontact).",
        "Airlines, hotels and tour operators, where you have asked us to make a booking.",
        "Travel insurance providers, where you ask us to arrange cover.",
        "Our professional advisers, payment processors and IT service providers, who act under contract and on our instructions.",
        "Law enforcement or regulators, where we are legally required to disclose.",
      ],
    },
    {
      heading: "7. International transfers",
      body: [
        "Visa applications by their nature involve sending your information outside the UK — to the embassy, consulate or visa centre of the country you intend to visit. Where we transfer data abroad we rely on the appropriate safeguards permitted under UK GDPR, such as adequacy regulations or standard contractual clauses.",
      ],
    },
    {
      heading: "8. How long we keep your data",
      body: [
        "We keep application files for up to 24 months after your application concludes, so that we can support any re-application or appeal. Financial and accounting records are kept for six years as required by UK tax law. Enquiries that do not become bookings are deleted within 12 months. Original documents you supply are returned to you or securely destroyed once your application is complete.",
      ],
    },
    {
      heading: "9. Your rights",
      body: ["Under UK GDPR you have the right to:"],
      bullets: [
        "Access the personal information we hold about you.",
        "Have inaccurate information corrected.",
        "Request erasure of your information, where no legal obligation requires us to keep it.",
        "Restrict or object to our processing of your information.",
        "Receive your data in a portable, machine-readable format.",
        "Withdraw consent at any time, where consent is our legal basis.",
      ],
    },
    {
      heading: "10. Cookies",
      body: [
        "Our website uses only the cookies necessary to make the site function and to understand, in aggregate, how it is used. We do not use advertising cookies. You can block or delete cookies through your browser settings, though some parts of the site may not work as intended if you do.",
      ],
    },
    {
      heading: "11. Security",
      body: [
        "We apply appropriate technical and organisational measures to protect your information, including restricted access, encrypted transmission and secure storage of documents. No transmission over the internet can be guaranteed completely secure, but we take every reasonable step to safeguard what you entrust to us.",
      ],
    },
    {
      heading: "12. Changes to this policy",
      body: [
        "We may update this policy from time to time. The version published on this page is always the current one, and the date at the top of the page shows when it was last revised.",
      ],
    },
    {
      heading: "13. How to complain",
      body: [
        `If you are unhappy with how we have handled your personal information, please contact us first at ${siteConfig.email} so we can put it right. You also have the right to complain to the Information Commissioner's Office (ICO), the UK supervisory authority, at ico.org.uk or on 0303 123 1113.`,
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  slug: "terms-and-conditions",
  title: "Terms & Conditions",
  description: `The terms on which ${siteConfig.name} provides visa consultancy and travel booking services.`,
  updated: lastUpdated,
  intro: `These terms govern the services provided by ${siteConfig.name}. By engaging us, submitting an enquiry, or making a payment, you accept these terms. Please read them carefully — section 3 in particular explains the limits of what any visa consultancy can promise.`,
  sections: [
    {
      heading: "1. About us",
      body: [
        `${siteConfig.name} is a travel and visa consultancy registered in England and Wales, with its address at ${siteConfig.address}. You can reach us at ${siteConfig.email} or on WhatsApp at ${siteConfig.whatsapp}.`,
      ],
    },
    {
      heading: "2. Our services",
      body: [
        "We provide guidance and administrative support for visa applications, together with flight, hotel and holiday package bookings. Specifically, we may:",
      ],
      bullets: [
        "Advise on the correct visa category and the documents required.",
        "Review your supporting documents and highlight weaknesses before submission.",
        "Complete and lodge application forms on your behalf.",
        "Book appointments at the relevant embassy, consulate or visa application centre.",
        "Track your application and keep you updated until a decision is issued.",
        "Arrange flights, accommodation and travel insurance on your instruction.",
      ],
    },
    {
      heading: "3. No guarantee of visa approval",
      body: [
        "This is the most important term in this agreement. We are an independent consultancy. We are not an embassy, consulate, government department or agent of any of them, and we have no influence over immigration decisions.",
        "The decision to grant or refuse a visa rests solely with the relevant embassy, consulate or immigration authority. Any success rate, approval statistic or past result we publish describes our historical record and is not a promise about your application.",
        "Our fee pays for our professional services — advice, document review, preparation, submission and follow-up. It is not a payment for a visa and is not conditional on the outcome, except as expressly set out in our Refund Policy.",
      ],
    },
    {
      heading: "4. Your responsibilities",
      bullets: [
        "Give us information that is accurate, complete and truthful.",
        "Provide genuine, unaltered supporting documents. Submitting false or fraudulent documents is a criminal offence and we will immediately cease to act for you.",
        "Supply documents and respond to our requests promptly, so that deadlines and appointments are not missed.",
        "Attend any biometric or interview appointment booked for you.",
        "Tell us promptly of any change to your circumstances, travel plans or contact details.",
        "Hold a passport valid for the period required by your destination.",
      ],
    },
    {
      heading: "5. Fees and payment",
      body: [
        "Our consultation is free and carries no obligation. Where you proceed, we will confirm our service fee in writing before any work begins.",
        "Our service fee is separate from third-party costs — embassy and consular fees, visa centre charges, biometric fees, courier costs, insurance premiums and the cost of flights or accommodation. Those are set by the relevant provider, are payable in addition, and are outside our control.",
        "Work begins once payment is received and confirmed, unless we agree otherwise in writing.",
      ],
    },
    {
      heading: "6. Processing times",
      body: [
        "Any processing time we quote is an estimate based on the published guidance of the relevant authority and our own experience. Embassies routinely vary their timescales, particularly during peak season. We cannot be held responsible for delays caused by an embassy, consulate, visa centre or courier, and we strongly advise against booking non-refundable travel before your visa is issued.",
      ],
    },
    {
      heading: "7. Third-party bookings",
      body: [
        "Where we book flights, hotels or packages, we act as an intermediary. Those bookings are governed by the terms and conditions of the airline, hotel or tour operator concerned, including their own rules on amendment and cancellation. We will make those terms available to you before you commit.",
      ],
    },
    {
      heading: "8. Our liability",
      body: [
        "We will carry out our services with reasonable care and skill. Where we are liable to you, our liability is limited to the service fee you have paid us for the service in question.",
        "We are not liable for a visa refusal, for an embassy's processing time, for the consequences of information or documents you have supplied that prove to be inaccurate, or for losses arising from travel booked before a visa was granted.",
        "Nothing in these terms limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited by law. Your statutory rights as a consumer are unaffected.",
      ],
    },
    {
      heading: "9. Cancellation and refunds",
      body: [
        "Your right to cancel, and the circumstances in which a refund is due, are set out in full in our Refund Policy, which forms part of these terms.",
      ],
    },
    {
      heading: "10. Intellectual property",
      body: [
        "The content of this website — text, graphics, logos and design — belongs to us and may not be reproduced commercially without our written permission.",
      ],
    },
    {
      heading: "11. Governing law",
      body: [
        "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from them.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  slug: "refund-policy",
  title: "Refund Policy",
  description: `When and how ${siteConfig.name} issues refunds on consultancy fees and travel bookings.`,
  updated: lastUpdated,
  intro:
    "We want you to feel confident engaging us. This policy sets out exactly when a refund is available, how much of your payment is refundable, and how to request one. It should be read together with our Terms & Conditions.",
  sections: [
    {
      heading: "1. Free consultation",
      body: [
        "Our initial consultation and document review are provided free of charge. Nothing is payable until you decide to proceed, so there is nothing to refund at this stage.",
      ],
    },
    {
      heading: "2. What is refundable, and what is not",
      body: [
        "Every payment you make falls into one of two categories, and they are treated differently:",
      ],
      bullets: [
        "Our service fee — what you pay us for our advice, preparation, submission and follow-up. This is refundable in the circumstances set out below.",
        "Third-party fees — embassy and consular fees, visa application centre charges, biometric and courier fees, insurance premiums, and the cost of flights or hotels. These are collected by other organisations. Once paid on your behalf they are non-refundable to us, and we cannot return money we no longer hold.",
      ],
    },
    {
      heading: "3. Cancelling before work starts",
      body: [
        "If you cancel before we have begun work on your file, you receive a full refund of our service fee.",
        "As a consumer you also have a statutory right under the Consumer Contracts Regulations 2013 to cancel within 14 days of engaging us. Where you ask us to begin work inside that 14-day window and then cancel, we may retain a proportionate amount reflecting the work already carried out.",
      ],
    },
    {
      heading: "4. Cancelling after work has started",
      body: [
        "Once we have begun preparing your application, refunds of our service fee are calculated on the stage reached:",
      ],
      bullets: [
        "Before document review begins — 100% of the service fee refunded.",
        "Document review completed, application not yet prepared — 50% of the service fee refunded.",
        "Application prepared or appointment booked — 25% of the service fee refunded.",
        "Application submitted to the embassy or visa centre — the service fee is no longer refundable, as the work has been performed in full.",
      ],
    },
    {
      heading: "5. If your visa is refused",
      body: [
        "A refusal is not in itself grounds for a refund of our service fee. As explained in our Terms & Conditions, that fee pays for professional services that have been delivered, and the decision belongs entirely to the embassy or consulate.",
        "What we do instead: we will review the refusal notice with you free of charge, explain the grounds given, and advise on whether an appeal or a fresh application is realistic. Where you choose to re-apply with us, we apply a substantially reduced service fee, confirmed to you in writing at the time.",
        "If a refusal is caused by a demonstrable error on our part — for example a document we prepared incorrectly or an appointment we failed to book — we will refund our service fee in full.",
      ],
    },
    {
      heading: "6. If we cancel",
      body: [
        "If we are unable to continue acting for you for reasons that are not your fault, we will refund our service fee in full for the work not yet done.",
        "No refund is due where we cease to act because false or fraudulent documents or information have been supplied to us.",
      ],
    },
    {
      heading: "7. Flights, hotels and holiday packages",
      body: [
        "Travel bookings are governed by the cancellation and amendment terms of the airline, hotel or tour operator concerned, which we will share with you before you book. Many fares and rates are non-refundable by the supplier. Where a refund is available from the supplier, we will pursue it on your behalf and pass on whatever is recovered.",
        "This is why we advise holding off on non-refundable travel until your visa has been issued.",
      ],
    },
    {
      heading: "8. How to request a refund",
      body: [
        `Send your request to ${siteConfig.email}, or message us on WhatsApp at ${siteConfig.whatsapp}, including your full name, the service concerned, the date of payment and the reason for the request.`,
        "We acknowledge every request within 2 working days and aim to reach a decision within 10 working days.",
      ],
    },
    {
      heading: "9. How refunds are paid",
      body: [
        "Approved refunds are returned by the original payment method within 14 working days of approval. Your bank may take a few additional days to show the credit.",
      ],
    },
    {
      heading: "10. If you disagree with our decision",
      body: [
        `If you are not satisfied with the outcome, write to us at ${siteConfig.email} marking your message for the attention of management. We will review the matter independently and respond within 14 working days.`,
      ],
    },
  ],
};
