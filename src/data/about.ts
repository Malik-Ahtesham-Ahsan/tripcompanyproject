export type AboutBlock = {
  heading: string;
  body: string;
};

export type AboutValue = {
  emoji: string;
  title: string;
  description: string;
};

export const aboutStory: AboutBlock[] = [
  {
    heading: "Where we started",
    body: "TravelVista began with a simple frustration: capable travellers were being refused visas over paperwork, not substance. A missing bank statement line, a cover letter that said the wrong thing, an appointment booked at the wrong centre. The rules are public, but they are scattered, inconsistent and rewritten often.",
  },
  {
    heading: "What we do about it",
    body: "We turned that frustration into a process. Every application is checked against the current requirements of the specific consulate handling it, documents are reviewed before anything is submitted, and you are told plainly where your case is weak while there is still time to fix it.",
  },
  {
    heading: "Where we are now",
    body: "From our base in London we support travellers applying across all 29 Schengen countries, plus the USA, Canada and Turkey — and we handle the flights, hotels and itineraries once the visa is granted, so the whole trip sits with one team.",
  },
];

export const aboutValues: AboutValue[] = [
  {
    emoji: "🤝",
    title: "Honest assessments",
    description:
      "If your application is unlikely to succeed as it stands, we say so in the free consultation. We would rather lose the fee than take money for a case we cannot help.",
  },
  {
    emoji: "📋",
    title: "No guarantees we cannot keep",
    description:
      "No consultancy can promise a visa — the decision is the embassy's alone. We publish our track record, not a promise, and anyone who tells you otherwise should be avoided.",
  },
  {
    emoji: "🔒",
    title: "Your documents, protected",
    description:
      "Passports, bank statements and personal records are handled under UK GDPR, stored securely, shared only with the relevant consulate, and returned or destroyed once your application closes.",
  },
  {
    emoji: "💷",
    title: "Clear, itemised pricing",
    description:
      "Our service fee is confirmed in writing before any work starts, and kept separate from embassy and visa-centre charges so you always know what is ours and what is theirs.",
  },
  {
    emoji: "💬",
    title: "A person on the other end",
    description:
      "You get a named consultant and a WhatsApp thread, not a ticket number. Questions get answered the same day, and we chase the embassy so you do not have to.",
  },
  {
    emoji: "🧾",
    title: "Fair on refusals",
    description:
      "If your visa is refused we review the notice with you free of charge, and re-apply at a substantially reduced fee. If the refusal was our error, you get your fee back in full.",
  },
];
