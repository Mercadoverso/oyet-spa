/**
 * Oyet SpA — Main JS
 * Inicialización global del sitio
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // AOS (animaciones on scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true, mirror: false });
    }

    // Swiper del hero
    var heroSwiperEl = document.querySelector('.hero-swiper');
    if (heroSwiperEl && typeof Swiper !== 'undefined') {
      var heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        speed: 300,                     // cambio rápido (300ms)
        a11y: { enabled: true }
      });

      // Conectar flechas del hero
      var heroControls = document.querySelector('.hero-controls');
      if (heroControls) {
        heroControls.addEventListener('click', function (e) {
          var btn = e.target.closest('.hero-nav');
          if (!btn) return;
          e.preventDefault();
          e.stopPropagation();
          if (btn.classList.contains('hero-nav-prev')) {
            heroSwiper.slidePrev(300);
          } else if (btn.classList.contains('hero-nav-next')) {
            heroSwiper.slideNext(300);
          }
        });
      }
    } else {
      console.warn('Swiper no disponible o hero no encontrado.');
    }

    // Año dinámico en footer
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();