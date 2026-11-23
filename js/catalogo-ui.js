// CATÁLOGO por categorías · tabla y calculadora de calibres AWG · información del inicio · FAQ de garantía
function countIn(id){ return PRODUCTOS.filter(p=>p.c===id).length; }

function renderCats(){
  const t=T();
  const html=CATEGORIAS.map(c=>{ const n=countIn(c.id);
    return `<button type="button" class="cat" data-cat="${c.id}"><span class="cico">${ICONS[c.ico]||ICONS.tools}</span><b>${c.n[lang]}</b><small>${n?`${n} ${t.cat_online}`:t.cat_ask}</small></button>`; }).join("");
  $("catTiles").innerHTML=html; $("catTilesHome").innerHTML=html;
}
function pickCat(id){ filter=id; q=""; $("search").value=""; renderCatalog(); navTo("productos"); }
["catTiles","catTilesHome"].forEach(id=>$(id).addEventListener("click",e=>{ const b=e.target.closest("[data-cat]"); if(b) pickCat(b.dataset.cat); }));

// Panel para categorías sin referencias en línea (o resultados de búsqueda por categoría)
function catPanelInner(id){
  const t=T(), c=catOf(id); if(!c) return "";
  const rel=ARTICULOS.filter(a=>a.cat===id);
  return `<div class="cp"><div class="cpico">${ICONS[c.ico]||ICONS.tools}</div><div><h3>${c.n[lang]}</h3><p>${c.d[lang]}</p><p class="small">${t.cat_noonline}</p>
    <div class="cta"><a class="btn sm" href="${wa((lang==="es"?"Hola, quiero información de ":"Hello, I'd like information about ")+c.n[lang])}" target="_blank" rel="noopener">${t.talk}</a>${id==="alambre"?`<a class="btn ghost sm" href="#calibres">${t.wire_link}</a>`:""}${id==="repuestos"?`<a class="btn ghost sm" href="#repuestos">${t.rep_home_cta}</a>`:""}</div>
    ${rel.length?`<p class="rel"><b>${t.cat_related}:</b> ${rel.map(a=>`<a href="#blog/${a.slug}">${a.t[lang]}</a>`).join(" · ")}</p>`:""}</div></div>`;
}
function catExtra(n){
  const t=T();
  if(q && !n){ const cs=searchCats(q); return cs.length ? `<div class="catpanel"><h3>${t.cat_found}</h3>${cs.map(c=>catPanelInner(c.id)).join("")}</div>` : `<p class="empty">${t.no_results}</p>`; }
  if(!q && filter!=="all"){
    return n ? `<div class="catpanel note"><p>${t.cat_more}</p><a class="btn sm" href="${wa((lang==="es"?"Busco una referencia de ":"I'm looking for a model of ")+catLabel(filter))}" target="_blank" rel="noopener">${t.talk}</a></div>`
             : `<div class="catpanel">${catPanelInner(filter)}</div>`;
  }
  return n ? "" : `<p class="empty">${t.no_results}</p>`;
}

// ---- Calibres de alambre esmaltado (AWG 36 → 6) ----
var AWG=[]; for(let n=36;n>=6;n--){ const d=0.127*Math.pow(92,(36-n)/39), a=Math.PI/4*d*d; AWG.push({n,d,a,r:17.24/a,i:a*3}); } // Ø mm, área mm², Ω/km (cobre 20 °C), A a 3 A/mm²
function awgFor(amps){ return AWG.find(x=>x.i>=amps)||null; }   // el calibre más delgado que aguanta esa corriente
function awgUse(n){ const g=T().wire_uses.find(u=>n<=u.from&&n>=u.to); return g?g.t:""; }
function renderWire(){
  if(typeof AWG==="undefined"||!AWG||!AWG.length) return; // seguro si se llama antes de cargar este archivo
  const t=T();
  $("wireTable").innerHTML=`<thead><tr>${t.wire_cols.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${AWG.map(x=>`<tr data-n="${x.n}"><th scope="row">${x.n}</th><td>${x.d.toFixed(3)}</td><td>${x.a.toFixed(3)}</td><td>${x.r.toFixed(1)}</td><td>${x.i.toFixed(2)}</td><td>${awgUse(x.n)}</td><td><a class="more" href="${wa(t.wire_msg+x.n)}" target="_blank" rel="noopener">${t.wire_quote}</a></td></tr>`).join("")}</tbody>`;
  wireCalc();
}
function wireCalc(){
  const t=T(), v=parseFloat(String($("wireAmps").value).replace(",",".")), out=$("wireOut");
  document.querySelectorAll("#wireTable tr.hl").forEach(r=>r.classList.remove("hl"));
  if(!(v>0)){ out.innerHTML=""; return; }
  const x=awgFor(v); if(!x){ out.textContent=t.wire_none; return; }
  out.innerHTML=`${t.wire_res}: <b>AWG ${x.n}</b> · Ø ${x.d.toFixed(3)} mm`;
  const row=document.querySelector(`#wireTable tr[data-n="${x.n}"]`); if(row) row.classList.add("hl");
}
$("wireAmps").addEventListener("input",wireCalc);

// ---- Información importante del inicio + FAQ de garantía ----
function renderHomeInfo(){
  const t=T(), dir=encodeURIComponent(NEGOCIO.direccion);
  const cards=[
    {i:"📍",h:t.ic_loc,d:NEGOCIO.direccion,a:`<a class="btn sm" href="https://www.google.com/maps/dir/?api=1&destination=${dir}" target="_blank" rel="noopener">${t.ic_go_map}</a>`},
    {i:"🕘",h:t.ic_hours,d:t.horario+(typeof openState==="function"?openState():""),a:""},
    {i:"🛠️",h:t.ic_warr,d:t.ic_warr_d,a:`<a class="btn sm" href="#garantias">${t.ic_go_warr}</a>`},
    {i:"🧾",h:t.ic_quote,d:t.ic_quote_d,a:`<a class="btn sm" href="#productos">${t.ic_go_quote}</a>`}];
  $("homeInfo").innerHTML=cards.map(c=>`<article class="card icard"><span class="ico">${c.i}</span><h3>${c.h}</h3><p>${c.d}</p>${c.a}</article>`).join("");
  $("warrAcc").innerHTML=t.warr_faq.map(f=>`<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
}
renderCats(); renderWire(); renderHomeInfo(); renderCatalog();
