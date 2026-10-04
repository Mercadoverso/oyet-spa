/**
 * Oyet SpA — Modo alto contraste (persistente)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'oyet-high-contrast';

  // Ícono SVG: círculo mitad lleno / mitad vacío
  var ICON = '<svg class="w-4 h-4 inline-block" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor"/><path d="M12 3a9 9 0 0 0 0 18" fill="currentColor" stroke="currentColor"/></svg>';

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('contrast-toggle');
    var btnMobile = document.getElementById('contrast-toggle-mobile');
    var body = document.body;

    var isActive = false;
    try {
      isActive = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) { /* localStorage bloqueado */ }

    function updateButtons(active) {
      if (btn) btn.innerHTML = ICON + ' ' + (active ? 'Normal' : 'Contraste');
      if (btnMobile) btnMobile.innerHTML = ICON + ' ' + (active ? 'Modo Normal' : 'Modo Contraste');
    }

    if (isActive) {
      body.classList.add('high-contrast');
      updateButtons(true);
    } else {
      updateButtons(false);
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