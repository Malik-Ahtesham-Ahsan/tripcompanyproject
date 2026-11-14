import Header2i from "../../components/Header2i";
import Footer2 from "../../components/Footer2";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Visa Appointment Availability at UK Visa Centres | TravelVista",
  "description": "Appointment availability our team has seen at TLScontact, VFS Global and BLS International visa centres in London, Manchester and Edinburgh.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/appointment-updates"
  },
  "robots": {
    "index": true,
    "follow": true,
    "max-image-preview": "large"
  },
  "openGraph": {
    "type": "website",
    "siteName": "TravelVista Ltd",
    "locale": "en_GB",
    "title": "Visa Appointment Availability at UK Visa Centres | TravelVista",
    "description": "Appointment availability our team has seen at TLScontact, VFS Global and BLS International visa centres in London, Manchester and Edinburgh.",
    "url": "https://www.travelvista.uk/appointment-updates",
    "images": [
      {
        "url": "https://www.travelvista.uk/assets/og-image.jpg",
        "width": 1200,
        "height": 630,
        "alt": "TravelVista Ltd logo"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  }
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.travelvista.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free tools",
        "item": "https://www.travelvista.uk/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Appointment updates",
        "item": "https://www.travelvista.uk/appointment-updates"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header2i current="/appointment-updates" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp81" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp81"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tools">Free tools</a>
              </li>
              <li aria-current="page">Appointment updates</li>
            </ol>
          </nav>
          <h1>Visa appointment updates</h1>
          <p className="lead">The latest availability our team has seen at UK visa centres.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div data-tool="appts">
            <p className="note">
              <strong>Updated manually by our team. Availability changes quickly. Message us to book.</strong>
            </p>
            <div aria-live="polite" className="panel appt-panel" id="ap-result">
              <p className="tool-empty">Loading the latest updates…</p>
            </div>
          </div>
          <p className="note tool-disclaimer">This is general guidance only. TravelVista Ltd is not connected to any government or embassy. Every visa decision is made by the embassy or consulate.</p>
          <nav aria-label="More free tools" className="tool-more">
            <h2>More free tools</h2>
            <ul>
              <li>
                <a href="/visa-checker">Do I need a visa?</a>
              </li>
              <li>
                <a href="/cost-calculator">Visa cost calculator</a>
              </li>
              <li>
                <a href="/schengen-calculator">90/180-day calculator</a>
              </li>
              <li>
                <a href="/document-checklist">Document checklist</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      </main>
      <Footer2 />
    </>
  );
}
