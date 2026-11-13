import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Contact TravelVista Ltd | Free Visa Consultation in London",
  "description": "Contact TravelVista Ltd for a free visa consultation. WhatsApp +44 7862 609755, email info@travelvista.uk, or visit 128 Kingsway, London WC2B 6NH.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/contact"
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
    "title": "Contact TravelVista Ltd | Free Visa Consultation in London",
    "description": "Contact TravelVista Ltd for a free visa consultation. WhatsApp +44 7862 609755, email info@travelvista.uk, or visit 128 Kingsway, London WC2B 6NH.",
    "url": "https://www.travelvista.uk/contact",
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
    "@type": "TravelAgency",
    "@id": "https://www.travelvista.uk/#business",
    "name": "TravelVista Ltd",
    "legalName": "TRAVELVISTA LTD",
    "foundingDate": "2026-08-21",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "UK Companies House number",
      "value": "17414589"
    },
    "url": "https://www.travelvista.uk/",
    "logo": "https://www.travelvista.uk/assets/logo.png",
    "image": "https://www.travelvista.uk/assets/og-image.jpg",
    "telephone": "+44 7862 609755",
    "email": "info@travelvista.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "128 Kingsway",
      "addressLocality": "London",
      "postalCode": "WC2B 6NH",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "15:00"
      }
    ],
    "makesOffer": {
      "@type": "Offer",
      "name": "Schengen Visa Assistance",
      "price": "89",
      "priceCurrency": "GBP",
      "description": "Schengen visa application preparation and appointment booking for UK residents. Official visa and visa centre fees are not included."
    },
    "sameAs": [
      "https://www.facebook.com/share/1DoG2T6Dpo/",
      "https://www.instagram.com/travelvista.ltd",
      "https://uk.trustpilot.com/review/travelvista.uk"
    ]
  },
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
        "name": "Contact",
        "item": "https://www.travelvista.uk/contact"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="/contact" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp74" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp74"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="/">Home</a>
              </li>
              <li aria-current="page" data-i="b37456c453">Contact</li>
            </ol>
          </nav>
          <h1 data-i="24f78f4aaf">Contact TravelVista</h1>
          <p className="lead" data-i="ee6a537902">Your first consultation is free. We reply within 2 hours during office hours.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <div className="panel">
            <dl className="contact-list">
              <div>
                <dt data-i="761609694e">WhatsApp and phone</dt>
                <dd>
                  <a href="https://wa.me/447862609755" rel="noopener" target="_blank">+44 7862 609755</a>
                </dd>
              </div>
              <div>
                <dt data-i="84add5b295">Email</dt>
                <dd>
                  <a data-i="551ec753da" href="mailto:info@travelvista.uk">info@travelvista.uk</a>
                </dd>
              </div>
              <div>
                <dt data-i="6c3a72eaf6">Office</dt>
                <dd data-i="6690829d38">
                  128 Kingsway, London, WC2B 6NH, United Kingdom
                  <br />
                  <a href={"https://www.google.com/maps/search/?api=1&query=128+Kingsway+London+WC2B+6NH"} rel="noopener" target="_blank">Open in Google Maps</a>
                </dd>
              </div>
              <div>
                <dt data-i="d244432553">Follow us</dt>
                <dd>
                  <div className="social">
                    <a aria-label="TravelVista on Facebook" data-i-aria-label="81fc7caee7" href="https://www.facebook.com/share/1DoG2T6Dpo/" rel="noopener" target="_blank">
                      <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4a22 22 0 0 0-2.5-.1c-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8z" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a aria-label="TravelVista on Instagram" data-i-aria-label="99929a7e26" href="https://www.instagram.com/travelvista.ltd" rel="noopener" target="_blank">
                      <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                        <rect fill="none" height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3"></rect>
                        <circle cx="12" cy="12" fill="none" r="4.2" stroke="currentColor" strokeWidth="2"></circle>
                        <circle cx="17.4" cy="6.6" fill="currentColor" r="1.3"></circle>
                      </svg>
                    </a>
                    <a aria-label="TravelVista reviews on Trustpilot" data-i-aria-label="a7cf712305" href="https://uk.trustpilot.com/review/travelvista.uk" rel="noopener" target="_blank">
                      <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a aria-label="Chat with TravelVista on WhatsApp" data-i-aria-label="058d90dc64" href="https://wa.me/447862609755" rel="noopener" target="_blank">
                      <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </div>
                </dd>
              </div>
              <div>
                <dt data-i="c9be34ce79">Company details</dt>
                <dd data-i="198006cd34">
                  TRAVELVISTA LTD
                  <br />
                  Registered in England and Wales, company number 17414589
                  <br />
                  Registered office: 273 Hampton Road, Ilford, IG1 1PN, United Kingdom
                </dd>
              </div>
              <div>
                <dt data-i="2dc14bfdda">Office hours</dt>
                <dd className="hours">
                  <span data-i="1016619f5c">Mon–Fri</span>
                  <span>9:00–19:00</span>
                  <span data-i="17063c506b">Saturday</span>
                  <span>10:00–17:00</span>
                  <span data-i="bc5dd045b8">Sunday</span>
                  <span>11:00–15:00</span>
                  <span data-i="b336fc5587">WhatsApp</span>
                  <span data-i="8d7de20a42">Messages any time</span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="panel">
            <h2 data-i="ad01ea72e2" style={{ "fontSize": "var(--step-2)" }}>Send an enquiry</h2>
            <p className="muted" data-i="2318632d00" style={{ "margin": "8px 0 18px" }}>Fill in the form and your message opens in WhatsApp, ready to send.</p>
            <form className="form" id="enquiry" noValidate={true}>
              <div className="form-grid">
                <div className="field">
                  <label data-i="ca27b75468" htmlFor="f-name">Full name *</label>
                  <input autoComplete="name" id="f-name" name="name" required={true} />
                  <span className="err" data-i="dacddcd922" hidden={true} id="f-name-err">Enter your name.</span>
                </div>
                <div className="field">
                  <label data-i="187a522183" htmlFor="f-phone">Phone *</label>
                  <input autoComplete="tel" id="f-phone" name="phone" required={true} type="tel" />
                  <span className="err" data-i="ea935d431d" hidden={true} id="f-phone-err">Enter a phone number we can reach you on.</span>
                </div>
                <div className="field">
                  <label data-i="84add5b295" htmlFor="f-email">Email</label>
                  <input autoComplete="email" id="f-email" name="email" type="email" />
                </div>
                <div className="field">
                  <label data-i="e772693e7f" htmlFor="f-nationality">Passport (nationality)</label>
                  <input data-i-placeholder="3a9635571b" id="f-nationality" name="nationality" placeholder="For example, Indian" />
                </div>
                <div className="field">
                  <label data-i="e729752efd" htmlFor="f-service">I need help with</label>
                  <select id="f-service" name="service">
                    <option data-i="6d433cb3ea" value="">Choose a service</option>
                    <option data-i="e8f1e9ab2e">Schengen visa</option>
                    <option data-i="5b7b21c8b9">France visa</option>
                    <option data-i="61c580383b">Spain visa</option>
                    <option data-i="58d03af574">Italy visa</option>
                    <option data-i="e23b276b85">USA visa</option>
                    <option data-i="5c6e3ec1e4">Canada visa</option>
                    <option data-i="e189338627">Turkey visa</option>
                    <option data-i="feac6ceeea">Dubai visa</option>
                    <option data-i="62da310b88">Flights and hotels</option>
                    <option data-i="48f88ac322">Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label data-i="264602b8ea" htmlFor="f-date">Planned travel date</label>
                  <input id="f-date" name="date" type="month" />
                </div>
              </div>
              <div className="field">
                <label data-i="68f4145fee" htmlFor="f-message">Message</label>
                <textarea data-i-placeholder="d59f5255a6" id="f-message" name="message" placeholder="Your UK status, where you want to go and any questions" rows="4"></textarea>
              </div>
              <button className="btn btn-primary" data-i="8f8dd5e3eb" type="submit">Continue to WhatsApp</button>
              <p className="small" data-i="edd02a52e9">
                {"We use your details only to reply to your enquiry. See our "}
                <a href="/privacy">privacy policy</a>
                {" and "}
                <a href="/refund-policy">refund policy</a>
                .
              </p>
              <div className="form-result" hidden={true} id="form-result">
                <strong data-i="b6f4d1d5d7">Your message is ready.</strong>
                <p className="small" data-i="f55fb356b0">Tap the button to open WhatsApp and send it to us.</p>
                <a className="btn btn-wa" href="https://wa.me/447862609755" id="wa-send" rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="827bfe11da">Open WhatsApp and send</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
