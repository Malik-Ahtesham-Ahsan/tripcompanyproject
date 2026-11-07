import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Schengen Visa from the UK: Documents & Fees | TravelVista",
  "description": "How to apply for a Schengen visa from the UK: who needs one, which country to apply to, documents, the €90 fee and timings. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/schengen-visa.html"
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
    "title": "Schengen Visa from the UK: Documents & Fees | TravelVista",
    "description": "How to apply for a Schengen visa from the UK: who needs one, which country to apply to, documents, the €90 fee and timings. Free consultation.",
    "url": "https://www.travelvista.uk/schengen-visa.html",
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
        "item": "https://www.travelvista.uk/schengen-visa.html"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which country should I apply to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apply to the country where you will spend the most nights. If you will spend the same number of nights in several countries, apply to the country you will enter first."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit more than one country with one visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A Schengen visa lets you travel across all 29 Schengen countries during the dates on your visa, as long as you apply to the right country."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to go to the visa centre in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most applicants attend an appointment in person to submit their documents and give fingerprints."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a decision take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most decisions are made within 15 calendar days of your appointment. In some cases this can be extended up to 45 days, so allow plenty of time before your trip."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my visa is refused?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The refusal letter explains the reasons and how to appeal. We can review the letter with you and help you decide whether to appeal or make a new, stronger application."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="schengen-visa.html" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp4" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp4"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="index.html">Home</a>
              </li>
              <li aria-current="page" data-i="e8f1e9ab2e">Schengen visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="da1e973a72">Guide for UK residents · Updated November 2026</p>
          <h1 data-i="6c35a0be82" style={{ "marginTop": "10px" }}>Schengen visa from the UK</h1>
          <p className="lead" data-i="9fa11fb959">Everything you need to apply for a short-stay Schengen visa while living in the UK: who needs one, which country to apply to, documents, fees and timings.</p>
          <dl className="quick-facts">
            <div className="fact">
              <dt data-i="4ddb32c5fd">Maximum stay</dt>
              <dd data-i="837a257a2f">90 days in any 180</dd>
            </div>
            <div className="fact">
              <dt data-i="8467c0d99c">Countries</dt>
              <dd>29</dd>
            </div>
            <div className="fact">
              <dt data-i="b6532d9823">Official fee</dt>
              <dd data-i="ff6895544b">€90 adult</dd>
            </div>
            <div className="fact">
              <dt data-i="cfea419c3b">Apply</dt>
              <dd data-i="2e9b76497b">6 months to 15 days before</dd>
            </div>
          </dl>
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
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="cc3a3bce31">Who needs a Schengen visa?</h2>
              <div className="prose">
                <p data-i="1b6c77f7b2">Whether you need a visa depends on your passport. If your nationality needs a Schengen visa, you must apply even if you live in the UK.</p>
                <p data-i="b9b8ad500c">British citizens do not need a visa for short trips. Many UK residents with other passports, including Indian, Pakistani, Nigerian, Chinese, Bangladeshi and Filipino passports, do need one.</p>
                <p data-i="5b16c36c4c">You can apply from the UK if you live here legally, for example with an eVisa as a student, skilled worker, dependant or family member, or with settled status.</p>
              </div>
            </section>
            <section id="which">
              <h2 data-i="14cf686ab9">Which country do I apply to?</h2>
              <div className="prose">
                <p data-i="5fd2ec1902">Apply to the country that is your main destination, meaning where you will spend the most nights. If your nights are split equally, apply to the country you will enter first.</p>
                <p data-i="c7db6a7c57">Choosing the wrong country is a common reason for problems, so we check your itinerary before you book anything.</p>
              </div>
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
              <h2 data-i="98498582be">Schengen visa fees</h2>
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
            <section id="timing">
              <h2 data-i="ce7da7bd1e">When to apply</h2>
              <div className="prose">
                <p data-i="c267fb4998">You can apply up to 6 months before your trip, and no later than 15 days before. Most decisions are made within 15 calendar days, but this can be extended to 45 days.</p>
                <p data-i="e92d38de02">Appointments at UK visa centres can be hard to find in spring and summer. Start early, especially if you are travelling between May and September.</p>
              </div>
            </section>
            <section id="centres">
              <h2 data-i="6ab8dbfd08">Where you apply in the UK</h2>
              <p className="prose" data-i="77b9eb3d30">Each country uses its own visa centre company. You book your appointment with that company, and the embassy or consulate makes the decision.</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th data-i="d523ebbd10" scope="col">Country</th>
                      <th data-i="3bddfaca61" scope="col">Visa centre company</th>
                      <th data-i="12b3fd41e7" scope="col">Our guide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-i="e3772ac4b4">France</td>
                      <td data-i="3c543452c9">TLScontact</td>
                      <td>
                        <a data-i="5b7b21c8b9" href="france-visa-from-uk.html">France visa</a>
                      </td>
                    </tr>
                    <tr>
                      <td data-i="20a8df9b76">Spain</td>
                      <td data-i="d133f331db">BLS International</td>
                      <td>
                        <a data-i="61c580383b" href="spain-visa-from-uk.html">Spain visa</a>
                      </td>
                    </tr>
                    <tr>
                      <td data-i="ad79ef0f07">Italy</td>
                      <td data-i="3b54d2500e">VFS Global</td>
                      <td>
                        <a data-i="58d03af574" href="italy-visa-from-uk.html">Italy visa</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small" data-i="8afc0ef218">For every other country, we confirm the current visa centre and book your appointment for you.</p>
            </section>
            <section id="countries">
              <h2 data-i="0e69e80f77">The 29 Schengen countries</h2>
              <p className="prose" data-i="f1f95b7358">One Schengen visa lets you travel across all of these countries during the dates on your visa.</p>
              <div className="cgrid">
                <a className="ccard" href="austria-visa-from-uk.html">
                  <span className="badge">AT</span>
                  <span className="ccard-text">
                    <strong data-i="593905b319">Austria</strong>
                    <small data-i="8b6cea61d2">Vienna</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="belgium-visa-from-uk.html">
                  <span className="badge">BE</span>
                  <span className="ccard-text">
                    <strong data-i="5cb4c9d828">Belgium</strong>
                    <small data-i="2784e378f2">Brussels</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="bulgaria-visa-from-uk.html">
                  <span className="badge">BG</span>
                  <span className="ccard-text">
                    <strong data-i="5c77726358">Bulgaria</strong>
                    <small data-i="dc81691d3f">Sofia</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="croatia-visa-from-uk.html">
                  <span className="badge">HR</span>
                  <span className="ccard-text">
                    <strong data-i="d7e0453bb4">Croatia</strong>
                    <small data-i="5bd9be779c">Zagreb</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="czech-republic-visa-from-uk.html">
                  <span className="badge">CZ</span>
                  <span className="ccard-text">
                    <strong data-i="1fef429092">Czech Republic</strong>
                    <small data-i="f1ef175756">Prague</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="denmark-visa-from-uk.html">
                  <span className="badge">DK</span>
                  <span className="ccard-text">
                    <strong data-i="89da124e04">Denmark</strong>
                    <small data-i="3f7c839db3">Copenhagen</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="estonia-visa-from-uk.html">
                  <span className="badge">EE</span>
                  <span className="ccard-text">
                    <strong data-i="f0a96da3f8">Estonia</strong>
                    <small data-i="eaaa98c29b">Tallinn</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="finland-visa-from-uk.html">
                  <span className="badge">FI</span>
                  <span className="ccard-text">
                    <strong data-i="c909b138eb">Finland</strong>
                    <small data-i="98dc717002">Helsinki</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="france-visa-from-uk.html">
                  <span className="badge">FR</span>
                  <span className="ccard-text">
                    <strong data-i="e3772ac4b4">France</strong>
                    <small data-i="22390ad11c">Paris</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="germany-visa-from-uk.html">
                  <span className="badge">DE</span>
                  <span className="ccard-text">
                    <strong data-i="17d53e0e6a">Germany</strong>
                    <small data-i="062b06ba8e">Berlin</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="greece-visa-from-uk.html">
                  <span className="badge">GR</span>
                  <span className="ccard-text">
                    <strong data-i="4902a456ca">Greece</strong>
                    <small data-i="b85c37fe60">Athens</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="hungary-visa-from-uk.html">
                  <span className="badge">HU</span>
                  <span className="ccard-text">
                    <strong data-i="f14e46ce7d">Hungary</strong>
                    <small data-i="4b1167e976">Budapest</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="iceland-visa-from-uk.html">
                  <span className="badge">IS</span>
                  <span className="ccard-text">
                    <strong data-i="b3c92eecf0">Iceland</strong>
                    <small data-i="02085eedaf">Reykjavík</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="italy-visa-from-uk.html">
                  <span className="badge">IT</span>
                  <span className="ccard-text">
                    <strong data-i="ad79ef0f07">Italy</strong>
                    <small data-i="da7705caa1">Rome</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="latvia-visa-from-uk.html">
                  <span className="badge">LV</span>
                  <span className="ccard-text">
                    <strong data-i="c5f5bb3b35">Latvia</strong>
                    <small data-i="e98260de43">Riga</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="liechtenstein-visa-from-uk.html">
                  <span className="badge">LI</span>
                  <span className="ccard-text">
                    <strong data-i="b0ddce0f54">Liechtenstein</strong>
                    <small data-i="7c3fae1ca6">Vaduz</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="lithuania-visa-from-uk.html">
                  <span className="badge">LT</span>
                  <span className="ccard-text">
                    <strong data-i="74a788cee2">Lithuania</strong>
                    <small data-i="b09b3806e5">Vilnius</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="luxembourg-visa-from-uk.html">
                  <span className="badge">LU</span>
                  <span className="ccard-text">
                    <strong data-i="5076721c40">Luxembourg</strong>
                    <small data-i="42f2348e2a">Luxembourg City</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="malta-visa-from-uk.html">
                  <span className="badge">MT</span>
                  <span className="ccard-text">
                    <strong data-i="1a591a3e91">Malta</strong>
                    <small data-i="d0af62d69a">Valletta</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="netherlands-visa-from-uk.html">
                  <span className="badge">NL</span>
                  <span className="ccard-text">
                    <strong data-i="fb61c8a8eb">Netherlands</strong>
                    <small data-i="2dce283e0e">Amsterdam</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="norway-visa-from-uk.html">
                  <span className="badge">NO</span>
                  <span className="ccard-text">
                    <strong data-i="988455e67d">Norway</strong>
                    <small data-i="bcc48172e0">Oslo</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="poland-visa-from-uk.html">
                  <span className="badge">PL</span>
                  <span className="ccard-text">
                    <strong data-i="5ff03b7273">Poland</strong>
                    <small data-i="706f6339e8">Warsaw</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="portugal-visa-from-uk.html">
                  <span className="badge">PT</span>
                  <span className="ccard-text">
                    <strong data-i="a495190bcc">Portugal</strong>
                    <small data-i="848652ee39">Lisbon</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="romania-visa-from-uk.html">
                  <span className="badge">RO</span>
                  <span className="ccard-text">
                    <strong data-i="d6b897fd14">Romania</strong>
                    <small data-i="6655fcfadc">Bucharest</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="slovakia-visa-from-uk.html">
                  <span className="badge">SK</span>
                  <span className="ccard-text">
                    <strong data-i="b6c149c3e0">Slovakia</strong>
                    <small data-i="9eddf74134">Bratislava</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="slovenia-visa-from-uk.html">
                  <span className="badge">SI</span>
                  <span className="ccard-text">
                    <strong data-i="d1aa050361">Slovenia</strong>
                    <small data-i="be95acba75">Ljubljana</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="spain-visa-from-uk.html">
                  <span className="badge">ES</span>
                  <span className="ccard-text">
                    <strong data-i="20a8df9b76">Spain</strong>
                    <small data-i="7a2191964a">Madrid</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="sweden-visa-from-uk.html">
                  <span className="badge">SE</span>
                  <span className="ccard-text">
                    <strong data-i="72ddd2b619">Sweden</strong>
                    <small data-i="c62ff645db">Stockholm</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
                <a className="ccard" href="switzerland-visa-from-uk.html">
                  <span className="badge">CH</span>
                  <span className="ccard-text">
                    <strong data-i="77dcd849e5">Switzerland</strong>
                    <small data-i="94fa2a5396">Bern</small>
                  </span>
                  <span aria-hidden="true" className="arrow">→</span>
                </a>
              </div>
            </section>
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="f2a54a3b55">Which country should I apply to?</summary>
                  <div className="answer">
                    <p data-i="ef861c7469">Apply to the country where you will spend the most nights. If you will spend the same number of nights in several countries, apply to the country you will enter first.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="9942aad28d">Can I visit more than one country with one visa?</summary>
                  <div className="answer">
                    <p data-i="916078ba5d">Yes. A Schengen visa lets you travel across all 29 Schengen countries during the dates on your visa, as long as you apply to the right country.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="f32f138ae6">Do I need to go to the visa centre in person?</summary>
                  <div className="answer">
                    <p data-i="30b0a44fd7">Yes, most applicants attend an appointment in person to submit their documents and give fingerprints.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="fa79ff9aed">How long does a decision take?</summary>
                  <div className="answer">
                    <p data-i="7e451037ed">Most decisions are made within 15 calendar days of your appointment. In some cases this can be extended up to 45 days, so allow plenty of time before your trip.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="c4db4a6a15">What happens if my visa is refused?</summary>
                  <div className="answer">
                    <p data-i="d4def0d47c">The refusal letter explains the reasons and how to appeal. We can review the letter with you and help you decide whether to appeal or make a new, stronger application.</p>
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
                <h2 data-i="00cd72c526">Get your Schengen visa checklist</h2>
                <p data-i="c715bbe520">Tell us your passport, UK status and travel plans. We reply within 2 hours in office hours.</p>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20Schengen%20visa." rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                  {" "}
                  <span data-i="3aba7bad7f">WhatsApp us</span>
                </a>
                {" "}
                <a className="btn btn-ghost" href="contact.html">
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
                      <a data-i="98156e123b" href="#which">Which country</a>
                    </li>
                    <li>
                      <a data-i="687c82861c" href="#documents">Documents</a>
                    </li>
                    <li>
                      <a data-i="72abbc9284" href="#fees">Fees</a>
                    </li>
                    <li>
                      <a data-i="ce7da7bd1e" href="#timing">When to apply</a>
                    </li>
                    <li>
                      <a data-i="22340f82fb" href="#centres">Visa centres</a>
                    </li>
                    <li>
                      <a data-i="fb110f6f0e" href="#countries">29 countries</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp5" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp5"></mpath>
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
            <a className="btn btn-outline" data-i="ad01ea72e2" href="contact.html">Send an enquiry</a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
