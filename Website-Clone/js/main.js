/* AI Robots — Unitree Go2 recreation: navigation, scroll animation, demo feedback */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobileQuery = window.matchMedia("(orientation: portrait) and (max-aspect-ratio: .624)");
  var portraitQuery = window.matchMedia("(orientation: portrait)");
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  /* ---------- Demo toast (no backend in this prototype) ---------- */
  var toast = document.getElementById("toast");
  var toastTimer;
  var demoMessages = {
    search: "Demo prototype: search is not connected in this recreation.",
    account: "Demo prototype: sign-in is not available in this recreation.",
    bag: "Demo prototype: the cart is not connected — no items are stored.",
    sales: "Demo prototype: no message was sent. Please contact AI Robots directly.",
    cart: function (el) {
      return "Demo prototype: “" + el.getAttribute("data-product") + "” was not added — checkout is not connected.";
    }
  };
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 3200);
  }
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-demo]");
    if (!el || el.disabled) return;
    var key = el.getAttribute("data-demo");
    var msg = demoMessages[key];
    if (key === "cart") {
      el.classList.add("is-loading");
      setTimeout(function () {
        el.classList.remove("is-loading");
        showToast(msg(el));
      }, 500);
      return;
    }
    if (msg) showToast(msg);
  });

  /* ---------- Desktop mega menu ---------- */
  var nav = document.querySelector(".main-nav");
  var triggers = Array.prototype.slice.call(nav.querySelectorAll("button.nav-link"));
  var plainLinks = Array.prototype.slice.call(nav.querySelectorAll("a.nav-link"));

  function closeSubNavs(except) {
    triggers.forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn === except;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.classList.toggle("is-open", open);
    });
  }
  triggers.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () { if (!mobileQuery.matches) closeSubNavs(btn); });
    btn.addEventListener("click", function () {
      closeSubNavs(btn.getAttribute("aria-expanded") === "true" ? null : btn);
    });
  });
  plainLinks.forEach(function (a) { a.addEventListener("mouseenter", function () { closeSubNavs(null); }); });
  nav.addEventListener("mouseleave", function () { closeSubNavs(null); });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeSubNavs(null); });

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");

  function setMobileMenu(open) {
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.classList.toggle("is-open", open);
    root.classList.toggle("menu-open", open);
    if (!open) {
      mobileMenu.querySelectorAll(".acc-btn[aria-expanded]").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        document.getElementById(b.getAttribute("aria-controls")).hidden = true;
      });
    }
  }
  hamburger.addEventListener("click", function () {
    setMobileMenu(hamburger.getAttribute("aria-expanded") !== "true");
  });
  mobileMenu.addEventListener("click", function (e) {
    var btn = e.target.closest(".acc-btn[aria-controls]");
    if (!btn) return;
    var open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    document.getElementById(btn.getAttribute("aria-controls")).hidden = !open;
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeSubNavs(null);
    if (hamburger.getAttribute("aria-expanded") === "true") { setMobileMenu(false); hamburger.focus(); }
  });

  /* ---------- Footer accordions (phones only) ---------- */
  var footerTitles = Array.prototype.slice.call(document.querySelectorAll(".links-title"));
  function syncFooter() {
    var mobile = mobileQuery.matches;
    footerTitles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", mobile ? "false" : "true");
      btn.tabIndex = mobile ? 0 : -1;
      document.getElementById(btn.getAttribute("aria-controls")).hidden = mobile;
    });
    if (!mobile) setMobileMenu(false);
  }
  footerTitles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!mobileQuery.matches) return;
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.getElementById(btn.getAttribute("aria-controls")).hidden = !open;
    });
  });
  mobileQuery.addEventListener("change", syncFooter);
  syncFooter();

  /* ---------- Feature videos: load and play only while visible ---------- */
  var heroVideo = document.getElementById("hero-video");
  if (reduceMotion && heroVideo) { heroVideo.removeAttribute("autoplay"); heroVideo.pause(); }

  var lazyVideos = document.querySelectorAll(".lazy-video");
  if ("IntersectionObserver" in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          var source = video.querySelector("source[data-src]");
          if (source) {
            source.src = source.getAttribute("data-src");
            source.removeAttribute("data-src");
            video.load();
          }
          if (!reduceMotion) video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: "200px 0px" });
    lazyVideos.forEach(function (v) { videoObserver.observe(v); });
  }

  /* ---------- Scroll sequence canvas ---------- */
  var seqSection = document.querySelector(".sequence-section");
  var seqWrap = seqSection.querySelector(".sequence-canvas");
  var canvas = document.getElementById("sequence-canvas");
  var ctx = canvas.getContext("2d");
  var frameCount = parseInt(seqWrap.getAttribute("data-frames"), 10);
  var framePath = seqWrap.getAttribute("data-path");
  var frameExt = seqWrap.getAttribute("data-ext");
  var frames = new Array(frameCount).fill(null);
  var state = { frame: 0 };

  function framePathFor(i) { return framePath + String(i).padStart(3, "0") + frameExt; }

  function resizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    render();
  }
  function nearestLoaded(i) {
    for (var d = 0; d < frameCount; d++) {
      if (frames[i - d]) return frames[i - d];
      if (frames[i + d]) return frames[i + d];
    }
    return null;
  }
  function render() {
    var img = frames[state.frame] || nearestLoaded(state.frame);
    if (!img) return;
    var scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    var w = img.naturalWidth * scale;
    var h = img.naturalHeight * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  }
  // Load even frames first so the whole range becomes scrubbable quickly, then fill the gaps.
  function loadFrame(i) {
    var img = new Image();
    img.decoding = "async";
    img.onload = function () {
      frames[i] = img;
      if (i === 0 || Math.abs(i - state.frame) < 3) render();
    };
    img.src = framePathFor(i);
  }
  for (var i = 0; i < frameCount; i += 2) loadFrame(i);
  for (var j = 1; j < frameCount; j += 2) loadFrame(j);
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  if (!hasGsap) {
    document.querySelectorAll(".intro-anim, .specs").forEach(function (el) { el.style.opacity = 1; });
    // Minimal fallback: scrub frames with native scroll.
    window.addEventListener("scroll", function () {
      var r = seqSection.getBoundingClientRect();
      var p = Math.min(Math.max(-r.top / (r.height - window.innerHeight), 0), 1);
      state.frame = Math.round(p * (frameCount - 1));
      render();
    }, { passive: true });
    return;
  }

  /* ---------- GSAP animations ---------- */
  gsap.registerPlugin(ScrollTrigger);

  // Hero intro
  var intro = gsap.utils.toArray(".intro-anim");
  if (reduceMotion) {
    gsap.set(intro, { autoAlpha: 1 });
  } else {
    gsap.fromTo(intro, { autoAlpha: 0, y: "2vw" },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out", stagger: .15, delay: .25 });
    gsap.to("#hero-section", {
      opacity: 0, ease: "none",
      scrollTrigger: { trigger: "#hero-section", start: "top top", end: "bottom top-=25%", scrub: true }
    });
  }

  // Sequence: entry of canvas and heading
  var seqContent = seqSection.querySelector(".content");
  var seqContentKids = seqContent.children;
  var specs = gsap.utils.toArray(".spec");
  var specInner = specs.map(function (s) { return s.querySelectorAll(".reveal > *"); });
  gsap.set(specInner, { yPercent: reduceMotion ? 0 : 100, opacity: reduceMotion ? 0 : 1 });
  gsap.set(".specs", { opacity: 1 });

  if (!reduceMotion) {
    gsap.timeline({ scrollTrigger: { trigger: seqSection, start: "top bottom", end: "top top", scrub: true } })
      .fromTo(seqWrap, { yPercent: portraitQuery.matches ? -5 : -35 }, { yPercent: 0, duration: 2 })
      .from(seqWrap, { opacity: 0, duration: 1.5, ease: "power1.in" }, "<")
      .from(seqContentKids, { opacity: 0, y: "5vw", stagger: .25, duration: .75 }, 1)
      .fromTo(seqContent, { y: "20vw" }, { y: 0, ease: "power1.out", duration: 1.5 }, "<");
  }
  // Heading fades as the frames start playing
  gsap.to(seqContent, {
    autoAlpha: 0, ease: "power1.in",
    scrollTrigger: { trigger: seqSection, start: "top top", end: "top+=40% top", scrub: true }
  });

  // Frame scrub + spec captions in sequence
  var frameTl = gsap.timeline({
    scrollTrigger: { trigger: seqSection, start: "top bottom", end: "bottom bottom", scrub: true },
    defaults: { duration: 1 }
  });
  frameTl.fromTo(state, { frame: 0 }, {
    frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render
  }, 0);
  var at = .2;
  specs.forEach(function (spec, idx) {
    var inVars = reduceMotion ? { opacity: 1, duration: .08 } : { yPercent: 0, duration: .08 };
    frameTl.to(specInner[idx], inVars, at);
    if (idx < specs.length - 1) {
      frameTl.to(spec, { autoAlpha: 0, ease: "power1.in", duration: .08 }, at + .12);
    }
    at += .2;
  });

  // Section reveals
  if (!reduceMotion) {
    gsap.utils.toArray(".simple-section").forEach(function (sec) {
      gsap.from(sec.querySelectorAll("h2, .paragraph-1"), {
        opacity: 0, y: "3vw", duration: .8, ease: "power2.out", stagger: .12,
        scrollTrigger: { trigger: sec, start: "top 80%" }
      });
      gsap.from(sec.querySelector(".media-wrapper"), {
        opacity: 0, y: "4vw", scale: .97, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: sec, start: "top 70%" }
      });
    });
    gsap.from("#tech-section .head > *", {
      opacity: 0, y: "3vw", duration: .8, stagger: .12, ease: "power2.out",
      scrollTrigger: { trigger: "#tech-section", start: "top 80%" }
    });
    gsap.from("#tech-section tr", {
      opacity: 0, y: 20, duration: .4, stagger: .04, ease: "power1.out",
      scrollTrigger: { trigger: ".robot-spec-table", start: "top 85%" }
    });
    gsap.from(".card", {
      opacity: 0, y: "3vw", duration: .7, stagger: .1, ease: "power2.out",
      scrollTrigger: { trigger: ".cards", start: "top 85%" }
    });
    gsap.from(".book-wrapper .second", {
      rotateY: -25, transformOrigin: "left center", opacity: 0, duration: 1.1, ease: "power2.out",
      scrollTrigger: { trigger: ".book-wrapper", start: "top 75%" }
    });
  }

  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
