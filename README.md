# Proelectricos – sitio base
Estructura por capas:
- `js/data.js`  → DATOS (textos, contacto, FAQ del chatbot). Aquí editas casi todo.
- `js/app.js`   → LÓGICA (renderiza la página y el chatbot).
- `css/style.css` + `index.html` → PRESENTACIÓN.

## Publicar en GitHub Pages
1. Crea un repositorio y sube todo el contenido de esta carpeta (index.html en la raíz).
2. Settings → Pages → Branch: main / (root) → Save.
3. Cambia `whatsapp` en js/data.js por el número real.

## Archivos
- js/icons.js → ilustraciones SVG propias
- js/data.js  → productos, textos ES/EN, FAQ, cargas de la calculadora

## Antes de publicar (checklist)
- js/data.js: whatsapp, horario.
- privacidad.html / terminos.html y pie de index.html: completar NIT. Revisar los textos legales con un abogado.
- robots.txt y sitemap.xml: cambiar TU-USUARIO/TU-REPO por tu URL real (o dominio propio).
- Opcional: og:image con una imagen PNG 1200x630 (las redes sociales no leen SVG).
- assets/logo.svg e icon.svg: reemplazar por el logo oficial si ya tienen uno.

## Promociones
Edita `PROMOS` en js/data.js: título, descripción, badge, ícono (drill, grinder, saw, hammer, battery, inverter) y fecha `hasta`. Las vencidas se ocultan solas; sin vigentes, la sección desaparece.
