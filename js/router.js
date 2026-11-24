// ROUTER por hash: #inicio · #catalogo · #garantias · #blog · #blog/slug · #contacto · y cualquier #id interno
var curView="inicio";
var VIEWS=["inicio","catalogo","repuestos","garantias","blog","contacto"];
function showView(v){
  if(!VIEWS.includes(v)) v="inicio"; curView=v;
  VIEWS.forEach(x=>{ const el=document.querySelector(`[data-view="${x}"]`); if(el) el.hidden = x!==v; });
  document.querySelectorAll("#nav a[data-v]").forEach(a=>a.setAttribute("aria-current", a.dataset.v===v?"page":"false"));
  document.title = (T().view_titles[v]||"")+" | Proelectricos";
  const md=document.querySelector('meta[name="description"]'); if(md&&T().view_descs&&T().view_descs[v]) md.setAttribute("content",T().view_descs[v]);
}
function goTo(id){
  const el=document.getElementById(id), box=el&&el.closest?el.closest("[data-view]"):null;
  const v = VIEWS.includes(id) ? id : (box?box.dataset.view:"inicio");
  showView(v);
  if(VIEWS.includes(id)||!el) scrollTo(0,0); else setTimeout(()=>el.scrollIntoView(),40);
}
function navTo(id){ if(location.hash.slice(1)===id) goTo(id); else location.hash=id; }
function route(){
  const h=decodeURIComponent(location.hash.slice(1));
  if(h.startsWith("blog/")){ showView("blog"); openArticle(h.slice(5)); scrollTo(0,0); return; }
  if(typeof closeArticle==="function") closeArticle();
  goTo(h||"inicio");
}
function renderRouter(){ if(typeof VIEWS==="undefined"||!VIEWS) return; showView(curView); }
addEventListener("hashchange",route);
route();
