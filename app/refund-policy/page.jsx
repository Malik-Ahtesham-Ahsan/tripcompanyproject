import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Refund Policy | TravelVista Ltd",
  "description": "TravelVista Ltd refund policy: when our service fee is refunded, what happens if a visa is refused, and how third-party visa fees work.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/refund-policy.html"
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
    "title": "Refund Policy | TravelVista Ltd",
    "description": "TravelVista Ltd refund policy: when our service fee is refunded, what happens if a visa is refused, and how third-party visa fees work.",
    "url": "https://www.travelvista.uk/refund-policy.html",
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
        "name": "Refund policy",
        "item": "https://www.travelvista.uk/refund-policy.html"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="refund-policy.html" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp76" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp76"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="index.html">Home</a>
              </li>
              <li aria-current="page" data-i="8e07202536">Refund policy</li>
            </ol>
          </nav>
          <h1 data-i="8e07202536">Refund policy</h1>
          <p className="lead" data-i="cfb6e88a76">When we refund our service fee, and how official visa fees and visa centre fees are handled.</p>
          <p className="small" data-i="f76f7732d5" style={{ "marginTop": "12px" }}>Last updated: 7 November 2026</p>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2" data-no-i18n="" lang="en">
          <div className="content">
            <section id="summary">
              <h2>Summary</h2>
              <div className="prose">
                <ul>
                  <li>Government visa fees and visa centre fees are never refundable by us. They are paid to the embassy or visa centre, not to TravelVista.</li>
                  <li>Our service fee is refundable in full if you cancel before we start work on your file.</li>
                  <li>Once we have started work, refunds depend on how much work is done.</li>
                  <li>We cannot refund our service fee because a visa is refused. The embassy makes every decision.</li>
                </ul>
              </div>
            </section>
            <section id="fees">
              <h2>What you pay</h2>
              <div className="prose">
                <p>Before we start, we tell you in writing:</p>
                <ul>
                  <li>
                    <strong>Our service fee</strong>
                    , for preparing your file and booking your appointment.
                  </li>
                  <li>
                    <strong>Third-party fees</strong>
                    , such as the official visa fee (for a Schengen visa, €90 for adults), the visa centre service fee, travel insurance and any travel bookings.
                  </li>
                </ul>
                <p>Third-party fees are set by the embassy, visa centre or provider. They follow that organisation's own refund rules, and the official visa fee is not refunded if a visa is refused.</p>
              </div>
            </section>
            <section id="service">
              <h2>Refunds of our service fee</h2>
              <div className="prose">
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">When you cancel</th>
                        <th scope="col">Refund of our service fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Before we start work on your file</td>
                        <td className="num">100%</td>
                      </tr>
                      <tr>
                        <td>After we have reviewed your documents, but before your form is completed</td>
                        <td className="num">50%</td>
                      </tr>
                      <tr>
                        <td>After your form is completed or your appointment is booked</td>
                        <td className="num">No refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section id="refused">
              <h2>If your visa is refused</h2>
              <div className="prose">
                <p>The embassy or consulate makes every visa decision, so we cannot refund our service fee if your visa is refused. We will review the refusal letter with you free of charge and explain your options, such as an appeal or a new application.</p>
              </div>
            </section>
            <section id="our-mistake">
              <h2>If we make a mistake</h2>
              <div className="prose">
                <p>If your application is delayed or returned because of a mistake we made, we will correct it free of charge. If the mistake means we cannot complete the service, we will refund our service fee in full.</p>
              </div>
            </section>
            <section id="appointments">
              <h2>Appointments</h2>
              <div className="prose">
                <p>Visa centres decide when appointments are released. If no appointment is available before your travel date, we will tell you and you can choose a later date or cancel. If you cancel because no appointment was available and your form has not yet been completed, you receive a full refund of our service fee.</p>
              </div>
            </section>
            <section id="bookings">
              <h2>Flights, hotels and insurance</h2>
              <div className="prose">
                <p>Bookings we make for you follow the airline, hotel or insurer's own terms. We tell you these terms before you pay, including whether a booking is refundable.</p>
              </div>
            </section>
            <section id="how">
              <h2>How to ask for a refund</h2>
              <div className="prose">
                <p>
                  {"Email "}
                  <a href="mailto:info@travelvista.uk">info@travelvista.uk</a>
                  {" or message us on WhatsApp at +44 7862 609755 with your name and booking details. We reply within 5 working days and pay approved refunds within 14 days, to the method you used to pay."}
                </p>
                <p>This policy does not affect your legal rights as a consumer, including your right to cancel a service bought at a distance within 14 days, unless you asked us to start work during that time.</p>
              </div>
            </section>
          </div>
          <aside>
            <div className="side-box">
              <div className="side-head">
                <h2>Questions?</h2>
                <p>Contact us about this policy at any time.</p>
                <span aria-hidden="true" className="side-orbit"></span>
              </div>
              <div className="side-body">
                <div className="side-phone">
                  <span className="side-phone-icon">
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span>
                    <small>Email</small>
                    <span className="phone email">info@travelvista.uk</span>
                  </span>
                </div>
                <div className="side-phone">
                  <span className="side-phone-icon">
                    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span>
                    <small>WhatsApp or call</small>
                    <span className="phone">+44 7862 609755</span>
                  </span>
                </div>
                <div className="toc">
                  <strong>On this page</strong>
                  <ol>
                    <li>
                      <a href="#summary">Summary</a>
                    </li>
                    <li>
                      <a href="#fees">What you pay</a>
                    </li>
                    <li>
                      <a href="#service">Refunds of our service fee</a>
                    </li>
                    <li>
                      <a href="#refused">If your visa is refused</a>
                    </li>
                    <li>
                      <a href="#our-mistake">If we make a mistake</a>
                    </li>
                    <li>
                      <a href="#appointments">Appointments</a>
                    </li>
                    <li>
                      <a href="#bookings">Flights, hotels and insurance</a>
                    </li>
                    <li>
                      <a href="#how">How to ask for a refund</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
