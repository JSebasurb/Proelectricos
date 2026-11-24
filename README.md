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
- js/data.js  → productos, textos ES/EN, FAQ, electrodos de la calculadora de soldadura

## Antes de publicar (checklist)
- js/data.js: whatsapp, horario.
- privacidad.html / terminos.html y pie de index.html: completar NIT. Revisar los textos legales con un abogado.
- robots.txt y sitemap.xml: cambiar TU-USUARIO/TU-REPO por tu URL real (o dominio propio).
- Opcional: og:image con una imagen PNG 1200x630 (las redes sociales no leen SVG).
- assets/logo.svg e icon.svg: reemplazar por el logo oficial si ya tienen uno.

## Promociones
Edita `PROMOS` en js/data.js: título, descripción, badge, ícono (drill, grinder, saw, hammer, battery, inverter = inversor soldador) y fecha `hasta`. Las vencidas se ocultan solas; sin vigentes, la sección desaparece.

## Búsqueda inteligente
js/search.js entiende tareas ("cortar baldosa"), sinónimos ES/EN y errores de tipeo. Al agregar un producto nuevo en PRODUCTOS, añade sus palabras en TAGS (por categoría o por referencia) para que la búsqueda lo encuentre.

## Lens, Asistente IA e inventario (BETA)
- Precios/existencias: edita INVENTARIO en js/data.js, o publica una hoja de Google Sheets como CSV
  (Archivo > Compartir > Publicar en la web > CSV) con columnas: referencia, precio, stock, nota, y pega la URL en INV_CONF.csvUrl.
  Mientras estén en null el asistente remite a un asesor (no inventa datos).
- IA real: worker/ia-worker.js es un ejemplo de servidor (Cloudflare Workers) para usar Claude sin exponer la clave. Sin probar.
- Lens: usa la cámara (requiere HTTPS, GitHub Pages lo es) y lee texto con Tesseract.js desde un CDN.
- Para quitar el aviso BETA borra el bloque .devbar en index.html.

## v9
- Guía "¿Qué necesito?" y comparador: editan ATTR en js/data.js al agregar productos (trabajos, materiales, uso).
- Cotización imprimible: botón "Imprimir / PDF" en la lista (en el diálogo de impresión elige "Guardar como PDF").
- App instalable: sw.js guarda la página para uso sin conexión. Al publicar cambios, sube VERSION en sw.js.

## v10 · Google Sheets, garantía, lista de materiales
1. En Google Sheets: Archivo > Importar > sube uno de plantillas/*.csv (catalogo, inventario, promos, garantias) como hoja.
2. Archivo > Compartir > Publicar en la web > elige la hoja > formato CSV > Publicar. Copia la URL.
3. Pégala en js/data.js dentro de INV_CONF: catalogoCsv, csvUrl (inventario), promosCsv, garantiasCsv.
   La página lee las hojas al abrir; si una falla, usa los datos incluidos.
- IMPORTANTE: una hoja publicada es PÚBLICA. En garantias.csv usa solo caso, estado, actualizado y nota; nunca nombres ni teléfonos.
- Estados reconocidos: Recibida, En revisión, En reparación, Lista, Entregada.
- Reseñas reales: llena TESTIMONIOS y GOOGLE.placeId. Videos: llena VIDEOS con IDs de YouTube. Estadísticas: ANALYTICS.goatcounter.
- Enlace directo a un producto: tu-pagina?p=DWE4577-B3

## v11 · Inicio dinámico y publicaciones
- Aviso amarillo arriba, carrusel del inicio y sección "Novedades" salen de POSTS (js/data.js) o de una hoja (plantillas/publicaciones.csv → INV_CONF.publicacionesCsv).
- tipo: novedad | promo | aviso | consejo. destacado = si → entra al carrusel. fecha futura = publicación programada. hasta = se oculta sola.
- El carrusel junta: publicaciones destacadas + la primera promoción vigente + las diapositivas de marca.
- Las promociones con vencimiento a 7 días o menos muestran cuenta regresiva.
- Los textos marcados "Ejemplo" son de muestra: bórralos o reemplázalos antes de publicar.

## v12 · Cinco áreas, categorías reales y blog
- Áreas (hash): #inicio, #catalogo, #garantias, #blog, #contacto. Un enlace a cualquier sección interna (p. ej. #soldadura) abre su área automáticamente.
- CATEGORIAS (js/data.js): lijadora, taladro-inal, taladro-alam, sierra, amoladora, inversor (inversores soldadores), mototool, motor, alambre, martillo, seguridad, otras.
  En el CSV del catálogo, la columna categoria debe usar esos ids (si no coincide, el producto queda en "otras").
  Las categorías sin referencias cargadas muestran un panel que invita a consultar por WhatsApp.
- Blog: edita ARTICULOS y TABLA_USOS en js/articulos.js. Los enlaces a artículos son #blog/slug.
- Calibres AWG 36–6: tabla y calculadora (3 A/mm² de referencia) en el catálogo. Los valores son orientativos.

## v13 · Repuestos y servicio técnico
- Nueva área #repuestos: servicios, buscador de piezas por herramienta (taladro, rotomartillo, demoledor, sierra, pulidora) y formulario de solicitud.
- Edita REPUESTOS en js/repuestos.js para agregar piezas o herramientas. Textos de la sección: claves rep_* en js/data.js.
- Categoría nueva "repuestos" en el catálogo. Dos guías nuevas en el blog.
- Los costos y tiempos NO están escritos en la página: se consultan por WhatsApp. Si quieres publicarlos, dímelo.

## v14 · Blog que recomienda
- RECOMENDADOS, KITS y los artículos (con tipo: guia | compra | proyecto, y kit de herramientas) están en js/articulos.js.
- Cada artículo puede traer `kit:[{sku:"..."} | {cat:"..."}]`: muestra las referencias con precio/stock (si existen) y botones "Agregar a mi cotización" y "Cotizar kit por WhatsApp".
- `destacado:true` en un artículo lo pone como guía destacada. Los 3 primeros recomendados salen también en el Inicio.
- El total de un kit solo se muestra cuando TODAS sus referencias tienen precio cargado.

## v15 · SEO (cómo dejarlo aplicado)
1. Publica en GitHub Pages (o con tu dominio) y anota la dirección final, por ejemplo https://tuusuario.github.io/tu-repo
2. Con Node instalado, desde la carpeta del sitio:  node herramientas/generar-seo.js https://tuusuario.github.io/tu-repo
   Esto cambia la dirección en canonical, imagen de compartir, datos estructurados, sitemap y robots, y regenera las páginas del blog.
   (Sin Node: reemplaza a mano https://TU-USUARIO.github.io/TU-REPO en index.html, sitemap.xml y robots.txt.)
3. Cada vez que edites js/articulos.js, vuelve a ejecutar:  node herramientas/generar-seo.js
4. Google Search Console: agrega tu sitio, verifícalo y envía sitemap.xml.
5. Google Business Profile (gratis): crea/reclama el perfil de la ferretería con la misma dirección, teléfono, horario y categoría; es lo que más ayuda a aparecer en "ferretería en Popayán".
6. Cuando tengas número de WhatsApp y horario reales, avísame para agregarlos a los datos estructurados (teléfono y horario).
- Las áreas de la página (#catalogo, #blog...) son una sola página: Google no indexa por separado lo que va después del "#". Por eso las guías tienen páginas propias en /blog/ (indexables, español e inglés).
- La imagen para compartir en redes es assets/og-image.png (1200×630).

## v16 · Inversores soldadores
- La categoría "inversor" son **inversores soldadores** (equipos de soldar). Se mantuvo el id `inversor` para no romper hojas de Google ya conectadas.
- Calculadora de soldadura (#soldadura): editar ELECTRODOS y WELD_SIZES en js/data.js. Valores orientativos para electrodo revestido.
- La guía "como-elegir-inversor" ahora es "como-elegir-inversor-soldador"; el enlace anterior redirige (SLUG_ALIAS en js/articulos.js).
