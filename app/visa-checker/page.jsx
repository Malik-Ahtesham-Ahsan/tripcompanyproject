import Header3i from "../../components/Header3i";
import Footer3 from "../../components/Footer3";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Do I Need a Visa? Free Checker for UK Residents | TravelVista",
  "description": "Free visa checker for people living in the UK: check by passport, UK status and destination whether you need a Schengen, USA, Canada, Turkey or UAE visa.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/visa-checker"
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
    "title": "Do I Need a Visa? Free Checker for UK Residents | TravelVista",
    "description": "Free visa checker for people living in the UK: check by passport, UK status and destination whether you need a Schengen, USA, Canada, Turkey or UAE visa.",
    "url": "https://www.travelvista.uk/visa-checker",
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
        "name": "Do I need a visa?",
        "item": "https://www.travelvista.uk/visa-checker"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header3i current="/visa-checker" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp77" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp77"></mpath>
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
              <li aria-current="page">Do I need a visa?</li>
            </ol>
          </nav>
          <h1>Do I need a visa?</h1>
          <p className="lead">Choose your passport, your UK status and where you are going. You get an instant answer and the next steps.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="tool-layout" data-tool="checker">
            <form className="panel form tool-form" id="vc-form" noValidate={true}>
              <h2 className="tool-h">Your details</h2>
              <div className="field">
                <label htmlFor="vc-nat">Passport nationality</label>
                {" "}
                <input aria-describedby="vc-nat-help vc-nat-err" autoComplete="off" id="vc-nat" list="vc-nat-list" placeholder="Start typing, for example Pakistan" required={true} />
                {" "}
                <datalist id="vc-nat-list"></datalist>
                {" "}
                <span className="small" id="vc-nat-help">The country on the front of your passport.</span>
                {" "}
                <span className="err" hidden={true} id="vc-nat-err">Choose a nationality from the list.</span>
              </div>
              <div className="field">
                <label htmlFor="vc-status">Your UK status</label>
                {" "}
                <select aria-describedby="vc-status-err" id="vc-status" required={true}>
                  <option value="">Choose your UK status</option>
                  <option>British citizen</option>
                  <option>ILR / settled status</option>
                  <option>Skilled Worker</option>
                  <option>Student</option>
                  {" "}
                  <option>Dependant</option>
                  <option>Family visa</option>
                  <option>Other</option>
                </select>
                {" "}
                <span className="err" hidden={true} id="vc-status-err">Choose your UK status.</span>
              </div>
              <div className="field">
                <label htmlFor="vc-dest">Where are you going?</label>
                {" "}
                <select id="vc-dest" required={true}>
                  <optgroup label="Schengen countries">
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
                  </optgroup>
                  {" "}
                  <optgroup label="Other destinations">
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Turkey</option>
                    <option>UAE</option>
                  </optgroup>
                </select>
              </div>
              <button className="btn btn-primary" type="submit">Check now</button>
            </form>
            <div aria-live="polite" className="panel tool-result" id="vc-result" tabIndex="-1">
              <p className="tool-empty">Your answer will appear here.</p>
            </div>
          </div>
          <p className="note tool-disclaimer">This is general guidance only. TravelVista Ltd is not connected to any government or embassy. Every visa decision is made by the embassy or consulate.</p>
          <nav aria-label="More free tools" className="tool-more">
            <h2>More free tools</h2>
            <ul>
              <li>
                <a href="/cost-calculator">Visa cost calculator</a>
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
      <Footer3 />
    </>
  );
}
