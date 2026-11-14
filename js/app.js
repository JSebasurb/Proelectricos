// CAPA 3 · PRESENTACIÓN: pinta la página, cambia idioma y corre el chatbot.
const $ = id => document.getElementById(id);
let lang = (localStorage.getItem("lang") || (navigator.language||"es").slice(0,2)) === "en" ? "en" : "es";
const T = () => I18N[lang];
const wa = txt => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(txt || T().wa_default)}`;

function render(){
  const t = T();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===lang));
  $("waHero").href = $("waBtn").href = wa();
  $("waInv").href = wa(lang==="es"?"Hola, necesito asesoría para un inversor":"Hello, I need advice on an inverter");
  $("fbBtn").href = NEGOCIO.facebook;
  $("mailBtn").href = "mailto:"+NEGOCIO.correo;
  $("year").textContent = new Date().getFullYear();
  $("lineas").innerHTML = t.lineas.map(c=>`<article class="card"><h3>${c.t}</h3><p>${c.d}</p><a class="more" href="${D+c.u}" target="_blank" rel="noopener">${t.more}</a></article>`).join("");
  $("populares").innerHTML = t.populares.map(p=>`<article class="card"><span class="sku">${p.s}</span><h3>${p.t}</h3><a class="more" target="_blank" rel="noopener" href="${wa((lang==="es"?"Quiero cotizar ":"I want a quote for ")+p.s)}">${t.hero_cta2}</a></article>`).join("");
  $("pasos").innerHTML = t.pasos.map(p=>`<li>${p}</li>`).join("");
  $("requisitos").innerHTML = t.requisitos.map(p=>`<li>${p}</li>`).join("");
  $("servicios").innerHTML = t.servicios.map(s=>`<article class="card"><h3>${s.t}</h3><p>${s.d}</p></article>`).join("");
  $("info").innerHTML = `<li><b>${t.addr}:</b> ${NEGOCIO.direccion}</li><li><b>${t.hours}:</b> ${t.horario}</li><li><b>${t.mail}:</b> <a href="mailto:${NEGOCIO.correo}">${NEGOCIO.correo}</a></li>`;
  $("mapa").src = "https://www.google.com/maps?q="+encodeURIComponent(NEGOCIO.direccion)+"&output=embed";
  $("chatInput").placeholder = t.chat_ph;
  $("chips").innerHTML = t.sug.map(s=>`<button type="button">${s}</button>`).join("");
}
document.querySelector(".lang").onclick = e => {
  const l = e.target.dataset.lang; if(!l) return;
  lang = l; try{localStorage.setItem("lang",l)}catch(_){}
  $("msgs").innerHTML = ""; if(!$("chat").hidden) say(T().chat_hi,"bot");
  render();
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

render();
