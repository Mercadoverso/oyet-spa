/**
 * Oyet SpA — Descarga de fichas técnicas con feedback
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[download]').forEach(function (link) {
      link.addEventListener('click', function () {
        var original = link.innerHTML;
        link.innerHTML = '⏳ Descargando...';
        link.style.pointerEvents = 'none';
        setTimeout(function () {
          link.innerHTML = '✓ Descargada';
          setTimeout(function () {
            link.innerHTML = original;
            link.style.pointerEvents = '';
          }, 2000);
        }, 800);
      });
    });
  });
})();