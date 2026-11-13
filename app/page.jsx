import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export const metadata = {
  "title": "Schengen Visa Help for UK Residents | TravelVista Ltd London",
  "description": "£89 Schengen visa help for UK residents. We prepare your complete file and book your appointment for all 29 countries, plus USA, Canada, Turkey and Dubai.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/"
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
    "title": "Schengen Visa Help for UK Residents | TravelVista Ltd London",
    "description": "£89 Schengen visa help for UK residents. We prepare your complete file and book your appointment for all 29 countries, plus USA, Canada, Turkey and Dubai.",
    "url": "https://www.travelvista.uk/",
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
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a Schengen visa if I live in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your passport, not where you live. British citizens do not need a visa for short trips of up to 90 days in any 180-day period. Many non-British passport holders living in the UK, for example people with Indian, Pakistani, Nigerian or Chinese passports, do need one. We check this for free in your first consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Schengen visa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Schengen visa package is £89 per applicant. On top of that you pay the official visa fee (€90 for adults, €45 for children aged 6 to 11, free under 6) and the visa centre's own service fee."
        }
      },
      {
        "@type": "Question",
        "name": "How early should I apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can apply up to 6 months before your trip and no later than 15 days before. Appointments can fill up quickly in busy months, so we recommend starting as early as you can."
        }
      },
      {
        "@type": "Question",
        "name": "Can you guarantee my visa will be approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No one can guarantee approval. The embassy or consulate makes every decision. Our job is to make sure your application is complete, correct and clearly supports your trip."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help if I am on a student, work or family visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We help eVisa holders on student, skilled worker, dependant, family and settled status. Your UK permission must stay valid for your trip and usually for a period after your return."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="/" />
      <main id="main">
      <section className="hero hero-space">
        <canvas aria-hidden="true" className="earth"></canvas>
        <div aria-hidden="true" className="globe-tip notranslate">
          <b></b>
          <span>
            {"View visa guide "}
            <i>→</i>
          </span>
        </div>
        <p aria-hidden="true" className="globe-hint notranslate">
          <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
            <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"></path>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
          </svg>
          <span>Drag and zoom the globe · click a country</span>
        </p>
        <div aria-label="Map zoom" className="globe-zoom notranslate" role="group">
          <button aria-label="Zoom in" data-z="in" type="button">
            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" viewBox="0 0 24 24" width="18">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
          <button aria-label="Zoom out" data-z="out" type="button">
            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" viewBox="0 0 24 24" width="18">
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <button aria-label="Reset map" data-z="reset" type="button">
            <svg fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="17">
              <path d="M3 12a9 9 0 1 0 3-6.7"></path>
              <path d="M3 4v5h5"></path>
            </svg>
          </button>
        </div>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow" data-i="3096064d61">London based · For UK residents</p>
            <h1 data-i="96ee81ff15">Schengen visa help for people living in the UK</h1>
            <p className="lead" data-i="a837ed8685">Send us your query. We prepare your complete visa file and book your appointment for France, Spain, Italy and all 29 Schengen countries. Your first consultation is free.</p>
            <div className="btn-row">
              <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20free%20visa%20consultation." rel="noopener" target="_blank">
                <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                </svg>
                {" "}
                <span data-i="741f996b8b">Free consultation on WhatsApp</span>
              </a>
              {" "}
              <a className="btn btn-ghost" data-i="6328aacb5d" href="/schengen-visa">See what you need</a>
            </div>
            <ul className="hero-points">
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
                <span data-i="ee5cde4645">£89 service fee, no hidden fees</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="a96ac3e6ba">Open 7 days a week</span>
              </li>
            </ul>
            <ul aria-label="Schengen visa key facts" className="hero-facts" data-i-aria-label="463f6b0b1f">
              <li>
                <span data-i="ae768f766f">Stay</span>
                <strong data-i="837a257a2f">90 days in any 180</strong>
              </li>
              <li>
                <span data-i="c4151a022c">Valid in</span>
                <strong data-i="fb110f6f0e">29 countries</strong>
              </li>
              <li>
                <span data-i="a1f1054d86">Visa fee</span>
                <strong data-i="ff6895544b">€90 adult</strong>
              </li>
              <li>
                <span data-i="7f59a1f1d5">Decision</span>
                <strong data-i="fb7bdadc34">Usually 15 days</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="30bdde1011">Visa and travel services</h2>
            <p className="muted" data-i="6c67646bf3">One London team for your visa, flights and hotels. Choose a service to see what you need.</p>
          </div>
          <div className="svc2-grid">
            <a className="svc2 svc2-eu svc2-wide" href="/schengen-visa">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 600 200">
                  <defs>
                    <linearGradient id="skyeu" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="suneu">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyeu)" height="200" width="600"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="540" cy="70" r="1"></circle>
                  <circle className="a-star" cx="330.0" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="480.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="180.0" cy="66" r="0.7"></circle>
                  <circle cx="520" cy="96" fill="url(#suneu)" r="54"></circle>
                  <circle className="a-sun" cx="520" cy="96" r="9.9"></circle>
                  <path className="a-far" d="M0 150 C 90.0 132, 180.0 156, 270.0 144 S 450.0 130, 600 146 V200 H0Z"></path>
                  <path className="a-near" d="M0 177 C 120.0 165, 240.0 181, 372.0 171 S 528.0 165, 600 175 V200 H0Z"></path>
                  <g className="a-ring">
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(425.0 74.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(419.6 89.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(405.0 100.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(385.0 104.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(365.0 100.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(350.4 89.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(345.0 74.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(350.4 59.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(365.0 48.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(385.0 44.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(405.0 48.0) scale(.8)"></path>
                    <path className="a-eustar" d="M0 -6 L1.8 -1.9 L6 -1.9 L2.6 .8 L3.8 5 L0 2.5 L-3.8 5 L-2.6 .8 L-6 -1.9 L-1.8 -1.9 Z" transform="translate(419.6 59.0) scale(.8)"></path>
                  </g>
                  <path className="a-mid" d="M34 188 V144 H106 V188 Z M40 188 V154 H48 V188 Z M53 188 V154 H61 V188 Z M66 188 V154 H74 V188 Z M79 188 V154 H87 V188 Z M92 188 V154 H100 V188 Z" fillRule="evenodd"></path>
                  <rect className="a-mid" height="10" width="80" x="30" y="134"></rect>
                  <rect className="a-mid" height="8" width="20" x="60" y="126"></rect>
                  <path className="a-mid" d="M138 188 L143 138 H157 L162 188 Z"></path>
                  <path className="a-mid" d="M141 138 Q150 126 159 138 Z"></path>
                  <g transform="translate(150 134)">
                    <g className="a-sails">
                      <rect className="a-mid" height="40" transform="rotate(20)" width="4" x="-2" y="-40"></rect>
                      <rect className="a-line2" height="26" transform="rotate(20)" width="8" x="2" y="-38"></rect>
                      <rect className="a-mid" height="40" transform="rotate(110)" width="4" x="-2" y="-40"></rect>
                      <rect className="a-line2" height="26" transform="rotate(110)" width="8" x="2" y="-38"></rect>
                      <rect className="a-mid" height="40" transform="rotate(200)" width="4" x="-2" y="-40"></rect>
                      <rect className="a-line2" height="26" transform="rotate(200)" width="8" x="2" y="-38"></rect>
                      <rect className="a-mid" height="40" transform="rotate(290)" width="4" x="-2" y="-40"></rect>
                      <rect className="a-line2" height="26" transform="rotate(290)" width="8" x="2" y="-38"></rect>
                    </g>
                  </g>
                  <path className="a-mid" d="M213.7 188.0 L226.6 188.0 Q245.0 160.4 263.4 188.0 L276.3 188.0 L257.9 140.2 L253.3 107.0 L248.7 70.2 L246.3 50.0 L245.0 37.1 L243.7 50.0 L241.3 70.2 L236.7 107.0 L232.1 140.2 Z"></path>
                  <rect className="a-mid" height="4.6" rx="1" width="35.0" x="227.5" y="137.4"></rect>
                  <rect className="a-mid" height="3.7" rx="1" width="20.2" x="234.9" y="103.4"></rect>
                  <rect className="a-mid" height="3.2" rx="1" width="9.2" x="240.4" y="67.5"></rect>
                  <path className="a-line" d="M232.1 140.2 L257.9 131.9"></path>
                  <path className="a-line" d="M257.9 140.2 L232.1 131.9"></path>
                  <path className="a-line" d="M234.1 131.9 L255.9 123.6"></path>
                  <path className="a-line" d="M255.9 131.9 L234.1 123.6"></path>
                  <path className="a-line" d="M236.2 123.6 L253.8 115.3"></path>
                  <path className="a-line" d="M253.8 123.6 L236.2 115.3"></path>
                  <path className="a-line" d="M238.2 115.3 L251.8 107.0"></path>
                  <path className="a-line" d="M251.8 115.3 L238.2 107.0"></path>
                  <g transform="rotate(5 330 188)">
                    <rect className="a-mid" height="96" rx="3" width="26" x="317" y="92"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="98"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="111"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="124"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="137"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="150"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="163"></rect>
                    <rect className="a-win" height="2" width="20" x="320" y="176"></rect>
                    <rect className="a-mid" height="12" rx="2" width="18" x="321" y="82"></rect>
                  </g>
                  <path className="a-mid" d="M382 138 L430 120 L478 138 Z"></path>
                  <rect className="a-mid" height="6" width="96" x="382" y="138"></rect>
                  <rect className="a-mid" height="40" width="6" x="386.0" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="398.4" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="410.8" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="423.2" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="435.6" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="448.0" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="460.4" y="144"></rect>
                  <rect className="a-mid" height="40" width="6" x="472.8" y="144"></rect>
                  <rect className="a-mid" height="6" width="104" x="378" y="182"></rect>
                  <circle className="a-mid" cx="520" cy="98" r="7"></circle>
                  <circle className="a-mid" cx="498" cy="122" r="7"></circle>
                  <circle className="a-mid" cx="542" cy="122" r="7"></circle>
                  <circle className="a-mid" cx="520" cy="122" r="7"></circle>
                  <circle className="a-mid" cx="498" cy="146" r="7"></circle>
                  <circle className="a-mid" cx="542" cy="146" r="7"></circle>
                  <circle className="a-mid" cx="520" cy="146" r="7"></circle>
                  <path className="a-line" d="M520 98 L498 146 M520 98 L542 146 M498 122 L542 122 M520 153 V188"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#1e3d9a" height="20" width="30"></rect>
                    <circle cx="20.60" cy="10.00" fill="#ffcc00" r=".9"></circle>
                    <circle cx="19.85" cy="12.80" fill="#ffcc00" r=".9"></circle>
                    <circle cx="17.80" cy="14.85" fill="#ffcc00" r=".9"></circle>
                    <circle cx="15.00" cy="15.60" fill="#ffcc00" r=".9"></circle>
                    <circle cx="12.20" cy="14.85" fill="#ffcc00" r=".9"></circle>
                    <circle cx="10.15" cy="12.80" fill="#ffcc00" r=".9"></circle>
                    <circle cx="9.40" cy="10.00" fill="#ffcc00" r=".9"></circle>
                    <circle cx="10.15" cy="7.20" fill="#ffcc00" r=".9"></circle>
                    <circle cx="12.20" cy="5.15" fill="#ffcc00" r=".9"></circle>
                    <circle cx="15.00" cy="4.40" fill="#ffcc00" r=".9"></circle>
                    <circle cx="17.80" cy="5.15" fill="#ffcc00" r=".9"></circle>
                    <circle cx="19.85" cy="7.20" fill="#ffcc00" r=".9"></circle>
                  </svg>
                  <span className="svc2-code notranslate">EU</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="fb110f6f0e">29 countries</span>
                <h3 data-i="e8f1e9ab2e">Schengen visa</h3>
                <p data-i="a65e0c8136">Full support for short-stay Schengen visas: checklist, forms, appointment and document review.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-fr" href="/france-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyfr" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunfr">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyfr)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="300" cy="96" fill="url(#sunfr)" r="66"></circle>
                  <circle className="a-sun" cx="300" cy="96" r="12.100000000000001"></circle>
                  <path className="a-far" d="M0 150 C 60.0 132, 120.0 156, 180.0 144 S 300.0 130, 400 146 V200 H0Z"></path>
                  <path className="a-near" d="M0 177 C 80.0 165, 160.0 181, 248.0 171 S 352.0 165, 400 175 V200 H0Z"></path>
                  <path className="a-mid" d="M166.0 188.0 L180.0 188.0 Q200.0 158.0 220.0 188.0 L234.0 188.0 L214.0 136.0 L209.0 100.0 L204.0 60.0 L201.4 38.0 L200.0 24.0 L198.6 38.0 L196.0 60.0 L191.0 100.0 L186.0 136.0 Z"></path>
                  <rect className="a-mid" height="5.0" rx="1" width="38.0" x="181.0" y="133.0"></rect>
                  <rect className="a-mid" height="4.0" rx="1" width="22.0" x="189.0" y="96.0"></rect>
                  <rect className="a-mid" height="3.5" rx="1" width="10.0" x="195.0" y="57.0"></rect>
                  <path className="a-line" d="M186.0 136.0 L214.0 127.0"></path>
                  <path className="a-line" d="M214.0 136.0 L186.0 127.0"></path>
                  <path className="a-line" d="M188.2 127.0 L211.8 118.0"></path>
                  <path className="a-line" d="M211.8 127.0 L188.2 118.0"></path>
                  <path className="a-line" d="M190.4 118.0 L209.6 109.0"></path>
                  <path className="a-line" d="M209.6 118.0 L190.4 109.0"></path>
                  <path className="a-line" d="M192.6 109.0 L207.4 100.0"></path>
                  <path className="a-line" d="M207.4 109.0 L192.6 100.0"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#2b4fae" height="20" width="10"></rect>
                    <rect fill="#fff" height="20" width="10" x="10"></rect>
                    <rect fill="#e0424b" height="20" width="10" x="20"></rect>
                  </svg>
                  <span className="svc2-code notranslate">FR</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="3c543452c9">TLScontact</span>
                <h3 data-i="5b7b21c8b9">France visa</h3>
                <p data-i="f06adad238">France-Visas form, TLScontact appointment and a document check before you go.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-es" href="/spain-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyes" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunes">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyes)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="96" cy="100" fill="url(#sunes)" r="66"></circle>
                  <circle className="a-sun" cx="96" cy="100" r="12.100000000000001"></circle>
                  <path className="a-far" d="M0 150 C 60.0 132, 120.0 156, 180.0 144 S 300.0 130, 400 146 V200 H0Z"></path>
                  <path className="a-near" d="M0 177 C 80.0 165, 160.0 181, 248.0 171 S 352.0 165, 400 175 V200 H0Z"></path>
                  <path className="a-mid" d="M120 188 V142 Q200 118 280 142 V188 Z"></path>
                  <path className="a-mid" d="M133.5 148 L134.5 114 Q138 90 141.5 114 L142.5 148 Z"></path>
                  <circle className="a-mid" cx="138" cy="92" r="2.9"></circle>
                  <path className="a-mid" d="M151.0 148 L152.0 88 Q156 64 160.0 88 L161.0 148 Z"></path>
                  <circle className="a-mid" cx="156" cy="66" r="3.2"></circle>
                  <path className="a-mid" d="M171.0 148 L172.0 74 Q176 50 180.0 74 L181.0 148 Z"></path>
                  <circle className="a-mid" cx="176" cy="52" r="3.2"></circle>
                  <path className="a-mid" d="M219.0 148 L220.0 78 Q224 54 228.0 78 L229.0 148 Z"></path>
                  <circle className="a-mid" cx="224" cy="56" r="3.2"></circle>
                  <path className="a-mid" d="M239.0 148 L240.0 94 Q244 70 248.0 94 L249.0 148 Z"></path>
                  <circle className="a-mid" cx="244" cy="72" r="3.2"></circle>
                  <path className="a-mid" d="M257.5 148 L258.5 118 Q262 94 265.5 118 L266.5 148 Z"></path>
                  <circle className="a-mid" cx="262" cy="96" r="2.9"></circle>
                  <path className="a-mid" d="M193.5 148 L194.5 48 Q200 24 205.5 48 L206.5 148 Z"></path>
                  <circle className="a-mid" cx="200" cy="26" r="4.2"></circle>
                  <rect className="a-win" height="16" rx="3" width="6" x="145" y="154"></rect>
                  <rect className="a-win" height="16" rx="3" width="6" x="165" y="154"></rect>
                  <rect className="a-win" height="16" rx="3" width="6" x="185" y="154"></rect>
                  <rect className="a-win" height="16" rx="3" width="6" x="205" y="154"></rect>
                  <rect className="a-win" height="16" rx="3" width="6" x="225" y="154"></rect>
                  <rect className="a-win" height="16" rx="3" width="6" x="245" y="154"></rect>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#c8102e" height="20" width="30"></rect>
                    <rect fill="#ffc400" height="10" width="30" y="5"></rect>
                  </svg>
                  <span className="svc2-code notranslate">ES</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="d133f331db">BLS International</span>
                <h3 data-i="61c580383b">Spain visa</h3>
                <p data-i="b6b82e802e">Help with BLS appointments in London, Manchester and Edinburgh.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-it" href="/italy-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyit" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunit">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyit)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="320" cy="98" fill="url(#sunit)" r="60"></circle>
                  <circle className="a-sun" cx="320" cy="98" r="11.0"></circle>
                  <path className="a-far" d="M0 150 C 60.0 132, 120.0 156, 180.0 144 S 300.0 130, 400 146 V200 H0Z"></path>
                  <path className="a-near" d="M0 177 C 80.0 165, 160.0 181, 248.0 171 S 352.0 165, 400 175 V200 H0Z"></path>
                  <path className="a-mid" d="M85.0 186 V118 Q200 96 264.4 110 L264.4 122 L287.4 128 L315.0 138 V186 Z M91.0 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M109.2 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M127.3 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M145.5 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M163.7 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M181.8 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M200.0 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M218.2 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M236.3 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M254.5 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M272.7 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M290.8 166 v-9.0 a6.0 6.0 0 0 1 12.0 0 v9.0 Z M91.0 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M109.2 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M127.3 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M145.5 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M163.7 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M181.8 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M200.0 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M218.2 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M236.3 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M254.5 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M272.7 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M290.8 144 v-8.5 a5.5 5.5 0 0 1 11.0 0 v8.5 Z M91.0 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M106.6 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M122.1 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M137.7 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M153.3 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M168.9 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M184.4 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M200.0 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M215.6 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M231.1 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M246.7 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z M262.3 124 v-7.5 a4.5 4.5 0 0 1 9.0 0 v7.5 Z" fillRule="evenodd"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#169b62" height="20" width="10"></rect>
                    <rect fill="#fff" height="20" width="10" x="10"></rect>
                    <rect fill="#d7263d" height="20" width="10" x="20"></rect>
                  </svg>
                  <span className="svc2-code notranslate">IT</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="3b54d2500e">VFS Global</span>
                <h3 data-i="58d03af574">Italy visa</h3>
                <p data-i="99e5810ea4">Document preparation and booking support for VFS Global.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-us" href="/usa-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyus" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunus">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyus)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="320" cy="84" fill="url(#sunus)" r="42"></circle>
                  <circle className="a-sun" cx="320" cy="84" r="7.700000000000001"></circle>
                  <rect className="a-far2" height="53" width="17" x="50" y="135"></rect>
                  <rect className="a-far2" height="80" width="15" x="69" y="108"></rect>
                  <rect className="a-far2" height="64" width="20" x="86" y="124"></rect>
                  <rect className="a-far2" height="39" width="16" x="108" y="149"></rect>
                  <rect className="a-far2" height="35" width="15" x="126" y="153"></rect>
                  <rect className="a-far2" height="69" width="20" x="143" y="119"></rect>
                  <rect className="a-far2" height="37" width="18" x="165" y="151"></rect>
                  <rect className="a-far2" height="51" width="19" x="252" y="137"></rect>
                  <rect className="a-far2" height="45" width="26" x="273" y="143"></rect>
                  <rect className="a-far2" height="50" width="15" x="301" y="138"></rect>
                  <rect className="a-far2" height="35" width="17" x="318" y="153"></rect>
                  <rect className="a-far2" height="50" width="24" x="337" y="138"></rect>
                  <path className="a-mid" d="M182 188 V118 H188 V96 H193 V78 H197 V64 H199 V38 H201 V64 H203 V78 H207 V96 H212 V118 H218 V188 Z"></path>
                  <path className="a-mid" d="M242 188 V106 Q252 84 262 106 V188 Z"></path>
                  <path className="a-mid" d="M251 88 L252 64 L253 88 Z"></path>
                  <rect className="a-mid" height="76" width="26" x="130" y="112"></rect>
                  <rect className="a-mid" height="58" width="20" x="156" y="130"></rect>
                  <rect className="a-mid" height="64" width="18" x="224" y="124"></rect>
                  <rect className="a-mid" height="72" width="24" x="268" y="116"></rect>
                  <rect className="a-mid" height="50" width="20" x="296" y="138"></rect>
                  <rect className="a-mid" height="54" width="22" x="102" y="134"></rect>
                  <rect className="a-win" height="4" width="3" x="134" y="120"></rect>
                  <rect className="a-win" height="4" width="3" x="142" y="120"></rect>
                  <rect className="a-win" height="4" width="3" x="134" y="130"></rect>
                  <rect className="a-win" height="4" width="3" x="142" y="130"></rect>
                  <rect className="a-win" height="4" width="3" x="134" y="140"></rect>
                  <rect className="a-win" height="4" width="3" x="142" y="140"></rect>
                  <rect className="a-win" height="4" width="3" x="134" y="150"></rect>
                  <rect className="a-win" height="4" width="3" x="142" y="150"></rect>
                  <rect className="a-win" height="4" width="3" x="134" y="160"></rect>
                  <rect className="a-win" height="4" width="3" x="142" y="160"></rect>
                  <rect className="a-win" height="4" width="3" x="272" y="124"></rect>
                  <rect className="a-win" height="4" width="3" x="280" y="124"></rect>
                  <rect className="a-win" height="4" width="3" x="272" y="134"></rect>
                  <rect className="a-win" height="4" width="3" x="280" y="134"></rect>
                  <rect className="a-win" height="4" width="3" x="272" y="144"></rect>
                  <rect className="a-win" height="4" width="3" x="280" y="144"></rect>
                  <rect className="a-win" height="4" width="3" x="272" y="154"></rect>
                  <rect className="a-win" height="4" width="3" x="280" y="154"></rect>
                  <rect className="a-win" height="4" width="3" x="272" y="164"></rect>
                  <rect className="a-win" height="4" width="3" x="280" y="164"></rect>
                  <path className="a-far" d="M0 176 C 60.0 158, 120.0 182, 180.0 170 S 300.0 156, 400 172 V200 H0Z"></path>
                  <path className="a-near" d="M0 192 C 80.0 180, 160.0 196, 248.0 186 S 352.0 180, 400 190 V200 H0Z"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#fff" height="20" width="30"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="0.00"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="3.08"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="6.15"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="9.23"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="12.31"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="15.38"></rect>
                    <rect fill="#c8102e" height="1.54" width="30" y="18.46"></rect>
                    <rect fill="#2b3f8c" height="10.8" width="13"></rect>
                  </svg>
                  <span className="svc2-code notranslate">US</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag">B1/B2</span>
                <h3 data-i="bbb0a4dfea">USA visitor visa</h3>
                <p data-i="56e3da7c25">DS-160 form help, documents and interview preparation.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-ca" href="/canada-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyca" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunca">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyca)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="330" cy="92" fill="url(#sunca)" r="48"></circle>
                  <circle className="a-sun" cx="330" cy="92" r="8.8"></circle>
                  <path className="a-far" d="M-10.0 188 L50 118 L110.0 188 Z"></path>
                  <path className="a-snow" d="M35.6 133.4 L50 118 L64.4 133.4 L56.0 129.9 L50 135.5 L44.0 129.9 Z"></path>
                  <path className="a-far" d="M85.0 188 L160 84 L235.0 188 Z"></path>
                  <path className="a-snow" d="M142.0 106.88 L160 84 L178.0 106.88 L167.5 101.68 L160 110.0 L152.5 101.68 Z"></path>
                  <path className="a-far" d="M210.0 188 L280 102 L350.0 188 Z"></path>
                  <path className="a-snow" d="M263.2 120.92 L280 102 L296.8 120.92 L287.0 116.62 L280 123.5 L273.0 116.62 Z"></path>
                  <path className="a-far" d="M305.0 188 L360 128 L415.0 188 Z"></path>
                  <path className="a-snow" d="M346.8 141.2 L360 128 L373.2 141.2 L365.5 138.2 L360 143.0 L354.5 138.2 Z"></path>
                  <path className="a-mid" d="M30 148 L21 166.0 H25 L18 180.0 H28 V188 H32 V180.0 H42 L35 166.0 H39 Z"></path>
                  <path className="a-mid" d="M44 136 L35 159.4 H39 L32 177.6 H42 V188 H46 V177.6 H56 L49 159.4 H53 Z"></path>
                  <path className="a-mid" d="M60 154 L51 169.3 H55 L48 181.2 H58 V188 H62 V181.2 H72 L65 169.3 H69 Z"></path>
                  <path className="a-mid" d="M320 142 L311 162.7 H315 L308 178.8 H318 V188 H322 V178.8 H332 L325 162.7 H329 Z"></path>
                  <path className="a-mid" d="M336 128 L327 155.0 H331 L324 176.0 H334 V188 H338 V176.0 H348 L341 155.0 H345 Z"></path>
                  <path className="a-mid" d="M352 148 L343 166.0 H347 L340 180.0 H350 V188 H354 V180.0 H364 L357 166.0 H361 Z"></path>
                  <path className="a-mid" d="M368 138 L359 160.5 H363 L356 178.0 H366 V188 H370 V178.0 H380 L373 160.5 H377 Z"></path>
                  <path className="a-mid" d="M80 144 L71 163.8 H75 L68 179.2 H78 V188 H82 V179.2 H92 L85 163.8 H89 Z"></path>
                  <path className="a-far" d="M0 176 C 60.0 158, 120.0 182, 180.0 170 S 300.0 156, 400 172 V200 H0Z"></path>
                  <path className="a-near" d="M0 192 C 80.0 180, 160.0 196, 248.0 186 S 352.0 180, 400 190 V200 H0Z"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#fff" height="20" width="30"></rect>
                    <rect fill="#d52b1e" height="20" width="7.5"></rect>
                    <rect fill="#d52b1e" height="20" width="7.5" x="22.5"></rect>
                    <path d="M15 4.5 l1 2 1.6-.6-.5 3 1.8-1.5.4 1.2 1.6-.3-.9 2.2.9.5-3.4 2.4.3 1.2-2.3-.4V16h-.9v-1.8l-2.3.4.3-1.2-3.4-2.4.9-.5-.9-2.2 1.6.3.4-1.2 1.8 1.5-.5-3 1.6.6Z" fill="#d52b1e"></path>
                  </svg>
                  <span className="svc2-code notranslate">CA</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="c4ad58f74f">{"Visitor & Super Visa"}</span>
                <h3 data-i="d776d27d0b">Canada visitor visa</h3>
                <p data-i="f77fe060d0">Guidance on Canada visitor visas and the Super Visa for parents and grandparents.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-tr" href="/turkey-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skytr" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="suntr">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skytr)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="306" cy="104" fill="url(#suntr)" r="54"></circle>
                  <circle className="a-sun" cx="306" cy="104" r="9.9"></circle>
                  <path className="a-far" d="M0 150 C 60.0 132, 120.0 156, 180.0 144 S 300.0 130, 400 146 V200 H0Z"></path>
                  <path className="a-near" d="M0 177 C 80.0 165, 160.0 181, 248.0 171 S 352.0 165, 400 175 V200 H0Z"></path>
                  <path className="a-mid" d="M130 188 V158 H150 Q150 142 166 142 Q174 118 200 114 Q226 118 234 142 Q250 142 250 158 H270 V188 Z"></path>
                  <rect className="a-mid" height="14" width="3" x="198.5" y="102"></rect>
                  <path className="a-mid" d="M104.5 188 V98 L108 84 L111.5 98 V188 Z"></path>
                  <rect className="a-mid" height="3" rx="1" width="10" x="103" y="123.52"></rect>
                  <path className="a-mid" d="M116.5 188 V82 L120 68 L123.5 82 V188 Z"></path>
                  <rect className="a-mid" height="3" rx="1" width="10" x="115" y="113.6"></rect>
                  <path className="a-mid" d="M276.5 188 V82 L280 68 L283.5 82 V188 Z"></path>
                  <rect className="a-mid" height="3" rx="1" width="10" x="275" y="113.6"></rect>
                  <path className="a-mid" d="M288.5 188 V98 L292 84 L295.5 98 V188 Z"></path>
                  <rect className="a-mid" height="3" rx="1" width="10" x="287" y="123.52"></rect>
                  <rect className="a-win" height="11" rx="2.5" width="5" x="160" y="164"></rect>
                  <rect className="a-win" height="11" rx="2.5" width="5" x="178" y="164"></rect>
                  <rect className="a-win" height="11" rx="2.5" width="5" x="196" y="164"></rect>
                  <rect className="a-win" height="11" rx="2.5" width="5" x="214" y="164"></rect>
                  <rect className="a-win" height="11" rx="2.5" width="5" x="232" y="164"></rect>
                  <g className="a-float a-float0">
                    <path className="a-balloon" d="M92 62 A12 12 0 1 1 116 62 Q111.2 72.8 107.0 77.6 H101.0 Q96.8 72.8 92 62 Z"></path>
                    <rect className="a-balloon" height="4.199999999999999" rx="1" width="5.28" x="101.36" y="79.4"></rect>
                  </g>
                  <g className="a-float a-float1">
                    <path className="a-balloon" d="M255 44 A9 9 0 1 1 273 44 Q269.4 52.1 266.25 55.7 H261.75 Q258.6 52.1 255 44 Z"></path>
                    <rect className="a-balloon" height="3.15" rx="1" width="3.96" x="262.02" y="57.05"></rect>
                  </g>
                  <g className="a-float a-float2">
                    <path className="a-balloon" d="M302 78 A6 6 0 1 1 314 78 Q311.6 83.4 309.5 85.8 H306.5 Q304.4 83.4 302 78 Z"></path>
                    <rect className="a-balloon" height="2.0999999999999996" rx="1" width="2.64" x="306.68" y="86.7"></rect>
                  </g>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#e30a17" height="20" width="30"></rect>
                    <circle cx="11.5" cy="10" fill="#fff" r="5"></circle>
                    <circle cx="12.8" cy="10" fill="#e30a17" r="4"></circle>
                    <path d="M17.2 10 l2.9-1 -1.8 2.5 0-3.1 1.8 2.5 Z" fill="#fff"></path>
                  </svg>
                  <span className="svc2-code notranslate">TR</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="d054fa324f">{"e-Visa & sticker"}</span>
                <h3 data-i="e189338627">Turkey visa</h3>
                <p data-i="7e1b8dd0a7">We check if you can use the e-Visa or need a visa from the consulate.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-ae" href="/dubai-visa-from-uk">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="skyae" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunae">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyae)" height="200" width="400"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="340" cy="70" r="1"></circle>
                  <circle className="a-star" cx="220.00000000000003" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="320.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="120.0" cy="66" r="0.7"></circle>
                  <circle cx="316" cy="104" fill="url(#sunae)" r="66"></circle>
                  <circle className="a-sun" cx="316" cy="104" r="12.100000000000001"></circle>
                  <rect className="a-far2" height="66" rx="2" width="22" x="80" y="122"></rect>
                  <rect className="a-far2" height="84" rx="2" width="16" x="106" y="104"></rect>
                  <rect className="a-far2" height="58" rx="2" width="20" x="126" y="130"></rect>
                  <rect className="a-far2" height="74" rx="2" width="18" x="240" y="114"></rect>
                  <rect className="a-far2" height="92" rx="2" width="24" x="262" y="96"></rect>
                  <rect className="a-far2" height="60" rx="2" width="16" x="290" y="128"></rect>
                  <rect className="a-far2" height="70" rx="2" width="22" x="312" y="118"></rect>
                  <path className="a-mid" d="M178 188 L182 148 L187 144 L189 108 L193 102 L194 70 L197 64 L198 38 L200 16 L202 38 L203 60 L206 66 L208 96 L212 102 L214 136 L219 142 L222 188 Z"></path>
                  <path className="a-mid" d="M136 188 V114 Q170 128 168 188 Z"></path>
                  <rect className="a-mid" height="84" width="3" x="134" y="104"></rect>
                  <path className="a-dune" d="M0 176 Q100 160 200 176 T400 172 V200 H0Z"></path>
                </svg>
                <span className="svc2-chip">
                  <svg aria-hidden="true" className="svc2-flagsvg" focusable="false" viewBox="0 0 30 20">
                    <rect fill="#00843d" height="6.7" width="30"></rect>
                    <rect fill="#fff" height="6.6" width="30" y="6.7"></rect>
                    <rect fill="#111" height="6.7" width="30" y="13.3"></rect>
                    <rect fill="#e0242f" height="20" width="8"></rect>
                  </svg>
                  <span className="svc2-code notranslate">AE</span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="26c1f8eb11">UAE</span>
                <h3 data-i="feac6ceeea">Dubai visa</h3>
                <p data-i="7785731727">We check your options and help you get the right UAE visit visa.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
            <a className="svc2 svc2-hol svc2-wide" href="/holidays">
              <span className="svc2-art">
                <svg aria-hidden="true" className="svc2-svg" focusable="false" preserveAspectRatio="xMidYMax slice" viewBox="0 0 900 200">
                  <defs>
                    <linearGradient id="skyhol" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" style={{ "stopColor": "var(--sky1)" }}></stop>
                      <stop offset="1" style={{ "stopColor": "var(--sky2)" }}></stop>
                    </linearGradient>
                    <radialgradient id="sunhol">
                      <stop offset="0" stop-opacity=".95" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset=".35" stop-opacity=".35" style={{ "stopColor": "var(--sun)" }}></stop>
                      <stop offset="1" stop-opacity="0" style={{ "stopColor": "var(--sun)" }}></stop>
                    </radialgradient>
                  </defs>
                  <rect fill="url(#skyhol)" height="200" width="900"></rect>
                  <circle className="a-star" cx="40" cy="30" r="1.2"></circle>
                  <circle className="a-star" cx="90" cy="18" r="0.9"></circle>
                  <circle className="a-star" cx="150" cy="40" r="1.1"></circle>
                  <circle className="a-star" cx="210" cy="16" r="0.8"></circle>
                  <circle className="a-star" cx="260" cy="34" r="1"></circle>
                  <circle className="a-star" cx="370" cy="22" r="0.9"></circle>
                  <circle className="a-star" cx="840" cy="70" r="1"></circle>
                  <circle className="a-star" cx="495.00000000000006" cy="60" r="0.8"></circle>
                  <circle className="a-star" cx="720.0" cy="12" r="1.1"></circle>
                  <circle className="a-star" cx="270.0" cy="66" r="0.7"></circle>
                  <circle cx="780" cy="92" fill="url(#sunhol)" r="60"></circle>
                  <circle className="a-sun" cx="780" cy="92" r="11.0"></circle>
                  <path className="a-route" d="M90 140 C 260 38, 560 38, 650 126"></path>
                  <path className="a-pin" d="M90 140 c-7 -9 -11 -14 -11 -20 a11 11 0 1 1 22 0 c0 6 -4 11 -11 20 Z"></path>
                  <circle className="a-sky-dot" cx="90" cy="120" r="4"></circle>
                  <path className="a-pin" d="M650 126 c-7 -9 -11 -14 -11 -20 a11 11 0 1 1 22 0 c0 6 -4 11 -11 20 Z"></path>
                  <circle className="a-sky-dot" cx="650" cy="106" r="4"></circle>
                  <g className="a-fly">
                    <g className="a-plane" transform="translate(378.0 70) rotate(6) scale(1.7)">
                      <path d="M-14 0 L10 -2 Q16 0 10 2 L-14 0 Z M-2 -1 L-8 -12 H-4 L6 -1 Z M-2 1 L-8 12 H-4 L6 1 Z M-12 0 L-15 -5 H-13 L-9 -1 Z M-12 0 L-15 5 H-13 L-9 1 Z"></path>
                    </g>
                  </g>
                  <g className="a-drift">
                    <path className="a-cloud" d="M-30 10 a12 12 0 0 1 8 -20 a16 16 0 0 1 30 -2 a11 11 0 0 1 20 10 a9 9 0 0 1 2 12 Z" transform="translate(220 92) scale(0.9)"></path>
                  </g>
                  <g className="a-drift">
                    <path className="a-cloud" d="M-30 10 a12 12 0 0 1 8 -20 a16 16 0 0 1 30 -2 a11 11 0 0 1 20 10 a9 9 0 0 1 2 12 Z" transform="translate(560 78) scale(0.8)"></path>
                  </g>
                  <g className="a-drift">
                    <path className="a-cloud" d="M-30 10 a12 12 0 0 1 8 -20 a16 16 0 0 1 30 -2 a11 11 0 0 1 20 10 a9 9 0 0 1 2 12 Z" transform="translate(700 112) scale(0.6)"></path>
                  </g>
                  <path className="a-sea" d="M0 166 Q225.0 158 450.0 166 T900 166 V208 H0Z"></path>
                  <path className="a-mid" d="M767 188 Q770 140.0 776.5 92 H779.5 Q773 140.0 773 188 Z"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(-160)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(-110)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(-40)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(10)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(60)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(778 92) rotate(200)"></path>
                  <path className="a-mid" d="M797 188 Q800 152.0 792.5 116 H795.5 Q803 152.0 803 188 Z"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(-160)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(-110)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(-40)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(10)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(60)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(794 116) rotate(200)"></path>
                  <path className="a-mid" d="M837 188 Q840 146.0 848.5 104 H851.5 Q843 146.0 843 188 Z"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(-160)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(-110)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(-40)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(10)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(60)"></path>
                  <path className="a-mid" d="M0 0 Q14 -10 30 2 Q14 -4 0 3 Z" transform="translate(850 104) rotate(200)"></path>
                </svg>
                <span className="svc2-chip svc2-chip-plane">
                  <span aria-hidden="true" className="svc2-planeic">
                    <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                      <path d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z" fill="currentColor"></path>
                    </svg>
                  </span>
                </span>
              </span>
              <span className="svc2-body">
                <span className="svc2-tag" data-i="9cc650af29">{"Flights & hotels"}</span>
                <h3 data-i="80729cc5d8">Holidays</h3>
                <p data-i="c46f7e5ec7">Flights, hotels and tailored European trips, planned around your visa.</p>
                <span className="svc2-cta">
                  <span data-i="824d76b124">Learn more</span>
                  <span aria-hidden="true" className="svc2-arrow">→</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="section section-tint" id="package">
        <div className="wrap package-wrap">
          <div className="package-copy">
            <p className="eyebrow" data-i="8408fb1413">Our Schengen visa package</p>
            <h2 data-i="c2dd6e1167">One Schengen visa. 29 European countries.</h2>
            <p className="muted" data-i="c01d5cd51b">Professional Schengen visa assistance for UK residents. You send your documents, we handle the paperwork and book your appointment.</p>
          </div>
          <article aria-labelledby="pkg-title" className="package">
            <span className="package-flag" data-i="5adbdd07e7">Most popular</span>
            <h3 data-i="56a7dd1d48" id="pkg-title">Schengen Visa Assistance</h3>
            <p className="price">
              <span className="cur">£</span>
              89
              <span className="per" data-i="8f13a0dcc5">service fee per applicant</span>
            </p>
            <ul className="package-list">
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="7dce4381f9">Your complete file prepared within 7 days of receiving your documents</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="73fc608526">Application form, cover letter and full document check</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="8ffec80292">Appointment booked at the earliest date available</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="1f13b9d6a2">We handle all the paperwork</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="deb40821ff">No hidden fees: £89 is our full service fee</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="1f4cd2a364">For all 29 Schengen countries</span>
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                {" "}
                <span data-i="1ffbef9984">Single or multiple-entry visa applications (the embassy decides what is granted)</span>
              </li>
            </ul>
            <a className="btn btn-wa package-cta" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20the%20%C2%A389%20Schengen%20visa%20package." rel="noopener" target="_blank">
              <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
              </svg>
              {" "}
              <span data-i="364108b635">Get started on WhatsApp</span>
            </a>
            <p className="package-note" data-i="1893c37faf">Not included, paid separately: the official visa fee (€90 per adult, €45 for children aged 6 to 11), the visa centre service fee, travel insurance and any travel bookings. The visa decision and its timing are set by the embassy.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="a84b0cdf86">All 29 Schengen countries</h2>
            <p className="muted" data-i="05e470f961">One Schengen visa covers every country below. Choose your main destination to see how we help.</p>
          </div>
          <div className="cgrid">
            <a className="ccard" href="/austria-visa-from-uk">
              <span className="badge">AT</span>
              <span className="ccard-text">
                <strong data-i="593905b319">Austria</strong>
                <small data-i="8b6cea61d2">Vienna</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/belgium-visa-from-uk">
              <span className="badge">BE</span>
              <span className="ccard-text">
                <strong data-i="5cb4c9d828">Belgium</strong>
                <small data-i="2784e378f2">Brussels</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/bulgaria-visa-from-uk">
              <span className="badge">BG</span>
              <span className="ccard-text">
                <strong data-i="5c77726358">Bulgaria</strong>
                <small data-i="dc81691d3f">Sofia</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/croatia-visa-from-uk">
              <span className="badge">HR</span>
              <span className="ccard-text">
                <strong data-i="d7e0453bb4">Croatia</strong>
                <small data-i="5bd9be779c">Zagreb</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/czech-republic-visa-from-uk">
              <span className="badge">CZ</span>
              <span className="ccard-text">
                <strong data-i="1fef429092">Czech Republic</strong>
                <small data-i="f1ef175756">Prague</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/denmark-visa-from-uk">
              <span className="badge">DK</span>
              <span className="ccard-text">
                <strong data-i="89da124e04">Denmark</strong>
                <small data-i="3f7c839db3">Copenhagen</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/estonia-visa-from-uk">
              <span className="badge">EE</span>
              <span className="ccard-text">
                <strong data-i="f0a96da3f8">Estonia</strong>
                <small data-i="eaaa98c29b">Tallinn</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/finland-visa-from-uk">
              <span className="badge">FI</span>
              <span className="ccard-text">
                <strong data-i="c909b138eb">Finland</strong>
                <small data-i="98dc717002">Helsinki</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/france-visa-from-uk">
              <span className="badge">FR</span>
              <span className="ccard-text">
                <strong data-i="e3772ac4b4">France</strong>
                <small data-i="22390ad11c">Paris</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/germany-visa-from-uk">
              <span className="badge">DE</span>
              <span className="ccard-text">
                <strong data-i="17d53e0e6a">Germany</strong>
                <small data-i="062b06ba8e">Berlin</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/greece-visa-from-uk">
              <span className="badge">GR</span>
              <span className="ccard-text">
                <strong data-i="4902a456ca">Greece</strong>
                <small data-i="b85c37fe60">Athens</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/hungary-visa-from-uk">
              <span className="badge">HU</span>
              <span className="ccard-text">
                <strong data-i="f14e46ce7d">Hungary</strong>
                <small data-i="4b1167e976">Budapest</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/iceland-visa-from-uk">
              <span className="badge">IS</span>
              <span className="ccard-text">
                <strong data-i="b3c92eecf0">Iceland</strong>
                <small data-i="02085eedaf">Reykjavík</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/italy-visa-from-uk">
              <span className="badge">IT</span>
              <span className="ccard-text">
                <strong data-i="ad79ef0f07">Italy</strong>
                <small data-i="da7705caa1">Rome</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/latvia-visa-from-uk">
              <span className="badge">LV</span>
              <span className="ccard-text">
                <strong data-i="c5f5bb3b35">Latvia</strong>
                <small data-i="e98260de43">Riga</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/liechtenstein-visa-from-uk">
              <span className="badge">LI</span>
              <span className="ccard-text">
                <strong data-i="b0ddce0f54">Liechtenstein</strong>
                <small data-i="7c3fae1ca6">Vaduz</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/lithuania-visa-from-uk">
              <span className="badge">LT</span>
              <span className="ccard-text">
                <strong data-i="74a788cee2">Lithuania</strong>
                <small data-i="b09b3806e5">Vilnius</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/luxembourg-visa-from-uk">
              <span className="badge">LU</span>
              <span className="ccard-text">
                <strong data-i="5076721c40">Luxembourg</strong>
                <small data-i="42f2348e2a">Luxembourg City</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/malta-visa-from-uk">
              <span className="badge">MT</span>
              <span className="ccard-text">
                <strong data-i="1a591a3e91">Malta</strong>
                <small data-i="d0af62d69a">Valletta</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/netherlands-visa-from-uk">
              <span className="badge">NL</span>
              <span className="ccard-text">
                <strong data-i="fb61c8a8eb">Netherlands</strong>
                <small data-i="2dce283e0e">Amsterdam</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/norway-visa-from-uk">
              <span className="badge">NO</span>
              <span className="ccard-text">
                <strong data-i="988455e67d">Norway</strong>
                <small data-i="bcc48172e0">Oslo</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/poland-visa-from-uk">
              <span className="badge">PL</span>
              <span className="ccard-text">
                <strong data-i="5ff03b7273">Poland</strong>
                <small data-i="706f6339e8">Warsaw</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/portugal-visa-from-uk">
              <span className="badge">PT</span>
              <span className="ccard-text">
                <strong data-i="a495190bcc">Portugal</strong>
                <small data-i="848652ee39">Lisbon</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/romania-visa-from-uk">
              <span className="badge">RO</span>
              <span className="ccard-text">
                <strong data-i="d6b897fd14">Romania</strong>
                <small data-i="6655fcfadc">Bucharest</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/slovakia-visa-from-uk">
              <span className="badge">SK</span>
              <span className="ccard-text">
                <strong data-i="b6c149c3e0">Slovakia</strong>
                <small data-i="9eddf74134">Bratislava</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/slovenia-visa-from-uk">
              <span className="badge">SI</span>
              <span className="ccard-text">
                <strong data-i="d1aa050361">Slovenia</strong>
                <small data-i="be95acba75">Ljubljana</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/spain-visa-from-uk">
              <span className="badge">ES</span>
              <span className="ccard-text">
                <strong data-i="20a8df9b76">Spain</strong>
                <small data-i="7a2191964a">Madrid</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/sweden-visa-from-uk">
              <span className="badge">SE</span>
              <span className="ccard-text">
                <strong data-i="72ddd2b619">Sweden</strong>
                <small data-i="c62ff645db">Stockholm</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
            <a className="ccard" href="/switzerland-visa-from-uk">
              <span className="badge">CH</span>
              <span className="ccard-text">
                <strong data-i="77dcd849e5">Switzerland</strong>
                <small data-i="94fa2a5396">Bern</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="flight-divider">
        <svg aria-hidden="true" className="flight flight-divider" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 110">
          <path className="fp" d="M-60 85 C 260 -10, 560 120, 860 45 S 1150 30, 1320 70" id="fp1" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 85 C 260 -10, 560 120, 860 45 S 1150 30, 1320 70" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="11s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(1)"></path>
            <animateMotion calcMode="linear" dur="11s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp1"></mpath>
            </animateMotion>
          </g>
        </svg>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="1dd6a17cb4">How it works</h2>
            <p className="muted" data-i="8f34852b45">You send your query. We do the paperwork and book your appointment. You attend with a complete, checked file.</p>
          </div>
          <ol className="journey">
            <li className="jy jy-1">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <g transform="translate(78 92) scale(1.05)">
                    <path className="hw-shirt" d="M-22 44 Q-22 14 0 14 Q22 14 22 44 Z"></path>
                    <circle className="hw-skin" cx="0" cy="0" r="12"></circle>
                    <path className="hw-hair" d="M-12 -2 Q-12 -14 0 -14 Q12 -14 12 -2 Q8 -9 0 -9 Q-8 -9 -12 -2 Z"></path>
                  </g>
                  <g className="hw-phone">
                    <rect className="hw-device" height="134" rx="14" width="84" x="138" y="34"></rect>
                    <rect className="hw-screen" height="112" rx="6" width="72" x="144" y="46"></rect>
                    <rect className="hw-wa" height="16" rx="6" width="72" x="144" y="46"></rect>
                    <circle className="hw-white" cx="153" cy="54" r="4"></circle>
                    <rect className="hw-white" height="4" rx="2" width="30" x="160" y="52"></rect>
                    <g className="hw-b1">
                      <rect className="hw-bubble-in" height="18" rx="6" width="52" x="150" y="70"></rect>
                      <rect className="hw-line" height="3" rx="1.5" width="38" x="155" y="76"></rect>
                      <rect className="hw-line" height="3" rx="1.5" width="26" x="155" y="81"></rect>
                    </g>
                    <g className="hw-b2">
                      <rect className="hw-bubble-out" height="18" rx="6" width="50" x="160" y="96"></rect>
                      <rect className="hw-line-out" height="3" rx="1.5" width="36" x="165" y="102"></rect>
                      <rect className="hw-line-out" height="3" rx="1.5" width="22" x="165" y="107"></rect>
                    </g>
                    <g className="hw-typing">
                      <rect className="hw-bubble-in" height="14" rx="7" width="30" x="150" y="122"></rect>
                      <circle className="hw-dot hw-d1" cx="158" cy="129" r="2"></circle>
                      <circle className="hw-dot hw-d2" cx="165" cy="129" r="2"></circle>
                      <circle className="hw-dot hw-d3" cx="172" cy="129" r="2"></circle>
                    </g>
                  </g>
                  <g className="hw-plane">
                    <path className="hw-accent" d="M232 40 L268 28 L254 58 L248 46 Z"></path>
                    <path className="hw-accent2" d="M248 46 L268 28 L252 50 Z"></path>
                  </g>
                  <path className="hw-trail" d="M214 66 Q226 54 236 48"></path>
                </svg>
                <span aria-hidden="true" className="jy-num">01</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-you" data-i="905cb326c7">You</span>
                <h3 data-i="5f49e1ce7b">Send your query</h3>
                <p data-i="cbc54feb1f">Message us on WhatsApp or use the enquiry form. Tell us your passport, UK status, destination and travel dates.</p>
              </div>
            </li>
            <li className="jy jy-2">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <rect className="hw-paper" height="130" rx="10" width="124" x="110" y="38"></rect>
                  <rect className="hw-clip" height="16" rx="5" width="52" x="146" y="30"></rect>
                  <circle className="hw-screen" cx="172" cy="34" r="3"></circle>
                  <rect className="hw-line-d" height="5" rx="2.5" width="70" x="128" y="54"></rect>
                  <g transform="translate(0 0)">
                    <rect className="hw-box" height="14" rx="3" width="14" x="128" y="66"></rect>
                    <path className="hw-tick hw-t0" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(135 73)"></path>
                    <rect className="hw-line-d" height="4" rx="2" width="62" x="150" y="68"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="40" x="150" y="76"></rect>
                  </g>
                  <g transform="translate(0 22)">
                    <rect className="hw-box" height="14" rx="3" width="14" x="128" y="66"></rect>
                    <path className="hw-tick hw-t1" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(135 73)"></path>
                    <rect className="hw-line-d" height="4" rx="2" width="50" x="150" y="68"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="54" x="150" y="76"></rect>
                  </g>
                  <g transform="translate(0 44)">
                    <rect className="hw-box" height="14" rx="3" width="14" x="128" y="66"></rect>
                    <path className="hw-tick hw-t2" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(135 73)"></path>
                    <rect className="hw-line-d" height="4" rx="2" width="66" x="150" y="68"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="30" x="150" y="76"></rect>
                  </g>
                  <g transform="translate(0 66)">
                    <rect className="hw-box" height="14" rx="3" width="14" x="128" y="66"></rect>
                    <path className="hw-tick hw-t3" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(135 73)"></path>
                    <rect className="hw-line-d" height="4" rx="2" width="44" x="150" y="68"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="48" x="150" y="76"></rect>
                  </g>
                  <g transform="translate(262 104) scale(0.9)">
                    <path className="hw-shirt2" d="M-22 44 Q-22 14 0 14 Q22 14 22 44 Z"></path>
                    <circle className="hw-skin" cx="0" cy="0" r="12"></circle>
                    <path className="hw-hair" d="M-12 -2 Q-12 -14 0 -14 Q12 -14 12 -2 Q8 -9 0 -9 Q-8 -9 -12 -2 Z"></path>
                  </g>
                  <g className="hw-badge">
                    <circle className="hw-ok" cx="232" cy="50" r="13"></circle>
                    <path className="hw-white-s" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(232 50)"></path>
                  </g>
                </svg>
                <span aria-hidden="true" className="jy-num">02</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-we" data-i="a24ae9faf6">We</span>
                <h3 data-i="f67e64b8a8">Get your document list</h3>
                <p data-i="781e01a969">We confirm which visa you need and send you a checklist made for your case.</p>
              </div>
            </li>
            <li className="jy jy-3">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <path className="hw-folder-b" d="M168 104 h44 l8 8 h44 v58 h-96 Z"></path>
                  <rect className="hw-folder" height="52" rx="5" width="96" x="168" y="118"></rect>
                  <g className="hw-up">
                    <circle className="hw-ok" cx="216" cy="144" r="11"></circle>
                    <path className="hw-white-s" d="M216 150 V138 M210 143 L216 137 L222 143"></path>
                  </g>
                  <g className="hw-fly hw-f1">
                    <rect className="hw-passport" height="60" rx="5" width="44" x="56" y="58"></rect>
                    <circle className="hw-gold" cx="78" cy="82" r="9"></circle>
                    <rect className="hw-gold" height="3" rx="1.5" width="24" x="66" y="98"></rect>
                  </g>
                  <g className="hw-fly hw-f2">
                    <rect className="hw-paper" height="60" rx="5" width="46" x="96" y="96"></rect>
                    <rect className="hw-line-d" height="4" rx="2" width="26" x="104" y="106"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="30" x="104" y="116"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="22" x="104" y="123"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="28" x="104" y="130"></rect>
                    <path className="hw-chart" d="M104 148 l7 -6 6 3 8 -9 6 4"></path>
                  </g>
                  <g className="hw-fly hw-f3">
                    <rect className="hw-paper" height="52" rx="5" width="40" x="118" y="36"></rect>
                    <rect className="hw-line-d" height="4" rx="2" width="20" x="125" y="45"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="26" x="125" y="55"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="20" x="125" y="62"></rect>
                    <rect className="hw-line-l" height="3" rx="1.5" width="24" x="125" y="69"></rect>
                  </g>
                  <path className="hw-trail" d="M146 70 Q176 70 194 100"></path>
                </svg>
                <span aria-hidden="true" className="jy-num">03</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-you" data-i="905cb326c7">You</span>
                <h3 data-i="74bc612b50">Send us your documents</h3>
                <p data-i="b2a7a2e8ef">Share copies of your passport, UK status, bank statements and work or study letters.</p>
              </div>
            </li>
            <li className="jy jy-4">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <rect className="hw-paper hw-back" height="122" rx="8" transform="rotate(-6 156 108)" width="104" x="104" y="40"></rect>
                  <rect className="hw-paper" height="128" rx="8" width="104" x="112" y="36"></rect>
                  <rect className="hw-line-d" height="5" rx="2.5" width="56" x="126" y="56"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="74" x="126" y="70"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="66" x="126" y="80"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="76" x="126" y="90"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="58" x="126" y="100"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="70" x="126" y="110"></rect>
                  <rect className="hw-line-l" height="3.5" rx="1.75" width="50" x="126" y="120"></rect>
                  <rect className="hw-field" height="22" rx="4" width="40" x="126" y="130"></rect>
                  <rect className="hw-field" height="22" rx="4" width="30" x="172" y="130"></rect>
                  <g className="hw-mag">
                    <circle className="hw-glass" cx="196" cy="92" r="20"></circle>
                    <circle className="hw-ring" cx="196" cy="92" r="20"></circle>
                    <path className="hw-handle" d="M210 106 L232 128"></path>
                  </g>
                  <g className="hw-stamp">
                    <circle className="hw-stamp-c" cx="96" cy="140" r="22"></circle>
                    <circle className="hw-stamp-c2" cx="96" cy="140" r="16"></circle>
                    <path className="hw-stamp-t" d="M-7 0 l5 5 L9 -6" transform="translate(96 140)"></path>
                  </g>
                  <g transform="translate(264 104) scale(0.9)">
                    <path className="hw-shirt3" d="M-22 44 Q-22 14 0 14 Q22 14 22 44 Z"></path>
                    <circle className="hw-skin" cx="0" cy="0" r="12"></circle>
                    <path className="hw-hair" d="M-12 -2 Q-12 -14 0 -14 Q12 -14 12 -2 Q8 -9 0 -9 Q-8 -9 -12 -2 Z"></path>
                  </g>
                </svg>
                <span aria-hidden="true" className="jy-num">04</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-we" data-i="a24ae9faf6">We</span>
                <h3 data-i="cec0dab072">We prepare your file</h3>
                <p data-i="7a4a90a445">We complete your application form, write your cover letter, arrange your travel plan and check every document.</p>
              </div>
            </li>
            <li className="jy jy-5">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <rect className="hw-paper" height="124" rx="12" width="116" x="104" y="44"></rect>
                  <rect className="hw-cal-top" height="28" rx="12" width="116" x="104" y="44"></rect>
                  <rect className="hw-cal-top" height="12" width="116" x="104" y="60"></rect>
                  <rect className="hw-ring-pin" height="16" rx="3" width="6" x="128" y="36"></rect>
                  <rect className="hw-ring-pin" height="16" rx="3" width="6" x="190" y="36"></rect>
                  <rect className="hw-white" height="5" rx="2.5" width="44" x="140" y="54"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="116" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="132" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="148" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="164" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="180" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="196" y="82"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="116" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="132" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="148" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="164" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="180" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="196" y="98"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="116" y="114"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="132" y="114"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="148" y="114"></rect>
                  <rect className="hw-cell-on" height="12" rx="3" width="12" x="164" y="114"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="180" y="114"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="196" y="114"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="116" y="130"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="132" y="130"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="148" y="130"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="164" y="130"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="180" y="130"></rect>
                  <rect className="hw-cell" height="12" rx="3" width="12" x="196" y="130"></rect>
                  <circle className="hw-pulse" cx="170" cy="120" r="10"></circle>
                  <g className="hw-clock">
                    <circle className="hw-paper" cx="246" cy="128" r="28"></circle>
                    <circle className="hw-ring2" cx="246" cy="128" r="28"></circle>
                    <path className="hw-hand hw-hand-m" d="M246 128 V110"></path>
                    <path className="hw-hand hw-hand-h" d="M246 128 L258 134"></path>
                    <circle className="hw-accent" cx="246" cy="128" r="3"></circle>
                  </g>
                  <g className="hw-confirm">
                    <rect className="hw-ok" height="24" rx="12" width="64" x="46" y="58"></rect>
                    <path className="hw-white-s" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(60 70)"></path>
                    <rect className="hw-white" height="5" rx="2.5" width="30" x="70" y="67"></rect>
                  </g>
                </svg>
                <span aria-hidden="true" className="jy-num">05</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-we" data-i="a24ae9faf6">We</span>
                <h3 data-i="04383c3b1f">We book your appointment</h3>
                <p data-i="a29ae33318">We book the earliest appointment available at the visa centre and send you the date and time.</p>
              </div>
            </li>
            <li className="jy jy-6">
              <div className="jy-art">
                <svg aria-hidden="true" className="hw-svg" focusable="false" viewBox="0 0 320 180">
                  <circle className="hw-halo" cx="160" cy="92" r="78"></circle>
                  <circle className="hw-halo2" cx="160" cy="92" r="58"></circle>
                  <g transform="translate(-14 4) scale(.96)">
                    <path className="hw-build" d="M188 62 L250 40 L312 62 Z"></path>
                    <rect className="hw-build" height="8" width="112" x="194" y="62"></rect>
                    <rect className="hw-build" height="66" width="10" x="200" y="74"></rect>
                    <rect className="hw-build" height="66" width="10" x="224" y="74"></rect>
                    <rect className="hw-build" height="66" width="10" x="248" y="74"></rect>
                    <rect className="hw-build" height="66" width="10" x="272" y="74"></rect>
                    <rect className="hw-build" height="66" width="10" x="296" y="74"></rect>
                    <rect className="hw-build" height="10" width="120" x="190" y="140"></rect>
                  </g>
                  <g transform="translate(108 84) scale(1.1)">
                    <path className="hw-shirt" d="M-22 44 Q-22 14 0 14 Q22 14 22 44 Z"></path>
                    <circle className="hw-skin" cx="0" cy="0" r="12"></circle>
                    <path className="hw-hair" d="M-12 -2 Q-12 -14 0 -14 Q12 -14 12 -2 Q8 -9 0 -9 Q-8 -9 -12 -2 Z"></path>
                  </g>
                  <rect className="hw-folder" height="38" rx="4" transform="rotate(-8 133 129)" width="30" x="118" y="110"></rect>
                  <g className="hw-scanner">
                    <rect className="hw-device" height="44" rx="8" width="58" x="150" y="128"></rect>
                    <rect className="hw-screen" height="30" rx="4" width="42" x="158" y="134"></rect>
                    <g className="hw-fp" transform="translate(179 149)">
                      <path className="hw-fp-l" d="M-3 4 Q-3 -3 0 -3 Q3 -3 3 4"></path>
                      <path className="hw-fp-l" d="M-6 4 Q-6 -6 0 -6 Q6 -6 6 4"></path>
                      <path className="hw-fp-l" d="M-9 4 Q-9 -9 0 -9 Q9 -9 9 4"></path>
                      <path className="hw-fp-l" d="M-12 4 Q-12 -12 0 -12 Q12 -12 12 4"></path>
                    </g>
                    <rect className="hw-scan" height="3" rx="1.5" width="42" x="158" y="134"></rect>
                  </g>
                  <g className="hw-done">
                    <circle className="hw-ok" cx="214" cy="118" r="11"></circle>
                    <path className="hw-white-s" d="M-5 0 l3.5 3.5 L6 -4" transform="translate(214 118)"></path>
                  </g>
                </svg>
                <span aria-hidden="true" className="jy-num">06</span>
              </div>
              <div className="jy-body">
                <span className="jy-who jy-you" data-i="905cb326c7">You</span>
                <h3 data-i="97d60cc7b3">Attend with your file</h3>
                <p data-i="e8010bf524">You take your ready file to the appointment and give your fingerprints. We help you follow your application until the decision.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section>
              <h2 data-i="825c7d2ebd">Your complete visa file</h2>
              <p className="prose muted" data-i="d04530760c">Everything is prepared, checked and put in the order the visa centre expects.</p>
              <ul className="checklist">
                <li>
                  <span data-i="2489f1bedd">
                    <strong>Completed application form</strong>
                    , checked against your passport.
                  </span>
                </li>
                <li>
                  <span data-i="627f2bff90">
                    <strong>Cover letter</strong>
                    {" explaining your trip, written for your situation."}
                  </span>
                </li>
                <li>
                  <span data-i="1db0714cff">
                    <strong>Travel plan</strong>
                    : flight reservation and accommodation for every night.
                  </span>
                </li>
                <li>
                  <span data-i="d7dac13765">
                    <strong>Travel insurance guidance</strong>
                    {" so your cover meets the €30,000 Schengen rule."}
                  </span>
                </li>
                <li>
                  <span data-i="f9056227f0">
                    <strong>Document review</strong>
                    {" of your bank statements, UK status and employment or student letters, with clear notes on anything to fix."}
                  </span>
                </li>
                <li>
                  <span data-i="ebeb7576af">
                    <strong>Appointment booking</strong>
                    {" at the right visa centre, with the date and time sent to you."}
                  </span>
                </li>
                <li>
                  <span data-i="9b26e65019">
                    <strong>Final file check</strong>
                    {" and a printed order list, so nothing is missing on the day."}
                  </span>
                </li>
              </ul>
            </section>
          </div>
          <aside>
            <div className="side-box">
              <div className="side-head">
                <span className="side-chip" data-i="d684b7391e">
                  {"Schengen package · "}
                  <b>£89</b>
                </span>
                <h2 data-i="2dc8c3a4a3">What we need from you</h2>
                <p data-i="426d0410b3">Send us copies of these documents. We tell you exactly what else your case needs.</p>
                <span aria-hidden="true" className="side-orbit"></span>
              </div>
              <div className="side-body">
                <ul className="need-list">
                  <li>
                    <span className="need-num">1</span>
                    <span>
                      <strong data-i="d5ed1ca0e3">Passport</strong>
                      <small data-i="323ef18d0e">Photo page, valid 3+ months after your trip</small>
                    </span>
                  </li>
                  <li>
                    <span className="need-num">2</span>
                    <span>
                      <strong data-i="95bcbb38c3">UK status</strong>
                      <small data-i="a7a0f9eee6">eVisa share code or residence permit</small>
                    </span>
                  </li>
                  <li>
                    <span className="need-num">3</span>
                    <span>
                      <strong data-i="7ae635026e">Bank statements</strong>
                      <small data-i="f3503852f4">Usually your last 3 months</small>
                    </span>
                  </li>
                  <li>
                    <span className="need-num">4</span>
                    <span>
                      <strong data-i="c354bb9713">Work or study letter</strong>
                      <small data-i="98665823a0">From your employer or university</small>
                    </span>
                  </li>
                </ul>
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20you%20to%20prepare%20my%20visa%20file." rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="14792e0f16">Start your file</span>
                </a>
                <p className="side-note" data-i="edf2f39658">Appointments depend on what the visa centre releases. We book the earliest date available.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="03ef8f844c">Who we help</h2>
            <p className="muted" data-i="4354a022c5">Our clients are people who live in the UK but hold a passport that needs a visa for Europe and other destinations.</p>
          </div>
          <div className="grid">
            <div className="card">
              <h3 data-i="fcfac3efb6">Students</h3>
              <p data-i="622a58adbb">Holiday trips during term breaks, with the right letter from your university.</p>
            </div>
            <div className="card">
              <h3 data-i="1fd7ddc024">Workers and families</h3>
              <p data-i="9ff99408d1">Skilled worker visa holders, dependants and family visa holders travelling together.</p>
            </div>
            <div className="card">
              <h3 data-i="c99e92cd12">Settled residents</h3>
              <p data-i="41906e959b">People with Indefinite Leave to Remain or settled status who keep a non-British passport.</p>
            </div>
            <div className="card">
              <h3 data-i="d438ad3d50">Business travellers</h3>
              <p data-i="19fee6d2a7">Conferences, meetings and trade fairs, with the right invitation and company letters.</p>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="flight-divider">
        <svg aria-hidden="true" className="flight flight-divider" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 110">
          <path className="fp" d="M-60 85 C 260 -10, 560 120, 860 45 S 1150 30, 1320 70" id="fp2" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 85 C 260 -10, 560 120, 860 45 S 1150 30, 1320 70" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="11s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(1)"></path>
            <animateMotion calcMode="linear" dur="11s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp2"></mpath>
            </animateMotion>
          </g>
        </svg>
      </div>
      <section className="section" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="0e3b7945cd">What our clients say</h2>
            <p className="muted" data-i="92faa310f7">Reviews from our clients on Trustpilot, an independent review website.</p>
          </div>
          <aside aria-label="Our Trustpilot rating" className="tp-summary" data-i-aria-label="ffa76970c5">
            <div className="tp-top">
              <p className="tp-score">
                <strong>4.0</strong>
                <span data-i="02113fe140">out of 5</span>
              </p>
              <div className="tp-meta">
                <span className="tp-label notranslate">Great</span>
                {" "}
                <span aria-label="4.0 / 5" className="tp-stars" role="img">
                  <span className="tp-stars-bg">
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="tp-stars-fg" style={{ "width": "80.0%" }}>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                    </svg>
                  </span>
                </span>
                {" "}
                <span className="small">
                  <b className="notranslate">3</b>
                  {" "}
                  <span data-i="b9c8fdc28e">reviews on Trustpilot</span>
                </span>
              </div>
            </div>
            <ul aria-label="Reviews by star rating" className="tp-bars" data-i-aria-label="275fcdab76">
              <li>
                <span data-i="6766f72882">5-star</span>
                <span className="tp-bar">
                  <i style={{ "width": "100%" }}></i>
                </span>
                <span className="tp-n">3</span>
              </li>
              <li>
                <span data-i="ad3bb3f2d3">4-star</span>
                <span className="tp-bar">
                  <i style={{ "width": "0%" }}></i>
                </span>
                <span className="tp-n">0</span>
              </li>
              <li>
                <span data-i="9a4f270a65">3-star</span>
                <span className="tp-bar">
                  <i style={{ "width": "0%" }}></i>
                </span>
                <span className="tp-n">0</span>
              </li>
              <li>
                <span data-i="da6ed691b4">2-star</span>
                <span className="tp-bar">
                  <i style={{ "width": "0%" }}></i>
                </span>
                <span className="tp-n">0</span>
              </li>
              <li>
                <span data-i="1f84e638e6">1-star</span>
                <span className="tp-bar">
                  <i style={{ "width": "0%" }}></i>
                </span>
                <span className="tp-n">0</span>
              </li>
            </ul>
            <div className="tp-actions">
              <a className="btn btn-primary" href="https://uk.trustpilot.com/review/travelvista.uk" rel="noopener" target="_blank">
                <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                {" "}
                <span data-i="f29d98f084">See all reviews on Trustpilot</span>
              </a>
              {" "}
              <a className="btn btn-ghost" data-i="935dc45f20" href="https://uk.trustpilot.com/evaluate/travelvista.uk" rel="noopener" target="_blank">Leave a review</a>
              <p className="tp-foot small">
                <span data-i="5e44acac4f">
                  {"TrustScore from "}
                  <a href="https://uk.trustpilot.com/review/travelvista.uk" rel="noopener" target="_blank">Trustpilot</a>
                </span>
                {" · "}
                <span data-i="f52767eee8">Last updated:</span>
                {" "}
                <span className="notranslate">13 November 2026</span>
              </p>
            </div>
          </aside>
          <div className="reviews">
            <article className="review">
              <header className="review-head">
                <span aria-hidden="true" className="avatar">TC</span>
                <div>
                  <strong>Trustpilot customer</strong>
                  <span className="small">GB · 6 November 2026</span>
                </div>
              </header>
              <span aria-label="Rated 5 out of 5" className="stars" role="img">
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
              </span>
              <h3>Quick and easy</h3>
              <div className="review-text">
                <p>Quick and easy! Prompt comms and diligent at work! Got my visa in 4 days from the appointment ! Recommend</p>
              </div>
              <a className="review-link" href="https://uk.trustpilot.com/reviews/6af6fdf97832d9fafd45d9bc" rel="noopener" target="_blank">Read this review on Trustpilot →</a>
            </article>
            <article className="review">
              <header className="review-head">
                <span aria-hidden="true" className="avatar">VU</span>
                <div>
                  <strong>Vareesha Umer</strong>
                  <span className="small">GB · 6 November 2026</span>
                </div>
              </header>
              <span aria-label="Rated 5 out of 5" className="stars" role="img">
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
              </span>
              <h3>Best and Affordable Visa Service</h3>
              <div className="review-text">
                <p>I had a really great experience with Travelvista Ltd for my visa services.</p>
                <p>The whole process was smooth, stress-free and professionally handled.</p>
                <p>I never had to worry about the documentation or paperwork, as everything was prepared accurately and on time.</p>
                <p>The management was excellent, and the service was also very affordable.</p>
                <p>A big thank you to the team for making the entire process so easy and hassle-free.</p>
                <p>Highly recommended to anyone looking for reliable and affordable visa services!</p>
              </div>
              <a className="review-link" href="https://uk.trustpilot.com/reviews/6aedbd55712b7cf75b7e7c22" rel="noopener" target="_blank">Read this review on Trustpilot →</a>
            </article>
            <article className="review">
              <header className="review-head">
                <span aria-hidden="true" className="avatar">MI</span>
                <div>
                  <strong>Muzammil Ilyas</strong>
                  <span className="small">GB · 3 November 2026</span>
                </div>
              </header>
              <span aria-label="Rated 5 out of 5" className="stars" role="img">
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
                <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                </svg>
              </span>
              <h3>Great experience with TravelVista Ltd</h3>
              <div className="review-text">
                <p>Great experience with TravelVista Ltd. The team was professional, friendly and very helpful.</p>
                <p>I was planning to visit Germany and they made the process smooth.. Really happy with the service..Highly recommend</p>
              </div>
              <a className="review-link" href="https://uk.trustpilot.com/reviews/6aedbe6e518fd57441f96f6e" rel="noopener" target="_blank">Read this review on Trustpilot →</a>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-tint" id="approvals">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="9ff5ebdba2">Recent visa approvals</h2>
            <p className="muted" data-i="27b1560b77">Real visas our clients received, shared with their written permission. Names, photos and passport numbers are always hidden.</p>
          </div>
          <div aria-label="Filter by country" className="pf-filter" data-i-aria-label="2b97e1de26" role="group">
            <button aria-pressed="true" className="on" data-cc="" data-i="6a72085653" type="button">All</button>
            <button aria-pressed="false" data-cc="CH" data-i="77dcd849e5" type="button">Switzerland</button>
            <button aria-pressed="false" data-cc="IS" data-i="b3c92eecf0" type="button">Iceland</button>
            <button aria-pressed="false" data-cc="GR" data-i="4902a456ca" type="button">Greece</button>
            <button aria-pressed="false" data-cc="FR" data-i="e3772ac4b4" type="button">France</button>
          </div>
          <div className="pf-grid">
            <figure className="pf-card" data-cc="CH">
              <button aria-label="View larger photo" className="pf-img" data-full="assets/approvals/ch-2026-11-a.jpg" data-i-aria-label="f6aa07a111" type="button">
                <img alt="" decoding="async" height="768" loading="lazy" src="/assets/approvals/ch-2026-11-a.jpg" width="1122" />
                {" "}
                <span aria-hidden="true" className="pf-shade"></span>
                {" "}
                <span className="pf-priv">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13">
                    <rect height="11" rx="2" width="16" x="4" y="10"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  {" "}
                  <span data-i="4014effe92">Personal details hidden</span>
                </span>
                {" "}
                <span className="pf-ok">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width="13">
                    <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                  </svg>
                  {" "}
                  <span data-i="41b81eb8db">Approved</span>
                </span>
                {" "}
                <span className="pf-title">
                  <span className="pf-cc notranslate">CH</span>
                  <strong data-i="77dcd849e5">Switzerland</strong>
                </span>
                {" "}
                <span aria-hidden="true" className="pf-zoom">
                  <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <circle cx="11" cy="11" r="6.5"></circle>
                    <path d="M16 16l4.5 4.5M11 8v6M8 11h6"></path>
                  </svg>
                </span>
              </button>
              {" "}
              <figcaption>
                <div className="pf-chips">
                  <span className="pf-chip" data-i="3058d881a3">Short-stay Schengen visa</span>
                  <span className="pf-chip" data-i="8624b4cc8f">Multiple entry</span>
                  <span className="pf-chip" data-i="7d62dd12af">Tourism</span>
                </div>
                <p className="pf-meta small">
                  <svg aria-hidden="true" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="15">
                    <rect height="15.5" rx="2.5" width="17" x="3.5" y="5"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                  </svg>
                  <span data-i="3b6f9e775d">Approved in</span>
                  <span className="notranslate">November 2026</span>
                </p>
              </figcaption>
            </figure>
            <figure className="pf-card" data-cc="IS">
              <button aria-label="View larger photo" className="pf-img" data-full="assets/approvals/is-2026-09-a.jpg" data-i-aria-label="f6aa07a111" type="button">
                <img alt="" decoding="async" height="571" loading="lazy" src="/assets/approvals/is-2026-09-a.jpg" width="898" />
                {" "}
                <span aria-hidden="true" className="pf-shade"></span>
                {" "}
                <span className="pf-priv">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13">
                    <rect height="11" rx="2" width="16" x="4" y="10"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  {" "}
                  <span data-i="4014effe92">Personal details hidden</span>
                </span>
                {" "}
                <span className="pf-ok">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width="13">
                    <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                  </svg>
                  {" "}
                  <span data-i="41b81eb8db">Approved</span>
                </span>
                {" "}
                <span className="pf-title">
                  <span className="pf-cc notranslate">IS</span>
                  <strong data-i="b3c92eecf0">Iceland</strong>
                </span>
                {" "}
                <span aria-hidden="true" className="pf-zoom">
                  <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <circle cx="11" cy="11" r="6.5"></circle>
                    <path d="M16 16l4.5 4.5M11 8v6M8 11h6"></path>
                  </svg>
                </span>
              </button>
              {" "}
              <figcaption>
                <div className="pf-chips">
                  <span className="pf-chip" data-i="3058d881a3">Short-stay Schengen visa</span>
                  <span className="pf-chip" data-i="8624b4cc8f">Multiple entry</span>
                </div>
                <p className="pf-meta small">
                  <svg aria-hidden="true" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="15">
                    <rect height="15.5" rx="2.5" width="17" x="3.5" y="5"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                  </svg>
                  <span data-i="3b6f9e775d">Approved in</span>
                  <span className="notranslate">September 2026</span>
                </p>
              </figcaption>
            </figure>
            <figure className="pf-card" data-cc="GR">
              <button aria-label="View larger photo" className="pf-img" data-full="assets/approvals/gr-2025-05-a.jpg" data-i-aria-label="f6aa07a111" type="button">
                <img alt="" decoding="async" height="728" loading="lazy" src="/assets/approvals/gr-2025-05-a.jpg" width="1036" />
                {" "}
                <span aria-hidden="true" className="pf-shade"></span>
                {" "}
                <span className="pf-priv">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13">
                    <rect height="11" rx="2" width="16" x="4" y="10"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  {" "}
                  <span data-i="4014effe92">Personal details hidden</span>
                </span>
                {" "}
                <span className="pf-ok">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width="13">
                    <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                  </svg>
                  {" "}
                  <span data-i="41b81eb8db">Approved</span>
                </span>
                {" "}
                <span className="pf-title">
                  <span className="pf-cc notranslate">GR</span>
                  <strong data-i="4902a456ca">Greece</strong>
                </span>
                {" "}
                <span aria-hidden="true" className="pf-zoom">
                  <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <circle cx="11" cy="11" r="6.5"></circle>
                    <path d="M16 16l4.5 4.5M11 8v6M8 11h6"></path>
                  </svg>
                </span>
              </button>
              {" "}
              <figcaption>
                <div className="pf-chips">
                  <span className="pf-chip" data-i="3058d881a3">Short-stay Schengen visa</span>
                  <span className="pf-chip" data-i="8624b4cc8f">Multiple entry</span>
                  <span className="pf-chip" data-i="7d62dd12af">Tourism</span>
                </div>
                <p className="pf-meta small">
                  <svg aria-hidden="true" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="15">
                    <rect height="15.5" rx="2.5" width="17" x="3.5" y="5"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                  </svg>
                  <span data-i="3b6f9e775d">Approved in</span>
                  <span className="notranslate">May 2025</span>
                </p>
              </figcaption>
            </figure>
            <figure className="pf-card" data-cc="FR">
              <button aria-label="View larger photo" className="pf-img" data-full="assets/approvals/fr-2023-06-a.jpg" data-i-aria-label="f6aa07a111" type="button">
                <img alt="" decoding="async" height="765" loading="lazy" src="/assets/approvals/fr-2023-06-a.jpg" width="1100" />
                {" "}
                <span aria-hidden="true" className="pf-shade"></span>
                {" "}
                <span className="pf-priv">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="13">
                    <rect height="11" rx="2" width="16" x="4" y="10"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  {" "}
                  <span data-i="4014effe92">Personal details hidden</span>
                </span>
                {" "}
                <span className="pf-ok">
                  <svg aria-hidden="true" fill="none" height="13" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" width="13">
                    <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                  </svg>
                  {" "}
                  <span data-i="41b81eb8db">Approved</span>
                </span>
                {" "}
                <span className="pf-title">
                  <span className="pf-cc notranslate">FR</span>
                  <strong data-i="e3772ac4b4">France</strong>
                </span>
                {" "}
                <span aria-hidden="true" className="pf-zoom">
                  <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <circle cx="11" cy="11" r="6.5"></circle>
                    <path d="M16 16l4.5 4.5M11 8v6M8 11h6"></path>
                  </svg>
                </span>
              </button>
              {" "}
              <figcaption>
                <div className="pf-chips">
                  <span className="pf-chip" data-i="3058d881a3">Short-stay Schengen visa</span>
                  <span className="pf-chip" data-i="8624b4cc8f">Multiple entry</span>
                </div>
                <p className="pf-meta small">
                  <svg aria-hidden="true" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="15">
                    <rect height="15.5" rx="2.5" width="17" x="3.5" y="5"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                  </svg>
                  <span data-i="3b6f9e775d">Approved in</span>
                  <span className="notranslate">June 2023</span>
                </p>
              </figcaption>
            </figure>
            <div className="pf-cta" style={{ "--span": "2" }}>
              <p className="eyebrow" data-i="c97854ed73">Your trip to Europe</p>
              <h3 data-i="9d199b3da3">Want help with your Schengen visa?</h3>
              <p className="muted" data-i="f7288d91e7">Book a free consultation on WhatsApp. We check your documents and prepare your full file before your appointment.</p>
              <div className="btn-row">
                <a className="btn btn-primary" data-i="eef4ca437c" href="https://wa.me/447862609755" rel="noopener" target="_blank">Free consultation</a>
                <a className="btn btn-ghost" data-i="1eca818629" href="#package">See our package</a>
              </div>
            </div>
          </div>
          <p className="pf-note small muted" data-i="ba0632f086">Every visa decision is made by the embassy or consulate. Past approvals do not guarantee a future result.</p>
          <dialog aria-label="Visa photo" className="pf-dlg" data-i-aria-label="3244bc8e73">
            <button aria-label="Close" className="pf-x" data-i-aria-label="bbfa773e5a" type="button">×</button>
            <img alt="" />
            <p className="small muted" data-i="4014effe92">Personal details hidden</p>
          </dialog>
        </div>
      </section>
      <section className="section tools-home">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="555658aeec">Free visa tools</h2>
            <p className="muted" data-i="d75569e540">Quick tools to check what you need, what it costs and how long you can stay. Free to use, no sign-up.</p>
          </div>
          <div className="grid tool-grid">
            <a className="card tool-card" href="/visa-checker">
              <span className="tool-ic">
                <svg aria-hidden="true" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24" width="26">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </span>
              <h3 data-i="16e51dec1b">Do I need a visa?</h3>
              <p data-i="7954e5bdf0">Check by passport, UK status and destination, with the visa centre you would use.</p>
              <span className="tool-go" data-i="d7111bf96e">
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
              <h3 data-i="e72fb9dca3">Visa cost calculator</h3>
              <p data-i="dac86c0489">Add up our fee, the embassy fee and the visa centre fee for your whole group.</p>
              <span className="tool-go" data-i="d7111bf96e">
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
              <h3 data-i="e11ee65b05">90/180-day calculator</h3>
              <p data-i="b8b45f4409">Count the days you have used in the Schengen area and see how long you can stay.</p>
              <span className="tool-go" data-i="d7111bf96e">
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
              <h3 data-i="cc4349278d">Document checklist</h3>
              <p data-i="b3bb09123e">Get a checklist for your situation, tick items off and save it as a PDF.</p>
              <span className="tool-go" data-i="d7111bf96e">
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
              <h3 data-i="634a595095">Appointment updates</h3>
              <p data-i="9afeaca119">See the latest appointment availability our team has seen at UK visa centres.</p>
              <span className="tool-go" data-i="d7111bf96e">
                {"Open tool "}
                <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
          <p style={{ "marginTop": "18px" }}>
            <a className="btn btn-ghost" data-i="5ba7a1b369" href="/tools">See all free tools</a>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="af90cef809">Frequently asked questions</h2>
          </div>
          <div className="faq">
            <details>
              <summary data-i="4dfebc23f5">Do I need a Schengen visa if I live in the UK?</summary>
              <div className="answer">
                <p data-i="3d068854d9">It depends on your passport, not where you live. British citizens do not need a visa for short trips of up to 90 days in any 180-day period.</p>
                <p data-i="77d53274b5">Many non-British passport holders living in the UK, for example people with Indian, Pakistani, Nigerian or Chinese passports, do need one. We check this for free in your first consultation.</p>
              </div>
            </details>
            <details>
              <summary data-i="85684e1cc1">How much does a Schengen visa cost?</summary>
              <div className="answer">
                <p data-i="08ec63a631">Our Schengen visa package is £89 per applicant. On top of that you pay the official visa fee (€90 for adults, €45 for children aged 6 to 11, free under 6) and the visa centre's own service fee.</p>
              </div>
            </details>
            <details>
              <summary data-i="a17bb19b60">How early should I apply?</summary>
              <div className="answer">
                <p data-i="e0e83083ba">You can apply up to 6 months before your trip and no later than 15 days before. Appointments can fill up quickly in busy months, so we recommend starting as early as you can.</p>
              </div>
            </details>
            <details>
              <summary data-i="91b65d1370">Can you guarantee my visa will be approved?</summary>
              <div className="answer">
                <p data-i="ccd775d953">No one can guarantee approval. The embassy or consulate makes every decision. Our job is to make sure your application is complete, correct and clearly supports your trip.</p>
              </div>
            </details>
            <details>
              <summary data-i="b3aaa0dc0e">Can you help if I am on a student, work or family visa?</summary>
              <div className="answer">
                <p data-i="8036add689">Yes. We help eVisa holders on student, skilled worker, dependant, family and settled status. Your UK permission must stay valid for your trip and usually for a period after your return.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <svg aria-hidden="true" className="flight flight-cta" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 220">
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp3" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp3"></mpath>
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
