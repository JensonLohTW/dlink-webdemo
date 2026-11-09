/* NEO Home Robot — page interactions (local recreation). No backend: Order links jump to the order section. */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1024px)');
  const root = document.documentElement;

  /* ---------- Video helpers: lazy source, muted autoplay, poster until playing ---------- */
  function loadVideo(video) {
    if (!video.getAttribute('src') && video.dataset.src) {
      video.src = video.dataset.src;
      video.preload = 'auto';
    }
  }
  function playVideo(video) {
    if (!video || reduceMotion.matches) return;
    loadVideo(video);
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  }
  function pauseVideo(video) {
    if (video && !video.paused) video.pause();
  }
  $$('video.media-fill--video').forEach((video) => {
    video.addEventListener('playing', () => video.classList.add('is-playing'));
  });

  const freeVideos = $$('video[data-src]').filter((v) => !v.closest('[data-expert], [data-carousel]'));
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => (isIntersecting ? playVideo(target) : pauseVideo(target)));
  }, { rootMargin: '120px 0px', threshold: 0.15 });
  freeVideos.forEach((v) => videoObserver.observe(v));

  /* ---------- Text swap (blur cross-fade) ---------- */
  function swapText(el, text) {
    if (reduceMotion.matches) { el.textContent = text; return; }
    el.classList.add('is-out');
    window.setTimeout(() => {
      el.textContent = text;
      el.classList.remove('is-out');
    }, 350);
  }

  $$('[data-cycle]').forEach((el) => {
    const items = JSON.parse(el.dataset.cycle);
    const interval = Number(el.dataset.interval) || 2400;
    let index = 0;
    let timer = null;
    const start = () => {
      if (timer) return;
      timer = window.setInterval(() => {
        index = (index + 1) % items.length;
        swapText(el, items[index]);
      }, interval);
    };
    const stop = () => { window.clearInterval(timer); timer = null; };
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop())).observe(el);
  });

  /* ---------- Header ↔ product bar, active section ---------- */
  const header = $('[data-header]');
  const subnav = $('[data-subnav]');
  const hero = $('.hero');
  const navLinks = $$('[data-nav-link]');
  const navSections = $$('[data-nav-section]');
  let ticking = false;

  function updateScroll() {
    ticking = false;
    const past = window.scrollY > hero.offsetHeight - 56;
    if (past !== subnav.classList.contains('is-visible')) {
      subnav.classList.toggle('is-visible', past);
      subnav.inert = !past;
      header.classList.toggle('is-hidden', past);
      header.inert = past;
    }
    const probe = window.innerHeight * 0.4;
    let active = null;
    navSections.forEach((section) => {
      const r = section.getBoundingClientRect();
      if (r.top <= probe && r.bottom > probe) active = section.dataset.navSection;
    });
    navLinks.forEach((a) => a.classList.toggle('is-active', a.dataset.navLink === active));
  }
  const requestScroll = () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateScroll); }
  };
  window.addEventListener('scroll', requestScroll, { passive: true });
  window.addEventListener('resize', requestScroll);
  updateScroll();

  /* ---------- Mobile menu ---------- */
  const menuToggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    header.classList.toggle('is-menu-open', open);
    root.classList.toggle('is-locked', open);
  }
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); menuToggle.focus(); }
  });
  desktop.addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- "Watch …" pills expand once their card is in view ---------- */
  const pillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $('.watch-pill', entry.target).classList.add('is-expanded');
      pillObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  $$('[data-pill-card]').forEach((card) => pillObserver.observe(card));

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  $$('.letters').forEach((el) => {
    const text = el.textContent.trim();
    el.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'visually-hidden';
    sr.textContent = text;
    el.appendChild(sr);
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.setProperty('--i', i);
      s.setAttribute('aria-hidden', 'true');
      el.appendChild(s);
    });
    revealObserver.observe(el);
  });
  $$('[data-reveal], [data-divider]').forEach((el) => revealObserver.observe(el));

  /* ---------- Expert Mode chore switcher ---------- */
  const expert = $('[data-expert]');
  if (expert) {
    const slides = $$('.expert__slide', expert);
    const label = $('[data-expert-label]', expert);
    const videoAt = (i) => $('video', slides[i]);
    let current = 0;
    let inView = false;

    const show = (next) => {
      const prev = current;
      current = (next + slides.length) % slides.length;
      if (prev === current) return;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
      pauseVideo(videoAt(prev));
      swapText(label, slides[current].dataset.label);
      const v = videoAt(current);
      if (v.readyState > 0) v.currentTime = 0;
      if (inView) playVideo(v);
    };

    expert.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-step]');
      if (btn) show(current + Number(btn.dataset.step));
    });
    slides.forEach((_, i) => videoAt(i).addEventListener('ended', () => { if (i === current) show(current + 1); }));
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) playVideo(videoAt(current)); else pauseVideo(videoAt(current));
    }, { threshold: 0.25 }).observe(expert);
  }

  /* ---------- Design carousel (circular, centre slide full size) ---------- */
  const carousel = $('[data-carousel]');
  if (carousel) {
    const viewport = $('.carousel__viewport', carousel);
    const slides = $$('.carousel__slide', carousel);
    const dots = $$('.carousel__dot', carousel);
    const count = slides.length;
    const half = Math.floor(count / 2);
    const wrap = (d) => ((((d + half) % count) + count) % count) - half;
    let active = 0;
    let inView = false;
    const offsets = slides.map((_, i) => wrap(i));

    const geometry = () => (desktop.matches
      ? { size: 720, scale: 0.66, gap: 40 }
      : { size: viewport.clientWidth - 48, scale: 1, gap: 8 });

    const xFor = (d, g) => {
      if (d === 0) return 0;
      const side = g.size * g.scale;
      const first = g.size / 2 + g.gap + side / 2;
      return Math.sign(d) * (first + (Math.abs(d) - 1) * (side + g.gap));
    };

    function layout(animate) {
      const g = geometry();
      slides.forEach((slide, i) => {
        const d = wrap(i - active);
        const jumped = Math.abs(d - offsets[i]) > 1;
        offsets[i] = d;
        slide.classList.toggle('no-anim', !animate || jumped);
        slide.style.transform = `translate3d(${xFor(d, g)}px, 0, 0) scale(${d === 0 ? 1 : g.scale})`;
        slide.style.zIndex = String(10 - Math.abs(d));
        slide.style.opacity = Math.abs(d) > 2 ? '0' : '1';
        slide.setAttribute('aria-hidden', String(d !== 0));
        const caption = $('.carousel__caption', slide);
        caption.style.transform = d === 0 || g.scale === 1 ? 'none' : `scale(${1 / g.scale}) translateY(-12px)`;
        const v = $('video', slide);
        if (v) { if (d === 0 && inView) playVideo(v); else pauseVideo(v); }
      });
      dots.forEach((dot, i) => {
        if (i === active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      void viewport.offsetWidth;
      slides.forEach((s) => s.classList.remove('no-anim'));
    }
    const go = (i) => { active = (i + count) % count; layout(true); };

    dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
    });

    let startX = null;
    let dx = 0;
    viewport.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      startX = e.clientX;
      dx = 0;
    });
    viewport.addEventListener('pointermove', (e) => { if (startX !== null) dx = e.clientX - startX; });
    viewport.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      startX = null;
      if (Math.abs(dx) > 50) { go(active + (dx < 0 ? 1 : -1)); return; }
      if (Math.abs(dx) < 6) {
        const slide = e.target.closest('.carousel__slide');
        const i = slides.indexOf(slide);
        if (i > -1 && i !== active) go(i);
      }
    });
    viewport.addEventListener('pointercancel', () => { startX = null; });
    viewport.addEventListener('pointerleave', () => { startX = null; });

    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      const v = $('video', slides[active]);
      if (inView) playVideo(v); else pauseVideo(v);
    }, { threshold: 0.3 }).observe(viewport);
    window.addEventListener('resize', () => layout(false));
    layout(false);
  }

  /* ---------- Companion chat bubbles ---------- */
  const bubbles = $('[data-bubbles]');
  if (bubbles) {
    const lines = JSON.parse(bubbles.dataset.bubbles);
    let next = 0;
    let timer = null;
    const add = () => {
      const b = document.createElement('p');
      b.className = 'bubble';
      b.textContent = lines[next % lines.length];
      next += 1;
      bubbles.appendChild(b);
      const live = $$('.bubble:not(.is-leaving)', bubbles);
      if (live.length > 2) {
        live[0].classList.add('is-leaving');
        window.setTimeout(() => live[0].remove(), 400);
      }
    };
    if (reduceMotion.matches) {
      add(); add();
    } else {
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !timer) {
          if (!bubbles.children.length) add();
          timer = window.setInterval(add, 2600);
        } else if (!entry.isIntersecting) {
          window.clearInterval(timer);
          timer = null;
        }
      }, { threshold: 0.4 }).observe(bubbles.parentElement);
    }
  }

  /* ---------- Dialogs (FAQ / Product) ---------- */
  let lastTrigger = null;
  function openDialog(dialog, trigger) {
    if (!dialog || dialog.open) return;
    lastTrigger = trigger || document.activeElement;
    dialog.showModal();
    root.classList.add('is-locked');
    window.requestAnimationFrame(() => dialog.classList.add('is-open'));
  }
  function closeDialog(dialog) {
    if (!dialog.open || dialog.dataset.closing) return;
    dialog.dataset.closing = 'true';
    dialog.classList.remove('is-open');
    const done = () => {
      delete dialog.dataset.closing;
      dialog.close();
      root.classList.remove('is-locked');
      if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
    };
    if (reduceMotion.matches) done(); else window.setTimeout(done, 320);
  }
  $$('[data-open]').forEach((btn) => btn.addEventListener('click', () => openDialog(document.getElementById(btn.dataset.open), btn)));
  $$('dialog.overlay').forEach((dialog) => {
    dialog.addEventListener('cancel', (e) => { e.preventDefault(); closeDialog(dialog); });
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog || e.target.closest('[data-close]')) closeDialog(dialog);
    });
  });

  /* FAQ accordion: one answer open at a time */
  const setFaq = (item, open) => {
    item.classList.toggle('is-open', open);
    $('.faq-q', item).setAttribute('aria-expanded', String(open));
    $('.faq-a', item).inert = !open;
  };
  $$('.faq-q').forEach((btn) => btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = !item.classList.contains('is-open');
    $$('.faq-item.is-open').forEach((other) => { if (other !== item) setFaq(other, false); });
    setFaq(item, open);
  }));

  /* Product tabs: jump to section, follow scroll */
  const specScroll = $('[data-spec-scroll]');
  const specTabs = $$('.spec-tab');
  if (specScroll) {
    specTabs.forEach((tab) => tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.specTarget);
      specScroll.scrollTo({ top: target.offsetTop - 112, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }));
    specScroll.addEventListener('scroll', () => {
      const y = specScroll.scrollTop + 160;
      let current = specTabs[0];
      specTabs.forEach((tab) => {
        if (document.getElementById(tab.dataset.specTarget).offsetTop <= y) current = tab;
      });
      if (specScroll.scrollTop + specScroll.clientHeight >= specScroll.scrollHeight - 4) current = specTabs[specTabs.length - 1];
      specTabs.forEach((tab) => {
        if (tab === current) tab.setAttribute('aria-current', 'true');
        else tab.removeAttribute('aria-current');
      });
    }, { passive: true });
  }
})();
