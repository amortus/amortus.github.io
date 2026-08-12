/* ══════════════════════════════════════════════════════
   Alysson Guedim — Portfolio
   i18n (PT/EN) · theme · filter · nav · reveal · modal
   ══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_LANG  = 'ag.lang';
  var LS_THEME = 'ag.theme';
  var lang     = 'pt';

  var T = {
    details: { pt: 'Ver detalhes',  en: 'View details' },
    shot:    { pt: 'captura',       en: 'screenshot' },
    trailer: { pt: 'Trailer',       en: 'Trailer' },
    close:   { pt: 'Fechar',        en: 'Close' }
  };

  function t(key) { return T[key][lang]; }

  /* ── Language ─────────────────────────────────────── */
  var LANG_ATTR = { pt: 'pt-BR', en: 'en' };

  function applyLang(next) {
    if (next !== 'pt' && next !== 'en') next = 'pt';
    lang = next;

    document.documentElement.lang = LANG_ATTR[lang];

    document.querySelectorAll('[data-pt]').forEach(function (el) {
      var txt = el.getAttribute('data-' + lang);
      if (txt !== null) el.innerHTML = txt;
    });

    // aria-label translations (attribute, not content)
    document.querySelectorAll('[data-pt-label]').forEach(function (el) {
      var v = el.getAttribute('data-' + lang + '-label');
      if (v) el.setAttribute('aria-label', v);
    });

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      var on = btn.dataset.lang === lang;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
    });

    try { localStorage.setItem(LS_LANG, lang); } catch (e) {}

    // Re-render the modal so its generated content follows the language
    if (openId) render(openId, index);
  }

  function initialLang() {
    var saved;
    try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
    if (saved === 'pt' || saved === 'en') return saved;
    return (navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  /* ── Theme ────────────────────────────────────────── */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#faf9f7' : '#0b0d10');
    try { localStorage.setItem(LS_THEME, theme); } catch (e) {}
  }

  function initialTheme() {
    var saved;
    try { saved = localStorage.getItem(LS_THEME); } catch (e) {}
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  applyTheme(initialTheme());

  var themeBtn = document.getElementById('theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }

  /* ══════════════════════════════════════════════════
     PROJECT DETAIL MODAL
     ══════════════════════════════════════════════════ */
  var DATA    = window.PROJECTS || {};
  var modal   = document.getElementById('modal');
  var panel   = modal && modal.querySelector('.modal__panel');
  var stage   = document.getElementById('mStage');
  var thumbs  = document.getElementById('mThumbs');
  var counter = document.getElementById('mCounter');
  var prevBtn = document.getElementById('mPrev');
  var nextBtn = document.getElementById('mNext');

  var openId  = null;   // id of the project currently open
  var index   = 0;      // current slide
  var opener  = null;   // element to restore focus to
  var media   = [];

  /* --- Add a "View details" button to every project card --- */
  function mountButtons() {
    document.querySelectorAll('[data-id]').forEach(function (card) {
      var id = card.dataset.id;
      if (!DATA[id]) return;

      var host = card.querySelector('.card__body') || card.querySelector('.feat__body');
      if (!host) return;

      var wrap = card.querySelector('.card__links') || card.querySelector('.feat__links');
      var btn  = document.createElement('button');
      btn.type = 'button';
      btn.className = 'more';
      btn.setAttribute('data-pt', T.details.pt);
      btn.setAttribute('data-en', T.details.en);
      btn.textContent = T.details[lang];
      btn.addEventListener('click', function (e) { e.stopPropagation(); open(id, btn); });

      if (wrap) wrap.insertBefore(btn, wrap.firstChild);
      else {
        var box = document.createElement('div');
        box.className = card.classList.contains('feat') ? 'feat__links' : 'card__links';
        box.appendChild(btn);
        host.appendChild(box);
      }

      // Clicking anywhere on the card (except a real link) opens it too
      card.addEventListener('click', function (e) {
        if (e.target.closest('a') || e.target.closest('button')) return;
        open(id, btn);
      });
      card.classList.add('is-clickable');
    });
  }

  /* --- Build one slide --- */
  function slide(item, i, title) {
    if (item.t === 'video') {
      var v = document.createElement('video');
      v.src = item.s;
      v.poster = item.p || '';
      v.controls = true;
      v.preload = 'none';
      v.playsInline = true;
      v.className = 'modal__video';
      v.setAttribute('aria-label', title + ' — ' + t('trailer'));
      return v;
    }
    var img = document.createElement('img');
    img.src = item.s;
    img.alt = title + ' — ' + t('shot') + ' ' + i;
    img.className = 'modal__img';
    img.decoding = 'async';
    return img;
  }

  function stopVideo() {
    var v = stage && stage.querySelector('video');
    if (v && !v.paused) v.pause();
  }

  /* --- Render the modal for a project at a given slide --- */
  function render(id, at) {
    var p    = DATA[id];
    var card = document.querySelector('[data-id="' + id + '"]');
    if (!p || !card) return;

    media = p.media || [];
    index = Math.max(0, Math.min(at || 0, media.length - 1));

    var copy  = p[lang] || p.pt;
    var title = (card.querySelector('.card__title, .feat__title') || {}).textContent || '';

    // Text pulled straight from the card, so it is never duplicated in two places
    document.getElementById('mTitle').textContent = title;
    document.getElementById('mMeta').textContent =
      (card.querySelector('.card__meta, .feat__meta') || {}).textContent || '';
    document.getElementById('mText').textContent = copy.text || '';

    function fill(target, source) {
      var el = document.getElementById(target);
      el.innerHTML = '';
      var src = card.querySelector(source);
      if (src) Array.prototype.forEach.call(src.children, function (li) {
        el.appendChild(li.cloneNode(true));
      });
    }
    fill('mRoles', '.tags--role');
    fill('mTech',  '.tags--tech');

    var hl = document.getElementById('mHl');
    hl.innerHTML = '';
    (copy.hl || []).forEach(function (line) {
      var li = document.createElement('li');
      li.textContent = line;
      hl.appendChild(li);
    });

    var links = document.getElementById('mLinks');
    links.innerHTML = '';
    card.querySelectorAll('.card__links a, .feat__links a').forEach(function (a) {
      links.appendChild(a.cloneNode(true));
    });

    // Media stage
    stage.innerHTML = '';
    stage.appendChild(slide(media[index], index + 1, title));

    // Thumbnails
    thumbs.innerHTML = '';
    media.forEach(function (item, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'thumb' + (i === index ? ' is-on' : '');
      b.setAttribute('aria-label', title + ' — ' + t('shot') + ' ' + (i + 1));
      b.setAttribute('aria-current', i === index ? 'true' : 'false');

      var im = document.createElement('img');
      im.src = item.t === 'video' ? (item.p || '') : item.s;
      im.alt = '';
      im.loading = 'lazy';
      b.appendChild(im);

      if (item.t === 'video') {
        var play = document.createElement('span');
        play.className = 'thumb__play';
        play.setAttribute('aria-hidden', 'true');
        b.appendChild(play);
      }

      b.addEventListener('click', function () { go(i); });
      thumbs.appendChild(b);
    });

    counter.textContent = (index + 1) + ' / ' + media.length;
    var solo = media.length < 2;
    prevBtn.hidden = solo;
    nextBtn.hidden = solo;
    thumbs.hidden  = solo;
  }

  function go(i) {
    if (!media.length) return;
    stopVideo();
    index = (i + media.length) % media.length;
    render(openId, index);

    // Scroll the thumbnail strip only — scrollIntoView would also scroll the
    // panel and push the title out of view.
    var active = thumbs.children[index];
    if (active) {
      thumbs.scrollLeft = active.offsetLeft - (thumbs.clientWidth - active.offsetWidth) / 2;
    }
  }

  function open(id, from) {
    if (!DATA[id]) return;
    openId = id;
    opener = from || document.activeElement;

    render(id, 0);

    modal.hidden = false;
    document.body.classList.add('is-locked');
    requestAnimationFrame(function () { modal.classList.add('is-open'); });

    var close = modal.querySelector('.modal__close');
    if (close) close.focus();
  }

  function close() {
    if (!openId) return;
    stopVideo();
    modal.classList.remove('is-open');
    openId = null;

    var done = function () {
      modal.hidden = true;
      stage.innerHTML = '';
      document.body.classList.remove('is-locked');
      if (opener && opener.focus) opener.focus();
      opener = null;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) done();
    else setTimeout(done, 180);
  }

  if (modal) {
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    prevBtn.addEventListener('click', function () { go(index - 1); });
    nextBtn.addEventListener('click', function () { go(index + 1); });

    document.addEventListener('keydown', function (e) {
      if (!openId) return;

      if (e.key === 'Escape')     { e.preventDefault(); close(); return; }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(index - 1); return; }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); return; }

      // Focus trap
      if (e.key === 'Tab') {
        var f = panel.querySelectorAll('a[href], button:not([hidden]), video[controls]');
        var list = Array.prototype.filter.call(f, function (el) {
          return el.offsetParent !== null || el.tagName === 'VIDEO';
        });
        if (!list.length) return;
        var first = list[0], last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Swipe on touch
    var x0 = null;
    stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  mountButtons();

  /* ── Project filter ───────────────────────────────── */
  var cards = Array.prototype.slice.call(document.querySelectorAll('#grid .card'));
  var empty = document.getElementById('empty');

  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter;

      document.querySelectorAll('.chip').forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', String(on));
      });

      var visible = 0;
      cards.forEach(function (card) {
        var show = f === 'all' || (card.dataset.tags || '').split(/\s+/).indexOf(f) !== -1;
        card.classList.toggle('is-hidden', !show);
        if (show) visible++;
      });

      if (empty) empty.hidden = visible > 0;
    });
  });

  /* ── Nav: sticky state + mobile menu ──────────────── */
  var nav    = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var links  = document.querySelector('.nav__links');

  function onScroll() { if (nav) nav.classList.toggle('is-stuck', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (burger && links) {
    burger.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', String(links.classList.toggle('is-open')));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Reveal on scroll ─────────────────────────────── */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.feat, .card, .skill, .panel, .ccard, .section__head, .about__main'
    );

    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ── Footer year ──────────────────────────────────── */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* ── Boot ─────────────────────────────────────────── */
  applyLang(initialLang());
})();
