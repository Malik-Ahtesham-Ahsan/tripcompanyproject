import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Schengen 90/180-Day Calculator | TravelVista",
  "description": "Free Schengen 90/180-day calculator: add your past and planned trips to see days used in any 180-day period, days left and the latest date you can stay.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/schengen-calculator"
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
    "title": "Schengen 90/180-Day Calculator | TravelVista",
    "description": "Free Schengen 90/180-day calculator: add your past and planned trips to see days used in any 180-day period, days left and the latest date you can stay.",
    "url": "https://www.travelvista.uk/schengen-calculator",
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
        "name": "90/180-day calculator",
        "item": "https://www.travelvista.uk/schengen-calculator"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="/schengen-calculator" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp79" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp79"></mpath>
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
              <li aria-current="page">90/180-day calculator</li>
            </ol>
          </nav>
          <h1>Schengen 90/180-day calculator</h1>
          <p className="lead">Add your past and planned trips to the Schengen area. Entry and exit days both count as days of stay.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="tool-stack" data-tool="days">
            <form className="panel form tool-form" id="sd-form" noValidate="">
              <h2 className="tool-h">Your trips</h2>
              <p className="small">Add every trip in the last 180 days and any trips you have planned.</p>
              <div className="trip-list" id="sd-trips"></div>
              <p>
                <button className="btn btn-ghost" id="sd-add" type="button">+ Add a trip</button>
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="sd-check">Date you want to enter (or check)</label>
                  <input aria-describedby="sd-check-help" id="sd-check" type="date" />
                  <span className="small" id="sd-check-help">We count the 180 days up to this date.</span>
                </div>
              </div>
              <span className="err" hidden="" id="sd-err" role="alert"></span>
              {" "}
              <button className="btn btn-primary" type="submit">Calculate</button>
            </form>
            <div aria-live="polite" className="panel tool-result" id="sd-result" tabIndex="-1">
              <p className="tool-empty">Add your trips and press Calculate.</p>
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
