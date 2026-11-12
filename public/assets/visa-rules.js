/*
  TravelVista – visa rules used by the "Do I need a visa?" checker (visa-checker.html).
  ---------------------------------------------------------------------------------
  HOW TO EDIT
  - Country names must be spelled exactly as in the NATIONALITIES list below.
  - To move a country between lists, cut and paste its name (keep the quotes and comma).
  - Change "updated" to today's date whenever you edit this file.
  - Lines marked TODO need checking against the official source given next to them.

  Rules last checked: 11 November 2026. Rules change, so re-check at least every 3 months.
*/
window.TV_VISA_RULES = {
  updated: "11 November 2026",

  /* Passport nationalities shown in the searchable dropdown. */
  NATIONALITIES: [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "British (UK)", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
    "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo (Democratic Republic)",
    "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hong Kong (SAR passport)", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao (SAR passport)", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ],

  /* EU, EEA and Swiss citizens: free movement in the Schengen area (no visa, no ETIAS). */
  EU_EEA_CH: [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
    "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal",
    "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Iceland", "Liechtenstein", "Norway", "Switzerland"
  ],

  /* SCHENGEN – visa-free for short stays (up to 90 days in any 180).
     Source: Annex II of Regulation (EU) 2018/1806 (https://eur-lex.europa.eu/eli/reg/2018/1806/oj).
     TODO: verify this list against the latest consolidated Annex II before going live.
     Vanuatu is NOT listed: its visa waiver is suspended (European Commission, visa policy page, checked 11 Nov 2026). */
  SCHENGEN_VISA_FREE: [
    "Albania", "Andorra", "Antigua and Barbuda", "Argentina", "Australia", "Bahamas", "Barbados", "Bosnia and Herzegovina", "Brazil",
    "British (UK)", "Brunei", "Canada", "Chile", "Colombia", "Costa Rica", "Dominica", "El Salvador", "Georgia", "Grenada", "Guatemala",
    "Honduras", "Hong Kong (SAR passport)", "Israel", "Japan", "Kiribati", "Kosovo", "Macao (SAR passport)", "Malaysia",
    "Marshall Islands", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Montenegro", "New Zealand", "Nicaragua",
    "North Macedonia", "Palau", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Serbia", "Seychelles", "Singapore", "Solomon Islands",
    "South Korea", "Taiwan", "Timor-Leste", "Tonga", "Trinidad and Tobago", "Tuvalu", "Ukraine", "United Arab Emirates",
    "United States", "Uruguay", "Vatican City", "Venezuela"
  ],
  /* Visa-free only with a biometric passport (Annex II footnotes). */
  SCHENGEN_BIOMETRIC_ONLY: ["Albania", "Bosnia and Herzegovina", "Georgia", "Moldova", "Montenegro", "North Macedonia", "Serbia", "Ukraine"],

  /* ETIAS (EU travel authorisation for visa-free travellers).
     The EU says it starts "in the last quarter of 2026" but no exact date was confirmed when checked.
     TODO: verify the ETIAS start date and update this text. Official site: https://travel-europe.europa.eu/etias_en */
  ETIAS_NOTE: "The EU's ETIAS travel authorisation is due to start for visa-free travellers. Check the official ETIAS website before you travel.",
  ETIAS_URL: "https://travel-europe.europa.eu/etias_en",

  /* USA – Visa Waiver Program countries (ESTA instead of a visitor visa, if eligible).
     Source: travel.state.gov Visa Waiver Program list (42 countries, checked 11 Nov 2026 via a July 2026 copy).
     TODO: verify on https://travel.state.gov – including whether Romania has been added (sources disagree). */
  USA_VWP: [
    "Andorra", "Australia", "Austria", "Belgium", "Brunei", "Chile", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland",
    "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Israel", "Italy", "Japan", "Latvia", "Liechtenstein",
    "Lithuania", "Luxembourg", "Malta", "Monaco", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Qatar",
    "San Marino", "Singapore", "Slovakia", "Slovenia", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "British (UK)"
  ],

  /* CANADA – visa-exempt (fly with an eTA).
     Source: IRCC "Find out if you need a visa or eTA" (https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html).
     TODO: verify this list on canada.ca before going live. */
  CANADA_ETA: [
    "Andorra", "Australia", "Austria", "Bahamas", "Barbados", "Belgium", "British (UK)", "Brunei", "Bulgaria", "Chile", "Croatia",
    "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hong Kong (SAR passport)", "Hungary",
    "Iceland", "Ireland", "Israel", "Italy", "Japan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Monaco",
    "Netherlands", "New Zealand", "Norway", "Papua New Guinea", "Poland", "Portugal", "Romania", "Samoa", "San Marino", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "United Arab Emirates",
    "Vatican City"
  ],
  /* CANADA – eTA only if flying AND (held a Canadian visa in the last 10 years OR hold a valid US non-immigrant visa); otherwise a visa.
     Indonesia and Malaysia added 26 May 2026 (Canada Gazette SOR/2026-87).
     TODO: verify the rest of this list on canada.ca. */
  CANADA_ETA_CONDITIONAL: [
    "Antigua and Barbuda", "Argentina", "Brazil", "Costa Rica", "Indonesia", "Malaysia", "Mexico", "Morocco", "Panama",
    "Philippines", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Seychelles", "Thailand",
    "Trinidad and Tobago", "Uruguay"
  ],

  /* TURKEY – only British citizens are confirmed here (visa-free for tourism, up to 90 days in any 180).
     TODO: add other nationalities from https://www.mfa.gov.tr (visa information for foreigners). Until then the checker says we will check. */
  TURKEY_VISA_FREE: ["British (UK)"],

  /* UAE – only British citizens are confirmed here (visit visa on arrival).
     TODO: add other nationalities from https://u.ae (visa on arrival list). Until then the checker says we will check. */
  UAE_ON_ARRIVAL: ["British (UK)"],

  /* Visa centres for Schengen countries (UK). Leave "" if not confirmed; the checker then says we will confirm it.
     TODO: fill in the visa centre company for the other 26 countries. */
  SCHENGEN_CENTRES: {
    "France": "TLScontact",
    "Spain": "BLS International",
    "Italy": "VFS Global"
  }
};
