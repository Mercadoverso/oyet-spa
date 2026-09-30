/**
 * Oyet SpA — Main JS
 * Inicialización global del sitio
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS si está disponible
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true, mirror: false });
    }

    // Inicializar Swiper si existe el contenedor
    var heroSwiper = document.querySelector('.hero-swiper');
    if (heroSwiper && typeof Swiper !== 'undefined') {
      new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        speed: 2000,
        a11y: { enabled: true }
      });
    }

    // Año dinámico en footer
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();