/**
 * Oyet SpA — Modo alto contraste (persistente)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'oyet-high-contrast';

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('contrast-toggle');
    var btnMobile = document.getElementById('contrast-toggle-mobile');
    var body = document.body;

    var isActive = false;
    try {
      isActive = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) { /* localStorage bloqueado */ }

    if (isActive) {
      body.classList.add('high-contrast');
      updateButtons(true);
    }

    function updateButtons(active) {
      if (btn) btn.textContent = active ? '🌓 Normal' : '🌓 Contraste';
      if (btnMobile) btnMobile.innerHTML = active ? '🌓 Modo Normal' : '🌓 Modo Contraste';
    }

    function toggle() {
      body.classList.toggle('high-contrast');
      var active = body.classList.contains('high-contrast');
      try { localStorage.setItem(STORAGE_KEY, String(active)); } catch (e) {}
      updateButtons(active);
    }

    if (btn) btn.addEventListener('click', toggle);
    if (btnMobile) btnMobile.addEventListener('click', toggle);
  });
})();