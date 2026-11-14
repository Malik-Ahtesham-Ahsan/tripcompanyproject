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
  // Content is only hidden for revealing once this script runs ("js" class), so it stays visible if scripts fail.
  var revealEls = $$(".v-reveal, .v-intro-media, .v-steps-wrap, .v-cta");
  if ("IntersectionObserver" in window && !reduce) {
    document.documentElement.classList.add("js");
    // section headings: words rise in one after another
    $$(".v-sec .v-h2, .v-cta .v-h2").forEach(function (h) {
      var n = 0, walk = function (node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (c) {
          if (c.nodeType === 3) {
            var parts = c.textContent.split(/(\s+)/), frag = document.createDocumentFragment();
            parts.forEach(function (w) {
              if (!w) return;
              if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
              var sp = document.createElement("span"); sp.className = "v-w"; sp.style.setProperty("--wi", n++); sp.textContent = w; frag.appendChild(sp);
            });
            c.parentNode.replaceChild(frag, c);
          } else if (c.nodeType === 1 && !/^(BR|IMG|SVG)$/i.test(c.tagName)) walk(c);
        });
      };
      walk(h);
      // keep punctuation that follows an emphasised phrase on the same line (", not just the form")
      $$(".v-w", h).forEach(function (w) {
        var prev = w.previousSibling;
        if (prev && prev.nodeType === 1 && !prev.classList.contains("v-w") && /^[,.;:!?)»”’]/.test(w.textContent)) {
          var nw = document.createElement("span"); nw.className = "v-nw"; prev.parentNode.insertBefore(nw, prev); nw.appendChild(prev); nw.appendChild(w);
        }
      });
      h.classList.add("v-split"); revealEls.push(h);
    });
    // siblings reveal in sequence rather than all at once
    revealEls.forEach(function (el) {
      if (!el.classList.contains("v-reveal") || !el.parentNode) return;
      var sib = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains("v-reveal"); });
      el.style.transitionDelay = Math.min(sib.indexOf(el), 5) * 0.09 + "s";
    });
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { ro.observe(el); });
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
      var oth = $(".v-cp-other", mw); if (oth) oth.hidden = true;
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
    if (selEl) selEl.addEventListener("change", function () { if (selEl.value) { pick(selEl.value, true); if (mw.tvMapPick) mw.tvMapPick(selEl.value, true); } });

    /* ---- real world map (MapLibre GL + Natural Earth boundaries), loaded when the section comes near ---- */
    var other = $(".v-cp-other", mw), wm = $(".v-wmap", mw);
    var PAGES = { US: "usa-visa-from-uk.html", CA: "canada-visa-from-uk.html", TR: "turkey-visa-from-uk.html", AE: "dubai-visa-from-uk.html" };
    var regionName = function (code) { var l = document.documentElement.lang || "en"; try { var v = new Intl.DisplayNames([l, "en"], { type: "region" }).of(code); return (/^en/.test(l) && { CD: "DR Congo", CG: "Congo" }[code]) || v || code; } catch (e) { return code; } };
    var flagSrc = function (code) { return asset() + "v2/flags-all/" + code.toLowerCase() + ".svg"; };
    var pickOther = function (code) {
      if (!other) return;
      $$(".v-mc", mw).forEach(function (p) { p.classList.remove("on"); });
      empty.hidden = true; full.hidden = true; other.hidden = false;
      other.style.animation = "none"; void other.offsetWidth; other.style.animation = "";
      var f = $(".v-cp-flag", other); f.src = flagSrc(code); f.onerror = function () { f.style.visibility = "hidden"; }; f.style.visibility = "";
      var name = regionName(code), page = PAGES[code];
      $(".v-cp-k", other).textContent = ui("g_country", "Destination");
      $(".v-cp-name", other).textContent = name;
      $(".v-cp-txt", other).textContent = page ? ui("g_dest", "Explore TravelVista’s visa and travel services for {c}.").replace("{c}", name) : ui("g_ask", "Planning a trip here? Ask us what you need.");
      var go = $(".v-cp-go", other); go.href = pageUrl(page || "contact.html");
      $("span", go).textContent = page ? ui("g_evs", "Explore visa services") : ui("g_askbtn", "Free consultation");
      if (selEl) selEl.value = "";
    };
    var showSchengen = function () { $$(".v-mc", mw).forEach(function (p) { p.classList.remove("on"); }); empty.hidden = false; full.hidden = true; if (other) other.hidden = true; if (selEl) selEl.value = ""; };
    var hasGL = (function () { try { var c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch (e) { return false; } })();
    var mapStart = function () {
      if (!wm || !hasGL || mw.dataset.map) return; mw.dataset.map = "1";
      var css = document.createElement("link"); css.rel = "stylesheet"; css.href = asset() + "v2/map/maplibre-gl.css"; document.head.appendChild(css);
      var sc = document.createElement("script"); sc.src = asset() + "v2/map/maplibre-gl.js"; sc.async = true;
      sc.onload = function () { fetch(asset() + "v2/map/world.json").then(function (r) { return r.json(); }).then(mapBuild).catch(function () {}); };
      document.head.appendChild(sc);
    };
    var mapBuild = function (W) {
      var ml = window.maplibregl; if (!ml) return;
      var D2R = Math.PI / 180, SCHS = Object.keys(C);
      // bounding box of each country's largest landmass (so Russia, the USA or Fiji frame sensibly)
      var meta = {};
      W.countries.features.forEach(function (f) {
        var big = null, ba = -1;
        (f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates).forEach(function (p) {
          var r = p[0], a = 0; for (var i = 0; i < r.length - 1; i++) a += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1]; a = Math.abs(a);
          if (a > ba) { ba = a; big = r; }
        });
        var b = [180, 90, -180, -90]; big.forEach(function (q) { b[0] = Math.min(b[0], q[0]); b[1] = Math.min(b[1], q[1]); b[2] = Math.max(b[2], q[0]); b[3] = Math.max(b[3], q[1]); });
        meta[f.properties.i] = { b: b, lx: f.properties.lx, ly: f.properties.ly, a: f.properties.a };
      });
      var LBL_FIX = { FJ: [178.2, -17.8], KI: [-157.4, 1.9], RU: [96, 61], CA: [-104, 59], US: [-98.5, 39.5], GL: [-40, 73], FR: [2.4, 46.6], NO: [9, 61.5], GB: [-2.3, 53.6] };
      // graticule
      var grat = []; for (var x = -180; x <= 180; x += 30) { var ln = []; for (var y = -70; y <= 80; y += 5) ln.push([x, y]); grat.push({ type: "Feature", geometry: { type: "LineString", coordinates: ln } }); }
      for (var y2 = -60; y2 <= 75; y2 += 30) { var lt = []; for (var x2 = -180; x2 <= 180; x2 += 5) lt.push([x2, y2]); grat.push({ type: "Feature", geometry: { type: "LineString", coordinates: lt } }); }
      // routes from London along great circles
      var gEl0 = $(".v-globe"), routes = JSON.parse((gEl0 && gEl0.getAttribute("data-routes")) || "[]"), LON = [-0.13, 51.5];
      var gc = function (a, b, n) {
        var la1 = a[1] * D2R, lo1 = a[0] * D2R, la2 = b[1] * D2R, lo2 = b[0] * D2R, out = [];
        var d = Math.acos(Math.sin(la1) * Math.sin(la2) + Math.cos(la1) * Math.cos(la2) * Math.cos(lo2 - lo1));
        for (var i = 0; i <= n; i++) {
          var f = i / n, A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
          var X = A * Math.cos(la1) * Math.cos(lo1) + B * Math.cos(la2) * Math.cos(lo2), Y = A * Math.cos(la1) * Math.sin(lo1) + B * Math.cos(la2) * Math.sin(lo2), Z = A * Math.sin(la1) + B * Math.sin(la2);
          out.push([Math.atan2(Y, X) / D2R, Math.atan2(Z, Math.sqrt(X * X + Y * Y)) / D2R]);
        }
        // short hops get a gentle bow so every route reads as a flight arc
        if (d < .35) { var bow = .18 * d / D2R; out = out.map(function (q, i) { return [q[0], q[1] + Math.sin(Math.PI * i / n) * bow]; }); }
        return out;
      };
      routes.forEach(function (r) { r.line = gc(LON, [r.lng, r.lat], 80); r.dur = 3200 + Math.hypot(r.lng - LON[0], r.lat - LON[1]) * 55; });
      var FC = function (fs) { return { type: "FeatureCollection", features: fs }; };
      var routeFC = FC(routes.map(function (r) { return { type: "Feature", properties: { s: r.s }, geometry: { type: "LineString", coordinates: r.line } }; }));

      wm.hidden = false; $(".v-map", mw).classList.add("v-map-live");
      var small = window.innerWidth < 760;
      var map = new ml.Map({
        container: $(".v-wmap-canvas", wm), style: { version: 8, sources: {}, layers: [] },
        center: [10, 30], zoom: 1, minZoom: 0.4, maxZoom: 6.2, renderWorldCopies: false, dragRotate: false, pitchWithRotate: false, touchPitch: false,
        cooperativeGestures: true, attributionControl: { compact: true, customAttribution: "Boundaries: Natural Earth" },
        fadeDuration: 0,
        locale: {
          "CooperativeGesturesHandler.WindowsHelpText": ui("m_ctrl", "Use Ctrl + scroll to zoom the map"),
          "CooperativeGesturesHandler.MacHelpText": ui("m_cmd", "Use ⌘ + scroll to zoom the map"),
          "CooperativeGesturesHandler.MobileHelpText": ui("m_two", "Use two fingers to move the map")
        }
      });
      map.touchZoomRotate.disableRotation();
      mw.tvMap = map;
      var worldView = function (anim) { map.fitBounds([[-168, -56], [179, 76]], { padding: small ? 8 : 20, animate: anim !== false && !reduce, duration: 1400, essential: true }); };
      map.on("load", function () {
        map.addSource("land", { type: "geojson", data: W.countries, promoteId: "i" });
        map.addSource("sch", { type: "geojson", data: W.schengen, promoteId: "i" });
        map.addSource("grat", { type: "geojson", data: FC(grat) });
        map.addSource("routes", { type: "geojson", data: routeFC });
        map.addSource("fa0", { type: "geojson", data: FC([]), lineMetrics: true });
        map.addSource("fa1", { type: "geojson", data: FC([]), lineMetrics: true });
        var st = function (k, on, off) { return ["case", ["boolean", ["feature-state", k], false], on, off]; };
        map.addLayer({ id: "grat", type: "line", source: "grat", paint: { "line-color": "rgba(198,167,123,.08)", "line-width": .6 } });
        map.addLayer({ id: "coast", type: "line", source: "land", paint: { "line-color": "rgba(110,150,225,.22)", "line-width": ["interpolate", ["linear"], ["zoom"], 0, 2, 5, 5], "line-blur": ["interpolate", ["linear"], ["zoom"], 0, 2, 5, 5] } });
        map.addLayer({ id: "land", type: "fill", source: "land", paint: { "fill-color": st("sel", "#2b3550", st("hover", "#26385a", "#1a2b45")), "fill-antialias": true } });
        map.addLayer({ id: "sch", type: "fill", source: "sch", paint: { "fill-color": "#9A0610", "fill-opacity": st("sel", .5, st("hover", .36, .2)), "fill-opacity-transition": { duration: 700 } } });
        map.addLayer({ id: "borders", type: "line", source: "land", paint: { "line-color": "rgba(198,167,123,.42)", "line-width": ["interpolate", ["linear"], ["zoom"], 0, .35, 3, .6, 6, 1.1] } });
        map.addLayer({ id: "sch-line", type: "line", source: "sch", paint: { "line-color": "rgba(226,104,112,.55)", "line-width": ["interpolate", ["linear"], ["zoom"], 0, .4, 5, 1] } });
        map.addLayer({ id: "focus-glow", type: "line", source: "land", filter: ["in", ["get", "i"], ["literal", []]], paint: { "line-color": "#F3E3C6", "line-width": 6, "line-blur": 6, "line-opacity": .45 } });
        map.addLayer({ id: "focus-line", type: "line", source: "land", filter: ["in", ["get", "i"], ["literal", []]], paint: { "line-color": "#F3E3C6", "line-width": 1.3 } });
        map.addLayer({ id: "routes", type: "line", source: "routes", layout: { "line-cap": "round" }, paint: { "line-color": "rgba(198,167,123,.32)", "line-width": 1, "line-dasharray": [1.5, 2.5], "line-opacity-transition": { duration: 500 } } });
        ["fa0", "fa1"].forEach(function (id) { map.addLayer({ id: id, type: "line", source: id, layout: { "line-cap": "round" }, paint: { "line-width": 2.2, "line-gradient": ["interpolate", ["linear"], ["line-progress"], 0, "rgba(0,0,0,0)", 1, "rgba(0,0,0,0)"] } }); });
        worldView(false);
        map.setMinZoom(Math.max(0, map.getZoom() - .15));
        setTimeout(function () { wm.classList.add("ready"); }, 300);
        setup();
      });

      var setup = function () {
        var labels = $(".v-wmap-labels", wm), tip = $(".v-wmap-tip", wm), hoverId = null, selId = null, schOn = false, routesOn = true;
        var setFocus = function () { var ids = [hoverId, selId].filter(Boolean); map.setFilter("focus-glow", ["in", ["get", "i"], ["literal", ids]]); map.setFilter("focus-line", ["in", ["get", "i"], ["literal", ids]]); };
        var fs = function (id, k, v) { if (!id) return; map.setFeatureState({ source: "land", id: id }, (function (o) { o[k] = v; return o; })({})); if (SCHS.indexOf(id) > -1) map.setFeatureState({ source: "sch", id: id }, (function (o) { o[k] = v; return o; })({})); };
        // hover: highlight, glow and name
        map.on("mousemove", "land", function (e) {
          var f = e.features && e.features[0]; if (!f) return;
          var id = f.properties.i;
          if (id !== hoverId) { fs(hoverId, "hover", false); hoverId = id; fs(id, "hover", true); setFocus(); }
          map.getCanvas().style.cursor = "pointer";
          tip.hidden = false; tip.textContent = regionName(id);
          tip.style.transform = "translate(" + (e.point.x + 14) + "px," + (e.point.y - 12) + "px)";
        });
        map.on("movestart", function () { tip.hidden = true; });
        map.on("mouseleave", "land", function () { fs(hoverId, "hover", false); hoverId = null; setFocus(); tip.hidden = true; map.getCanvas().style.cursor = ""; });
        // select (click or tap)
        var select = function (id, fly) {
          if (selId) fs(selId, "sel", false);
          selId = id; fs(id, "sel", true); setFocus(); setSch(false, true);
          if (C[id]) pick(id); else pickOther(id);
          var m = meta[id];
          if (fly && m) {
            var b = m.b, wide = Math.max(b[2] - b[0], (b[3] - b[1]) * 1.4);
            map.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: small ? 30 : 70, maxZoom: wide < 3 ? 5.6 : wide < 12 ? 4.6 : 3.4, duration: reduce ? 0 : 1500, essential: true });
          }
        };
        mw.tvMapPick = function (id, fly) { select(id, fly); };
        map.on("click", "land", function (e) { var f = e.features && e.features[0]; if (f) select(f.properties.i, true); });
        // Schengen region view
        var schBtn = $(".v-wmap-sch", wm);
        var setSch = function (on, quiet) {
          schOn = on; schBtn.setAttribute("aria-pressed", on ? "true" : "false"); wm.classList.toggle("sch-on", on);
          map.setPaintProperty("sch", "fill-opacity", on ? st2(.62, .5, .44) : st2(.5, .36, .2));
          if (on && !quiet) {
            if (selId) { fs(selId, "sel", false); selId = null; setFocus(); }
            showSchengen(); map.fitBounds([[-25, 34], [33, 71.5]], { padding: small ? 16 : 40, duration: reduce ? 0 : 1600, essential: true });
          }
        };
        var st2 = function (a, b, c) { return ["case", ["boolean", ["feature-state", "sel"], false], a, ["case", ["boolean", ["feature-state", "hover"], false], b, c]]; };
        schBtn.addEventListener("click", function () { setSch(!schOn); });
        // controls
        $$(".v-wmap-ctrl button", wm).forEach(function (btn) {
          btn.addEventListener("click", function () {
            var m = btn.getAttribute("data-m"), o = { duration: reduce ? 0 : 700, essential: true };
            if (m === "in") map.zoomIn(o);
            else if (m === "out") map.zoomOut(o);
            else if (m === "eu") map.fitBounds([[-13, 34.5], [36, 63]], { padding: 20, duration: reduce ? 0 : 1600, essential: true });
            else if (m === "reset") { if (selId) { fs(selId, "sel", false); selId = null; setFocus(); } setSch(false, true); showSchengen(); worldView(); }
            else if (m === "routes") { routesOn = !routesOn; btn.setAttribute("aria-pressed", routesOn ? "true" : "false"); btn.classList.toggle("off", !routesOn);
              ["routes", "fa0", "fa1"].forEach(function (id) { map.setLayoutProperty(id, "visibility", routesOn ? "visible" : "none"); });
              wm.classList.toggle("no-routes", !routesOn); }
          });
        });

        // destination markers (glowing dots that pulse gently) + labels drawn in an overlay with collision handling
        var dests = [{ n: "London", lng: LON[0], lat: LON[1], hub: true, c: "GB" }].concat(routes.map(function (r) { return { n: r.n, lng: r.lng, lat: r.lat, c: r.c, s: r.s }; }));
        dests.forEach(function (d) {
          var el = document.createElement("button"); el.type = "button"; el.className = "v-wm-dot" + (d.hub ? " hub" : ""); el.setAttribute("aria-label", d.n);
          var go = function () { if (d.c && !d.hub) select(d.c, true); }, down = null, tapAt = 0;
          // touch screens: the map swallows synthetic clicks, so recognise a tap directly
          el.addEventListener("pointerdown", function (e) { down = { x: e.clientX, y: e.clientY, t: Date.now() }; });
          el.addEventListener("pointerup", function (e) { if (down && Math.abs(e.clientX - down.x) < 10 && Math.abs(e.clientY - down.y) < 10 && Date.now() - down.t < 600) { tapAt = Date.now(); e.stopPropagation(); go(); } down = null; });
          el.addEventListener("click", function (e) { e.stopPropagation(); if (Date.now() - tapAt > 500) go(); });
          d.mk = new ml.Marker({ element: el }).setLngLat([d.lng, d.lat]).addTo(map); el.setAttribute("aria-label", d.n); d.dot = el;
          d.lab = document.createElement("span"); d.lab.className = "v-wm-lab notranslate" + (d.hub ? " hub" : ""); labels.appendChild(d.lab);
        });
        var CL = W.countries.features.map(function (f) { var i = f.properties.i, m = meta[i], fx = LBL_FIX[i]; return { i: i, a: m.a, lng: fx ? fx[0] : m.lx, lat: fx ? fx[1] : m.ly, el: (function () { var e = document.createElement("span"); e.className = "v-wm-c"; labels.appendChild(e); return e; })() }; })
          .sort(function (a, b) { return b.a - a.a; });
        var names = function () { CL.forEach(function (c) { c.el.textContent = regionName(c.i); c.w = 0; }); dests.forEach(function (d) { d.lab.textContent = nm(d.n); d.w = 0; if (d.dot) d.dot.setAttribute("aria-label", nm(d.n)); }); };
        names();
        var lastLang = document.documentElement.lang;
        if ("MutationObserver" in window) new MutationObserver(function () { if (document.documentElement.lang !== lastLang) { lastLang = document.documentElement.lang; setTimeout(function () { names(); place(); if (selId && !C[selId]) pickOther(selId); }, 60); } }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
        var hide = function (el) { if (el.style.opacity !== "0") el.style.opacity = "0"; };
        var place = function () {
          var z = map.getZoom(), cw = wm.clientWidth, ch = wm.clientHeight, boxes = [];
          // keep clear of the controls, Schengen chip and country picker
          $$(".v-wmap-ctrl, .v-wmap-sch, .v-map-pick, .maplibregl-ctrl-bottom-right", mw).forEach(function (el) { var r = el.getBoundingClientRect(), w0 = wm.getBoundingClientRect(); boxes.push([r.left - w0.left - 6, r.top - w0.top - 6, r.right - w0.left + 6, r.bottom - w0.top + 6]); });
          var fits = function (b) { if (b[0] < 6 || b[1] < 6 || b[2] > cw - 6 || b[3] > ch - 6) return false; for (var k = 0; k < boxes.length; k++) { var q = boxes[k]; if (b[0] < q[2] && b[2] > q[0] && b[1] < q[3] && b[3] > q[1]) return false; } return true; };
          dests.forEach(function (d) {
            var p = map.project([d.lng, d.lat]); if (!d.w) { d.w = d.lab.offsetWidth || 60; d.h = d.lab.offsetHeight || 18; }
            var b = [p.x + 9, p.y - d.h / 2, p.x + 9 + d.w, p.y + d.h / 2];
            if (!fits(b)) { b = [p.x - 9 - d.w, p.y - d.h / 2, p.x - 9, p.y + d.h / 2]; if (!fits(b)) { hide(d.lab); return; } }
            boxes.push([b[0] - 3, b[1] - 2, b[2] + 3, b[3] + 2]); boxes.push([p.x - 7, p.y - 7, p.x + 7, p.y + 7]);
            d.lab.style.opacity = "1"; d.lab.style.transform = "translate(" + b[0] + "px," + b[1] + "px)";
          });
          var minA = z < 1.3 ? 120 : z < 2 ? 25 : z < 2.8 ? 4 : z < 3.6 ? .8 : z < 4.5 ? .12 : 0;
          CL.forEach(function (c) {
            if (c.a < minA) { hide(c.el); return; }
            var p = map.project([c.lng, c.lat]); if (!c.w) { c.w = c.el.offsetWidth || 50; c.h = c.el.offsetHeight || 12; }
            var b = [p.x - c.w / 2 - 2, p.y - c.h / 2 - 1, p.x + c.w / 2 + 2, p.y + c.h / 2 + 1];
            if (!fits(b)) { hide(c.el); return; }
            boxes.push(b); c.el.style.opacity = "1"; c.el.style.transform = "translate(" + (p.x - c.w / 2) + "px," + (p.y - c.h / 2) + "px)";
          });
        };
        map.on("move", place); map.on("resize", function () { CL.forEach(function (c) { c.w = 0; }); place(); }); setTimeout(place, 400);

        // flights: at most two at once, a crimson-to-champagne trail with a small aircraft at its head
        var planes = [0, 1].map(function () { var el = document.createElement("div"); el.className = "v-wm-plane"; el.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z"/></svg>'; return new ml.Marker({ element: el }).setLngLat(LON); });
        var slots = [null, null], qi = 0, nextAt = 0, visibleNow = false, raf = 0;
        var grad = function (tail, head, fade) {
          var a = Math.max(0, tail), h = Math.max(a + .002, Math.min(1, head)), m = a + (h - a) * .6;
          var stops = ["interpolate", ["linear"], ["line-progress"], 0, "rgba(154,6,16,0)"];
          if (a > 0) stops.push(a, "rgba(154,6,16,0)");
          stops.push(m, "rgba(200,52,64," + (.55 * fade) + ")", h, "rgba(243,227,198," + fade + ")");
          if (h < .999) stops.push(Math.min(1, h + .001), "rgba(243,227,198,0)");
          if (stops[stops.length - 2] < 1) stops.push(1, "rgba(243,227,198,0)");
          return stops;
        };
        var frame = function (now) {
          raf = 0; if (!visibleNow || !routesOn || reduce) return;
          for (var k = 0; k < 2; k++) {
            var s = slots[k];
            if (!s && k < (small ? 1 : 2) && now > nextAt) {
              var r = routes[qi++ % routes.length];
              if (!slots.some(function (x) { return x && x.r === r; })) { s = slots[k] = { r: r, t0: now }; map.getSource("fa" + k).setData(FC([{ type: "Feature", geometry: { type: "LineString", coordinates: r.line } }])); planes[k].addTo(map); nextAt = now + r.dur * .6 + 500; }
            }
            if (!s) continue;
            var f = (now - s.t0) / s.r.dur, e = Math.min(1, f), e2 = e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
            var fade = f > 1 ? Math.max(0, 1 - (f - 1) * s.r.dur / 900) : 1;
            if (fade <= 0) { slots[k] = null; planes[k].remove(); map.setPaintProperty("fa" + k, "line-gradient", grad(0, .01, 0)); continue; }
            map.setPaintProperty("fa" + k, "line-gradient", grad(e2 - .45, e2, fade));
            var L = s.r.line, idx = Math.min(L.length - 1, Math.max(1, Math.round(e2 * (L.length - 1))));
            var pa = map.project(L[idx - 1]), pb = map.project(L[idx]);
            planes[k].setLngLat(L[idx]);
            var pe = planes[k].getElement(); pe.style.opacity = f > 1 ? "0" : String(Math.min(1, Math.sin(Math.PI * e) * 4));
            pe.firstChild.style.transform = "rotate(" + (Math.atan2(pb.y - pa.y, pb.x - pa.x) * 180 / Math.PI + 90) + "deg)";
          }
          raf = requestAnimationFrame(frame);
        };
        var kick = function () { if (!raf && visibleNow && routesOn && !reduce) raf = requestAnimationFrame(frame); };
        $$('.v-wmap-ctrl [data-m="routes"]', wm).forEach(function (b) { b.addEventListener("click", function () { if (!routesOn) planes.forEach(function (p) { p.remove(); }); slots = [null, null]; kick(); }); });
        if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visibleNow = es[0].isIntersecting && !document.hidden; kick(); }, { threshold: .1 }).observe(wm);
        else { visibleNow = true; kick(); }
        document.addEventListener("visibilitychange", function () { visibleNow = !document.hidden && wm.getBoundingClientRect().top < window.innerHeight; kick(); });
      };
    };
    if (wm) {
      if ("IntersectionObserver" in window) { var mio = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { mio.disconnect(); mapStart(); } }, { rootMargin: "700px 0px" }); mio.observe(mw); }
      else mapStart();
    }
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
  // A globe.gl Earth with day/night lighting, flight routes from London drawn as glowing trails,
  // collision-aware labels, smooth zoom and camera flights to a selected destination.
  var gEl = $(".v-globe");
  if (!gEl) return;
  var canWebGL = (function () { try { var c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch (e) { return false; } })();
  var weak = (navigator.deviceMemory && navigator.deviceMemory < 2) || (navigator.connection && navigator.connection.saveData);
  if (!canWebGL || weak) { gEl.classList.add("static"); return; }

  var SCH = "AT BE BG HR CZ DK EE FI FR DE GR HU IS IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE CH".split(" ");
  var LON = [51.5, -0.13];
  var D2R = Math.PI / 180;
  var ang = function (a, b, c, d) { var p1 = a * D2R, p2 = c * D2R, dl = (d - b) * D2R; return Math.acos(Math.max(-1, Math.min(1, Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(dl)))); };
  var routes = JSON.parse(gEl.getAttribute("data-routes") || "[]");
  var HUB = { n: "London", s: "contact.html", lat: LON[0], lng: LON[1], c: "GB", hub: true };
  var dests = [HUB].concat(routes);

  // great-circle points lifted into a gentle arc (follows the Earth's curvature)
  var arcPts = function (a, b, n) {
    var la1 = a[0] * D2R, lo1 = a[1] * D2R, la2 = b[0] * D2R, lo2 = b[1] * D2R;
    var d = ang(a[0], a[1], b[0], b[1]), h = Math.min(.26, .03 + d * .32), pts = [];
    for (var i = 0; i <= n; i++) {
      var f = i / n, A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
      var x = A * Math.cos(la1) * Math.cos(lo1) + B * Math.cos(la2) * Math.cos(lo2);
      var y = A * Math.cos(la1) * Math.sin(lo1) + B * Math.cos(la2) * Math.sin(lo2);
      var z = A * Math.sin(la1) + B * Math.sin(la2);
      pts.push([Math.atan2(z, Math.sqrt(x * x + y * y)) / D2R, Math.atan2(y, x) / D2R, h * Math.sin(Math.PI * f) + .003]);
    }
    return pts;
  };
  routes.forEach(function (r) { r.d = ang(LON[0], LON[1], r.lat, r.lng); r.pts = arcPts(LON, [r.lat, r.lng], 96); r.dur = 3400 + r.d * 5200; });

  var start = function () {
    if (gEl.dataset.started) return; gEl.dataset.started = "1";
    var s = document.createElement("script");
    s.src = asset() + "v2/globe.gl.min.js"; s.async = true;
    s.onload = function () {
      Promise.all([fetch(asset() + "globe-countries.json").then(function (r) { return r.json(); }),
        fetch(asset() + "globe-world.json").then(function (r) { return r.json(); }).catch(function () { return { labels: [], borders: [] }; })])
        .then(function (a) { build(a[0], a[1]); }).catch(function () { gEl.classList.add("static"); });
    };
    s.onerror = function () { gEl.classList.add("static"); };
    document.head.appendChild(s);
  };

  var build = function (countries, world) {
    var host = $(".v-globe-canvas", gEl), overlay = $(".v-globe-overlay", gEl), card = $(".v-gcard", gEl), panel = $(".v-schengen-panel");
    var heroCopy = $(".v-hero-copy"), hero = gEl.closest(".v-hero");
    var small = window.innerWidth < 860;
    var lite = small || (navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
    // camera limits (altitude = distance above the surface in Earth radii)
    var ALT_MIN = small ? 1.3 : 1.12, ALT_MAX = small ? 3.6 : 3.4;
    var HOME = { lat: 34, lng: 4, altitude: small ? 2.2 : 2.3 };

    var ringsOf = function (p) { return p.map(function (r) { var ring = []; for (var i = 0; i + 1 < r.length; i += 2) ring.push([r[i + 1] / 100, r[i] / 100]); if (ring.length) ring.push(ring[0]); return [ring]; }); };
    var feats = countries.map(function (c) { return { type: "Feature", properties: { c: c, code: c.i, sch: SCH.indexOf(c.i) > -1 }, geometry: { type: "MultiPolygon", coordinates: ringsOf(c.p) } }; });
    world.borders.forEach(function (b) { feats.push({ type: "Feature", properties: { w: b.i, code: b.i }, geometry: { type: "MultiPolygon", coordinates: ringsOf(b.p) } }); });
    var byCode = {}; feats.forEach(function (f) { byCode[f.properties.code] = f; });

    var hover = null, pinned = null, lit = null, pointerIn = false; // lit: country lit by hovering/selecting a destination
    var on = function (f) { return f && (f === hover || f === pinned || f === lit); };
    var size = function () { return { w: host.clientWidth, h: host.clientHeight }; };
    var sz = size();
    var g = Globe({ animateIn: !reduce, waitForGlobeReady: true, rendererConfig: { antialias: !lite, alpha: true, powerPreference: "high-performance" } })(host)
      .width(sz.w).height(sz.h).backgroundColor("rgba(0,0,0,0)")
      .globeImageUrl(asset() + (lite ? "v2/img/earth-day-2k.jpg" : "v2/img/earth-day.jpg"))
      .bumpImageUrl(lite ? null : asset() + "v2/img/earth-bump.jpg")
      .showAtmosphere(true).atmosphereColor("#6f9cf2").atmosphereAltitude(.2)
      .showGraticules(!small)
      .polygonsData(feats)
      .polygonAltitude(function (f) { return on(f) ? .022 : f.properties.w ? .003 : .006; })
      .polygonCapColor(function (f) { var o = on(f); if (f.properties.w) return o ? "rgba(214,182,132,.34)" : "rgba(255,255,255,.012)"; return f.properties.sch ? (o ? "rgba(176,14,26,.55)" : "rgba(154,6,16,.17)") : (o ? "rgba(214,182,132,.36)" : "rgba(120,160,230,.08)"); })
      .polygonSideColor(function (f) { return on(f) ? "rgba(214,182,132,.18)" : "rgba(255,255,255,.03)"; })
      .polygonStrokeColor(function (f) { if (on(f)) return "rgba(255,236,205,.95)"; if (f.properties.w) return "rgba(235,225,205,.26)"; return f.properties.sch ? "rgba(255,196,196,.4)" : "rgba(200,215,240,.32)"; })
      .polygonsTransitionDuration(350)
      // faint static route lines; the bright moving trail is drawn on top in the overlay
      .pathsData([]).pathPoints("pts").pathPointLat(function (p) { return p[0]; }).pathPointLng(function (p) { return p[1]; }).pathPointAlt(function (p) { return p[2]; })
      .pathColor(function () { return ["rgba(198,167,123,.10)", "rgba(198,167,123,.38)"]; }).pathStroke(.7).pathTransitionDuration(reduce ? 0 : 2200)
      .ringsData(dests.map(function (d) { return { lat: d.lat, lng: d.lng, hub: !!d.hub }; }))
      .ringColor(function (d) { var c = d.hub ? "214,182,132" : "214,58,70"; return function (t) { return "rgba(" + c + "," + (1 - t) * .75 + ")"; }; })
      .ringMaxRadius(function (d) { return d.hub ? 2.6 : 1.8; }).ringPropagationSpeed(1.1).ringRepeatPeriod(function (d) { return d.hub ? 2200 : 3200; })
      .onPolygonHover(function (f) { if (!pinned) setHover(pointerIn ? f : null); })
      .onPolygonClick(function (f) { selectCountry(f); })
      .onGlobeClick(function () { unpin(); });
    window.tvGlobe = g;
    var renderer = g.renderer(), cam = g.camera(), ctl = g.controls();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.75));
    renderer.domElement.style.touchAction = "pan-y"; // vertical swipes still scroll the page on phones
    ctl.enableDamping = true; ctl.dampingFactor = .07; ctl.rotateSpeed = .45; ctl.zoomSpeed = .6; ctl.enablePan = false;
    ctl.minDistance = 100 * (1 + ALT_MIN); ctl.maxDistance = 100 * (1 + ALT_MAX);
    ctl.enableZoom = false; ctl.autoRotate = false; ctl.autoRotateSpeed = 0;

    // ---- lighting: soft sun from the upper left, gentle night side with city lights ----
    var lights = (g.lights && g.lights()) || [], sun = null, amb = null;
    lights.forEach(function (l) { if (l.isDirectionalLight) sun = l; if (l.isAmbientLight) amb = l; });
    if (amb) amb.intensity = lite ? 1.5 : 1.15;
    if (sun) sun.intensity = lite ? 1.8 : 2.35;
    var placeSun = function () {
      if (!sun) return;
      var e = cam.matrixWorld.elements, d = cam.position.length();
      sun.position.set(cam.position.x - e[0] * d * .75 + e[4] * d * .45, cam.position.y - e[1] * d * .75 + e[5] * d * .45, cam.position.z - e[2] * d * .75 + e[6] * d * .45);
    };
    var enhance = function () {
      var m = g.globeMaterial();
      if (!m || !m.map || !m.map.image) { setTimeout(enhance, 250); return; }
      var Tex = m.map.constructor, loadTex = function (url, cb) { var im = new Image(); im.crossOrigin = "anonymous"; im.onload = function () { var t = new Tex(im); t.colorSpace = m.map.colorSpace; t.anisotropy = m.map.anisotropy; t.needsUpdate = true; cb(t); }; im.src = url; };
      m.shininess = 10;
      if (lite) return;
      loadTex(asset() + "v2/img/earth-water.jpg", function (t) { m.specularMap = t; if (m.specular) m.specular.setHex(0x2c3d58); m.shininess = 22; m.needsUpdate = true; });
      loadTex(asset() + "v2/img/earth-night.jpg", function (t) {
        m.onBeforeCompile = function (sh) {
          sh.uniforms.tvNight = { value: t };
          sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform sampler2D tvNight;")
            .replace("#include <lights_fragment_end>", "#include <lights_fragment_end>\n#if NUM_DIR_LIGHTS > 0 && defined( USE_MAP )\n  float tvNd = dot( normal, directionalLights[ 0 ].direction );\n  float tvK = smoothstep( 0.10, -0.30, tvNd );\n  totalEmissiveRadiance += texture2D( tvNight, vMapUv ).rgb * tvK * vec3( 1.0, .80, .52 ) * 1.1;\n  reflectedLight.indirectDiffuse *= mix( 1.0, .55, tvK );\n#endif");
        };
        m.needsUpdate = true;
      });
    };
    enhance();
    // graticules: faint champagne lines
    setTimeout(function () { g.scene().traverse(function (o) { if (o.type === "LineSegments" && o.material && o.material.color && o.material.color.getHexString() === "d3d3d3") { o.material.color.setHex(0xc6a77b); o.material.opacity = .06; } }); }, 1200);

    // ---- camera: smooth zoom, flights, idle rotation ----
    var interactAt = 0, dragging = false, flying = null, zTarget = null, spinOn = !reduce;
    var clampAlt = function (a) { return Math.max(ALT_MIN, Math.min(ALT_MAX, a)); };
    var touched = function () { interactAt = performance.now(); };
    host.addEventListener("pointerdown", function () { ctl.enableZoom = true; dragging = true; flying = null; zTarget = null; touched(); });
    window.addEventListener("pointerup", function () { if (dragging) { dragging = false; touched(); } });
    host.addEventListener("pointerenter", function () { pointerIn = true; });
    host.addEventListener("pointerleave", function () { pointerIn = false; if (!dragging) ctl.enableZoom = false; if (!pinned) setHover(null); });
    // wheel / trackpad zoom: only once the visitor has engaged with the globe, so scrolling the page is never hijacked
    host.addEventListener("wheel", function (e) {
      if (!ctl.enableZoom) return;
      e.preventDefault(); e.stopPropagation(); flying = null;
      var dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY, k = e.ctrlKey ? .012 : .0022;
      zTarget = clampAlt((zTarget || g.pointOfView().altitude) * Math.exp(Math.max(-150, Math.min(150, dy)) * k)); touched();
    }, { capture: true, passive: false });
    var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    var flyTo = function (to, ms) {
      var from = g.pointOfView(), dl = ((to.lng - from.lng + 540) % 360) - 180, d = ang(from.lat, from.lng, to.lat, to.lng);
      zTarget = null;
      if (reduce) { g.pointOfView({ lat: to.lat, lng: to.lng, altitude: clampAlt(to.altitude) }, 0); return; }
      flying = { t0: performance.now(), ms: ms || Math.min(2400, 1100 + d * 900), a: from, dl: dl, to: { lat: to.lat, alt: clampAlt(to.altitude) }, bump: Math.min(.7, d * .45) };
      ctl.enabled = false;
    };
    var stepFlight = function (now) {
      var f = flying, t = Math.min(1, (now - f.t0) / f.ms), e = ease(t);
      g.pointOfView({ lat: f.a.lat + (f.to.lat - f.a.lat) * e, lng: f.a.lng + f.dl * e, altitude: f.a.altitude + (f.to.alt - f.a.altitude) * e + f.bump * Math.sin(Math.PI * e) }, 0);
      if (t >= 1) { flying = null; ctl.enabled = true; }
    };
    var spinSpeed = 0;
    var stepCamera = function (now, pov) {
      if (flying) stepFlight(now);
      else if (zTarget !== null) {
        var na = pov.altitude + (zTarget - pov.altitude) * .14;
        if (Math.abs(zTarget - na) < .002) { na = zTarget; zTarget = null; }
        g.pointOfView({ lat: pov.lat, lng: pov.lng, altitude: na }, 0);
      }
      var idle = !dragging && !flying && !pinned && !hover && zTarget === null && now - interactAt > 4000;
      var target = spinOn && idle ? (pov.altitude < 1.6 ? .16 : .3) : 0;
      spinSpeed += (target - spinSpeed) * (target > spinSpeed ? .012 : .12); // eases in slowly, stops quickly
      ctl.autoRotate = spinSpeed > .004; ctl.autoRotateSpeed = spinSpeed;
    };

    // controls
    var spinBtn = $('.v-globe-ctrl [data-z="spin"]', gEl);
    var setSpin = function (v) { spinOn = v; if (spinBtn) { spinBtn.setAttribute("aria-pressed", v ? "true" : "false"); spinBtn.classList.toggle("off", !v); } };
    setSpin(spinOn);
    $$(".v-globe-ctrl button", gEl).forEach(function (b) {
      b.addEventListener("click", function () {
        var z = b.getAttribute("data-z");
        if (z === "spin") { setSpin(!spinOn); if (spinOn) interactAt = 0; return; }
        if (z === "reset") { unpin(); flyTo(HOME, 1600); interactAt = performance.now() - 2500; return; }
        flying = null; touched();
        zTarget = clampAlt((zTarget || g.pointOfView().altitude) * (z === "in" ? .72 : 1.38));
      });
    });

    // ---- overlay: labels, planes, glowing trails (DOM/SVG, projected each frame) ----
    var SVGNS = "http://www.w3.org/2000/svg";
    var trailsSvg = document.createElementNS(SVGNS, "svg"); trailsSvg.setAttribute("class", "v-gl-trails"); trailsSvg.setAttribute("aria-hidden", "true");
    var defs = document.createElementNS(SVGNS, "defs"); trailsSvg.appendChild(defs); overlay.appendChild(trailsSvg);
    var PLANE = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z"/></svg>';
    routes.forEach(function (r, i) {
      var gr = document.createElementNS(SVGNS, "linearGradient"); gr.id = "tvtr" + i; gr.setAttribute("gradientUnits", "userSpaceOnUse");
      gr.innerHTML = '<stop offset="0" stop-color="#9A0610" stop-opacity="0"/><stop offset=".55" stop-color="#C4303C" stop-opacity=".55"/><stop offset="1" stop-color="#F3E3C6" stop-opacity="1"/>';
      defs.appendChild(gr);
      var path = document.createElementNS(SVGNS, "path"); path.setAttribute("stroke", "url(#tvtr" + i + ")"); path.setAttribute("class", "v-gl-trail"); trailsSvg.appendChild(path);
      var pl = document.createElement("span"); pl.className = "v-gl v-gl-plane"; pl.innerHTML = PLANE; pl.style.opacity = "0"; overlay.appendChild(pl);
      r.gr = gr; r.path = path; r.pl = pl;
    });
    dests.forEach(function (d) {
      var el = document.createElement("button"); el.type = "button"; el.className = "v-gl v-gl-lab notranslate" + (d.hub ? " hub" : ""); el.style.opacity = "0";
      el.addEventListener("mouseenter", function () { if (!pinned) lightUp(d); });
      el.addEventListener("mouseleave", function () { if (!pinned) lightUp(null); });
      el.addEventListener("focus", function () { if (!pinned) lightUp(d); });
      el.addEventListener("blur", function () { if (!pinned) lightUp(null); });
      el.addEventListener("click", function (e) { e.stopPropagation(); selectDest(d); });
      overlay.appendChild(el); d.lab = el;
    });

    var regionName = function () { var l = document.documentElement.lang || "en"; try { var dn = new Intl.DisplayNames([l, "en"], { type: "region" }); var EN = { CD: "DR Congo", CG: "Congo" }; return function (c) { if (/^en/.test(l) && EN[c]) return EN[c]; try { return dn.of(c) || c; } catch (e) { return c; } }; } catch (e) { return function (c) { return c; }; } };
    var FIX = { RU: [61, 96], CA: [59, -104], US: [39.5, -98.5], GL: [73, -40], FR: [46.6, 2.4], NO: [61.5, 9], CL: [-33, -71], ID: [-2, 117], MY: [3.8, 102], JP: [36.5, 138.5], NZ: [-42, 172.5], GR: [39.3, 22], HR: [45.3, 16], IT: [42.8, 12.6], GB: [54.45, -2.35] };
    var GL = [], mk = function (cls) { var el = document.createElement("span"); el.className = "v-gl " + cls; el.style.opacity = "0"; overlay.appendChild(el); return el; };
    // country names appear only once the visitor zooms in; zoomed out, only the route destinations are labelled
    world.labels.forEach(function (r) { var ll = FIX[r[0]] || [r[1], r[2]], a = r[3]; GL.push({ el: mk("v-gl-c"), code: r[0], lat: ll[0], lng: ll[1], pr: a, min: a > 40 ? 2.05 : a > 8 ? 1.75 : a > 1.5 ? 1.5 : a > .3 ? 1.3 : 1.2 }); });
    [["Birmingham", 52.49, -1.89, 1], ["Manchester", 53.48, -2.24, 1], ["Glasgow", 55.86, -4.25, 1], ["Edinburgh", 55.95, -3.19, 1], ["Cardiff", 51.48, -3.18, 1], ["Belfast", 54.6, -5.93, 1],
     ["Liverpool", 53.41, -2.99, 2], ["Leeds", 53.8, -1.55, 2], ["Newcastle", 54.98, -1.62, 2], ["Bristol", 51.45, -2.59, 2], ["Aberdeen", 57.15, -2.09, 2]
    ].forEach(function (c) { GL.push({ el: mk("v-gl-city notranslate"), city: c[0], lat: c[1], lng: c[2], pr: 1e3 - c[3], min: c[3] === 1 ? 1.42 : 1.22 }); });
    var setNames = function () {
      var rn = regionName();
      GL.forEach(function (o) { o.el.textContent = o.city ? nm(o.city) : rn(o.code); o.w = 0; });
      dests.forEach(function (d) { d.lab.textContent = nm(d.n); d.lab.setAttribute("aria-label", nm(d.n) + ", " + rn(d.c)); d.w = 0; });
    };
    setNames();
    var lastLang = document.documentElement.lang;
    if ("MutationObserver" in window) new MutationObserver(function () { if (document.documentElement.lang !== lastLang) { lastLang = document.documentElement.lang; setTimeout(function () { setNames(); if (pinned && pinned.dest) showDest(pinned.dest); }, 60); } }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

    var visible = function (lat, lng, pov, alt) { return ang(lat, lng, pov.lat, pov.lng) < Math.acos(1 / (1 + pov.altitude)) - .02 + (alt || 0) * 1.4; };
    var gb, keepOut = [], measure = function () {
      gb = gEl.getBoundingClientRect();
      var hr = hero ? hero.getBoundingClientRect() : gb;
      // usable area: inside the globe box, inside the hero, below the header
      gb.minX = Math.max(14, hr.left - gb.left + 14); gb.maxX = Math.min(gb.width, hr.right - gb.left) - 14;
      gb.minY = Math.max(14, hr.top - gb.top + 96); gb.maxY = Math.min(gb.height, hr.bottom - gb.top) - 14;
      keepOut = [];
      if (heroCopy && window.innerWidth > 1100) { var c = heroCopy.getBoundingClientRect(); keepOut.push([c.left - gb.left - 24, c.top - gb.top - 16, c.right - gb.left + 24, c.bottom - gb.top + 16]); }
      $$(".v-globe-ctrl, .v-globe-hint", gEl).forEach(function (el) { var c = el.getBoundingClientRect(); keepOut.push([c.left - gb.left - 8, c.top - gb.top - 8, c.right - gb.left + 8, c.bottom - gb.top + 8]); });
    };
    measure();
    var hit = function (b, list) { for (var i = 0; i < list.length; i++) { var q = list[i]; if (b[0] < q[2] && b[2] > q[0] && b[1] < q[3] && b[3] > q[1]) return true; } return false; };
    var inside = function (b) {
      if (!(b[0] >= gb.minX && b[2] <= gb.maxX && b[1] >= gb.minY && b[3] <= gb.maxY)) return false;
      var R = Math.min(gb.width, gb.height) * .47, cx = gb.width / 2, cy = gb.height / 2;
      for (var i = 0; i < 4; i++) { var x = i % 2 ? b[2] : b[0], y = i < 2 ? b[1] : b[3]; if ((x - cx) * (x - cx) + (y - cy) * (y - cy) > R * R) return false; }
      return true;
    };
    var hide = function (el) { if (el.style.opacity !== "0") el.style.opacity = "0"; };
    var layout = function (pov) {
      var boxes = keepOut.slice();
      // 1. destination labels (London first), pill sits just above its marker
      dests.forEach(function (d) {
        var el = d.lab;
        if (!visible(d.lat, d.lng, pov, -.02)) { hide(el); el.tabIndex = -1; return; }
        var p = g.getScreenCoords(d.lat, d.lng, .004);
        if (!d.w) { d.w = el.offsetWidth || 70; d.h = el.offsetHeight || 22; }
        var b = [p.x - d.w / 2, p.y - 12 - d.h, p.x + d.w / 2, p.y - 12];
        var sel = pinned && pinned.dest === d;
        if (!sel && (!inside(b) || hit(b, boxes))) { hide(el); el.tabIndex = -1; return; }
        boxes.push([b[0] - 4, b[1] - 3, b[2] + 4, b[3] + 3]);
        el.style.opacity = "1"; el.tabIndex = 0;
        el.style.transform = "translate(" + (p.x - d.w / 2) + "px," + (p.y - 12 - d.h) + "px)";
      });
      // 2. country and UK city names by zoom level, without overlaps
      var cands = [];
      GL.forEach(function (o) {
        if (pov.altitude > o.min || !visible(o.lat, o.lng, pov, -.05)) { hide(o.el); return; }
        var p = g.getScreenCoords(o.lat, o.lng, .005); o.x = p.x; o.y = p.y; cands.push(o);
      });
      cands.sort(function (a, b) { return b.pr - a.pr; });
      cands.forEach(function (o) {
        if (!o.w) { o.w = o.el.offsetWidth || 60; o.h = o.el.offsetHeight || 14; }
        var dx = o.city ? -4 : -o.w / 2, b = [o.x + dx - 3, o.y - o.h / 2 - 2, o.x + dx + o.w + 3, o.y + o.h / 2 + 2];
        if (!inside(b) || hit(b, boxes)) { hide(o.el); return; }
        boxes.push(b); o.el.style.opacity = "1";
        o.el.style.transform = "translate(" + (o.x + dx) + "px," + (o.y - o.h / 2) + "px)";
      });
    };

    // ---- flights: at most two routes animate at once (one on phones) ----
    var MAXA = lite ? 1 : 2, active = [], nextAt = 900, qi = 0;
    var flights = function (now, pov) {
      if (reduce) return;
      if (active.length < MAXA && now > nextAt && document.visibilityState === "visible") {
        var r = routes[qi++ % routes.length];
        if (active.every(function (a) { return a.r !== r; })) { active.push({ r: r, t0: now }); nextAt = now + r.dur * .55 + 600; }
      }
      active = active.filter(function (a) {
        var r = a.r, f = (now - a.t0) / r.dur, fade = f > 1 ? Math.max(0, 1 - (f - 1) * r.dur / 1100) : 1;
        if (fade <= 0) { r.path.setAttribute("d", ""); r.pl.style.opacity = "0"; r.lab.classList.remove("on"); return false; }
        var e = Math.min(1, f), e2 = e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
        var head = Math.min(r.pts.length - 1, Math.round(e2 * (r.pts.length - 1)));
        var tail = Math.max(0, head - Math.round(r.pts.length * .55)), d = "", pen = false, first = null, last = null, headOn = false;
        for (var i = tail; i <= head; i++) {
          var q = r.pts[i];
          if (!visible(q[0], q[1], pov, q[2])) { pen = false; continue; }
          var s = g.getScreenCoords(q[0], q[1], q[2]);
          d += (pen ? "L" : "M") + s.x.toFixed(1) + " " + s.y.toFixed(1); pen = true;
          if (!first) first = s; last = s; if (i === head) headOn = true;
        }
        r.path.setAttribute("d", d); r.path.style.opacity = String(fade);
        if (first && last) { r.gr.setAttribute("x1", first.x); r.gr.setAttribute("y1", first.y); r.gr.setAttribute("x2", last.x); r.gr.setAttribute("y2", last.y); }
        if (f <= 1 && head > 0 && headOn && isFinite(last.x) && isFinite(last.y) && !hit([last.x - 12, last.y - 12, last.x + 12, last.y + 12], keepOut) && inside([last.x - 9, last.y - 9, last.x + 9, last.y + 9])) {
          var pa = r.pts[head - 1], sa = g.getScreenCoords(pa[0], pa[1], pa[2]);
          var rot = Math.atan2(last.y - sa.y, last.x - sa.x) * 180 / Math.PI + 90;
          r.pl.style.opacity = String(Math.min(1, Math.sin(Math.PI * Math.min(1, f)) * 4));
          r.pl.style.transform = "translate(" + last.x + "px," + last.y + "px) translate(-50%,-50%) rotate(" + rot + "deg) scale(" + (.7 + Math.sin(Math.PI * e2) * .35) + ")";
        } else r.pl.style.opacity = "0";
        r.lab.classList.toggle("on", f > .85 && f < 1.6);
        return true;
      });
    };

    // ---- main loop (one requestAnimationFrame, paused off screen / in background tabs) ----
    var running = true, frame = 0;
    var tick = function (now) {
      if (!running) return;
      var pov = g.pointOfView();
      stepCamera(now, pov); pov = g.pointOfView();
      placeSun();
      flights(now, pov);
      if (frame++ % (lite ? 3 : 2) === 0) {
        layout(pov);
        gEl.classList.toggle("near", pov.altitude < 1.45); gEl.classList.toggle("mid", pov.altitude >= 1.45 && pov.altitude < 1.95);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // intro: drift in from deep space, then draw the routes
    if (reduce) g.pointOfView(HOME, 0);
    else { g.pointOfView({ lat: HOME.lat + 10, lng: HOME.lng - 60, altitude: ALT_MAX }, 0); setTimeout(function () { flyTo(HOME, 3000); }, 500); }
    setTimeout(function () { g.pathsData(routes); setTimeout(function () { g.pathTransitionDuration(0); }, 2600); }, reduce ? 0 : 1400);

    // ---- cards: hover card follows the pointer; a selected destination docks beside the globe ----
    var UK = [["London", 51.5, -0.13], ["Manchester", 53.48, -2.24], ["Birmingham", 52.48, -1.9], ["Edinburgh", 55.95, -3.19]];
    var fmtKm = function (k) { return (Math.round(k / 10) * 10).toLocaleString("en-GB") + " km"; };
    var fmtN = function (n) { return n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : (n / 1e3).toFixed(n < 1e5 ? 1 : 0) + "k"; };
    var lastXY = { x: 0, y: 0 };
    gEl.addEventListener("pointermove", function (e) { var r = gEl.getBoundingClientRect(); lastXY = { x: e.clientX - r.left, y: e.clientY - r.top }; if (hover && !pinned) position(); });
    var schLabel = function () { var k = panel && $(".v-sp-k", panel); return k ? k.textContent : "Schengen Area"; };
    var X = '<button type="button" class="v-gc-x" aria-label="Close">×</button>';
    var worldHTML = function (code) {
      return X + '<p class="v-gc-k">' + esc(ui("g_world", "Country")) + '</p><div class="v-gc-h"><div><b>' + esc(regionName()(code)) + '</b></div></div><p class="v-gc-p">' + esc(ui("g_ask", "Planning a trip here? Ask us what you need.")) + '</p>' +
        '<div class="v-gc-foot"><a href="' + pageUrl("contact.html") + '">' + esc(ui("g_askbtn", "Free consultation")) + ' →</a></div>';
    };
    var cardHTML = function (c, sch) {
      var x = c.x || {}, h = [X];
      h.push('<p class="v-gc-k">' + (sch ? '<span class="v-gc-sch">' + esc(schLabel()) + '</span>' : esc(ui("g_country", "Destination"))) + '</p>');
      h.push('<div class="v-gc-h"><img class="v-flag" src="' + asset() + 'v2/flags/' + c.i.toLowerCase() + '.svg" alt="" width="30" height="22"><div><b>' + esc(nm(c.n)) + '</b>' + (c.c ? '<small>' + esc(ui("g_capital", "Capital")) + ' · ' + esc(nm(c.c[0])) + '</small>' : '') + '</div></div>');
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
    var destHTML = function (d) {
      var country = regionName()(d.c), km = d.hub ? 0 : 6371 * ang(LON[0], LON[1], d.lat, d.lng);
      return X + '<p class="v-gc-k">' + esc(ui("g_country", "Destination")) + '</p>' +
        '<div class="v-gc-h v-gd-h"><div><b class="v-gd-city">' + esc(nm(d.n)) + '</b><small>' + esc(country) + (km ? ' · <span dir="ltr">' + fmtKm(km) + '</span> ' + esc(ui("g_fromlon", "from London")) : '') + '</small></div></div>' +
        '<p class="v-gc-p">' + esc(d.hub ? ui("g_hub", "Home of the TravelVista team. Explore our international visa and travel services.") : ui("g_dest", "Explore TravelVista’s visa and travel services for {c}.").replace("{c}", country)) + '</p>' +
        '<div class="v-gc-foot"><a class="v-gd-go" href="' + pageUrl(d.hub ? "contact.html" : d.s) + '">' + esc(d.hub ? ui("g_askbtn", "Free consultation") : ui("g_explore", "Explore destination")) + ' →</a></div>';
    };
    var position = function () {
      if (window.innerWidth <= 1100 || card.classList.contains("dock")) { card.style.left = ""; card.style.top = ""; return; }
      var R = gEl.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight;
      var minX = Math.max(8, 12 - R.left), maxX = Math.min(R.width, window.innerWidth - R.left) - cw - 12;
      var minY = Math.max(8, 90 - R.top), maxY = Math.min(R.height, window.innerHeight - R.top) - ch - 12;
      var x = lastXY.x + 26, y = lastXY.y - ch / 2;
      if (x > maxX) x = lastXY.x - cw - 26;
      card.style.left = Math.max(minX, Math.min(maxX, x)) + "px"; card.style.top = Math.max(minY, Math.min(maxY, y)) + "px";
    };
    var showHTML = function (html, dock, sch) {
      if (!html) { card.classList.remove("on", "dock", "pinned"); card.hidden = true; if (panel) panel.classList.remove("on"); return; }
      card.innerHTML = html; card.hidden = false; card.classList.toggle("dock", !!dock); card.classList.add("on"); position();
      if (panel) { panel.hidden = !sch; panel.classList.toggle("on", !!sch); }
    };
    var showCountry = function (f, dock) { showHTML(f.properties.w ? worldHTML(f.properties.w) : cardHTML(f.properties.c, f.properties.sch), dock, f.properties.sch); };
    var showDest = function (d) { showHTML(destHTML(d), true, false); };
    var refresh = function () { g.polygonsData(g.polygonsData()); };
    var lightUp = function (d) {
      dests.forEach(function (x) { x.lab.classList.toggle("hl", x === d); });
      var f = d ? byCode[d.c] : null; if (f !== lit) { lit = f; refresh(); }
    };
    var setHover = function (f) { if (f === hover) return; hover = f; host.style.cursor = f ? "pointer" : ""; refresh(); if (f) showCountry(f, false); else if (!pinned) showHTML(null); };
    var selectDest = function (d) {
      document.documentElement.classList.add("tv-gpin"); hover = null; pinned = { dest: d }; lightUp(d); card.classList.add("pinned"); showDest(d);
      var cur = g.pointOfView().altitude;
      flyTo({ lat: d.lat - (window.innerWidth > 1100 ? 4 : 15), lng: d.lng + (window.innerWidth > 1100 ? 7 : 0), altitude: Math.min(Math.max(cur, 1.5), d.d > .9 ? 2.1 : 1.65) });
    };
    var selectCountry = function (f) {
      if (!f) return;
      var c = f.properties.c, code = f.properties.code, lab = (world.labels.filter(function (r) { return r[0] === code; })[0]) || null;
      var ll = FIX[code] || (c && c.l) || (lab ? [lab[1], lab[2]] : null);
      document.documentElement.classList.add("tv-gpin"); hover = null; pinned = { f: f }; lit = f; dests.forEach(function (x) { x.lab.classList.remove("hl"); }); card.classList.add("pinned"); refresh(); showCountry(f, true);
      if (ll) flyTo({ lat: ll[0] - (window.innerWidth > 1100 ? 3 : 14), lng: ll[1] + (window.innerWidth > 1100 ? 7 : 0), altitude: Math.min(Math.max(g.pointOfView().altitude, 1.45), 1.9) });
    };
    var unpin = function () { if (!pinned) return; document.documentElement.classList.remove("tv-gpin"); pinned = null; lit = null; dests.forEach(function (x) { x.lab.classList.remove("hl"); }); card.classList.remove("pinned", "dock"); showHTML(null); refresh(); touched(); };
    card.addEventListener("click", function (e) { if (e.target.closest(".v-gc-x")) { e.stopPropagation(); unpin(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && pinned) unpin(); });

    // ---- lifecycle ----
    setTimeout(function () { gEl.classList.add("ready"); }, 700);
    var fit = function () { var s2 = size(); g.width(s2.w).height(s2.h); measure(); dests.forEach(function (d) { d.w = 0; }); };
    if ("ResizeObserver" in window) new ResizeObserver(function () { clearTimeout(fit.t); fit.t = setTimeout(fit, 120); }).observe(gEl);
    else window.addEventListener("resize", function () { clearTimeout(fit.t); fit.t = setTimeout(fit, 150); });
    window.addEventListener("scroll", function () { if (running) measure(); }, { passive: true });
    var resume = function () { if (!running) { running = true; g.resumeAnimation(); requestAnimationFrame(tick); } };
    var pause = function () { if (running) { running = false; g.pauseAnimation(); } };
    document.addEventListener("visibilitychange", function () { if (document.hidden) pause(); else if (gEl.getBoundingClientRect().bottom > 0) resume(); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) resume(); else pause(); }).observe(gEl);
    document.addEventListener("tv:lang", function () { setNames(); if (pinned && pinned.dest) showDest(pinned.dest); else if (pinned && pinned.f) showCountry(pinned.f, true); });
  };

  if (document.readyState === "complete") setTimeout(start, 120);
  else window.addEventListener("load", function () { setTimeout(start, 120); });
})();
