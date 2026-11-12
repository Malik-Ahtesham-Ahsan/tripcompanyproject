/* TravelVista free visa tools. Loaded by site.js only on pages with [data-tool]. Plain JavaScript, no libraries. */
(function () {
  "use strict";
  var TV = window.TV || {};
  var ASSET = TV.ASSET || "assets/";
  var pageUrl = TV.pageUrl || function (f) { return f; };
  var WA_NUMBER = "447862609755";
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var WA_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>';
  var waButton = function (label, lines) {
    var text = ["Hello TravelVista,"].concat(lines).join("\n");
    return '<p class="tool-wa"><a class="btn btn-wa" href="https://wa.me/' + WA_NUMBER + "?text=" + encodeURIComponent(text) +
      '" target="_blank" rel="noopener">' + WA_ICON + " " + esc(label) + "</a></p>";
  };
  var focusResult = function (el) {
    try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
    if (el.getBoundingClientRect().top > window.innerHeight * 0.6 || el.getBoundingClientRect().top < 0)
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };
  var loadScript = function (src, done) {
    var s = document.createElement("script"); s.src = src; s.onload = function () { done(); };
    s.onerror = function () { done(new Error("load")); };
    document.head.appendChild(s);
  };

  /* ------------------------------------------------------------------ 1. Do I need a visa? */
  var checker = function () {
    var form = $("vc-form"), out = $("vc-result");
    loadScript(ASSET + "visa-rules.js", function (err) {
      var R = window.TV_VISA_RULES;
      if (err || !R) { out.innerHTML = '<p class="err">The visa rules could not be loaded. Please refresh the page or message us.</p>'; return; }
      $("vc-nat-list").innerHTML = R.NATIONALITIES.map(function (n) { return '<option value="' + esc(n) + '"></option>'; }).join("");
      var ALIAS = { "british": "British (UK)", "uk": "British (UK)", "united kingdom": "British (UK)", "great britain": "British (UK)",
        "indian": "India", "pakistani": "Pakistan", "bangladeshi": "Bangladesh", "nigerian": "Nigeria", "chinese": "China",
        "filipino": "Philippines", "sri lankan": "Sri Lanka", "ghanaian": "Ghana", "turkish": "Turkey", "american": "United States",
        "usa": "United States", "us": "United States", "canadian": "Canada", "uae": "United Arab Emirates", "emirati": "United Arab Emirates",
        "egyptian": "Egypt", "moroccan": "Morocco", "kenyan": "Kenya", "south african": "South Africa", "nepalese": "Nepal", "nepali": "Nepal",
        "iranian": "Iran", "iraqi": "Iraq", "afghan": "Afghanistan", "brazilian": "Brazil", "mexican": "Mexico", "russian": "Russia",
        "ukrainian": "Ukraine", "albanian": "Albania", "saudi": "Saudi Arabia", "vietnamese": "Vietnam", "zimbabwean": "Zimbabwe", "korean": "South Korea" };
      var findNat = function (v) {
        var k = v.trim().toLowerCase();
        if (!k) return null;
        if (ALIAS[k]) return ALIAS[k];
        for (var i = 0; i < R.NATIONALITIES.length; i++) if (R.NATIONALITIES[i].toLowerCase() === k) return R.NATIONALITIES[i];
        return null;
      };
      var has = function (list, n) { return (list || []).indexOf(n) > -1; };
      var PAGE = { "USA": "usa-visa-from-uk.html", "Canada": "canada-visa-from-uk.html", "Turkey": "turkey-visa-from-uk.html", "UAE": "dubai-visa-from-uk.html" };
      var pageFor = function (d) { return PAGE[d] || d.toLowerCase().replace(/ /g, "-") + "-visa-from-uk.html"; };

      var decide = function (nat, status, dest) {
        var r = { kind: "check", title: "", type: "", where: "", notes: [] };
        var nonBritish = nat !== "British (UK)";
        var ukNote = "Your UK permission (for example your eVisa share code or residence permit) should be valid for your whole trip and well beyond your return date.";
        if (dest === "USA") {
          if (has(R.USA_VWP, nat)) { r.kind = "no"; r.title = "You probably don't need a visa, but you need an ESTA"; r.type = "ESTA under the Visa Waiver Program (if eligible)";
            r.notes.push("Some people still need a visa, for example because of some earlier refusals or travel history."); }
          else { r.kind = "yes"; r.title = "You are likely to need a US visitor visa"; r.type = "B1/B2 visitor visa";
            r.where = "Interview at the US Embassy in London for most UK residents"; r.notes.push("You complete the DS-160 form online and book an interview."); }
        } else if (dest === "Canada") {
          if (has(R.CANADA_ETA, nat)) { r.kind = "no"; r.title = "You don't need a visa to fly, but you need an eTA"; r.type = "Electronic Travel Authorization (eTA) for air travel"; }
          else if (has(R.CANADA_ETA_CONDITIONAL, nat)) { r.kind = "maybe"; r.title = "You may be able to get an eTA instead of a visa";
            r.type = "eTA if eligible, otherwise a visitor visa";
            r.notes.push("You can apply for an eTA only if you are flying to Canada and you have held a Canadian visa in the last 10 years or have a valid US non-immigrant visa. Otherwise you need a visitor visa."); }
          else { r.kind = "yes"; r.title = "You are likely to need a Canadian visitor visa"; r.type = "Visitor visa (temporary resident visa)";
            r.where = "Online with Immigration, Refugees and Citizenship Canada (IRCC), then biometrics at a visa application centre when asked"; }
        } else if (dest === "Turkey") {
          if (has(R.TURKEY_VISA_FREE, nat)) { r.kind = "no"; r.title = "No visa needed for tourism"; r.type = "Visa-free for up to 90 days in any 180 days"; }
          else { r.kind = "check"; r.title = "It depends on your passport: we'll check for you"; r.type = "Turkish e-Visa or a visa from a Turkish consulate";
            r.notes.push("Some passports can get an e-Visa only if they hold a valid visa or residence permit from the UK, US, Ireland or a Schengen country.");
            r.notes.push("The official e-Visa website is evisa.gov.tr. Be careful of look-alike sites that charge more."); }
        } else if (dest === "UAE") {
          if (has(R.UAE_ON_ARRIVAL, nat)) { r.kind = "no"; r.title = "No visa needed in advance"; r.type = "Visit visa on arrival";
            r.notes.push("Check that your passport has enough validity before you travel."); }
          else { r.kind = "check"; r.title = "It depends on your passport: we'll check for you"; r.type = "Visa on arrival or a visit visa before travel";
            r.notes.push("Some nationalities with UK residence can get a visa on arrival. Others need a visit visa before travelling."); }
        } else { // Schengen country
          if (has(R.EU_EEA_CH, nat)) { r.kind = "no"; r.title = "No visa needed"; r.type = "Free movement as an EU, EEA or Swiss citizen"; }
          else if (has(R.SCHENGEN_VISA_FREE, nat)) {
            r.kind = "no"; r.title = "No visa needed for short stays"; r.type = "Visa-free: up to 90 days in any 180 days";
            if (has(R.SCHENGEN_BIOMETRIC_ONLY, nat)) r.notes.push("Visa-free travel applies to biometric passports.");
            r.notes.push(R.ETIAS_NOTE + ' <a href="' + esc(R.ETIAS_URL) + '" target="_blank" rel="noopener">Official ETIAS website</a>');
            r.notes.push('Use our <a href="' + esc(pageUrl("schengen-calculator.html")) + '">90/180-day calculator</a> to check your days.');
          } else {
            r.kind = "yes"; r.title = "You are likely to need a Schengen visa"; r.type = "Schengen short-stay visa (type C), up to 90 days in any 180";
            var c = (R.SCHENGEN_CENTRES || {})[dest];
            r.where = c ? c + " visa centre in the UK" : "We'll confirm the current visa centre for " + dest; /* TODO placeholder: centres for other countries are set in visa-rules.js */
            r.notes.push("Apply to the country where you will spend the most nights. If the nights are equal, apply to the country you enter first.");
            r.notes.push("Our Schengen visa package is £89 per applicant. We prepare your full file and book your appointment.");
          }
        }
        if (nonBritish && r.kind !== "no") r.notes.push(ukNote);
        if (status === "Other" && nonBritish && r.kind !== "no") r.notes.push("Tell us your exact UK status so we can check your options.");
        return r;
      };

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = $("vc-status").value, dest = $("vc-dest").value;
        var natInput = $("vc-nat"), err = $("vc-nat-err");
        var nat = findNat(natInput.value);
        var stEl = $("vc-status"), stErr = $("vc-status-err");
        if (!status) { stErr.hidden = false; stEl.setAttribute("aria-invalid", "true"); stEl.focus(); return; }
        stErr.hidden = true; stEl.removeAttribute("aria-invalid");
        var britishByStatus = status === "British citizen";
        if (!nat && !britishByStatus) { err.hidden = false; natInput.setAttribute("aria-invalid", "true"); natInput.focus(); return; }
        err.hidden = true; natInput.removeAttribute("aria-invalid");
        var used = britishByStatus ? "British (UK)" : nat;
        var r = decide(used, status, dest);
        var badge = { no: ["ok", "No visa needed"], yes: ["need", "Visa likely needed"], maybe: ["maybe", "It depends"], check: ["maybe", "We'll check"] }[r.kind];
        var rows = '<dt>Visa type</dt><dd>' + esc(r.type) + '</dd>' + (r.where ? '<dt>Where to apply</dt><dd>' + esc(r.where) + '</dd>' : "");
        var notes = r.notes.length ? '<ul class="tool-notes">' + r.notes.map(function (n) { return "<li>" + n + "</li>"; }).join("") + "</ul>" : "";
        var british = britishByStatus && nat && nat !== "British (UK)" ? '<p class="small">As a British citizen, this answer is for travel on your British passport.</p>' : "";
        out.innerHTML =
          '<span class="tool-badge tool-' + badge[0] + '">' + badge[1] + '</span>' +
          '<h2 class="tool-h">' + esc(r.title) + '</h2>' + british +
          '<dl class="tool-dl">' + rows + '</dl>' + notes +
          '<p><a class="tool-link" href="' + esc(pageUrl(pageFor(dest))) + '">Read our ' + esc(dest === "UAE" ? "Dubai" : dest) + ' visa guide <span aria-hidden="true">→</span></a></p>' +
          '<p class="small">Rules last checked: ' + esc(R.updated) + '. Rules change, so we confirm everything before you apply.</p>' +
          waButton("Ask us on WhatsApp", ["I used your visa checker.", "Passport: " + (nat || natInput.value || "British (UK)"), "UK status: " + status,
            "Destination: " + dest, "Result: " + badge[1] + " (" + r.type + ")", "Can you help me with my application?"]);
        focusResult(out);
      });
    });
  };

  /* ------------------------------------------------------------------ 2. Cost calculator */
  var cost = function () {
    var OUR_FEE = 89, ADULT_EUR = 90, CHILD_EUR = 45;
    var out = $("cc-result");
    var gbp = function (n) { return "£" + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    var eur = function (n) { return "€" + n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    var num = function (id, min) { var v = parseFloat($(id).value); return isFinite(v) && v >= (min || 0) ? v : 0; };
    var calc = function () {
      var a = Math.floor(num("cc-adults")), k = Math.floor(num("cc-kids")), s = Math.floor(num("cc-small"));
      var n = a + k + s, rate = num("cc-rate"), centreRaw = $("cc-centre").value.trim(), centre = num("cc-centre");
      if (!n) { out.innerHTML = '<p class="tool-empty">Enter at least one applicant.</p>'; return; }
      if (!rate) { out.innerHTML = '<p class="err">Enter an exchange rate above 0.</p>'; return; }
      var ourGbp = OUR_FEE * n, embEur = a * ADULT_EUR + k * CHILD_EUR, embGbp = embEur * rate;
      var cenGbp = centre * n, totGbp = ourGbp + embGbp + cenGbp, totEur = totGbp / rate;
      var row = function (name, detail, g) { return '<tr><th scope="row">' + name + '<span class="small">' + detail + '</span></th><td class="num">' + gbp(g) + '</td><td class="num">' + eur(g / rate) + '</td></tr>'; };
      out.innerHTML =
        '<h2 class="tool-h">Estimated total for ' + n + ' applicant' + (n > 1 ? "s" : "") + '</h2>' +
        '<p class="tool-total"><strong>' + gbp(totGbp) + '</strong> <span>about ' + eur(totEur) + '</span></p>' +
        '<div class="table-wrap"><table class="tool-table"><caption class="sr-only">Cost breakdown</caption>' +
        '<thead><tr><th scope="col">Fee</th><th scope="col" class="num">£</th><th scope="col" class="num">€</th></tr></thead><tbody>' +
        row("Our service fee", "£89 × " + n, ourGbp) +
        '<tr><th scope="row">Embassy (visa) fee<span class="small">' + a + ' × €90' + (k ? ", " + k + " × €45" : "") + (s ? ", " + s + " under 6 free" : "") + '</span></th><td class="num">' + gbp(embGbp) + '</td><td class="num">' + eur(embEur) + '</td></tr>' +
        (centreRaw ? row("Visa centre fee", gbp(centre) + " × " + n, cenGbp)
          : '<tr><th scope="row">Visa centre fee<span class="small">Enter the fee above to include it</span></th><td class="num">–</td><td class="num">–</td></tr>') +
        '</tbody><tfoot><tr><th scope="row">Total</th><td class="num">' + gbp(totGbp) + '</td><td class="num">' + eur(totEur) + '</td></tr></tfoot></table></div>' +
        '<p class="small">Euro amounts use your exchange rate (€1 = £' + rate + '). Not included: travel insurance, flights and hotels.</p>' +
        waButton("Get an exact quote on WhatsApp", ["I used your cost calculator.", "Adults: " + a + ", children 6–11: " + k + ", under 6: " + s,
          "Estimated total: " + gbp(totGbp) + (centreRaw ? "" : " (without visa centre fee)"), "Can you give me an exact quote?"]);
    };
    $("cc-form").addEventListener("input", calc);
    $("cc-form").addEventListener("submit", function (e) { e.preventDefault(); calc(); });
    calc();
  };

  /* ------------------------------------------------------------------ 3. 90/180-day calculator */
  var days = function () {
    var list = $("sd-trips"), out = $("sd-result"), errEl = $("sd-err"), count = 0;
    var DAY = 86400000;
    var toIdx = function (v) { if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return null; var p = v.split("-"); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / DAY); };
    var fmt = function (i) { return new Date(i * DAY).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }); };
    var todayIdx = function () { var d = new Date(); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY); };
    var iso = function (i) { return new Date(i * DAY).toISOString().slice(0, 10); };
    var renumber = function () {
      [].forEach.call(list.children, function (row, i) {
        row.querySelector("legend").textContent = "Trip " + (i + 1);
        row.querySelector(".trip-del").setAttribute("aria-label", "Remove trip " + (i + 1));
      });
    };
    var addTrip = function (focus) {
      count++;
      var id = "sd-t" + count, row = document.createElement("fieldset");
      row.className = "trip-row";
      row.innerHTML = '<legend></legend><div class="field"><label for="' + id + 'a">Entry date</label><input type="date" id="' + id + 'a" class="trip-in"></div>' +
        '<div class="field"><label for="' + id + 'b">Exit date</label><input type="date" id="' + id + 'b" class="trip-out"></div>' +
        '<button type="button" class="btn btn-ghost trip-del">Remove</button>';
      row.querySelector(".trip-del").addEventListener("click", function () {
        var next = row.nextElementSibling || row.previousElementSibling;
        row.remove(); renumber();
        if (!list.children.length) addTrip(true); else (next.querySelector("input") || $("sd-add")).focus();
      });
      list.appendChild(row); renumber();
      if (focus) row.querySelector("input").focus();
    };
    $("sd-add").addEventListener("click", function () { addTrip(true); });
    addTrip(false);
    $("sd-check").value = iso(todayIdx());

    $("sd-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var problems = [], trips = [], set = {};
      [].forEach.call(list.children, function (row, i) {
        var a = toIdx(row.querySelector(".trip-in").value), b = toIdx(row.querySelector(".trip-out").value);
        if (a === null && b === null) return;
        if (a === null || b === null) { problems.push("Trip " + (i + 1) + ": enter both the entry and exit date."); return; }
        if (b < a) { problems.push("Trip " + (i + 1) + ": the exit date is before the entry date."); return; }
        trips.push([a, b]);
        for (var d = a; d <= b; d++) set[d] = 1;
      });
      var check = toIdx($("sd-check").value);
      if (check === null) problems.push("Enter the date you want to enter or check.");
      if (problems.length) { errEl.textContent = problems.join(" "); errEl.hidden = false; return; }
      errEl.hidden = true;
      var inWindow = function (end, extraFrom) { // days of stay in the 180 days ending on `end`
        var n = 0;
        for (var d = end - 179; d <= end; d++) if (set[d] || (extraFrom != null && d >= extraFrom)) n++;
        return n;
      };
      var used = inWindow(check);
      var left = Math.max(0, 90 - used);
      // continuous stay from the check date: latest day the 90-day limit still holds
      var latest = null;
      for (var d = check; d < check + 400; d++) { if (inWindow(d, check) > 90) break; latest = d; }
      var html = '<h2 class="tool-h">Your result</h2><div class="tool-stats">' +
        '<div><span>Days used</span><strong>' + used + '</strong><small>in the 180 days up to ' + fmt(check) + '</small></div>' +
        '<div><span>Days remaining</span><strong>' + left + '</strong><small>out of 90</small></div>' +
        '<div><span>Stay until</span><strong>' + (latest !== null ? fmt(latest) : "–") + '</strong><small>' + (latest !== null ? "latest exit if you enter on " + fmt(check) : "you can't enter on this date") + '</small></div></div>';
      html += '<p class="small">The 180-day period runs from ' + fmt(check - 179) + ' to ' + fmt(check) + '. Entry and exit days count as days of stay.</p>';
      if (latest === null) {
        var earliest = null;
        for (var e2 = check + 1; e2 < check + 400; e2++) { if (!set[e2] && inWindow(e2, e2) <= 90) { earliest = e2; break; } }
        html += '<p class="note warn">You have already used 90 days in this period.' + (earliest !== null ? " The earliest date you could enter again is <strong>" + fmt(earliest) + "</strong>." : "") + '</p>';
      }
      var over = [];
      trips.forEach(function (t, i) {
        for (var d = t[0]; d <= t[1]; d++) if (inWindow(d) > 90) { over.push("Trip " + (i + 1) + " goes over 90 days on " + fmt(d) + "."); break; }
      });
      if (over.length) html += '<div class="note warn"><strong>Check these trips:</strong><ul class="tool-notes">' + over.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>";
      var tripLines = trips.map(function (t, i) { return "Trip " + (i + 1) + ": " + fmt(t[0]) + " – " + fmt(t[1]); });
      html += waButton("Check my plans on WhatsApp", ["I used your 90/180-day calculator."].concat(tripLines,
        ["Check date: " + fmt(check), "Days used: " + used + ", days remaining: " + left + (latest !== null ? ", stay until: " + fmt(latest) : ""), "Can you check my travel plans?"]));
      out.innerHTML = html;
      focusResult(out);
    });
  };

  /* ------------------------------------------------------------------ 4. Document checklist */
  var docs = function () {
    var out = $("dc-result");
    var BASE = [
      "Passport issued in the last 10 years, valid for at least 3 months after you leave the Schengen area, with at least 2 blank pages",
      "Proof of your UK status, such as your eVisa share code or residence permit, valid well beyond your return date",
      "Completed application form",
      "Recent passport photo that meets Schengen photo rules",
      "Travel medical insurance covering at least €30,000 for the whole Schengen area and your full trip",
      "Flight reservation showing your entry to and exit from the Schengen area",
      "Proof of accommodation for every night, such as hotel bookings or an invitation letter",
      "Bank statements, usually for the last 3 months, showing you can pay for the trip",
      "Cover letter explaining your trip, if the country asks for one"
    ];
    var JOB = {
      employed: ["Employment letter from your employer", "Recent payslips"],
      self: ["Business documents showing your business is active, such as company registration and recent accounts or tax returns"], /* TODO: verify */
      student: ["Letter from your university or college confirming your studies"],
      retired: ["Proof of income, such as pension statements", "If someone else pays for your trip: their sponsorship letter and bank statements"], /* TODO: verify */
      sponsored: ["Sponsorship letter from the family member paying for your trip", "Your sponsor's bank statements",
        "Copy of your sponsor's passport or ID", "Proof of your relationship, such as a birth or marriage certificate"] /* TODO: verify */
    };
    var JOB_NAME = { employed: "Employed", self: "Self-employed", student: "Student", retired: "Unemployed or retired", sponsored: "Sponsored by family" };
    var FAMILY = ["A separate application form and photo for each person, including children",
      "Children's birth certificates", "Consent letter from any parent who is not travelling, with a copy of their ID",
      "Marriage certificate if you are travelling with your spouse"]; /* TODO: verify */
    var DEST = { /* country-specific extras. TODO: add more countries */
      "France": ["Application completed online on the official France-Visas website"]
    };
    var n = 0;
    var group = function (title, items) {
      return '<h3>' + esc(title) + '</h3><ul class="tick-list">' + items.map(function (t) {
        n++; return '<li><input type="checkbox" id="dc-i' + n + '"><label for="dc-i' + n + '">' + esc(t) + '</label></li>';
      }).join("") + "</ul>";
    };
    $("dc-form").addEventListener("submit", function (e) {
      e.preventDefault(); n = 0;
      var job = $("dc-job").value, who = $("dc-who").value, dest = $("dc-dest").value;
      var html = '<div class="print-only print-head"><strong>TravelVista Ltd</strong> · Document checklist · ' + new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) + '</div>' +
        '<h2 class="tool-h">Checklist: ' + esc(dest) + ' visa</h2><p class="small">' + esc(JOB_NAME[job]) + " · " + (who === "family" ? "Travelling with family" : "Travelling alone") + '</p>' +
        group("Everyone needs", BASE) + group("For your situation", JOB[job]) + (who === "family" ? group("Travelling with family", FAMILY) : "") +
        group("For " + dest, (DEST[dest] || []).concat(["Any extra documents " + dest + " asks for: we confirm these for your application"])) +
        '<p class="small">The exact list depends on the country, your reason for travel and your situation.</p>' +
        '<p class="print-only small">This is general guidance only. TravelVista Ltd is not connected to any government or embassy. Every visa decision is made by the embassy or consulate. WhatsApp +44 7862 609755 · info@travelvista.uk</p>' +
        '<p class="no-print"><button type="button" class="btn btn-ghost" id="dc-print">Print / Save as PDF</button></p>' +
        '<div class="no-print">' + waButton("Send me my exact list on WhatsApp", ["I used your document checklist.", "Destination: " + dest,
          "Situation: " + JOB_NAME[job], "Travelling: " + (who === "family" ? "with family" : "alone"), "Can you check my documents?"]) + "</div>";
      out.innerHTML = html;
      $("dc-print").addEventListener("click", function () { window.print(); });
      focusResult(out);
    });
  };

  /* ------------------------------------------------------------------ 5. Appointment updates */
  var appts = function () {
    var out = $("ap-result");
    var CLS = { "slots available": "ok", "limited": "maybe", "no slots": "need" };
    var fmtDate = function (v) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v || "")) return "";
      var p = v.split("-");
      return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
    };
    fetch(ASSET + "appointments.json", { cache: "no-store" }).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (data) {
      var rows = (data.centres || []).map(function (c) {
        var st = String(c.status || "").trim(), cls = CLS[st.toLowerCase()] || "unknown", when = fmtDate(c.updated);
        return '<tr><th scope="row" data-label="Visa centre">' + esc(c.company) + '</th><td data-label="City">' + esc(c.city) + '</td>' +
          '<td data-label="For">' + esc(c.serves || "") + '</td>' +
          '<td data-label="Status"><span class="tool-badge tool-' + cls + '">' + esc(st || "Not checked yet") + '</span></td>' +
          '<td data-label="Last updated">' + (when ? '<time datetime="' + esc(c.updated) + '">' + when + '</time>' : "–") + '</td></tr>';
      }).join("");
      out.innerHTML = '<div class="table-wrap"><table class="tool-table appt-table"><caption class="sr-only">Appointment availability by visa centre</caption>' +
        '<thead><tr><th scope="col">Visa centre</th><th scope="col">City</th><th scope="col">For</th><th scope="col">Status</th><th scope="col">Last updated</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>' +
        waButton("Message us to book", ["I saw your appointment updates page.", "I'd like help booking a visa appointment.", "My destination: ", "My nearest centre: "]);
    }).catch(function () {
      out.innerHTML = '<p class="err">The latest updates could not be loaded. Please message us for current availability.</p>' +
        waButton("Message us to book", ["I'd like help booking a visa appointment."]);
    });
  };

  var tools = { checker: checker, cost: cost, days: days, docs: docs, appts: appts };
  [].forEach.call(document.querySelectorAll("[data-tool]"), function (el) {
    var fn = tools[el.getAttribute("data-tool")];
    if (fn) fn();
  });
})();
