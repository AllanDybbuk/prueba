/**
 * ISET SpA — main.js
 * Lógica principal: animaciones, navegación, formulario WhatsApp.
 * IIFE pattern — sin import/export, sin type="module".
 */
;(function () {
  'use strict';

  /* ── UTILIDAD: try/catch seguro ─────────────────────── */
  function safe(fn, name) {
    try { fn(); }
    catch (e) { console.warn('[ISET] init falló en:', name, e); }
  }

  /* ── DATOS ────────────────────────────────────────────── */
  var D = window.__ISET__ || {};

  /* ── SPLASH ───────────────────────────────────────────── */
  safe(function () {
    var splash = document.getElementById('splash');
    if (!splash) return;

    function hideSplash() {
      splash.classList.add('splash--out');
      setTimeout(function () {
        splash.style.display = 'none';
        document.body.classList.add('ready');
      }, 600);
    }

    // Red primaria: animación CSS (~3s)
    setTimeout(hideSplash, 3200);

    // Red secundaria: forzar si algo falló
    setTimeout(function () {
      if (splash.style.display !== 'none') hideSplash();
    }, 5000);
  }, 'splash');

  /* ── NAV SCROLL ───────────────────────────────────────── */
  safe(function () {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var lastY = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 80) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastY = y;
    }, { passive: true });
  }, 'nav-scroll');

  /* ── MENÚ HAMBURGUESA ─────────────────────────────────── */
  safe(function () {
    var btn   = document.getElementById('menu-toggle');
    var menu  = document.getElementById('nav-links');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('nav-links--open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.classList.toggle('is-open', open);
    });

    // Cerrar al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('nav-links--open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('is-open');
      });
    });
  }, 'hamburger');

  /* ── CURSOR PERSONALIZADO ─────────────────────────────── */
  safe(function () {
    var cur = document.getElementById('cursor');
    if (!cur || window.matchMedia('(pointer: coarse)').matches) {
      if (cur) cur.style.display = 'none';
      return;
    }
    document.addEventListener('mousemove', function (e) {
      cur.style.transform = 'translate(' + (e.clientX - 12) + 'px,' + (e.clientY - 12) + 'px)';
    });
    document.addEventListener('mousedown', function () { cur.classList.add('cursor--click'); });
    document.addEventListener('mouseup',   function () { cur.classList.remove('cursor--click'); });

    var links = document.querySelectorAll('a,button,input,select,textarea');
    links.forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('cursor--hover'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('cursor--hover'); });
    });
  }, 'cursor');

  /* ── SMOOTH SCROLL ANCLAS ─────────────────────────────── */
  safe(function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, 'smooth-scroll');

  /* ── CONTADORES ANIMADOS (CSS fallback) ───────────────── */
  safe(function () {
    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    function animateCounter(el) {
      var target  = parseInt(el.dataset.counter, 10);
      var sufijo  = el.dataset.sufijo || '';
      var durMs   = 1800;
      var start   = null;

      function step(ts) {
        if (!start) start = ts;
        var prog = Math.min((ts - start) / durMs, 1);
        var ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.round(ease * target) + sufijo;
        if (prog < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { io.observe(el); });
  }, 'contadores');

  /* ── SVG STROKE DRAW (tarjetas servicio) ──────────────── */
  safe(function () {
    var svgs = document.querySelectorAll('.svc-icon svg');
    if (!svgs.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    svgs.forEach(function (s) { io.observe(s); });
  }, 'svg-draw');

  /* ── REVEAL SECTIONS (GSAP opcional + CSS fallback) ──── */
  safe(function () {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    // Siempre agregar clase .visible con IntersectionObserver (CSS fallback)
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });

    // GSAP enriquece si está disponible
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      revealEls.forEach(function (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'all'
        });
      });

      // Stagger tarjetas servicio
      gsap.from('.svc-card', {
        scrollTrigger: { trigger: '#servicios', start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all'
      });
    }
  }, 'reveal');

  /* ── GALERÍA: RENDER DINÁMICO ─────────────────────────── */
  safe(function () {
    var grid = document.getElementById('galeria-grid');
    if (!grid || !D.galeria || !D.galeria.length) return;

    // Verificar si ya fue renderizado en HTML
    if (grid.children.length) return;

    D.galeria.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'gallery-item reveal';

      var img = document.createElement('img');
      img.src   = item.src;
      img.alt   = item.alt;
      img.loading = 'lazy';

      var cap = document.createElement('div');
      cap.className = 'gallery-caption';
      cap.innerHTML = '<span class="gallery-cat">' + item.categoria + '</span><p>' + item.alt + '</p>';

      div.appendChild(img);
      div.appendChild(cap);
      grid.appendChild(div);
    });
  }, 'galeria');

  /* ── FORMULARIO → WHATSAPP ────────────────────────────── */
  safe(function () {
    var form = document.getElementById('cotizar-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre   = (form.querySelector('#f-nombre')   || {}).value  || '';
      var empresa  = (form.querySelector('#f-empresa')  || {}).value  || '';
      var telefono = (form.querySelector('#f-telefono') || {}).value  || '';
      var servicio = (form.querySelector('#f-servicio') || {}).value  || '';
      var detalles = (form.querySelector('#f-detalles') || {}).value  || '';

      var wa = (D.contacto && D.contacto.whatsapp) || '56982641655';

      var msg = [
        '🔧 *Solicitud de Cotización ISET*',
        '',
        '👤 *Nombre:* ' + nombre,
        '🏢 *Empresa:* ' + empresa,
        '📞 *Teléfono:* ' + telefono,
        '⚡ *Servicio:* ' + servicio,
        '',
        '📋 *Detalles:*',
        detalles,
        '',
        '_Mensaje enviado desde iset.cl_'
      ].join('\n');

      var url = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank');
    });
  }, 'whatsapp-form');

  /* ── MARQUEE: pausa al hover ─────────────────────────── */
  safe(function () {
    var track = document.querySelector('.marquee-track');
    if (!track) return;
    track.addEventListener('mouseenter', function () { track.style.animationPlayState = 'paused'; });
    track.addEventListener('mouseleave', function () { track.style.animationPlayState = 'running'; });
  }, 'marquee');

  /* ── AÑO COPYRIGHT ────────────────────────────────────── */
  safe(function () {
    var el = document.getElementById('copy-year');
    if (el) el.textContent = new Date().getFullYear();
  }, 'year');

  /* ── VOLVER ARRIBA ────────────────────────────────────── */
  safe(function () {
    var btn = document.getElementById('back-top');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
  }, 'back-top');

})();
