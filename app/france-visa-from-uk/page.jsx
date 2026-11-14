import Header3i from "../../components/Header3i";
import Footer3 from "../../components/Footer3";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "France Visa from the UK | Schengen Visa Help | TravelVista",
  "description": "France visa from the UK for UK residents: France-Visas form, TLScontact appointment, documents checklist and €90 fee. Free consultation with TravelVista in London.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/france-visa-from-uk"
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
    "title": "France Visa from the UK | Schengen Visa Help | TravelVista",
    "description": "France visa from the UK for UK residents: France-Visas form, TLScontact appointment, documents checklist and €90 fee. Free consultation with TravelVista in London.",
    "url": "https://www.travelvista.uk/france-visa-from-uk",
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
        "name": "Schengen visa",
        "item": "https://www.travelvista.uk/schengen-visa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "France visa",
        "item": "https://www.travelvista.uk/france-visa-from-uk"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where do I apply for a France visa in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You complete the form on France-Visas and then attend a TLScontact visa centre appointment in the UK."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a France visa from the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official fee is €90 for adults and €45 for children aged 6 to 11. TLScontact charges a separate service fee."
        }
      },
      {
        "@type": "Question",
        "name": "I am visiting France and Italy. Where do I apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apply to the country where you will spend the most nights. If the nights are equal, apply to the country you enter first."
        }
      },
      {
        "@type": "Question",
        "name": "Who decides my France visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The French Consulate General in London. TLScontact does not make visa decisions."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header3i current="/france-visa-from-uk" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp6" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp6"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="/">Home</a>
              </li>
              <li>
                <a data-i="e8f1e9ab2e" href="/schengen-visa">Schengen visa</a>
              </li>
              <li aria-current="page" data-i="5b7b21c8b9">France visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="96bd946c3b">Schengen short-stay visa · France</p>
          <h1 data-i="5703fe2176" style={{ "marginTop": "10px" }}>France visa from the UK</h1>
          <p className="lead" data-i="309d322731">Help for UK residents who need a Schengen visa to visit France. We prepare your complete file, check every document and book your TLScontact appointment.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="e34b351427">Visa type</dt>
              <dd data-i="cb9a593a54">Schengen short stay (C)</dd>
            </div>
            <div className="fact">
              <dt data-i="4ddb32c5fd">Maximum stay</dt>
              <dd data-i="837a257a2f">90 days in any 180</dd>
            </div>
            <div className="fact">
              <dt data-i="b6532d9823">Official fee</dt>
              <dd data-i="ff6895544b">€90 adult</dd>
            </div>
            <div className="fact">
              <dt data-i="cf31f6db7e">Visa centre</dt>
              <dd data-i="3c543452c9">TLScontact</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="9dda7f9c79">Who needs a France visa?</h2>
              <div className="prose">
                <p data-i="213291efad">You need a Schengen visa for France if your passport is from a country that needs one, even if you live in the UK. Many people with Indian, Pakistani, Nigerian, Chinese and other passports who live in the UK on a work, student, family or settled status need to apply.</p>
                <p data-i="e8c689035e">British citizens do not need a visa for short trips of up to 90 days in any 180-day period.</p>
                <p data-i="8c776f1634">Apply to France if it is your main destination, meaning where you will spend the most nights. If you will spend the same time in several countries, apply to the country you will enter first.</p>
              </div>
            </section>
            <section id="process">
              <h2 data-i="d0cad10ed3">How to apply from the UK</h2>
              <ol>
                <li data-i="b9c1402ed1">Complete your application online on the official France-Visas website.</li>
                <li data-i="c9e19b193a">Book an appointment with TLScontact in the UK.</li>
                <li data-i="6a71e09251">Prepare your documents using your checklist.</li>
                <li data-i="fdadadc6fc">Attend your appointment to submit your documents and give fingerprints.</li>
                <li data-i="6295ed6d5f">Wait for the decision and collect your passport.</li>
              </ol>
              <p className="note" data-i="b266de6a83">France visa appointments in the UK are handled by TLScontact. Appointments can be hard to find in busy months, so start early.</p>
              <p className="prose" data-i="85aa7bc570">The French Consulate General in London decides France visa applications from the UK. TLScontact only collects your documents and fingerprints.</p>
            </section>
            <section id="documents">
              <h2 data-i="46213c8fbf">Documents checklist</h2>
              <ul className="checklist">
                <li>
                  <span data-i="5c21068f2d">
                    <strong>Passport</strong>
                    {" issued in the last 10 years, valid for at least 3 months after you leave the Schengen area, with at least 2 blank pages."}
                  </span>
                </li>
                <li>
                  <span data-i="535525a50f">
                    <strong>Proof of your UK status</strong>
                    , such as your eVisa share code or residence permit. It should stay valid well beyond your return date.
                  </span>
                </li>
                <li>
                  <span data-i="9e1372888c">
                    <strong>Application form</strong>
                    , completed online or on paper depending on the country.
                  </span>
                </li>
                <li>
                  <span data-i="d68030ce30">
                    <strong>Recent passport photo</strong>
                    {" that meets Schengen photo rules."}
                  </span>
                </li>
                <li>
                  <span data-i="41a419631f">
                    <strong>Travel medical insurance</strong>
                    {" covering at least €30,000 for the whole Schengen area and your full trip."}
                  </span>
                </li>
                <li>
                  <span data-i="3b734f2bf5">
                    <strong>Flight reservation</strong>
                    {" showing your entry to and exit from the Schengen area."}
                  </span>
                </li>
                <li>
                  <span data-i="79cf255ef3">
                    <strong>Proof of accommodation</strong>
                    {" for every night, such as hotel bookings or an invitation letter."}
                  </span>
                </li>
                <li>
                  <span data-i="7e7f8b2029">
                    <strong>Bank statements</strong>
                    , usually for the last 3 months, showing you can pay for the trip.
                  </span>
                </li>
                <li>
                  <span data-i="aed7d6aa29">
                    <strong>Proof of your ties to the UK</strong>
                    : employment letter and payslips, a student letter, or business documents.
                  </span>
                </li>
                <li>
                  <span data-i="1cb2080b53">
                    <strong>Cover letter</strong>
                    {" explaining your trip, if the country asks for one."}
                  </span>
                </li>
              </ul>
              <p className="small" data-i="d892ef227a">The exact list depends on the country, your reason for travel and your situation. We give you a checklist made for your application.</p>
            </section>
            <section id="fees">
              <h2 data-i="72abbc9284">Fees</h2>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only" data-i="94055ade95" style={{ "position": "absolute", "left": "-999px" }}>Official Schengen visa fees</caption>
                  <thead>
                    <tr>
                      <th data-i="1560dc40a1" scope="col">Applicant</th>
                      <th data-i="72f8d17799" scope="col">Official visa fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-i="34226a3a49">Adult (aged 12 and over)</td>
                      <td className="num">€90</td>
                    </tr>
                    <tr>
                      <td data-i="272ad8545c">Child aged 6 to 11</td>
                      <td className="num">€45</td>
                    </tr>
                    <tr>
                      <td data-i="41c95ad44f">Child under 6</td>
                      <td className="num" data-i="75f527181b">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small" data-i="4e363227f1">These are the official EU fees in place since 11 June 2024. The visa centre (TLScontact, VFS Global or BLS International) charges its own service fee on top, and our service fee is agreed with you before we start.</p>
            </section>
            <section id="tips">
              <h2 data-i="e3a06ad8c0">Tips for a strong application</h2>
              <ul>
                <li data-i="afc48c63c9">Make sure your dates, flights and hotel bookings all match your application form.</li>
                <li data-i="2c4a258ce6">Show accommodation for every night of your stay.</li>
                <li data-i="cafff755cf">Make sure your bank statements show regular income and enough money for the trip.</li>
                <li data-i="441acd9caa">If France is not where you spend the most nights, apply to the other country instead.</li>
              </ul>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="6cc992e3d8">Where do I apply for a France visa in the UK?</summary>
                  <div className="answer">
                    <p data-i="ff97309442">You complete the form on France-Visas and then attend a TLScontact visa centre appointment in the UK.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="9503039f64">How much is a France visa from the UK?</summary>
                  <div className="answer">
                    <p data-i="075057b0b8">The official fee is €90 for adults and €45 for children aged 6 to 11. TLScontact charges a separate service fee.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="6f52d8cd1c">I am visiting France and Italy. Where do I apply?</summary>
                  <div className="answer">
                    <p data-i="119a973709">Apply to the country where you will spend the most nights. If the nights are equal, apply to the country you enter first.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="4a67e227c3">Who decides my France visa?</summary>
                  <div className="answer">
                    <p data-i="d57d04bef0">The French Consulate General in London. TLScontact does not make visa decisions.</p>
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
                <h2 data-i="5dfee95aec">Get help with your France visa</h2>
                <p data-i="1dd849bc64">Our Schengen visa package is £89. We prepare your complete file and book your appointment.</p>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20France%20Schengen%20visa." rel="noopener" target="_blank">
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
                      <a data-i="ab63653aae" href="#who">Who needs it</a>
                    </li>
                    <li>
                      <a data-i="10ea51cf03" href="#process">How to apply</a>
                    </li>
                    <li>
                      <a data-i="687c82861c" href="#documents">Documents</a>
                    </li>
                    <li>
                      <a data-i="72abbc9284" href="#fees">Fees</a>
                    </li>
                    <li>
                      <a data-i="4cf1b54b00" href="#tips">Tips</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp7" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp7"></mpath>
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
      <Footer3 />
    </>
  );
}
