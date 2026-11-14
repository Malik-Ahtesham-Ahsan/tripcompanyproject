import Header2i from "../../components/Header2i";
import Footer2 from "../../components/Footer2";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Latvia Visa from the UK | Schengen Help | TravelVista",
  "description": "Latvia Schengen visa from the UK: who needs one, documents checklist, €90 fee and appointment booking. We prepare your complete file. Free consultation.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/latvia-visa-from-uk"
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
    "title": "Latvia Visa from the UK | Schengen Help | TravelVista",
    "description": "Latvia Schengen visa from the UK: who needs one, documents checklist, €90 fee and appointment booking. We prepare your complete file. Free consultation.",
    "url": "https://www.travelvista.uk/latvia-visa-from-uk",
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
        "name": "Latvia visa",
        "item": "https://www.travelvista.uk/latvia-visa-from-uk"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a visa to visit Latvia from the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your passport. British citizens do not need a visa for short trips. Many people living in the UK with other passports need a Schengen visa to visit Latvia."
        }
      },
      {
        "@type": "Question",
        "name": "How much is a Latvia visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official Schengen visa fee is €90 for adults and €45 for children aged 6 to 11. Children under 6 are free. The visa centre charges a separate service fee."
        }
      },
      {
        "@type": "Question",
        "name": "Where do I apply for a Latvia visa in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visa centre arrangements can change, so we confirm the current centre for Latvia when you contact us, and book your appointment for you."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit other countries with a Latvia visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A Schengen visa from Latvia lets you travel across all 29 Schengen countries, as long as Latvia is your main destination."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header2i current="/latvia-visa-from-uk" />
      <main id="main">
      <section className="page-hero v-inhero">
        <div aria-hidden="true" className="v-ph-img">
          <img alt="" className="" fetchpriority="high" height="900" sizes="100vw" src={"https://images.unsplash.com/photo-1703411305035-b75bf7b25020?auto=format&fit=crop&q=72&w=1920&h=900"} srcset={"https://images.unsplash.com/photo-1703411305035-b75bf7b25020?auto=format&fit=crop&q=72&w=480&h=225 480w, https://images.unsplash.com/photo-1703411305035-b75bf7b25020?auto=format&fit=crop&q=72&w=800&h=375 800w, https://images.unsplash.com/photo-1703411305035-b75bf7b25020?auto=format&fit=crop&q=72&w=1200&h=562 1200w, https://images.unsplash.com/photo-1703411305035-b75bf7b25020?auto=format&fit=crop&q=72&w=1600&h=750 1600w"} width="1920" />
        </div>
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp36" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp36"></mpath>
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
              <li aria-current="page" data-i="15c30d04b9" data-iv={"{\"name\": \"Latvia\"}"}>Latvia visa</li>
            </ol>
          </nav>
          <p className="eyebrow" data-i="d0b14585f8" data-iv={"{\"name\": \"Latvia\"}"}>Schengen short-stay visa · Latvia</p>
          <h1 style={{ "marginTop": "10px" }}>
            <span aria-hidden="true" className="badge badge-lg">LV</span>
            {" "}
            <span data-i="22bebcd457" data-iv={"{\"name\": \"Latvia\"}"}>Latvia visa from the UK</span>
          </h1>
          <p className="lead" data-i="051fa9b36e" data-iv={"{\"places\": \"Jūrmala and Sigulda\", \"capital\": \"Riga\"}"}>Planning a trip to Riga, Jūrmala and Sigulda? If your passport needs a Schengen visa, we prepare your complete file and book your appointment.</p>
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
              <dt data-i="2bd8d2658c">Capital</dt>
              <dd data-i="7e0c9333ea" data-iv={"{\"capital\": \"Riga\"}"}>Riga</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2">
          <div className="content">
            <section id="who">
              <h2 data-i="be721c5e4c" data-iv={"{\"name\": \"Latvia\"}"}>Who needs a Latvia visa?</h2>
              <div className="prose">
                <p data-i="b2ec179227" data-iv={"{\"name\": \"Latvia\"}"}>You need a Schengen visa for Latvia if your passport is from a country that needs one, even if you live in the UK. British citizens do not need a visa for short trips of up to 90 days in any 180-day period.</p>
                <p data-i="f4a384a070" data-iv={"{\"name\": \"Latvia\"}"}>Apply to Latvia if it is your main destination, meaning where you will spend the most nights. If you will spend the same time in several countries, apply to the country you will enter first.</p>
              </div>
            </section>
            <section id="process">
              <h2 data-i="efe8d0a61b" data-iv={"{\"name\": \"Latvia\"}"}>How we handle your Latvia visa</h2>
              <ol>
                <li data-i="09d160c7a3">Send us your query with your passport, UK status and travel dates.</li>
                <li data-i="dc76cc282f" data-iv={"{\"name\": \"Latvia\"}"}>We confirm the current visa centre for Latvia and send your document checklist.</li>
                <li data-i="56ed0103a1">We prepare your complete file: application form, cover letter and travel plan.</li>
                <li data-i="8001407070">We book your appointment and send you the date and time.</li>
                <li data-i="25ea0e437b" data-iv={"{\"name\": \"Latvia\"}"}>You attend to submit your documents and give fingerprints. Latvia's embassy or consulate makes the decision.</li>
              </ol>
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
            <section id="faq">
              <h2 data-i="af90cef809">Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary data-i="33a3ce47e4" data-iv={"{\"name\": \"Latvia\"}"}>Do I need a visa to visit Latvia from the UK?</summary>
                  <div className="answer">
                    <p data-i="c24f670776" data-iv={"{\"name\": \"Latvia\"}"}>It depends on your passport. British citizens do not need a visa for short trips. Many people living in the UK with other passports need a Schengen visa to visit Latvia.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="dcf2fb9f0a" data-iv={"{\"name\": \"Latvia\"}"}>How much is a Latvia visa?</summary>
                  <div className="answer">
                    <p data-i="e39eea444a">The official Schengen visa fee is €90 for adults and €45 for children aged 6 to 11. Children under 6 are free. The visa centre charges a separate service fee.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="e3772eaf84" data-iv={"{\"name\": \"Latvia\"}"}>Where do I apply for a Latvia visa in the UK?</summary>
                  <div className="answer">
                    <p data-i="6d361f514b" data-iv={"{\"name\": \"Latvia\"}"}>Visa centre arrangements can change, so we confirm the current centre for Latvia when you contact us, and book your appointment for you.</p>
                  </div>
                </details>
                <details>
                  <summary data-i="691e6d3dca" data-iv={"{\"name\": \"Latvia\"}"}>Can I visit other countries with a Latvia visa?</summary>
                  <div className="answer">
                    <p data-i="5fa00999f8" data-iv={"{\"name\": \"Latvia\"}"}>Yes. A Schengen visa from Latvia lets you travel across all 29 Schengen countries, as long as Latvia is your main destination.</p>
                  </div>
                </details>
              </div>
            </section>
            <section>
              <h2 data-i="faeb9342e9">Other Schengen countries</h2>
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
                    <strong data-i="18f628e84d" data-iv={"{\"name\": \"Latvia\"}"}>Latvia</strong>
                    <small data-i="7e0c9333ea" data-iv={"{\"capital\": \"Riga\"}"}>Riga</small>
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
            </section>
          </div>
          <aside>
            <div className="side-box">
              <div className="side-head">
                <span className="side-chip" data-i="d684b7391e">
                  {"Schengen package · "}
                  <b>£89</b>
                </span>
                <h2 data-i="1abac8991b" data-iv={"{\"name\": \"Latvia\"}"}>Get help with your Latvia visa</h2>
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
                <a className="btn btn-wa" href="https://wa.me/447862609755?text=Hello%20TravelVista%2C%20I%20need%20help%20with%20a%20Latvia%20Schengen%20visa." rel="noopener" target="_blank">
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
                      <a data-i="1dd6a17cb4" href="#process">How it works</a>
                    </li>
                    <li>
                      <a data-i="687c82861c" href="#documents">Documents</a>
                    </li>
                    <li>
                      <a data-i="72abbc9284" href="#fees">Fees</a>
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
          <path className="fp" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" id="fp37" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M-60 180 C 260 40, 520 210, 800 90 S 1120 40, 1320 110" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="13s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.85)"></path>
            <animateMotion calcMode="linear" dur="13s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp37"></mpath>
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
