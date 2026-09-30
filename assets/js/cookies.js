/**
 * Oyet SpA — Gestión de cookies (Ley 19.628 Chile)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'oyet-cookie-consent';
  var VERSION = '1.0';

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: VERSION,
        value: value,
        date: new Date().toISOString()
      }));
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    var consent = getConsent();

    if (!consent) {
      setTimeout(function () {
        banner.classList.add('is-visible');
      }, 800);
    }

    var btnAccept = document.getElementById('cookie-accept');
    var btnReject = document.getElementById('cookie-reject');

    function close(value) {
      setConsent(value);
      banner.classList.remove('is-visible');
      document.dispatchEvent(new CustomEvent('oyet:cookieConsent', { detail: value }));
    }

    if (btnAccept) btnAccept.addEventListener('click', function () { close('all'); });
    if (btnReject) btnReject.addEventListener('click', function () { close('necessary'); });
  });

  window.OyetCookies = {
    get: getConsent,
    set: setConsent
  };
})();