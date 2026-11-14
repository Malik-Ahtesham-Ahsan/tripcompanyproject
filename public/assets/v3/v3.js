/* TravelVista V3 — editorial scroll experience (GSAP + ScrollTrigger, loaded on demand).
   Content is fully visible without this script; animation states are only applied once GSAP has loaded. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var CLEAN = !/\.html$/.test(location.pathname) && location.pathname !== "/index.html";
  var asset = function () { return (window.TV && window.TV.ASSET) || (CLEAN ? "/assets/" : "assets/"); };

  /* ---------- destination index: hovering a name brings its photograph forward ---------- */
  var list = $(".v3-dlist");
  if (list) {
    var items = $$(".v3-di", list), figs = $$(".v3-dfig");
    var show = function (i) {
      items.forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-n") === i); });
      figs.forEach(function (f) { f.classList.toggle("on", f.getAttribute("data-n") === i); });
    };
    items.forEach(function (a) {
      a.addEventListener("mouseenter", function () { show(a.getAttribute("data-n")); });
      a.addEventListener("focus", function () { show(a.getAttribute("data-n")); });
    });
  }

  /* ---------- the journey: the photograph follows the step in view ---------- */
  var steps = $$(".v3-xp-step");
  if (steps.length && "IntersectionObserver" in window) {
    var xfigs = $$(".v3-xp-fig");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var i = e.target.getAttribute("data-n");
        steps.forEach(function (s) { s.classList.toggle("on", s === e.target); });
        xfigs.forEach(function (f) { f.classList.toggle("on", f.getAttribute("data-n") === i); });
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (s) { io.observe(s); });
  }

  if (reduce) return;

  /* ---------- GSAP: loaded after the page, then the motion layer ---------- */
  var load = function (src, cb) { var s = document.createElement("script"); s.src = asset() + src; s.async = false; s.onload = cb; document.head.appendChild(s); };
  var init = function () {
    var g = window.gsap, ST = window.ScrollTrigger;
    if (!g || !ST) return;
    g.registerPlugin(ST);
    g.defaults({ ease: "power3.out" });

    // cinematic hero: the photograph settles, lines rise out of a mask, then the rest follows
    $$(".v3-hero").forEach(function (h) {
      var tl = g.timeline();
      tl.from($(".v3-hero-img", h), { scale: 1.16, duration: 2.8, ease: "power2.out" }, 0)
        .from($$(".v3-ln > *", h), { yPercent: 115, duration: 1.4, stagger: .14, ease: "power4.out" }, .25)
        .from($$(".v3-eye, .v-crumbs", h), { opacity: 0, y: 12, duration: 1 }, .2)
        .from($$(".v3-hero-lead, .v3-ctas, .v3-hero-cap, .v3-scrollcue", h), { opacity: 0, y: 24, duration: 1.2, stagger: .1 }, .8);
      g.to($(".v3-hero-media", h), { yPercent: 14, ease: "none", scrollTrigger: { trigger: h, start: "top top", end: "bottom top", scrub: true } });
      g.to($(".v3-hero-in", h), { yPercent: -10, opacity: .2, ease: "none", scrollTrigger: { trigger: h, start: "center center", end: "bottom top", scrub: true } });
    });

    // headings and short paragraphs arrive gently, in order
    $$(".v3-anim").forEach(function (el) { if (el.getBoundingClientRect().top < window.innerHeight * .86) return; g.set(el, { opacity: 0, y: 34 }); });
    ST.batch(".v3-anim", { start: "top 86%", once: true, onEnter: function (els) { g.to(els, { y: 0, opacity: 1, duration: 1.1, stagger: .12, overwrite: true }); } });

    // photographs are unveiled by a soft mask, then drift slightly as you scroll
    $$(".v3-mask").forEach(function (f) {
      var im = $("img", f); if (!im) return;
      g.fromTo(f, { clipPath: "inset(14% 8% 14% 8%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power3.inOut", scrollTrigger: { trigger: f, start: "top 85%", once: true } });
      g.fromTo(im, { scale: 1.18 }, { scale: 1.04, duration: 2, ease: "power2.out", scrollTrigger: { trigger: f, start: "top 85%", once: true } });
      g.fromTo(im, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    });

    // lists: services, reasons, values and destinations enter one after another
    [".v3-svc", ".v3-why-i", ".v3-values li", ".v3-dlist li"].forEach(function (sel) {
      if (!$(sel)) return;
      g.set(sel, { opacity: 0, y: 26 });
      ST.batch(sel, { start: "top 90%", once: true, onEnter: function (els) { g.to(els, { opacity: 1, y: 0, duration: 1, stagger: .08 }); } });
    });

    // final call to action: a slow parallax behind the words
    $$(".v3-cta").forEach(function (c) { g.to($(".v3-cta-media", c), { yPercent: 10, ease: "none", scrollTrigger: { trigger: c, start: "top bottom", end: "bottom top", scrub: true } }); });

    // inner pages: the hero title settles in
    var ih = $(".v-inhero h1");
    if (ih) g.from(ih, { y: 40, opacity: 0, duration: 1.3, delay: .15 });

    window.addEventListener("load", function () { ST.refresh(); });
  };
  var go = function () { if (window.gsap && window.ScrollTrigger) init(); else load("v3/vendor/gsap.min.js", function () { load("v3/vendor/ScrollTrigger.min.js", init); }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
