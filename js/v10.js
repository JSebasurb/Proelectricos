// v10: garantía, lista de materiales, reseñas, videos, QR, compartir, analítica
var LIST=[];
const siteURL = () => /^https?:$/.test(location.protocol) ? location.origin+location.pathname : location.href.split("?")[0];

// ---- Seguimiento de garantía ----
function showCase(code){
  const t=T(), out=$("trkOut"); if(!code.trim()){ out.innerHTML=""; return; }
  const c=trackCase(code);
  if(!c){ out.innerHTML=`<p class="err">${t.trk_none}</p><a class="btn sm" href="${wa()}" target="_blank" rel="noopener">${t.talk}</a>`; return; }
  const i=estadoIdx(c.estado), demo=!INV_CONF.garantiasCsv && CASOS_DEMO.some(d=>d.caso===c.caso);
  out.innerHTML=`<ol class="tl">${t.trk_states.map((s,k)=>`<li class="${k<i?"done":k===i?"now":""}">${s}</li>`).join("")}</ol>
    <p><b>${esc(c.caso)}</b> · ${i>=0?t.trk_states[i]:esc(c.estado)}${c.actualizado?` · ${t.trk_updated}: ${esc(c.actualizado)}`:""}</p>
    ${c.nota?`<p>${esc(c.nota)}</p>`:""}${i===3?`<p class="okmsg">${t.trk_ready}</p>`:""}${demo?`<p class="small">${t.trk_demo}</p>`:""}`;
}
$("trkForm").onsubmit=e=>{ e.preventDefault(); showCase($("trkIn").value); };

// ---- Lista de materiales ----
function showList(){
  const t=T();
  $("listOut").innerHTML=`<div class="lrows">${LIST.map((r,i)=>{ const p=r.sku&&PRODUCTOS.find(x=>x.s===r.sku);
    return `<div class="lrow"><label class="lq"><input type="checkbox" data-i="${i}" ${p?"checked":"disabled"}> “${esc(r.line)}”</label>`+
    (p?`<div class="lctl"><span class="pill ${r.conf==="exact"?"in":"ask"}">${r.conf==="exact"?t.list_exact:t.list_sug}</span><input type="number" class="qty" min="1" max="99" value="${r.qty}" data-n="${i}" aria-label="qty"></div>${miniCard(p)}`
      :`<span class="pill out">${t.list_none}</span>`)+`</div>`; }).join("")}</div><button class="btn" id="listAdd" type="button">${t.list_add}</button>`;
}
$("listGo").onclick=()=>{ const rows=parseList($("listIn").value,lang);
  if(!rows.length){ $("listOut").innerHTML=`<p class="status">${T().list_empty}</p>`; return; } LIST=rows; showList(); };
$("listOut").addEventListener("click",e=>{
  if(e.target.id!=="listAdd") return;
  LIST.forEach((r,i)=>{ const cb=document.querySelector(`#listOut input[data-i="${i}"]`); if(!cb||!cb.checked||!r.sku) return;
    const n=Math.max(1,Math.min(99,+(document.querySelector(`#listOut input[data-n="${i}"]`)||{}).value||r.qty)); quote[r.sku]=(quote[r.sku]||0)+n; });
  renderQuote(); renderCatalog(); e.target.textContent=T().list_added;
});

// ---- Compartir y enlaces directos (?p=REFERENCIA) ----
async function shareProduct(s){
  const p=PRODUCTOS.find(x=>x.s===s), url=siteURL()+"?p="+encodeURIComponent(s), text=`${T().share_text} ${p[lang]}`;
  if(navigator.share){ try{ await navigator.share({title:"Proelectricos",text,url}); }catch(_){} return; }
  window.open("https://wa.me/?text="+encodeURIComponent(text+"\n"+url),"_blank","noopener");
}

// ---- QR ----
function loadQR(){ return new Promise((ok,ko)=>{ if(window.qrcode) return ok(); const s=document.createElement("script");
  s.src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"; s.onload=ok; s.onerror=()=>ko(new Error("qr")); document.head.appendChild(s); }); }
async function qrSVG(url,cell){ await loadQR(); const qr=qrcode(0,"M"); qr.addData(url); qr.make(); return qr.createSvgTag(cell,2); }
$("qrBtn").onclick=async()=>{ const url=siteURL(); $("qrUrl").textContent=url; $("qrBox").textContent=""; $("qrDlg").showModal();
  try{ $("qrBox").innerHTML=await qrSVG(url,6); }catch(_){ $("qrBox").textContent=T().qr_err; } };
$("qrPrint").onclick=async()=>{ const url=siteURL();
  try{ $("printDoc").innerHTML=`<img src="assets/logo.svg" alt="Proelectricos" width="260"><h1>${T().qr_poster}</h1><div class="qrbig">${await qrSVG(url,10)}</div><p>${esc(url)}</p>`; window.print(); }
  catch(_){ $("qrBox").textContent=T().qr_err; } };

// ---- Reseñas, videos, cita ----
function renderV10(){
  const t=T();
  $("slot").innerHTML=t.slots.map(s=>`<option>${s}</option>`).join("");
  $("trkIn").placeholder=t.trk_ph; $("listIn").placeholder=t.list_ph;
  $("resenas").hidden=!TESTIMONIOS.length;
  $("revGrid").innerHTML=TESTIMONIOS.map(x=>`<article class="card"><p>“${esc((x.t&&(x.t[lang]||x.t.es))||"")}”</p><b>${"★".repeat(x.r||5)} ${esc(x.n||"")}</b></article>`).join("");
  const id=(GOOGLE.placeId||"").replace(/[^\w-]/g,"");
  $("revBtns").innerHTML = id ? `<a class="btn ghost" href="https://search.google.com/local/reviews?placeid=${id}" target="_blank" rel="noopener">${t.rev_see}</a><a class="btn ghost" href="https://search.google.com/local/writereview?placeid=${id}" target="_blank" rel="noopener">${t.rev_write}</a>` : "";
  const vids=VIDEOS.filter(v=>/^[\w-]{6,20}$/.test(v.id||""));
  $("videos").hidden=!vids.length;
  $("vidGrid").innerHTML=vids.map(v=>`<article class="vid"><button class="vthumb" data-v="${v.id}" style="background-image:url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)" aria-label="${t.vid_play}: ${esc(v.t[lang])}"><span>▶</span></button><h3>${esc(v.t[lang])}</h3></article>`).join("");
  if($("trkOut").innerHTML) showCase($("trkIn").value);
}
$("vidGrid").onclick=e=>{ const b=e.target.closest("[data-v]"); if(!b) return;
  b.outerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.v}?autoplay=1" title="video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`; };

// ---- Analítica opcional (GoatCounter, sin cookies) ----
const gc=(ANALYTICS.goatcounter||"").replace(/[^a-z0-9-]/gi,"");
if(gc && /^https?:$/.test(location.protocol)){ const s=document.createElement("script"); s.async=true; s.src="https://gc.zgo.at/count.js"; s.dataset.goatcounter=`https://${gc}.goatcounter.com/count`; document.head.appendChild(s); }

// ---- Arranque: enlace directo + datos desde hojas ----
const deep=new URLSearchParams(location.search).get("p");
if(deep){ q=deep; $("search").value=deep; }
renderV10();
// si el catálogo cambia, se descartan de la cotización/comparador las referencias que ya no existen
function pruneState(){ Object.keys(quote).forEach(s=>{ if(!PRODUCTOS.some(p=>p.s===s)) delete quote[s]; }); cmp=cmp.filter(s=>PRODUCTOS.some(p=>p.s===s)); }
loadFuentes().then(()=>{ pruneState(); render(); if(deep) setTimeout(()=>{ if(typeof navTo==="function") navTo("productos"); },250); });
