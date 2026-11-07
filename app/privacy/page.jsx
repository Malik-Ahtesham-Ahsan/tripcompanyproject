import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  "title": "Privacy Policy | TravelVista Ltd",
  "description": "How TravelVista Ltd collects, uses, shares and protects your personal information, and your rights under UK data protection law.",
  "alternates": {
    "canonical": "https://www.travelvista.uk/privacy.html"
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
    "title": "Privacy Policy | TravelVista Ltd",
    "description": "How TravelVista Ltd collects, uses, shares and protects your personal information, and your rights under UK data protection law.",
    "url": "https://www.travelvista.uk/privacy.html",
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
        "name": "Privacy policy",
        "item": "https://www.travelvista.uk/privacy.html"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header current="privacy.html" />
      <main id="main">
      <section className="page-hero">
        <svg aria-hidden="true" className="flight flight-hero" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1240 300">
          <path className="fp" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" id="fp75" pathLength="1000"></path>
          {" "}
          <path className="trail" d="M620 330 C 760 230, 860 290, 980 170 S 1180 30, 1330 60" pathLength="1000">
            <animate attributeName="stroke-dashoffset" dur="12s" repeatCount="indefinite" values="120;-880"></animate>
          </path>
          {" "}
          <g className="fplane">
            <path d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z" transform="scale(0.6)"></path>
            <animateMotion calcMode="linear" dur="12s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" rotate="auto">
              <mpath href="#fp75"></mpath>
            </animateMotion>
          </g>
        </svg>
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="breadcrumb" data-i-aria-label="c766e66518">
            <ol>
              <li>
                <a data-i="70f8bb9a8a" href="index.html">Home</a>
              </li>
              <li aria-current="page" data-i="7ceacdcaab">Privacy policy</li>
            </ol>
          </nav>
          <h1 data-i="7ceacdcaab">Privacy policy</h1>
          <p className="lead" data-i="00e56f3511">How TravelVista Ltd collects, uses and protects your personal information.</p>
          <p className="small" data-i="f76f7732d5" style={{ "marginTop": "12px" }}>Last updated: 7 November 2026</p>
        </div>
      </section>
      <div className="section">
        <div className="wrap layout-2" data-no-i18n="" lang="en">
          <div className="content">
            <section id="who">
              <h2>Who we are</h2>
              <div className="prose">
                <p>This policy explains how TravelVista Ltd (company number 17414589, registered in England and Wales). Registered office: 273 Hampton Road, Ilford, IG1 1PN, United Kingdom. collects and uses your personal information. We are the data controller for the information you give us.</p>
                <p>
                  {"Contact us about your data at "}
                  <a href="mailto:info@travelvista.uk">info@travelvista.uk</a>
                  {" or on WhatsApp at +44 7862 609755."}
                </p>
              </div>
            </section>
            <section id="collect">
              <h2>Information we collect</h2>
              <div className="prose">
                <p>We collect the information you give us when you contact us or use our services, including:</p>
                <ul>
                  <li>Contact details: name, phone number, email address and postal address.</li>
                  <li>Identity and travel documents: passport details and copies, photos, nationality, date of birth and your UK immigration status (for example your eVisa share code or residence permit).</li>
                  <li>Financial information: bank statements, payslips and proof of funds you share for your application.</li>
                  <li>Employment, study and family details: employer or university letters, invitation letters and details of people travelling with you.</li>
                  <li>Travel details: destinations, dates, flight and hotel bookings, and travel insurance.</li>
                  <li>Messages you send us by WhatsApp, email, phone or our website form.</li>
                </ul>
                <p>Some applications include information about health or criminal records, for example when an embassy asks for it. We only collect this when your application needs it, and with your explicit consent.</p>
              </div>
            </section>
            <section id="use">
              <h2>How we use your information</h2>
              <div className="prose">
                <ul>
                  <li>To answer your enquiry and tell you which visa you need.</li>
                  <li>To prepare your visa application, check your documents and write your cover letter.</li>
                  <li>To book your visa centre appointment and keep you updated.</li>
                  <li>To arrange flights, hotels and other travel you ask for.</li>
                  <li>To take payment, keep accounts and meet our legal duties.</li>
                  <li>To deal with questions, complaints or refund requests.</li>
                </ul>
                <p>We do not sell your information, and we do not use it for marketing unless you agree.</p>
              </div>
            </section>
            <section id="legal">
              <h2>Our legal reasons for using it</h2>
              <div className="prose">
                <p>Under UK data protection law (the UK GDPR and the Data Protection Act 2018), we use your information because:</p>
                <ul>
                  <li>
                    <strong>Contract:</strong>
                    {" we need it to provide the service you asked for."}
                  </li>
                  <li>
                    <strong>Legal obligation:</strong>
                    {" we must keep certain records, such as accounts and tax records."}
                  </li>
                  <li>
                    <strong>Legitimate interests:</strong>
                    {" to run our business, answer enquiries and keep our records accurate."}
                  </li>
                  <li>
                    <strong>Consent:</strong>
                    {" for marketing messages and for any special category information. You can withdraw consent at any time."}
                  </li>
                </ul>
              </div>
            </section>
            <section id="share">
              <h2>Who we share it with</h2>
              <div className="prose">
                <p>We only share your information when your application or booking needs it:</p>
                <ul>
                  <li>Embassies, consulates and their visa application centres, such as TLScontact, VFS Global and BLS International.</li>
                  <li>Airlines, hotels, travel insurers and booking providers for the travel you ask us to arrange.</li>
                  <li>Service providers who help us run the business, such as our email, messaging (WhatsApp), IT and accounting providers.</li>
                  <li>Authorities, when the law requires us to.</li>
                </ul>
                <p>Some of these organisations are outside the UK, for example the embassy that decides your visa. When we send information abroad, we only send what is needed and use the protections UK law requires.</p>
              </div>
            </section>
            <section id="keep">
              <h2>How long we keep it</h2>
              <div className="prose">
                <p>We keep copies of your documents only while we prepare and follow your application, and delete them when your application is finished, unless you ask us to keep them for a future application.</p>
                <p>We keep invoices and payment records for 6 years, as UK tax law requires.</p>
              </div>
            </section>
            <section id="security">
              <h2>How we protect it</h2>
              <div className="prose">
                <p>We store your information securely, limit access to staff who need it, and ask you to send documents only through the channels we give you. No method of sending information over the internet is completely secure, so contact us if you are worried about sending a document.</p>
              </div>
            </section>
            <section id="rights">
              <h2>Your rights</h2>
              <div className="prose">
                <p>You have the right to:</p>
                <ul>
                  <li>Ask for a copy of the information we hold about you.</li>
                  <li>Ask us to correct information that is wrong.</li>
                  <li>Ask us to delete your information.</li>
                  <li>Object to, or ask us to limit, how we use it.</li>
                  <li>Ask us to send your information to you or another organisation.</li>
                  <li>Withdraw your consent at any time.</li>
                </ul>
                <p>To use any of these rights, email us. We reply within one month.</p>
              </div>
            </section>
            <section id="website">
              <h2>Our website and cookies</h2>
              <div className="prose">
                <p>Our website does not use advertising, analytics or tracking cookies. If you choose light or dark mode, your browser stores that choice on your device so the site remembers it. It is not sent to us and you can clear it in your browser settings.</p>
                <p>To show our fonts, your browser loads them from Google Fonts, which receives your IP address. If you use our enquiry form, your message opens in WhatsApp, which is run by Meta under its own privacy policy.</p>
                <p>If we add analytics or advertising tools in future, we will ask for your consent before using them and update this policy.</p>
              </div>
            </section>
            <section id="complain">
              <h2>Complaints</h2>
              <div className="prose">
                <p>
                  {"If you are unhappy with how we use your information, please contact us first so we can put it right. You can also complain to the Information Commissioner's Office (ICO) at "}
                  <a href="https://ico.org.uk/make-a-complaint/" rel="noopener" target="_blank">ico.org.uk</a>
                  {" or by phone on 0303 123 1113."}
                </p>
              </div>
            </section>
            <section id="changes">
              <h2>Changes to this policy</h2>
              <div className="prose">
                <p>We may update this policy. The date at the top shows when it last changed.</p>
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
                      <a href="#who">Who we are</a>
                    </li>
                    <li>
                      <a href="#collect">Information we collect</a>
                    </li>
                    <li>
                      <a href="#use">How we use your information</a>
                    </li>
                    <li>
                      <a href="#legal">Our legal reasons for using it</a>
                    </li>
                    <li>
                      <a href="#share">Who we share it with</a>
                    </li>
                    <li>
                      <a href="#keep">How long we keep it</a>
                    </li>
                    <li>
                      <a href="#security">How we protect it</a>
                    </li>
                    <li>
                      <a href="#rights">Your rights</a>
                    </li>
                    <li>
                      <a href="#website">Our website and cookies</a>
                    </li>
                    <li>
                      <a href="#complain">Complaints</a>
                    </li>
                    <li>
                      <a href="#changes">Changes to this policy</a>
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
