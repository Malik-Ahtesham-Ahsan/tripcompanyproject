import Header2i from "../../components/Header2i";
import Footer2 from "../../components/Footer2";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "USA Visitor Visa from the UK | B1/B2 Help | TravelVista",
  "description": "Help with the US B1/B2 visitor visa for UK residents: DS-160 form, documents and interview preparation for the US Embassy in London. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/usa-visa-from-uk"
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
    "title": "USA Visitor Visa from the UK | B1/B2 Help | TravelVista",
    "description": "Help with the US B1/B2 visitor visa for UK residents: DS-160 form, documents and interview preparation for the US Embassy in London. Free consultation.",
    "url": "https://www.travelvista.uk/usa-visa-from-uk",
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
        "name": "USA visa",
        "item": "https://www.travelvista.uk/usa-visa-from-uk"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do British citizens need a US visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most British citizens can visit the US for short trips using ESTA instead of a visa, if they are eligible. Some people still need a visa, for example after certain past refusals or travel history."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the visa interview?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most UK residents attend their interview at the US Embassy in London."
        }
      },
      {
        "@type": "Question",
        "name": "How much is the US visa fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fee is set by the US government and can change. We confirm the current fee from the official US visa website when you apply."
        }
      },
      {
        "@type": "Question",
        "name": "Can you guarantee my US visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The consular officer makes the decision at your interview. We help you prepare a complete application and practise your interview."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header2i current="/usa-visa-from-uk" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp64" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp64"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="/">Home</a>
              </li>
              <li aria-current="page" data-i="e23b276b85">USA visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="46e9423199">USA · B1/B2 visitor visa</p>
          <h1 data-i="c5f168a34e" style={{ "marginTop": "10px" }}>USA visitor visa from the UK</h1>
          <p className="lead" data-i="1a6bd313ae">Help with the B1/B2 visitor visa for people living in the UK: the DS-160 form, your documents and preparation for your interview.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="e34b351427">Visa type</dt>
              <dd data-i="ae91b80a59">B1/B2 visitor</dd>
            </div>
            <div className="fact">
              <dt data-i="80446347ed">Form</dt>
              <dd data-i="6d239a257c">DS-160</dd>
            </div>
            <div className="fact">
              <dt data-i="19ad8ec723">Interview</dt>
              <dd data-i="24c2507f38">US Embassy London</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="6a236a8c25">Who needs a US visitor visa</h2>
              <div className="prose">
                <p data-i="d88c670d02">If your passport is not part of the US Visa Waiver Program, you need a B1/B2 visitor visa for tourism, family visits or business meetings, even if you live in the UK.</p>
                <p data-i="d3799319d6">The B1/B2 visa is for short visits. It does not allow you to work or study in the US.</p>
              </div>
            </section>
            <section id="process">
              <h2 data-i="d0cad10ed3">How to apply from the UK</h2>
              <ol>
                <li data-i="0e0556c6c4">Complete the DS-160 online application form.</li>
                <li data-i="fe2e64aa30">Pay the visa fee.</li>
                <li data-i="c835f21af2">Book your interview at the US Embassy in London.</li>
                <li data-i="a293435ac7">Prepare your documents and practise your interview.</li>
                <li data-i="44d0cd82c1">Attend your interview. If approved, your passport is returned with the visa.</li>
              </ol>
            </section>
            <section id="help">
              <h2 data-i="27c64c7845">How we help</h2>
              <ul className="checklist">
                <li>
                  <span data-i="b789163baa">Check whether you need a visa or can use ESTA.</span>
                </li>
                <li>
                  <span data-i="4bffcf65ad">Help you complete the DS-160 form correctly.</span>
                </li>
                <li>
                  <span data-i="87146590a1">Build a document list that shows your ties to the UK.</span>
                </li>
                <li>
                  <span data-i="64a567224d">Interview practice so you feel ready on the day.</span>
                </li>
              </ul>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="53237b5a61">Do British citizens need a US visa?</summary>
                  <div className="answer">
                    <p data-i="327ea100d3">Most British citizens can visit the US for short trips using ESTA instead of a visa, if they are eligible. Some people still need a visa, for example after certain past refusals or travel history.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="ef403233ff">Where is the visa interview?</summary>
                  <div className="answer">
                    <p data-i="2d72daff45">Most UK residents attend their interview at the US Embassy in London.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="d228db3471">How much is the US visa fee?</summary>
                  <div className="answer">
                    <p data-i="3080cf45f2">The fee is set by the US government and can change. We confirm the current fee from the official US visa website when you apply.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="5c5f737ff8">Can you guarantee my US visa?</summary>
                  <div className="answer">
                    <p data-i="0b77866f64">No. The consular officer makes the decision at your interview. We help you prepare a complete application and practise your interview.</p>
                  </div>
                </details>
              </div>
            </section>
          </div>
          <aside>
            <div className="side-box">
              <div className="side-head">
                <span className="side-chip" data-i="18a7959cf1">Free first consultation</span>
                <h2 data-i="5ab19d9dd4">Get help with your US visa</h2>
                <p data-i="11b89a493c">We check if you need a visa or ESTA, then help you prepare.</p>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20USA%20B1/B2%20visa." rel="noopener" target="_blank">
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
                      <a data-i="6a236a8c25" href="#who">Who needs a US visitor visa</a>
                    </li>
                    <li>
                      <a data-i="d0cad10ed3" href="#process">How to apply from the UK</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp65" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp65"></mpath>
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
      <Footer2 />
    </>
  );
}
