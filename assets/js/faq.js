/**
 * Oyet SpA — Acordeón FAQ accesible
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (button) {
      button.setAttribute('aria-expanded', 'false');

      button.addEventListener('click', function () {
        var item = button.closest('.faq-item');
        var answer = item.querySelector('.faq-answer');
        var icon = button.querySelector('svg');
        var isOpen = answer.classList.contains('is-open');

        // Cerrar todos
        document.querySelectorAll('.faq-answer').forEach(function (a) {
          a.classList.remove('is-open');
          a.style.display = 'none';
        });
        document.querySelectorAll('.faq-question').forEach(function (q) {
          q.setAttribute('aria-expanded', 'false');
        });
        document.querySelectorAll('.faq-question svg').forEach(function (ico) {
          ico.style.transform = 'rotate(0deg)';
        });

        // Abrir el actual si estaba cerrado
        if (!isOpen) {
          answer.classList.add('is-open');
          answer.style.display = 'block';
          button.setAttribute('aria-expanded', 'true');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  });
})();