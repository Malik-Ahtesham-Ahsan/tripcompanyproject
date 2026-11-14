import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";
import JsonLd from "../components/JsonLd";

export const metadata = {
  "title": "TravelVista Ltd | Visa Assistance & Travel Solutions for UK Residents",
  "description": "Expert visa assistance, appointment management and personalised travel solutions for UK residents. Schengen visas from £89 per applicant. London based.",
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
    "title": "TravelVista Ltd | Visa Assistance & Travel Solutions for UK Residents",
    "description": "Expert visa assistance, appointment management and personalised travel solutions for UK residents. Schengen visas from £89 per applicant. London based.",
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
      <Header2 current="/" />
      <main id="main">
      <section aria-labelledby="hero-title" className="v-hero">
        <div aria-hidden="true" className="v-stars"></div>
        <div aria-label="Interactive 3D globe. Drag to rotate, scroll or pinch to zoom, select a country to open its visa guide." className="v-globe" data-i-aria-label="2883812e1b" data-routes={"[{\"n\": \"Paris\", \"s\": \"france-visa-from-uk.html\", \"lat\": 48.86, \"lng\": 2.35, \"c\": \"FR\"}, {\"n\": \"New York\", \"s\": \"usa-visa-from-uk.html\", \"lat\": 40.71, \"lng\": -74.0, \"c\": \"US\"}, {\"n\": \"Dubai\", \"s\": \"dubai-visa-from-uk.html\", \"lat\": 25.2, \"lng\": 55.27, \"c\": \"AE\"}, {\"n\": \"Rome\", \"s\": \"italy-visa-from-uk.html\", \"lat\": 41.9, \"lng\": 12.5, \"c\": \"IT\"}, {\"n\": \"Toronto\", \"s\": \"canada-visa-from-uk.html\", \"lat\": 43.65, \"lng\": -79.38, \"c\": \"CA\"}, {\"n\": \"Amsterdam\", \"s\": \"netherlands-visa-from-uk.html\", \"lat\": 52.37, \"lng\": 4.9, \"c\": \"NL\"}, {\"n\": \"Madrid\", \"s\": \"spain-visa-from-uk.html\", \"lat\": 40.42, \"lng\": -3.7, \"c\": \"ES\"}, {\"n\": \"Zurich\", \"s\": \"switzerland-visa-from-uk.html\", \"lat\": 47.37, \"lng\": 8.54, \"c\": \"CH\"}]"} role="group">
          <div aria-hidden="true" className="v-globe-static"></div>
          <div className="v-globe-canvas"></div>
          <div aria-hidden="true" className="v-globe-overlay"></div>
          <div aria-live="polite" className="v-gcard notranslate" hidden={true} role="status"></div>
          <div aria-label="Globe controls" className="v-globe-ctrl" data-i-aria-label="a2018d0d8f" role="group">
            <button aria-label="Zoom in" data-i-aria-label="4fc05f2763" data-z="in" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
            {" "}
            <button aria-label="Zoom out" data-i-aria-label="a4ae4b24a1" data-z="out" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                <path d="M5 12h14"></path>
              </svg>
            </button>
            {" "}
            <button aria-label="Pause rotation" aria-pressed="true" data-i-aria-label="ef4a3938c6" data-z="spin" type="button">
              <svg className="v-ic-pause" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                <path d="M9 6v12M15 6v12"></path>
              </svg>
              <svg className="v-ic-play" fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
                <path d="M8 5.5v13l10.5-6.5z"></path>
              </svg>
            </button>
            {" "}
            <button aria-label="Reset view" data-i-aria-label="80d8db7ad9" data-z="reset" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="16">
                <path d="M3 12a9 9 0 1 0 3-6.7"></path>
                <path d="M3 4v5h5"></path>
              </svg>
            </button>
          </div>
          <p className="v-globe-hint">
            <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18M12 3c-2.8 2.6-2.8 15.4 0 18"></path>
            </svg>
            {" "}
            <span data-i="788e3f90bd">Drag to explore · Select a country</span>
          </p>
        </div>
        <div className="v-wrap v-hero-in">
          <div className="v-hero-copy">
            <p className="v-eyebrow v-eyebrow-gold" data-i="f3bc726e43">
              <span aria-hidden="true" className="v-rule"></span>
              {"Global Travel & Visa Solutions"}
            </p>
            <h1 className="v-h1" id="hero-title">
              <span className="v-line" data-i="6d9f0bed69">Explore the World.</span>
              {" "}
              <span className="v-line v-serif" data-i="4d7992efb0">We’ll Handle the Journey.</span>
            </h1>
            <p className="v-lead" data-i="c5d83b2c55">Expert visa assistance, appointment management and personalised travel solutions for UK residents. From European destinations to worldwide adventures, TravelVista makes your international travel simpler.</p>
            <div className="v-ctas">
              <a className="v-btn v-btn-red" href="#services">
                <span data-i="01fa0051e2">Explore Our Services</span>
                {" "}
                <span aria-hidden="true" className="v-arr">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </a>
              {" "}
              <a className="v-btn v-btn-line" data-i="43bcbb7183" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20free%20visa%20consultation." rel="noopener" target="_blank">Get Free Consultation</a>
            </div>
            <form autoComplete="off" className="v-search" data-dests={"[{\"n\": \"United States\", \"s\": \"usa-visa-from-uk.html\"}, {\"n\": \"Canada\", \"s\": \"canada-visa-from-uk.html\"}, {\"n\": \"Dubai\", \"s\": \"dubai-visa-from-uk.html\"}, {\"n\": \"Turkey\", \"s\": \"turkey-visa-from-uk.html\"}, {\"n\": \"Austria\", \"s\": \"austria-visa-from-uk.html\"}, {\"n\": \"Belgium\", \"s\": \"belgium-visa-from-uk.html\"}, {\"n\": \"Bulgaria\", \"s\": \"bulgaria-visa-from-uk.html\"}, {\"n\": \"Croatia\", \"s\": \"croatia-visa-from-uk.html\"}, {\"n\": \"Czech Republic\", \"s\": \"czech-republic-visa-from-uk.html\"}, {\"n\": \"Denmark\", \"s\": \"denmark-visa-from-uk.html\"}, {\"n\": \"Estonia\", \"s\": \"estonia-visa-from-uk.html\"}, {\"n\": \"Finland\", \"s\": \"finland-visa-from-uk.html\"}, {\"n\": \"France\", \"s\": \"france-visa-from-uk.html\"}, {\"n\": \"Germany\", \"s\": \"germany-visa-from-uk.html\"}, {\"n\": \"Greece\", \"s\": \"greece-visa-from-uk.html\"}, {\"n\": \"Hungary\", \"s\": \"hungary-visa-from-uk.html\"}, {\"n\": \"Iceland\", \"s\": \"iceland-visa-from-uk.html\"}, {\"n\": \"Italy\", \"s\": \"italy-visa-from-uk.html\"}, {\"n\": \"Latvia\", \"s\": \"latvia-visa-from-uk.html\"}, {\"n\": \"Liechtenstein\", \"s\": \"liechtenstein-visa-from-uk.html\"}, {\"n\": \"Lithuania\", \"s\": \"lithuania-visa-from-uk.html\"}, {\"n\": \"Luxembourg\", \"s\": \"luxembourg-visa-from-uk.html\"}, {\"n\": \"Malta\", \"s\": \"malta-visa-from-uk.html\"}, {\"n\": \"Netherlands\", \"s\": \"netherlands-visa-from-uk.html\"}, {\"n\": \"Norway\", \"s\": \"norway-visa-from-uk.html\"}, {\"n\": \"Poland\", \"s\": \"poland-visa-from-uk.html\"}, {\"n\": \"Portugal\", \"s\": \"portugal-visa-from-uk.html\"}, {\"n\": \"Romania\", \"s\": \"romania-visa-from-uk.html\"}, {\"n\": \"Slovakia\", \"s\": \"slovakia-visa-from-uk.html\"}, {\"n\": \"Slovenia\", \"s\": \"slovenia-visa-from-uk.html\"}, {\"n\": \"Spain\", \"s\": \"spain-visa-from-uk.html\"}, {\"n\": \"Sweden\", \"s\": \"sweden-visa-from-uk.html\"}, {\"n\": \"Switzerland\", \"s\": \"switzerland-visa-from-uk.html\"}, {\"n\": \"Schengen area\", \"s\": \"schengen-visa.html\"}]"} role="search">
              <label className="v-search-l" data-i="d39c141af1" htmlFor="v-dest">Where are you travelling?</label>
              <div className="v-search-row">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <circle cx="11" cy="11" r="6.5"></circle>
                  <path d="m16 16 4.5 4.5"></path>
                </svg>
                {" "}
                <input aria-autocomplete="list" aria-controls="v-dest-list" aria-expanded="false" data-i-placeholder="e25d751276" id="v-dest" placeholder="Search a country, e.g. France" role="combobox" type="text" />
                {" "}
                <button aria-label="Show visa guide" className="v-search-go" data-i-aria-label="3bf17f3f3a" type="submit">
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <ul className="v-search-list" hidden={true} id="v-dest-list" role="listbox"></ul>
              <div className="v-chips">
                <span data-i="da21eec35a">Popular:</span>
                <a className="v-chip" data-i="e3772ac4b4" href="/france-visa-from-uk">France</a>
                <a className="v-chip" data-i="20a8df9b76" href="/spain-visa-from-uk">Spain</a>
                <a className="v-chip" data-i="ad79ef0f07" href="/italy-visa-from-uk">Italy</a>
                <a className="v-chip" data-i="18bc5956db" href="/usa-visa-from-uk">USA</a>
                <a className="v-chip" data-i="91310be76f" href="/dubai-visa-from-uk">Dubai</a>
              </div>
            </form>
            <ul className="v-trust">
              <li>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                  <circle cx="12" cy="9.5" r="2.5"></circle>
                </svg>
                <span data-i="51ad6d2e47">UK-Based Consultancy</span>
              </li>
              <li>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <path d="M16 6.5A4 4 0 0 0 9 9v11"></path>
                  <path d="M6 20h12M6 13h8"></path>
                </svg>
                <span data-i="425a6bfb4e">Transparent Service Fees</span>
              </li>
              <li>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <path d="M7 3h7l5 5v13H7z"></path>
                  <path d="M14 3v5h5"></path>
                  <path d="m9.5 14 2 2 3.5-4"></path>
                </svg>
                <span data-i="3de91186f4">Personalised Document Support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="v-schengen-panel" hidden={true}>
          <p className="v-sp-k" data-i="e1126642bd">Schengen Area</p>
          <p className="v-sp-t" data-i="3a20c920a1">
            <strong>29</strong>
            {" European Countries"}
          </p>
          <p className="v-sp-d" data-i="eaf864777c">Explore visa assistance for European destinations.</p>
          <a className="v-btn v-btn-red v-btn-sm" href="/schengen-visa">
            <span data-i="1cf04cdd91">Explore Schengen</span>
            {" "}
            <span aria-hidden="true" className="v-arr">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </a>
        </div>
        <a aria-label="Scroll to the next section" className="v-scroll" data-i-aria-label="cc143a205b" href="#intro">
          <span></span>
        </a>
      </section>
      <section aria-labelledby="intro-title" className="v-sec v-ivory" id="intro">
        <div className="v-wrap v-intro">
          <div className="v-intro-media v-reveal">
            <figure className="v-intro-a">
              <img alt="Clouds seen through an aircraft window" className="" decoding="async" height="1125" loading="lazy" sizes="(max-width: 900px) 90vw, 40vw" src={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=900&h=1125"} srcset={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="900" />
            </figure>
            <figure className="v-intro-b">
              <img alt="The Grand Canal in Venice" className="" decoding="async" height="800" loading="lazy" sizes="(max-width: 900px) 50vw, 22vw" src={"https://images.unsplash.com/photo-1545157000-85f257f7b040?auto=format&fit=crop&q=72&w=640&h=800"} srcset={"https://images.unsplash.com/photo-1545157000-85f257f7b040?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1545157000-85f257f7b040?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1545157000-85f257f7b040?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1545157000-85f257f7b040?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="640" />
            </figure>
            <p className="v-intro-tag">
              <span className="notranslate">51.5° N</span>
              {" "}
              <span data-i="4c57f0c88d">London</span>
            </p>
          </div>
          <div className="v-intro-copy">
            <p className="v-eyebrow">
              <span className="v-num notranslate">01</span>
              <span data-i="22fe8a8535">The TravelVista approach</span>
            </p>
            <h2 className="v-h2 v-reveal" data-i="48c09086c6" id="intro-title">
              {"A London team that prepares the "}
              <em>whole journey</em>
              , not just the form.
            </h2>
            <p className="v-reveal" data-i="ba0504fc4a">TravelVista helps people living in the UK apply for visas with confidence. We check what you need, prepare your complete application file, book your appointment and stay with you until the embassy decides.</p>
            <p className="v-reveal" data-i="b1292b9f47">Alongside visas, we arrange the travel around them: flight and hotel reservations, travel insurance guidance and holidays planned around your dates. One team, one conversation, from your first question to your departure.</p>
            <dl className="v-facts v-reveal">
              <div>
                <dt>£89</dt>
                <dd data-i="deec67e16a">Schengen service fee per applicant</dd>
              </div>
              <div>
                <dt data-i="8d6e9b7266">2 hrs</dt>
                <dd data-i="2f40aa5fc7">Reply time in office hours</dd>
              </div>
              <div>
                <dt data-i="0a8dd6adce">7 days</dt>
                <dd data-i="464d7dd682">Open every day of the week</dd>
              </div>
            </dl>
            <a className="v-link" href="/about">
              <span data-i="b7621fa692">More about TravelVista</span>
              {" "}
              <span aria-hidden="true" className="v-arr">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section aria-labelledby="svc-title" className="v-sec v-white" id="services">
        <div className="v-wrap">
          <div className="v-head-split">
            <div>
              <p className="v-eyebrow">
                <span className="v-num notranslate">02</span>
                <span data-i="2d323019d1">Our services</span>
              </p>
              <h2 className="v-h2 v-reveal" data-i="5b877fdee5" id="svc-title">
                {"Every visa and booking, "}
                <em>handled with care.</em>
              </h2>
            </div>
            <p className="v-head-note v-reveal" data-i="426cd31a6f">Choose a service to see what you need. Not sure which visa applies to you? Ask us. Your first consultation is free.</p>
          </div>
          <div className="v-svc-grid">
            <a className="v-svc v-reveal" href="/schengen-visa">
              <span className="v-svc-img">
                <img alt="The Eiffel Tower above the Seine in Paris" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1755817073913-deecc151b211?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">01</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="c873dfeff5">29 European countries · from £89 per applicant</span>
                <span className="v-svc-t" data-i="56a7dd1d48">Schengen Visa Assistance</span>
                <span className="v-svc-d" data-i="6156e6dd39">Complete file, appointment booking and a full document check.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/usa-visa-from-uk">
              <span className="v-svc-img">
                <img alt="Manhattan skyline at golden hour" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1578771607806-a34b27022297?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">02</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="178bfe554d">B1/B2 visitor visa</span>
                <span className="v-svc-t" data-i="9780feb911">USA Visitor Visa</span>
                <span className="v-svc-d" data-i="56e3da7c25">DS-160 form help, documents and interview preparation.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/canada-visa-from-uk">
              <span className="v-svc-img">
                <img alt="Moraine Lake in the Canadian Rockies" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">03</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="6d4f9739cf">{"Visitor visa & Super Visa"}</span>
                <span className="v-svc-t" data-i="673b649f8a">Canada Visitor Visa</span>
                <span className="v-svc-d" data-i="61441a726c">Guidance for visitors, parents and grandparents.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/turkey-visa-from-uk">
              <span className="v-svc-img">
                <img alt="Hot-air balloons over Cappadocia, Turkey" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1733303987597-7c8814ad3768?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1733303987597-7c8814ad3768?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1733303987597-7c8814ad3768?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1733303987597-7c8814ad3768?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1733303987597-7c8814ad3768?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">04</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="96101bbeb6">e-Visa or consulate visa</span>
                <span className="v-svc-t" data-i="3016d3c9be">Turkey Visa Assistance</span>
                <span className="v-svc-d" data-i="d9c2e82d93">We check which route applies to your passport.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/dubai-visa-from-uk">
              <span className="v-svc-img">
                <img alt="Dubai skyline with the Burj Khalifa at night" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1503178427426-413e153f886c?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1503178427426-413e153f886c?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1503178427426-413e153f886c?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1503178427426-413e153f886c?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1503178427426-413e153f886c?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">05</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="2a0874c664">UAE visit visa</span>
                <span className="v-svc-t" data-i="11c0575b60">{"Dubai & UAE Visa"}</span>
                <span className="v-svc-d" data-i="9fcbd578dc">The right UAE visit visa for your trip.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/holidays">
              <span className="v-svc-img">
                <img alt="Sunset above the clouds from an aircraft" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">06</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="210821f243">Planned around your visa</span>
                <span className="v-svc-t" data-i="8f09d92cf8">{"Flight & Hotel Reservations"}</span>
                <span className="v-svc-d" data-i="2980d89a0d">Bookings that match your application dates.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20help%20with%20travel%20insurance%20for%20my%20trip." rel="noopener" target="_blank">
              <span className="v-svc-img">
                <img alt="Passport, camera and map ready for a trip" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">07</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="3a911b7ce5">For visas and trips</span>
                <span className="v-svc-t" data-i="a08d84236e">Travel Insurance</span>
                <span className="v-svc-d" data-i="704f10d781">Guidance on cover that meets your visa’s requirements.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
            <a className="v-svc v-reveal" href="/holidays">
              <span className="v-svc-img">
                <img alt="White and blue houses in Oia, Santorini" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 700px) 80vw, (max-width: 1100px) 45vw, 24vw" src={"https://images.unsplash.com/photo-1563789031959-4c02bcb41319?auto=format&fit=crop&q=72&w=720&h=900"} srcset={"https://images.unsplash.com/photo-1563789031959-4c02bcb41319?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1563789031959-4c02bcb41319?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1563789031959-4c02bcb41319?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1563789031959-4c02bcb41319?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="720" />
              </span>
              {" "}
              <span className="v-svc-num notranslate">08</span>
              {" "}
              <span className="v-svc-body">
                <span className="v-svc-tag" data-i="66c5a4f26d">Tailored trips</span>
                <span className="v-svc-t" data-i="9b6dca3063">International Holiday Packages</span>
                <span className="v-svc-d" data-i="ce660534d1">Holidays planned around your dates and budget.</span>
                <span className="v-svc-go">
                  <span data-i="824d76b124">Learn more</span>
                  {" "}
                  <span aria-hidden="true" className="v-arr">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section aria-labelledby="sch-title" className="v-sec v-deep" id="schengen">
        <div className="v-wrap">
          <div className="v-head-split v-head-dark">
            <div>
              <p className="v-eyebrow v-eyebrow-gold">
                <span className="v-num notranslate">03</span>
                <span data-i="276ee9f6a2">Explore the Schengen region</span>
              </p>
              <h2 className="v-h2 v-reveal" data-i="b017e92a99" id="sch-title">
                {"One visa. "}
                <em>Twenty-nine countries.</em>
              </h2>
            </div>
            <p className="v-head-note v-reveal" data-i="3920c108e2">Select a country on the map to see its visa guidance, the visa centre we use in the UK and the documents you will need.</p>
          </div>
          <div className="v-map-wrap" data-countries={"{\"AT\": {\"n\": \"Austria\", \"cap\": \"Vienna\", \"pl\": \"Salzburg and Innsbruck\", \"s\": \"austria-visa-from-uk.html\", \"vc\": \"\"}, \"BE\": {\"n\": \"Belgium\", \"cap\": \"Brussels\", \"pl\": \"Bruges and Antwerp\", \"s\": \"belgium-visa-from-uk.html\", \"vc\": \"\"}, \"BG\": {\"n\": \"Bulgaria\", \"cap\": \"Sofia\", \"pl\": \"Varna and Plovdiv\", \"s\": \"bulgaria-visa-from-uk.html\", \"vc\": \"\"}, \"HR\": {\"n\": \"Croatia\", \"cap\": \"Zagreb\", \"pl\": \"Dubrovnik and Split\", \"s\": \"croatia-visa-from-uk.html\", \"vc\": \"\"}, \"CZ\": {\"n\": \"Czech Republic\", \"cap\": \"Prague\", \"pl\": \"Brno and Český Krumlov\", \"s\": \"czech-republic-visa-from-uk.html\", \"vc\": \"\"}, \"DK\": {\"n\": \"Denmark\", \"cap\": \"Copenhagen\", \"pl\": \"Aarhus and Odense\", \"s\": \"denmark-visa-from-uk.html\", \"vc\": \"\"}, \"EE\": {\"n\": \"Estonia\", \"cap\": \"Tallinn\", \"pl\": \"Tartu and Pärnu\", \"s\": \"estonia-visa-from-uk.html\", \"vc\": \"\"}, \"FI\": {\"n\": \"Finland\", \"cap\": \"Helsinki\", \"pl\": \"Lapland and Turku\", \"s\": \"finland-visa-from-uk.html\", \"vc\": \"\"}, \"FR\": {\"n\": \"France\", \"cap\": \"Paris\", \"pl\": \"Nice and Lyon\", \"s\": \"france-visa-from-uk.html\", \"vc\": \"TLScontact\"}, \"DE\": {\"n\": \"Germany\", \"cap\": \"Berlin\", \"pl\": \"Munich and Frankfurt\", \"s\": \"germany-visa-from-uk.html\", \"vc\": \"\"}, \"GR\": {\"n\": \"Greece\", \"cap\": \"Athens\", \"pl\": \"Santorini and Mykonos\", \"s\": \"greece-visa-from-uk.html\", \"vc\": \"\"}, \"HU\": {\"n\": \"Hungary\", \"cap\": \"Budapest\", \"pl\": \"Lake Balaton and Debrecen\", \"s\": \"hungary-visa-from-uk.html\", \"vc\": \"\"}, \"IS\": {\"n\": \"Iceland\", \"cap\": \"Reykjavík\", \"pl\": \"the Golden Circle and the Blue Lagoon\", \"s\": \"iceland-visa-from-uk.html\", \"vc\": \"\"}, \"IT\": {\"n\": \"Italy\", \"cap\": \"Rome\", \"pl\": \"Venice and Milan\", \"s\": \"italy-visa-from-uk.html\", \"vc\": \"VFS Global\"}, \"LV\": {\"n\": \"Latvia\", \"cap\": \"Riga\", \"pl\": \"Jūrmala and Sigulda\", \"s\": \"latvia-visa-from-uk.html\", \"vc\": \"\"}, \"LI\": {\"n\": \"Liechtenstein\", \"cap\": \"Vaduz\", \"pl\": \"Malbun\", \"s\": \"liechtenstein-visa-from-uk.html\", \"vc\": \"\"}, \"LT\": {\"n\": \"Lithuania\", \"cap\": \"Vilnius\", \"pl\": \"Kaunas and Trakai\", \"s\": \"lithuania-visa-from-uk.html\", \"vc\": \"\"}, \"LU\": {\"n\": \"Luxembourg\", \"cap\": \"Luxembourg City\", \"pl\": \"Vianden\", \"s\": \"luxembourg-visa-from-uk.html\", \"vc\": \"\"}, \"MT\": {\"n\": \"Malta\", \"cap\": \"Valletta\", \"pl\": \"Gozo and Mdina\", \"s\": \"malta-visa-from-uk.html\", \"vc\": \"\"}, \"NL\": {\"n\": \"Netherlands\", \"cap\": \"Amsterdam\", \"pl\": \"Rotterdam and The Hague\", \"s\": \"netherlands-visa-from-uk.html\", \"vc\": \"\"}, \"NO\": {\"n\": \"Norway\", \"cap\": \"Oslo\", \"pl\": \"Bergen and Tromsø\", \"s\": \"norway-visa-from-uk.html\", \"vc\": \"\"}, \"PL\": {\"n\": \"Poland\", \"cap\": \"Warsaw\", \"pl\": \"Kraków and Gdańsk\", \"s\": \"poland-visa-from-uk.html\", \"vc\": \"\"}, \"PT\": {\"n\": \"Portugal\", \"cap\": \"Lisbon\", \"pl\": \"Porto and the Algarve\", \"s\": \"portugal-visa-from-uk.html\", \"vc\": \"\"}, \"RO\": {\"n\": \"Romania\", \"cap\": \"Bucharest\", \"pl\": \"Brașov and Cluj-Napoca\", \"s\": \"romania-visa-from-uk.html\", \"vc\": \"\"}, \"SK\": {\"n\": \"Slovakia\", \"cap\": \"Bratislava\", \"pl\": \"the High Tatras and Košice\", \"s\": \"slovakia-visa-from-uk.html\", \"vc\": \"\"}, \"SI\": {\"n\": \"Slovenia\", \"cap\": \"Ljubljana\", \"pl\": \"Lake Bled and Piran\", \"s\": \"slovenia-visa-from-uk.html\", \"vc\": \"\"}, \"ES\": {\"n\": \"Spain\", \"cap\": \"Madrid\", \"pl\": \"Barcelona and Málaga\", \"s\": \"spain-visa-from-uk.html\", \"vc\": \"BLS International\"}, \"SE\": {\"n\": \"Sweden\", \"cap\": \"Stockholm\", \"pl\": \"Gothenburg and Malmö\", \"s\": \"sweden-visa-from-uk.html\", \"vc\": \"\"}, \"CH\": {\"n\": \"Switzerland\", \"cap\": \"Bern\", \"pl\": \"Zurich, Geneva and Interlaken\", \"s\": \"switzerland-visa-from-uk.html\", \"vc\": \"\"}}"}>
            <div className="v-map">
              <svg aria-labelledby="map-t" role="img" viewBox="0 0 1000 1290">
                <title id="map-t">Map of the 29 Schengen countries. Select a country for details.</title>
                {" "}
                <defs>
                  <pattern height="9" id="v-dots" patternunits="userSpaceOnUse" width="9">
                    <circle cx="1.5" cy="1.5" fill="rgba(198,167,123,.16)" r="1.1"></circle>
                  </pattern>
                </defs>
                {" "}
                <rect fill="url(#v-dots)" height="1290" width="1000"></rect>
                {" "}
                <path className="v-mc" d="M585.3 833.8L586.8 826.9L585.1 825.2L589.0 823.1L596.6 830.7L596.3 833.5L599.5 830.4L600.7 824.2L608.0 825.2L610.8 829.7L622.4 823.1L630.2 821.8L630.7 818.3L635.3 821.1L638.6 820.0L640.2 821.1L640.8 824.5L644.4 826.6L645.1 820.4L642.4 818.3L643.2 812.5L640.0 805.9L640.8 803.2L650.5 796.3L652.4 788.7L656.4 790.1L658.0 782.2L661.9 788.0L672.7 788.0L674.4 782.9L676.6 782.2L677.8 774.3L691.9 779.1L695.9 782.9L701.2 783.2L704.1 781.2L709.8 784.6L711.0 788.4L709.5 795.3L714.4 808.3L712.4 814.2L713.1 818.7L708.3 819.7L704.9 817.3L702.0 820.0L705.8 822.1L706.4 824.5L705.4 827.6L702.4 829.3L702.0 835.5L703.2 839.0L702.5 842.8L700.5 843.1L695.6 848.6L694.2 854.1L690.8 853.1L685.4 855.8L676.1 856.5L670.3 863.8L635.3 854.5L629.8 845.2L630.0 840.4L623.2 843.4L614.2 843.8L610.0 850.7L601.4 847.9L599.2 843.4L595.4 848.3L591.2 845.2L590.5 842.8L586.1 841.0L586.6 839.3L585.3 833.8Z" data-c="AT" tabIndex="-1">
                  <title>Austria</title>
                </path>
                <path className="v-mc" d="M495.3 692.0L497.8 693.1L498.0 690.7L500.0 689.3L502.4 691.0L504.4 688.6L505.9 691.7L509.0 689.3L512.0 695.8L516.6 695.5L522.0 700.3L521.2 707.2L519.3 711.0L521.2 713.7L525.3 714.1L529.5 719.2L528.3 720.9L528.8 722.7L531.2 724.4L531.5 728.9L528.5 732.0L527.5 735.7L525.1 734.0L521.0 742.6L520.8 746.4L523.4 751.9L522.4 755.4L517.1 756.7L513.2 750.9L506.3 747.1L504.9 741.2L506.1 735.1L504.6 735.1L500.8 741.2L494.6 741.2L493.9 739.9L494.7 736.8L493.7 735.1L494.4 731.3L492.2 728.9L486.3 729.2L484.6 723.4L479.2 721.6L476.4 713.0L471.9 715.4L467.8 709.6L466.6 702.0L478.3 693.4L480.5 692.4L481.9 696.9L484.4 695.5L489.8 698.2L494.4 694.8L495.3 692.0Z" data-c="BE" tabIndex="-1">
                  <title>Belgium</title>
                </path>
                <path className="v-mc" d="M898.5 1016.2L890.3 1017.9L885.4 1012.1L874.9 1016.2L869.8 1024.8L866.3 1024.5L865.6 1026.5L866.9 1031.7L866.6 1036.2L863.1 1038.9L851.7 1041.3L847.3 1037.2L843.6 1037.2L838.8 1030.3L831.5 1031.3L830.7 1033.8L824.4 1036.2L812.2 1037.9L813.6 1024.1L810.8 1015.5L806.4 1011.4L802.4 1004.5L805.4 1000.0L804.6 996.6L804.6 986.3L808.6 984.9L813.2 974.2L806.1 965.3L802.9 953.9L803.7 946.0L806.8 943.6L808.5 938.1L814.1 943.6L811.4 948.1L812.2 952.2L817.5 950.8L855.9 957.7L861.4 954.3L868.1 946.0L882.9 940.5L888.6 945.7L893.9 947.7L896.3 946.7L899.2 952.5L902.0 954.3L908.3 955.3L907.8 963.5L906.1 967.3L900.5 967.0L897.1 974.2L896.4 989.4L894.1 990.7L889.5 999.0L893.4 1003.1L898.5 1016.2Z" data-c="BG" tabIndex="-1">
                  <title>Bulgaria</title>
                </path>
                <path className="v-mc" d="M653.9 894.0L659.0 897.1L660.8 894.4L667.3 895.4L670.7 889.2L674.4 895.4L683.7 895.8L682.7 892.0L684.1 889.6L682.7 886.8L689.0 882.3L689.3 875.8L688.0 872.7L688.8 870.6L696.1 864.8L698.8 864.8L699.3 860.0L702.2 859.6L707.6 863.1L717.1 877.5L725.6 884.7L734.9 886.1L737.8 884.4L740.0 880.6L744.2 879.9L743.1 883.0L744.9 889.2L744.4 891.3L746.8 894.0L745.9 898.2L752.5 905.4L748.1 905.0L746.8 907.1L747.3 914.3L745.9 914.7L745.9 916.4L743.1 916.1L740.0 909.2L728.6 907.1L725.6 909.2L722.9 906.4L720.3 907.8L714.1 906.1L710.5 902.3L708.3 905.0L703.9 904.4L699.8 911.6L694.2 904.7L691.4 905.7L690.5 919.8L696.6 928.4L700.0 942.2L713.2 962.9L716.4 965.3L716.8 970.1L722.9 980.4L721.7 982.8L710.2 967.3L701.5 962.2L694.7 962.9L693.9 958.0L686.4 949.4L681.2 940.5L680.0 937.4L685.9 937.1L677.6 925.7L676.3 921.9L675.6 909.2L670.3 901.6L666.3 900.2L660.5 917.4L658.6 917.4L654.7 908.1L652.9 895.4L653.9 894.0Z M705.9 980.8L713.4 982.1L715.1 983.5L713.4 983.9L707.5 983.9L705.9 980.8Z M715.3 976.3L706.4 976.6L701.2 973.5L715.3 976.3Z M708.3 971.5L703.2 970.8L702.0 969.7L702.5 967.3L709.2 968.7L710.0 970.1L708.3 971.5Z M674.7 912.6L672.7 913.3L668.5 908.5L670.7 904.0L674.7 912.6Z M675.1 920.2L675.6 921.9L672.5 919.8L672.4 918.1L673.7 917.1L675.1 920.2Z M681.2 934.6L676.4 929.5L673.6 922.3L682.0 934.3L681.2 934.6Z M681.2 949.1L680.3 949.4L675.8 940.5L681.2 949.1Z M684.2 947.4L685.4 949.8L683.2 947.7L682.5 946.0L684.2 947.4Z M669.3 923.6L668.1 923.3L666.3 915.4L666.8 911.2L665.9 906.8L666.6 906.4L669.0 913.0L669.3 923.6Z M722.2 988.7L724.4 991.1L718.5 987.6L722.2 988.7Z M736.3 995.9L737.6 1000.4L725.9 987.6L712.5 980.1L715.6 979.7L724.1 985.9L723.2 984.2L725.4 984.2L736.3 995.9Z" data-c="HR" tabIndex="-1">
                  <title>Croatia</title>
                </path>
                <path className="v-mc" d="M742.9 756.7L739.0 757.4L731.5 765.3L730.2 771.9L724.7 778.1L720.0 780.1L714.1 779.8L711.0 788.0L709.8 784.6L704.1 781.2L701.2 783.2L695.9 782.9L691.9 779.1L677.8 774.3L676.6 782.2L674.4 782.9L672.7 788.0L661.9 788.0L653.4 775.7L651.5 775.7L642.7 762.9L639.8 761.5L633.7 748.8L635.8 743.3L630.7 736.4L628.8 729.2L631.9 733.7L636.4 726.4L643.1 725.8L644.1 724.0L652.0 718.5L653.6 715.8L667.3 708.9L665.8 704.4L670.3 705.8L671.4 710.3L673.2 711.7L677.6 709.2L677.8 705.1L682.4 706.8L684.1 712.0L690.3 714.4L695.1 718.9L701.0 718.5L702.0 720.3L701.4 722.0L698.5 725.4L705.8 736.4L711.7 731.6L709.8 725.1L719.0 731.3L723.7 729.2L724.4 732.0L721.9 734.4L722.5 735.7L726.8 740.9L729.3 738.5L738.3 744.0L739.0 748.1L742.5 753.3L742.9 756.7Z" data-c="CZ" tabIndex="-1">
                  <title>Czech Republic</title>
                </path>
                <path className="v-mc" d="M636.8 540.6L636.3 545.1L632.5 547.5L630.8 551.6L633.7 554.4L634.1 557.8L628.6 561.3L628.0 574.3L624.7 575.7L622.7 570.6L621.4 561.3L615.1 560.9L613.1 556.4L613.4 551.6L611.4 546.1L609.8 543.0L615.6 542.0L618.3 535.5L620.8 534.8L621.9 536.5L621.9 542.7L624.1 543.7L626.1 536.8L624.9 534.4L630.8 529.3L636.9 531.3L636.1 536.1L636.8 540.6Z M588.8 573.7L580.5 574.3L570.7 571.2L569.0 563.3L570.7 562.3L569.8 553.4L561.5 547.2L562.7 534.1L561.4 528.6L562.0 512.4L570.7 516.2L571.9 511.7L574.4 508.3L577.5 506.2L579.7 509.3L580.5 498.6L576.1 498.3L572.4 508.6L567.3 510.7L563.9 507.6L564.2 504.1L569.8 495.2L581.4 493.8L585.6 491.1L592.5 479.0L603.6 473.5L601.0 477.6L602.4 483.5L602.0 490.7L598.1 499.0L598.0 512.1L601.5 515.5L607.6 515.5L609.0 518.3L607.8 523.1L606.1 525.1L602.4 526.5L599.5 524.8L596.3 537.9L591.7 538.9L593.6 541.7L586.3 550.9L587.6 558.5L584.1 566.4L588.0 567.8L588.8 573.7Z M604.1 546.8L607.1 556.8L606.4 563.3L603.9 566.1L600.7 566.1L592.7 560.6L590.8 555.4L590.8 549.9L598.1 546.8L601.9 548.5L604.1 546.8Z M616.3 571.6L622.7 574.3L623.2 578.8L620.2 579.5L618.0 580.5L610.8 575.7L611.2 569.9L614.6 569.5L616.3 571.6Z M605.6 576.4L603.7 573.0L607.8 566.1L608.8 562.3L608.8 565.7L605.6 576.4Z M636.4 568.8L630.2 571.6L629.2 570.9L630.8 568.2L631.7 565.7L636.4 568.8Z M638.5 547.2L636.4 548.5L635.9 546.5L636.8 545.4L637.6 544.4L638.5 547.2Z M601.5 573.0L599.0 572.6L596.9 569.9L597.8 569.5L601.5 573.0Z M594.2 571.6L589.8 570.9L589.5 565.4L593.2 568.2L594.2 571.6Z M603.6 541.0L602.2 541.0L602.0 534.8L602.5 533.7L604.4 537.5L603.6 541.0Z M611.0 490.4L608.0 490.0L611.7 487.6L613.1 488.0L611.0 490.4Z M679.5 567.1L672.5 564.4L673.2 559.5L674.1 557.5L680.2 563.0L679.5 567.1Z" data-c="DK" tabIndex="-1">
                  <title>Denmark</title>
                </path>
                <path className="v-mc" d="M887.3 480.7L880.8 478.0L872.2 480.4L864.2 470.1L852.2 462.8L851.9 464.6L849.3 462.5L835.9 469.0L839.5 452.5L836.3 451.5L832.4 455.3L826.6 452.2L822.2 441.9L825.1 437.4L822.0 437.4L820.8 432.9L822.2 430.2L821.5 429.1L822.4 426.4L822.0 423.6L831.9 420.2L831.4 417.4L836.9 414.0L854.9 412.3L856.3 410.9L856.1 408.1L874.9 411.2L880.8 414.7L896.4 416.0L898.5 413.6L900.8 417.4L896.6 420.5L894.2 428.4L888.6 437.4L890.3 449.8L889.8 457.0L892.7 467.0L894.6 469.0L890.5 471.5L887.3 480.7Z M807.1 443.2L812.9 443.6L819.0 449.1L815.8 449.4L809.0 456.7L802.9 457.0L801.2 459.1L799.2 465.6L796.6 467.0L796.4 464.6L799.8 459.1L794.6 455.6L794.1 454.2L796.3 451.1L794.2 447.4L801.2 447.0L802.2 444.6L807.1 443.2Z M812.2 436.0L810.8 437.7L809.7 436.4L807.8 440.1L805.8 440.8L804.6 440.1L803.6 435.0L797.6 432.2L804.4 431.2L807.6 427.1L809.0 429.8L812.0 430.5L813.7 436.0L812.2 436.0Z M819.3 445.6L814.6 443.6L816.3 441.2L819.2 442.2L819.3 445.6Z" data-c="EE" tabIndex="-1">
                  <title>Estonia</title>
                </path>
                <path className="v-mc" d="M833.1 195.8L830.5 187.2L825.4 180.7L825.4 172.8L828.3 169.3L830.3 161.4L824.4 150.4L824.2 146.9L826.8 143.5L825.9 140.4L821.4 139.0L822.7 133.9L822.0 124.9L824.4 122.2L819.0 116.0L816.6 115.6L815.3 111.5L811.0 107.7L796.6 102.5L778.3 89.1L778.0 86.7L773.2 84.7L780.8 84.7L781.9 83.3L780.8 78.8L789.7 76.7L801.7 90.8L803.6 95.7L819.0 98.1L830.5 92.9L846.4 100.1L849.0 98.4L851.7 92.2L857.3 89.8L860.2 86.4L860.5 76.4L864.6 63.7L873.4 54.7L883.6 54.7L896.4 49.6L905.3 57.8L917.6 63.0L920.8 69.9L912.7 79.8L912.4 81.9L914.6 85.3L905.3 89.5L911.4 91.5L906.3 103.6L910.0 113.9L921.0 118.4L931.9 131.1L931.2 135.9L919.3 151.4L916.3 158.6L930.5 186.2L933.7 196.5L933.7 200.3L927.5 202.0L929.2 204.1L927.6 207.5L927.5 212.0L925.6 215.1L929.0 216.8L929.3 218.5L925.4 223.7L927.1 228.8L934.1 233.0L934.2 236.1L932.0 238.8L934.1 245.4L940.8 251.2L940.7 257.4L935.8 265.0L932.2 266.7L933.1 268.8L952.2 285.3L958.1 296.3L952.4 310.4L919.5 351.4L892.7 378.5L889.2 379.6L884.7 377.2L873.4 381.6L874.1 374.1L870.8 381.3L863.6 379.6L865.1 384.0L860.3 386.5L858.6 384.4L840.7 392.0L838.1 395.1L821.4 396.1L816.6 401.2L812.9 401.6L816.9 395.1L811.4 388.2L810.0 393.0L804.4 394.7L804.1 390.2L806.6 387.8L805.3 386.1L806.4 382.7L794.1 378.2L793.2 375.4L790.0 377.5L787.1 375.1L785.8 362.4L788.3 351.7L788.3 344.8L789.3 344.8L788.1 342.4L790.0 341.0L786.3 329.7L784.1 327.3L785.4 317.3L782.5 312.8L781.5 305.6L782.0 301.5L787.5 294.2L787.6 291.5L790.7 291.1L788.8 285.3L794.9 285.3L802.0 281.8L800.7 277.4L802.5 277.4L802.0 275.3L803.4 275.6L805.6 272.5L805.6 270.1L809.5 269.1L823.7 256.7L824.6 253.6L835.3 240.2L840.0 230.6L846.4 227.8L852.4 228.5L851.4 225.4L853.7 223.3L851.9 218.9L853.4 207.2L842.0 200.6L840.3 197.5L841.2 194.1L837.3 196.8L833.1 195.8Z M796.4 384.0L793.6 382.7L793.7 379.6L796.4 384.0Z M783.4 284.2L786.8 283.9L785.1 286.3L782.2 285.6L781.0 282.9L783.4 284.2Z M799.5 383.0L803.7 385.4L801.9 386.5L802.7 389.9L801.0 389.9L798.0 385.8L799.5 383.0Z M787.3 377.5L784.7 379.2L783.2 375.1L784.2 373.7L787.3 377.5Z M793.7 390.9L791.5 392.0L791.7 389.9L794.2 388.9L793.7 390.9Z M790.3 392.0L788.0 391.3L789.3 389.9L790.3 389.9L790.3 392.0Z M844.9 224.0L840.3 224.4L840.3 222.3L843.7 220.6L847.5 222.3L844.9 224.0Z" data-c="FI" tabIndex="-1">
                  <title>Finland</title>
                </path>
                <path className="v-mc" d="M584.4 987.3L584.1 992.5L585.3 996.2L585.8 1009.7L583.1 1017.6L582.5 1026.2L579.5 1036.2L573.1 1029.3L574.4 1025.5L571.5 1023.4L571.9 1017.6L569.8 1017.6L571.2 1013.8L569.0 1007.6L570.7 1005.5L569.0 1002.8L571.4 996.2L578.6 990.0L581.7 990.7L582.4 980.1L584.1 981.4L584.4 987.3Z M552.9 822.8L548.1 828.3L544.7 826.2L541.9 827.6L540.7 829.7L542.4 832.1L536.8 842.1L533.2 844.8L532.4 851.7L528.1 856.5L526.6 861.7L527.5 864.4L527.1 867.9L524.9 870.3L525.6 872.7L528.8 871.0L530.0 868.9L529.3 866.2L532.7 862.7L538.6 863.4L539.3 867.9L538.5 872.0L542.7 879.9L539.2 884.1L538.8 886.5L545.1 898.2L543.7 903.7L536.1 907.8L538.0 914.7L542.2 917.8L542.9 921.6L539.7 928.8L540.2 932.9L544.9 939.5L548.6 941.9L553.2 940.8L553.9 943.6L550.5 951.2L550.7 954.3L545.4 958.0L533.7 974.9L527.3 978.3L522.2 977.3L515.4 972.8L513.9 968.7L509.7 968.0L509.5 965.6L503.6 968.0L495.3 964.2L492.4 960.5L490.0 961.5L479.0 974.2L475.4 983.9L476.1 994.9L478.1 1000.4L472.7 999.3L469.0 1001.7L468.6 1003.5L461.0 1000.7L457.5 1002.8L452.5 998.0L452.7 994.5L449.2 993.1L448.0 994.5L446.6 991.4L436.8 986.3L435.1 986.3L434.4 991.4L423.1 991.4L418.6 986.6L413.7 987.6L410.8 982.8L403.7 980.1L401.7 977.3L399.5 979.4L398.6 978.3L399.8 972.5L393.9 969.7L393.4 966.6L396.1 965.6L398.5 961.5L402.7 927.1L405.4 922.6L404.2 920.2L402.7 923.3L405.4 893.7L409.7 898.9L412.0 908.8L414.4 911.9L412.9 908.8L411.4 898.9L403.4 887.5L403.2 885.4L406.3 886.5L404.2 866.9L393.4 859.6L388.3 847.6L389.5 841.7L386.4 837.6L388.0 834.2L394.2 835.5L390.3 832.4L381.4 832.4L380.8 830.0L382.5 826.9L376.8 825.6L377.5 822.5L376.4 821.4L371.7 821.8L370.2 819.4L357.6 814.2L350.7 814.9L348.6 809.7L344.4 807.3L350.3 802.8L346.1 798.7L351.9 798.4L349.3 796.0L343.7 796.3L343.1 793.2L343.7 790.1L346.9 787.4L360.8 784.3L369.0 779.8L372.9 781.5L378.1 790.1L382.2 786.3L388.5 786.3L389.8 788.7L391.4 784.6L392.9 787.0L400.3 786.3L397.3 781.2L396.9 767.4L393.1 757.4L392.2 750.9L402.4 750.9L402.9 757.4L404.4 760.9L421.0 764.0L430.8 758.8L425.9 756.7L426.9 750.2L447.6 736.8L450.7 731.3L450.0 729.9L451.0 711.7L456.1 705.8L466.6 702.0L467.8 709.6L470.5 714.1L471.9 715.4L476.4 713.0L479.2 721.6L484.6 723.4L486.3 729.2L490.7 728.2L494.4 731.3L493.7 735.1L494.7 736.8L493.9 739.9L494.6 741.2L500.8 741.2L504.6 735.1L506.1 735.1L504.9 741.2L506.3 747.1L513.2 750.9L517.1 756.7L521.9 755.7L525.6 758.8L529.5 757.4L534.6 760.5L537.8 768.8L540.5 767.1L543.1 770.5L550.0 769.1L552.7 772.2L561.5 775.3L561.7 778.1L556.6 786.7L552.9 803.2L551.4 820.0L552.9 822.8Z M403.7 881.0L403.1 883.7L400.2 876.5L403.7 881.0Z" data-c="FR" tabIndex="-1">
                  <title>France</title>
                </path>
                <path className="v-mc" d="M585.1 825.2L579.3 820.0L574.2 820.4L569.0 816.3L566.1 819.4L568.8 821.8L566.6 822.8L552.0 822.1L551.4 820.0L552.9 803.2L556.6 786.7L561.7 778.1L561.5 775.3L552.7 772.2L550.0 769.1L543.1 770.5L540.5 767.1L537.8 768.8L534.6 760.5L531.4 758.8L533.7 746.8L529.8 744.3L527.3 736.8L528.5 732.0L531.5 728.9L531.2 724.4L528.5 722.0L529.5 719.2L525.3 714.1L526.3 708.6L523.1 704.4L527.6 700.3L526.8 697.9L528.6 691.3L528.6 688.6L524.6 677.9L528.3 675.2L531.5 677.2L538.0 674.1L539.0 671.7L537.6 668.3L542.0 663.8L543.1 658.0L537.1 652.8L538.1 649.4L542.5 649.4L545.4 637.7L545.8 627.0L543.2 623.6L545.9 613.9L559.5 612.9L562.2 618.0L561.2 620.5L563.6 621.1L564.9 615.6L567.6 619.1L567.6 623.2L568.3 609.8L569.8 606.3L579.8 607.0L586.3 616.0L589.5 617.7L586.9 616.0L581.5 607.0L575.9 604.6L574.6 602.2L574.7 593.3L570.3 592.2L570.3 588.5L575.4 586.0L575.6 583.6L570.8 575.0L570.7 571.2L580.5 574.3L588.8 573.7L593.6 579.2L593.7 582.3L591.0 586.0L595.6 585.4L596.8 588.1L599.3 587.1L605.6 591.2L610.3 589.1L611.2 592.6L610.3 596.0L606.9 599.5L607.8 601.9L616.9 603.9L623.7 597.4L629.0 596.4L636.9 586.0L644.6 588.1L646.6 592.6L651.7 597.4L656.4 597.1L658.8 607.4L665.4 611.5L668.0 629.1L663.2 640.8L671.5 652.8L670.3 658.7L673.7 668.3L671.2 676.9L673.6 683.8L673.4 687.6L676.4 689.6L678.3 696.9L674.1 711.7L671.4 710.3L670.3 705.8L666.4 704.1L665.3 705.5L667.3 708.9L653.6 715.8L651.5 719.2L644.4 723.0L643.1 725.8L636.4 726.4L631.9 733.7L628.6 729.5L630.7 736.4L635.8 743.3L633.7 748.8L638.6 760.2L642.7 762.9L650.8 775.0L653.4 775.7L658.0 782.2L656.4 790.1L652.4 788.7L650.5 796.3L640.0 804.9L643.2 812.5L642.4 818.3L645.1 820.4L644.4 826.6L640.8 824.5L640.2 821.1L638.6 820.0L635.3 821.1L630.7 818.3L630.2 821.8L622.4 823.1L610.8 829.7L608.0 825.2L600.7 824.2L599.5 830.4L596.3 833.5L596.6 830.7L594.4 829.7L592.7 825.9L589.0 823.1L585.1 825.2Z M656.1 589.1L656.1 592.6L652.2 590.5L650.3 593.6L646.8 589.5L647.1 583.6L648.0 582.3L648.1 580.2L651.2 578.1L655.3 582.9L653.9 586.4L656.1 589.1Z M664.6 603.9L664.6 606.7L659.8 606.3L659.7 602.2L658.1 600.2L658.1 597.7L664.6 603.9Z M614.9 587.8L612.4 587.8L610.3 586.0L610.8 584.3L614.1 585.0L614.9 587.8Z M564.6 575.0L564.4 570.9L566.1 565.7L566.9 566.1L565.9 568.2L565.8 571.2L570.0 571.6L565.3 573.0L564.6 575.0Z M569.3 577.8L566.9 578.5L566.4 576.8L569.3 577.8Z" data-c="DE" tabIndex="-1">
                  <title>Germany</title>
                </path>
                <path className="v-mc" d="M895.9 1202.7L894.7 1201.7L895.6 1199.6L895.9 1202.7Z M773.1 1139.7L773.4 1143.5L776.1 1148.0L775.9 1149.7L771.5 1149.0L770.3 1144.9L768.6 1146.6L769.7 1141.1L771.5 1141.5L772.2 1136.3L773.1 1139.7Z M777.8 1159.4L779.5 1162.8L778.1 1162.1L776.6 1164.5L773.4 1159.0L774.4 1155.2L777.8 1159.4Z M774.4 1131.8L772.0 1132.9L772.7 1126.7L774.4 1123.9L774.4 1131.8Z M775.6 1141.5L773.7 1138.7L773.2 1136.3L774.1 1136.3L775.6 1141.5Z M764.1 1103.6L764.4 1105.3L760.7 1102.6L756.8 1093.3L757.8 1090.9L761.4 1091.9L760.2 1095.3L762.0 1102.2L764.1 1103.6Z M820.7 1119.8L822.4 1124.9L832.7 1130.5L835.3 1145.2L840.5 1148.7L840.3 1152.1L839.0 1153.9L834.1 1148.7L831.2 1139.4L824.6 1137.7L824.1 1133.9L815.9 1123.6L811.5 1123.6L818.0 1117.4L820.7 1119.8Z M826.8 1114.6L824.7 1115.0L823.6 1111.2L826.8 1114.6Z M828.6 1112.9L827.8 1113.2L828.6 1110.5L830.0 1109.1L828.6 1112.9Z M842.0 1124.9L839.7 1125.6L840.0 1124.3L838.3 1122.2L838.8 1119.1L842.0 1124.9Z M843.6 1063.0L841.5 1064.0L839.2 1061.6L841.0 1056.8L843.6 1058.9L843.6 1063.0Z M822.9 1155.2L821.0 1154.9L821.7 1153.2L822.9 1155.2Z M814.4 1215.1L814.2 1216.5L812.5 1215.4L812.4 1208.9L815.3 1213.0L814.4 1215.1Z M884.2 1239.9L883.7 1241.9L883.1 1240.2L882.5 1235.4L884.1 1228.9L885.1 1227.8L884.1 1234.4L885.3 1239.5L884.2 1239.9Z M881.7 1188.6L880.0 1189.3L879.5 1184.1L880.8 1185.5L882.0 1187.2L881.7 1188.6Z M880.5 1196.5L882.4 1192.7L885.8 1190.7L887.3 1191.7L880.5 1196.5Z M856.8 1188.3L855.3 1189.6L853.6 1184.8L856.4 1180.3L857.5 1182.1L856.8 1188.3Z M852.2 1184.8L849.7 1187.2L850.0 1183.4L852.0 1182.4L852.2 1184.8Z M855.6 1208.2L853.7 1209.3L854.4 1206.5L855.6 1208.2Z M853.9 1198.6L851.9 1195.5L854.4 1196.9L853.9 1198.6Z M878.5 1159.4L882.0 1160.7L882.4 1162.8L877.8 1164.5L874.2 1162.5L878.5 1159.4Z M864.9 1169.0L864.4 1167.6L865.9 1165.2L870.0 1164.2L868.0 1167.6L864.9 1169.0Z M862.0 1194.5L860.0 1194.5L861.9 1192.4L864.4 1189.3L865.6 1190.7L862.0 1194.5Z M872.2 1201.3L870.0 1204.1L869.0 1201.0L870.2 1201.7L870.7 1199.6L872.2 1201.3Z M836.6 1167.3L835.4 1169.0L835.9 1163.8L837.3 1164.9L836.6 1167.3Z M838.0 1175.5L836.9 1176.6L837.3 1171.7L838.6 1173.1L838.0 1175.5Z M839.7 1195.5L839.5 1198.2L836.1 1198.9L836.6 1196.2L839.7 1195.5Z M846.4 1170.4L846.4 1173.8L845.8 1173.1L846.4 1170.4Z M847.3 1161.1L846.8 1163.5L842.7 1156.3L842.4 1154.2L843.4 1153.2L846.8 1156.3L847.3 1161.1Z M851.9 1166.6L850.2 1168.3L847.5 1163.8L851.9 1166.6Z M842.7 1190.0L842.0 1186.5L843.4 1189.0L842.7 1190.0Z M865.9 1145.2L864.4 1147.3L862.4 1143.5L864.2 1140.8L861.9 1133.2L864.6 1132.2L867.1 1134.2L867.1 1142.5L865.9 1145.2Z M871.4 1107.0L871.0 1109.1L874.2 1114.6L874.2 1117.4L872.7 1116.0L873.7 1118.7L867.1 1117.4L866.3 1115.7L868.6 1112.9L869.0 1111.5L867.5 1111.9L865.6 1115.0L862.9 1113.6L861.7 1111.5L862.9 1108.4L865.9 1108.1L867.3 1105.7L870.3 1105.3L871.4 1107.0Z M859.0 1069.2L857.1 1070.2L855.1 1067.5L857.1 1066.1L859.0 1069.2Z M854.9 1084.7L853.6 1090.5L851.9 1090.2L851.7 1087.8L849.7 1089.8L848.5 1089.2L848.5 1084.0L852.2 1085.4L855.1 1083.0L854.9 1084.7Z M854.2 1172.8L852.7 1173.1L853.4 1169.7L855.3 1171.1L854.2 1172.8Z M839.5 1182.8L837.6 1182.8L838.6 1180.0L839.5 1182.8Z M895.6 1224.1L893.4 1223.0L894.2 1219.2L893.4 1215.8L896.8 1209.6L902.2 1206.8L902.2 1208.9L899.5 1217.2L899.8 1219.2L897.8 1219.9L895.6 1224.1Z M828.0 1237.8L833.4 1235.4L833.9 1237.5L832.4 1239.2L834.9 1239.9L835.8 1243.7L842.7 1241.3L855.6 1245.4L859.8 1244.0L860.2 1251.2L860.8 1251.9L867.3 1248.5L869.3 1245.4L868.6 1254.3L867.3 1255.4L844.1 1258.5L842.5 1253.0L838.3 1250.5L823.6 1247.1L823.2 1237.8L824.9 1238.5L826.1 1233.7L828.0 1237.8Z M869.8 1024.8L874.2 1028.9L874.9 1035.8L870.0 1041.3L870.3 1049.6L866.3 1058.2L849.2 1049.9L843.9 1054.4L838.6 1051.3L831.9 1059.2L826.4 1058.2L826.1 1060.6L828.5 1065.4L827.6 1067.5L828.3 1069.5L834.1 1072.6L836.3 1078.8L829.0 1071.6L825.9 1072.6L830.0 1080.2L830.5 1083.3L829.7 1085.0L824.7 1076.4L820.8 1075.0L820.2 1076.4L821.5 1081.6L825.1 1085.4L820.2 1084.3L818.8 1076.4L811.9 1070.2L811.0 1067.1L812.2 1063.7L807.3 1066.8L806.6 1082.6L810.8 1090.9L813.2 1099.1L817.5 1106.0L819.2 1112.2L816.1 1115.0L816.3 1109.5L812.2 1107.7L810.8 1109.5L811.7 1112.6L813.1 1117.4L814.7 1117.0L810.2 1121.8L806.3 1122.9L817.8 1130.1L819.8 1134.6L823.2 1136.0L825.1 1140.8L830.0 1143.5L831.4 1162.8L830.0 1163.8L822.0 1151.8L814.1 1156.9L816.1 1159.7L816.9 1165.9L820.2 1167.3L821.9 1172.1L816.3 1175.9L815.3 1172.1L812.5 1169.3L809.8 1166.9L809.0 1168.6L814.6 1192.4L814.2 1199.6L816.3 1206.2L813.2 1203.4L808.8 1194.5L806.9 1194.8L804.9 1202.0L804.9 1206.2L803.1 1204.1L803.1 1197.6L798.0 1186.2L795.8 1187.6L795.6 1191.0L794.7 1196.2L792.2 1192.0L789.5 1184.5L791.2 1173.8L789.3 1168.6L782.0 1158.0L786.4 1145.9L790.8 1146.6L793.7 1141.5L795.8 1141.8L812.2 1154.2L811.7 1151.1L815.6 1150.4L816.6 1148.3L803.7 1137.7L802.0 1140.4L796.1 1138.7L787.6 1141.8L785.3 1136.0L784.7 1140.1L782.7 1140.8L781.5 1139.4L779.5 1130.5L775.9 1124.9L775.8 1122.9L775.9 1120.8L777.8 1120.5L781.5 1121.8L781.7 1117.4L775.9 1118.1L767.8 1107.0L765.9 1099.5L762.7 1094.0L766.9 1095.0L768.0 1090.9L769.2 1090.9L768.0 1084.7L773.9 1079.9L776.4 1068.5L778.8 1067.1L780.2 1062.7L779.0 1054.7L786.4 1052.7L789.5 1054.1L796.4 1045.1L804.9 1045.5L809.0 1043.4L809.8 1038.2L824.4 1036.2L830.7 1033.8L831.5 1031.3L839.3 1030.7L843.6 1037.2L847.3 1037.2L851.7 1041.3L863.1 1038.9L867.1 1034.4L865.8 1025.5L869.8 1024.8Z" data-c="GR" tabIndex="-1">
                  <title>Greece</title>
                </path>
                <path className="v-mc" d="M798.8 794.6L800.8 794.6L802.5 799.7L806.4 804.2L809.7 804.9L811.5 810.4L806.9 816.6L801.5 818.0L796.6 825.9L796.4 829.3L790.8 841.7L787.8 851.7L788.1 853.4L785.1 856.5L784.1 863.4L781.7 867.9L775.6 868.9L773.1 873.0L754.7 872.0L750.5 877.5L747.3 876.8L744.6 879.9L740.0 880.6L737.8 884.4L734.9 886.1L725.6 884.7L717.1 877.5L709.7 865.8L703.7 860.3L699.7 847.9L696.4 847.9L699.2 844.1L702.5 842.8L703.2 839.0L702.0 835.5L702.4 829.3L705.4 827.6L706.4 824.5L705.8 822.1L702.2 820.4L704.2 817.3L708.3 819.7L713.1 818.7L712.5 813.2L714.7 808.3L724.7 816.6L741.2 815.9L742.2 808.7L744.2 807.0L753.7 804.9L756.4 801.1L761.0 804.2L768.3 798.4L771.0 790.5L773.6 789.8L780.8 791.1L787.3 789.8L792.7 797.0L798.8 794.6Z" data-c="HU" tabIndex="-1">
                  <title>Hungary</title>
                </path>
                <path className="v-mc" d="M160.3 181.4L171.9 176.2L176.3 176.2L171.0 179.6L167.6 185.8L174.6 188.6L174.7 192.7L172.4 197.5L179.8 196.5L181.0 200.3L178.5 204.1L183.6 201.7L192.9 205.8L192.0 209.9L189.8 211.6L192.5 214.4L190.7 217.1L193.9 219.2L193.2 222.3L189.0 224.0L189.0 228.5L185.6 232.6L180.0 232.6L180.0 234.7L178.5 236.1L179.2 239.5L175.8 243.6L169.2 247.8L155.4 251.9L141.7 262.9L121.9 268.1L119.5 274.3L114.4 274.3L114.9 276.3L113.6 276.7L107.6 278.4L81.4 273.2L76.4 268.8L76.8 266.7L78.6 266.0L77.8 264.6L73.7 267.0L65.4 261.9L66.3 260.5L65.3 260.2L60.2 262.9L39.8 263.9L38.3 257.4L39.0 255.3L42.2 258.4L49.8 255.7L56.4 246.0L60.0 245.0L50.0 247.4L52.5 244.7L50.8 244.0L51.7 240.2L57.8 236.4L48.1 239.5L45.3 236.4L46.6 233.0L42.9 230.6L28.0 229.9L20.0 232.6L16.6 228.5L37.5 222.0L52.7 222.0L54.6 217.1L50.2 219.2L44.1 218.2L42.2 216.8L42.9 215.8L53.4 209.2L50.7 206.8L45.6 207.2L35.6 203.7L18.6 209.6L9.0 205.8L12.7 202.7L19.3 205.1L16.8 202.3L15.4 196.8L23.6 200.3L29.0 197.9L22.0 196.8L19.8 194.4L25.1 193.4L20.7 188.6L21.4 186.9L26.6 188.6L23.7 185.5L26.3 183.1L32.9 186.2L33.6 190.0L39.7 188.2L40.3 193.7L43.4 192.4L43.4 186.9L34.7 182.0L42.7 180.0L39.2 177.6L31.9 177.6L35.8 174.1L43.6 174.5L60.8 188.2L59.0 190.3L62.5 192.7L61.4 198.2L56.6 198.9L61.7 203.7L60.5 207.5L63.9 209.2L65.6 214.4L68.8 204.1L71.2 201.7L73.2 201.0L77.1 204.1L78.6 198.9L78.6 188.2L81.2 185.8L93.4 197.2L95.3 186.5L104.4 183.1L113.9 193.1L116.3 198.6L116.9 195.1L113.2 186.2L113.6 183.8L120.2 184.5L126.3 190.6L133.1 182.4L138.3 185.1L144.2 182.4L145.3 179.6L143.4 173.8L148.3 171.4L152.7 171.7L160.3 181.4Z" data-c="IS" tabIndex="-1">
                  <title>Iceland</title>
                </path>
                <path className="v-mc" d="M542.7 879.9L544.6 881.6L551.5 878.2L555.8 880.3L559.2 876.8L561.4 872.0L560.8 868.2L566.4 862.0L567.1 868.9L570.2 873.7L573.2 874.8L572.5 877.5L575.6 883.4L577.1 881.6L576.3 876.8L580.5 867.5L581.4 860.3L583.6 861.0L585.3 866.9L592.2 865.1L594.6 869.6L595.8 868.9L593.9 861.0L594.7 856.9L600.5 858.6L600.0 854.8L600.8 847.6L610.0 850.7L614.2 843.8L623.2 843.4L630.0 840.4L629.8 845.2L633.7 853.4L655.9 859.6L650.5 868.6L654.7 871.3L652.4 877.9L654.2 878.2L653.9 884.1L659.0 890.9L656.3 891.6L657.3 890.3L654.7 885.4L652.0 887.5L647.6 885.4L644.6 889.9L635.6 896.1L634.4 895.8L635.4 893.0L631.7 896.4L630.8 903.7L635.9 913.0L633.7 918.8L631.9 917.8L631.4 921.6L633.9 938.8L638.8 946.7L653.6 961.1L661.2 991.4L670.2 1006.9L680.8 1017.6L697.8 1018.6L697.5 1023.4L693.4 1028.2L693.2 1032.0L713.6 1047.5L719.8 1055.1L728.1 1061.6L734.4 1071.3L736.9 1080.6L734.6 1090.2L730.2 1086.1L726.6 1074.4L720.0 1073.3L716.3 1070.2L714.9 1066.8L710.7 1068.2L706.3 1079.2L703.7 1092.6L705.1 1096.4L708.8 1098.4L713.7 1105.3L714.7 1118.4L713.6 1121.2L711.0 1120.5L705.4 1125.3L704.4 1128.0L704.1 1138.7L699.7 1144.2L695.9 1154.9L690.2 1154.9L689.0 1151.8L688.8 1146.6L691.9 1142.5L693.7 1129.8L698.3 1126.7L698.5 1120.5L696.8 1117.7L695.3 1106.4L689.7 1084.3L688.0 1082.3L682.9 1081.6L677.1 1075.7L677.1 1067.8L674.1 1060.9L666.8 1063.3L668.8 1058.9L666.3 1056.1L661.9 1056.1L656.4 1041.3L644.7 1040.3L641.5 1035.5L637.8 1033.4L628.5 1017.2L623.9 1012.4L621.0 1005.2L615.3 1000.7L612.5 1001.7L611.9 1000.7L613.2 999.3L613.1 996.9L605.3 982.8L601.9 981.8L602.0 973.9L598.6 963.2L597.5 951.5L594.1 945.7L588.6 942.9L581.2 935.3L572.2 931.9L568.6 934.3L559.3 950.5L550.7 954.3L550.5 951.2L553.9 943.6L553.2 940.8L547.8 941.5L540.7 934.6L539.7 928.8L542.9 921.6L542.2 917.8L538.0 914.7L536.1 909.5L537.1 907.1L539.7 907.5L543.7 903.7L544.9 898.9L538.8 886.5L539.2 884.1L542.7 879.9Z M600.0 985.6L600.3 990.7L595.4 989.7L595.4 987.3L600.0 985.6Z M660.0 1059.6L658.8 1059.6L658.8 1057.8L660.3 1058.5L660.0 1059.6Z M628.0 1195.5L626.1 1194.8L626.3 1192.7L628.0 1195.5Z M687.8 1145.2L681.9 1160.4L679.7 1171.4L680.0 1175.5L681.9 1179.0L680.8 1180.0L682.9 1185.2L679.8 1192.7L679.8 1197.9L670.5 1194.8L663.4 1183.8L657.6 1182.4L646.9 1170.7L640.0 1167.6L636.1 1164.2L634.6 1159.0L636.4 1151.1L639.7 1146.6L642.4 1151.8L646.8 1146.3L650.0 1146.6L657.5 1153.5L669.7 1151.1L674.4 1147.0L680.0 1147.7L686.4 1142.8L688.6 1143.5L687.8 1145.2Z M586.9 1053.7L589.8 1066.8L587.1 1074.7L588.3 1083.3L585.8 1112.6L577.3 1110.1L575.8 1119.8L574.2 1121.5L570.3 1120.8L566.4 1111.2L566.1 1101.9L566.9 1093.6L568.5 1093.3L568.6 1089.5L566.3 1086.7L567.3 1074.0L562.5 1061.6L563.1 1052.7L565.4 1054.7L569.0 1054.7L573.2 1051.3L580.2 1040.6L586.6 1048.9L585.6 1052.0L586.9 1053.7Z M567.5 1116.0L566.4 1119.4L565.4 1115.0L567.5 1116.0Z M564.2 1048.2L562.9 1049.6L563.9 1046.1L565.1 1046.1L564.2 1048.2Z" data-c="IT" tabIndex="-1">
                  <title>Italy</title>
                </path>
                <path className="v-mc" d="M874.6 544.7L869.2 542.0L858.6 530.0L848.6 526.5L844.7 519.3L838.5 523.8L832.5 524.4L816.9 520.7L814.2 522.4L811.5 519.6L798.0 519.3L790.7 522.7L780.5 531.0L780.8 505.2L785.6 498.3L787.5 488.0L792.0 479.4L806.1 474.2L807.6 478.3L815.9 488.0L818.5 495.9L824.6 500.0L829.3 498.6L836.9 490.4L835.9 469.0L849.3 462.5L864.2 470.1L872.2 480.4L880.8 478.0L889.3 481.1L890.5 484.2L895.4 489.0L892.2 504.1L895.8 504.1L898.5 512.7L900.0 514.5L901.7 524.4L900.8 528.6L896.4 530.6L892.2 536.5L891.2 540.3L882.2 539.2L874.6 544.7Z" data-c="LV" tabIndex="-1">
                  <title>Latvia</title>
                </path>
                <path className="v-mc" d="M586.1 841.0L584.6 841.0L584.4 839.7L584.4 837.3L585.3 833.8L585.4 835.2L585.9 837.6L586.4 838.6L586.6 839.3L586.1 841.0Z" data-c="LI" tabIndex="-1">
                  <title>Liechtenstein</title>
                </path>
                <path className="v-mc" d="M779.0 558.2L778.0 557.8L781.7 546.5L781.5 550.9L779.0 558.2Z M809.5 589.8L808.3 582.9L810.7 572.3L806.3 565.7L797.8 565.7L786.3 558.5L783.6 558.9L783.7 552.0L780.7 539.9L780.5 531.0L790.7 522.7L798.0 519.3L811.5 519.6L814.2 522.4L816.9 520.7L832.5 524.4L838.5 523.8L845.8 519.6L848.6 526.5L858.6 530.0L869.2 542.0L874.6 544.7L872.2 556.1L877.3 557.8L874.6 563.3L869.3 563.0L867.3 567.8L862.0 570.6L859.7 577.4L859.7 582.9L856.8 590.9L860.2 593.3L860.3 596.0L859.0 597.4L856.1 596.7L855.3 592.2L848.3 597.7L845.3 597.4L843.6 603.3L835.9 606.0L833.7 603.9L823.1 605.0L821.7 604.3L821.7 599.5L819.8 595.3L811.7 588.8L809.5 589.8Z" data-c="LT" tabIndex="-1">
                  <title>Lithuania</title>
                </path>
                <path className="v-mc" d="M527.5 735.7L527.3 736.8L527.3 738.8L527.8 740.9L529.8 744.3L530.8 745.4L533.7 746.8L533.7 748.5L533.7 749.8L532.4 751.9L531.9 753.6L531.4 756.7L531.4 758.8L529.5 757.4L528.5 757.1L527.5 757.4L526.8 758.8L525.6 758.8L524.7 758.8L524.2 757.8L523.7 757.4L522.4 757.1L521.9 755.7L522.4 755.4L523.4 751.9L521.9 748.1L520.8 746.4L520.8 745.7L521.0 744.7L521.0 742.6L521.9 741.2L523.2 737.1L525.1 734.0L526.9 734.7L527.5 735.7Z" data-c="LU" tabIndex="-1">
                  <title>Luxembourg</title>
                </path>
                <path className="v-mc" d="M670.7 1226.8L670.0 1227.8L668.5 1227.8L666.9 1226.1L666.9 1222.3L668.6 1223.0L670.2 1225.4L670.7 1226.8Z M666.3 1220.6L665.3 1221.3L664.2 1220.3L664.1 1219.6L665.4 1218.9L666.1 1219.6L666.4 1220.3L666.3 1220.6Z" data-c="MT" tabIndex="-1">
                  <title>Malta</title>
                </path>
                <path className="v-mc" d="M525.3 714.1L521.2 713.7L519.3 711.0L521.2 707.2L522.0 700.3L516.6 695.5L512.0 695.8L509.0 689.3L505.9 691.7L504.4 688.6L502.4 691.0L500.0 689.3L498.0 690.7L497.8 693.1L491.7 690.3L484.6 690.0L482.2 686.9L487.1 684.8L493.9 689.6L496.3 689.3L491.7 684.8L494.6 684.5L490.7 677.6L492.9 671.4L499.7 660.4L504.6 638.7L506.6 639.7L509.5 638.0L514.6 633.2L517.5 627.3L526.4 622.5L539.3 621.5L541.9 625.3L545.8 627.0L545.6 636.6L542.9 648.7L537.5 650.4L538.1 655.2L541.9 655.9L543.1 658.0L542.0 663.8L537.6 668.3L539.0 672.1L534.2 676.2L531.5 677.2L528.3 675.2L524.6 677.9L528.8 690.0L526.8 697.9L527.6 700.3L523.1 704.4L526.3 708.6L525.3 714.1Z M495.3 692.0L494.4 694.8L489.8 698.2L484.4 695.5L482.5 697.2L480.5 692.4L481.9 692.0L495.3 692.0Z M514.1 623.2L511.7 623.2L515.6 621.8L518.3 621.5L514.1 623.2Z M506.6 634.2L504.9 636.6L503.6 635.3L506.6 630.4L506.6 634.2Z M490.7 680.0L492.7 683.1L490.7 683.8L488.5 681.7L486.9 682.1L486.4 680.3L490.7 680.0Z M537.8 616.7L536.3 616.7L538.3 615.0L539.0 615.0L537.8 616.7Z" data-c="NL" tabIndex="-1">
                  <title>Netherlands</title>
                </path>
                <path className="v-mc" d="M773.2 84.7L764.7 85.3L768.6 91.2L766.8 97.4L762.2 101.9L766.8 103.9L762.2 108.1L733.9 101.2L731.5 102.2L731.9 113.6L727.5 121.5L717.5 117.0L708.3 123.9L704.9 133.2L698.1 137.3L697.1 140.1L702.4 149.7L701.7 152.8L685.1 172.4L686.3 178.6L678.6 183.4L670.2 184.8L671.9 196.5L669.2 213.4L655.1 238.1L662.4 242.3L663.6 249.1L662.0 254.7L660.3 257.7L647.5 255.7L640.5 258.1L630.0 271.9L630.7 275.6L627.1 282.5L630.8 292.5L629.0 295.3L629.2 306.6L632.2 317.3L629.8 336.6L642.0 349.3L639.2 359.3L632.2 361.3L637.1 380.3L635.4 392.0L630.0 398.8L625.9 400.6L624.4 406.1L621.7 409.9L623.7 420.2L621.0 432.6L618.1 433.3L616.4 426.7L607.3 424.0L604.1 416.7L603.4 404.0L602.4 406.1L602.9 409.9L600.0 412.3L600.5 420.5L596.3 429.8L590.5 431.5L587.1 426.0L585.8 426.4L588.1 429.8L587.5 431.2L581.5 435.0L582.9 436.7L581.7 438.8L562.2 459.8L550.2 463.9L542.4 463.9L540.3 459.4L539.0 459.1L537.8 462.2L535.4 461.1L534.7 460.4L537.1 457.0L536.6 455.6L532.0 455.3L526.3 451.5L520.5 446.7L517.3 439.4L518.8 429.8L527.1 434.6L531.5 430.2L527.1 431.9L523.6 426.7L524.9 423.6L524.6 419.8L532.2 410.9L518.0 420.2L514.6 424.3L511.4 424.7L510.7 422.2L513.6 408.1L516.4 405.7L521.5 407.4L529.2 401.9L522.5 402.6L520.8 400.6L526.6 393.0L527.8 387.8L534.2 381.6L535.1 383.4L534.4 390.6L537.6 381.3L542.4 378.2L528.0 383.7L523.4 393.3L520.3 395.4L516.9 401.6L511.0 408.1L510.5 401.6L512.2 396.4L512.0 392.6L520.2 391.6L513.4 388.5L510.8 380.6L519.5 372.0L512.5 376.1L510.5 373.7L509.3 371.3L508.6 360.0L538.6 356.5L541.9 359.3L543.1 363.1L543.1 358.2L552.7 354.1L549.2 353.8L548.3 351.0L549.8 346.5L548.0 348.6L547.1 355.1L545.3 355.5L536.6 354.1L535.6 351.4L533.7 356.2L531.9 356.9L526.8 355.5L514.1 357.5L510.3 354.8L508.8 352.7L508.5 346.5L514.2 344.8L507.3 336.9L507.3 331.0L516.4 330.4L525.8 334.1L537.8 331.4L527.6 332.1L513.1 329.0L510.2 325.9L510.8 321.4L514.6 321.8L517.6 316.3L523.9 312.5L526.8 314.9L535.3 312.8L537.1 310.7L527.8 312.8L527.5 311.4L531.4 305.9L541.7 305.2L550.7 308.3L554.1 306.6L551.4 305.9L551.5 303.9L560.8 301.8L560.0 300.4L537.8 302.1L541.4 294.9L552.0 289.1L561.0 289.4L562.9 292.9L569.8 297.7L562.0 287.0L563.9 282.5L570.0 280.8L569.5 277.7L565.9 277.4L565.4 275.3L569.2 271.9L573.6 270.1L578.6 272.2L577.6 275.3L579.0 276.7L581.7 272.9L588.1 270.8L593.6 279.1L596.4 276.7L606.1 276.7L604.6 273.2L605.6 270.8L616.4 264.6L613.2 261.5L618.0 258.1L615.4 256.4L611.5 258.4L608.6 260.8L611.0 263.3L609.2 266.0L594.2 275.0L591.9 274.6L589.3 268.4L586.4 269.1L586.6 265.0L602.7 243.6L619.2 232.6L620.8 230.2L619.7 229.9L615.3 231.9L616.1 226.8L618.5 224.4L629.8 217.5L632.4 220.6L635.8 220.2L642.7 212.0L634.2 217.5L629.3 214.0L629.2 211.3L631.7 204.1L638.8 192.7L644.6 190.6L640.5 185.8L655.4 183.1L661.5 178.9L646.1 181.4L645.3 174.5L645.9 170.7L647.3 170.7L647.6 167.2L654.6 161.7L660.3 161.7L655.1 158.0L659.0 155.9L662.9 150.7L666.8 149.4L685.1 148.0L685.4 146.3L683.1 145.9L668.5 145.6L677.3 135.2L684.9 138.7L688.0 142.8L687.8 139.7L689.7 137.0L686.3 137.0L682.2 134.2L681.7 132.1L683.9 129.7L683.2 128.4L675.6 132.1L674.2 131.5L674.6 127.0L680.2 121.5L688.5 122.2L684.1 120.4L683.4 118.0L695.1 112.5L696.9 119.4L700.2 124.6L699.3 120.4L701.5 117.3L699.3 115.6L697.8 110.8L698.5 109.4L701.5 107.0L711.0 108.4L721.2 105.6L719.2 103.9L704.7 104.3L703.7 102.2L704.7 100.1L714.1 96.7L718.5 92.9L723.7 82.6L730.5 80.5L730.2 75.0L733.2 69.9L739.8 75.0L744.4 74.7L739.3 71.2L739.2 69.2L745.6 66.8L746.4 63.3L749.2 60.2L758.0 59.2L756.6 71.6L762.0 57.8L768.1 53.3L769.3 56.1L768.5 64.7L763.6 74.7L771.0 67.4L775.3 68.1L771.7 62.3L772.0 56.8L773.2 54.7L782.4 55.4L783.9 51.6L786.9 51.3L796.3 57.5L793.2 49.2L785.8 43.7L792.9 43.7L800.3 41.0L802.0 42.3L803.7 39.9L808.3 38.9L812.5 41.0L814.4 48.2L819.7 52.3L820.3 50.9L818.5 47.8L820.0 43.0L824.7 37.9L831.2 34.8L837.6 27.5L834.9 23.1L843.6 16.9L851.9 22.7L854.9 20.3L860.7 23.4L852.0 32.7L850.0 40.6L847.3 44.0L847.1 46.8L848.1 47.8L854.6 43.4L855.4 39.9L873.1 20.3L875.6 19.3L876.9 22.4L873.9 28.6L875.4 29.6L874.2 37.5L881.2 34.1L884.4 26.2L890.7 24.1L885.4 18.9L891.5 14.1L904.9 17.9L903.9 23.4L896.6 28.2L902.9 28.6L901.7 31.7L901.5 43.0L908.6 25.5L912.4 22.0L916.9 22.0L927.8 29.3L933.4 27.5L936.3 30.3L935.8 33.0L942.2 33.7L948.0 37.9L948.1 42.3L936.6 47.5L911.5 46.5L912.0 48.5L925.4 52.3L926.3 53.7L926.1 59.2L928.6 60.9L933.7 61.3L936.3 56.4L938.1 57.5L939.5 61.3L940.3 58.8L946.9 59.2L947.8 65.0L946.8 67.4L934.9 64.4L935.4 67.4L933.7 71.2L921.9 75.7L918.1 83.6L914.6 85.3L912.4 81.9L912.7 79.8L920.8 69.9L917.6 63.0L905.3 57.8L896.4 49.6L894.1 49.6L883.6 54.7L873.4 54.7L865.6 62.3L860.5 76.4L860.2 86.4L857.3 89.8L851.7 92.2L849.0 98.4L846.4 100.1L830.5 92.9L819.0 98.1L803.6 95.7L801.7 90.8L789.7 76.7L780.8 78.8L781.9 83.3L780.8 84.7L773.2 84.7Z M507.8 358.2L505.1 358.6L506.1 354.8L508.0 356.2L507.8 358.2Z M510.0 385.1L510.0 389.2L508.5 388.9L507.6 384.0L507.3 381.6L508.3 380.3L510.0 385.1Z M931.5 58.5L928.3 59.5L929.5 54.7L933.1 57.1L931.5 58.5Z M626.6 202.0L623.4 203.0L623.7 200.3L626.6 199.6L626.6 202.0Z M567.3 269.4L564.2 268.8L571.7 265.0L573.1 266.0L572.7 268.4L567.3 269.4Z M561.0 280.8L556.1 279.1L558.3 277.0L561.7 277.7L561.0 280.8Z M821.0 23.4L814.7 31.3L810.7 33.0L803.9 34.1L799.5 32.3L796.4 28.9L812.9 27.2L816.9 23.4L821.0 23.4Z M857.5 12.4L866.9 15.8L866.6 17.2L860.8 18.6L852.7 16.2L857.5 12.4Z M823.9 32.7L824.4 35.8L819.3 40.6L815.3 41.3L815.1 38.5L812.2 38.2L813.9 34.8L822.9 30.3L823.9 32.7Z M830.8 32.0L827.6 33.4L824.9 31.0L825.3 26.8L826.8 25.8L831.9 29.3L830.8 32.0Z M658.8 111.2L663.1 111.8L661.5 113.9L650.8 118.4L648.0 120.8L647.5 117.3L649.2 114.9L651.4 114.9L653.2 111.8L658.8 111.2Z M643.6 124.9L641.2 126.6L643.4 119.8L646.1 118.7L645.8 121.8L643.6 124.9Z M681.5 88.1L684.7 93.6L683.9 97.4L681.7 99.1L676.1 99.5L673.6 97.0L669.8 98.8L667.3 96.0L669.5 93.9L670.3 92.2L674.6 93.3L675.8 89.1L678.6 89.8L678.6 86.0L681.5 88.1Z M758.8 44.0L764.1 47.1L761.0 49.2L759.0 48.9L756.1 44.0L755.9 42.3L757.3 42.3L758.8 44.0Z M775.9 48.5L773.6 49.6L769.7 47.5L771.0 44.7L773.9 43.7L776.6 44.7L775.9 48.5Z M750.0 49.2L751.5 51.3L756.1 50.9L755.8 52.7L751.4 57.8L745.9 59.9L742.0 66.1L731.0 66.8L729.8 65.4L732.7 62.6L735.8 59.2L740.3 59.2L740.5 55.4L746.6 50.2L748.0 43.4L749.3 43.0L750.0 49.2Z M635.8 192.7L634.4 192.7L635.3 190.0L638.0 188.9L640.3 189.6L635.8 192.7Z M634.2 187.9L632.7 187.9L634.9 182.7L637.6 183.1L637.6 185.1L634.2 187.9Z M614.1 228.2L607.3 229.2L605.8 228.2L606.9 226.4L612.4 224.4L614.1 228.2Z M720.3 65.4L729.0 68.8L730.2 72.3L727.8 74.7L728.0 79.1L720.2 79.1L713.2 85.7L711.2 83.6L708.6 83.6L711.4 81.2L711.9 73.6L718.0 73.0L718.1 70.9L715.8 69.5L719.5 67.8L720.3 65.4Z M690.8 101.2L695.9 97.0L697.5 91.5L700.5 90.2L703.1 92.9L704.2 95.7L703.7 98.8L694.6 106.7L690.8 106.3L685.4 109.8L682.7 107.7L678.6 110.8L676.8 109.8L671.7 113.6L666.9 114.2L665.4 113.9L665.4 111.5L671.0 106.7L679.7 105.3L684.9 99.1L687.5 90.5L685.4 88.8L686.1 84.7L693.1 76.4L697.1 76.7L694.7 82.2L691.7 85.3L693.4 89.1L693.7 95.3L690.8 101.2Z M271.9 22.7L269.5 22.0L279.3 16.2L282.4 12.4L288.1 11.0L288.1 15.8L271.9 22.7Z" data-c="NO" tabIndex="-1">
                  <title>Norway</title>
                </path>
                <path className="v-mc" d="M823.7 687.6L824.7 694.8L832.2 709.9L830.2 712.7L832.0 721.6L830.0 725.8L825.6 726.8L820.5 734.0L807.6 755.7L809.0 764.3L808.6 768.4L811.0 771.5L810.3 773.6L796.9 767.1L794.7 762.6L790.5 760.2L781.0 759.8L777.5 763.3L773.2 760.9L768.8 761.2L765.4 763.3L763.7 768.1L758.6 767.4L758.8 761.5L756.4 760.2L753.2 753.6L748.3 760.5L745.3 760.5L744.7 757.1L742.9 756.7L742.5 753.3L739.0 748.1L738.3 744.0L729.3 738.5L726.8 740.9L722.5 735.7L721.9 734.4L724.4 732.0L723.7 729.2L719.0 731.3L709.8 725.1L711.7 731.6L705.8 736.4L698.5 725.4L701.4 722.0L702.0 720.3L701.0 718.5L695.1 718.9L690.3 714.4L684.1 712.0L682.4 706.8L677.8 705.1L677.6 709.2L674.7 710.3L678.3 696.9L676.4 689.6L673.4 687.6L673.6 683.8L671.2 676.9L673.7 668.3L670.3 658.7L671.5 652.8L663.2 640.8L668.0 629.1L665.4 611.5L670.8 614.6L670.5 608.4L664.6 606.7L664.4 605.0L698.1 592.2L704.4 583.3L726.1 574.0L734.2 573.3L741.7 578.8L742.4 580.5L736.3 576.4L738.8 584.7L740.2 587.4L745.4 590.2L755.9 586.4L799.5 589.8L809.0 590.2L810.5 588.5L819.8 595.3L821.7 599.5L823.7 616.0L826.9 627.3L829.0 639.7L828.8 647.0L820.5 653.1L816.6 661.1L824.6 669.7L824.2 677.6L822.9 681.0L823.7 687.6Z" data-c="PL" tabIndex="-1">
                  <title>Poland</title>
                </path>
                <path className="v-mc" d="M274.9 1017.2L283.6 1010.4L285.8 1013.8L284.4 1018.6L285.6 1021.7L289.5 1019.3L298.3 1021.0L301.5 1018.6L302.5 1015.9L311.5 1017.2L312.5 1019.6L312.9 1026.5L316.8 1027.6L318.3 1030.3L317.1 1034.1L306.3 1049.2L308.0 1057.2L308.3 1072.3L304.6 1078.1L306.8 1083.3L305.4 1090.9L303.1 1095.0L295.9 1095.7L299.3 1102.2L302.2 1113.6L305.1 1116.3L304.2 1121.5L300.3 1128.0L299.3 1137.0L303.4 1146.6L305.8 1146.3L304.7 1151.1L302.0 1152.5L297.6 1162.1L296.6 1166.9L298.1 1181.0L290.8 1186.9L278.0 1183.1L271.2 1186.2L274.4 1172.4L274.7 1162.1L273.2 1154.2L274.4 1142.5L273.2 1137.3L276.8 1138.4L274.6 1134.9L267.6 1137.3L266.9 1130.1L270.8 1127.0L272.2 1118.4L274.7 1115.7L271.9 1117.7L268.8 1127.4L265.1 1128.7L263.2 1127.7L263.1 1125.3L265.3 1109.8L264.7 1106.7L268.6 1099.8L273.9 1079.9L273.4 1075.0L276.4 1058.2L276.9 1046.5L274.4 1027.2L275.3 1025.5L273.1 1023.1L274.9 1017.2Z" data-c="PT" tabIndex="-1">
                  <title>Portugal</title>
                </path>
                <path className="v-mc" d="M901.9 896.4L903.7 899.9L911.2 904.0L911.5 901.3L913.6 902.0L922.0 897.5L927.3 903.0L924.7 917.4L916.1 920.2L916.8 912.6L914.9 912.3L913.4 914.7L913.9 918.5L912.0 926.7L913.4 926.7L909.2 936.0L909.5 947.0L908.3 955.3L902.0 954.3L899.2 952.5L896.3 946.7L893.9 947.7L888.6 945.7L882.9 940.5L868.1 946.0L861.4 954.3L855.9 957.7L817.5 950.8L812.2 952.2L811.4 948.1L814.1 943.6L808.5 938.1L804.9 931.2L805.9 927.8L808.8 925.4L805.1 921.9L798.1 927.8L795.1 923.3L785.8 917.8L788.6 915.4L785.6 911.6L788.0 906.8L778.6 899.2L775.8 895.4L775.8 891.3L775.8 886.1L774.7 886.5L766.8 873.7L773.1 873.0L775.6 868.9L780.3 869.3L782.2 866.9L784.1 863.4L785.1 856.5L788.1 853.4L787.8 851.7L790.8 841.7L796.4 829.3L796.6 825.9L801.5 818.0L806.9 816.6L815.9 805.6L820.5 809.0L833.6 811.8L840.3 811.1L845.6 818.3L847.1 818.3L855.3 811.8L867.1 809.0L869.7 801.8L876.4 799.7L881.0 803.2L891.7 831.4L899.5 843.8L902.4 855.5L902.4 862.0L900.0 878.6L901.0 889.6L899.5 891.3L901.9 896.4Z" data-c="RO" tabIndex="-1">
                  <title>Romania</title>
                </path>
                <path className="v-mc" d="M805.8 771.9L801.7 784.9L799.0 789.1L798.5 795.3L791.9 796.6L787.3 789.8L771.0 790.5L768.3 798.4L761.9 803.5L755.3 801.5L753.7 804.9L742.2 808.7L741.2 815.9L731.4 817.0L724.7 816.6L717.3 809.0L714.4 808.3L709.5 795.3L711.7 785.3L714.1 779.8L720.0 780.1L724.7 778.1L730.2 771.9L731.5 765.3L739.0 757.4L744.7 757.1L745.3 760.5L748.3 760.5L753.2 753.6L756.4 760.2L758.8 761.5L758.6 767.4L759.3 767.7L763.7 768.1L765.4 763.3L768.8 761.2L778.8 763.3L781.0 759.8L785.6 759.5L794.7 762.6L796.9 767.1L805.8 771.9Z" data-c="SK" tabIndex="-1">
                  <title>Slovakia</title>
                </path>
                <path className="v-mc" d="M703.7 860.3L700.3 859.3L699.0 861.0L698.8 864.8L696.1 864.8L688.8 870.6L688.0 872.7L689.3 875.8L689.0 882.3L682.7 886.8L684.1 889.6L682.7 892.0L683.7 895.8L682.0 896.8L674.4 895.4L670.7 889.2L667.3 895.4L660.8 894.4L659.0 897.1L654.4 895.4L653.9 894.0L659.0 890.9L655.3 884.7L653.7 883.4L654.2 878.2L652.2 877.2L654.7 871.3L650.5 868.6L655.9 859.6L670.3 863.8L676.1 856.5L685.4 855.8L690.8 853.1L694.2 854.1L694.6 850.0L696.4 847.9L699.7 847.9L703.7 860.3Z" data-c="SI" tabIndex="-1">
                  <title>Slovenia</title>
                </path>
                <path className="v-mc" d="M450.7 1129.8L447.6 1129.8L447.8 1127.4L450.7 1129.8Z M476.9 1091.2L482.2 1092.3L482.4 1094.3L477.3 1107.0L475.8 1108.1L471.2 1105.0L470.3 1100.9L468.3 1099.1L466.1 1101.9L463.9 1097.4L470.8 1089.2L477.3 1085.0L478.0 1087.8L476.9 1091.2Z M496.4 1089.5L489.3 1085.4L489.0 1081.9L495.3 1083.0L496.9 1087.4L496.4 1089.5Z M448.3 1121.2L447.6 1123.2L444.4 1121.8L445.8 1117.4L450.2 1114.3L451.0 1115.3L451.4 1117.0L448.3 1121.2Z M393.4 966.6L393.9 969.7L399.8 972.5L398.6 978.3L399.5 979.4L401.7 977.3L403.7 980.1L410.8 982.8L413.7 987.6L418.6 986.6L423.1 991.4L434.4 991.4L435.6 985.9L446.6 991.4L448.3 1000.0L452.5 998.0L457.5 1002.8L461.0 1000.7L468.6 1003.5L469.0 1001.7L472.7 999.3L478.1 1000.4L479.8 1005.2L477.5 1006.2L478.8 1017.2L474.6 1023.1L462.9 1033.4L459.0 1039.6L441.2 1047.5L435.8 1055.8L438.8 1059.2L433.9 1063.0L418.1 1100.5L420.3 1116.3L427.1 1126.7L414.9 1141.8L409.8 1160.7L411.5 1165.6L401.2 1168.0L395.9 1173.8L388.0 1194.8L386.6 1196.2L382.2 1193.1L376.4 1196.9L370.3 1195.5L365.6 1197.2L358.8 1195.5L349.7 1196.9L344.6 1204.1L336.1 1207.2L332.9 1216.8L331.4 1216.5L331.2 1219.2L328.3 1220.6L321.4 1215.1L318.1 1206.8L317.5 1201.0L315.6 1199.6L315.1 1196.5L318.3 1190.3L315.3 1193.1L313.7 1189.0L306.9 1180.7L307.5 1177.6L305.4 1180.3L298.1 1181.0L296.6 1166.9L297.6 1162.1L302.0 1152.5L304.7 1151.1L305.8 1146.3L303.4 1146.6L299.3 1137.0L300.3 1128.0L304.2 1121.5L305.1 1116.3L302.2 1113.6L299.3 1102.2L295.9 1095.7L303.1 1095.0L305.4 1090.9L306.8 1083.3L304.6 1078.1L308.3 1072.3L308.0 1057.2L306.3 1049.2L317.1 1034.1L318.3 1030.3L316.8 1027.6L312.9 1026.5L312.5 1019.6L311.5 1017.2L302.5 1015.9L301.5 1018.6L298.3 1021.0L289.5 1019.3L285.6 1021.7L284.4 1018.6L285.8 1013.8L283.6 1010.4L273.7 1017.6L273.1 1011.4L276.4 1005.9L274.4 1005.5L275.8 1001.1L274.4 999.0L274.4 993.1L270.7 994.9L272.4 987.6L270.5 987.3L267.1 981.4L268.1 974.9L273.4 969.4L279.0 969.1L283.9 965.6L283.7 960.8L293.2 954.3L304.1 961.8L324.6 958.4L347.1 966.3L362.5 962.9L372.2 968.0L375.1 965.3L384.1 969.4L393.4 966.6Z" data-c="ES" tabIndex="-1">
                  <title>Spain</title>
                </path>
                <path className="v-mc" d="M746.9 470.1L742.7 474.5L742.2 482.5L744.2 485.2L736.9 493.5L734.6 499.7L731.4 501.7L732.4 498.6L733.7 496.2L730.7 489.7L731.2 479.7L738.0 470.4L742.4 470.4L744.1 467.3L746.9 470.1Z M703.9 523.4L702.2 525.1L701.7 522.7L701.9 513.8L705.6 503.1L707.3 502.4L711.9 488.0L713.9 488.0L703.9 523.4Z M616.8 428.8L618.1 433.3L621.0 432.6L623.7 420.2L621.7 409.9L624.4 406.1L625.9 400.6L630.0 398.8L635.4 392.0L637.1 380.3L632.2 361.3L639.2 359.3L642.0 349.3L629.8 336.6L632.2 317.3L629.2 306.6L629.0 295.3L630.8 292.5L627.1 282.5L630.7 275.6L630.0 271.9L640.5 258.1L647.5 255.7L660.3 257.7L662.0 254.7L663.6 249.1L662.4 242.3L655.1 238.1L669.2 213.4L671.9 196.5L670.2 184.8L678.6 183.4L686.3 178.6L685.1 172.4L701.7 152.8L702.4 149.7L697.1 140.1L698.1 137.3L704.9 133.2L708.3 123.9L717.5 117.0L727.5 121.5L731.9 113.6L731.5 102.2L733.9 101.2L762.2 108.1L766.8 103.9L762.2 101.9L766.8 97.4L768.6 91.2L764.7 85.3L773.2 84.7L778.0 86.7L778.3 89.1L796.6 102.5L811.0 107.7L815.3 111.5L816.6 115.6L819.0 116.0L824.4 122.2L822.0 124.9L822.7 133.9L821.4 139.0L825.9 140.4L826.8 143.5L824.2 146.9L824.4 150.4L830.3 161.4L828.3 169.3L825.4 172.8L825.4 180.7L830.5 187.2L833.1 195.8L825.3 195.1L815.3 198.2L809.3 193.7L805.8 196.2L803.4 194.1L801.5 197.9L800.8 203.0L798.1 202.7L799.2 204.8L795.3 205.4L795.8 207.5L794.6 209.2L789.3 209.6L788.5 211.3L790.0 214.7L786.6 212.7L789.3 219.2L782.0 230.2L784.4 233.3L786.3 239.5L788.5 242.3L787.6 245.0L780.0 251.9L775.6 262.6L761.2 271.5L758.0 276.7L754.2 275.0L754.2 278.1L751.9 276.0L746.4 284.2L742.7 283.6L743.4 285.3L739.2 286.3L737.8 290.4L734.1 292.5L737.3 292.9L736.6 295.9L731.7 299.7L726.8 297.0L728.3 302.1L727.1 304.2L729.5 306.3L722.9 311.4L718.8 309.4L718.3 311.1L719.2 315.2L722.5 319.0L720.5 321.1L718.3 331.4L719.8 337.9L715.3 336.6L715.6 338.6L714.1 341.7L715.3 363.1L716.6 367.9L716.1 371.7L721.4 373.7L723.1 377.2L728.1 375.4L731.5 381.6L738.3 387.1L737.8 390.6L742.2 393.0L745.6 401.6L745.3 404.0L738.6 410.5L728.3 417.8L731.0 419.1L738.3 416.7L739.3 418.8L735.9 420.2L733.7 426.4L711.5 442.2L698.5 442.5L708.3 444.3L710.7 447.7L705.9 449.8L708.0 457.3L706.8 459.1L706.8 467.3L705.1 467.7L704.2 471.1L705.9 481.8L703.1 490.0L703.9 496.6L700.8 509.0L693.6 527.5L673.2 528.9L673.7 532.4L670.5 531.7L664.6 539.2L664.4 542.7L666.8 549.6L664.1 554.0L657.8 553.0L649.5 555.8L642.2 553.7L643.6 542.0L635.1 523.4L640.7 524.4L638.3 518.3L641.7 517.9L642.7 515.5L642.0 512.1L639.3 510.7L634.2 502.1L629.7 491.1L628.0 483.5L626.4 484.2L625.1 475.6L622.5 474.2L622.0 465.6L619.5 464.6L617.8 460.4L617.5 452.9L614.4 451.8L613.7 434.6L612.7 430.5L613.4 427.4L616.8 428.8Z M748.5 467.3L748.1 469.4L746.4 467.7L748.1 465.3L751.4 465.9L748.5 467.3Z M735.9 429.1L734.7 429.5L735.6 427.1L736.9 426.7L735.9 429.1Z M739.0 414.0L738.1 413.6L739.3 411.2L740.7 412.3L739.0 414.0Z" data-c="SE" tabIndex="-1">
                  <title>Sweden</title>
                </path>
                <path className="v-mc" d="M585.1 825.2L586.8 826.9L584.6 841.0L590.5 842.8L591.2 845.2L595.4 848.3L599.2 843.4L601.0 846.5L600.0 854.8L600.5 858.6L594.7 856.9L593.9 861.0L595.4 869.3L593.9 869.3L592.2 865.1L585.3 866.9L583.6 861.0L581.4 860.3L580.5 867.5L576.3 876.8L577.1 881.6L575.6 883.4L572.5 877.5L573.2 874.8L570.2 873.7L567.1 868.9L566.8 862.7L565.6 862.0L560.8 868.2L561.4 872.0L556.8 879.2L551.5 878.2L544.6 881.6L538.5 872.0L539.3 867.9L538.3 863.1L532.7 862.7L529.3 866.2L530.0 868.9L528.8 871.0L524.9 872.4L524.9 870.3L527.1 867.9L527.5 864.4L526.4 862.7L528.1 856.5L532.4 851.7L533.2 844.8L536.8 842.1L541.5 833.8L542.4 831.4L540.7 829.7L541.9 827.6L544.7 826.2L548.1 828.3L552.9 822.8L566.6 822.8L568.8 821.8L566.1 819.4L569.0 816.3L574.2 820.4L579.3 820.0L585.1 825.2Z" data-c="CH" tabIndex="-1">
                  <title>Switzerland</title>
                </path>
              </svg>
              {" "}
              <label className="v-map-pick">
                <span className="sr-only" data-i="015b78fe00">Choose a Schengen country</span>
                {" "}
                <select aria-label="Choose a Schengen country" data-i-aria-label="015b78fe00">
                  <option data-i="5d403f9bc5" value="">Choose a country…</option>
                  <option data-i="593905b319" value="AT">Austria</option>
                  <option data-i="5cb4c9d828" value="BE">Belgium</option>
                  <option data-i="5c77726358" value="BG">Bulgaria</option>
                  <option data-i="d7e0453bb4" value="HR">Croatia</option>
                  <option data-i="1fef429092" value="CZ">Czech Republic</option>
                  <option data-i="89da124e04" value="DK">Denmark</option>
                  <option data-i="f0a96da3f8" value="EE">Estonia</option>
                  <option data-i="c909b138eb" value="FI">Finland</option>
                  <option data-i="e3772ac4b4" value="FR">France</option>
                  <option data-i="17d53e0e6a" value="DE">Germany</option>
                  <option data-i="4902a456ca" value="GR">Greece</option>
                  <option data-i="f14e46ce7d" value="HU">Hungary</option>
                  <option data-i="b3c92eecf0" value="IS">Iceland</option>
                  <option data-i="ad79ef0f07" value="IT">Italy</option>
                  <option data-i="c5f5bb3b35" value="LV">Latvia</option>
                  <option data-i="b0ddce0f54" value="LI">Liechtenstein</option>
                  <option data-i="74a788cee2" value="LT">Lithuania</option>
                  <option data-i="5076721c40" value="LU">Luxembourg</option>
                  <option data-i="1a591a3e91" value="MT">Malta</option>
                  <option data-i="fb61c8a8eb" value="NL">Netherlands</option>
                  <option data-i="988455e67d" value="NO">Norway</option>
                  <option data-i="5ff03b7273" value="PL">Poland</option>
                  <option data-i="a495190bcc" value="PT">Portugal</option>
                  <option data-i="d6b897fd14" value="RO">Romania</option>
                  <option data-i="b6c149c3e0" value="SK">Slovakia</option>
                  <option data-i="d1aa050361" value="SI">Slovenia</option>
                  <option data-i="20a8df9b76" value="ES">Spain</option>
                  <option data-i="72ddd2b619" value="SE">Sweden</option>
                  <option data-i="77dcd849e5" value="CH">Switzerland</option>
                </select>
              </label>
            </div>
            <aside aria-live="polite" className="v-cp">
              <div className="v-cp-empty">
                <p className="v-cp-k" data-i="e1126642bd">Schengen Area</p>
                <p className="v-cp-big">
                  <strong className="notranslate">29</strong>
                  {" "}
                  <span data-i="db6cbd26bd">countries, one short-stay visa</span>
                </p>
                <ul className="v-cp-list">
                  <li>
                    <span data-i="ae768f766f">Stay</span>
                    <strong data-i="feef9ec248">Up to 90 days in any 180</strong>
                  </li>
                  <li>
                    <span data-i="e34b351427">Visa type</span>
                    <strong data-i="766f37390c">Short-stay (C) visa</strong>
                  </li>
                  <li>
                    <span data-i="b6532d9823">Official fee</span>
                    <strong data-i="988a4bdf81">€90 adult · €45 child 6–11</strong>
                  </li>
                  <li>
                    <span data-i="cfea419c3b">Apply</span>
                    <strong data-i="f6735796bd">Up to 6 months, at least 15 days before travel</strong>
                  </li>
                </ul>
                <p className="v-cp-hint">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                  {" "}
                  <span data-i="8050771adb">Select a country on the map</span>
                </p>
              </div>
              <div className="v-cp-full" hidden={true}>
                <div className="v-cp-head">
                  <img alt="" className="v-cp-flag" height="36" src="" width="48" />
                  <div>
                    <p className="v-cp-k" data-i="eccbf360ad">Schengen country</p>
                    <h3 className="v-cp-name notranslate"></h3>
                    <p className="v-cp-cap">
                      <span data-i="2bd8d2658c">Capital</span>
                      {" "}
                      <b className="notranslate"></b>
                    </p>
                  </div>
                </div>
                <dl className="v-cp-dl">
                  <div>
                    <dt data-i="4eadbc2a53">Visa guidance</dt>
                    <dd data-i="b27ab2372a">Short-stay Schengen (C) visa, up to 90 days in any 180. Apply to the country where you spend the most nights, or where you enter first if equal.</dd>
                  </div>
                  <div>
                    <dt data-i="02d235d7d1">Application centre</dt>
                    <dd className="v-cp-vc"></dd>
                  </div>
                  <div>
                    <dt data-i="a42d6723ec">Key documents</dt>
                    <dd>
                      <ul className="v-cp-docs">
                        <li data-i="ca984ec40d">Passport and proof of UK status</li>
                        <li data-i="36d651635f">Travel medical insurance (€30,000 cover)</li>
                        <li data-i="16050c850c">Flight and hotel reservations</li>
                        <li data-i="c8176e742b">Recent bank statements</li>
                        <li data-i="69995d8960">Employment or study letter</li>
                      </ul>
                    </dd>
                  </div>
                </dl>
                <div className="v-cp-cta">
                  <a className="v-btn v-btn-red v-btn-sm v-cp-guide" href="/schengen-visa">
                    <span data-i="a0b1152d05">View visa guide</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                  {" "}
                  <a className="v-btn v-btn-ghost v-btn-sm v-cp-wa" data-i="d55ae64f08" href="https://wa.me/447862609755" rel="noopener" target="_blank">Enquire on WhatsApp</a>
                </div>
                <span className="v-cp-tpl-a" data-i="f7463eda99" hidden={true}>UK visa application centre</span>
                <span className="v-cp-tpl-b" data-i="40a42f37e0" hidden={true}>We confirm the current visa centre and book your appointment for you.</span>
                <p className="v-cp-off" data-i="e268877e51">
                  {"Official source: "}
                  <a href="https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en" rel="noopener" target="_blank">European Commission: Applying for a Schengen visa</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section aria-labelledby="proc-title" className="v-sec v-ivory" id="process">
        <div className="v-wrap">
          <div className="v-head-center">
            <p className="v-eyebrow">
              <span className="v-num notranslate">04</span>
              <span data-i="815dc8567a">How TravelVista works</span>
            </p>
            <h2 className="v-h2 v-reveal" data-i="b6dd6e5a59" id="proc-title">
              {"Five steps from "}
              <em>first question</em>
              {" to visa decision."}
            </h2>
          </div>
          <div className="v-steps-wrap">
            <svg aria-hidden="true" className="v-steps-line" preserveAspectRatio="none" viewBox="0 0 1000 40">
              <path className="v-sl-bg" d="M0 20 H1000"></path>
              <path className="v-sl-fg" d="M0 20 H1000" pathLength="1"></path>
            </svg>
            <ol className="v-steps">
              <li className="v-step" style={{ "--i": "0" }}>
                <span className="v-step-node">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M4 5h16v11H9l-5 4z"></path>
                    <path d="M8 9.5h8M8 12.5h5"></path>
                  </svg>
                </span>
                {" "}
                <span className="v-step-n notranslate">01</span>
                <h3 data-i="38c54d9dca">Initial Consultation</h3>
                <p data-i="b4656e98cc">Tell us your passport, UK status, destination and travel dates on WhatsApp or by email. The first consultation is free.</p>
              </li>
              <li className="v-step" style={{ "--i": "1" }}>
                <span className="v-step-node">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M7 3h7l5 5v13H7z"></path>
                    <path d="M14 3v5h5"></path>
                    <path d="m9.5 14 2 2 3.5-4"></path>
                  </svg>
                </span>
                {" "}
                <span className="v-step-n notranslate">02</span>
                <h3 data-i="b0a19fbc2f">Document Assessment</h3>
                <p data-i="a5b8405bc5">We confirm which visa you need and send a document checklist made for your case, then review everything you send.</p>
              </li>
              <li className="v-step" style={{ "--i": "2" }}>
                <span className="v-step-node">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <rect height="15.5" rx="1.5" width="17" x="3.5" y="5"></rect>
                    <path d="M3.5 10h17M8 3v4M16 3v4"></path>
                    <path d="m9 15 2 2 4-4"></path>
                  </svg>
                </span>
                {" "}
                <span className="v-step-n notranslate">03</span>
                <h3 data-i="f15ad95943">Appointment Assistance</h3>
                <p data-i="3439b67853">We book the earliest appointment the visa centre offers and send you the date and time. Visa centres set availability, and it can change daily.</p>
              </li>
              <li className="v-step" style={{ "--i": "3" }}>
                <span className="v-step-node">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M3 6h6l2 2h10v11H3z"></path>
                    <path d="M8 13h8M8 16h5"></path>
                  </svg>
                </span>
                {" "}
                <span className="v-step-n notranslate">04</span>
                <h3 data-i="f3613a4d49">Application Preparation</h3>
                <p data-i="7a4a90a445">We complete your application form, write your cover letter, arrange your travel plan and check every document.</p>
              </li>
              <li className="v-step" style={{ "--i": "4" }}>
                <span className="v-step-node">
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M4 13v-1a8 8 0 0 1 16 0v1"></path>
                    <rect height="6" rx="1" width="4" x="3" y="13"></rect>
                    <rect height="6" rx="1" width="4" x="17" y="13"></rect>
                    <path d="M19 19c0 1.5-2 2.5-5 2.5"></path>
                  </svg>
                </span>
                {" "}
                <span className="v-step-n notranslate">05</span>
                <h3 data-i="4998d71127">Ongoing Customer Support</h3>
                <p data-i="3e30b86c06">You attend with a complete, checked file. We help you follow your application until the decision.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section aria-labelledby="why-title" className="v-sec v-white" id="why">
        <div className="v-wrap v-why">
          <div className="v-why-side">
            <p className="v-eyebrow">
              <span className="v-num notranslate">05</span>
              <span data-i="7dfac0dfb4">Why choose TravelVista</span>
            </p>
            <h2 className="v-h2 v-reveal" data-i="a62b95a97e" id="why-title">
              {"Careful work. Honest fees. "}
              <em>A real team in London.</em>
            </h2>
            <p className="v-why-note v-reveal" data-i="75f8843f74">No one can guarantee a visa. The embassy or consulate makes every decision. What we promise is a complete, correct application and clear answers at every step.</p>
            <figure className="v-why-img v-reveal">
              <img alt="London skyline from Southwark Bridge" className="" decoding="async" height="520" loading="lazy" sizes="(max-width: 900px) 90vw, 36vw" src={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=760&h=520"} srcset={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=480&h=328 480w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=800&h=547 800w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1200&h=821 1200w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1600&h=1095 1600w"} width="760" />
              <figcaption data-i="d2e3422483">London, where our team is based.</figcaption>
            </figure>
          </div>
          <ol className="v-why-list">
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="m15.5 8.5-2 5-5 2 2-5z"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="736f287195">Professional visa guidance</h3>
                <p data-i="b7c4439564">We check which visa you need, which country to apply to and what the embassy expects to see.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 21c1-4.5 4.2-6.5 8-6.5s7 2 8 6.5"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="b55832d239">Personalised customer assistance</h3>
                <p data-i="3aba7bac53">One team follows your case from the first message to the decision, in plain English and in your language.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <path d="M16 6.5A4 4 0 0 0 9 9v11"></path>
                  <path d="M6 20h12M6 13h8"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="5a5744e18d">Transparent service charges</h3>
                <p data-i="f286ec1f58">£89 per applicant for our Schengen package. Official visa and visa centre fees are shown separately, never hidden.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <path d="M7 3h7l5 5v13H7z"></path>
                  <path d="M14 3v5h5"></path>
                  <path d="m9.5 14 2 2 3.5-4"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="476002f0ce">Document preparation</h3>
                <p data-i="977906507b">Application form, cover letter, travel plan and a full check of every document, in the order the visa centre expects.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <path d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="18ab901890">Travel planning support</h3>
                <p data-i="ee92ea1d4f">Flight and hotel reservations, insurance guidance and holidays, planned around your visa dates.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="78fd580119">Clear communication</h3>
                <p data-i="6da9521f51">Replies within 2 hours in office hours, 7 days a week, with every date and next step in writing.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section aria-labelledby="rv-title" className="v-sec v-dark" id="reviews">
        <div className="v-wrap">
          <div className="v-head-split v-head-dark">
            <div>
              <p className="v-eyebrow v-eyebrow-gold">
                <span className="v-num notranslate">06</span>
                <span data-i="6dc5907195">Customer experiences</span>
              </p>
              <h2 className="v-h2 v-reveal" data-i="e6d204074c" id="rv-title">
                {"In our clients’ "}
                <em>own words.</em>
              </h2>
            </div>
            <div className="v-tp v-reveal">
              <p className="v-tp-score notranslate">4.0</p>
              <div>
                <p className="v-tp-label">
                  <span className="notranslate">Great</span>
                  {" "}
                  <span aria-label="4.0 out of 5" className="v-stars-r" data-i-aria-label="639c304f92" role="img">
                    <span>★★★★★</span>
                    <span style={{ "width": "80.0%" }}>★★★★★</span>
                  </span>
                </p>
                <p className="v-tp-meta">
                  <span>
                    <b className="notranslate">3</b>
                    {" "}
                    <span data-i="7d83328eeb">reviews on</span>
                  </span>
                  {" "}
                  <a data-i="3ca7d8b72b" href="https://uk.trustpilot.com/review/travelvista.uk" rel="noopener" target="_blank">Trustpilot</a>
                  {" · "}
                  <span data-i="80fca14b0b">Last checked:</span>
                  {" "}
                  <span className="notranslate">14 November 2026</span>
                </p>
              </div>
            </div>
          </div>
          <div className="v-rv-stage">
            <span aria-hidden="true" className="v-rv-q">“</span>
            <div className="v-rv-track">
              <figure aria-hidden="false" className="v-rv on" data-i="0">
                <span aria-label="Rated 5 out of 5" className="v-rv-stars" data-i-aria-label="e7f627f63c">★★★★★</span>
                <blockquote className="notranslate">
                  <p className="v-rv-title">“Quick and easy”</p>
                  <p>Quick and easy! Prompt comms and diligent at work! Got my visa in 4 days from the appointment ! Recommend</p>
                </blockquote>
                <figcaption>
                  <strong className="notranslate">Trustpilot customer</strong>
                  <span>
                    <span className="notranslate">6 November 2026</span>
                    {" · "}
                    <a data-i="a032b675c7" href="https://uk.trustpilot.com/reviews/6af6fdf97832d9fafd45d9bc" rel="noopener" target="_blank">Read on Trustpilot</a>
                  </span>
                </figcaption>
              </figure>
              <figure aria-hidden="true" className="v-rv" data-i="1">
                <span aria-label="Rated 5 out of 5" className="v-rv-stars" data-i-aria-label="e7f627f63c">★★★★★</span>
                <blockquote className="notranslate">
                  <p className="v-rv-title">“Best and Affordable Visa Service”</p>
                  <p>I had a really great experience with Travelvista Ltd for my visa services. The whole process was smooth, stress-free and professionally handled. I never had to worry about the documentation or paperwork, as everything was prepared accurately and on time. The management was excellent, and the service was also very affordable. A big thank y…</p>
                </blockquote>
                <figcaption>
                  <strong className="notranslate">Vareesha Umer</strong>
                  <span>
                    <span className="notranslate">6 November 2026</span>
                    {" · "}
                    <a data-i="a032b675c7" href="https://uk.trustpilot.com/reviews/6aedbd55712b7cf75b7e7c22" rel="noopener" target="_blank">Read on Trustpilot</a>
                  </span>
                </figcaption>
              </figure>
              <figure aria-hidden="true" className="v-rv" data-i="2">
                <span aria-label="Rated 5 out of 5" className="v-rv-stars" data-i-aria-label="e7f627f63c">★★★★★</span>
                <blockquote className="notranslate">
                  <p className="v-rv-title">“Great experience with TravelVista Ltd”</p>
                  <p>Great experience with TravelVista Ltd. The team was professional, friendly and very helpful. I was planning to visit Germany and they made the process smooth.. Really happy with the service..Highly recommend</p>
                </blockquote>
                <figcaption>
                  <strong className="notranslate">Muzammil Ilyas</strong>
                  <span>
                    <span className="notranslate">3 November 2026</span>
                    {" · "}
                    <a data-i="a032b675c7" href="https://uk.trustpilot.com/reviews/6aedbe6e518fd57441f96f6e" rel="noopener" target="_blank">Read on Trustpilot</a>
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="v-rv-nav">
              <button aria-label="Previous review" className="v-rv-prev" data-i-aria-label="fd6211f2a9" type="button">
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="18">
                  <path d="M19 12H5M11 6l-6 6 6 6"></path>
                </svg>
              </button>
              <div className="v-dots">
                <button aria-label="Review 1" className="v-dot on" data-go="0" data-i-aria-label="68f476ed8d" type="button"></button>
                <button aria-label="Review 2" className="v-dot" data-go="1" data-i-aria-label="0868426426" type="button"></button>
                <button aria-label="Review 3" className="v-dot" data-go="2" data-i-aria-label="8276e5416b" type="button"></button>
              </div>
              <button aria-label="Next review" className="v-rv-next" data-i-aria-label="933d88cd45" type="button">
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="18">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </button>
              {" "}
              <a className="v-btn v-btn-ghost v-btn-sm" data-i="935dc45f20" href="https://uk.trustpilot.com/evaluate/travelvista.uk" rel="noopener" target="_blank">Leave a review</a>
            </div>
          </div>
          <div className="v-ap-head">
            <h3 data-i="9ff5ebdba2">Recent visa approvals</h3>
            <p data-i="520f85738e">Shared with our clients’ written permission. Personal details are always hidden.</p>
          </div>
          <div className="v-ap-strip">
            <figure className="v-ap">
              <img alt="" height="380" loading="lazy" src="/assets/approvals/ch-2026-11-a.jpg" width="560" />
              {" "}
              <figcaption>
                <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/ch.svg" width="24" />
                <span>
                  <strong data-i="77dcd849e5">Switzerland</strong>
                  <small>
                    <span data-i="8624b4cc8f">Multiple entry</span>
                    {" · "}
                    <span className="notranslate">November 2026</span>
                  </small>
                </span>
                <em data-i="41b81eb8db">Approved</em>
              </figcaption>
            </figure>
            <figure className="v-ap">
              <img alt="" height="380" loading="lazy" src="/assets/approvals/is-2026-09-a.jpg" width="560" />
              {" "}
              <figcaption>
                <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/is.svg" width="24" />
                <span>
                  <strong data-i="b3c92eecf0">Iceland</strong>
                  <small>
                    <span data-i="8624b4cc8f">Multiple entry</span>
                    {" · "}
                    <span className="notranslate">September 2026</span>
                  </small>
                </span>
                <em data-i="41b81eb8db">Approved</em>
              </figcaption>
            </figure>
            <figure className="v-ap">
              <img alt="" height="380" loading="lazy" src="/assets/approvals/gr-2025-05-a.jpg" width="560" />
              {" "}
              <figcaption>
                <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/gr.svg" width="24" />
                <span>
                  <strong data-i="4902a456ca">Greece</strong>
                  <small>
                    <span data-i="8624b4cc8f">Multiple entry</span>
                    {" · "}
                    <span className="notranslate">May 2025</span>
                  </small>
                </span>
                <em data-i="41b81eb8db">Approved</em>
              </figcaption>
            </figure>
            <figure className="v-ap">
              <img alt="" height="380" loading="lazy" src="/assets/approvals/fr-2023-06-a.jpg" width="560" />
              {" "}
              <figcaption>
                <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/fr.svg" width="24" />
                <span>
                  <strong data-i="e3772ac4b4">France</strong>
                  <small>
                    <span data-i="8624b4cc8f">Multiple entry</span>
                    {" · "}
                    <span className="notranslate">June 2023</span>
                  </small>
                </span>
                <em data-i="41b81eb8db">Approved</em>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section aria-labelledby="tools-title" className="v-sec v-ivory" id="tools">
        <div className="v-wrap">
          <div className="v-head-split">
            <div>
              <p className="v-eyebrow">
                <span className="v-num notranslate">07</span>
                <span data-i="7941c0b685">TravelVista visa tools</span>
              </p>
              <h2 className="v-h2 v-reveal" data-i="60834a49a5" id="tools-title">
                {"Free tools for "}
                <em>clear answers.</em>
              </h2>
            </div>
            <p className="v-head-note v-reveal" data-i="a76ca2502f">Free, no sign-up. The tools give general guidance only. The embassy or consulate makes every visa decision.</p>
          </div>
          <div className="v-tools">
            <div aria-label="Visa tools" className="v-tabs" data-i-aria-label="7d3fbc106b" role="tablist">
              <button aria-controls="vtp-0" aria-selected="true" className="v-tab" id="vt-0" role="tab" tabIndex="0" type="button">
                <span className="v-tab-n notranslate">01</span>
                <span className="v-tab-t" data-i="5a58e69439">Visa Eligibility Checker</span>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <path d="m5 12.5 4.5 4.5L19 7.5"></path>
                </svg>
              </button>
              <button aria-controls="vtp-1" aria-selected="false" className="v-tab" id="vt-1" role="tab" tabIndex="-1" type="button">
                <span className="v-tab-n notranslate">02</span>
                <span className="v-tab-t" data-i="c3c4a8d465">Visa Cost Calculator</span>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <rect height="18" rx="1.5" width="14" x="5" y="3"></rect>
                  <path d="M8 7h8M8.5 11h1M11.5 11h1M14.5 11h1M8.5 14.5h1M11.5 14.5h1M14.5 14.5v3M8.5 18h1M11.5 18h1"></path>
                </svg>
              </button>
              <button aria-controls="vtp-2" aria-selected="false" className="v-tab" id="vt-2" role="tab" tabIndex="-1" type="button">
                <span className="v-tab-n notranslate">03</span>
                <span className="v-tab-t" data-i="995ce2dcc7">Document Checklist Generator</span>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <path d="M7 3h7l5 5v13H7z"></path>
                  <path d="M14 3v5h5"></path>
                  <path d="m9.5 14 2 2 3.5-4"></path>
                </svg>
              </button>
              <button aria-controls="vtp-3" aria-selected="false" className="v-tab" id="vt-3" role="tab" tabIndex="-1" type="button">
                <span className="v-tab-n notranslate">04</span>
                <span className="v-tab-t" data-i="bbad869c55">Schengen 90/180 Calculator</span>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <rect height="15.5" rx="1.5" width="17" x="3.5" y="5"></rect>
                  <path d="M3.5 10h17M8 3v4M16 3v4M8 14h3M13 14h3M8 17h3"></path>
                </svg>
              </button>
              <button aria-controls="vtp-4" aria-selected="false" className="v-tab" id="vt-4" role="tab" tabIndex="-1" type="button">
                <span className="v-tab-n notranslate">05</span>
                <span className="v-tab-t" data-i="75d93ccc18">Destination Information</span>
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18M12 3c-2.8 2.6-2.8 15.4 0 18"></path>
                </svg>
              </button>
            </div>
            <div className="v-tpanels">
              <div aria-labelledby="vt-0" className="v-tp-panel" id="vtp-0" role="tabpanel">
                <div aria-hidden="true" className="v-tp-mock">
                  <div className="v-tm v-tm-check">
                    <span className="v-tm-l" data-i="d5ed1ca0e3">Passport</span>
                    <span className="v-tm-f" data-i="967ce367d8">India</span>
                    <span className="v-tm-l" data-i="95bcbb38c3">UK status</span>
                    <span className="v-tm-f" data-i="65e506e3d3">Skilled worker</span>
                    <span className="v-tm-l" data-i="d42713493c">Destination</span>
                    <span className="v-tm-f" data-i="e3772ac4b4">France</span>
                    <span className="v-tm-r" data-i="ecd5fb7f80">Schengen visa needed</span>
                  </div>
                </div>
                <div className="v-tp-copy">
                  <h3 data-i="5a58e69439">Visa Eligibility Checker</h3>
                  <p data-i="4297179c7d">Check by passport, UK status and destination whether you need a visa, and which visa centre you would use.</p>
                  <a className="v-btn v-btn-red v-btn-sm" href="/visa-checker">
                    <span data-i="a565909ec9">Open tool</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div aria-labelledby="vt-1" className="v-tp-panel" hidden={true} id="vtp-1" role="tabpanel">
                <div aria-hidden="true" className="v-tp-mock">
                  <div className="v-tm v-tm-cost">
                    <p>
                      <span data-i="049b425317">Service fee</span>
                      <b>£89 × 2</b>
                    </p>
                    <p>
                      <span data-i="a1f1054d86">Visa fee</span>
                      <b>€90 × 2</b>
                    </p>
                    <p>
                      <span data-i="1d4a118223">Visa centre fee</span>
                      <b data-i="f14184dd2c">set by centre</b>
                    </p>
                    <p className="v-tm-tot">
                      <span data-i="92a09e7056">Your estimate</span>
                      <b data-i="f7f719976c">shown in £</b>
                    </p>
                  </div>
                </div>
                <div className="v-tp-copy">
                  <h3 data-i="c3c4a8d465">Visa Cost Calculator</h3>
                  <p data-i="1c055fba7c">Add up our service fee, the official visa fee and the visa centre fee for your whole group.</p>
                  <a className="v-btn v-btn-red v-btn-sm" href="/cost-calculator">
                    <span data-i="a565909ec9">Open tool</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div aria-labelledby="vt-2" className="v-tp-panel" hidden={true} id="vtp-2" role="tabpanel">
                <div aria-hidden="true" className="v-tp-mock">
                  <div className="v-tm v-tm-docs">
                    <p className="on" data-i="d5ed1ca0e3">Passport</p>
                    <p className="on" data-i="ea727385dc">Proof of UK status</p>
                    <p className="on" data-i="fab094f1ba">Travel insurance</p>
                    <p data-i="7ae635026e">Bank statements</p>
                    <p data-i="a54290dcb4">Employer letter</p>
                  </div>
                </div>
                <div className="v-tp-copy">
                  <h3 data-i="995ce2dcc7">Document Checklist Generator</h3>
                  <p data-i="1f09e74554">Get a checklist for your situation, tick items off as you go and save it as a PDF.</p>
                  <a className="v-btn v-btn-red v-btn-sm" href="/document-checklist">
                    <span data-i="a565909ec9">Open tool</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div aria-labelledby="vt-3" className="v-tp-panel" hidden={true} id="vtp-3" role="tabpanel">
                <div aria-hidden="true" className="v-tp-mock">
                  <div className="v-tm v-tm-days">
                    <div className="v-tm-ring">
                      <b>62</b>
                      <span data-i="0575b7b5d6">days left</span>
                    </div>
                    <div className="v-tm-cal">
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className="u"></i>
                      <i className="u"></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                      <i className=""></i>
                    </div>
                  </div>
                </div>
                <div className="v-tp-copy">
                  <h3 data-i="bbad869c55">Schengen 90/180 Calculator</h3>
                  <p data-i="d6b8892ff5">Count the days you have used in the Schengen area and see how long you can still stay.</p>
                  <a className="v-btn v-btn-red v-btn-sm" href="/schengen-calculator">
                    <span data-i="a565909ec9">Open tool</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div aria-labelledby="vt-4" className="v-tp-panel" hidden={true} id="vtp-4" role="tabpanel">
                <div aria-hidden="true" className="v-tp-mock">
                  <div className="v-tm v-tm-dest">
                    <p>
                      <img alt="" height="18" loading="lazy" src="/assets/v2/flags/fr.svg" width="24" />
                      <span data-i="e3772ac4b4">France</span>
                      <b data-i="3c543452c9">TLScontact</b>
                    </p>
                    <p>
                      <img alt="" height="18" loading="lazy" src="/assets/v2/flags/es.svg" width="24" />
                      <span data-i="20a8df9b76">Spain</span>
                      <b data-i="d133f331db">BLS International</b>
                    </p>
                    <p>
                      <img alt="" height="18" loading="lazy" src="/assets/v2/flags/it.svg" width="24" />
                      <span data-i="ad79ef0f07">Italy</span>
                      <b data-i="3b54d2500e">VFS Global</b>
                    </p>
                  </div>
                </div>
                <div className="v-tp-copy">
                  <h3 data-i="75d93ccc18">Destination Information</h3>
                  <p data-i="bf898ebdad">Explore every Schengen country, its visa centre and key documents, or spin the globe above.</p>
                  <a className="v-btn v-btn-red v-btn-sm" href="/#schengen">
                    <span data-i="a565909ec9">Open tool</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="faq-title" className="v-sec v-white" id="faq">
        <div className="v-wrap v-faq">
          <div className="v-faq-side">
            <p className="v-eyebrow">
              <span className="v-num notranslate">08</span>
              <span data-i="af90cef809">Frequently asked questions</span>
            </p>
            <h2 className="v-h2 v-reveal" data-i="573a164524" id="faq-title">
              {"Questions, "}
              <em>answered.</em>
            </h2>
            <p className="v-reveal" data-i="6cf267d910">Can’t find what you need? Our team replies within 2 hours in office hours.</p>
            <a className="v-link" href="/contact">
              <span data-i="06723e6255">Contact our team</span>
              {" "}
              <span aria-hidden="true" className="v-arr">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="v-faq-list">
            <details className="v-faq-i">
              <summary>
                <span data-i="4dfebc23f5">Do I need a Schengen visa if I live in the UK?</span>
                <span aria-hidden="true" className="v-faq-pm"></span>
              </summary>
              <div className="v-faq-a">
                <p data-i="3d068854d9">It depends on your passport, not where you live. British citizens do not need a visa for short trips of up to 90 days in any 180-day period.</p>
                <p data-i="77d53274b5">Many non-British passport holders living in the UK, for example people with Indian, Pakistani, Nigerian or Chinese passports, do need one. We check this for free in your first consultation.</p>
              </div>
            </details>
            <details className="v-faq-i">
              <summary>
                <span data-i="85684e1cc1">How much does a Schengen visa cost?</span>
                <span aria-hidden="true" className="v-faq-pm"></span>
              </summary>
              <div className="v-faq-a">
                <p data-i="08ec63a631">Our Schengen visa package is £89 per applicant. On top of that you pay the official visa fee (€90 for adults, €45 for children aged 6 to 11, free under 6) and the visa centre's own service fee.</p>
              </div>
            </details>
            <details className="v-faq-i">
              <summary>
                <span data-i="a17bb19b60">How early should I apply?</span>
                <span aria-hidden="true" className="v-faq-pm"></span>
              </summary>
              <div className="v-faq-a">
                <p data-i="e0e83083ba">You can apply up to 6 months before your trip and no later than 15 days before. Appointments can fill up quickly in busy months, so we recommend starting as early as you can.</p>
              </div>
            </details>
            <details className="v-faq-i">
              <summary>
                <span data-i="91b65d1370">Can you guarantee my visa will be approved?</span>
                <span aria-hidden="true" className="v-faq-pm"></span>
              </summary>
              <div className="v-faq-a">
                <p data-i="ccd775d953">No one can guarantee approval. The embassy or consulate makes every decision. Our job is to make sure your application is complete, correct and clearly supports your trip.</p>
              </div>
            </details>
            <details className="v-faq-i">
              <summary>
                <span data-i="b3aaa0dc0e">Can you help if I am on a student, work or family visa?</span>
                <span aria-hidden="true" className="v-faq-pm"></span>
              </summary>
              <div className="v-faq-a">
                <p data-i="8036add689">Yes. We help eVisa holders on student, skilled worker, dependant, family and settled status. Your UK permission must stay valid for your trip and usually for a period after your return.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section aria-labelledby="cta-title" className="v-cta">
        <div className="v-cta-img">
          <img alt="Aircraft wing above clouds and green land" className="" decoding="async" height="1080" loading="lazy" sizes="100vw" src={"https://images.unsplash.com/photo-1768069932751-a070c2ef5670?auto=format&fit=crop&q=72&w=1920&h=1080"} srcset={"https://images.unsplash.com/photo-1768069932751-a070c2ef5670?auto=format&fit=crop&q=72&w=480&h=270 480w, https://images.unsplash.com/photo-1768069932751-a070c2ef5670?auto=format&fit=crop&q=72&w=800&h=450 800w, https://images.unsplash.com/photo-1768069932751-a070c2ef5670?auto=format&fit=crop&q=72&w=1200&h=675 1200w, https://images.unsplash.com/photo-1768069932751-a070c2ef5670?auto=format&fit=crop&q=72&w=1600&h=900 1600w"} width="1920" />
        </div>
        <div className="v-wrap v-cta-in">
          <p className="v-eyebrow v-eyebrow-gold" data-i="f1848cc5e8">
            <span aria-hidden="true" className="v-rule"></span>
            TravelVista Ltd · Your Journey, Our Priority
          </p>
          <h2 className="v-h1 v-reveal" id="cta-title">
            <span className="v-line" data-i="9601cc1279">Your Next Journey</span>
            {" "}
            <span className="v-line v-serif" data-i="38db35e833">Starts Here.</span>
          </h2>
          <p className="v-lead v-reveal" data-i="127d03e738">Let TravelVista help you prepare for your next international journey.</p>
          <div className="v-ctas v-reveal">
            <a className="v-btn v-btn-white" data-i="f4a1846260" href="/contact">Speak to Our Team</a>
            {" "}
            <a className="v-btn v-btn-red" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20free%20visa%20consultation." rel="noopener" target="_blank">
              <span data-i="43bcbb7183">Get Free Consultation</span>
              {" "}
              <span aria-hidden="true" className="v-arr">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer2 />
    </>
  );
}
