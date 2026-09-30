# Oyet SpA — Sitio Web Corporativo

Sitio web oficial de **Oyet SpA**, empresa metalmecánica especializada en equipos para minería y transporte de carga pesada en Chile.

## 🚀 Stack

- HTML5 semántico
- CSS3 (variables nativas, sin dependencias obligatorias)
- JavaScript ES6+ (vanilla, modular)
- Tailwind CSS (vía CDN con SRI)
- Swiper.js (carrusel hero)
- AOS (animaciones on-scroll)

## 📁 Estructura

Ver árbol de carpetas en el repositorio.

## 🛠️ Desarrollo local

```bash
# Servir localmente (Python)
python3 -m http.server 8000

# O con Node
npx serve .
Abrir http://localhost:8000

🔒 Seguridad
Content Security Policy estricta

Subresource Integrity (SRI) en CDNs

rel="noopener noreferrer" en enlaces externos

Honeypot antispam en formularios

Sin almacenamiento de datos sensibles en cliente

Cumple Ley 19.628 (Protección de Datos Chile)

📜 Licencia
© 2026 Oyet SpA. Todos los derechos reservados.
Ver LICENSE.

📞 Contacto
Web: https://oyet.cl

Email: contacto@oyet.cl

Teléfono: +56 9 9220 0717

Ubicación: Lampa, Santiago, Chile

text

---

## 📄 3. `LICENSE`
Copyright (c) 2026 Oyet SpA

Todos los derechos reservados.

Este código fuente es propiedad exclusiva de Oyet SpA.
Queda prohibida su reproducción, distribución o modificación
sin autorización escrita de Oyet SpA.

El contenido, imágenes, textos, logotipos y demás elementos
gráficos son propiedad intelectual de Oyet SpA y están
protegidos por las leyes chilenas e internacionales de
propiedad intelectual.

text

---

## 📄 4. `robots.txt`

```txt
# robots.txt — Oyet SpA
User-agent: *
Allow: /
Disallow: /fichas/
Disallow: /*.pdf$

Sitemap: https://oyet.cl/sitemap.xml