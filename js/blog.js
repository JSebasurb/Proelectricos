// BLOG que recomienda: destacado, recomendados, kits, guías por tipo y proyectos con su kit de herramientas
var blogCat="all", blogTipo="all", curArt="", KITMAP={};
function prodOf(s){ return PRODUCTOS.find(p=>p.s===s); }
function kitParts(items){ return (items||[]).map(i=>i.sku?{p:prodOf(i.sku)}:{c:catOf(i.cat)}).filter(x=>x.p||x.c); }
function kitTotal(items){
  const sk=(items||[]).filter(i=>i.sku&&prodOf(i.sku)); if(!sk.length) return null; let tot=0;
  for(const i of sk){ const v=info(i.sku).precio; if(v==null) return null; tot+=v; } return tot;
}
function kitMsg(head,items){ return head+"\n"+kitParts(items).map(x=>"- "+(x.p?`${x.p[lang]} (${x.p.s})`:x.c.n[lang])).join("\n"); }
function kitHTML(key,items,name){
  const t=T(), parts=kitParts(items), prods=parts.filter(x=>x.p), cats=parts.filter(x=>x.c), tot=kitTotal(items);
  (KITMAP=KITMAP||{})[key]=items; // seguro si se llama antes de cargar este archivo
  return `${prods.length?`<div class="minis">${prods.map(x=>miniCard(x.p)).join("")}</div>`:""}
    ${cats.length?`<p class="kitcats">${cats.map(x=>`<button type="button" class="chip" data-cat="${x.c.id}">${x.c.n[lang]}</button>`).join("")}</p>`:""}
    ${tot!=null?`<p class="kittot">${t.kit_total}: <b>${money(tot,lang)}</b></p>`:""}
    <div class="cta">${prods.length?`<button class="btn sm" type="button" data-kitadd="${key}">${t.kit_add}</button>`:""}<a class="btn ghost sm" href="${wa(kitMsg(t.kit_head+(name?"«"+name+"»":""),items))}" target="_blank" rel="noopener">${t.kit_wa}</a></div>`;
}
function artCard(a){
  const t=T();
  return `<a class="card art" href="#blog/${a.slug}"><div class="pico2">${ICONS[a.ico]||ICONS.tools}</div><div class="pmeta"><span class="ptag ${a.tipo}">${t["tipo_"+a.tipo]||a.tipo}</span><span class="ptag ex">${catLabel(a.cat)}</span></div><h3>${a.t[lang]}</h3><p>${a.r[lang]}</p><span class="more">${t.blog_read} · ${a.min} ${t.blog_min}</span></a>`;
}
function recCard(r){
  const p=prodOf(r.sku); if(!p) return "";
  return `<article class="rec"><span class="ptag">${T().blog_for}: ${r.para[lang]}</span>${miniCard(p)}<p>${r.razon[lang]}</p></article>`;
}
function renderBlog(){
  blogCat=blogCat||"all"; blogTipo=blogTipo||"all";
  const t=T(), f=ARTICULOS.find(a=>a.destacado)||ARTICULOS[0];
  $("blogFeatured").innerHTML=`<a class="feat" href="#blog/${f.slug}"><div class="pico2 big">${ICONS[f.ico]||ICONS.tools}</div><div><span class="ptag">${t.blog_feat}</span> <span class="ptag ${f.tipo}">${t["tipo_"+f.tipo]||f.tipo}</span><h2>${f.t[lang]}</h2><p>${f.r[lang]}</p><span class="btn">${t.blog_read}</span></div></a>`;
  const recs=RECOMENDADOS.map(recCard).filter(Boolean);
  $("blogRecs").innerHTML=recs.join(""); $("homeRecs").innerHTML=recs.slice(0,3).join("");
  $("blogKits").innerHTML=KITS.map(k=>`<article class="card kit"><div class="kicon">${ICONS[k.ico]||ICONS.tools}</div><h3>${k.n[lang]}</h3><p>${k.para[lang]}</p><p class="small"><b>${t.kit_items}:</b></p>${kitHTML("k:"+k.id,k.items,k.n[lang])}</article>`).join("");
  const tipos=["all",...new Set(ARTICULOS.map(a=>a.tipo))], cats=["all",...new Set(ARTICULOS.map(a=>a.cat))];
  $("blogTypes").innerHTML=tipos.map(x=>`<button role="tab" aria-selected="${x===blogTipo}" data-bt="${x}">${x==="all"?t.blog_type_all:t["tipo_"+x]}</button>`).join("");
  $("blogFilters").innerHTML=cats.map(c=>`<button role="tab" aria-selected="${c===blogCat}" data-bc="${c}">${c==="all"?t.blog_all:catLabel(c)}</button>`).join("");
  $("blogGrid").innerHTML=ARTICULOS.filter(a=>(blogCat==="all"||a.cat===blogCat)&&(blogTipo==="all"||a.tipo===blogTipo)).map(artCard).join("");
  $("blogUses").innerHTML=`<thead><tr><th>${t.blog_task}</th><th>${t.blog_tool}</th><th></th></tr></thead><tbody>${TABLA_USOS.map(r=>`<tr><td>${r.t[lang]}</td><td><b>${r.h[lang]}</b></td><td><button type="button" class="btn ghost sm" data-cat="${r.c}">${t.blog_see}</button></td></tr>`).join("")}</tbody>`;
  if(curArt) openArticle(curArt);
}
function openArticle(slug){
  const t=T(), a=ARTICULOS.find(x=>x.slug===slug);
  if(!a){ closeArticle(); return; }
  curArt=slug; $("blogList").hidden=true; $("blogRead").hidden=false;
  const rel=ARTICULOS.filter(x=>x.slug!==a.slug&&(x.cat===a.cat||x.tipo===a.tipo)).slice(0,3);
  $("blogArticle").innerHTML=`<a class="more" href="#blog">${t.blog_back}</a>
    <div class="arthead"><div class="pico2">${ICONS[a.ico]||ICONS.tools}</div><div><span class="ptag ${a.tipo}">${t["tipo_"+a.tipo]||a.tipo}</span> <span class="ptag ex">${catLabel(a.cat)}</span><h2>${a.t[lang]}</h2><p class="small">${a.min} ${t.blog_min}</p></div></div>
    ${a.s.map(s=>`<h3>${s.h[lang]}</h3>${s.p?`<p>${s.p[lang]}</p>`:""}${s.l?`<ul>${s.l[lang].map(x=>`<li>${x}</li>`).join("")}</ul>`:""}`).join("")}
    ${a.kit.length?`<div class="artkit"><h3>${t.blog_kit_title}</h3>${kitHTML("a:"+a.slug,a.kit,a.t[lang])}</div>`:""}
    <div class="cta"><button class="btn" type="button" data-cat="${a.cat}">${t.blog_related}: ${catLabel(a.cat)}</button><a class="btn ghost" href="${wa((lang==="es"?"Hola, vi la guía «":"Hello, I read the guide \"")+a.t[lang]+(lang==="es"?"» y tengo una pregunta":"\" and have a question"))}" target="_blank" rel="noopener">${t.blog_ask}</a><button class="btn ghost" type="button" data-ashare="${a.slug}" aria-label="${t.share}">🔗</button></div>
    ${rel.length?`<h3>${t.blog_more}</h3><div class="grid g3">${rel.map(artCard).join("")}</div>`:""}`;
}
function closeArticle(){ curArt=""; $("blogList").hidden=false; $("blogRead").hidden=true; }

$("blogFilters").addEventListener("click",e=>{ if(e.target.dataset.bc){ blogCat=e.target.dataset.bc; renderBlog(); } });
$("blogTypes").addEventListener("click",e=>{ if(e.target.dataset.bt){ blogTipo=e.target.dataset.bt; renderBlog(); } });
["view-blog","homeRecs"].forEach(id=>$(id).addEventListener("click",e=>{
  const cat=e.target.closest("[data-cat]"); if(cat){ pickCat(cat.dataset.cat); return; }
  const add=e.target.dataset.add; if(add){ quote[add]=(quote[add]||0)+1; renderQuote(); renderCatalog(); e.target.textContent=T().added; return; }
  const kit=e.target.dataset.kitadd; if(kit){ (KITMAP[kit]||[]).forEach(i=>{ if(i.sku&&prodOf(i.sku)) quote[i.sku]=(quote[i.sku]||0)+1; }); renderQuote(); renderCatalog(); e.target.textContent=T().list_added; return; }
  const s=e.target.dataset.ashare; if(s){ const a=ARTICULOS.find(x=>x.slug===s), url=siteURL()+"#blog/"+s;
    if(navigator.share) navigator.share({title:"Proelectricos",text:a.t[lang],url}).catch(()=>{});
    else window.open("https://wa.me/?text="+encodeURIComponent(a.t[lang]+"\n"+url),"_blank","noopener"); }
}));
renderBlog();
