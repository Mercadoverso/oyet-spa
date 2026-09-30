/**
 * Oyet SpA — Validación y envío seguro de formularios
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-oyet-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Honeypot check
        var honeypot = form.querySelector('.honeypot');
        if (honeypot && honeypot.value !== '') {
          // Bot detectado, fingir éxito
          console.warn('Bot detectado');
          return false;
        }

        // Validación nativa
        if (!form.checkValidity()) {
          form.reportValidity();
          return false;
        }

        // Enviar por fetch a endpoint seguro
        var action = form.getAttribute('action') || '#';
        var formData = new FormData(form);

        // Aquí se conectaría a tu backend / servicio de correo
        // Ejemplo: fetch(action, { method: 'POST', body: formData })
        console.info('Formulario listo para enviar a:', action);
        console.info('Datos:', Object.fromEntries(formData.entries()));

        // Feedback al usuario
        var btn = form.querySelector('button[type="submit"]');
        if (btn) {
          var original = btn.textContent;
          btn.textContent = 'Enviado ✓';
          btn.disabled = true;
          setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
            form.reset();
          }, 3000);
        }
      });
    });
  });
})();