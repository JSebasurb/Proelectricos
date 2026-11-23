// FUENTES: carga catálogo, promociones y casos de garantía desde hojas de Google Sheets publicadas como CSV.
// Si una URL está vacía o falla, se usan los datos incluidos en la página (nada se rompe).
const esc = s => String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function csvObjects(text){
  const rows=parseCSV(text); if(!rows.length) return {head:[],objs:[]};
  const head=rows.shift().map(h=>norm(h).trim().replace(/\s+/g,"_"));
  return {head, objs:rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||"").trim()])))};
}
const splitList = v => (v||"").split(/[;|]/).map(x=>x.trim().toLowerCase()).filter(Boolean);
const iconOf = p => ICONS[p.ico] || ICONS[p.c] || ICONS.drill;

function applyCatalogCSV(text){
  const {head,objs}=csvObjects(text); if(!head.includes("referencia")) return -1;
  const rows=objs.filter(o=>o.referencia); if(!rows.length) return 0;
  PRODUCTOS.length=0;
  rows.forEach(o=>{
    const s=o.referencia.toUpperCase().replace(/[^A-Z0-9\-_.\/]/g,""), c=(o.categoria||"otras").toLowerCase(); if(!CATEGORIAS.some(x=>x.id===c)) c="otras";
    PRODUCTOS.push({s,u:/^https?:\/\//.test(o.enlace||"")?o.enlace.replace(/"/g,"%22"):NEGOCIO.dewalt,c,ico:ICONS[o.icono]?o.icono:(ICONS[c]?c:"drill"),es:o.nombre_es||o.nombre_en||s,en:o.nombre_en||o.nombre_es||s});
    if(o.tags) TAGS[s]=o.tags;
    const tp=norm(o.tipo||"");
    ATTR[s]={type:/inal|cordless|bater/.test(tp)?"cordless":/cable|corded|elec/.test(tp)?"corded":"",
      spec:{es:o.spec_es||o.spec||"—",en:o.spec_en||o.spec||"—"}, tasks:splitList(o.trabajos), mats:splitList(o.materiales),
      level:["home","pro","both"].includes((o.uso||"").toLowerCase())?o.uso.toLowerCase():"both"};
    if(!INVENTARIO[s]) INVENTARIO[s]={precio:null,stock:null};
  });
  return rows.length;
}
function applyPromosCSV(text){
  const {head,objs}=csvObjects(text); if(!head.includes("titulo_es")&&!head.includes("titulo_en")) return -1;
  PROMOS.length=0;
  objs.filter(o=>o.titulo_es||o.titulo_en).forEach(o=>PROMOS.push({
    hasta:/^\d{4}-\d{2}-\d{2}$/.test(o.hasta)?o.hasta:null, ico:ICONS[o.icono]?o.icono:"drill",
    badge:{es:o.badge_es||"Oferta",en:o.badge_en||o.badge_es||"Offer"},
    t:{es:o.titulo_es||o.titulo_en,en:o.titulo_en||o.titulo_es}, d:{es:o.desc_es||"",en:o.desc_en||o.desc_es||""}}));
  return PROMOS.length;
}
function tipoOf(v){ const n=norm(v||""); return /promo|ofert/.test(n)?"promo":/avis/.test(n)?"aviso":/consej|tip/.test(n)?"consejo":"novedad"; }
function applyPostsCSV(text){
  const {head,objs}=csvObjects(text); if(!head.includes("titulo_es")&&!head.includes("titulo_en")) return -1;
  const dt=v=>/^\d{4}-\d{2}-\d{2}$/.test(v||"")?v:"";
  POSTS.length=0;
  objs.filter(o=>o.titulo_es||o.titulo_en).forEach((o,i)=>POSTS.push({
    id:"p"+i, fecha:dt(o.fecha), hasta:dt(o.hasta), tipo:tipoOf(o.tipo), destacado:/^(si|sí|1|true|x|yes)$/i.test(o.destacado||""),
    ico:ICONS[o.icono]?o.icono:"drill", enlace:/^https?:\/\//.test(o.enlace||"")?o.enlace.replace(/"/g,"%22"):"",
    titulo:{es:o.titulo_es||o.titulo_en,en:o.titulo_en||o.titulo_es}, texto:{es:o.texto_es||"",en:o.texto_en||o.texto_es||""}}));
  return POSTS.length;
}
var CASOS = INV_CONF.garantiasCsv ? [] : CASOS_DEMO.slice();
function applyCasosCSV(text){
  const {head,objs}=csvObjects(text); if(!head.includes("caso")) return -1;
  CASOS=objs.filter(o=>o.caso); return CASOS.length;
}
function estadoIdx(v){ const n=norm(v||""); return n.includes("entregad")?4:n.includes("list")?3:n.includes("repar")?2:n.includes("revis")?1:n.includes("recib")?0:-1; }
function trackCase(code){ const c=(code||"").trim().toUpperCase(); return c ? CASOS.find(x=>x.caso.toUpperCase()===c)||null : null; }

async function fetchCSV(url,apply){
  if(!url) return;
  try{ const r=await fetch(url,{cache:"no-store"}); if(r.ok) apply(await r.text()); }catch(_){}
}
async function loadFuentes(){
  await fetchCSV(INV_CONF.catalogoCsv,applyCatalogCSV);   // 1º catálogo, luego precios/stock
  await Promise.all([loadInventario(), fetchCSV(INV_CONF.promosCsv,applyPromosCSV), fetchCSV(INV_CONF.publicacionesCsv,applyPostsCSV), fetchCSV(INV_CONF.garantiasCsv,applyCasosCSV)]);
}
