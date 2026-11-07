(function () {
  var WA = "447862609755";
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
        label: "#eef3ff", city: "#ffffff", halo: "rgba(4,10,34,0.9)", border: "rgba(170,198,255,0.32)", fill: "255,77,99", hot: "#ff8c99" },
      light: { star: "#1d3a7a", starA: 0.25, atm: ["rgba(120,160,255,0.45)", "rgba(140,175,255,0.18)", "rgba(160,190,255,0)"],
        ocean: ["#ffffff", "#e8eefb", "#d3ddf4"], limb: "rgba(29,58,122,0.4)", dot: 2.1, lightsA: 0.25,
        land: ["#0f2352", "#142b5c", "#1a3570", "#1d3a7a", "#24448c", "#2c4f9b"], landA: [0.95, 0.95, 0.92, 0.9, 0.88, 0.85],
        lights: ["rgba(184,41,47,", "rgba(196,52,60,", "rgba(210,70,78,"], glow: ["214,60,70", "200,45,55", "184,41,47"],
        route: "#b8292f", trail: "#c42a36", head: "#b8292f", mark: "#b8292f", blend: "source-over",
        label: "#0f1a33", city: "#0f1a33", halo: "rgba(246,249,255,0.92)", border: "rgba(29,58,122,0.3)", fill: "184,41,47", hot: "#b8292f" }
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

    fetch("assets/globe-land.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (a) {
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
    fetch("assets/globe-countries.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (list) {
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
        return { n: c.n, s: c.s, lat: c.l[0], lon: c.l[1], lv: vec(c.l[0], c.l[1]), rings: rings, bb: b, size: size, tiny: tiny };
      });
      countries.sort(function (a, b) { return b.size - a.size; }); // big countries get labels first
    }).catch(function () {});

    // language-aware names (dictionary comes from the language switcher)
    var nm = function (en) { var d = window.tvDict; return (d && d._names && d._names[en]) || en; };
    var ui = function (k, en) { var d = window.tvDict; return (d && d._ui && d._ui[k]) || en; };
    var font = "";
    var refreshText = function () {
      font = getComputedStyle(document.body).fontFamily;
      if (hint) hint.querySelector("span").textContent = ui("hint", "Drag the globe · click a Schengen country");
      if (tip) tip.querySelector("span").firstChild.nodeValue = ui("map", "View visa guide") + " ";
    };
    refreshText();
    document.addEventListener("languagechange", function () { setTimeout(refreshText, 50); });

    // ---- view state ----
    var uLon = 0, uLat = 0, vLon = 0, vLat = 0, zoom = 1.32, driftT = 0, lastT = 0;
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
      if (!reduceMotion && !dragging && !hover && !fly && t - lastMove > 2500) driftT += dt;
      if (!dragging && !fly) {
        uLon += vLon * dt; uLat += vLat * dt;
        var damp = Math.pow(0.93, dt / 16); vLon *= damp; vLat *= damp;
        if (Math.abs(vLon) < 1e-4) vLon = 0; if (Math.abs(vLat) < 1e-4) vLat = 0;
        clampLat();
      }
      if (fly) {
        var fp = Math.min(1, (t - fly.t0) / fly.d), e = ease(fp);
        uLon = fly.a[0] + (fly.b[0] - fly.a[0]) * e; uLat = fly.a[1] + (fly.b[1] - fly.a[1]) * e; zoom = fly.a[2] + (fly.b[2] - fly.a[2]) * e;
        if (fp > 0.55 && !fly.fading) { fly.fading = true; document.documentElement.classList.add("globe-leaving"); }
        if (fp >= 1 && !fly.gone) { fly.gone = true; window.location.href = fly.c.s; }
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
        for (var ci = 0; ci < countries.length; ci++) {
          var C = countries[ci], hot = C === hover;
          for (var ri = 0; ri < C.rings.length; ri++) {
            var front = ringPath(C.rings[ri]);
            if (hot && front) {
              ectx.closePath();
              ectx.fillStyle = "rgba(" + P.fill + "," + (isDark() ? 0.42 : 0.3) + ")"; ectx.fill();
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
      var boxes = [], fs = narrow ? 10.5 : 11.5;
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
      ectx.globalAlpha = 1;
    };

    // ---- interaction ----
    var unproject = function (mx, my) {
      var x = (mx - V.cx) / V.R, y = -(my - V.cy) / V.R, rr = x * x + y * y;
      if (rr >= 1) return null;
      var pz = Math.sqrt(1 - rr), sp = Math.sin(V.lat0), cp = Math.cos(V.lat0);
      var y1 = x, x1 = -y * sp + pz * cp, z = y * cp + pz * sp;
      var gx = x1 * Math.cos(V.lon0) - y1 * Math.sin(V.lon0), gy = x1 * Math.sin(V.lon0) + y1 * Math.cos(V.lon0);
      return [Math.asin(Math.max(-1, Math.min(1, z))) * R2D, Math.atan2(gy, gx) * R2D];
    };
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
    var setHover = function (c, mx, my) {
      hover = c;
      earth.classList.toggle("over", !!c);
      if (!tip) return;
      if (c) {
        tip.querySelector("b").textContent = nm(c.n);
        tip.style.transform = "translate(" + Math.round(mx + 16) + "px," + Math.round(my - 18) + "px)";
        tip.classList.add("on");
        if (!prefetched[c.s]) {
          prefetched[c.s] = 1;
          var l = document.createElement("link"); l.rel = "prefetch"; l.href = c.s; document.head.appendChild(l);
        }
      } else tip.classList.remove("on");
    };
    var go = function (c) {
      if (fly) return;
      setHover(c, -999, -999); if (tip) tip.classList.remove("on");
      if (reduceMotion) { window.location.href = c.s; return; }
      var cur = baseLon() + uLon, tLon = c.lon - baseLon();
      tLon = uLon + ((((c.lon - cur) % 360) + 540) % 360 - 180);
      fly = { c: c, t0: performance.now(), d: 1100, a: [uLon, uLat, zoom], b: [tLon, c.lat - baseLat(), EW < 860 ? 2.6 : 3.2] };
      vLon = vLat = 0;
    };
    var used = function () { if (hint) hint.classList.add("used"); };
    var pos = function (e) { var r = earth.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    var sx = 0, sy = 0, px = 0, py = 0, pt = 0;
    earth.addEventListener("pointerdown", function (e) {
      if (fly || e.button > 0) return;
      var p = pos(e); sx = px = p[0]; sy = py = p[1]; pt = performance.now();
      dragging = true; moved = false; vLon = vLat = 0; lastMove = pt;
      try { earth.setPointerCapture(e.pointerId); } catch (err) {}
    });
    earth.addEventListener("pointermove", function (e) {
      var p = pos(e), now = performance.now();
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
        if (c) { used(); go(c); }
      }
    };
    earth.addEventListener("pointerup", function (e) { end(e, false); });
    earth.addEventListener("pointercancel", function (e) { end(e, true); });
    earth.addEventListener("pointerleave", function () { if (!dragging) setHover(null); });
    window.addEventListener("pageshow", function (e) { // back button: restore the page
      if (e.persisted) { document.documentElement.classList.remove("globe-leaving"); fly = null; zoom = 1.32; setHover(null); }
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
      return fetch("assets/i18n/" + code + ".json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
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
      s.textContent = policy ? dict._ui.policy : dict._ui.note;
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
