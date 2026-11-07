// Google structured data (business details, FAQs, breadcrumbs) for a page.
export default function JsonLd({ data }) {
  return data.map((item, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
  ));
}
