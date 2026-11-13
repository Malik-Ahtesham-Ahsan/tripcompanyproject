import Header2 from "../../components/Header2";
import Footer2 from "../../components/Footer2";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "About TravelVista Ltd | London Visa & Travel Consultancy",
  "description": "About TravelVista Ltd: a London-based visa and travel consultancy for UK residents. Company number 17414589.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/about"
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
    "title": "About TravelVista Ltd | London Visa & Travel Consultancy",
    "description": "About TravelVista Ltd: a London-based visa and travel consultancy for UK residents. Company number 17414589.",
    "url": "https://www.travelvista.uk/about",
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
    "@type": "AboutPage",
    "name": "About TravelVista Ltd",
    "url": "https://www.travelvista.uk/about"
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header2 current="/about" />
      <main id="main">
      <section aria-labelledby="ab-title" className="v-phero">
        <div className="v-phero-img">
          <img alt="London skyline from Southwark Bridge" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <div className="v-wrap v-phero-in">
          <nav aria-label="Breadcrumb" className="v-crumbs" data-i-aria-label="c766e66518">
            <a data-i="70f8bb9a8a" href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span data-i="3ffb811f9b">About us</span>
          </nav>
          <p className="v-eyebrow v-eyebrow-gold" data-i="e6719c6369">
            <span aria-hidden="true" className="v-rule"></span>
            About TravelVista
          </p>
          <h1 className="v-h1" id="ab-title">
            <span className="v-line" data-i="423a8d05bb">Your Journey,</span>
            {" "}
            <span className="v-line v-serif" data-i="12c517252b">Our Priority.</span>
          </h1>
          <p className="v-lead" data-i="8033b2046b">A London-based visa and travel consultancy helping people who live in the UK travel the world with confidence.</p>
        </div>
      </section>
      <section aria-labelledby="ab-who" className="v-sec v-ivory">
        <div className="v-wrap v-intro">
          <div className="v-intro-copy">
            <p className="v-eyebrow" data-i="cdab446359">Who we are</p>
            <h2 className="v-h2 v-reveal" data-i="ba9dfad60f" id="ab-who">
              {"A consultancy built around "}
              <em>careful preparation.</em>
            </h2>
            <p className="v-reveal" data-i="e0f5209c76">TravelVista Ltd is a UK company that helps residents of the UK apply for visitor visas, with a focus on the Schengen area. We prepare complete application files, book visa appointments and arrange the travel around them: flight and hotel reservations, travel insurance guidance and tailored holidays.</p>
            <p className="v-reveal" data-i="48bc695648">Many of our clients hold passports from outside the UK and live here on work, study, family or settled status. We explain what their situation means for their application, in plain language, and we stay with them until the embassy decides.</p>
          </div>
          <div className="v-intro-media v-reveal">
            <figure className="v-intro-a">
              <img alt="Clouds seen through an aircraft window" className="" decoding="async" height="1125" loading="lazy" sizes="(max-width: 900px) 90vw, 40vw" src={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=900&h=1125"} srcset={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=480&h=600 480w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=800&h=1000 800w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1200&h=1500 1200w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1600&h=2000 1600w"} width="900" />
            </figure>
          </div>
        </div>
      </section>
      <section aria-labelledby="ab-how" className="v-sec v-white">
        <div className="v-wrap v-why">
          <div className="v-why-side">
            <p className="v-eyebrow" data-i="0af10369c9">How we support you</p>
            <h2 className="v-h2 v-reveal" data-i="f8135d6beb" id="ab-how">
              {"Clear answers, "}
              <em>at every step.</em>
            </h2>
          </div>
          <ol className="v-why-list">
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <path d="M4 5h16v11H9l-5 4z"></path>
                  <path d="M8 9.5h8M8 12.5h5"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="254d01fa73">A free first consultation</h3>
                <p data-i="988f0ea4a4">Tell us your passport, UK status and destination. We tell you which visa you need and what it involves, free of charge.</p>
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
                <h3 data-i="515f891cdf">Fees agreed before we start</h3>
                <p data-i="9082e01464">Our Schengen package is £89 per applicant. Official visa fees and visa centre fees are paid separately, and we show them to you up front.</p>
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
                <h3 data-i="b53773bf14">Replies within 2 hours</h3>
                <p data-i="6d72c36086">In office hours, 7 days a week: Monday to Friday 9:00–19:00, Saturday 10:00–17:00 and Sunday 11:00–15:00. WhatsApp messages any time.</p>
              </div>
            </li>
            <li className="v-why-i v-reveal">
              <span className="v-why-ic">
                <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                  <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              <div>
                <h3 data-i="0c716426c3">Your data, handled with care</h3>
                <p data-i="bd629cf993">
                  {"We use your documents only to prepare your application, and we follow UK data protection law. Read our "}
                  <a href="/privacy">privacy policy</a>
                  .
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section aria-labelledby="ab-co" className="v-sec v-deep">
        <div className="v-wrap v-co">
          <div>
            <p className="v-eyebrow v-eyebrow-gold" data-i="e09d4f1149">Company information</p>
            <h2 className="v-h2" data-i="1f3917a57e" id="ab-co">TravelVista Ltd</h2>
          </div>
          <dl className="v-co-dl">
            <div>
              <dt data-i="fc82198497">Registered in</dt>
              <dd data-i="ff2166aa40">England and Wales</dd>
            </div>
            <div>
              <dt data-i="a227f3e785">Company number</dt>
              <dd className="notranslate">17414589</dd>
            </div>
            <div>
              <dt data-i="0eacd1acf0">Registered office</dt>
              <dd className="notranslate">273 Hampton Road, Ilford, IG1 1PN, United Kingdom</dd>
            </div>
            <div>
              <dt data-i="1c4fd107e8">London office (correspondence)</dt>
              <dd className="notranslate">128 Kingsway, London, WC2B 6NH, United Kingdom</dd>
            </div>
            <div>
              <dt data-i="761609694e">WhatsApp and phone</dt>
              <dd>
                <a className="notranslate" href="https://wa.me/447862609755" rel="noopener" target="_blank">+44 7862 609755</a>
              </dd>
            </div>
            <div>
              <dt data-i="84add5b295">Email</dt>
              <dd>
                <a className="notranslate" href="mailto:info@travelvista.uk">info@travelvista.uk</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section aria-labelledby="ab-lim" className="v-sec v-ivory">
        <div className="v-wrap v-lim">
          <p className="v-eyebrow" data-i="3fde89d79a">Service limitations</p>
          <h2 className="v-h2 v-reveal" data-i="6a31353f9a" id="ab-lim">
            {"What we do, "}
            <em>and what we don’t.</em>
          </h2>
          <div className="v-lim-grid">
            <div className="v-reveal">
              <h3 data-i="762132bc4b">We do</h3>
              <ul className="v-ticks">
                <li data-i="4cdeb1ea5e">Check which visa you need and prepare your complete application file</li>
                <li data-i="65a317f677">Book your appointment at the visa application centre</li>
                <li data-i="1347a85498">Arrange flight and hotel reservations and holiday plans</li>
                <li data-i="ece96fc1c2">Answer your questions until a decision is made</li>
              </ul>
            </div>
            <div className="v-reveal">
              <h3 data-i="69aa772159">We don’t</h3>
              <ul className="v-cross">
                <li data-i="088d6232c7">Decide visa applications. The embassy, consulate or immigration authority makes every decision</li>
                <li data-i="8585c4fd47">Guarantee approval, processing times or appointment availability</li>
                <li data-i="439ae93522">Represent any government, embassy or visa application centre</li>
                <li data-i="23e0336e17">Include official visa fees or visa centre fees in our service fee</li>
              </ul>
            </div>
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
