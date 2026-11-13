import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Schengen Visa Cost Calculator for UK Residents | TravelVista",
  "description": "Work out the total cost of a Schengen visa for your group: our £89 fee, the official embassy fee (€90 adults, €45 children 6–11) and the visa centre fee.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/cost-calculator"
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
    "title": "Schengen Visa Cost Calculator for UK Residents | TravelVista",
    "description": "Work out the total cost of a Schengen visa for your group: our £89 fee, the official embassy fee (€90 adults, €45 children 6–11) and the visa centre fee.",
    "url": "https://www.travelvista.uk/cost-calculator",
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
        "name": "Visa cost calculator",
        "item": "https://www.travelvista.uk/cost-calculator"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="/cost-calculator" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp78" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp78"></mpath>
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
              <li aria-current="page">Visa cost calculator</li>
            </ol>
          </nav>
          <h1>Schengen visa cost calculator</h1>
          <p className="lead">Enter how many people are applying. The total updates as you type.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="tool-layout" data-tool="cost">
            <form className="panel form tool-form" id="cc-form" noValidate={true}>
              <h2 className="tool-h">Who is applying?</h2>
              <div className="form-grid tool-3">
                <div className="field">
                  <label htmlFor="cc-adults">Adults (12 and over)</label>
                  <input id="cc-adults" inputMode="numeric" max="20" min="0" type="number" defaultValue="1" />
                </div>
                <div className="field">
                  <label htmlFor="cc-kids">Children aged 6–11</label>
                  <input id="cc-kids" inputMode="numeric" max="20" min="0" type="number" defaultValue="0" />
                </div>
                <div className="field">
                  <label htmlFor="cc-small">Children under 6</label>
                  <input id="cc-small" inputMode="numeric" max="20" min="0" type="number" defaultValue="0" />
                </div>
              </div>
              <h2 className="tool-h">Fees you can change</h2>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="cc-centre">Visa centre fee per applicant (£)</label>
                  <input aria-describedby="cc-centre-help" id="cc-centre" inputMode="decimal" min="0" placeholder="Enter the fee" step="0.01" type="number" />
                  <span className="small" id="cc-centre-help">Shown on your visa centre's website (TLScontact, VFS Global or BLS International).</span>
                </div>
                <div className="field">
                  <label htmlFor="cc-rate">Exchange rate: €1 = £</label>
                  <input aria-describedby="cc-rate-help" id="cc-rate" inputMode="decimal" min="0.01" step="0.0001" type="number" defaultValue="0.85" />
                  <span className="small" id="cc-rate-help">Example rate. Enter today's rate from your bank for an exact total.</span>
                </div>
              </div>
            </form>
            <div aria-live="polite" className="panel tool-result" id="cc-result"></div>
          </div>
          <p className="note tool-disclaimer">This is general guidance only. TravelVista Ltd is not connected to any government or embassy. Every visa decision is made by the embassy or consulate.</p>
          <nav aria-label="More free tools" className="tool-more">
            <h2>More free tools</h2>
            <ul>
              <li>
                <a href="/visa-checker">Do I need a visa?</a>
              </li>
              <li>
                <a href="/schengen-calculator">90/180-day calculator</a>
              </li>
              <li>
                <a href="/document-checklist">Document checklist</a>
              </li>
              <li>
                <a href="/appointment-updates">Appointment updates</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
