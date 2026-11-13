// Site header (v1). `current` is the page file name, used to mark the active menu link.
// The stylesheets for this page style are declared here and hoisted into <head> by React.
export default function Header({ current }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" precedence="default" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=IBM+Plex+Mono:wght@500&family=Source+Sans+3:wght@400;600;700&display=swap" />
      <link rel="stylesheet" precedence="default" href="/assets/styles.css" />
      <a className="skip" data-i="0a4470d64e" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap bar">
          <a aria-label="TravelVista Ltd home" className="logo" href="/">
            <img alt="TravelVista" className="logo-img logo-for-light" height="46" src="/assets/logo-horizontal.png" width="173" />
            <img alt="TravelVista" className="logo-img logo-for-dark" height="46" src="/assets/logo-horizontal-dark.png" width="173" />
          </a>
          <div className="lang">
            <button aria-controls="lang-menu" aria-expanded="false" aria-haspopup="true" aria-label="Change language" className="lang-btn" data-i-aria-label="789b14dfa8" type="button">
              <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
                <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="1.8"></circle>
                <path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18M12 3c-2.8 2.6-2.8 15.4 0 18" fill="none" stroke="currentColor" strokeWidth="1.6"></path>
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
          <button aria-label="Switch between light and dark mode" className="theme-btn" data-i-aria-label="90c3896e2d" data-i-title="2efaeef65b" title="Light / dark mode" type="button">
            <svg aria-hidden="true" className="i-moon" height="20" viewBox="0 0 24 24" width="20">
              <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" fill="currentColor"></path>
            </svg>
            {" "}
            <svg aria-hidden="true" className="i-sun" height="20" viewBox="0 0 24 24" width="20">
              <circle cx="12" cy="12" fill="currentColor" r="4.5"></circle>
              <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"></path>
              </g>
            </svg>
          </button>
          {" "}
          <button aria-controls="nav" aria-expanded="false" className="menu-btn" data-i="57f5f5efbc" type="button">Menu</button>
          <nav aria-label="Main" className="nav" data-i-aria-label="62bce9422f" id="nav">
            <ul>
              <li className="nav-group">
                <span className="nav-trigger" data-i="e8f1e9ab2e">Schengen visa</span>
                <div className="mega">
                  <div className="mega-inner">
                    <ul className="mega-list">
                      <li>
                        <a className="nav-link mega-link" href="/schengen-visa" aria-current={current === "/schengen-visa" ? "page" : undefined}>
                          <span className="badge">EU</span>
                          <span className="mega-text">
                            <strong data-i="6c35a0be82">Schengen visa from the UK</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/france-visa-from-uk" aria-current={current === "/france-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">FR</span>
                          <span className="mega-text">
                            <strong data-i="5b7b21c8b9">France visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/spain-visa-from-uk" aria-current={current === "/spain-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">ES</span>
                          <span className="mega-text">
                            <strong data-i="61c580383b">Spain visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/italy-visa-from-uk" aria-current={current === "/italy-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">IT</span>
                          <span className="mega-text">
                            <strong data-i="58d03af574">Italy visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/schengen-visa#countries" aria-current={current === "/schengen-visa#countries" ? "page" : undefined}>
                          <span className="badge">29</span>
                          <span className="mega-text">
                            <strong data-i="322e27ed67">All 29 countries</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-group">
                <span className="nav-trigger" data-i="90a9365bdb">Other visas</span>
                <div className="mega">
                  <div className="mega-inner">
                    <ul className="mega-list">
                      <li>
                        <a className="nav-link mega-link" href="/usa-visa-from-uk" aria-current={current === "/usa-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">US</span>
                          <span className="mega-text">
                            <strong data-i="bbb0a4dfea">USA visitor visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/canada-visa-from-uk" aria-current={current === "/canada-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">CA</span>
                          <span className="mega-text">
                            <strong data-i="d776d27d0b">Canada visitor visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/turkey-visa-from-uk" aria-current={current === "/turkey-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">TR</span>
                          <span className="mega-text">
                            <strong data-i="e189338627">Turkey visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link mega-link" href="/dubai-visa-from-uk" aria-current={current === "/dubai-visa-from-uk" ? "page" : undefined}>
                          <span className="badge">AE</span>
                          <span className="mega-text">
                            <strong data-i="93fd71e8f8">Dubai (UAE) visa</strong>
                          </span>
                          <span aria-hidden="true" className="mega-arrow">→</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a className="nav-link" data-i="80729cc5d8" href="/holidays" aria-current={current === "/holidays" ? "page" : undefined}>Holidays</a>
              </li>
              <li>
                <a className="nav-link" data-i="ff4fb80b4d" href="/#approvals" aria-current={current === "/#approvals" ? "page" : undefined}>Visa approvals</a>
              </li>
              <li>
                <a className="nav-link" data-i="b37456c453" href="/contact" aria-current={current === "/contact" ? "page" : undefined}>Contact</a>
              </li>
            </ul>
            <a className="btn btn-primary btn-sm" data-i="eef4ca437c" href="https://wa.me/447862609755" rel="noopener" target="_blank">Free consultation</a>
          </nav>
        </div>
      </header>
    </>
  );
}
