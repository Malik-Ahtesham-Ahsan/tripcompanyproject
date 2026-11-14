import Header3i from "../../components/Header3i";
import Footer3 from "../../components/Footer3";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Free Visa Tools for UK Residents | TravelVista",
  "description": "Free visa tools for people living in the UK: visa checker, Schengen cost calculator, 90/180-day calculator, document checklist and appointment updates.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/tools"
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
    "title": "Free Visa Tools for UK Residents | TravelVista",
    "description": "Free visa tools for people living in the UK: visa checker, Schengen cost calculator, 90/180-day calculator, document checklist and appointment updates.",
    "url": "https://www.travelvista.uk/tools",
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
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header3i current="/tools" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp82" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp82"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li aria-current="page">Free tools</li>
            </ol>
          </nav>
          <h1>Free visa tools</h1>
          <p className="lead">Free tools to help you plan your visa application. No sign-up needed.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid tool-grid">
            <a className="card tool-card" href="/visa-checker">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </span>
              <h2>Do I need a visa?</h2>
              <p>Check by passport, UK status and destination, with the visa centre you would use.</p>
              <span className="tool-go">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
            <a className="card tool-card" href="/cost-calculator">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <rect height="18" rx="2" width="16" x="4" y="3"></rect>
                  <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h8"></path>
                </svg>
              </span>
              <h2>Visa cost calculator</h2>
              <p>Add up our fee, the embassy fee and the visa centre fee for your whole group.</p>
              <span className="tool-go">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
            <a className="card tool-card" href="/schengen-calculator">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <rect height="16" rx="2" width="18" x="3" y="5"></rect>
                  <path d="M16 3v4M8 3v4M3 10h18M8 14h3v3H8z"></path>
                </svg>
              </span>
              <h2>90/180-day calculator</h2>
              <p>Count the days you have used in the Schengen area and see how long you can stay.</p>
              <span className="tool-go">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
            <a className="card tool-card" href="/document-checklist">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <path d="M9 4h6l1 2h3v15H5V6h3z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </span>
              <h2>Document checklist</h2>
              <p>Get a checklist for your situation, tick items off and save it as a PDF.</p>
              <span className="tool-go">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
            <a className="card tool-card" href="/appointment-updates">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <h2>Appointment updates</h2>
              <p>See the latest appointment availability our team has seen at UK visa centres.</p>
              <span className="tool-go">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
          <p className="note tool-disclaimer">This is general guidance only. TravelVista Ltd is not connected to any government or embassy. Every visa decision is made by the embassy or consulate.</p>
        </div>
      </section>
      </main>
      <Footer3 />
    </>
  );
}
