import Header3 from "../../components/Header3";
import Footer3 from "../../components/Footer3";
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
      <Header3 current="/about" />
      <main id="main">
      <section aria-labelledby="ab-title" className="v3-hero v3-hero-sm">
        <div aria-hidden="true" className="v3-hero-media">
          <img alt="" className="v3-hero-img" fetchpriority="high" height="1300" sizes="100vw" src={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=2400&h=1300"} srcset={"https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=480&h=260 480w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=800&h=433 800w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1200&h=650 1200w, https://images.unsplash.com/photo-1511882018853-d4006256d2e6?auto=format&fit=crop&q=72&w=1600&h=867 1600w"} width="2400" />
        </div>
        <div aria-hidden="true" className="v3-hero-shade"></div>
        <div className="v-wrap v3-hero-in">
          <nav aria-label="Breadcrumb" className="v-crumbs" data-i-aria-label="c766e66518">
            <a data-i="70f8bb9a8a" href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span data-i="3ffb811f9b">About us</span>
          </nav>
          <p className="v3-eye v3-eye-gold" data-i="0d28c1d5fa">
            <span aria-hidden="true" className="v3-rule"></span>
            About TravelVista
          </p>
          <h1 className="v3-display" id="ab-title">
            <span className="v3-ln">
              <span data-i="074e8cf706">Your journey,</span>
            </span>
            {" "}
            <span className="v3-ln">
              <em data-i="a86f2fbcb2">our priority.</em>
            </span>
          </h1>
          <p className="v3-hero-lead" data-i="8033b2046b">A London-based visa and travel consultancy helping people who live in the UK travel the world with confidence.</p>
        </div>
      </section>
      <section aria-labelledby="ab-story" className="v3-sec v3-ivory">
        <div className="v-wrap v3-intro-grid">
          <div className="v3-intro-text">
            <p className="v3-eye" data-i="f7f75743e6">
              <span aria-hidden="true" className="v3-rule"></span>
              Our story
            </p>
            <h2 className="v3-h2 v3-anim" data-i="ba9dfad60f" id="ab-story">
              {"A consultancy built around "}
              <em>careful preparation.</em>
            </h2>
            <div className="v3-cols v3-anim">
              <p data-i="e0f5209c76">TravelVista Ltd is a UK company that helps residents of the UK apply for visitor visas, with a focus on the Schengen area. We prepare complete application files, book visa appointments and arrange the travel around them: flight and hotel reservations, travel insurance guidance and tailored holidays.</p>
              <p data-i="48bc695648">Many of our clients hold passports from outside the UK and live here on work, study, family or settled status. We explain what their situation means for their application, in plain language, and we stay with them until the embassy decides.</p>
            </div>
          </div>
          <div className="v3-intro-media">
            <figure className="v3-fig v3-fig-a v3-mask">
              <img alt="Clouds seen through an aircraft window" className="" decoding="async" height="1200" loading="lazy" sizes="(max-width: 900px) 80vw, 34vw" src={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=900&h=1200"} srcset={"https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=480&h=640 480w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=800&h=1067 800w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1200&h=1600 1200w, https://images.unsplash.com/photo-1515102597191-fe409fca9804?auto=format&fit=crop&q=72&w=1600&h=2133 1600w"} width="900" />
            </figure>
            <figure className="v3-fig v3-fig-b v3-mask">
              <img alt="A traveller walking through a bright airport terminal" className="" decoding="async" height="600" loading="lazy" sizes="(max-width: 900px) 60vw, 24vw" src={"https://images.unsplash.com/photo-1687992193298-af75164a10bd?auto=format&fit=crop&q=72&w=800&h=600"} srcset={"https://images.unsplash.com/photo-1687992193298-af75164a10bd?auto=format&fit=crop&q=72&w=480&h=360 480w, https://images.unsplash.com/photo-1687992193298-af75164a10bd?auto=format&fit=crop&q=72&w=800&h=600 800w, https://images.unsplash.com/photo-1687992193298-af75164a10bd?auto=format&fit=crop&q=72&w=1200&h=900 1200w, https://images.unsplash.com/photo-1687992193298-af75164a10bd?auto=format&fit=crop&q=72&w=1600&h=1200 1600w"} width="800" />
            </figure>
          </div>
        </div>
      </section>
      <section aria-labelledby="ab-appr" className="v3-sec v3-dark">
        <div className="v-wrap v3-approach">
          <div>
            <p className="v3-eye v3-eye-gold" data-i="00d622e228">
              <span aria-hidden="true" className="v3-rule"></span>
              Our approach
            </p>
            <h2 className="v3-h2 v3-anim" data-i="f33129cb1f" id="ab-appr">
              {"Every application, "}
              <em>prepared as if it were our own.</em>
            </h2>
          </div>
          <div className="v3-cols v3-anim">
            <p data-i="c36bfb7de9">We start with a free conversation: your passport, your UK status, your destination and your dates. From there we confirm which visa you need, send a document list made for your situation and check everything you send.</p>
            <p data-i="c51a814752">We book the earliest appointment the visa centre offers, prepare your forms and cover letter, and arrange the flights, hotels and insurance guidance your application needs. Our Schengen package is £89 per applicant; official visa and visa centre fees are shown separately.</p>
          </div>
        </div>
      </section>
      <section aria-labelledby="ab-val" className="v3-sec v3-ivory">
        <div className="v-wrap">
          <div className="v3-head">
            <p className="v3-eye" data-i="ea44c5726d">
              <span aria-hidden="true" className="v3-rule"></span>
              Our values
            </p>
            <h2 className="v3-h2 v3-anim" data-i="840ec2c308" id="ab-val">
              {"What we hold "}
              <em>ourselves to.</em>
            </h2>
          </div>
          <ol className="v3-values">
            <li>
              <span className="notranslate">01</span>
              <h3 data-i="779db9a7c6">Care</h3>
              <p data-i="7a5a9b1e59">We treat every application as if it were our own trip, because for our clients it matters that much.</p>
            </li>
            <li>
              <span className="notranslate">02</span>
              <h3 data-i="03543111f1">Clarity</h3>
              <p data-i="a471d31fce">Plain language, written next steps and fees agreed before we start.</p>
            </li>
            <li>
              <span className="notranslate">03</span>
              <h3 data-i="0e1a829245">Honesty</h3>
              <p data-i="e5cdfbefa5">We tell you what we can and cannot do. No one can guarantee a visa, and we never pretend otherwise.</p>
            </li>
            <li>
              <span className="notranslate">04</span>
              <h3 data-i="81f3f74e22">Responsiveness</h3>
              <p data-i="ae24ce501f">Replies within 2 hours in office hours, seven days a week.</p>
            </li>
          </ol>
        </div>
      </section>
      <section aria-labelledby="ab-com" className="v3-sec v3-white">
        <div className="v-wrap v3-aboutt-grid">
          <figure className="v3-fig v3-mask">
            <img alt="Planning a trip at a laptop with a view" className="" decoding="async" height="900" loading="lazy" sizes="(max-width: 900px) 100vw, 55vw" src={"https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?auto=format&fit=crop&q=72&w=1400&h=900"} srcset={"https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?auto=format&fit=crop&q=72&w=480&h=309 480w, https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?auto=format&fit=crop&q=72&w=800&h=514 800w, https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?auto=format&fit=crop&q=72&w=1200&h=771 1200w, https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?auto=format&fit=crop&q=72&w=1600&h=1029 1600w"} width="1400" />
          </figure>
          <div>
            <p className="v3-eye" data-i="dd90d79540">
              <span aria-hidden="true" className="v3-rule"></span>
              Our commitment to you
            </p>
            <h2 className="v3-h2 v3-anim" data-i="f8135d6beb" id="ab-com">
              {"Clear answers, "}
              <em>at every step.</em>
            </h2>
            <ul className="v3-commit">
              <li data-i="254d01fa73">A free first consultation</li>
              <li data-i="515f891cdf">Fees agreed before we start</li>
              <li data-i="4dc21415d9">Replies within 2 hours in office hours, 7 days a week: Monday to Friday 9:00–19:00, Saturday 10:00–17:00 and Sunday 11:00–15:00</li>
              <li data-i="73f80b1036">
                {"Your documents used only to prepare your application, under UK data protection law. Read our "}
                <a href="/privacy">privacy policy</a>
                .
              </li>
            </ul>
          </div>
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
      <section aria-labelledby="ct-title" className="v3-cta">
        <div aria-hidden="true" className="v3-cta-media">
          <img alt="" className="" decoding="async" height="1100" loading="lazy" sizes="100vw" src={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=2000&h=1100"} srcset={"https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=480&h=264 480w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=800&h=440 800w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1200&h=660 1200w, https://images.unsplash.com/photo-1631742272329-eeca83cb6886?auto=format&fit=crop&q=72&w=1600&h=880 1600w"} width="2000" />
        </div>
        <div className="v-wrap v3-cta-in">
          <p className="v3-eye v3-eye-gold" data-i="66cac64f03">
            <span aria-hidden="true" className="v3-rule"></span>
            Begin your journey
          </p>
          <h2 className="v3-h2 v3-h2-xl v3-anim" data-i="5602ee7931" id="ct-title">
            {"Your next journey "}
            <em>starts with a conversation.</em>
          </h2>
          <p className="v3-anim" data-i="f342230778">Tell us where you are going. Your first consultation is free, and we reply within 2 hours in office hours.</p>
          <div className="v3-ctas">
            <a className="v3-btn v3-btn-light" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20would%20like%20a%20free%20visa%20consultation." rel="noopener" target="_blank">
              <span data-i="586e403157">Free Consultation</span>
              {" "}
              <span aria-hidden="true" className="v-arr">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
            </a>
            <a className="v3-btn v3-btn-ghost" data-i="4832e45812" href="/contact">Contact us</a>
          </div>
        </div>
      </section>
      </main>
      <Footer3 />
    </>
  );
}
