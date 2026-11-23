// EXTRAS v9: comparador, cotización imprimible (PDF) e instalación como app (PWA)
// ---- Comparador ----
function toggleCmp(sku){
  const i=cmp.indexOf(sku);
  if(i>=0) cmp.splice(i,1); else if(cmp.length<3) cmp.push(sku); else { alert(T().cmp_max); return; }
  renderCatalog(); renderExtras();
}
function renderExtras(){
  const t=T();
  $("cmpPill").hidden = cmp.length<2; $("cmpPill").textContent = `${t.cmp_pill} (${cmp.length})`;
  const rows=[
    [t.r_spec,s=>attr(s).spec[lang]],
    [t.r_type,s=>(t["type_"+attr(s).type]||"—")],
    [t.r_tasks,s=>attr(s).tasks.map(x=>lbl(t.g_tasks,x)).join(", ")],
    [t.r_mats,s=>attr(s).mats.map(x=>lbl(t.g_mats,x)).join(", ")],
    [t.r_level,s=>t["lvl_"+attr(s).level]],
    [t.r_price,s=>priceTxt(s,lang)],
    [t.r_stock,s=>stockTxt(s,lang)]
  ];
  $("cmpTable").innerHTML = `<thead><tr><th></th>${cmp.map(s=>`<th><div class="mpic">${iconOf(PRODUCTOS.find(p=>p.s===s))}</div>${s}<small>${PRODUCTOS.find(p=>p.s===s)[lang]}</small></th>`).join("")}</tr></thead>
    <tbody>${rows.map(([l,f])=>`<tr><th scope="row">${l}</th>${cmp.map(s=>`<td>${f(s)}</td>`).join("")}</tr>`).join("")}</tbody>`;
  $("installBtn").textContent=t.install;
}
$("cmpPill").onclick=()=>$("cmpDlg").showModal();
$("cmpClear").onclick=()=>{ cmp=[]; renderCatalog(); renderExtras(); $("cmpDlg").close(); };
$("cmpDlg").onclick=e=>{ if(e.target===$("cmpDlg")) $("cmpDlg").close(); };

// ---- Cotización imprimible / PDF ----
function printQuote(){
  const t=T(), items=Object.keys(quote); if(!items.length) return;
  let total=0, known=true;
  const rows=items.map(s=>{ const p=PRODUCTOS.find(x=>x.s===s), v=info(s).precio; if(v==null) known=false; else total+=v*quote[s];
    return `<tr><td>${s}</td><td>${p[lang]}</td><td>${quote[s]}</td><td>${priceTxt(s,lang)}</td><td>${stockTxt(s,lang)}</td></tr>`; }).join("");
  const date=new Date().toLocaleDateString(lang==="es"?"es-CO":"en-US",{year:"numeric",month:"long",day:"numeric"});
  $("printDoc").innerHTML=`<img src="assets/logo.svg" alt="Proelectricos" width="260">
    <h1>${t.pr_title}</h1><p>${t.pr_date}: ${date}</p>
    <table><thead><tr>${t.pr_cols.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table>
    <p class="tot">${t.pr_total}: ${known?money(total,lang):t.pr_tbd}</p>
    <p class="small">${t.pr_note}</p>
    <p class="small">${NEGOCIO.direccion} · ${NEGOCIO.correo}</p>`;
  window.print();
}
$("qPrint").onclick=printQuote;

// ---- PWA ----
if("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(()=>{});
let deferredInstall=null;
addEventListener("beforeinstallprompt",e=>{ e.preventDefault(); deferredInstall=e; $("installBtn").hidden=false; });
$("installBtn").onclick=async()=>{ if(!deferredInstall) return; deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall=null; $("installBtn").hidden=true; };
addEventListener("appinstalled",()=>{ $("installBtn").hidden=true; });
renderExtras();
