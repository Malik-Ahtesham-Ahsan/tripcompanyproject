import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Turkey Visa from the UK | e-Visa Help | TravelVista",
  "description": "Do you need a Turkey visa from the UK? We check if you can use the official e-Visa or need a consulate visa, and help you apply. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/turkey-visa-from-uk.html"
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
    "title": "Turkey Visa from the UK | e-Visa Help | TravelVista",
    "description": "Do you need a Turkey visa from the UK? We check if you can use the official e-Visa or need a consulate visa, and help you apply. Free consultation.",
    "url": "https://www.travelvista.uk/turkey-visa-from-uk.html",
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
        "name": "Turkey visa",
        "item": "https://www.travelvista.uk/turkey-visa-from-uk.html"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do British citizens need a visa for Turkey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. British citizens can visit Turkey for tourism without a visa for up to 90 days in any 180-day period."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the official Turkey e-Visa website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official site is evisa.gov.tr. Be careful of other websites that look official and charge extra."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get an e-Visa because I live in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some nationalities can get an e-Visa only if they hold a valid visa or residence permit from the UK, US, Ireland or a Schengen country. Others must apply to the Turkish consulate. We check this for you."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="turkey-visa-from-uk.html" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp68" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp68"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="index.html">Home</a>
              </li>
              <li aria-current="page" data-i="e189338627">Turkey visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="b3c442e845">Turkey · e-Visa and consulate visa</p>
          <h1 data-i="93800f2c55" style={{ "marginTop": "10px" }}>Turkey visa from the UK</h1>
          <p className="lead" data-i="9a8a2dfb09">We check whether you can use Turkey's e-Visa or need to apply through the consulate, and help you get it right the first time.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="13be9b5cfd">British citizens</dt>
              <dd data-i="dca892408c">No visa for tourism</dd>
            </div>
            <div className="fact">
              <dt data-i="4cf74cc40e">Official e-Visa</dt>
              <dd data-i="82cf11ae41">evisa.gov.tr</dd>
            </div>
            <div className="fact">
              <dt data-i="8d7bf5bf13">Others</dt>
              <dd data-i="36c3edf145">e-Visa or consulate</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="5d73eed8b2">Who needs a Turkey visa</h2>
              <div className="prose">
                <p data-i="6ed0df3da1">It depends on your passport. British citizens do not need a visa for tourist trips. Many other nationalities living in the UK need either an e-Visa or a visa from the Turkish consulate.</p>
              </div>
            </section>
            <section id="types">
              <h2 data-i="96101bbeb6">e-Visa or consulate visa</h2>
              <ul className="checklist">
                <li>
                  <span data-i="8072474e9a">
                    <strong>e-Visa:</strong>
                    {" applied for online on the official site. Some nationalities qualify only if they hold a valid UK, US, Irish or Schengen visa or residence permit."}
                  </span>
                </li>
                <li>
                  <span data-i="fe58b4079f">
                    <strong>Consulate (sticker) visa:</strong>
                    {" for people who cannot use the e-Visa, applied for through the Turkish consulate."}
                  </span>
                </li>
              </ul>
            </section>
            <section id="help">
              <h2 data-i="27c64c7845">How we help</h2>
              <ul>
                <li data-i="7f2e11b2ac">Check which option fits your passport and UK status.</li>
                <li data-i="4b7f0649d8">Help with the application and documents.</li>
                <li data-i="d50de42242">Book flights and hotels for your trip if you want.</li>
              </ul>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="545c900c56">Do British citizens need a visa for Turkey?</summary>
                  <div className="answer">
                    <p data-i="c65b563359">No. British citizens can visit Turkey for tourism without a visa for up to 90 days in any 180-day period.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="6dab348059">Where is the official Turkey e-Visa website?</summary>
                  <div className="answer">
                    <p data-i="9beda7c90e">The official site is evisa.gov.tr. Be careful of other websites that look official and charge extra.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="0f87256d60">Can I get an e-Visa because I live in the UK?</summary>
                  <div className="answer">
                    <p data-i="7281565e5a">Some nationalities can get an e-Visa only if they hold a valid visa or residence permit from the UK, US, Ireland or a Schengen country. Others must apply to the Turkish consulate. We check this for you.</p>
                  </div>
                </details>
              </div>
            </section>
          </div>
          <aside>
            <div className="side-box">
              <div className="side-head">
                <span className="side-chip" data-i="d684b7391e">
                  {"Schengen package · "}
                  <b>£89</b>
                </span>
                <h2 data-i="f85a35dbd0">Get help with your Turkey visa</h2>
                <p data-i="f41fd943ac">Tell us your passport and UK status and we will tell you which option fits.</p>
                <span aria-hidden="true" className="side-orbit"></span>
              </div>
              <div className="side-body">
                <ul className="side-points">
                  <li>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {" "}
                    <span data-i="77837eb134">Reply within 2 hours in office hours</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {" "}
                    <span data-i="470f9714b8">Complete file prepared for you</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {" "}
                    <span data-i="66e3087cf7">No hidden fees</span>
                  </li>
                </ul>
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20Turkey%20visa." rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="3aba7bad7f">WhatsApp us</span>
                </a>
                {" "}
                <a className="btn btn-ghost" href="contact.html">
                  <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="ad01ea72e2">Send an enquiry</span>
                </a>
                <div className="side-phone">
                  <span className="side-phone-icon">
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span>
                    <small data-i="27a199102e">WhatsApp or call</small>
                    <span className="phone">+44 7862 609755</span>
                  </span>
                </div>
                <nav aria-label="On this page" className="toc" data-i-aria-label="7e439c353e">
                  <strong data-i="7e439c353e">On this page</strong>
                  <ol>
                    <li>
                      <a data-i="5d73eed8b2" href="#who">Who needs a Turkey visa</a>
                    </li>
                    <li>
                      <a data-i="96101bbeb6" href="#types">e-Visa or consulate visa</a>
                    </li>
                    <li>
                      <a data-i="27c64c7845" href="#help">How we help</a>
                    </li>
                    <li>
                      <a data-i="03688ba6aa" href="#faq">FAQ</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <section className="cta-band">
        <svg aria-hidden="true" className="flight flight-cta" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 220">
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp69" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp69"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <div>
            <h2 data-i="ebe65bf6d0">Not sure what you need?</h2>
            <p data-i="8200e3dfd3">Tell us your passport, your UK status and where you want to go. We reply within 2 hours during office hours, free of charge.</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-light" href="https://wa.me/447862609755" rel="noopener" target="_blank">
              <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
              </svg>
              {" "}
              <span data-i="8eb8a88ae3">Chat on WhatsApp</span>
            </a>
            {" "}
            <a className="btn btn-outline" data-i="ad01ea72e2" href="contact.html">Send an enquiry</a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
