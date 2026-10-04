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
    var heroSwiperEl = document.querySelector('.hero-swiper');
    if (heroSwiperEl && typeof Swiper !== 'undefined') {
      var heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        speed: 2000,
        a11y: { enabled: true }
      });

      // Flechas de navegación
      var prevBtn = document.querySelector('.hero-nav-prev');
      var nextBtn = document.querySelector('.hero-nav-next');

      if (prevBtn) {
        prevBtn.addEventListener('click', function () { heroSwiper.slidePrev(); });
        prevBtn.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); heroSwiper.slidePrev(); }
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () { heroSwiper.slideNext(); });
        nextBtn.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); heroSwiper.slideNext(); }
        });
      }
    }

    // Año dinámico en footer
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();