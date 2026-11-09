/* D-Link Robotics homepage (Figure-style layout) — interactions.
   Forms are a prototype: nothing is sent anywhere. */
(function () {
  "use strict";

  var DEMO_NOTICE = "展示版：此復刻頁不會送出任何資料。";
  var MSG_REQUIRED = "請填寫此欄位";
  var MSG_EMAIL = "請輸入有效的 Email";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Navigation: hide on scroll down, reveal on scroll up ---------- */
  var nav = document.querySelector(".navigation");
  var toggle = document.querySelector(".navigation__toggle");
  var lastY = window.scrollY;
  var ticking = false;

  function updateNavOnScroll() {
    var y = window.scrollY;
    var scrolled = y > 40;
    nav.dataset.isScrolled = String(scrolled);
    if (scrolled) {
      if (y < lastY - 2) nav.dataset.isScrollingBack = "true";
      else if (y > lastY + 2) nav.dataset.isScrollingBack = "false";
    } else {
      nav.dataset.isScrollingBack = "false";
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(updateNavOnScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ---------- Mobile navigation sheet ---------- */
  function setMobileNav(open) {
    nav.dataset.isMobileNavigationActive = String(open);
    toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close main navigation" : "Open main navigation");
    document.body.classList.toggle("is-unscrollable", open);
  }

  toggle.addEventListener("click", function () {
    setMobileNav(nav.dataset.isMobileNavigationActive !== "true");
  });

  nav.querySelectorAll(".navigation__link, .navigation__home-link").forEach(function (link) {
    link.addEventListener("click", function () { setMobileNav(false); });
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", function (e) {
    if (e.matches) setMobileNav(false);
  });

  /* ---------- Background videos: play only the visible cut while in view ---------- */
  var sections = document.querySelectorAll(".hero-v3__video-background");

  function visibleVideo(container) {
    var vids = container.querySelectorAll("video");
    for (var i = 0; i < vids.length; i++) {
      if (window.getComputedStyle(vids[i]).display !== "none") return vids[i];
    }
    return null;
  }

  function syncVideos(container, inView) {
    var active = visibleVideo(container);
    container.querySelectorAll("video").forEach(function (v) {
      if (v === active && inView && !reduceMotion.matches) {
        if (v.preload !== "auto") v.preload = "auto";
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
    // Reduced motion: show a still first frame instead of playback
    if (active && reduceMotion.matches && active.preload !== "auto") {
      active.preload = "auto";
      active.load();
    }
  }

  var inViewState = new Map();
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        inViewState.set(entry.target, entry.isIntersecting);
        syncVideos(entry.target, entry.isIntersecting);
      });
    }, { threshold: 0.05 });
    sections.forEach(function (s) { io.observe(s); });
  } else {
    sections.forEach(function (s) { syncVideos(s, true); });
  }

  function resyncAll() {
    sections.forEach(function (s) { syncVideos(s, inViewState.get(s) !== false); });
  }
  window.matchMedia("(min-width: 480px)").addEventListener("change", resyncAll);
  reduceMotion.addEventListener("change", resyncAll);

  /* ---------- Floating labels ---------- */
  document.querySelectorAll("[data-field]").forEach(function (field) {
    var input = field.querySelector("input, textarea");
    function sync() { field.classList.toggle("is-filled", input.value.trim() !== ""); }
    var liveValidate = field.closest("#contact-form") !== null;
    input.addEventListener("input", function () {
      sync();
      if (liveValidate && field.classList.contains("is-error")) validateField(field);
    });
    input.addEventListener("blur", sync);
    sync();
  });

  /* ---------- Validation helpers ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(field) {
    var input = field.querySelector("input, textarea");
    var value = input.value.trim();
    var message = "";
    if (input.required && value === "") message = MSG_REQUIRED;
    else if (input.type === "email" && value !== "" && !EMAIL_RE.test(value)) message = MSG_EMAIL;

    var errorEl = field.querySelector(".custom-input__error");
    field.classList.toggle("is-error", message !== "");
    input.setAttribute("aria-invalid", String(message !== ""));
    if (message) {
      if (!errorEl) {
        errorEl = document.createElement("p");
        errorEl.className = "custom-input__error";
        errorEl.id = "err-" + input.name + "-" + Math.random().toString(36).slice(2, 7);
        field.appendChild(errorEl);
        input.setAttribute("aria-describedby", errorEl.id);
      }
      errorEl.textContent = message;
    } else if (errorEl) {
      errorEl.remove();
      input.removeAttribute("aria-describedby");
    }
    return message === "";
  }

  function fakeSubmit(button, done) {
    button.classList.add("is-loading");
    button.disabled = true;
    window.setTimeout(function () {
      button.classList.remove("is-loading");
      button.disabled = false;
      done();
    }, 600);
  }

  /* ---------- Newsletter (demo) ---------- */
  var newsletter = document.getElementById("newsletter-form");
  var newsletterStatus = document.getElementById("newsletter-status");

  newsletter.addEventListener("submit", function (e) {
    e.preventDefault();
    var field = newsletter.querySelector("[data-field]");
    var input = field.querySelector("input");
    var value = input.value.trim();
    var error = value === "" ? MSG_REQUIRED : (!EMAIL_RE.test(value) ? MSG_EMAIL : "");

    newsletter.classList.toggle("is-error", error !== "");
    field.classList.toggle("is-error", error !== "");
    input.setAttribute("aria-invalid", String(error !== ""));
    if (error) {
      newsletterStatus.textContent = error;
      newsletterStatus.classList.add("is-visible");
      input.focus();
      return;
    }
    fakeSubmit(newsletter.querySelector("button"), function () {
      newsletterStatus.textContent = DEMO_NOTICE;
      newsletterStatus.classList.add("is-visible");
    });
  });

  newsletter.querySelector("input").addEventListener("input", function () {
    if (newsletter.classList.contains("is-error")) {
      newsletter.classList.remove("is-error");
      newsletter.querySelector("[data-field]").classList.remove("is-error");
      newsletterStatus.classList.remove("is-visible");
      newsletterStatus.textContent = "";
    }
  });

  /* ---------- Contact modal ---------- */
  var modal = document.getElementById("contact-modal");
  var contactForm = document.getElementById("contact-form");
  var contactStatus = document.getElementById("contact-status");
  var lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    modal.removeAttribute("inert");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-active");
    document.body.classList.add("is-unscrollable");
    window.setTimeout(function () {
      var first = contactForm.querySelector("input");
      if (first) first.focus({ preventScroll: true });
    }, 50);
  }

  function closeModal() {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("inert", "");
    document.body.classList.remove("is-unscrollable");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-open-contact]").forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });
  modal.querySelector("[data-close-contact]").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modal.classList.contains("is-active")) closeModal();
      else if (nav.dataset.isMobileNavigationActive === "true") {
        setMobileNav(false);
        toggle.focus();
      }
    }
    // Keep Tab inside the open dialog
    if (e.key === "Tab" && modal.classList.contains("is-active")) {
      var focusables = modal.querySelectorAll("button, a[href], input, textarea");
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = contactForm.querySelectorAll("[data-field]");
    var firstInvalid = null;
    fields.forEach(function (f) {
      if (!validateField(f) && !firstInvalid) firstInvalid = f.querySelector("input, textarea");
    });

    if (firstInvalid) {
      contactForm.classList.add("is-error");
      contactStatus.textContent = "請完成標示 * 的必填欄位。";
      contactStatus.classList.add("is-visible");
      firstInvalid.focus();
      return;
    }
    contactForm.classList.remove("is-error");
    fakeSubmit(contactForm.querySelector(".contact-modal__submit"), function () {
      contactStatus.textContent = DEMO_NOTICE;
      contactStatus.classList.add("is-visible");
    });
  });
})();
