import Header2i from "../../components/Header2i";
import Footer2 from "../../components/Footer2";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Schengen Visa Document Checklist Generator | TravelVista",
  "description": "Make a personal Schengen visa document checklist for your job, family and destination. Tick items off and save it as a PDF.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/document-checklist"
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
    "title": "Schengen Visa Document Checklist Generator | TravelVista",
    "description": "Make a personal Schengen visa document checklist for your job, family and destination. Tick items off and save it as a PDF.",
    "url": "https://www.travelvista.uk/document-checklist",
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
        "name": "Document checklist",
        "item": "https://www.travelvista.uk/document-checklist"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header2i current="/document-checklist" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp80" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp80"></mpath>
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
              <li aria-current="page">Document checklist</li>
            </ol>
          </nav>
          <h1>Your Schengen document checklist</h1>
          <p className="lead">Answer three questions to get a checklist for your situation. Tick items off as you go, then print it or save it as a PDF.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="tool-stack" data-tool="docs">
            <form className="panel form tool-form" id="dc-form" noValidate={true}>
              <div className="form-grid tool-3">
                <div className="field">
                  <label htmlFor="dc-job">Your situation</label>
                  <select id="dc-job">
                    <option value="employed">Employed</option>
                    <option value="self">Self-employed</option>
                    <option value="student">Student</option>
                    {" "}
                    <option value="retired">Unemployed or retired</option>
                    <option value="sponsored">Sponsored by family</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="dc-who">Who is travelling?</label>
                  <select id="dc-who">
                    <option value="alone">Just me</option>
                    <option value="family">Me and my family</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="dc-dest">Destination</label>
                  <select id="dc-dest">
                    <option>Austria</option>
                    <option>Belgium</option>
                    <option>Bulgaria</option>
                    <option>Croatia</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Estonia</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Greece</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>Italy</option>
                    <option>Latvia</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Malta</option>
                    <option>Netherlands</option>
                    <option>Norway</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Romania</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Spain</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Make my checklist</button>
            </form>
            <div aria-live="polite" className="panel tool-result print-area" id="dc-result" tabIndex="-1">
              <p className="tool-empty">Your checklist will appear here.</p>
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
                <a href="/appointment-updates">Appointment updates</a>
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
