// Site header (v2). `current` is the page file name, used to mark the active menu link.
// The stylesheets for this page style are declared here and hoisted into <head> by React.
export default function Header2({ current }) {
  return (
    <>
      <link rel="preload" href="/assets/v2/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href="/assets/v2/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      <link rel="stylesheet" precedence="default" href="/assets/v2/shared.css?v=f74fe7be" />
      <link rel="stylesheet" precedence="default" href="/assets/v2/v2.css?v=d7b737ad" />
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"v2\");document.documentElement.classList.remove(\"v2-inner\")" }} />
      <a className="skip" data-i="0a4470d64e" href="#main">Skip to content</a>
      <header className="site-header v-head">
        <div className="v-bar">
          <a aria-label="TravelVista Ltd home" className="v-logo" data-i-aria-label="e7215721a4" href="/">
            <img alt="TravelVista" height="46" src="/assets/logo-horizontal-dark.png" width="173" />
          </a>
          <nav aria-label="Main" className="v-nav" data-i-aria-label="62bce9422f" id="nav">
            <ul>
              <li>
                <a className="v-nl" data-i="70f8bb9a8a" href="/" aria-current={current === "/" ? "page" : undefined}>Home</a>
              </li>
              <li className="v-dd">
                <button aria-expanded="false" className="v-nl v-dd-btn" data-i="569b7d3ed4" type="button">
                  Visa Services
                  <span aria-hidden="true" className="v-caret"></span>
                </button>
                <div className="v-dd-panel">
                  <ul>
                    <li>
                      <a href="/schengen-visa">
                        <span aria-hidden="true" className="v-flag v-flag-eu"></span>
                        <span>
                          <strong data-i="e8f1e9ab2e">Schengen visa</strong>
                          <small data-i="342eca94c4">29 European countries</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/usa-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/us.svg" width="24" />
                        <span>
                          <strong data-i="bbb0a4dfea">USA visitor visa</strong>
                          <small data-i="4d2fa94c64">B1/B2 · DS-160</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/canada-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/ca.svg" width="24" />
                        <span>
                          <strong data-i="d776d27d0b">Canada visitor visa</strong>
                          <small data-i="6d4f9739cf">{"Visitor visa & Super Visa"}</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/turkey-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/tr.svg" width="24" />
                        <span>
                          <strong data-i="e189338627">Turkey visa</strong>
                          <small data-i="aea4bd6828">e-Visa or sticker visa</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/dubai-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/ae.svg" width="24" />
                        <span>
                          <strong data-i="598b275c50">{"Dubai & UAE visa"}</strong>
                          <small data-i="2a0874c664">UAE visit visa</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a className="v-dd-foot" href="/schengen-visa">
                    <span data-i="4a493b4971">All visa services</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li className="v-dd">
                <button aria-expanded="false" className="v-nl v-dd-btn" data-i="15f47b523a" type="button">
                  Destinations
                  <span aria-hidden="true" className="v-caret"></span>
                </button>
                <div className="v-dd-panel">
                  <ul>
                    <li>
                      <a href="/france-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/fr.svg" width="24" />
                        <span>
                          <strong data-i="e3772ac4b4">France</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/spain-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/es.svg" width="24" />
                        <span>
                          <strong data-i="20a8df9b76">Spain</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/italy-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/it.svg" width="24" />
                        <span>
                          <strong data-i="ad79ef0f07">Italy</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/germany-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/de.svg" width="24" />
                        <span>
                          <strong data-i="17d53e0e6a">Germany</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/netherlands-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/nl.svg" width="24" />
                        <span>
                          <strong data-i="fb61c8a8eb">Netherlands</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/greece-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/gr.svg" width="24" />
                        <span>
                          <strong data-i="4902a456ca">Greece</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/portugal-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/pt.svg" width="24" />
                        <span>
                          <strong data-i="a495190bcc">Portugal</strong>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/switzerland-visa-from-uk">
                        <img alt="" className="v-flag" height="18" loading="lazy" src="/assets/v2/flags/ch.svg" width="24" />
                        <span>
                          <strong data-i="77dcd849e5">Switzerland</strong>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a className="v-dd-foot" href="/#schengen">
                    <span data-i="bb3903daa1">Explore all 29 Schengen countries</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a className="v-nl" data-i="1380fd78eb" href="/holidays" aria-current={current === "/holidays" ? "page" : undefined}>Travel Packages</a>
              </li>
              <li className="v-dd">
                <button aria-expanded="false" className="v-nl v-dd-btn" data-i="d49a75e229" type="button">
                  Visa Tools
                  <span aria-hidden="true" className="v-caret"></span>
                </button>
                <div className="v-dd-panel">
                  <ul>
                    <li>
                      <a href="/visa-checker">
                        <span>
                          <strong data-i="04c32ea54d">Visa eligibility checker</strong>
                          <small data-i="16e51dec1b">Do I need a visa?</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/cost-calculator">
                        <span>
                          <strong data-i="e72fb9dca3">Visa cost calculator</strong>
                          <small data-i="7efadf9e98">Fees for your whole group</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/document-checklist">
                        <span>
                          <strong data-i="cc4349278d">Document checklist</strong>
                          <small data-i="cba3cbaf1e">Made for your situation</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/schengen-calculator">
                        <span>
                          <strong data-i="e11ee65b05">90/180-day calculator</strong>
                          <small data-i="8c3d278e76">Days used and left</small>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/appointment-updates">
                        <span>
                          <strong data-i="634a595095">Appointment updates</strong>
                          <small data-i="2fdefcb6b9">What our team has seen</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a className="v-dd-foot" href="/tools">
                    <span data-i="dc6a7ca4ae">All visa tools</span>
                    {" "}
                    <span aria-hidden="true" className="v-arr">
                      <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
                        <path d="M5 12h14M13 6l6 6-6 6"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <a className="v-nl" data-i="c887b9d3b3" href="/about" aria-current={current === "/about" ? "page" : undefined}>About Us</a>
              </li>
              <li>
                <a className="v-nl" data-i="b37456c453" href="/contact" aria-current={current === "/contact" ? "page" : undefined}>Contact</a>
              </li>
            </ul>
            <a className="v-btn v-btn-red v-nav-cta-m" data-i="586e403157" href="https://wa.me/447862609755" rel="noopener" target="_blank">Free Consultation</a>
          </nav>
          <div className="v-right">
            <div className="lang">
              <button aria-controls="lang-menu" aria-expanded="false" aria-haspopup="true" aria-label="Change language" className="lang-btn" data-i-aria-label="789b14dfa8" type="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 24 24" width="16">
                  <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="1.6"></circle>
                  <path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18M12 3c-2.8 2.6-2.8 15.4 0 18" fill="none" stroke="currentColor" strokeWidth="1.4"></path>
                </svg>
                {" "}
                <span className="lang-code notranslate">EN</span>
              </button>
              <div aria-label="Languages" className="lang-menu" id="lang-menu" role="menu">
                <p className="lang-title">Language</p>
                <button aria-checked="true" data-lang="en" role="menuitemradio" type="button">
                  <span className="ln">English</span>
                  <span className="le">English</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="ur" role="menuitemradio" type="button">
                  <span className="ln" dir="rtl">اردو</span>
                  <span className="le">Urdu</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="ar" role="menuitemradio" type="button">
                  <span className="ln" dir="rtl">العربية</span>
                  <span className="le">Arabic</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="hi" role="menuitemradio" type="button">
                  <span className="ln">हिन्दी</span>
                  <span className="le">Hindi</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="bn" role="menuitemradio" type="button">
                  <span className="ln">বাংলা</span>
                  <span className="le">Bengali</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="fr" role="menuitemradio" type="button">
                  <span className="ln">Français</span>
                  <span className="le">French</span>
                </button>
                {" "}
                <button aria-checked="false" data-lang="tr" role="menuitemradio" type="button">
                  <span className="ln">Türkçe</span>
                  <span className="le">Turkish</span>
                </button>
              </div>
            </div>
            <a className="v-btn v-btn-red v-btn-sm v-nav-cta" data-i="586e403157" href="https://wa.me/447862609755" rel="noopener" target="_blank">Free Consultation</a>
            {" "}
            <button aria-controls="nav" aria-expanded="false" className="menu-btn v-menu" type="button">
              <span aria-hidden="true" className="v-menu-l"></span>
              <span className="v-menu-t" data-i="57f5f5efbc">Menu</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
