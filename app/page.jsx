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
          <div className="grid">
            <a className="card svc" href="/schengen-visa">
              <span className="card-top">
                <span className="badge">EU</span>
                <span className="tag" data-i="fb110f6f0e">29 countries</span>
              </span>
              <h3 data-i="e8f1e9ab2e">Schengen visa</h3>
              <p data-i="a65e0c8136">Full support for short-stay Schengen visas: checklist, forms, appointment and document review.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/france-visa-from-uk">
              <span className="card-top">
                <span className="badge">FR</span>
                <span className="tag" data-i="3c543452c9">TLScontact</span>
              </span>
              <h3 data-i="5b7b21c8b9">France visa</h3>
              <p data-i="f06adad238">France-Visas form, TLScontact appointment and a document check before you go.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/spain-visa-from-uk">
              <span className="card-top">
                <span className="badge">ES</span>
                <span className="tag" data-i="d133f331db">BLS International</span>
              </span>
              <h3 data-i="61c580383b">Spain visa</h3>
              <p data-i="b6b82e802e">Help with BLS appointments in London, Manchester and Edinburgh.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/italy-visa-from-uk">
              <span className="card-top">
                <span className="badge">IT</span>
                <span className="tag" data-i="3b54d2500e">VFS Global</span>
              </span>
              <h3 data-i="58d03af574">Italy visa</h3>
              <p data-i="99e5810ea4">Document preparation and booking support for VFS Global.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/usa-visa-from-uk">
              <span className="card-top">
                <span className="badge">US</span>
                <span className="tag">B1/B2</span>
              </span>
              <h3 data-i="bbb0a4dfea">USA visitor visa</h3>
              <p data-i="56e3da7c25">DS-160 form help, documents and interview preparation.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/canada-visa-from-uk">
              <span className="card-top">
                <span className="badge">CA</span>
                <span className="tag" data-i="c4ad58f74f">{"Visitor & Super Visa"}</span>
              </span>
              <h3 data-i="d776d27d0b">Canada visitor visa</h3>
              <p data-i="f77fe060d0">Guidance on Canada visitor visas and the Super Visa for parents and grandparents.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/turkey-visa-from-uk">
              <span className="card-top">
                <span className="badge">TR</span>
                <span className="tag" data-i="d054fa324f">{"e-Visa & sticker"}</span>
              </span>
              <h3 data-i="e189338627">Turkey visa</h3>
              <p data-i="7e1b8dd0a7">We check if you can use the e-Visa or need a visa from the consulate.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/dubai-visa-from-uk">
              <span className="card-top">
                <span className="badge">AE</span>
                <span className="tag" data-i="26c1f8eb11">UAE</span>
              </span>
              <h3 data-i="feac6ceeea">Dubai visa</h3>
              <p data-i="7785731727">We check your options and help you get the right UAE visit visa.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
            </a>
            <a className="card svc" href="/holidays">
              <span className="card-top">
                <span className="badge">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z" fill="currentColor"></path>
                  </svg>
                </span>
                <span className="tag" data-i="9cc650af29">{"Flights & hotels"}</span>
              </span>
              <h3 data-i="80729cc5d8">Holidays</h3>
              <p data-i="c46f7e5ec7">Flights, hotels and tailored European trips, planned around your visa.</p>
              <span className="more" data-i="1d1bdd579e">
                {"Learn more "}
                <span aria-hidden="true">→</span>
              </span>
              <span aria-hidden="true" className="swoosh"></span>
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
          <ol className="steps">
            <li>
              <h3 data-i="5f49e1ce7b">Send your query</h3>
              <p data-i="cbc54feb1f">Message us on WhatsApp or use the enquiry form. Tell us your passport, UK status, destination and travel dates.</p>
            </li>
            <li>
              <h3 data-i="f67e64b8a8">Get your document list</h3>
              <p data-i="781e01a969">We confirm which visa you need and send you a checklist made for your case.</p>
            </li>
            <li>
              <h3 data-i="74bc612b50">Send us your documents</h3>
              <p data-i="b2a7a2e8ef">Share copies of your passport, UK status, bank statements and work or study letters.</p>
            </li>
            <li>
              <h3 data-i="cec0dab072">We prepare your file</h3>
              <p data-i="7a4a90a445">We complete your application form, write your cover letter, arrange your travel plan and check every document.</p>
            </li>
            <li>
              <h3 data-i="04383c3b1f">We book your appointment</h3>
              <p data-i="a29ae33318">We book the earliest appointment available at the visa centre and send you the date and time.</p>
            </li>
            <li>
              <h3 data-i="97d60cc7b3">Attend with your file</h3>
              <p data-i="e8010bf524">You take your ready file to the appointment and give your fingerprints. We help you follow your application until the decision.</p>
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
