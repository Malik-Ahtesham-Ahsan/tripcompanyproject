import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Canada Visitor Visa from the UK | TravelVista",
  "description": "Guidance on Canada visitor visas and the Super Visa for UK residents: who needs one, documents and how to apply online with IRCC. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/canada-visa-from-uk"
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
    "title": "Canada Visitor Visa from the UK | TravelVista",
    "description": "Guidance on Canada visitor visas and the Super Visa for UK residents: who needs one, documents and how to apply online with IRCC. Free consultation.",
    "url": "https://www.travelvista.uk/canada-visa-from-uk",
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
        "name": "Canada visa",
        "item": "https://www.travelvista.uk/canada-visa-from-uk"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do British citizens need a Canada visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "British citizens do not need a visitor visa, but they need an Electronic Travel Authorization (eTA) to fly to Canada."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Super Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Super Visa is for parents and grandparents of Canadian citizens and permanent residents. It allows longer visits than a standard visitor visa."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to give fingerprints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most visitor visa applicants need to give biometrics (fingerprints and a photo) at a visa application centre."
        }
      },
      {
        "@type": "Question",
        "name": "Who decides my Canada visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immigration, Refugees and Citizenship Canada (IRCC) makes every decision."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="/canada-visa-from-uk" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp66" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp66"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="/">Home</a>
              </li>
              <li aria-current="page" data-i="5c6e3ec1e4">Canada visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="0ecb36d3dd">Canada · Visitor visa and Super Visa</p>
          <h1 data-i="df9129be10" style={{ "marginTop": "10px" }}>Canada visitor visa from the UK</h1>
          <p className="lead" data-i="bc75c3a395">Guidance for UK residents visiting Canada: whether you need a visitor visa or an eTA, the documents to prepare and how to apply online.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="d372ce9498">Visa types</dt>
              <dd data-i="b62e3b6c3a">Visitor · Super Visa</dd>
            </div>
            <div className="fact">
              <dt data-i="cfea419c3b">Apply</dt>
              <dd data-i="8e7076eb9f">Online with IRCC</dd>
            </div>
            <div className="fact">
              <dt data-i="1e8c2382ed">Biometrics</dt>
              <dd data-i="d37c8e6d65">Usually required</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="15a677effb">Who needs a Canada visitor visa</h2>
              <div className="prose">
                <p data-i="0b8da17088">If your passport needs a visa for Canada, you must apply for a visitor visa (also called a temporary resident visa) before you travel, even if you live in the UK.</p>
                <p data-i="9b0f6b28ac">People from visa-exempt countries, including British citizens, need an eTA instead when flying to Canada.</p>
              </div>
            </section>
            <section id="types">
              <h2 data-i="116d622045">Visa types we cover</h2>
              <ul className="checklist">
                <li>
                  <span data-i="3d9b9cfbb9">
                    <strong>Visitor visa</strong>
                    {" for holidays, family visits and short business trips."}
                  </span>
                </li>
                <li>
                  <span data-i="b620c78a75">
                    <strong>Super Visa</strong>
                    {" for parents and grandparents of Canadian citizens and permanent residents."}
                  </span>
                </li>
              </ul>
            </section>
            <section id="process">
              <h2 data-i="d0cad10ed3">How to apply from the UK</h2>
              <ol>
                <li data-i="21895431d8">Create an account and complete your application online with IRCC.</li>
                <li data-i="e5ca695600">Upload your documents and pay the fees.</li>
                <li data-i="32a973291f">Give your biometrics at a visa application centre when asked.</li>
                <li data-i="b7e2626249">Wait for the decision. If approved, you send your passport for the visa.</li>
              </ol>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="372ae9253a">Do British citizens need a Canada visa?</summary>
                  <div className="answer">
                    <p data-i="95c20332c8">British citizens do not need a visitor visa, but they need an Electronic Travel Authorization (eTA) to fly to Canada.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="de15927900">What is the Super Visa?</summary>
                  <div className="answer">
                    <p data-i="78781200b2">The Super Visa is for parents and grandparents of Canadian citizens and permanent residents. It allows longer visits than a standard visitor visa.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="48ab88d247">Do I need to give fingerprints?</summary>
                  <div className="answer">
                    <p data-i="00e60d9186">Most visitor visa applicants need to give biometrics (fingerprints and a photo) at a visa application centre.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="39ccd7870d">Who decides my Canada visa?</summary>
                  <div className="answer">
                    <p data-i="aa2bb45c37">Immigration, Refugees and Citizenship Canada (IRCC) makes every decision.</p>
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
                <h2 data-i="83ec646ec2">Get help with your Canada visa</h2>
                <p data-i="7ac6bb14ca">We check what you need and help you prepare your documents.</p>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20Canada%20visitor%20visa." rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="3aba7bad7f">WhatsApp us</span>
                </a>
                {" "}
                <a className="btn btn-ghost" href="/contact">
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
                      <a data-i="15a677effb" href="#who">Who needs a Canada visitor visa</a>
                    </li>
                    <li>
                      <a data-i="116d622045" href="#types">Visa types we cover</a>
                    </li>
                    <li>
                      <a data-i="d0cad10ed3" href="#process">How to apply from the UK</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp67" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp67"></mpath>
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
            <a className="btn btn-outline" data-i="ad01ea72e2" href="/contact">Send an enquiry</a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
