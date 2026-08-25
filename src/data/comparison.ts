export type ComparisonRow = {
  feature: string;
  travelvista: string;
  others: string;
  travelvistaGood: boolean;
  othersGood: boolean | "partial";
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Free initial consultation",
    travelvista: "✅ Always Free",
    others: "❌ Often paid",
    travelvistaGood: true,
    othersGood: false,
  },
  {
    feature: "98%+ approval rate",
    travelvista: "✅ Guaranteed focus",
    others: "⚠️ Not guaranteed",
    travelvistaGood: true,
    othersGood: "partial",
  },
  {
    feature: "24/7 WhatsApp support",
    travelvista: "✅ Yes",
    others: "❌ Business hours only",
    travelvistaGood: true,
    othersGood: false,
  },
  {
    feature: "Auto-reply & tracking",
    travelvista: "✅ Real-time updates",
    others: "⚠️ Sometimes",
    travelvistaGood: true,
    othersGood: "partial",
  },
  {
    feature: "Covers 6+ visa types",
    travelvista: "✅ Schengen + USA/Canada/Turkey",
    others: "⚠️ Usually just Schengen",
    travelvistaGood: true,
    othersGood: "partial",
  },
  {
    feature: "Holiday packages included",
    travelvista: "✅ Full packages available",
    others: "❌ Visa only",
    travelvistaGood: true,
    othersGood: false,
  },
  {
    feature: "GDPR compliant",
    travelvista: "✅ Fully compliant",
    others: "⚠️ Unclear",
    travelvistaGood: true,
    othersGood: "partial",
  },
];
