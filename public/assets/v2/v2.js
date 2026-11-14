/* TravelVista V2 — interactions. Loads after site.js (language switcher, chat, mobile menu). */
(function () {
  "use strict";
  // helpers from site.js (window.TV); looked up when needed because script order can vary
  var tv = function () { return window.TV || {}; };
  var CLEAN0 = !/\.html$/.test(location.pathname) && location.pathname !== "/index.html";
  var asset = function () { return tv().ASSET || (CLEAN0 ? "/assets/" : "assets/"); };
  var pageUrl = function (f) { return tv().pageUrl ? tv().pageUrl(f) : (CLEAN0 ? "/" + f.replace(/^index\.html$/, "").replace(/\.html$/, "") : f); };
  var WA = "https://wa.me/447862609755";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var nm = function (en) { var d = window.tvDict; return (d && d._names && d._names[en]) || en; };
  var ui = function (k, en) { var d = window.tvDict; return (d && d._ui && d._ui[k]) || en; };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- navigation dropdowns ---------------- */
  $$(".v-dd").forEach(function (dd) {
    var btn = $(".v-dd-btn", dd), t;
    var set = function (on) { dd.classList.toggle("open", on); btn.setAttribute("aria-expanded", on ? "true" : "false"); };
    btn.addEventListener("click", function () { var on = !dd.classList.contains("open"); $$(".v-dd.open").forEach(function (o) { if (o !== dd) { o.classList.remove("open"); $(".v-dd-btn", o).setAttribute("aria-expanded", "false"); } }); set(on); });
    if (fine) {
      dd.addEventListener("mouseenter", function () { if (window.innerWidth > 980) { clearTimeout(t); set(true); } });
      dd.addEventListener("mouseleave", function () { if (window.innerWidth > 980) { t = setTimeout(function () { set(false); }, 160); } });
    }
    dd.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); btn.focus(); } });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".v-dd")) $$(".v-dd.open").forEach(function (o) { o.classList.remove("open"); $(".v-dd-btn", o).setAttribute("aria-expanded", "false"); }); });
  var menuBtn = $(".v-menu"), nav = $("#nav");
  if (menuBtn && nav) {
    new MutationObserver(function () { document.documentElement.style.overflow = nav.classList.contains("open") ? "hidden" : ""; menuBtn.classList.toggle("on", nav.classList.contains("open")); })
      .observe(nav, { attributes: true, attributeFilter: ["class"] });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { if (nav.classList.contains("open")) menuBtn.click(); }); });
  }

  /* ---------------- reveal on scroll ---------------- */
  var revealEls = $$(".v-reveal, .v-intro-media, .v-steps-wrap, .v-cta");
  if ("IntersectionObserver" in window && !reduce) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
    }, { threshold: .18, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el, i) { el.style.transitionDelay = el.classList.contains("v-reveal") ? ((i % 3) * 0.08) + "s" : ""; ro.observe(el); });
  } else revealEls.forEach(function (el) { el.classList.add("in"); });

  /* ---------------- hero search ---------------- */
  var form = $(".v-search");
  if (form) {
    var list = JSON.parse(form.getAttribute("data-dests") || "[]");
    var input = $("input", form), box = $(".v-search-list", form), sel = -1, shown = [];
    var norm = function (s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };
    var render = function () {
      var q = norm(input.value.trim());
      shown = q ? list.filter(function (d) { return norm(d.n).indexOf(q) > -1 || norm(nm(d.n)).indexOf(q) > -1; }).slice(0, 7) : [];
      sel = shown.length ? 0 : -1;
      box.innerHTML = shown.map(function (d, i) {
        var code = (d.s.match(/^([a-z-]+)-visa/) || [])[1];
        return '<li role="option" id="vd-' + i + '" aria-selected="' + (i === sel) + '" data-i="' + i + '">' + esc(nm(d.n)) + '</li>';
      }).join("");
      box.hidden = !shown.length; input.setAttribute("aria-expanded", shown.length ? "true" : "false");
      if (sel > -1) input.setAttribute("aria-activedescendant", "vd-" + sel); else input.removeAttribute("aria-activedescendant");
    };
    var mark = function () { $$("li", box).forEach(function (li, i) { li.setAttribute("aria-selected", i === sel ? "true" : "false"); }); input.setAttribute("aria-activedescendant", "vd-" + sel); };
    var go = function (d) { if (d) location.href = pageUrl(d.s); else if (input.value.trim()) window.open(WA + "?text=" + encodeURIComponent("Hello TravelVista, I am planning to travel to " + input.value.trim() + ". Can you help with my visa?"), "_blank", "noopener"); };
    input.addEventListener("input", render);
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" && shown.length) { e.preventDefault(); sel = (sel + 1) % shown.length; mark(); }
      else if (e.key === "ArrowUp" && shown.length) { e.preventDefault(); sel = (sel - 1 + shown.length) % shown.length; mark(); }
      else if (e.key === "Escape") { box.hidden = true; input.setAttribute("aria-expanded", "false"); }
    });
    box.addEventListener("mousedown", function (e) { var li = e.target.closest("li"); if (li) { e.preventDefault(); go(shown[+li.getAttribute("data-i")]); } });
    input.addEventListener("blur", function () { setTimeout(function () { box.hidden = true; input.setAttribute("aria-expanded", "false"); }, 120); });
    form.addEventListener("submit", function (e) { e.preventDefault(); go(shown[sel > -1 ? sel : 0]); });
  }

  /* ---------------- Schengen map explorer ---------------- */
  var mw = $(".v-map-wrap");
  if (mw) {
    var C = JSON.parse(mw.getAttribute("data-countries") || "{}");
    var empty = $(".v-cp-empty", mw), full = $(".v-cp-full", mw), selEl = $(".v-map-pick select", mw);
    var vcDefault = full.getAttribute("data-vc") || "";
    var pick = function (code, focus) {
      var c = C[code]; if (!c) return;
      $$(".v-mc", mw).forEach(function (p) { p.classList.toggle("on", p.getAttribute("data-c") === code); });
      empty.hidden = true; full.hidden = false;
      full.style.animation = "none"; void full.offsetWidth; full.style.animation = "";
      var f = $(".v-cp-flag", full); f.src = asset() + "v2/flags/" + code.toLowerCase() + ".svg"; f.alt = "";
      $(".v-cp-name", full).textContent = nm(c.n);
      $(".v-cp-cap b", full).textContent = nm(c.cap);
      var tplA = $(".v-cp-tpl-a"), tplB = $(".v-cp-tpl-b");
      $(".v-cp-vc", full).textContent = c.vc ? c.vc + " · " + (tplA ? tplA.textContent : "UK visa application centre") : (tplB ? tplB.textContent : "We confirm the current visa centre and book your appointment for you.");
      $(".v-cp-guide", full).href = pageUrl(c.s);
      $(".v-cp-wa", full).href = WA + "?text=" + encodeURIComponent("Hello TravelVista, I would like help with a " + c.n + " visa.");
      if (selEl) selEl.value = code;
      if (focus) $(".v-cp-name", full).setAttribute("tabindex", "-1");
    };
    $$(".v-mc", mw).forEach(function (p) {
      p.addEventListener("click", function () { pick(p.getAttribute("data-c")); });
      if (fine) p.addEventListener("mouseenter", function () { p.parentNode.appendChild(p); });
    });
    if (selEl) selEl.addEventListener("change", function () { if (selEl.value) pick(selEl.value, true); });
  }

  /* ---------------- reviews slider ---------------- */
  var stage = $(".v-rv-stage");
  if (stage) {
    var slides = $$(".v-rv", stage), dots = $$(".v-dot", stage), cur = 0, timer;
    var show = function (i) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("on", k === cur); s.setAttribute("aria-hidden", k === cur ? "false" : "true"); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k === cur); });
    };
    var auto = function () { clearInterval(timer); if (!reduce) timer = setInterval(function () { show(cur + 1); }, 7000); };
    $(".v-rv-prev", stage).addEventListener("click", function () { show(cur - 1); auto(); });
    $(".v-rv-next", stage).addEventListener("click", function () { show(cur + 1); auto(); });
    dots.forEach(function (d) { d.addEventListener("click", function () { show(+d.getAttribute("data-go")); auto(); }); });
    stage.addEventListener("mouseenter", function () { clearInterval(timer); });
    stage.addEventListener("mouseleave", auto);
    auto();
  }

  /* ---------------- tools tabs ---------------- */
  var tabs = $$(".v-tab");
  if (tabs.length) {
    var activate = function (t, focus) {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute("aria-selected", on ? "true" : "false"); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute("aria-controls")).hidden = !on; });
      if (focus) t.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { activate(t); });
      t.addEventListener("keydown", function (e) {
        var k = e.key, n = null;
        if (k === "ArrowDown" || k === "ArrowRight") n = tabs[(i + 1) % tabs.length];
        if (k === "ArrowUp" || k === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (k === "Home") n = tabs[0]; if (k === "End") n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); activate(n, true); }
      });
    });
  }

  /* ---------------- FAQ smooth accordion ---------------- */
  $$(".v-faq-i").forEach(function (d) {
    var s = $("summary", d), a = $(".v-faq-a", d), anim;
    s.addEventListener("click", function (e) {
      if (reduce || !a.animate) return;
      e.preventDefault();
      if (anim) anim.cancel();
      if (d.open) {
        var h = a.offsetHeight;
        anim = a.animate([{ height: h + "px", opacity: 1 }, { height: "0px", opacity: 0 }], { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" });
        d.classList.add("closing");
        anim.onfinish = function () { d.open = false; d.classList.remove("closing"); anim = null; };
      } else {
        d.open = true;
        var h2 = a.offsetHeight;
        anim = a.animate([{ height: "0px", opacity: 0 }, { height: h2 + "px", opacity: 1 }], { duration: 520, easing: "cubic-bezier(.16,1,.3,1)" });
        anim.onfinish = function () { anim = null; };
      }
    });
  });

  /* ---------------- 3D globe ---------------- */
  var gEl = $(".v-globe");
  if (!gEl) return;
  var canWebGL = (function () { try { var c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch (e) { return false; } })();
  var weak = (navigator.deviceMemory && navigator.deviceMemory < 2) || (navigator.connection && navigator.connection.saveData);
  if (!canWebGL || weak) { gEl.classList.add("static"); return; }

  var SCH = "AT BE BG HR CZ DK EE FI FR DE GR HU IS IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE CH".split(" ");
  var LON = [51.5, -0.13];
  var D2R = Math.PI / 180;
  var ang = function (a, b, c, d) { var p1 = a * D2R, p2 = c * D2R, dl = (d - b) * D2R; return Math.acos(Math.min(1, Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(dl))); };
  var routes = JSON.parse(gEl.getAttribute("data-routes") || "[]");

  // great-circle points with an altitude arc
  var arcPts = function (a, b, n) {
    var la1 = a[0] * D2R, lo1 = a[1] * D2R, la2 = b[0] * D2R, lo2 = b[1] * D2R;
    var d = ang(a[0], a[1], b[0], b[1]), h = Math.min(.32, .04 + d * .5), pts = [];
    for (var i = 0; i <= n; i++) {
      var f = i / n, A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
      var x = A * Math.cos(la1) * Math.cos(lo1) + B * Math.cos(la2) * Math.cos(lo2);
      var y = A * Math.cos(la1) * Math.sin(lo1) + B * Math.cos(la2) * Math.sin(lo2);
      var z = A * Math.sin(la1) + B * Math.sin(la2);
      pts.push([Math.atan2(z, Math.sqrt(x * x + y * y)) / D2R, Math.atan2(y, x) / D2R, h * Math.sin(Math.PI * f) + .004]);
    }
    return pts;
  };
  routes.forEach(function (r, i) { r.pts = arcPts(LON, [r.lat, r.lng], 72); r.dur = 2600 + ang(LON[0], LON[1], r.lat, r.lng) * 4200; r.off = i * 2300; });
  var CYCLE = routes.length * 2300;

  var start = function () {
    if (gEl.dataset.started) return; gEl.dataset.started = "1";
    var s = document.createElement("script");
    s.src = asset() + "v2/globe.gl.min.js"; s.async = true;
    s.onload = function () { Promise.all([fetch(asset() + "globe-countries.json").then(function (r) { return r.json(); }), fetch(asset() + "globe-world.json").then(function (r) { return r.json(); }).catch(function () { return { labels: [], borders: [] }; })]).then(function (a) { build(a[0], a[1]); }).catch(function () { gEl.classList.add("static"); }); };
    s.onerror = function () { gEl.classList.add("static"); };
    document.head.appendChild(s);
  };

  var build = function (countries, world) {
    var host = $(".v-globe-canvas", gEl), overlay = $(".v-globe-overlay", gEl), card = $(".v-gcard", gEl), panel = $(".v-schengen-panel");
    var small = window.innerWidth < 860;
    var feats = countries.map(function (c) {
      var polys = c.p.map(function (r) { var ring = []; for (var i = 0; i + 1 < r.length; i += 2) ring.push([r[i + 1] / 100, r[i] / 100]); if (ring.length) ring.push(ring[0]); return [ring]; });
      return { type: "Feature", properties: { c: c, sch: SCH.indexOf(c.i) > -1 }, geometry: { type: "MultiPolygon", coordinates: polys } };
    });
    var ringsOf = function (p) { return p.map(function (r) { var ring = []; for (var i = 0; i + 1 < r.length; i += 2) ring.push([r[i + 1] / 100, r[i] / 100]); if (ring.length) ring.push(ring[0]); return [ring]; }); };
    world.borders.forEach(function (b) { feats.push({ type: "Feature", properties: { w: b.i }, geometry: { type: "MultiPolygon", coordinates: ringsOf(b.p) } }); });
    var hover = null, pinned = null;
    var size = function () { return { w: host.clientWidth, h: host.clientHeight }; };
    var sz = size();
    var g = Globe({ animateIn: !reduce, rendererConfig: { antialias: true, alpha: true, powerPreference: "high-performance" } })(host)
      .width(sz.w).height(sz.h).backgroundColor("rgba(0,0,0,0)")
      .globeImageUrl(asset() + (small ? "v2/img/earth-day-2k.jpg" : "v2/img/earth-day.jpg"))
      .bumpImageUrl(asset() + "v2/img/earth-bump.jpg")
      .showAtmosphere(true).atmosphereColor("#6d9bff").atmosphereAltitude(.19)
      .showGraticules(true)
      .polygonsData(feats)
      .polygonAltitude(function (f) { return f === hover || f === pinned ? .028 : f.properties.w ? .004 : .007; })
      .polygonCapColor(function (f) { var on = f === hover || f === pinned; if (f.properties.w) return on ? "rgba(198,167,123,.34)" : "rgba(255,255,255,.015)"; return f.properties.sch ? (on ? "rgba(184,10,22,.62)" : "rgba(154,6,16,.2)") : (on ? "rgba(120,170,255,.45)" : "rgba(98,150,255,.10)"); })
      .polygonSideColor(function (f) { if (f.properties.w) return "rgba(255,255,255,.04)"; return f.properties.sch ? "rgba(154,6,16,.25)" : "rgba(98,150,255,.12)"; })
      .polygonStrokeColor(function (f) { if (f.properties.w) return "rgba(235,225,205,.32)"; return f.properties.sch ? "rgba(255,190,190,.42)" : "rgba(170,205,255,.35)"; })
      .polygonsTransitionDuration(300)
      .pathsData(routes).pathPoints("pts").pathPointLat(function (p) { return p[0]; }).pathPointLng(function (p) { return p[1]; }).pathPointAlt(function (p) { return p[2]; })
      .pathColor(function () { return ["rgba(198,167,123,.15)", "rgba(198,167,123,.75)"]; }).pathStroke(1.1).pathTransitionDuration(0)
      .ringsData([{ lat: LON[0], lng: LON[1], c: "198,167,123" }].concat(routes.map(function (r) { return { lat: r.lat, lng: r.lng, c: "255,120,130" }; })))
      .ringColor(function (d) { return function (t) { return "rgba(" + d.c + "," + (1 - t) * .9 + ")"; }; })
      .ringMaxRadius(function (d) { return d.c[0] === "1" ? 3.4 : 2.2; }).ringPropagationSpeed(1.4).ringRepeatPeriod(function (d) { return d.c[0] === "1" ? 1600 : 2600; })
      .onPolygonHover(function (f) { if (pinned) return; setHover(f); })
      .onPolygonClick(function (f, e) { clickCountry(f, e); })
      .onGlobeClick(function () { unpin(); });
    window.tvGlobe = g;
    var m = g.globeMaterial && g.globeMaterial(); if (m) { m.bumpScale = 3; m.shininess = 8; }
    var renderer = g.renderer && g.renderer(); if (renderer) renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
    var ctl = g.controls();
    ctl.autoRotate = !reduce; ctl.autoRotateSpeed = .42; ctl.enableZoom = false; ctl.minDistance = 113; ctl.maxDistance = 520; ctl.enableDamping = true; ctl.dampingFactor = .08;
    var HOME = { lat: 36, lng: 2, altitude: small ? 2.5 : 2.25 };
    g.pointOfView(HOME, 0);
    host.addEventListener("pointerdown", function () { ctl.enableZoom = true; ctl.autoRotate = false; resumeLater(); });
    host.addEventListener("pointerleave", function () { ctl.enableZoom = false; if (!pinned) setHover(null); });
    var rt; var resumeLater = function () { clearTimeout(rt); rt = setTimeout(function () { if (!pinned && !reduce) ctl.autoRotate = true; }, 6000); };
    // zoom buttons
    $$(".v-globe-ctrl button", gEl).forEach(function (b) {
      b.addEventListener("click", function () {
        var z = b.getAttribute("data-z"), p = g.pointOfView();
        if (z === "reset") { unpin(); g.pointOfView(HOME, 1200); return; }
        g.pointOfView({ lat: p.lat, lng: p.lng, altitude: Math.max(.14, Math.min(3.2, p.altitude * (z === "in" ? .62 : 1.6))) }, 600);
        ctl.autoRotate = false; resumeLater();
      });
    });

    // ---- overlay: destination labels + planes (DOM, projected every frame) ----
    var PLANE = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z"/></svg>';
    routes.forEach(function (r) {
      var lab = document.createElement("a"); lab.className = "v-gl v-gl-lab notranslate"; lab.href = pageUrl(r.s); lab.textContent = r.n; lab.tabIndex = -1;
      var pl = document.createElement("span"); pl.className = "v-gl v-gl-plane"; pl.innerHTML = PLANE;
      overlay.appendChild(lab); overlay.appendChild(pl); r.lab = lab; r.pl = pl;
    });
    overlay.style.pointerEvents = "none";
    var lonLab = document.createElement("span"); lonLab.className = "v-gl v-gl-lab notranslate"; lonLab.textContent = "London"; lonLab.style.pointerEvents = "none"; overlay.appendChild(lonLab);
    var visible = function (lat, lng, pov, alt) { return ang(lat, lng, pov.lat, pov.lng) < Math.acos(1 / (1 + pov.altitude)) - .03 + (alt || 0) * 1.4; };
    var place = function (el, lat, lng, alt, pov, extra) {
      var on = visible(lat, lng, pov, alt);
      if (!on) { el.style.opacity = "0"; return null; }
      var p = g.getScreenCoords(lat, lng, alt || 0);
      el.style.opacity = "1"; el.style.transform = "translate(" + p.x + "px," + p.y + "px) translate(-50%,-50%)" + (extra || "");
      return p;
    };
    // country names (every country) + UK cities, shown by zoom level without overlapping
    var FIX = { RU: [61, 96], CA: [59, -104], US: [39.5, -98.5], GL: [73, -40], FR: [46.6, 2.4], NO: [61.5, 9], CL: [-33, -71], ID: [-2, 117], MY: [3.8, 102], JP: [36.5, 138.5], NZ: [-42, 172.5], GR: [39.3, 22], HR: [45.3, 16], IT: [42.8, 12.6], GB: [54.45, -2.35] };
    var regionName = function () { var l = document.documentElement.lang || "en"; try { var dn = new Intl.DisplayNames([l, "en"], { type: "region" }); var EN = { CD: "DR Congo", CG: "Congo" }; return function (c) { if (/^en/.test(l) && EN[c]) return EN[c]; try { return dn.of(c) || c; } catch (e) { return c; } }; } catch (e) { return function (c) { return c; }; } };
    var GL = [], mk = function (cls, txt) { var el = document.createElement("span"); el.className = "v-gl " + cls; el.textContent = txt; el.style.opacity = "0"; overlay.appendChild(el); return el; };
    world.labels.forEach(function (r) { var ll = FIX[r[0]] || [r[1], r[2]]; GL.push({ el: mk("v-gl-c", r[0]), code: r[0], lat: ll[0], lng: ll[1], pr: r[0] === "GB" ? 1e5 : r[3], min: r[3] > 150 ? 9 : r[3] > 40 ? 2.3 : r[3] > 8 ? 1.45 : r[3] > 1.5 ? .95 : r[3] > .3 ? .55 : .3 }); });
    [["Birmingham", 52.49, -1.89, 1], ["Manchester", 53.48, -2.24, 1], ["Glasgow", 55.86, -4.25, 1], ["Edinburgh", 55.95, -3.19, 1], ["Cardiff", 51.48, -3.18, 1], ["Belfast", 54.6, -5.93, 1],
     ["Liverpool", 53.41, -2.99, 2], ["Leeds", 53.8, -1.55, 2], ["Newcastle", 54.98, -1.62, 2], ["Bristol", 51.45, -2.59, 2], ["Sheffield", 53.38, -1.47, 2], ["Nottingham", 52.95, -1.16, 2], ["Leicester", 52.64, -1.14, 2], ["Aberdeen", 57.15, -2.09, 2],
     ["Southampton", 50.91, -1.4, 3], ["Bradford", 53.8, -1.76, 3], ["Oxford", 51.75, -1.26, 3], ["Cambridge", 52.2, .12, 3], ["Brighton", 50.82, -.14, 3], ["Plymouth", 50.38, -4.14, 3], ["Inverness", 57.48, -4.22, 3]
    ].forEach(function (c) { GL.push({ el: mk("v-gl-city notranslate", c[0]), city: c[0], lat: c[1], lng: c[2], pr: 1e4 - c[3], min: [0, .78, .55, .36][c[3]] }); });
    var fixed = [lonLab].concat(routes.map(function (r) { return r.lab; }));
    var setNames = function () { var rn = regionName(); GL.forEach(function (g2) { g2.el.textContent = g2.city ? nm(g2.city) : rn(g2.code); g2.w = 0; }); };
    setNames();
    var lastLang = document.documentElement.lang;
    if ("MutationObserver" in window) new MutationObserver(function () { if (document.documentElement.lang !== lastLang) { lastLang = document.documentElement.lang; setTimeout(setNames, 60); } }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    var hb = gEl.getBoundingClientRect(), frame = 0;
    var layout = function (pov) {
      var boxes = [];
      fixed.forEach(function (el) { if (el.style.opacity === "0") return; var r = el.getBoundingClientRect(); boxes.push([r.left - hb.left - 4, r.top - hb.top - 2, r.right - hb.left + 4, r.bottom - hb.top + 2]); });
      var cands = [];
      GL.forEach(function (o) {
        if (pov.altitude > o.min || !visible(o.lat, o.lng, pov, -.05)) { o.el.style.opacity = "0"; return; }
        var p = g.getScreenCoords(o.lat, o.lng, .006);
        if (p.x < 0 || p.y < 0 || p.x > hb.width || p.y > hb.height) { o.el.style.opacity = "0"; return; }
        o.x = p.x; o.y = p.y; cands.push(o);
      });
      cands.sort(function (a, b) { return b.pr - a.pr; });
      cands.forEach(function (o) {
        if (!o.w) { o.w = o.el.offsetWidth || 60; o.h = o.el.offsetHeight || 14; }
        var dx = o.city ? 5 : -o.w / 2, b = [o.x + dx - 3, o.y - o.h / 2 - 2, o.x + dx + o.w + 3, o.y + o.h / 2 + 2];
        for (var i = 0; i < boxes.length; i++) { var q = boxes[i]; if (b[0] < q[2] && b[2] > q[0] && b[1] < q[3] && b[3] > q[1]) { o.el.style.opacity = "0"; return; } }
        boxes.push(b); o.el.style.opacity = "1";
        o.el.style.transform = "translate(" + o.x + "px," + o.y + "px) translate(" + (o.city ? "-4px" : "-50%") + ",-50%)";
      });
    };
    var t0 = performance.now(), running = true;
    var tick = function (now) {
      if (!running) return;
      var pov = g.pointOfView(), t = now - t0;
      place(lonLab, LON[0], LON[1], 0, pov);
      routes.forEach(function (r) {
        place(r.lab, r.lat, r.lng, 0, pov);
        var k = ((t - r.off) % CYCLE + CYCLE) % CYCLE, f = k / r.dur;
        if (reduce || f > 1) { r.pl.style.opacity = "0"; r.lab.classList.remove("on"); return; }
        var e = f < .5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2; // ease in-out
        var i = Math.min(r.pts.length - 2, Math.floor(e * (r.pts.length - 1))), a = r.pts[i], b = r.pts[i + 1];
        var pa = g.getScreenCoords(a[0], a[1], a[2]), pb = g.getScreenCoords(b[0], b[1], b[2]);
        var rot = Math.atan2(pb.y - pa.y, pb.x - pa.x) * 180 / Math.PI + 90;
        var p = place(r.pl, a[0], a[1], a[2], pov, " rotate(" + rot + "deg) scale(" + (.75 + Math.sin(Math.PI * e) * .45) + ")");
        if (p) r.pl.style.opacity = String(Math.min(1, Math.sin(Math.PI * Math.min(1, f * 1.02)) * 3));
        r.lab.classList.toggle("on", f > .82);
      });
      if (frame++ % 2 === 0) layout(pov);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // ---- country card + Schengen panel ----
    var UK = [["London", 51.5, -0.13], ["Manchester", 53.48, -2.24], ["Birmingham", 52.48, -1.9], ["Edinburgh", 55.95, -3.19]];
    var fmtKm = function (k) { return (Math.round(k / 10) * 10).toLocaleString("en-GB") + " km"; };
    var fmtN = function (n) { return n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : (n / 1e3).toFixed(n < 1e5 ? 1 : 0) + "k"; };
    var lastXY = { x: 0, y: 0 };
    gEl.addEventListener("pointermove", function (e) { var r = gEl.getBoundingClientRect(); lastXY = { x: e.clientX - r.left, y: e.clientY - r.top }; if (hover && !pinned) position(); });
    var schLabel = function () { var k = panel && $(".v-sp-k", panel); return k ? k.textContent : "Schengen Area"; };
    var worldHTML = function (code) {
      return '<button type="button" class="v-gc-x" aria-label="Close">×</button><p class="v-gc-k">' + esc(ui("g_world", "Country")) + '</p>' +
        '<div class="v-gc-h"><div><b>' + esc(regionName()(code)) + '</b></div></div><p class="v-gc-p">' + esc(ui("g_ask", "Planning a trip here? Ask us what you need.")) + '</p>' +
        '<div class="v-gc-foot"><a href="' + pageUrl("contact.html") + '">' + esc(ui("g_askbtn", "Free consultation")) + ' →</a></div>';
    };
    var cardHTML = function (c, sch) {
      var x = c.x || {}, h = [];
      h.push('<button type="button" class="v-gc-x" aria-label="Close">×</button>');
      h.push('<p class="v-gc-k">' + (sch ? '<span class="v-gc-sch">' + esc(schLabel()) + '</span>' : esc(ui("g_country", "Destination"))) + '</p>');
      h.push('<div class="v-gc-h"><img class="v-flag" src="' + asset() + 'v2/flags/' + c.i.toLowerCase() + '.svg" alt="" width="30" height="22"><div><b>' + esc(nm(c.n)) + '</b>' +
        (c.c ? '<small>' + esc(ui("g_capital", "Capital")) + ' · ' + esc(nm(c.c[0])) + '</small>' : '') + '</div></div>');
      var st = [];
      if (x.vis) st.push('<div><span>' + esc(ui("g_visitors", "Visitors / yr")) + '</span><strong>' + x.vis.toFixed(1) + 'M</strong></div>');
      if (x.app) st.push('<div><span>' + esc(ui("g_apps", "Applications")) + '</span><strong>' + fmtN(x.app) + '</strong></div>');
      if (x.ref) st.push('<div><span>' + esc(ui("g_refused", "Refused")) + '</span><strong>' + x.ref.toFixed(1) + '%</strong></div>');
      if (st.length) h.push('<div class="v-gc-stats">' + st.join("") + '</div>');
      if (x.hub) h.push('<ul class="v-gc-dist">' + UK.map(function (u) { return '<li><span>' + esc(nm(u[0])) + '</span><em dir="ltr">' + fmtKm(6371 * ang(u[1], u[2], x.hub[0], x.hub[1])) + '</em></li>'; }).join("") + '</ul>');
      if (x.ci && x.ci.length) h.push('<p class="v-gc-p"><b>' + esc(ui("g_cities", "Cities")) + ':</b> ' + x.ci.slice(0, 4).map(function (v) { return esc(nm(v)); }).join(" · ") + '</p>');
      if (x.si && x.si.length) h.push('<p class="v-gc-p"><b>' + esc(ui("g_sights", "Must-see")) + ':</b> ' + x.si.slice(0, 3).map(function (v) { return esc(nm(v)); }).join(" · ") + '</p>');
      h.push('<div class="v-gc-foot"><a href="' + pageUrl(c.s) + '">' + esc(ui("map", "View visa guide")) + ' →</a><small>' + esc(ui("g_src", "Sources: UN Tourism & European Commission (2024)")) + '</small></div>');
      return h.join("");
    };
    var position = function () {
      if (window.innerWidth <= 1100) { card.style.left = ""; card.style.top = ""; return; }
      var R = gEl.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight;
      var minX = Math.max(8, 12 - R.left), maxX = Math.min(R.width, window.innerWidth - R.left) - cw - 12;
      var minY = Math.max(8, 90 - R.top), maxY = Math.min(R.height, window.innerHeight - R.top) - ch - 12;
      var x = lastXY.x + 26, y = lastXY.y - ch / 2;
      if (x > maxX) x = lastXY.x - cw - 26;
      card.style.left = Math.max(minX, Math.min(maxX, x)) + "px"; card.style.top = Math.max(minY, Math.min(maxY, y)) + "px";
    };
    var showCard = function (f) {
      if (!f) { card.classList.remove("on"); card.hidden = true; if (panel) panel.classList.remove("on"); return; }
      card.innerHTML = f.properties.w ? worldHTML(f.properties.w) : cardHTML(f.properties.c, f.properties.sch); card.hidden = false; card.classList.add("on"); position();
      if (panel) { panel.hidden = !f.properties.sch; panel.classList.toggle("on", f.properties.sch); }
    };
    var setHover = function (f) {
      if (f === hover) return; hover = f;
      host.style.cursor = f ? "pointer" : "";
      if (!reduce) ctl.autoRotate = !f && !pinned;
      g.polygonsData(g.polygonsData()); showCard(f);
    };
    var touchUI = !fine;
    var clickCountry = function (f) {
      if (!f) return;
      if (touchUI && pinned !== f) { pinned = f; hover = f; card.classList.add("pinned"); g.polygonsData(g.polygonsData()); showCard(f); ctl.autoRotate = false; return; }
      location.href = pageUrl(f.properties.w ? "contact.html" : f.properties.c.s);
    };
    var unpin = function () { if (!pinned) return; pinned = null; card.classList.remove("pinned"); setHover(null); resumeLater(); };
    card.addEventListener("click", function (e) { if (e.target.closest(".v-gc-x")) { e.stopPropagation(); unpin(); } });

    // ---- lifecycle ----
    var ready = function () { gEl.classList.add("ready"); };
    setTimeout(ready, 900);
    var fit = function () { var s2 = size(); g.width(s2.w).height(s2.h); hb = gEl.getBoundingClientRect(); };
    window.addEventListener("resize", function () { clearTimeout(fit.t); fit.t = setTimeout(fit, 150); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) {
      var on = es[0].isIntersecting;
      if (on && !running) { running = true; g.resumeAnimation(); requestAnimationFrame(tick); }
      if (!on && running) { running = false; g.pauseAnimation(); }
    }).observe(gEl);
    document.addEventListener("tv:lang", function () { setNames(); if (hover) showCard(hover); });
  };

  if (document.readyState === "complete") setTimeout(start, 120);
  else window.addEventListener("load", function () { setTimeout(start, 120); });
})();
