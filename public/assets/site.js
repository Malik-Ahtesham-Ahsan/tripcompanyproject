(function () {
  var WA = "447862609755";
  // Live site uses clean addresses (/france-visa-from-uk); the preview uses page.html files.
  var probe = document.querySelector('a[href*="schengen-visa"]');
  var CLEAN = !!probe && !/\.html/.test(probe.getAttribute("href"));
  var ASSET = CLEAN ? "/assets/" : "assets/";
  var pageUrl = function (file) { return CLEAN ? "/" + file.replace(/^index\.html$/, "").replace(/\.html$/, "") : file; };
  // Free visa tools: load their script only on the tool pages
  window.TV = { ASSET: ASSET, CLEAN: CLEAN, pageUrl: pageUrl, WA: WA };

  // service cards: gentle 3D tilt and spotlight that follow the mouse
  (function () {
    if (!window.matchMedia || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".svc2").forEach(function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--ry", ((x - .5) * 7).toFixed(2) + "deg");
        c.style.setProperty("--rx", ((.5 - y) * 6).toFixed(2) + "deg");
        c.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        c.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      c.addEventListener("pointerleave", function () { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
    });
  })();
  // client visa approvals: country filter + larger photo
  (function () {
    var sec = document.getElementById("approvals");
    if (!sec) return;
    var cards = sec.querySelectorAll(".pf-card");
    sec.querySelectorAll(".pf-filter button").forEach(function (b) {
      b.addEventListener("click", function () {
        sec.querySelectorAll(".pf-filter button").forEach(function (x) { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        var cc = b.getAttribute("data-cc");
        cards.forEach(function (c) { c.hidden = !!cc && c.getAttribute("data-cc") !== cc; });
      });
    });
    var dlg = sec.querySelector(".pf-dlg");
    if (!dlg || typeof dlg.showModal !== "function") return;
    var img = dlg.querySelector("img");
    sec.querySelectorAll(".pf-img").forEach(function (b) {
      b.addEventListener("click", function () {
        img.src = b.querySelector("img").currentSrc || b.querySelector("img").src;
        img.alt = "";
        dlg.showModal();
      });
    });
    dlg.querySelector(".pf-x").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  })();

  if (document.querySelector("[data-tool]")) {
    var ts = document.createElement("script");
    ts.src = ASSET + "tools.js"; ts.defer = true;
    document.head.appendChild(ts);
  }
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (reduceMotion) {
    document.querySelectorAll("svg.flight").forEach(function (svg) { if (svg.pauseAnimations) { svg.pauseAnimations(); svg.setCurrentTime && svg.setCurrentTime(4); } });
  }

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  // Sliding highlight that follows the mouse across the menu (desktop)
  var navList = document.querySelector(".nav > ul");
  if (navList && window.matchMedia("(min-width: 961px)").matches) {
    var ind = document.createElement("span"); ind.className = "nav-indicator"; ind.setAttribute("aria-hidden", "true");
    navList.insertBefore(ind, navList.firstChild);
    var items = Array.prototype.slice.call(navList.children).filter(function (li) { return li.tagName === "LI"; });
    var moveTo = function (li) {
      if (!li) { ind.classList.remove("on"); return; }
      var t = li.firstElementChild;
      ind.style.left = t.offsetLeft + li.offsetLeft - t.offsetLeft + "px";
      ind.style.width = t.offsetWidth + "px";
      ind.classList.add("on");
    };
    var current = items.filter(function (li) { return li.querySelector('[aria-current="page"]'); })[0] || null;
    items.forEach(function (li) { li.addEventListener("mouseenter", function () { moveTo(li); }); });
    navList.addEventListener("mouseleave", function () { moveTo(current); });
    window.addEventListener("load", function () { moveTo(current); });
    moveTo(current);
  }

  // Glass header once the page scrolls
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = window.scrollY;
    var onScroll = function () {
      var y = window.scrollY;
      header.classList.toggle("scrolled", y > 8);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 3D tilt on cards (mouse and trackpad only)
  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-tilt], .grid > .card, .review").forEach(function (el) {
      var max = el.hasAttribute("data-tilt") ? 9 : 5;
      el.classList.add("tilt");
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--ry", ((x - 0.5) * max * 2).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((0.5 - y) * max * 2).toFixed(2) + "deg");
        el.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      el.addEventListener("pointerleave", function () {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });
  }

  // Interactive Earth in the homepage hero: real continents as dots, city lights, flight paths
  // from UK visa centres to every Schengen capital. Drag to turn it; click a Schengen country
  // to fly in and open that country's visa page. Drawn in code (no video, no map library).
  var earth = document.querySelector("canvas.earth");
  if (earth && earth.getContext) {
    var ectx = earth.getContext("2d");
    var hero = earth.parentNode, tip = hero.querySelector(".globe-tip"), hint = hero.querySelector(".globe-hint");
    var D2R = Math.PI / 180, R2D = 180 / Math.PI;
    var land = null, nLand = 0, sLat, cLat, lonR, lightSeed;
    var cities = [
      [48.86,2.35],[40.42,-3.7],[41.9,12.5],[52.52,13.4],[37.98,23.73],[52.37,4.9],[38.72,-9.14],[48.21,16.37],
      [59.33,18.07],[41.01,28.98],[25.2,55.27],[40.71,-74.0],[43.65,-79.38],[50.08,14.44],[64.15,-21.94],
      [45.46,9.19],[41.39,2.17],[50.85,4.35],[47.5,19.04],[52.23,21.01],[44.43,26.1],[55.68,12.57],[60.17,24.94],[59.91,10.75],
      [53.35,-6.26],[47.37,8.54],[46.2,6.15],[45.76,4.84],[43.3,5.37],[48.14,11.58],[50.11,8.68],[53.55,9.99],[51.23,6.78],
      [40.85,14.27],[45.44,12.32],[39.47,-0.38],[37.39,-5.98],[41.15,-8.61],[35.9,14.51],[42.7,23.32],[45.81,15.98],[46.05,14.51],
      [54.69,25.28],[56.95,24.11],[59.44,24.75],[55.75,37.62],[50.45,30.52],[39.93,32.86],[33.89,35.5],[31.77,35.21],[30.04,31.24],
      [24.71,46.68],[25.29,51.53],[24.45,54.38],[33.69,73.04],[31.55,74.34],[24.86,67.0],[28.61,77.21],[19.08,72.88],[12.97,77.59],
      [13.08,80.27],[22.57,88.36],[23.81,90.41],[6.52,3.38],[9.08,7.4],[5.6,-0.19],[-1.29,36.82],[-26.2,28.05],[-33.92,18.42],
      [33.57,-7.59],[36.8,10.18],[36.75,3.06],[34.05,-118.24],[41.88,-87.63],[29.76,-95.37],[25.76,-80.19],[38.9,-77.04],[42.36,-71.06],
      [45.5,-73.57],[49.28,-123.12],[19.43,-99.13],[-23.55,-46.63],[-22.91,-43.17],[-34.6,-58.38],[4.71,-74.07],[-12.05,-77.04],
      [35.68,139.69],[37.57,126.98],[39.9,116.4],[31.23,121.47],[22.32,114.17],[1.35,103.82],[13.76,100.5],[14.6,120.98],[-6.21,106.85],
      [-33.87,151.21],[-37.81,144.96],[21.03,105.85],[3.14,101.69]
    ];
    // UK cities (visa centres) and the capitals of all 29 Schengen countries
    var origins = [[51.5,-0.13,"London"],[53.48,-2.24,"Manchester"],[52.48,-1.9,"Birmingham"],[55.95,-3.19,"Edinburgh"]];
    var routes = [[48.21,16.37],[50.85,4.35],[42.7,23.32],[45.81,15.98],[50.08,14.44],[55.68,12.57],[59.44,24.75],[60.17,24.94],
      [48.86,2.35],[52.52,13.4],[37.98,23.73],[47.5,19.04],[64.15,-21.94],[41.9,12.5],[56.95,24.11],[47.14,9.52],[54.69,25.28],
      [49.61,6.13],[35.9,14.51],[52.37,4.9],[59.91,10.75],[52.23,21.01],[38.72,-9.14],[44.43,26.1],[48.15,17.11],[46.05,14.51],
      [40.42,-3.7],[59.33,18.07],[46.95,7.45]];
    var LON0 = -0.13, LAT0 = 51.5, Z0 = 1;
    var isDark = function () {
      var th = document.documentElement.getAttribute("data-theme");
      return th ? th === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    var PAL = {
      dark: { star: "#dfe8ff", starA: 1, atm: ["rgba(90,140,255,0.55)", "rgba(70,120,255,0.22)", "rgba(40,80,200,0)"],
        ocean: ["#1b3a86", "#0c1d4d", "#050d29"], limb: "rgba(140,180,255,0.55)", dot: 1.6, lightsA: 1,
        land: ["#2a4a9a", "#3c63b8", "#5b86d6", "#7ea4ea", "#a9c3f6", "#d4e2ff"], landA: [0.55, 0.6, 0.65, 0.72, 0.8, 0.9],
        lights: ["rgba(255,196,110,", "rgba(255,214,140,", "rgba(255,236,190,"], glow: ["255,230,170", "255,180,90", "255,160,60"],
        route: "#ff6b7d", trail: "#ff4d63", head: "#ffffff", mark: "#ff4d63", blend: "lighter",
        label: "#eef3ff", city: "#ffffff", halo: "rgba(4,10,34,0.9)", border: "rgba(170,198,255,0.32)", fill: "255,77,99", hot: "#ff8c99", tint: "rgba(120,160,255," },
      light: { star: "#1d3a7a", starA: 0.25, atm: ["rgba(120,160,255,0.45)", "rgba(140,175,255,0.18)", "rgba(160,190,255,0)"],
        ocean: ["#ffffff", "#e8eefb", "#d3ddf4"], limb: "rgba(29,58,122,0.4)", dot: 2.1, lightsA: 0.25,
        land: ["#0f2352", "#142b5c", "#1a3570", "#1d3a7a", "#24448c", "#2c4f9b"], landA: [0.95, 0.95, 0.92, 0.9, 0.88, 0.85],
        lights: ["rgba(184,41,47,", "rgba(196,52,60,", "rgba(210,70,78,"], glow: ["214,60,70", "200,45,55", "184,41,47"],
        route: "#b8292f", trail: "#c42a36", head: "#b8292f", mark: "#b8292f", blend: "source-over",
        label: "#0f1a33", city: "#0f1a33", halo: "rgba(246,249,255,0.92)", border: "rgba(29,58,122,0.3)", fill: "184,41,47", hot: "#b8292f", tint: "rgba(29,58,122," }
    };
    var stars = [];
    for (var si = 0; si < 220; si++) stars.push([Math.random(), Math.random(), Math.random() * 1.2 + 0.3, Math.random() * 6.28]);

    var EW = 0, EH = 0, edpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.5 : 2);
    var eresize = function () {
      var r = earth.getBoundingClientRect();
      EW = r.width; EH = r.height;
      earth.width = Math.round(EW * edpr); earth.height = Math.round(EH * edpr);
      ectx.setTransform(edpr, 0, 0, edpr, 0, 0);
    };
    eresize();
    window.addEventListener("resize", eresize);

    var vec = function (lat, lon) {
      var a = lat * D2R, b = lon * D2R;
      return [Math.cos(a) * Math.cos(b), Math.cos(a) * Math.sin(b), Math.sin(a)];
    };
    var LV = (function () { var l = [-0.55, 0.5, 0.67], m = Math.hypot(l[0], l[1], l[2]); return [l[0] / m, l[1] / m, l[2] / m]; })();
    var landAlpha = 0, landStart = 0;

    fetch(ASSET + "globe-land.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (a) {
      if (!a) return;
      nLand = a.length / 2;
      sLat = new Float32Array(nLand); cLat = new Float32Array(nLand); lonR = new Float32Array(nLand); lightSeed = new Uint8Array(nLand);
      for (var i = 0; i < nLand; i++) {
        var la = a[i * 2] / 10 * D2R, lo = a[i * 2 + 1] / 10;
        sLat[i] = Math.sin(la); cLat[i] = Math.cos(la); lonR[i] = lo * D2R;
        var dense = (la > 0.6 && la < 1.05 && lo > -11 && lo < 40) || (la > 0.35 && la < 0.6 && lo > 68 && lo < 92) ||
                    (la > 0.4 && la < 0.75 && lo > 110 && lo < 142) || (la > 0.45 && la < 0.8 && lo > -98 && lo < -70);
        lightSeed[i] = Math.random() < (dense ? 0.45 : 0.06) ? 1 + Math.floor(Math.random() * 3) : 0;
      }
      land = true; landStart = performance.now();
    }).catch(function () {});

    // Schengen country shapes: [{n name, s page, l [lat,lon] label, p rings of lat*100,lon*100}]
    var countries = [];
    fetch(ASSET + "globe-countries.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (list) {
      if (!list) return;
      countries = list.map(function (c) {
        var rings = c.p.map(function (r) {
          var n = r.length / 2, ll = new Float32Array(r.length), xyz = new Float32Array(n * 3);
          for (var i = 0; i < n; i++) {
            var la = r[i * 2] / 100, lo = r[i * 2 + 1] / 100, v = vec(la, lo);
            ll[i * 2] = la; ll[i * 2 + 1] = lo; xyz[i * 3] = v[0]; xyz[i * 3 + 1] = v[1]; xyz[i * 3 + 2] = v[2];
          }
          return { ll: ll, xyz: xyz, n: n };
        });
        var b = [90, 180, -90, -180], size = 0;
        rings.forEach(function (r) {
          size += r.n;
          for (var i = 0; i < r.n; i++) {
            var la = r.ll[i * 2], lo = r.ll[i * 2 + 1];
            if (la < b[0]) b[0] = la; if (lo < b[1]) b[1] = lo; if (la > b[2]) b[2] = la; if (lo > b[3]) b[3] = lo;
          }
        });
        var tiny = c.i === "LI" || c.i === "MT" || c.i === "LU";
        var cap = c.c ? { n: c.c[0], v: vec(c.c[1], c.c[2]) } : null;
        return { n: c.n, s: pageUrl(c.s), lat: c.l[0], lon: c.l[1], lv: vec(c.l[0], c.l[1]), rings: rings, bb: b, size: size, tiny: tiny, cap: cap, x: c.x || {} };
      });
      countries.sort(function (a, b) { return b.size - a.size; }); // big countries get labels first
    }).catch(function () {});

    // language-aware names (dictionary comes from the language switcher)
    var nm = function (en) { var d = window.tvDict; return (d && d._names && d._names[en]) || en; };
    var ui = function (k, en) { var d = window.tvDict; return (d && d._ui && d._ui[k]) || en; };
    var font = "";
    var refreshText = function () {
      font = getComputedStyle(document.body).fontFamily;
      if (hint) hint.querySelector("span").textContent = ui("hint", "Drag and zoom the globe · click a country");
      if (tip && tipFor) { tip.innerHTML = cardFor(tipFor); }
    };
    refreshText();
    document.addEventListener("languagechange", function () { setTimeout(refreshText, 50); });

    // ---- view state ----
    var Z0 = 1.32, ZMAX = 6, zT = Z0, anchor = null;
    var uLon = 0, uLat = 0, vLon = 0, vLat = 0, zoom = Z0, driftT = 0, lastT = 0;
    var wrap180 = function (x) { return ((x % 360) + 540) % 360 - 180; };
    var dragging = false, moved = false, hover = null, fly = null, lastMove = 0;
    var V = { cx: 0, cy: 0, R: 1, lon0: 0, lat0: 0 };
    var baseLon = function () { return LON0 + 8 + 16 * Math.sin(driftT * 0.00005); };
    var baseLat = function () { return LAT0 - 9 + 3 * Math.sin(driftT * 0.00004); };
    var clampLat = function () { var b = baseLat(), l = Math.max(-25, Math.min(72, b + uLat)); uLat = l - b; };
    var ease = function (x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };

    var drawEarth = function (t) {
      var dt = lastT ? Math.min(64, t - lastT) : 16; lastT = t;
      var at = reduceMotion ? 20000 : t; // animation clock (frozen when the visitor prefers less motion)
      var w = EW, h = EH, narrow = w < 860, P = isDark() ? PAL.dark : PAL.light;

      // motion: idle drift, drag inertia, fly-to-country
      if (!reduceMotion && !dragging && !hover && !fly && zT < Z0 + 0.01 && t - lastMove > 2500) driftT += dt;
      if (!fly) { zoom = reduceMotion ? zT : zoom + (zT - zoom) * Math.min(1, dt / 16 * 0.2); if (Math.abs(zT - zoom) < 0.0015) zoom = zT; }
      if (!dragging && !fly) {
        uLon += vLon * dt; uLat += vLat * dt;
        var damp = Math.pow(0.93, dt / 16); vLon *= damp; vLat *= damp;
        if (Math.abs(vLon) < 1e-4) vLon = 0; if (Math.abs(vLat) < 1e-4) vLat = 0;
        clampLat();
      }
      if (fly) {
        var fp = Math.min(1, (t - fly.t0) / fly.d), e = ease(fp);
        uLon = fly.a[0] + (fly.b[0] - fly.a[0]) * e; uLat = fly.a[1] + (fly.b[1] - fly.a[1]) * e; zoom = fly.a[2] + (fly.b[2] - fly.a[2]) * e;
        if (fly && fly.c && fp > 0.55 && !fly.fading) { fly.fading = true; document.documentElement.classList.add("globe-leaving"); }
        if (fp >= 1 && !fly.c) { zT = zoom; fly = null; }
        else if (fp >= 1 && !fly.gone) { fly.gone = true; window.location.href = fly.c.s; }
      }

      ectx.clearRect(0, 0, w, h);
      for (var s = 0; s < stars.length; s++) {
        var st = stars[s], tw = 0.55 + 0.45 * Math.sin(at * 0.0012 + st[3]);
        ectx.globalAlpha = (0.25 + 0.5 * tw * (st[2] / 1.5)) * P.starA;
        ectx.fillStyle = P.star;
        ectx.fillRect(st[0] * w, st[1] * h, st[2], st[2]);
      }
      var R = (narrow ? Math.max(w * 0.78, 300) * 0.87 : Math.max(h * 0.78, w * 0.36)) * zoom;
      var rtl = document.documentElement.dir === "rtl";
      var cx = narrow ? w * 0.5 : (rtl ? w * 0.3 : w * 0.7), cy = narrow ? h - 175 : h * 0.6;
      if (anchor) { // keep the point under the cursor fixed while zooming
        var ll0 = unprojectAt(anchor[0], anchor[1], R, cx, cy, (baseLon() + uLon) * D2R, (baseLat() + uLat) * D2R);
        if (ll0) { uLon += wrap180(anchor[3] - ll0[1]); uLat += anchor[2] - ll0[0]; clampLat(); }
        if (zoom === zT) anchor = null;
      }
      earth.classList.toggle("zoomed", zT > Z0 + 0.01);
      var lon0 = (baseLon() + uLon) * D2R, lat0 = (baseLat() + uLat) * D2R;
      var sp = Math.sin(lat0), cp = Math.cos(lat0), cl = Math.cos(-lon0), sl = Math.sin(-lon0);
      V.cx = cx; V.cy = cy; V.R = R; V.lon0 = lon0; V.lat0 = lat0;
      var proj = function (v, k) {
        var x1 = v[0] * cl - v[1] * sl, y1 = v[0] * sl + v[1] * cl;
        return [cx + y1 * R * k, cy - (v[2] * cp - x1 * sp) * R * k, v[2] * sp + x1 * cp];
      };
      // atmosphere glow
      ectx.globalAlpha = 1;
      var g = ectx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.22);
      g.addColorStop(0, P.atm[0]); g.addColorStop(0.25, P.atm[1]); g.addColorStop(1, P.atm[2]);
      ectx.fillStyle = g; ectx.beginPath(); ectx.arc(cx, cy, R * 1.22, 0, 6.2832); ectx.fill();
      var lx = cx + LV[0] * R * 0.55, ly = cy - LV[1] * R * 0.55;
      var og = ectx.createRadialGradient(lx, ly, R * 0.05, cx, cy, R);
      og.addColorStop(0, P.ocean[0]); og.addColorStop(0.45, P.ocean[1]); og.addColorStop(1, P.ocean[2]);
      ectx.fillStyle = og; ectx.beginPath(); ectx.arc(cx, cy, R, 0, 6.2832); ectx.fill();
      ectx.strokeStyle = P.limb; ectx.lineWidth = 1.5; ectx.beginPath(); ectx.arc(cx, cy, R - 0.5, 0, 6.2832); ectx.stroke();

      if (land) {
        landAlpha = reduceMotion ? 1 : Math.min(1, (t - landStart) / 900);
        var ds = (narrow ? P.dot - 0.2 : P.dot) * Math.min(1.5, Math.sqrt(zoom));
        var buckets = [[], [], [], [], [], []], lights = [[], [], []];
        for (var i = 0; i < nLand; i++) {
          var dl = lonR[i] - lon0, cd = Math.cos(dl);
          var z = sp * sLat[i] + cp * cLat[i] * cd;
          if (z <= 0.02) continue;
          var x = cLat[i] * Math.sin(dl), y = cp * sLat[i] - sp * cLat[i] * cd;
          var day = x * LV[0] + y * LV[1] + z * LV[2];
          var px = cx + x * R, py = cy - y * R;
          if (px < -4 || px > w + 4 || py < -4 || py > h + 4) continue;
          var b = day > 0 ? Math.min(5, 2 + Math.floor(day * 4)) : (day > -0.25 ? 1 : 0);
          buckets[b].push(px, py);
          if (lightSeed[i] && day < 0.25) lights[lightSeed[i] - 1].push(px, py);
        }
        for (var bk = 0; bk < 6; bk++) {
          ectx.globalAlpha = P.landA[bk] * landAlpha; ectx.fillStyle = P.land[bk];
          var arr = buckets[bk];
          for (var j = 0; j < arr.length; j += 2) ectx.fillRect(arr[j] - ds / 2, arr[j + 1] - ds / 2, ds, ds);
        }
        for (var lk = 0; lk < 3; lk++) {
          ectx.fillStyle = P.lights[lk] + (0.5 + lk * 0.15) * landAlpha * P.lightsA + ")"; ectx.globalAlpha = 1;
          var la2 = lights[lk];
          for (var q = 0; q < la2.length; q += 2) ectx.fillRect(la2[q] - 0.9, la2[q + 1] - 0.9, 1.8, 1.8);
        }
      }

      // Schengen borders (clickable countries); the hovered one is filled
      var ringPath = function (r) {
        var open = false, allFront = true;
        ectx.beginPath();
        for (var k = 0; k < r.n; k++) {
          var x0 = r.xyz[k * 3], y0 = r.xyz[k * 3 + 1], z0 = r.xyz[k * 3 + 2];
          var x1 = x0 * cl - y0 * sl, y1 = x0 * sl + y0 * cl, pz = z0 * sp + x1 * cp;
          if (pz <= 0) { open = false; allFront = false; continue; }
          var px2 = cx + y1 * R, py2 = cy - (z0 * cp - x1 * sp) * R;
          if (!open) { ectx.moveTo(px2, py2); open = true; } else ectx.lineTo(px2, py2);
        }
        return allFront;
      };
      if (countries.length) {
        ectx.globalAlpha = landAlpha || 1;
        var tint = Math.max(0, Math.min(isDark() ? 0.16 : 0.1, (zoom - 1.8) * 0.06)); // land tint once the dots spread out
        for (var ci = 0; ci < countries.length; ci++) {
          var C = countries[ci], hot = C === hover;
          for (var ri = 0; ri < C.rings.length; ri++) {
            var front = ringPath(C.rings[ri]);
            if (front && (hot || tint > 0)) {
              ectx.closePath();
              ectx.fillStyle = hot ? "rgba(" + P.fill + "," + (isDark() ? 0.42 : 0.3) + ")" : P.tint + tint + ")"; ectx.fill();
            }
            ectx.strokeStyle = hot ? P.hot : P.border; ectx.lineWidth = hot ? 1.6 : 0.8; ectx.stroke();
          }
        }
      }

      // big cities glow
      ectx.globalCompositeOperation = P.blend;
      for (var c = 0; c < cities.length; c++) {
        var p = proj(vec(cities[c][0], cities[c][1]), 1);
        if (p[2] <= 0.05) continue;
        var nx = (p[0] - cx) / R, ny = -(p[1] - cy) / R, dday = nx * LV[0] + ny * LV[1] + p[2] * LV[2];
        var a2 = (dday < 0.2 ? 0.9 : 0.35) * Math.min(1, p[2] * 3) * (0.8 + 0.2 * Math.sin(at * 0.002 + c)) * (P.lightsA < 1 ? 0.45 : 1);
        var cg = ectx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 6);
        cg.addColorStop(0, "rgba(" + P.glow[0] + "," + a2 + ")"); cg.addColorStop(0.35, "rgba(" + P.glow[1] + "," + a2 * 0.55 + ")"); cg.addColorStop(1, "rgba(" + P.glow[2] + ",0)");
        ectx.globalAlpha = 1; ectx.fillStyle = cg; ectx.beginPath(); ectx.arc(p[0], p[1], 6, 0, 6.2832); ectx.fill();
      }
      ectx.globalCompositeOperation = "source-over";

      // flight paths
      for (var rI = 0; rI < routes.length; rI++) {
        var o = origins[rI % origins.length], A = vec(o[0], o[1]);
        var B = vec(routes[rI][0], routes[rI][1]);
        var dot = A[0] * B[0] + A[1] * B[1] + A[2] * B[2], om = Math.acos(Math.max(-1, Math.min(1, dot))), so = Math.sin(om);
        var lift = 0.04 + om * 0.18, steps = 48, pts = [];
        for (var k = 0; k <= steps; k++) {
          var f = k / steps, wa = Math.sin((1 - f) * om) / so, wb = Math.sin(f * om) / so;
          pts.push(proj([A[0] * wa + B[0] * wb, A[1] * wa + B[1] * wb, A[2] * wa + B[2] * wb], 1 + lift * Math.sin(Math.PI * f)));
        }
        ectx.globalAlpha = 0.22; ectx.strokeStyle = P.route; ectx.lineWidth = 1;
        ectx.beginPath(); var started = false;
        for (k = 0; k <= steps; k++) { if (pts[k][2] > -0.02) { if (!started) { ectx.moveTo(pts[k][0], pts[k][1]); started = true; } else ectx.lineTo(pts[k][0], pts[k][1]); } else started = false; }
        ectx.stroke();
        var cyc = 7000, ph = ((at + rI * 613) % cyc) / cyc, prog = Math.min(1, ph / 0.8);
        if (ph < 0.95) {
          var head = Math.floor(prog * steps), tail = Math.max(0, head - 12);
          for (k = tail; k < head; k++) {
            if (pts[k][2] <= -0.02 || pts[k + 1][2] <= -0.02) continue;
            ectx.globalAlpha = 0.9 * (k - tail + 1) / (head - tail + 1);
            ectx.strokeStyle = P.trail; ectx.lineWidth = 2;
            ectx.beginPath(); ectx.moveTo(pts[k][0], pts[k][1]); ectx.lineTo(pts[k + 1][0], pts[k + 1][1]); ectx.stroke();
          }
          var hp = pts[head];
          if (hp[2] > -0.02) {
            ectx.globalAlpha = 1; ectx.fillStyle = P.head;
            ectx.beginPath(); ectx.arc(hp[0], hp[1], 2.2, 0, 6.2832); ectx.fill();
            ectx.globalAlpha = 0.35; ectx.fillStyle = P.route;
            ectx.beginPath(); ectx.arc(hp[0], hp[1], 5, 0, 6.2832); ectx.fill();
          }
        }
      }
      for (var d2 = 0; d2 < routes.length; d2++) {
        var dp = proj(vec(routes[d2][0], routes[d2][1]), 1);
        if (dp[2] <= 0.05) continue;
        ectx.globalAlpha = 0.9; ectx.fillStyle = P.mark; ectx.beginPath(); ectx.arc(dp[0], dp[1], 1.8, 0, 6.2832); ectx.fill();
      }
      var ukPos = [];
      for (var oi = 0; oi < origins.length; oi++) {
        var L = proj(vec(origins[oi][0], origins[oi][1]), 1);
        ukPos.push(L);
        if (L[2] <= 0) continue;
        var pulse = ((at + oi * 700) % 2200) / 2200;
        ectx.globalAlpha = 0.8 * (1 - pulse); ectx.strokeStyle = P.mark; ectx.lineWidth = 1.5;
        ectx.beginPath(); ectx.arc(L[0], L[1], 3 + pulse * 13, 0, 6.2832); ectx.stroke();
        ectx.globalAlpha = 1; ectx.fillStyle = P.mark; ectx.beginPath(); ectx.arc(L[0], L[1], 3, 0, 6.2832); ectx.fill();
      }

      // labels: hovered country, UK cities, then Schengen countries (skipped when they would overlap)
      var boxes = [], fs = (narrow ? 10.5 : 11.5) * Math.min(1.3, 1 + (zoom - Z0) * 0.07);
      var place = function (txt, x, y, size, weight, color, align, alpha) {
        ectx.font = weight + " " + size + "px " + font;
        var tw = ectx.measureText(txt).width, x0 = align === "left" ? x : x - tw / 2, bx = [x0 - 3, y - size * 0.8, x0 + tw + 3, y + size * 0.35];
        if (bx[0] < 2 || bx[2] > w - 2 || bx[1] < 2 || bx[3] > h - 2) return false;
        for (var bi = 0; bi < boxes.length; bi++) {
          var o2 = boxes[bi];
          if (bx[0] < o2[2] && bx[2] > o2[0] && bx[1] < o2[3] && bx[3] > o2[1]) return false;
        }
        boxes.push(bx);
        ectx.globalAlpha = alpha; ectx.textAlign = align === "left" ? "left" : "center"; ectx.textBaseline = "alphabetic";
        ectx.lineJoin = "round"; ectx.lineWidth = 3.2; ectx.strokeStyle = P.halo; ectx.strokeText(txt, x, y);
        ectx.fillStyle = color; ectx.fillText(txt, x, y);
        return true;
      };
      var fade = function (z) { return Math.max(0, Math.min(1, (z - 0.28) * 5)) * (landAlpha || 1); };
      if (hover && !reduceMotion) {
        var hl = proj(hover.lv, 1);
        if (hl[2] > 0.1) place(nm(hover.n), hl[0], hl[1], fs + 2.5, "700", P.hot, "center", 1);
      }
      for (var u = 0; u < origins.length; u++) {
        var up = ukPos[u];
        if (up[2] > 0.28) place(nm(origins[u][2]), up[0] + 7, up[1] + 4, fs, "700", P.city, "left", fade(up[2]));
      }
      for (var cn = 0; cn < countries.length; cn++) {
        var CC = countries[cn];
        if (CC === hover) continue;
        var lp = proj(CC.lv, 1);
        if (lp[2] > 0.28) place(nm(CC.n), lp[0], lp[1] + 4, CC.tiny ? fs - 1.5 : fs, "600", P.label, "center", fade(lp[2]) * 0.92);
      }
      if (zoom > 2.2) { // capital cities appear as you zoom in
        var ca = Math.min(1, (zoom - 2.2) * 2);
        for (var cc = 0; cc < countries.length; cc++) {
          var K = countries[cc].cap;
          if (!K) continue;
          var kp = proj(K.v, 1);
          if (kp[2] <= 0.28 || kp[0] < 0 || kp[0] > w || kp[1] < 0 || kp[1] > h) continue;
          if (place(nm(K.n), kp[0] + 6, kp[1] + 3.5, fs - 1, "500", P.label, "left", fade(kp[2]) * 0.8 * ca)) {
            ectx.globalAlpha = ca; ectx.fillStyle = P.label; ectx.beginPath(); ectx.arc(kp[0], kp[1], 2, 0, 6.2832); ectx.fill();
          }
        }
      }
      ectx.globalAlpha = 1;
    };

    // ---- interaction ----
    function unprojectAt(mx, my, Rr, ccx, ccy, lon0, lat0) {
      var x = (mx - ccx) / Rr, y = -(my - ccy) / Rr, rr = x * x + y * y;
      if (rr >= 1) return null;
      var pz = Math.sqrt(1 - rr), sp = Math.sin(lat0), cp = Math.cos(lat0);
      var y1 = x, x1 = -y * sp + pz * cp, z = y * cp + pz * sp;
      var gx = x1 * Math.cos(lon0) - y1 * Math.sin(lon0), gy = x1 * Math.sin(lon0) + y1 * Math.cos(lon0);
      return [Math.asin(Math.max(-1, Math.min(1, z))) * R2D, Math.atan2(gy, gx) * R2D];
    }
    var unproject = function (mx, my) { return unprojectAt(mx, my, V.R, V.cx, V.cy, V.lon0, V.lat0); };
    var inRing = function (r, la, lo) {
      var ins = false, ll = r.ll;
      for (var i = 0, j = r.n - 1; i < r.n; j = i++) {
        var yi = ll[i * 2], xi = ll[i * 2 + 1], yj = ll[j * 2], xj = ll[j * 2 + 1];
        if ((yi > la) !== (yj > la) && lo < (xj - xi) * (la - yi) / (yj - yi) + xi) ins = !ins;
      }
      return ins;
    };
    var screenOf = function (v) {
      var cl = Math.cos(-V.lon0), sl = Math.sin(-V.lon0), sp = Math.sin(V.lat0), cp = Math.cos(V.lat0);
      var x1 = v[0] * cl - v[1] * sl, y1 = v[0] * sl + v[1] * cl;
      return [V.cx + y1 * V.R, V.cy - (v[2] * cp - x1 * sp) * V.R, v[2] * sp + x1 * cp];
    };
    var pick = function (mx, my) {
      if (!countries.length) return null;
      for (var i = 0; i < countries.length; i++) { // tiny countries: a friendly hit radius around the label point
        var c = countries[i];
        if (!c.tiny) continue;
        var s = screenOf(c.lv);
        if (s[2] > 0.1 && Math.hypot(s[0] - mx, s[1] - my) < 11) return c;
      }
      var ll = unproject(mx, my);
      if (!ll) return null;
      for (var k = 0; k < countries.length; k++) {
        var C = countries[k], b = C.bb;
        if (ll[0] < b[0] || ll[0] > b[2] || ll[1] < b[1] || ll[1] > b[3]) continue;
        for (var r = 0; r < C.rings.length; r++) if (inRing(C.rings[r], ll[0], ll[1])) return C;
      }
      return null;
    };
    var prefetched = {};
    // ---- country info card ----
    var UK = [["London", 51.5, -0.13], ["Manchester", 53.48, -2.24], ["Birmingham", 52.48, -1.9], ["Edinburgh", 55.95, -3.19]];
    var km = function (a, b, c, d) {
      var p1 = a * D2R, p2 = c * D2R, dl = (d - b) * D2R;
      return 6371 * Math.acos(Math.min(1, Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(dl)));
    };
    var esc = function (t) { return String(t).replace(/[&<>"]/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]; }); };
    var fmtKm = function (k) { return (Math.round(k / 10) * 10).toLocaleString("en-GB") + " km"; };
    var fmtFly = function (k) { // rough airline block time: cruise ~850 km/h plus taxi, climb and descent
      var m = Math.round((k / 850 * 60 + 45) / 5) * 5, hh = Math.floor(m / 60), mm = m % 60;
      return "~" + (hh ? hh + "h " + (mm < 10 ? "0" : "") + mm + "m" : mm + "m");
    };
    var fmtN = function (n) { return n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : (n / 1e3).toFixed(n < 1e5 ? 1 : 0) + "k"; };
    var cardFor = function (c) {
      var x = c.x || {}, h = [];
      h.push('<button type="button" class="gt-x" aria-label="Close">×</button>');
      h.push('<div class="gt-head"><b>' + esc(nm(c.n)) + '</b>' + (c.cap && c.cap.n !== c.n ? '<span>' + esc(ui("g_capital", "Capital")) + ' · ' + esc(nm(c.cap.n)) + '</span>' : '') + '</div>');
      var st = [];
      if (x.vis) st.push('<div><span>' + esc(ui(x.visDubai ? "g_dubai" : "g_visitors", x.visDubai ? "Dubai visitors / yr" : "Visitors / yr")) + '</span><strong>' + (x.vis >= 10 ? x.vis.toFixed(1) : x.vis.toFixed(1)) + 'M</strong></div>');
      if (x.app) st.push('<div><span>' + esc(ui("g_apps", "Applications")) + '</span><strong>' + fmtN(x.app) + '</strong></div>');
      if (x.ref) st.push('<div><span>' + esc(ui("g_refused", "Refused")) + '</span><strong>' + x.ref.toFixed(1) + '%</strong><i class="gt-bar"><i style="width:' + Math.min(100, x.ref / 40 * 100).toFixed(0) + '%"></i></i></div>');
      if (x.viaCH) st.push('<div class="gt-wide"><span>' + esc(ui("g_apps", "Visa applications")) + '</span><strong>' + esc(ui("g_viaCH", "Visas issued by Switzerland")) + '</strong></div>');
      if (st.length) h.push('<div class="gt-stats">' + st.join("") + '</div>');
      if (x.hub) {
        var li = UK.map(function (u) { var d = km(u[1], u[2], x.hub[0], x.hub[1]); return '<li><b>' + esc(nm(u[0])) + '</b><em dir="ltr">' + fmtKm(d) + '</em><small dir="ltr">' + fmtFly(d) + '</small></li>'; });
        h.push('<div class="gt-dist"><p>' + esc(ui("g_from", "From the UK to")) + ' <b>' + esc(nm(x.hub[2])) + '</b></p><ul>' + li.join("") + '</ul></div>');
      }
      var row = function (k, en, arr) { return arr && arr.length ? '<dt>' + esc(ui(k, en)) + '</dt><dd>' + arr.map(function (v) { return '<bdi>' + esc(nm(v)) + '</bdi>'; }).join(" · ") + '</dd>' : ''; };
      h.push('<dl class="gt-info">' + row("g_cities", "Cities", x.ci) + row("g_sights", "Must-see", x.si) +
        (x.nb ? (x.nb.length ? row("g_borders", "Borders", x.nb) : '<dt>' + esc(ui("g_borders", "Borders")) + '</dt><dd>' + esc(ui("g_island", "Island nation")) + '</dd>') : '') + '</dl>');
      h.push('<div class="gt-foot"><span class="gt-cta">' + esc(ui("map", "View visa guide")) + ' <i>→</i></span><small class="gt-tap">' + esc(ui("g_tap", "Tap again to open")) + '</small></div>');
      h.push('<p class="gt-src">' + esc(ui("g_src", "Sources: UN Tourism & European Commission (2024)")) + '</p>');
      return h.join("");
    };
    var tipFor = null, pinned = null, pinT = 0;
    var placeTip = function (mx, my) {
      var tw = tip.offsetWidth || 300, th = tip.offsetHeight || 340;
      var tx = mx > EW * 0.62 || mx + 24 + tw > EW - 12 ? mx - 24 - tw : mx + 24;
      tx = Math.max(12, Math.min(EW - tw - 12, tx));
      var ty = Math.max(12, Math.min(EH - th - 12, my - th * 0.35));
      tip.style.transform = "translate(" + Math.round(tx) + "px," + Math.round(ty) + "px)";
    };
    var setHover = function (c, mx, my) {
      if (pinned && c !== pinned) return;
      hover = c;
      earth.classList.toggle("over", !!c);
      if (!tip) return;
      if (c) {
        if (tipFor !== c) { // new country: rebuild the card and anchor it here
          tipFor = c; tip.innerHTML = cardFor(c); tip.classList.remove("on");
          if (mx > -900) placeTip(mx, my);
          void tip.offsetWidth; tip.classList.add("on");
        }
        if (!prefetched[c.s]) {
          prefetched[c.s] = 1;
          var l = document.createElement("link"); l.rel = "prefetch"; l.href = c.s; document.head.appendChild(l);
        }
      } else { tipFor = null; tip.classList.remove("on"); }
    };
    var pin = function (c) { // touch screens: first tap shows the card, second tap (or the card) opens the page
      pinned = null; setHover(c, -999, -999);
      pinned = c; pinT = performance.now(); tip.classList.add("pinned", "on");
    };
    var unpin = function () { pinned = null; if (tip) tip.classList.remove("pinned"); setHover(null); };
    if (tip) tip.addEventListener("click", function (e) { if (e.target.closest(".gt-x")) { e.stopPropagation(); unpin(); return; } if (pinned && performance.now() - pinT > 450) { var c = pinned; unpin(); go(c); } });
    var go = function (c) {
      if (fly) return;
      pinned = null; setHover(c, -999, -999); if (tip) tip.classList.remove("on", "pinned");
      if (reduceMotion) { window.location.href = c.s; return; }
      var cur = baseLon() + uLon, tLon = c.lon - baseLon();
      tLon = uLon + ((((c.lon - cur) % 360) + 540) % 360 - 180);
      fly = { c: c, t0: performance.now(), d: 1100, a: [uLon, uLat, zoom], b: [tLon, c.lat - baseLat(), Math.max(zoom * 1.25, EW < 860 ? 2.6 : 3.2)] };
      anchor = null;
      vLon = vLat = 0;
    };
    var used = function () { if (hint) hint.classList.add("used"); };
    var pos = function (e) { var r = earth.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    var sx = 0, sy = 0, px = 0, py = 0, pt = 0;
    var touches = {}, pinch = null;
    var zoomTo = function (z, mx, my) {
      zT = Math.max(Z0, Math.min(ZMAX, z));
      var ll = mx == null ? null : unproject(mx, my);
      anchor = ll ? [mx, my, ll[0], ll[1]] : null;
      lastMove = performance.now(); used();
    };
    earth.addEventListener("wheel", function (e) {
      if (fly) return;
      var p = pos(e), dy = e.deltaY * (e.deltaMode === 1 ? 33 : 1);
      if (dy > 0 && zT <= Z0 + 0.001) return;              // fully zoomed out: the page scrolls as normal
      if (dy < 0 && !unproject(p[0], p[1])) return;        // off the globe: don't trap the scroll
      e.preventDefault();
      if ((dy < 0 && zT >= ZMAX) || dy === 0) return;
      zoomTo(zT * Math.max(0.7, Math.min(1.45, Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0022)))), p[0], p[1]);
    }, { passive: false });
    earth.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") {
        touches[e.pointerId] = pos(e);
        var ids = Object.keys(touches);
        if (ids.length === 2) {
          var a = touches[ids[0]], b2 = touches[ids[1]];
          pinch = { d: Math.hypot(a[0] - b2[0], a[1] - b2[1]) || 1, z: zT };
          dragging = false; moved = true; vLon = vLat = 0;
          return;
        }
      }
      if (fly || e.button > 0) return;
      var p = pos(e); sx = px = p[0]; sy = py = p[1]; pt = performance.now();
      dragging = true; moved = false; vLon = vLat = 0; lastMove = pt;
      try { earth.setPointerCapture(e.pointerId); } catch (err) {}
    });
    earth.addEventListener("pointermove", function (e) {
      var p = pos(e), now = performance.now();
      if (e.pointerType === "touch" && touches[e.pointerId]) touches[e.pointerId] = p;
      if (pinch) {
        var ids = Object.keys(touches);
        if (ids.length >= 2) {
          var a = touches[ids[0]], b2 = touches[ids[1]];
          zoomTo(pinch.z * Math.hypot(a[0] - b2[0], a[1] - b2[1]) / pinch.d, (a[0] + b2[0]) / 2, (a[1] + b2[1]) / 2);
        }
        return;
      }
      if (dragging) {
        var dx = p[0] - px, dy = p[1] - py, k = R2D / V.R, dtm = Math.max(8, now - pt);
        if (Math.hypot(p[0] - sx, p[1] - sy) > 5) { if (!moved) { moved = true; earth.classList.add("grabbing"); setHover(null); used(); } }
        if (moved) {
          uLon -= dx * k; uLat += dy * k; clampLat();
          vLon = -dx * k / dtm; vLat = dy * k / dtm;
        }
        px = p[0]; py = p[1]; pt = now; lastMove = now;
      } else if (e.pointerType === "mouse" && !fly) {
        var c = pick(p[0], p[1]);
        if (c) lastMove = now;
        setHover(c, p[0], p[1]);
      }
    });
    var end = function (e, cancel) {
      if (!dragging) return;
      dragging = false; earth.classList.remove("grabbing");
      if (performance.now() - pt > 80) { vLon = vLat = 0; } // held still before releasing: no fling
      if (!moved && !cancel) {
        var p = pos(e), c = pick(p[0], p[1]);
        var touchUI = e.pointerType !== "mouse" || window.matchMedia("(hover: none)").matches;
        if (!touchUI) { if (c) { used(); go(c); } }
        else if (c && c === pinned) { used(); unpin(); go(c); }
        else if (c) { used(); pin(c); }
        else unpin();
      }
    };
    var lift = function (e) { delete touches[e.pointerId]; if (Object.keys(touches).length < 2) pinch = null; };
    earth.addEventListener("pointerup", function (e) { lift(e); end(e, false); });
    earth.addEventListener("pointercancel", function (e) { lift(e); end(e, true); });
    var zc = hero.querySelector(".globe-zoom");
    if (zc) zc.addEventListener("click", function (e) {
      var bt = e.target.closest("button");
      if (!bt || fly) return;
      var z = bt.getAttribute("data-z");
      if (z === "in") zoomTo(zT * 1.7);
      else if (z === "out") zoomTo(zT / 1.7);
      else { anchor = null; vLon = vLat = 0; fly = { t0: performance.now(), d: 900, a: [uLon, uLat, zoom], b: [uLon - wrap180(uLon), 0, Z0] }; }
    });
    earth.addEventListener("pointerleave", function (e) { if (!dragging && e.pointerType === "mouse") setHover(null); });
    window.addEventListener("pageshow", function (e) { // back button: restore the page
      if (e.persisted) { document.documentElement.classList.remove("globe-leaving"); fly = null; zoom = zT = Z0; setHover(null); }
    });

    var eRun = true, eRaf;
    var eLoop = function (t) { drawEarth(t); if (eRun) eRaf = requestAnimationFrame(eLoop); };
    eRaf = requestAnimationFrame(eLoop);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        var vis = en[0].isIntersecting;
        if (vis && !eRun) { eRun = true; lastT = 0; eRaf = requestAnimationFrame(eLoop); }
        if (!vis) { eRun = false; cancelAnimationFrame(eRaf); }
      }).observe(earth);
    }
  }

  // Light / dark switch (remembers the choice)
  var themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var cur = root.getAttribute("data-theme");
      var isDark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.classList.add("theme-anim");
      root.setAttribute("data-theme", next);
      setTimeout(function () { root.classList.remove("theme-anim"); }, 500);
      try { localStorage.setItem("tv-theme", next); } catch (e) {}
      document.dispatchEvent(new Event("themechange"));
    });
  }

  // Scroll progress bar + back-to-top
  var bar = document.createElement("div"); bar.className = "progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var top = document.createElement("button"); top.className = "to-top"; top.type = "button";
  top.setAttribute("aria-label", "Back to top");
  top.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 15.5v-2l-8-5V3.6a1.6 1.6 0 0 0-3.2 0V8.5l-8 5v2l8-2.5V18l-2.2 1.6V21l3.8-1.1 3.8 1.1v-1.4L13 18v-5z" transform="rotate(45 12 12)"/></svg>';
  document.body.appendChild(top);
  top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });
  var pp = document.createElement("span"); pp.className = "progress-plane"; pp.setAttribute("aria-hidden", "true");
  pp.innerHTML = '<svg width="18" height="18" viewBox="-26 -13 44 26"><path fill="currentColor" d="M16 0 L-8 -2.4 L-13 -11 L-16 -11 L-12 -2 L-19 -1.5 L-22 -6 L-24.5 -6 L-22.5 0 L-24.5 6 L-22 6 L-19 1.5 L-12 2 L-16 11 L-13 11 L-8 2.4 Z"/></svg>';
  document.body.appendChild(pp);
  var ticking = false;
  var onScroll2 = function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var pct = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
    bar.style.transform = "scaleX(" + pct + ")";
    pp.style.transform = "translateX(" + Math.max(0, pct * window.innerWidth - 16) + "px)";
    pp.classList.toggle("on", pct > 0.005 && pct < 0.995);
    top.classList.toggle("show", window.scrollY > 600);
    ticking = false;
  };
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll2); } }, { passive: true });
  onScroll2();

  // Reveal on scroll, both when scrolling down and back up.
  // Only elements outside the first screen start hidden, so the page is complete on load.
  if (!reduceMotion && "IntersectionObserver" in window) {
    var sel = ".package, .package-copy, .grid > *, .cgrid > *, .steps li, .reviews > *, .checklist li, .faq details, .section-head, .quick-facts .fact, .content section > h2, .cta-band .wrap > *, .contact-grid > *";
    var els = Array.prototype.slice.call(document.querySelectorAll(sel));
    var vh = window.innerHeight;
    els.forEach(function (el) {
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--d", (idx % 6) * 70 + "ms");
      el.classList.add("rv");
      var r = el.getBoundingClientRect();
      if (r.top > vh || r.bottom < 0) el.classList.add("rv-hide");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var el = en.target;
        if (en.isIntersecting) {
          el.classList.remove("rv-hide", "from-up");
          el.classList.add("rv-in");
        } else {
          // left through the top: come back down from above; left through the bottom: rise again
          el.classList.toggle("from-up", en.boundingClientRect.top < 0);
          el.classList.add("rv-hide");
          el.classList.remove("rv-in");
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Highlight the section being read in "On this page"
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { var id = a.getAttribute("href").slice(1); var sec = document.getElementById(id); if (sec) map[id] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("active"); });
          var a = map[en.target.id]; if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  // Language switcher: swaps every tagged text for its translation, with a soft fade.
  (function () {
    var root = document.documentElement;
    var wrap = document.querySelector(".lang");
    var LANGS = {
      en: {}, fr: {}, tr: {},
      ur: { dir: "rtl", font: "Noto+Naskh+Arabic:wght@400;600;700" },
      ar: { dir: "rtl", font: "Noto+Naskh+Arabic:wght@400;600;700" },
      hi: { font: "Noto+Sans+Devanagari:wght@400;600;700" },
      bn: { font: "Noto+Sans+Bengali:wght@400;600;700" }
    };
    var cache = {}, current = "en", fontsLoaded = {};
    var saved = "en";
    try { saved = localStorage.getItem("tv-lang") || "en"; } catch (e) {}
    if (!LANGS[saved]) saved = "en";

    var loadFont = function (code) {
      var f = LANGS[code].font;
      if (!f || fontsLoaded[f]) return;
      fontsLoaded[f] = true;
      var l = document.createElement("link");
      l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=" + f + "&display=swap";
      document.head.appendChild(l);
    };
    var getDict = function (code) {
      if (code === "en") return Promise.resolve(null);
      if (cache[code]) return Promise.resolve(cache[code]);
      return fetch(ASSET + "i18n/" + code + ".json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { cache[code] = d; return d; });
    };
    var fill = function (text, el, dict) {
      var iv = el.getAttribute("data-iv");
      if (!iv) return text;
      var vals; try { vals = JSON.parse(iv); } catch (e) { return text; }
      return text.replace(/\{(\w+)\}/g, function (m, k) {
        var v = vals[k]; if (v == null) return m;
        return (dict && dict._names && dict._names[v]) || v;
      });
    };
    var ATTRS = ["placeholder", "aria-label", "title"];
    var swap = function (dict) {
      document.querySelectorAll("[data-i]").forEach(function (el) {
        if (el.__orig == null) el.__orig = el.innerHTML;
        var t = dict && dict[el.getAttribute("data-i")];
        el.innerHTML = t ? fill(t, el, dict) : el.__orig;
      });
      ATTRS.forEach(function (a) {
        document.querySelectorAll("[data-i-" + a + "]").forEach(function (el) {
          var store = "__orig_" + a;
          if (el[store] == null) el[store] = el.getAttribute(a);
          var t = dict && dict[el.getAttribute("data-i-" + a)];
          el.setAttribute(a, t ? fill(t, el, dict) : el[store]);
        });
      });
    };
    var note = function (code, dict) {
      var old = document.querySelector(".i18n-note");
      if (old) old.remove();
      if (code === "en" || !dict || !dict._ui) return;
      var n = document.createElement("div");
      n.className = "i18n-note"; n.setAttribute("role", "note");
      var policy = document.querySelector("[data-no-i18n]");
      var s = document.createElement("span");
      s.textContent = policy ? (policy.getAttribute("data-no-i18n") === "tool" ? (dict._ui.tool || dict._ui.policy) : dict._ui.policy) : dict._ui.note;
      var b = document.createElement("button");
      b.type = "button"; b.textContent = "English"; b.setAttribute("lang", "en");
      b.addEventListener("click", function () { setLang("en", true); });
      n.appendChild(s); n.appendChild(b);
      var main = document.querySelector("main");
      if (main) main.parentNode.insertBefore(n, main);
    };
    var mark = function (code, dict) {
      root.setAttribute("lang", code === "en" ? "en-GB" : code);
      root.setAttribute("dir", LANGS[code].dir || "ltr");
      var codeEl = document.querySelector(".lang-code");
      if (codeEl) codeEl.textContent = code.toUpperCase();
      document.querySelectorAll(".lang-menu [data-lang]").forEach(function (b) {
        b.setAttribute("aria-checked", b.getAttribute("data-lang") === code ? "true" : "false");
      });
      var title = document.querySelector(".lang-title");
      if (title) title.textContent = (dict && dict._ui && dict._ui.language) || "Language";
      var btn = document.querySelector(".lang-btn");
      if (btn) btn.setAttribute("aria-label", (dict && dict._ui && dict._ui.change) || "Change language");
    };
    var setLang = function (code, animate) {
      if (!LANGS[code]) code = "en";
      loadFont(code);
      return getDict(code).then(function (dict) {
        var apply = function () {
          swap(dict); mark(code, dict); note(code, dict); current = code; window.tvDict = code === "en" ? null : dict;
          try { localStorage.setItem("tv-lang", code); } catch (e) {}
          document.dispatchEvent(new Event("languagechange"));
        };
        if (animate && !reduceMotion) {
          root.classList.add("i18n-switching");
          setTimeout(function () { apply(); requestAnimationFrame(function () { root.classList.remove("i18n-switching"); }); }, 280);
        } else apply();
      }).catch(function () {
        root.classList.remove("i18n-switching");
      }).then(function () { root.classList.remove("i18n-pending"); });
    };

    if (wrap) {
      var btn = wrap.querySelector(".lang-btn");
      var open = function (on) {
        wrap.classList.toggle("open", on);
        btn.setAttribute("aria-expanded", on ? "true" : "false");
        if (on) { var c = wrap.querySelector('[aria-checked="true"]'); if (c) setTimeout(function () { c.focus(); }, 60); }
      };
      btn.addEventListener("click", function (e) { e.stopPropagation(); open(!wrap.classList.contains("open")); });
      wrap.querySelectorAll(".lang-menu [data-lang]").forEach(function (b) {
        b.addEventListener("click", function () {
          open(false);
          var code = b.getAttribute("data-lang");
          if (code !== current) setLang(code, true);
        });
      });
      document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) open(false); });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && wrap.classList.contains("open")) { open(false); btn.focus(); }
      });
    }
    if (saved !== "en") {
      setLang(saved, false);
      setTimeout(function () { root.classList.remove("i18n-pending"); }, 2500);
    } else {
      root.classList.remove("i18n-pending");
    }
  })();

  // ---- TravelVista chat assistant ----
  // Answers short questions from the site's own facts (no AI service, no API key, no running cost).
  // Anything it can't answer is handed to the team on WhatsApp. Texts are translated via _bot in the language files.
  (function () {
    var EN = {
      title: "TravelVista assistant", status: "Online · instant answers", open: "Chat with us", close: "Close chat",
      ph: "Type your question…", send: "Send", teaser: "Hi! Questions about a Schengen visa? Ask me.", you: "You",
      greet: "Hello! 👋 I'm the TravelVista assistant. I can answer quick questions about our services, fees and how to reach us. What would you like to know?",
      hi: "Hello! How can I help? Pick a topic below or type your question.",
      chips: { apply: "How to apply", package: "£89 package", docs: "Documents", fees: "Visa fees", time: "Processing time", which: "Which country?", contact: "Contact & hours", human: "Talk to a person" },
      a: {
        package: "Our <b>Schengen visa package is £89 per applicant</b>. We complete your application form, write your cover letter, prepare your travel plan, check every document and book your appointment at the earliest available date, for all 29 Schengen countries. Single or multiple-entry applications (the embassy decides what is granted).<br>Not included: the official visa fee and the visa centre's service fee. {link:schengen-visa.html#package|See the package}",
        fees: "The official Schengen visa fee is <b>€90 for adults</b>, <b>€45 for children aged 6 to 11</b> and <b>free under 6</b>. The visa centre (TLScontact, VFS Global or BLS International) charges its own service fee. Our service fee is £89 per applicant. {link:schengen-visa.html#fees|Fee details}",
        docs: "Usually you need: a passport issued in the last 10 years (valid 3+ months after you leave, 2 blank pages), proof of your UK status (eVisa share code or residence permit), bank statements for the last 3 months, a job or study letter, flight and hotel bookings, travel insurance with at least €30,000 cover, and a recent photo. Send us copies and we'll tell you exactly what your case needs. {link:schengen-visa.html#documents|Full checklist}",
        time: "You can apply up to <b>6 months</b> and at least <b>15 days</b> before you travel. Most decisions take about <b>15 days</b>, sometimes up to 45. Appointments go quickly from May to September, so start early. {link:schengen-visa.html#timing|More on timing}",
        which: "Apply to the country where you'll spend the <b>most nights</b>. If your nights are equal, apply to the country you'll <b>enter first</b>. Not sure? Send us your itinerary and we'll check it free. {link:schengen-visa.html#which|Read more}",
        who: "<b>British citizens</b> don't need a visa for short trips (up to 90 days in any 180). Most other passports do need a Schengen visa even if you live in the UK, for example Indian, Pakistani, Nigerian, Bangladeshi or Chinese passports. Tell us your passport and we'll confirm.",
        appoint: "We book your appointment at the correct visa centre and send you the date and time. Visa centres release slots at different times, so availability changes every day. We book the earliest suitable date for you.",
        refusal: "No one can guarantee a visa: the embassy or consulate makes every decision. We make sure your application is complete and accurate. If a visa is refused, we review the refusal letter with you <b>free of charge</b> and explain your options.",
        refund: "Our service fee is refunded <b>100%</b> if you cancel before we start work, <b>50%</b> after we've reviewed your documents but before your form is completed, and not after your form is completed or your appointment is booked. Government and visa centre fees aren't refundable by us. {link:refund-policy.html|Refund policy}",
        contact: "📞 {tel} (call or WhatsApp)<br>✉️ {mail}<br>📍 128 Kingsway, London WC2B 6NH<br><b>Office hours:</b> Mon–Fri 9:00–19:00 · Sat 10:00–17:00 · Sun 11:00–15:00. WhatsApp messages any time; we reply within 2 hours in office hours. {link:contact.html|Contact page}",
        other: "Besides Schengen visas, we help with visas for the <b>USA</b>, <b>Canada</b>, <b>Dubai (UAE)</b> and <b>Turkey</b>, and we can book flights and hotels for your trip. {link:holidays.html|Flights and hotels}",
        human: "Of course! Our team is on WhatsApp and usually replies within 2 hours in office hours. {wa|Chat on WhatsApp}",
        thanks: "You're welcome! Anything else I can help with?",
        fallback: "I'm not sure about that one, but our team can help. Message us on WhatsApp and we'll reply within 2 hours in office hours. {wa|Chat on WhatsApp}",
        country: "<b>{name}</b>: we prepare your complete Schengen visa file and book your appointment. {link:{page}|{name} visa guide}",
        countryOther: "<b>{name}</b>: we help with your {name} visa, from checking what you need to preparing your application. {link:{page}|{name} visa guide}",
        centre: "In the UK, {name} visa appointments are handled by <b>{centre}</b>."
      }
    };
    // words that point to each topic, in all seven languages (lower case)
    var KW = {
      package: ["package", "price", "cost", "how much", "charge", "your fee", "service fee", "£89", "89", "offer", "prix", "tarif", "combien", "forfait", "fiyat", "paket", "ne kadar", "قیمت", "پیکج", "کتنے", "کتنا خرچ", "سعر", "تكلفة", "كم", "باقة", "कीमत", "पैकेज", "कितना", "দাম", "প্যাকেজ", "কত টাকা", "খরচ"],
      fees: ["visa fee", "embassy fee", "government fee", "official fee", "fee", "fees", "€", "euro", "child", "children", "kids", "frais", "enfant", "vize ücreti", "ücret", "çocuk", "ویزا فیس", "فیس", "بچ", "رسوم", "طفل", "أطفال", "शुल्क", "फीस", "बच्च", "ফি", "শিশু"],
      docs: ["document", "paper", "checklist", "require", "what do i need", "bank statement", "passport copy", "insurance", "photo", "pièce", "justificatif", "belge", "evrak", "دستاویز", "کاغذات", "مستندات", "وثائق", "دستاویزات", "दस्तावेज़", "कागज", "কাগজ", "ডকুমেন্ট", "নথি"],
      time: ["how long", "processing", "time", "days", "weeks", "how early", "decision", "wait", "when should", "délai", "combien de temps", "süre", "kaç gün", "ne zaman", "کتنا وقت", "کتنے دن", "مدة", "كم يوم", "متى", "कितना समय", "कितने दिन", "কত দিন", "সময়"],
      which: ["which country", "where to apply", "where should i apply", "two countries", "several countries", "multiple countries", "main destination", "quel pays", "hangi ülke", "کون سا ملک", "کس ملک", "أي دولة", "أي بلد", "कौन सा देश", "किस देश", "কোন দেশ"],
      who: ["british", "do i need a visa", "need a visa", "uk citizen", "nationality", "my passport", "indian passport", "pakistani", "bangladeshi", "nigerian", "eligible", "besoin d'un visa", "vize gerekiyor", "ویزا چاہیے", "ضرورت", "هل أحتاج", "क्या मुझे वीज़ा", "ভিসা লাগবে"],
      appoint: ["appointment", "slot", "booking date", "book an appointment", "available date", "tls", "vfs", "bls", "rendez-vous", "rdv", "randevu", "اپائنٹمنٹ", "موعد", "अपॉइंटमेंट", "অ্যাপয়েন্টমেন্ট"],
      refusal: ["refuse", "refused", "reject", "denied", "guarantee", "chance", "success rate", "refus", "garantie", "ret", "reddedil", "garanti", "مسترد", "ریجیکٹ", "گارنٹی", "رفض", "ضمان", "अस्वीकार", "रिजेक्ट", "गारंटी", "প্রত্যাখ্যান", "রিজেক্ট", "গ্যারান্টি"],
      refund: ["refund", "money back", "cancel", "rembours", "annul", "iade", "iptal", "ریفنڈ", "واپس", "استرداد", "إلغاء", "रिफंड", "वापस", "ফেরত", "রিফান্ড"],
      contact: ["contact", "phone", "call", "number", "email", "e-mail", "address", "office", "where are you", "location", "hours", "open", "timing", "reach", "visit you", "téléphone", "adresse", "horaire", "iletişim", "telefon", "adres", "saat", "رابطہ", "فون", "پتہ", "ایڈریس", "دفتر", "اتصال", "هاتف", "عنوان", "ساعات", "مكتب", "संपर्क", "फोन", "पता", "ऑफिस", "যোগাযোগ", "ফোন", "ঠিকানা", "অফিস"],
      other: ["other visa", "flight", "hotel", "holiday", "ticket", "vol", "hôtel", "uçuş", "otel", "ٹکٹ", "ہوٹل", "فلائٹ", "رحلة", "فندق", "टिकट", "होटल", "ফ্লাইট", "হোটেল"],
      human: ["human", "person", "agent", "staff", "talk to", "speak to", "someone", "whatsapp", "call me", "conseiller", "temsilci", "بات کر", "انسان", "موظف", "شخص", "बात कर", "কথা বল"],
      thanks: ["thank", "thx", "cheers", "merci", "teşekkür", "sağol", "شکریہ", "شكرا", "धन्यवाद", "शुक्रिया", "ধন্যবাদ"],
      hi: ["hello", "hi", "hey", "salam", "assalam", "good morning", "bonjour", "merhaba", "سلام", "مرحبا", "नमस्ते", "হ্যালো", "নমস্কার"]
    };
    // ---- more everyday questions ----
    var MORE = {
      apply: { kw: ["how can i apply", "how do i apply", "how to apply", "apply", "application process", "process", "procedure", "steps", "how does it work", "how it works", "get started", "start", "begin", "what should i do", "comment postuler", "procédure", "étapes", "nasıl başvur", "başvuru", "süreç", "adım", "اپلائی", "کیسے اپلائی", "درخواست کیسے", "طریقہ", "كيف أقدم", "التقديم", "خطوات", "إجراءات", "आवेदन कैसे", "प्रक्रिया", "अप्लाई", "কীভাবে আবেদন", "প্রক্রিয়া", "আবেদন করব"],
        a: "It's simple:<br><b>1.</b> Send us your query on WhatsApp with your passport, UK status and travel dates.<br><b>2.</b> Send copies of your documents. We prepare your complete file: form, cover letter and travel plan.<br><b>3.</b> We book your appointment at the visa centre.<br><b>4.</b> You attend with your file and give fingerprints. The embassy makes the decision.<br>Your first consultation is free. {wa|Start on WhatsApp}" },
      services: { kw: ["what do you do", "services", "what services", "what can you do", "about you", "who are you", "about travelvista", "your company", "services proposés", "hizmet", "خدمات", "سروس", "آپ کیا کرتے", "ماذا تفعلون", "सेवा", "आप क्या करते", "সেবা", "আপনারা কী করেন"],
        a: "TravelVista prepares visa applications and books appointments for people living in the UK: Schengen visas for all 29 countries (our £89 package), help with USA, Canada, Dubai and Turkey visas, and flight and hotel bookings. {link:schengen-visa.html|Schengen visa guide}" },
      consult: { kw: ["free consultation", "consultation", "is it free", "advice", "check my case", "my case", "consultation gratuite", "gratuit", "ücretsiz", "danışma", "مفت", "مشورہ", "استشارة", "مجاني", "मुफ़्त", "सलाह", "বিনামূল্যে", "পরামর্শ"],
        a: "Yes, your <b>first consultation is free</b>. Tell us your passport, UK status and where you want to go, and we'll reply within 2 hours in office hours. {wa|Free consultation on WhatsApp}" },
      biometrics: { kw: ["fingerprint", "biometric", "in person", "attend", "go to the centre", "go myself", "interview", "empreintes", "en personne", "parmak izi", "şahsen", "فنگر پرنٹ", "انگلیوں", "خود جانا", "بصمات", "بصم", "حضور شخصي", "شخصيًا", "फिंगरप्रिंट", "खुद जाना", "আঙুলের ছাপ", "নিজে যেতে"],
        a: "Yes, most applicants go to the visa centre <b>in person</b> to hand in their documents and give fingerprints and a photo. Children under 12 don't give fingerprints. We prepare your file in the order the centre expects, so the appointment goes quickly." },
      stay: { kw: ["how long can i stay", "90 days", "validity", "valid for", "how long is the visa", "multiple entry", "single entry", "multi entry", "duration", "durée", "combien de jours", "kaç gün kal", "geçerlilik", "کتنے دن رہ", "مدت", "میعاد", "مدة الإقامة", "صلاحية", "कितने दिन रह", "वैधता", "কত দিন থাক", "মেয়াদ"],
        a: "A Schengen short-stay visa lets you stay up to <b>90 days in any 180-day period</b>. The embassy decides how long the visa is valid and whether it's single or multiple entry. First visas are often limited to your trip dates." },
      work: { kw: ["work in", "working in", "work visa", "work permit", "study in", "student visa", "long stay", "long-stay", "live in europe", "move to", "national visa", "travailler", "long séjour", "çalışma vizesi", "uzun süreli", "ورک ویزا", "کام کرنے", "اسٹڈی ویزا", "تأشيرة عمل", "إقامة طويلة", "वर्क वीज़ा", "काम करने", "ওয়ার্ক ভিসা", "কাজ করতে"],
        a: "A Schengen short-stay visa is for visits only (tourism, family visits, business meetings) and <b>doesn't allow paid work</b>. Long-stay work or study visas are national visas with different rules. Message us and we'll tell you whether we can help with your case. {wa|Ask on WhatsApp}" },
      ukstatus: { kw: ["brp", "share code", "evisa", "e-visa", "residence permit", "uk visa expir", "visa expires", "ilr", "settled status", "pre-settled", "dependant", "dependent", "skilled worker", "graduate visa", "my uk visa", "expired", "expiring", "expire", "titre de séjour", "oturum izni", "بی آر پی", "شیئر کوڈ", "ای ویزا", "تصريح الإقامة", "رمز المشاركة", "शेयर कोड", "बीआरपी", "শেয়ার কোড", "বিআরপি"],
        a: "Use your UK <b>eVisa share code</b> or residence permit as proof of your status. We help students, Skilled Workers, dependants, family visa holders and people with settled status. Your UK permission should be valid for your whole trip and well beyond your return date. If it expires soon, check with us first." },
      money: { kw: ["how much money", "bank balance", "minimum balance", "funds", "show money", "sponsor", "sponsorship", "salary", "savings", "solde", "combien d'argent", "bakiye", "ne kadar para", "بینک بیلنس", "کتنے پیسے", "اسپانسر", "رصيد", "كم من المال", "كفيل", "बैंक बैलेंस", "कितने पैसे", "स्पॉन्सर", "ব্যাংক ব্যালেন্স", "কত টাকা দেখা", "স্পনসর"],
        a: "There's no single fixed amount: each country sets its own guideline. Your bank statements (usually the last 3 months) should show <b>regular income and enough money for the whole trip</b>. If someone else pays for you, you'll need a sponsor letter and their bank statements. We check this before you apply." },
      insurance: { kw: ["insurance", "medical cover", "health cover", "assurance", "sigorta", "انشورنس", "بیمہ", "تأمين", "बीमा", "इंश्योरेंस", "বীমা", "ইন্স্যুরেন্স"],
        a: "You need travel medical insurance with <b>at least €30,000</b> of cover, valid in all Schengen countries and for your whole trip. We check that your policy meets the rules." },
      photo: { kw: ["photo", "picture", "photograph", "fotoğraf", "تصویر", "فوٹو", "صورة", "फोटो", "ছবি"],
        a: "One recent passport-style photo: <b>35×45 mm</b>, plain light background, face clearly visible, taken within the last 6 months." },
      invite: { kw: ["invitation", "invite", "staying with family", "staying with friends", "visiting family", "visit my family", "visit family", "relatives", "host", "visiting my", "visit my", "my sister", "my brother", "my cousin", "my friend", "my parents", "my uncle", "my aunt", "famille", "davet", "aile ziyareti", "دعوت نامہ", "رشتہ دار", "فیملی سے ملنے", "دعوة", "زيارة عائلية", "أقارب", "निमंत्रण", "परिवार से मिलने", "रिश्तेदार", "আমন্ত্রণ", "আত্মীয়", "পরিবারের সাথে দেখা"],
        a: "Visiting family or friends? An <b>invitation letter</b> from your host plus a copy of their passport or residence permit usually replaces the hotel booking. Some countries have their own official form. We tell you exactly what your destination needs." },
      selfemp: { kw: ["self employed", "self-employed", "business owner", "own business", "company director", "sole trader", "freelance", "unemployed", "housewife", "retired", "no job", "not working", "indépendant", "sans emploi", "retraité", "serbest", "işsiz", "emekli", "اپنا کاروبار", "بے روزگار", "ریٹائرڈ", "گھریلو", "عمل حر", "عاطل", "متقاعد", "ربة منزل", "खुद का व्यवसाय", "बेरोज़गार", "सेवानिवृत्त", "गृहिणी", "নিজের ব্যবসা", "বেকার", "অবসরপ্রাপ্ত", "গৃহিণী"],
        a: "No problem. Instead of an employer letter, self-employed people usually show business documents such as company registration and tax returns; retired people show pension statements; and people who aren't working can be supported by a spouse or sponsor with their documents. We'll list what fits your situation." },
      family: { kw: ["family", "wife", "husband", "spouse", "baby", "minor", "with my kids", "with my children", "my son", "my daughter", "famille", "aile", "eşim", "فیملی", "بیوی", "شوہر", "عائلة", "زوجة", "زوج", "परिवार", "पत्नी", "पति", "পরিবার", "স্ত্রী", "স্বামী"],
        a: "Each family member needs their own application, including children. The official fee is €45 for children aged 6 to 11 and free under 6. Children usually also need a birth certificate, and a consent letter if they aren't travelling with both parents. Our £89 package is per applicant, and we prepare the whole family's files together." },
      urgent: { kw: ["urgent", "fast", "quick", "asap", "express", "fast track", "emergency", "next week", "priority", "earliest", "rapide", "acil", "hızlı", "جلدی", "ارجنٹ", "فوری", "عاجل", "سريع", "जल्दी", "अर्जेंट", "तुरंत", "জরুরি", "দ্রুত"],
        a: "We start your file straight away and book the <b>earliest appointment available</b>. Some visa centres also sell premium appointments at extra cost; we'll tell you what's available. The decision time is set by the embassy (usually about 15 days), so no one can guarantee a faster visa. {wa|Tell us your dates}" },
      legit: { kw: ["legit", "genuine", "trust", "real company", "registered", "scam", "fake", "review", "trustpilot", "company number", "fiable", "avis", "güvenilir", "yorum", "قابل اعتماد", "اصلی", "ریویو", "فراڈ", "موثوق", "تقييم", "احتيال", "भरोसेमंद", "असली", "रिव्यू", "फ्रॉड", "বিশ্বস্ত", "আসল", "রিভিউ", "প্রতারণা"],
        a: "TravelVista Ltd is <b>registered in England and Wales</b> (company number 17414589). You can read our clients' reviews on Trustpilot. We're an independent company, not part of any government or embassy, and we confirm every fee in writing before we start. {link:index.html#reviews|Client reviews}" },
      payment: { kw: ["how to pay", "how do i pay", "payment", "pay by", "card", "bank transfer", "cash", "payer", "paiement", "ödeme", "ادائیگی", "پیمنٹ", "کیش", "الدفع", "طريقة الدفع", "भुगतान", "पेमेंट", "পেমেন্ট", "পরিশোধ"],
        a: "Before we start, we confirm our service fee, any third-party fees and how to pay, in writing. The official visa fee and visa centre fee are paid the way the visa centre requires. Ask us on WhatsApp for the payment options. {wa|Ask on WhatsApp}" },
      myself: { kw: ["apply myself", "on my own", "do it myself", "by myself", "why should i use", "why use you", "why choose", "benefit", "moi-même", "kendim", "خود اپلائی", "بنفسي", "खुद आवेदन", "নিজে আবেদন"],
        a: "You can apply yourself. We save you time and help you avoid common mistakes, such as applying to the wrong country, missing documents or a weak cover letter, which often cause delays or refusals. We also handle the appointment booking for you." },
      centres: { kw: ["visa centre", "visa center", "which centre", "which center", "centre location", "london centre", "manchester", "edinburgh", "glasgow", "birmingham", "centre de visa", "vize merkezi", "ویزا سینٹر", "مركز التأشيرات", "वीज़ा सेंटर", "ভিসা কেন্দ্র"],
        a: "UK visa centres are mainly in <b>London, Manchester and Edinburgh</b>. The company depends on the country: France uses TLScontact, Spain BLS International and Italy VFS Global. Which centre you use can depend on where you live in the UK. We confirm your centre and book it. {link:schengen-visa.html#centres|Visa centres}" }
    };
    for (var mk in MORE) { KW[mk] = MORE[mk].kw; EN.a[mk] = MORE[mk].a; }
    // documents: keep photo and insurance as their own topics
    KW.docs = KW.docs.filter(function (w) { return w !== "insurance" && w !== "photo"; }).concat(["requirement", "what is needed", "what's needed", "list"]);
    KW.refusal = KW.refusal.concat(["refused before", "previous refusal", "rejected before", "reapply", "appeal"]);
    KW.contact = KW.contact.concat(["walk in", "sunday", "saturday", "weekend", "whatsapp number", "office address"]);
    KW.fees = KW.fees.concat(["for kids", "for children", "for my child", "child fee", "children fee", "for a child", "infant"]);
    KW.time = KW.time.concat(["processing time", "how many days"]);
    KW.who = KW.who.concat(["eu citizen", "irish", "visa free", "visa-free"]);
    EN.a.fallback = "Sorry, I didn't catch that. You can ask me about <b>how to apply</b>, documents, fees, timing, appointments or how to reach us. Or ask our team on WhatsApp. {wa|Chat on WhatsApp}";
    var CENTRES = { France: "TLScontact", Spain: "BLS International", Italy: "VFS Global" };
    var ALIAS = { "usa": "United States", "america": "United States", "us visa": "United States", "uae": "Dubai", "emirates": "Dubai", "türkiye": "Turkey", "turkiye": "Turkey", "czechia": "Czech Republic", "holland": "Netherlands" };
    var SCHENGEN_OTHER = { "United States": 1, "Canada": 1, "Dubai": 1, "Turkey": 1 };

    var T = function () { var d = window.tvDict && window.tvDict._bot; return d || EN; };
    var tx = function (path) { // e.g. "a.fees" falls back to English per key
      var parts = path.split("."), v = T(), e = EN;
      for (var i = 0; i < parts.length; i++) { v = v && v[parts[i]]; e = e[parts[i]]; }
      return v || e;
    };
    var nm = function (en) { var d = window.tvDict; return (d && d._names && d._names[en]) || en; };
    var esc = function (t) { return String(t).replace(/[&<>"]/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]; }); };
    var probe = document.querySelector('a[href*="schengen-visa"]');
    var CLEAN = !!probe && !/\.html/.test(probe.getAttribute("href"));
    var url = function (file) {
      var parts = file.split("#"), f = parts[0], h = parts[1] ? "#" + parts[1] : "";
      return (CLEAN ? "/" + f.replace(/^index\.html$/, "").replace(/\.html$/, "") : f) + h;
    };
    var waUrl = "https://wa.me/" + WA + "?text=" + encodeURIComponent("Hello TravelVista, I have a question:");
    var render = function (s, vars) {
      vars = vars || {};
      s = s.replace(/\{(name|page|centre)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
      return s
        .replace(/\{link:([^|}]+)\|([^}]+)\}/g, function (m, href, label) { return '<a class="tvc-link" href="' + esc(url(href)) + '">' + label + ' <span aria-hidden="true">→</span></a>'; })
        .replace(/\{wa\|([^}]+)\}/g, function (m, label) { return '<a class="tvc-wa" href="' + waUrl + '" target="_blank" rel="noopener">' + label + '</a>'; })
        .replace("{tel}", '<a href="tel:+447862609755" dir="ltr">+44 7862 609755</a>')
        .replace("{mail}", '<a href="mailto:info@travelvista.uk">info@travelvista.uk</a>');
    };

    // countries with pages (names in English and in the visitor's language)
    var PAGES = [];
    fetch(ASSET + "globe-countries.json").then(function (r) { return r.ok ? r.json() : []; }).then(function (l) {
      PAGES = l.map(function (c) { return { n: c.n, s: c.s }; });
    }).catch(function () {});
    var findCountry = function (q) {
      for (var a in ALIAS) if (new RegExp("(^|[^a-z])" + a + "([^a-z]|$)").test(q)) return PAGES.filter(function (p) { return p.n === ALIAS[a]; })[0];
      var best = null;
      PAGES.forEach(function (p) {
        [p.n, nm(p.n)].forEach(function (n) {
          var k = n.toLowerCase();
          if (k.length > 2 && q.indexOf(k) > -1 && (!best || k.length > best.k)) best = { p: p, k: k.length };
        });
      });
      return best && best.p;
    };
    var lev = function (a, b) { // edit distance, for typos like "documants" or "refnd"
      if (Math.abs(a.length - b.length) > 2) return 9;
      var d = [], i, j;
      for (i = 0; i <= a.length; i++) d[i] = [i];
      for (j = 0; j <= b.length; j++) d[0][j] = j;
      for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      return d[a.length][b.length];
    };
    var reEsc = function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
    var intentOf = function (q) {
      var words = q.split(" ").filter(Boolean), best = null, score = 0;
      for (var k in KW) {
        var s = 0;
        KW[k].forEach(function (w) {
          var hit = false;
          if (/^[a-z0-9 '-]+$/.test(w)) {
            hit = new RegExp("(^| )" + reEsc(w) + "(s|es|ed|ing|ly)?( |$)").test(q);
            if (!hit && w.length >= 6 && w.indexOf(" ") < 0) {
              var tol = w.length >= 8 ? 2 : 1;
              hit = words.some(function (t) { return t.length >= 5 && lev(t, w) <= tol; });
              if (hit) s -= 0.3; // typo matches count a little less
            }
          } else hit = q.indexOf(w) > -1;
          if (hit) s += 1 + w.length / 8;
        });
        if (s > score) { score = s; best = k; }
      }
      return score >= 1 ? best : null;
    };
    var answer = function (raw) {
      var q = " " + raw.toLowerCase().replace(/[!?.,;:()"“”¿¡؟،۔।]+/g, " ").replace(/\s+/g, " ").trim() + " ";
      var intent = intentOf(q), c = findCountry(q), out = [];
      if (intent === "hi" && !c) return [tx("hi")];
      if (intent === "thanks" && !c) return [tx("a.thanks")];
      if (intent && intent !== "hi" && intent !== "thanks") out.push(render(tx("a." + intent)));
      if (c) {
        var vars = { name: esc(nm(c.n)), page: c.s };
        out.push(render(tx(SCHENGEN_OTHER[c.n] ? "a.countryOther" : "a.country"), vars) +
          (CENTRES[c.n] ? "<br>" + render(tx("a.centre"), { name: esc(nm(c.n)), centre: CENTRES[c.n] }) : ""));
      }
      if (!out.length) out.push(render(tx("a.fallback")));
      return out;
    };

    // ---- UI ----
    var ICON = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" stroke-width="2.6"/></svg>';
    var X = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    var SEND = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    var root = document.createElement("div");
    root.className = "tvc notranslate";
    root.innerHTML =
      '<div class="tvc-teaser" hidden><button type="button" class="tvc-teaser-x" aria-label="Dismiss">×</button><span></span></div>' +
      '<button type="button" class="tvc-fab" aria-expanded="false" aria-controls="tvc-panel"><span class="tvc-ic tvc-ic-chat">' + ICON + '</span><span class="tvc-ic tvc-ic-x">' + X + '</span></button>' +
      '<section class="tvc-panel" id="tvc-panel" role="dialog" aria-modal="false" aria-labelledby="tvc-title" hidden>' +
        '<header class="tvc-head"><img src="' + ASSET + 'logo-mark.png" alt="" width="36" height="36"><div><strong id="tvc-title"></strong><span class="tvc-status"></span></div>' +
        '<button type="button" class="tvc-close">' + X + '</button></header>' +
        '<div class="tvc-log" role="log" aria-live="polite"></div>' +
        '<div class="tvc-chips"></div>' +
        '<form class="tvc-form" autocomplete="off"><input type="text" maxlength="300" enterkeyhint="send"><button type="submit">' + SEND + '</button></form>' +
      '</section>';
    document.body.appendChild(root);
    var fab = root.querySelector(".tvc-fab"), panel = root.querySelector(".tvc-panel"), log = root.querySelector(".tvc-log");
    var chips = root.querySelector(".tvc-chips"), form = root.querySelector(".tvc-form"), input = form.querySelector("input");
    var teaser = root.querySelector(".tvc-teaser"), started = false;

    var labels = function () {
      root.querySelector("#tvc-title").textContent = tx("title");
      root.querySelector(".tvc-status").textContent = tx("status");
      fab.setAttribute("aria-label", root.classList.contains("open") ? tx("close") : tx("open"));
      root.querySelector(".tvc-close").setAttribute("aria-label", tx("close"));
      input.placeholder = tx("ph"); input.setAttribute("aria-label", tx("ph"));
      form.querySelector("button").setAttribute("aria-label", tx("send"));
      teaser.querySelector("span").textContent = tx("teaser");
      chips.innerHTML = "";
      ["apply", "package", "docs", "fees", "time", "which", "contact", "human"].forEach(function (k) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "tvc-chip" + (k === "human" ? " tvc-chip-wa" : ""); b.textContent = tx("chips." + k);
        b.addEventListener("click", function () { say(b.textContent, [render(tx("a." + k))]); });
        chips.appendChild(b);
      });
    };
    var bubble = function (html, who) {
      var m = document.createElement("div");
      m.className = "tvc-msg tvc-" + who;
      m.innerHTML = html;
      log.appendChild(m);
      log.scrollTop = log.scrollHeight;
      return m;
    };
    var busy = false;
    var botSay = function (list, i) {
      i = i || 0;
      if (i >= list.length) { busy = false; return; }
      var t = bubble('<span class="tvc-dots"><i></i><i></i><i></i></span>', "bot tvc-typing");
      setTimeout(function () {
        t.classList.remove("tvc-typing"); t.innerHTML = list[i];
        log.scrollTop = log.scrollHeight;
        botSay(list, i + 1);
      }, reduceMotion ? 0 : Math.min(1100, 380 + list[i].length * 2.2));
    };
    var say = function (text, replies) {
      if (busy) return;
      busy = true;
      bubble(esc(text), "me");
      botSay(replies || answer(text));
    };
    var openChat = function () {
      root.classList.add("open"); panel.hidden = false; teaser.hidden = true;
      fab.setAttribute("aria-expanded", "true"); fab.setAttribute("aria-label", tx("close"));
      try { sessionStorage.setItem("tvc-seen", "1"); } catch (e) {}
      if (!started) { started = true; busy = true; botSay([tx("greet")]); }
      setTimeout(function () { if (window.matchMedia("(hover: hover)").matches) input.focus(); }, 250);
    };
    var closeChat = function () {
      root.classList.remove("open");
      fab.setAttribute("aria-expanded", "false"); fab.setAttribute("aria-label", tx("open"));
      setTimeout(function () { if (!root.classList.contains("open")) panel.hidden = true; }, 260);
      fab.focus();
    };
    fab.addEventListener("click", function () { root.classList.contains("open") ? closeChat() : openChat(); });
    root.querySelector(".tvc-close").addEventListener("click", closeChat);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("open")) closeChat(); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v || busy) return;
      input.value = "";
      say(v);
    });
    teaser.querySelector(".tvc-teaser-x").addEventListener("click", function (e) {
      e.stopPropagation(); teaser.hidden = true;
      try { sessionStorage.setItem("tvc-seen", "1"); } catch (err) {}
    });
    teaser.addEventListener("click", openChat);
    labels();
    document.addEventListener("languagechange", function () { setTimeout(labels, 60); });
    // a gentle hint once per visit, after the visitor has had time to look around
    var seen = false;
    try { seen = sessionStorage.getItem("tvc-seen") === "1"; } catch (e) {}
    if (!seen) setTimeout(function () { if (!root.classList.contains("open")) teaser.hidden = false; }, 12000);
  })();



  // Enquiry form: builds a WhatsApp message (works without a server)
  var form = document.getElementById("enquiry");
  if (!form) return;
  var result = document.getElementById("form-result");
  var link = document.getElementById("wa-send");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    ["f-name", "f-phone"].forEach(function (id) {
      var el = document.getElementById(id);
      var err = document.getElementById(id + "-err");
      var empty = !el.value.trim();
      if (err) err.hidden = !empty;
      el.setAttribute("aria-invalid", empty ? "true" : "false");
      if (empty && ok) { el.focus(); ok = false; }
    });
    if (!ok) return;

    var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
    var lines = [
      "Hello TravelVista, I would like a free consultation.",
      "Name: " + v("f-name"),
      "Phone: " + v("f-phone")
    ];
    if (v("f-email")) lines.push("Email: " + v("f-email"));
    if (v("f-nationality")) lines.push("Passport / nationality: " + v("f-nationality"));
    if (v("f-service")) lines.push("I need help with: " + v("f-service"));
    if (v("f-date")) lines.push("Planned travel: " + v("f-date"));
    if (v("f-message")) lines.push("Message: " + v("f-message"));

    link.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(lines.join("\n"));
    result.hidden = false;
    link.focus();
  });

})();
