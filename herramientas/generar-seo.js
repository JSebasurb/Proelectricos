#!/usr/bin/env node
// Genera las páginas indexables del blog (ES/EN), el sitemap y el robots.txt a partir de js/articulos.js y js/data.js.
// Uso:  node herramientas/generar-seo.js                      → regenera con la dirección guardada en herramientas/sitio.txt
//       node herramientas/generar-seo.js https://tudominio.com → cambia la dirección en todos los archivos y regenera
const fs=require("fs"), path=require("path"), vm=require("vm");
const ROOT=path.join(__dirname,".."), rd=p=>fs.readFileSync(path.join(ROOT,p),"utf8"), wr=(p,s)=>{ fs.mkdirSync(path.dirname(path.join(ROOT,p)),{recursive:true}); fs.writeFileSync(path.join(ROOT,p),s); };
let SITE=rd("herramientas/sitio.txt").trim().replace(/\/$/,"");
const arg=(process.argv[2]||"").trim().replace(/\/$/,"");
if(arg && arg!==SITE){
  for(const f of ["index.html","robots.txt","sitemap.xml"]){ try{ wr(f,rd(f).split(SITE).join(arg)); }catch(_){} }
  try{ wr("worker/ia-worker.js",rd("worker/ia-worker.js").replace(/ALLOWED_ORIGIN = "[^"]*"/,`ALLOWED_ORIGIN = "${new URL(arg).origin}"`)); }catch(_){}
  SITE=arg; wr("herramientas/sitio.txt",SITE+"\n");
}
const ctx={console}; vm.createContext(ctx);
["js/icons.js","js/data.js","js/articulos.js"].forEach(f=>vm.runInContext(rd(f),ctx,{filename:f}));
const G=n=>vm.runInContext(n,ctx);
const ART=G("ARTICULOS"), CAT=G("CATEGORIAS"), KITS=G("KITS"), PROD=G("PRODUCTOS"), NEG=G("NEGOCIO"), I18N=G("I18N");
const today=new Date().toISOString().slice(0,10);
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const catName=(id,L)=>(CAT.find(c=>c.id===id)||{n:{[L]:id}}).n[L];
const hasWA=/^\d{10,15}$/.test(NEG.whatsapp||"");
const waLink=(txt)=>hasWA?`https://wa.me/${NEG.whatsapp}?text=${encodeURIComponent(txt)}`:null;
const url=(L,slug)=>`${SITE}/blog/${L==="en"?"en/":""}${slug?slug+".html":""}`;
const T={es:{home:"Inicio",catalog:"Catálogo",blog:"Blog",contact:"Contacto",other:"English",min:"min de lectura",kit:"Kit recomendado para este trabajo",more:"Más guías",ask:"Preguntar por WhatsApp",cat:"Ver en el catálogo",hubH:"Guías y proyectos: qué herramienta usar y para qué",hubP:"Guías de compra, proyectos paso a paso y consejos sobre taladros, lijadoras, sierras, inversores, Mototool, motores, alambre esmaltado, martillos y equipo de seguridad.",hubT:"Blog: qué herramienta usar y para qué | Proelectricos Popayán",foot:"Proelectricos · Popayán, Cauca",privacy:"Privacidad",terms:"Términos",tipos:{compra:"Guías de compra",proyecto:"Proyectos",guia:"Guías"}},
 en:{home:"Home",catalog:"Catalog",blog:"Blog",contact:"Contact",other:"Español",min:"min read",kit:"Recommended kit for this job",more:"More guides",ask:"Ask on WhatsApp",cat:"See in the catalog",hubH:"Guides and projects: which tool to use, and for what",hubP:"Buying guides, step-by-step projects and tips about drills, sanders, saws, inverters, rotary tools, motors, enameled wire, hammers and safety equipment.",hubT:"Blog: which tool to use and for what | Proelectricos Popayán",foot:"Proelectricos · Popayán, Cauca, Colombia",privacy:"Privacy",terms:"Terms",tipos:{compra:"Buying guides",proyecto:"Projects",guia:"Guides"}}};

function page({L,rel,title,desc,canon,alt,body,ld,type="website"}){
  const other=L==="es"?"en":"es", t=T[L];
  return `<!DOCTYPE html>
<html lang="${L}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="${L}" href="${canon}"><link rel="alternate" hreflang="${other}" href="${alt}"><link rel="alternate" hreflang="x-default" href="${L==="es"?canon:alt}">
<meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#FFC20E">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Proelectricos"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canon}"><meta property="og:locale" content="${L==="es"?"es_CO":"en_US"}">
<meta property="og:image" content="${SITE}/assets/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${SITE}/assets/og-image.png">
<link rel="icon" href="${rel}favicon.ico" sizes="any"><link rel="icon" href="${rel}assets/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="${rel}assets/icon-180.png">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${rel}css/style.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script></head>
<body class="legalpage">
<header class="top simple"><a class="logo" href="${rel}index.html"><img class="mark" src="${rel}assets/icon.svg" alt="" width="34" height="34"><span>PRO<i>ELECTRICOS</i></span></a>
<nav aria-label="${t.blog}"><a href="${rel}index.html">${t.home}</a><a href="${rel}index.html#catalogo">${t.catalog}</a><a href="${L==="es"?rel+"blog/":rel+"blog/en/"}index.html">${t.blog}</a><a href="${rel}index.html#contacto">${t.contact}</a><a href="${alt.replace(SITE+"/",rel)}" hreflang="${other}">${t.other}</a></nav></header>
<main class="wrap legal">${body}</main>
<footer><div class="stripe"></div><p>${t.foot} · ${esc(NEG.direccion)} · <a href="mailto:${NEG.correo}">${NEG.correo}</a></p><p class="small"><a href="${rel}privacidad.html">${t.privacy}</a> · <a href="${rel}terminos.html">${t.terms}</a></p></footer></body></html>`;
}
const org={"@type":"Organization","name":"Proelectricos","url":SITE+"/","logo":SITE+"/assets/icon-512.png"};
function related(a){ return ART.filter(x=>x.slug!==a.slug&&(x.cat===a.cat||x.tipo===a.tipo)).slice(0,3); }

function articlePage(a,L){
  const t=T[L], rel=L==="en"?"../../":"../", canon=url(L,a.slug), alt=url(L==="en"?"es":"en",a.slug), I=I18N[L];
  const secs=a.s.map(s=>`<h2>${esc(s.h[L])}</h2>${s.p?`<p>${esc(s.p[L])}</p>`:""}${s.l?`<ul>${s.l[L].map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}`).join("");
  const kit=a.kit&&a.kit.length?`<div class="kitbox"><h2>${t.kit}</h2><ul>${a.kit.map(i=>{ if(i.sku){ const p=PROD.find(x=>x.s===i.sku); return p?`<li><a href="${esc(p.u)}" rel="noopener">${esc(p[L])}</a> (${p.s})</li>`:""; } return `<li><a href="${rel}index.html#productos">${esc(catName(i.cat,L))}</a></li>`; }).join("")}</ul></div>`:"";
  const wa=waLink((L==="es"?"Hola, vi la guía «":"Hello, I read the guide \"")+a.t[L]+(L==="es"?"» y tengo una pregunta":"\" and have a question"));
  const rl=related(a);
  const body=`<nav class="crumbs" aria-label="breadcrumb"><a href="${rel}index.html">${t.home}</a> › <a href="${L==="es"?rel+"blog/":rel+"blog/en/"}index.html">${t.blog}</a> › ${esc(a.t[L])}</nav>
<article><h1>${esc(a.t[L])}</h1><p class="small">${esc(t.tipos[a.tipo]||a.tipo)} · ${esc(catName(a.cat,L))} · ${a.min} ${t.min}</p><p class="lead">${esc(a.r[L])}</p>${secs}${kit}
<p class="cta"><a class="btn" href="${rel}index.html#catalogo">${t.cat}</a> <a class="btn ghost" href="${wa||rel+"index.html#contacto"}" ${wa?'target="_blank" rel="noopener"':""}>${wa?t.ask:t.contact}</a></p></article>
${rl.length?`<h2>${t.more}</h2><ul>${rl.map(x=>`<li><a href="${x.slug}.html">${esc(x.t[L])}</a> — ${esc(x.r[L])}</li>`).join("")}</ul>`:""}`;
  const ld={"@context":"https://schema.org","@graph":[
    {"@type":"Article","headline":a.t[L],"description":a.r[L],"inLanguage":L,"dateModified":today,"mainEntityOfPage":canon,"image":SITE+"/assets/og-image.png","author":org,"publisher":org},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":t.home,"item":SITE+"/"},{"@type":"ListItem","position":2,"name":t.blog,"item":url(L)+"index.html"},{"@type":"ListItem","position":3,"name":a.t[L],"item":canon}]}]};
  return page({L,rel,title:`${a.t[L]} | Proelectricos Popayán`,desc:a.r[L],canon,alt,body,ld,type:"article"});
}
function hubPage(L){
  const t=T[L], rel=L==="en"?"../../":"../", canon=url(L)+"index.html", alt=url(L==="en"?"es":"en")+"index.html";
  const groups=["compra","proyecto","guia"].map(k=>{ const list=ART.filter(a=>a.tipo===k); return list.length?`<h2>${esc(t.tipos[k])}</h2><ul class="guides">${list.map(a=>`<li><a href="${a.slug}.html"><b>${esc(a.t[L])}</b></a><br><span>${esc(a.r[L])}</span></li>`).join("")}</ul>`:""; }).join("");
  const body=`<nav class="crumbs"><a href="${rel}index.html">${t.home}</a> › ${t.blog}</nav><h1>${esc(t.hubH)}</h1><p class="lead">${esc(t.hubP)}</p>${groups}<p class="cta"><a class="btn" href="${rel}index.html#blog">${t.cat}</a></p>`;
  const ld={"@context":"https://schema.org","@type":"CollectionPage","name":t.hubH,"inLanguage":L,"url":canon,"isPartOf":{"@type":"WebSite","name":"Proelectricos","url":SITE+"/"},"mainEntity":{"@type":"ItemList","itemListElement":ART.map((a,i)=>({"@type":"ListItem","position":i+1,"url":url(L,a.slug)}))}};
  return page({L,rel,title:t.hubT,desc:t.hubP,canon,alt,body,ld});
}
// ---- escribir páginas ----
let n=0;
for(const L of ["es","en"]){ wr(`blog/${L==="en"?"en/":""}index.html`,hubPage(L)); n++; for(const a of ART){ wr(`blog/${L==="en"?"en/":""}${a.slug}.html`,articlePage(a,L)); n++; } }
// ---- sitemap y robots ----
const alts=(es,en)=>`<xhtml:link rel="alternate" hreflang="es" href="${es}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/>`;
const urls=[`<url><loc>${SITE}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
 `<url><loc>${url("es")}index.html</loc><lastmod>${today}</lastmod><priority>0.8</priority>${alts(url("es")+"index.html",url("en")+"index.html")}</url>`,
 `<url><loc>${url("en")}index.html</loc><lastmod>${today}</lastmod><priority>0.6</priority>${alts(url("es")+"index.html",url("en")+"index.html")}</url>`];
for(const a of ART) for(const L of ["es","en"]) urls.push(`<url><loc>${url(L,a.slug)}</loc><lastmod>${today}</lastmod><priority>${L==="es"?"0.7":"0.5"}</priority>${alts(url("es",a.slug),url("en",a.slug))}</url>`);
wr("sitemap.xml",`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);
wr("robots.txt",`User-agent: *\nAllow: /\nDisallow: /worker/\nDisallow: /plantillas/\nDisallow: /herramientas/\n\nSitemap: ${SITE}/sitemap.xml\n`);
// ---- bloque <noscript> en el inicio (enlaces rastreables a las guías) ----
let idx=rd("index.html");
const ns=`<!--SEO-NOSCRIPT--><noscript><div class="wrap legal"><h1>Proelectricos Popayán</h1><p>Herramienta eléctrica, inversores, repuestos y servicio técnico autorizado DEWALT. ${esc(NEG.direccion)}. ${NEG.correo}</p><p><a href="blog/index.html">Guías y proyectos</a> · <a href="blog/en/index.html">Guides (English)</a></p><ul>${ART.map(a=>`<li><a href="blog/${a.slug}.html">${esc(a.t.es)}</a></li>`).join("")}</ul><p>Esta página necesita JavaScript para mostrar el catálogo y las herramientas.</p></div></noscript><!--/SEO-NOSCRIPT-->`;
if(idx.includes("<!--SEO-NOSCRIPT-->")){ idx=idx.replace(/<!--SEO-NOSCRIPT-->[\s\S]*?<!--\/SEO-NOSCRIPT-->/,()=>ns); wr("index.html",idx); }
console.log(`Listo: ${n} páginas del blog, sitemap.xml (${urls.length} direcciones) y robots.txt para ${SITE}`);
if(SITE.includes("TU-USUARIO")) console.log("AVISO: la dirección aún es de ejemplo. Ejecuta: node herramientas/generar-seo.js https://tu-direccion-real");
if(!hasWA) console.log("AVISO: el número de WhatsApp aún es de ejemplo; las páginas enlazan al contacto en lugar de WhatsApp.");
