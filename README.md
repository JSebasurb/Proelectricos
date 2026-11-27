# Proeléctricos Popayán · Sitio web

Centro de servicio autorizado DEWALT con más de 20 años de experiencia. Sitio estático (HTML + CSS + JS), sin compilación ni dependencias.

## Estructura (medallón)

```
proelectricos-popayan/
├── index.html              ← página única (rutas por #hash)
├── 404.html                ← redirige al inicio
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
    ├── favicon.webp
    └── icon-180.png
```

## Antes de publicar

Edita el bloque `CONFIG` al inicio de `js/app.js`:

- `whatsapp`: tu número real (57 + 10 dígitos, sin + ni espacios). Hoy es un número de ejemplo.
- `nit`: tu NIT real.
- `csvInventario` / `csvGarantias` (opcional): enlaces CSV publicados desde Google Sheets.

El horario de atención está en `HORARIO` (mismo archivo) y alimenta el estado "Abierto ahora" y el mensaje del hero.

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
