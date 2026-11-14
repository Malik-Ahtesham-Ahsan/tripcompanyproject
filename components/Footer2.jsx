import Script from "next/script";

// Site footer and floating WhatsApp button (v2i).
export default function Footer2() {
  return (
    <>
      <footer className="v-foot">
        <div className="v-wrap">
          <div className="v-foot-top">
            <p className="v-foot-slogan">
              <span data-i="423a8d05bb">Your Journey,</span>
              {" "}
              <em data-i="12c517252b">Our Priority.</em>
            </p>
            <a className="v-btn v-btn-red" href="https://wa.me/447862609755" rel="noopener" target="_blank">
              <span data-i="43bcbb7183">Get Free Consultation</span>
              {" "}
              <span aria-hidden="true" className="v-arr">
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="v-foot-grid">
            <div className="v-foot-brand">
              <a aria-label="TravelVista Ltd home" className="v-logo" data-i-aria-label="e7215721a4" href="/">
                <img alt="TravelVista Ltd" height="52" loading="lazy" src="/assets/logo-horizontal-dark.png" width="196" />
              </a>
              <p data-i="2953c57360">Visa application support and travel bookings for people living in the UK. Based in London.</p>
              <div className="social">
                <a aria-label="TravelVista on Facebook" data-i-aria-label="81fc7caee7" href="https://www.facebook.com/share/1DoG2T6Dpo/" rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4a22 22 0 0 0-2.5-.1c-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8z" fill="currentColor"></path>
                  </svg>
                </a>
                <a aria-label="TravelVista on Instagram" data-i-aria-label="99929a7e26" href="https://www.instagram.com/travelvista.ltd" rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <rect fill="none" height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3"></rect>
                    <circle cx="12" cy="12" fill="none" r="4.2" stroke="currentColor" strokeWidth="2"></circle>
                    <circle cx="17.4" cy="6.6" fill="currentColor" r="1.3"></circle>
                  </svg>
                </a>
                <a aria-label="TravelVista reviews on Trustpilot" data-i-aria-label="a7cf712305" href="https://uk.trustpilot.com/review/travelvista.uk" rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2.5l2.6 7h7.4l-6 4.4 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.4h7.4z" fill="currentColor"></path>
                  </svg>
                </a>
                <a aria-label="Chat with TravelVista on WhatsApp" data-i-aria-label="058d90dc64" href="https://wa.me/447862609755" rel="noopener" target="_blank">
                  <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h2 data-i="bf8ca91cf4">Visa services</h2>
              <ul>
                <li>
                  <a data-i="e8f1e9ab2e" href="/schengen-visa">Schengen visa</a>
                </li>
                <li>
                  <a data-i="bbb0a4dfea" href="/usa-visa-from-uk">USA visitor visa</a>
                </li>
                <li>
                  <a data-i="d776d27d0b" href="/canada-visa-from-uk">Canada visitor visa</a>
                </li>
                <li>
                  <a data-i="e189338627" href="/turkey-visa-from-uk">Turkey visa</a>
                </li>
                <li>
                  <a data-i="598b275c50" href="/dubai-visa-from-uk">{"Dubai & UAE visa"}</a>
                </li>
                <li>
                  <a data-i="d17826337c" href="/holidays">Travel packages</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 data-i="0fc66bc436">Destinations</h2>
              <ul>
                <li>
                  <a data-i="e3772ac4b4" href="/france-visa-from-uk">France</a>
                </li>
                <li>
                  <a data-i="20a8df9b76" href="/spain-visa-from-uk">Spain</a>
                </li>
                <li>
                  <a data-i="ad79ef0f07" href="/italy-visa-from-uk">Italy</a>
                </li>
                <li>
                  <a data-i="17d53e0e6a" href="/germany-visa-from-uk">Germany</a>
                </li>
                <li>
                  <a data-i="4902a456ca" href="/greece-visa-from-uk">Greece</a>
                </li>
                <li>
                  <a data-i="322e27ed67" href="/#schengen">All 29 countries</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 data-i="7d3fbc106b">Visa tools</h2>
              <ul>
                <li>
                  <a data-i="23530c945c" href="/visa-checker">Visa checker</a>
                </li>
                <li>
                  <a data-i="fa7f5652a0" href="/cost-calculator">Cost calculator</a>
                </li>
                <li>
                  <a data-i="cc4349278d" href="/document-checklist">Document checklist</a>
                </li>
                <li>
                  <a data-i="ed88aa57b7" href="/schengen-calculator">90/180 calculator</a>
                </li>
                <li>
                  <a data-i="634a595095" href="/appointment-updates">Appointment updates</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 data-i="7a1994999d">Company</h2>
              <ul>
                <li>
                  <a data-i="3ffb811f9b" href="/about">About us</a>
                </li>
                <li>
                  <a data-i="b37456c453" href="/contact">Contact</a>
                </li>
                <li>
                  <a data-i="7ceacdcaab" href="/privacy">Privacy policy</a>
                </li>
                <li>
                  <a data-i="8e07202536" href="/refund-policy">Refund policy</a>
                </li>
              </ul>
            </div>
            <div className="v-foot-contact">
              <h2 data-i="b37456c453">Contact</h2>
              <ul>
                <li>
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
                    <path d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"></path>
                  </svg>
                  <a className="notranslate" href="https://wa.me/447862609755" rel="noopener" target="_blank">+44 7862 609755</a>
                </li>
                <li>
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
                    <rect height="14" rx="1.5" width="18" x="3" y="5"></rect>
                    <path d="m3.5 6 8.5 7 8.5-7"></path>
                  </svg>
                  <a className="notranslate" href="mailto:info@travelvista.uk">info@travelvista.uk</a>
                </li>
                <li>
                  <svg aria-hidden="true" className="ic" fill="none" focusable="false" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                  <span>
                    <span data-i="2f463703ee">London office:</span>
                    {" "}
                    <span className="notranslate">128 Kingsway, London, WC2B 6NH, United Kingdom</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="v-foot-legal">
            <p>
              <span data-i="da58bda8ef">© 2026 TravelVista Ltd. Registered in England and Wales, company number</span>
              {" "}
              <span className="notranslate">17414589</span>
              <span data-i="571bd9dd2e">. Registered office:</span>
              {" "}
              <span className="notranslate">273 Hampton Road, Ilford, IG1 1PN, United Kingdom</span>
              .
            </p>
            <p data-i="184295c6b0">TravelVista Ltd is a private company and is not connected to any government, embassy or visa application centre. Every visa decision is made by the relevant embassy, consulate or immigration authority.</p>
            <p className="v-credit" data-i="ddf7bd2cb5">Photography: Unsplash.</p>
          </div>
        </div>
      </footer>
      <a aria-label="Chat with us on WhatsApp" className="wa-float" data-i-aria-label="e32187c1a4" href="https://wa.me/447862609755" rel="noopener" target="_blank">
        <svg aria-hidden="true" height="20" viewBox="0 0 24 24" width="20">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" fill="currentColor"></path>
        </svg>
        <span data-i="3aba7bad7f">WhatsApp us</span>
      </a>
      <Script src="/assets/v2/v2.js?v=49da9738" strategy="afterInteractive" />
    </>
  );
}
