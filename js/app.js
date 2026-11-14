// CAPA 3 · PRESENTACIÓN: pinta la página, cambia idioma y corre el chatbot.
const $ = id => document.getElementById(id);
let lang = (localStorage.getItem("lang") || (navigator.language||"es").slice(0,2)) === "en" ? "en" : "es";
const T = () => I18N[lang];
const wa = txt => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(txt || T().wa_default)}`;

let filter="all", sysIdx=1, slideIdx=0, timer, loadQty={};
function render(){
  const t = T();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===lang));
  $("waHero")&&($("waHero").href = wa());
  $("waBtn").href = wa();
  $("fbBtn").href = NEGOCIO.facebook;
  $("mailBtn").href = "mailto:"+NEGOCIO.correo;
  $("year").textContent = new Date().getFullYear();
  $("invIco").innerHTML = ICONS.inverter;
  renderSlides(); renderCatalog(); renderSys(); renderLoads(); calc();
  $("acc").innerHTML = t.guia.map(g=>`<details><summary>${g.q}</summary><p>${g.a}</p></details>`).join("");
  $("pasos").innerHTML = t.pasos.map(p=>`<li>${p}</li>`).join("");
  $("requisitos").innerHTML = t.requisitos.map(p=>`<li>${p}</li>`).join("");
  $("servicios").innerHTML = t.servicios.map(s=>`<article class="card"><h3>${s.t}</h3><p>${s.d}</p></article>`).join("");
  $("info").innerHTML = `<li><b>${t.addr}:</b> ${NEGOCIO.direccion}</li><li><b>${t.hours}:</b> ${t.horario}${openState()}</li><li><b>${t.mail}:</b> <a href="mailto:${NEGOCIO.correo}">${NEGOCIO.correo}</a></li>`;
  if(!$("mapa").src) $("mapa").src = "https://www.google.com/maps?q="+encodeURIComponent(NEGOCIO.direccion)+"&output=embed";
  $("points").innerHTML = t.points.map(p=>`<li>${p}</li>`).join("");
  $("ftAddr").textContent = NEGOCIO.direccion;
  $("ftFb").href = NEGOCIO.facebook; $("ftMail").href = "mailto:"+NEGOCIO.correo; $("ftMail").textContent = NEGOCIO.correo;
  $("trust").innerHTML = t.trust.map(x=>`<span>✔ ${x}</span>`).join("");
  $("waFab").href = wa();
  $("dirBtn").href = "https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(NEGOCIO.direccion);
  renderQuote(); renderPromos();
  $("cTopic").innerHTML = TOPICS[lang].map(x=>`<option>${x}</option>`).join("");
  $("chatInput").placeholder = t.chat_ph;
  $("chips").innerHTML = t.sug.map(s=>`<button type="button">${s}</button>`).join("");
}

// Hero slider
function renderSlides(){
  const t=T();
  $("slides").innerHTML = t.slides.map((s,i)=>`<div class="slide${i===slideIdx?" on":""}"><div class="wrap sl"><div><p class="kicker">${t.hero_kicker}</p><h1>${s.t}</h1><p class="lead">${s.d}</p><div class="cta"><a class="btn" href="${s.href}">${s.cta}</a><a class="btn ghost" href="${wa()}" target="_blank" rel="noopener">${t.hero_cta2}</a></div></div><div class="art">${ICONS[s.ico]}</div></div></div>`).join("");
  $("dots").innerHTML = t.slides.map((s,i)=>`<button aria-label="${i+1}" aria-current="${i===slideIdx}" data-i="${i}"></button>`).join("");
}
function goSlide(i){
  const n=T().slides.length; slideIdx=(i+n)%n;
  document.querySelectorAll(".slide").forEach((e,k)=>e.classList.toggle("on",k===slideIdx));
  document.querySelectorAll("#dots button").forEach((e,k)=>e.setAttribute("aria-current",k===slideIdx));
}
function play(){ clearInterval(timer); if(!matchMedia("(prefers-reduced-motion:reduce)").matches) timer=setInterval(()=>goSlide(slideIdx+1),6500); }
$("dots").onclick=e=>{ if(e.target.dataset.i){goSlide(+e.target.dataset.i);play();} };
$("slider").onmouseenter=()=>clearInterval(timer); $("slider").onmouseleave=play;
$("slider").addEventListener("focusin",()=>clearInterval(timer));

// Catálogo con filtros
let q="", quote={};
function renderCatalog(){
  const t=T(), cats=["all","drill","grinder","saw","hammer"];
  $("filters").innerHTML = cats.map(c=>`<button role="tab" aria-selected="${c===filter}" data-f="${c}">${t["f_"+c]}</button>`).join("");
  $("search").placeholder = t.search_ph;
  const n=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const list = PRODUCTOS.filter(p=>(filter==="all"||p.c===filter) && (!q || n(p.s+" "+p[lang]).includes(n(q))));
  $("catalogo").innerHTML = list.length ? list.map(p=>`
   <article class="card prod"><div class="pic">${ICONS[p.ico]}</div><span class="sku">${p.s}</span><h3>${p[lang]}</h3>
   <div class="pact"><button class="btn sm" data-add="${p.s}">${quote[p.s]?t.added:t.add_q}</button><a class="more" href="${p.u}" target="_blank" rel="noopener">${t.sheet}</a></div></article>`).join("")
   : `<p class="empty">${t.no_results}</p>`;
}
$("search").oninput=e=>{ q=e.target.value.trim(); renderCatalog(); };
$("catalogo").onclick=e=>{ const s=e.target.dataset.add; if(!s) return; quote[s]=(quote[s]||0)+1; renderQuote(); e.target.textContent=T().added; };

// Lista de cotización
function renderQuote(){
  const t=T(), items=Object.keys(quote), n=items.reduce((x,k)=>x+quote[k],0);
  $("qPill").hidden = !n; $("qPill").textContent = `${t.q_pill} (${n})`;
  $("qEmpty").hidden = !!items.length; $("qSend").hidden = !items.length; $("qClear").hidden = !items.length;
  $("qList").innerHTML = items.map(s=>{const p=PRODUCTOS.find(x=>x.s===s);return `<li><span><b>${s}</b><br><small>${p[lang]}</small></span><div class="step"><button type="button" data-s="${s}" data-d="-1" aria-label="-">−</button><output>${quote[s]}</output><button type="button" data-s="${s}" data-d="1" aria-label="+">+</button></div></li>`}).join("");
  const body = t.q_head+"\n"+items.map(s=>`- ${s} ${PRODUCTOS.find(x=>x.s===s)[lang]} x${quote[s]}`).join("\n");
  $("qSend").href = wa(body);
}
$("qPill").onclick=()=>$("qDlg").showModal();
$("qClear").onclick=()=>{ quote={}; renderQuote(); renderCatalog(); };
$("qList").onclick=e=>{ const s=e.target.dataset.s; if(!s) return; quote[s]+= +e.target.dataset.d; if(quote[s]<=0) delete quote[s]; renderQuote(); renderCatalog(); };
$("qDlg").onclick=e=>{ if(e.target===$("qDlg")) $("qDlg").close(); };

// Indicador abierto/cerrado
function openState(){
  if(!HORARIO.activo) return "";
  const now=new Date(new Date().toLocaleString("en-US",{timeZone:HORARIO.zona})), r=HORARIO.dias[now.getDay()];
  const h=now.getHours()+now.getMinutes()/60, open = r && h>=r[0] && h<r[1];
  return ` <span class="state ${open?"on":"off"}">${open?T().open_now:T().closed_now}</span>`;
}
$("filters").onclick=e=>{ if(e.target.dataset.f){filter=e.target.dataset.f;renderCatalog();} };

// Sistemas de batería
function renderSys(){
  const S=T().sistemas;
  $("sysTabs").innerHTML = S.map((s,i)=>`<button role="tab" aria-selected="${i===sysIdx}" data-i="${i}">${s.t}</button>`).join("");
  const s=S[sysIdx];
  $("sysPanel").innerHTML = `<div class="art sm">${ICONS[s.ico]}</div><div><h3>${s.t}</h3><p>${s.d}</p><ul>${s.uses.map(u=>`<li>${u}</li>`).join("")}</ul></div>`;
}
$("sysTabs").onclick=e=>{ if(e.target.dataset.i){sysIdx=+e.target.dataset.i;renderSys();} };

// Calculadora de inversor
function renderLoads(){
  $("loads").innerHTML = CARGAS.map(c=>{const q=loadQty[c.id]||0;return `<div class="load"><span>${c[lang]} <small>${c.w} W</small></span><div class="step"><button type="button" data-id="${c.id}" data-d="-1" aria-label="-">−</button><output>${q}</output><button type="button" data-id="${c.id}" data-d="1" aria-label="+">+</button></div></div>`}).join("");
}
function calc(){
  let tot=0, motor=0;
  CARGAS.forEach(c=>{const q=loadQty[c.id]||0; tot+=q*c.w; if(q&&c.m) motor=Math.max(motor,c.w);});
  $("rTotal").textContent = tot+" W";
  const need = Math.max(tot*1.25, tot+motor), size = INV_SIZES.find(x=>x>=need);
  $("rRec").textContent = !tot ? T().calc_none : size ? "≥ "+size+" W" : T().calc_over;
  $("waInv").href = wa((lang==="es"?"Hola, necesito un inversor. Consumo estimado: ":"Hello, I need an inverter. Estimated load: ")+tot+" W");
}
$("loads").onclick=e=>{ const id=e.target.dataset.id; if(!id) return;
  loadQty[id]=Math.max(0,Math.min(9,(loadQty[id]||0)+ +e.target.dataset.d)); renderLoads(); calc(); };

// Cabecera con sombra y botón subir
addEventListener("scroll",()=>{ document.querySelector(".top").classList.toggle("scrolled",scrollY>20); $("toTop").hidden = scrollY<600; },{passive:true});
$("toTop").onclick=()=>scrollTo({top:0});

document.querySelector(".lang").onclick = e => {
  const l = e.target.dataset.lang; if(!l) return;
  lang = l; try{localStorage.setItem("lang",l)}catch(_){}
  $("msgs").innerHTML = ""; if(!$("chat").hidden) say(T().chat_hi,"bot");
  render(); play();
};
$("burger").onclick = () => $("burger").setAttribute("aria-expanded", $("nav").classList.toggle("open"));
$("nav").onclick = e => { if(e.target.tagName==="A") $("nav").classList.remove("open"); };

// ---- Chatbot ----
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function say(txt, who){
  const d = document.createElement("div"); d.className = "m "+who; d.textContent = txt;
  $("msgs").appendChild(d); $("msgs").scrollTop = $("msgs").scrollHeight; return d;
}
function responder(q){
  const n = " "+norm(q)+" ";
  const hit = T().faq.find(f => f.k.some(w => n.includes(norm(w))));
  return hit ? hit.r : T().chat_unk;
}
function ask(q){
  if(!q.trim()) return;
  say(q,"me");
  setTimeout(()=>{
    const d = say(responder(q),"bot");
    const a = document.createElement("a");
    a.href = wa(T().wa_q+q); a.target="_blank"; a.rel="noopener"; a.textContent = T().chat_agent;
    d.appendChild(a);
  }, 350);
}
$("chatFab").onclick = () => {
  $("chat").hidden = false; $("chatFab").hidden = true;
  if(!$("msgs").children.length) say(T().chat_hi,"bot");
  $("chatInput").focus();
};
$("chatClose").onclick = () => { $("chat").hidden = true; $("chatFab").hidden = false; };
$("chatForm").onsubmit = e => { e.preventDefault(); ask($("chatInput").value); $("chatInput").value=""; };
$("chips").onclick = e => { if(e.target.tagName==="BUTTON") ask(e.target.textContent); };

render(); play();

// Formulario de garantía → WhatsApp / correo (no se guarda nada en servidor)
function warrantyText(){
  const f=$("wForm"), t=T(), v=n=>f.elements[n].value.trim();
  return `${t.wf_head}\n${t.wf_n}: ${v("name")}\n${t.wf_p}: ${v("phone")}\n${t.wf_m}: ${v("model")}\n${t.wf_s}: ${v("serial")||"-"}\n${t.wf_i}: ${v("issue")}`;
}
function warrantyOK(){
  const f=$("wForm"), ok = f.checkValidity();
  $("wErr").hidden = ok; $("wErr").textContent = T().f_err;
  if(!ok) f.reportValidity(); return ok;
}
$("wForm").onsubmit = e => { e.preventDefault(); if(warrantyOK()) window.open(wa(warrantyText()),"_blank","noopener"); };
$("wMail").onclick = () => { if(warrantyOK()) location.href = `mailto:${NEGOCIO.correo}?subject=${encodeURIComponent(T().wf_head)}&body=${encodeURIComponent(warrantyText())}`; };

// Promociones vigentes (se ocultan solas al vencer)
function renderPromos(){
  const t=T(), tz="America/Bogota", today=new Date().toLocaleDateString("en-CA",{timeZone:tz});
  const act = PROMOS.filter(p=>!p.hasta || p.hasta>=today);
  $("promociones").hidden = $("navPromo").hidden = !act.length;
  $("promos").innerHTML = act.map(p=>{
    let until="";
    if(p.hasta){
      const left=Math.round((new Date(p.hasta)-new Date(today))/864e5);
      const dt=new Date(p.hasta+"T12:00:00").toLocaleDateString(lang==="es"?"es-CO":"en-US",{day:"numeric",month:"long"});
      until = left===0 ? t.promo_last : left<=7 ? t.promo_left.replace("{n}",left) : `${t.promo_until} ${dt}`;
    }
    const msg=(lang==="es"?"Hola, quiero la promoción: ":"Hello, I want the offer: ")+p.t[lang];
    return `<article class="promo"><span class="badge">${p.badge[lang]}</span><div class="art sm">${ICONS[p.ico]}</div><h3>${p.t[lang]}</h3><p>${p.d[lang]}</p>${until?`<p class="until">${until}</p>`:""}<a class="btn sm" href="${wa(msg)}" target="_blank" rel="noopener">${t.promo_cta}</a></article>`;
  }).join("");
}

// Formulario de contacto → WhatsApp / correo
function contactText(){
  const f=$("cForm"), v=n=>f.elements[n].value.trim(), t=T();
  return `${t.cf_head}\n${t.wf_n}: ${v("name")}\n${t.wf_p}: ${v("phone")}\n${t.c_email}: ${v("email")||"-"}\n${t.c_topic}: ${v("topic")}\n${t.c_msg}: ${v("msg")}`;
}
function contactOK(){
  const f=$("cForm"), ok=f.checkValidity();
  $("cErr").hidden=ok; $("cErr").textContent=T().f_err; if(!ok) f.reportValidity(); return ok;
}
$("cForm").onsubmit=e=>{ e.preventDefault(); if(contactOK()) window.open(wa(contactText()),"_blank","noopener"); };
$("cMail").onclick=()=>{ if(contactOK()) location.href=`mailto:${NEGOCIO.correo}?subject=${encodeURIComponent(T().cf_head)}&body=${encodeURIComponent(contactText())}`; };
