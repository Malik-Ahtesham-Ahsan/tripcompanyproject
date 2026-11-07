import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Dubai Visa from the UK | UAE Visit Visa Help | TravelVista",
  "description": "Need a Dubai visa from the UK? We check if you can get a visa on arrival or need a UAE visit visa in advance, and help you apply. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/dubai-visa-from-uk.html"
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
    "title": "Dubai Visa from the UK | UAE Visit Visa Help | TravelVista",
    "description": "Need a Dubai visa from the UK? We check if you can get a visa on arrival or need a UAE visit visa in advance, and help you apply. Free consultation.",
    "url": "https://www.travelvista.uk/dubai-visa-from-uk.html",
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
        "name": "Dubai visa",
        "item": "https://www.travelvista.uk/dubai-visa-from-uk.html"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do British citizens need a visa for Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "British citizens get a visit visa on arrival in the UAE. Check your passport validity before you travel."
        }
      },
      {
        "@type": "Question",
        "name": "Can UK residents get a visa on arrival?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some nationalities who hold UK residence can get a visa on arrival. Others must get a visit visa before travelling. We check your case."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a UAE visit visa take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on how you apply. Apply well before your trip so you have time if extra documents are needed."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="dubai-visa-from-uk.html" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp70" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp70"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="index.html">Home</a>
              </li>
              <li aria-current="page" data-i="feac6ceeea">Dubai visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="b5563b5f96">UAE · Visit visa</p>
          <h1 data-i="a254bd6f37" style={{ "marginTop": "10px" }}>Dubai visa from the UK</h1>
          <p className="lead" data-i="9d7985fb19">We check whether you need a UAE visit visa before you travel, help you apply, and can book your flights and hotel too.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="13be9b5cfd">British citizens</dt>
              <dd data-i="0315412dd5">Visa on arrival</dd>
            </div>
            <div className="fact">
              <dt data-i="34252e687e">Other passports</dt>
              <dd data-i="c64b8530bd">Depends on nationality</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="98e31f689a">Who needs a Dubai visa</h2>
              <div className="prose">
                <p data-i="01980ba28e">It depends on your passport and, for some nationalities, on whether you hold UK residence. British citizens get a visa on arrival. Many other UK residents must arrange a UAE visit visa before they travel.</p>
              </div>
            </section>
            <section id="help">
              <h2 data-i="27c64c7845">How we help</h2>
              <ul className="checklist">
                <li>
                  <span data-i="0143fe07d1">Check whether you can get a visa on arrival or need one in advance.</span>
                </li>
                <li>
                  <span data-i="b715230523">Help you prepare and submit your visit visa application.</span>
                </li>
                <li>
                  <span data-i="acbbb0ff5c">Book flights and hotels for your Dubai trip.</span>
                </li>
              </ul>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="fd7c5d6237">Do British citizens need a visa for Dubai?</summary>
                  <div className="answer">
                    <p data-i="ecc0810138">British citizens get a visit visa on arrival in the UAE. Check your passport validity before you travel.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="e1ecf78408">Can UK residents get a visa on arrival?</summary>
                  <div className="answer">
                    <p data-i="ad04839dcd">Some nationalities who hold UK residence can get a visa on arrival. Others must get a visit visa before travelling. We check your case.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="d377ee0668">How long does a UAE visit visa take?</summary>
                  <div className="answer">
                    <p data-i="900abbd31c">It depends on how you apply. Apply well before your trip so you have time if extra documents are needed.</p>
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
                <h2 data-i="25b8060921">Get help with your Dubai visa</h2>
                <p data-i="a4af5f1a16">We check your options and reply within 2 hours in office hours.</p>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20Dubai%20visa." rel="noopener" target="_blank">
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
                      <a data-i="98e31f689a" href="#who">Who needs a Dubai visa</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp71" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp71"></mpath>
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
