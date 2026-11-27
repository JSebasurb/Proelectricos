# Proeléctricos Popayán · Sitio web

Centro de servicio autorizado DEWALT con más de 20 años de experiencia. Sitio estático (HTML + CSS + JS), sin compilación ni dependencias.

## Estructura (medallón)

```
proelectricos-popayan/
├── index.html              ← página única (rutas por #hash)
├── 404.html                ← redirige al inicio
├── robots.txt · sitemap.xml ← SEO: indexación y mapa del sitio
├── tools/set-url.sh        ← cambia la URL de ejemplo por la tuya
├── .nojekyll               ← evita el procesado de Jekyll en GitHub Pages
├── css/
│   ├── base.css            ← estilos base (tipografía, tarjetas, formularios, tablas…)
│   ├── medallon.css        ← capa visual medallón (hero, hub radial, medallas)
│   └── movil.css           ← menú hamburguesa, título corto, hero dinámico, sello +20 años
├── js/
│   ├── app.js              ← CONFIG, catálogo, calculadoras, garantías, cotización, idioma
│   └── menu-hero.js        ← menú hamburguesa y hero rotativo
└── assets/img/
    ├── logo-medallon.webp  ← logo recortado en círculo, fondo transparente
    ├── logo-original.webp  ← logo original sin recortar
    ├── og-image.png        ← imagen al compartir en WhatsApp/Facebook (1200×630)
    ├── favicon.webp
    └── icon-180.png
```

## Antes de publicar

Edita el bloque `CONFIG` al inicio de `js/app.js`:

- `whatsapp`: tu número real (57 + 10 dígitos, sin + ni espacios). Hoy es un número de ejemplo.
- `nit`: tu NIT real.
- `csvInventario` / `csvGarantias` (opcional): enlaces CSV publicados desde Google Sheets.

El horario de atención está en `HORARIO` (mismo archivo) y alimenta el estado "Abierto ahora" y el mensaje del hero.

## SEO (importante: configura tu URL)

El sitio ya incluye título y descripción, etiquetas Open Graph y Twitter, URL canónica, datos estructurados de negocio local (JSON-LD), `robots.txt`, `sitemap.xml` e imagen para compartir.

Las URLs vienen con una dirección de ejemplo. Cuando sepas tu URL final, ejecútalo una vez:

```bash
./tools/set-url.sh https://TU-USUARIO.github.io/proelectricos-popayan/
```

(o busca y reemplaza `https://TU-USUARIO.github.io/proelectricos-popayan/` en `index.html`, `robots.txt` y `sitemap.xml`).

Después:
1. Crea o reclama tu ficha en **Google Business Profile** con la misma dirección y horario, y enlaza el sitio. Es lo que más ayuda a aparecer en "servicio DEWALT Popayán".
2. Registra el sitio en **Google Search Console** y envía el `sitemap.xml`.
3. En `index.html`, dentro del bloque JSON-LD, agrega `"telephone": "+57..."` con tu teléfono real.

Notas: Google solo lee `robots.txt` en la raíz de un dominio, así que funciona del todo con dominio propio o un sitio de usuario (`usuario.github.io`); en un sitio de proyecto no hace daño, pero conviene enviar el sitemap manualmente. Además, el sitio es de una sola página con secciones por `#hash`, por lo que Google lo indexa como una única página.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `proelectricos-popayan`).
2. Sube **el contenido** de esta carpeta a la raíz del repositorio (que `index.html` quede en la raíz).
3. En el repositorio: **Settings → Pages → Build and deployment**.
4. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
5. En uno o dos minutos el sitio estará en `https://TU-USUARIO.github.io/proelectricos-popayan/`.

Con Git en la terminal:

```bash
git init
git add .
git commit -m "Sitio Proeléctricos Popayán"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/proelectricos-popayan.git
git push -u origin main
```

Para usar un dominio propio, agrega un archivo `CNAME` con el dominio y configúralo en *Settings → Pages*.

## Ver en local

```bash
python3 -m http.server 8000
```

y abre http://localhost:8000
