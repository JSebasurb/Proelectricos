// PUBLICACIONES: aviso superior, carrusel del inicio dinámico y sección de novedades.
var postFilter="all", postsShown=6, curAviso="";
function todayBogota(){ return new Date().toLocaleDateString("en-CA",{timeZone:"America/Bogota"}); } // function: segura si se llama antes de cargar este archivo
function activePosts(){
  const t=todayBogota();
  return POSTS.filter(p=>(!p.fecha||p.fecha<=t)&&(!p.hasta||p.hasta>=t)).sort((a,b)=>(b.fecha||"").localeCompare(a.fecha||""));
}
function shortTxt(s,n){ s=s||""; return s.length>n ? s.slice(0,n-1).trimEnd()+"…" : s; }
function L(o){ return o ? (o[lang]||o.es||"") : ""; }

// Carrusel: destacadas + 1ª promoción vigente + diapositivas fijas de marca
function allSlides(){
  const t=T(), act=activePosts(), today=todayBogota(), out=[];
  act.filter(p=>p.destacado&&p.tipo!=="aviso").slice(0,3).forEach(p=>out.push({
    kicker:t["tipo_"+p.tipo], t:esc(L(p.titulo)), d:esc(shortTxt(L(p.texto),150)), cta:p.enlace?t.post_cta:t.read_more,
    href:p.enlace||"#publicaciones", ext:!!p.enlace, ico:p.ico||"drill"}));
  const pr=PROMOS.find(p=>!p.hasta||p.hasta>=today);
  if(pr) out.push({kicker:t.nav_promo, t:esc(L(pr.t)), d:esc(shortTxt(L(pr.d),150)), cta:t.promo_cta, href:"#promociones", ico:pr.ico});
  return out.concat(t.slides).slice(0,7);
}

function cardHTML(p){
  const t=T(), long=L(p.texto).length>140;
  const date=p.fecha?new Date(p.fecha+"T12:00:00").toLocaleDateString(lang==="es"?"es-CO":"en-US",{day:"numeric",month:"short",year:"numeric"}):"";
  const cta=p.enlace?`<a class="btn sm" href="${p.enlace}" target="_blank" rel="noopener">${t.post_cta}</a>`
    :`<a class="btn sm" href="${wa((lang==="es"?"Hola, vi su publicación: ":"Hello, I saw your post: ")+L(p.titulo))}" target="_blank" rel="noopener">${t.post_wa}</a>`;
  return `<article class="card post" data-id="${esc(p.id)}"><div class="pmeta"><span class="ptag ${p.tipo}">${t["tipo_"+p.tipo]}</span>${p.ejemplo?`<span class="ptag ex">${t.example}</span>`:""}<span class="pdate">${date}</span></div>
    <div class="pico">${ICONS[p.ico]||ICONS.drill}</div><h3>${esc(L(p.titulo))}</h3><p class="ptext">${esc(L(p.texto))}</p>
    <div class="pact">${long?`<button type="button" class="more" data-pmore>${t.read_more}</button>`:""}${cta}<button type="button" class="btn ghost sm" data-pshare="${esc(p.id)}" aria-label="${t.share}">🔗</button></div></article>`;
}

function renderPosts(){
  const t=T(), act=activePosts();
  $("publicaciones").hidden = $("navPosts").hidden = !act.length;
  const tipos=["all",...new Set(act.map(p=>p.tipo))]; if(!tipos.includes(postFilter)) postFilter="all";
  $("postFilters").innerHTML=tipos.map(k=>`<button role="tab" aria-selected="${k===postFilter}" data-pf="${k}">${k==="all"?t.f_all:t["tipo_"+k]}</button>`).join("");
  const list=act.filter(p=>postFilter==="all"||p.tipo===postFilter);
  $("postGrid").innerHTML=list.slice(0,postsShown).map(cardHTML).join("");
  $("postMore").hidden=list.length<=postsShown;
  // aviso superior
  const a=act.find(p=>p.tipo==="aviso"); let closed=""; try{ closed=sessionStorage.getItem("avisoX")||""; }catch(_){}
  curAviso=a?a.id:""; $("aviso").hidden=!a||closed===a.id;
  if(a) $("avisoTxt").textContent=L(a.titulo)+(L(a.texto)?" — "+shortTxt(L(a.texto),90):"");
  tickCountdowns();
}
$("postFilters").onclick=e=>{ if(e.target.dataset.pf){ postFilter=e.target.dataset.pf; postsShown=6; renderPosts(); } };
$("postMore").onclick=()=>{ postsShown+=6; renderPosts(); };
$("postGrid").onclick=e=>{
  const card=e.target.closest(".post"); if(!card) return;
  if(e.target.dataset.pmore!==undefined){ const o=card.classList.toggle("open"); e.target.textContent=o?T().read_less:T().read_more; }
  else if(e.target.dataset.pshare){ const p=POSTS.find(x=>x.id===e.target.dataset.pshare); if(!p) return;
    const text=L(p.titulo), url=siteURL()+"#publicaciones";
    if(navigator.share){ navigator.share({title:"Proelectricos",text,url}).catch(()=>{}); }
    else window.open("https://wa.me/?text="+encodeURIComponent(text+"\n"+url),"_blank","noopener"); }
};
$("avisoX").onclick=()=>{ $("aviso").hidden=true; try{ sessionStorage.setItem("avisoX",curAviso); }catch(_){} };

// Cuenta regresiva de promociones (solo si faltan 7 días o menos)
function tickCountdowns(){
  const now=Date.now();
  document.querySelectorAll(".cd").forEach(el=>{
    const ms=new Date(el.dataset.end)-now; if(!(ms>0)||ms>7*864e5){ el.textContent=""; return; }
    const s=Math.floor(ms/1000), p2=n=>String(n).padStart(2,"0"), d=Math.floor(s/86400);
    el.textContent=`⏱ ${T().promo_ends} ${d?d+" d ":""}${p2(Math.floor(s%86400/3600))}:${p2(Math.floor(s%3600/60))}:${p2(s%60)}`;
  });
}
setInterval(tickCountdowns,1000);
renderPosts();
