import Header3i from "../../components/Header3i";
import Footer3 from "../../components/Footer3";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "European Holidays, Flights & Hotels from the UK | TravelVista",
  "description": "Tailored European holidays, flights and hotel bookings from the UK, planned together with your Schengen visa. Get a free quote from TravelVista in London.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/holidays"
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
    "title": "European Holidays, Flights & Hotels from the UK | TravelVista",
    "description": "Tailored European holidays, flights and hotel bookings from the UK, planned together with your Schengen visa. Get a free quote from TravelVista in London.",
    "url": "https://www.travelvista.uk/holidays",
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
        "name": "Holidays",
        "item": "https://www.travelvista.uk/holidays"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header3i current="/holidays" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp72" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp72"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="/">Home</a>
              </li>
              <li aria-current="page" data-i="80729cc5d8">Holidays</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="60439feab4">Flights · Hotels · Tailored trips</p>
          <h1 data-i="a553928a55" style={{ "marginTop": "10px" }}>Holidays and travel bookings</h1>
          <p className="lead" data-i="8ae2b11785">Flights, hotels and tailored trips planned around your visa. Tell us your dates and budget and we send you a quote.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="418ecb0bd4">Popular trips</h2>
            <p className="muted" data-i="d27e691cfe">Every trip is tailored to your dates, budget and visa situation.</p>
          </div>
          <div className="grid">
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Paris." rel="noopener" target="_blank">
              <span className="tag" data-i="e3772ac4b4">France</span>
              <h3 data-i="22390ad11c">Paris</h3>
              <p data-i="18cfdc5877">City break with central hotel options and Schengen visa guidance.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Rome." rel="noopener" target="_blank">
              <span className="tag" data-i="ad79ef0f07">Italy</span>
              <h3 data-i="da7705caa1">Rome</h3>
              <p data-i="87bb2e4c01">History, food and a hotel close to the main sights.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Barcelona." rel="noopener" target="_blank">
              <span className="tag" data-i="20a8df9b76">Spain</span>
              <h3 data-i="122a417e6d">Barcelona</h3>
              <p data-i="193c3340d7">Beach and city in one trip, with flights from London or Manchester.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Amsterdam." rel="noopener" target="_blank">
              <span className="tag" data-i="fb61c8a8eb">Netherlands</span>
              <h3 data-i="2dce283e0e">Amsterdam</h3>
              <p data-i="984578c86b">Canals, museums and easy day trips.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Swiss%20Alps." rel="noopener" target="_blank">
              <span className="tag" data-i="77dcd849e5">Switzerland</span>
              <h3 data-i="1160b4b4b4">Swiss Alps</h3>
              <p data-i="c65efb86b1">Mountain stays with scenic train routes.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
            <a className="card" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20quote%20for%20a%20trip%20to%20Istanbul." rel="noopener" target="_blank">
              <span className="tag" data-i="d7153e6702">Turkey</span>
              <h3 data-i="f576d38716">Istanbul</h3>
              <p data-i="9888ff49c5">City break with visa checks for your passport.</p>
              <span className="more" data-i="1445ee52da">Get a quote on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i="d484fc2fcd">What we can arrange</h2>
          </div>
          <div className="grid">
            <div className="card">
              <h3 data-i="2edc9e02f0">Flights</h3>
              <p data-i="253bb34536">Return flights from London and other UK airports.</p>
            </div>
            <div className="card">
              <h3 data-i="44dbc167cc">Hotels</h3>
              <p data-i="35d00f028e">Hotels in the areas you want, with bookings that match your visa application.</p>
            </div>
            <div className="card">
              <h3 data-i="245ee03f85">Visa and trip together</h3>
              <p data-i="d7e2561298">We plan your itinerary and your visa application at the same time so the details match.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <svg aria-hidden="true" className="flight flight-cta" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 220">
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp73" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp73"></mpath>
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
