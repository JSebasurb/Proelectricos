// UI de Lens y Asistente IA (BETA)
var GS = {step:0,task:null,mat:null,use:null}, smartTab = "lens", stream = null, aiBusy = false; // var: seguro si renderSmart() se llama antes de cargar este archivo

function miniCard(p,extra=""){
  const t=T(), st=stockState(p.s);
  return `<article class="mini"><div class="mpic">${iconOf(p)}</div><div><span class="sku">${p.s}</span><b>${p[lang]}</b>${extra}
   <div class="mrow"><span class="price">${priceTxt(p.s,lang)}</span><span class="pill ${st}">${stockTxt(p.s,lang)}</span></div>
   <div class="mrow"><button class="btn sm" data-add="${p.s}">${quote[p.s]?t.added:t.add_q}</button><a class="more" href="${p.u}" target="_blank" rel="noopener">${t.sheet}</a></div></div></article>`;
}
function renderSmart(){
  const t=T(); smartTab = smartTab || "lens";
  $("smartTabs").innerHTML = [["lens",t.tab_lens],["guide",t.tab_guide],["list",t.tab_list],["ai",t.tab_ai]].map(([k,l])=>`<button role="tab" aria-selected="${k===smartTab}" data-t="${k}">${l}</button>`).join("");
  $("paneLens").hidden = smartTab!=="lens"; $("paneAI").hidden = smartTab!=="ai"; $("paneGuide").hidden = smartTab!=="guide"; $("paneList").hidden = smartTab!=="list"; renderGuide();
  $("lensIn").placeholder = t.lens_manual_ph; $("aiInput").placeholder = t.ai_ph;
  $("aiMode").textContent = INV_CONF.endpoint ? t.ai_mode_remote : t.ai_mode_local;
  $("aiChips").innerHTML = t.ai_chips.map(c=>`<button type="button" data-q="${c}">${c}</button>`).join("");
  if(!$("aiMsgs").children.length) bubble(t.ai_hello,"bot");
}
$("smartTabs").onclick=e=>{ if(e.target.dataset.t){ smartTab=e.target.dataset.t; if(smartTab!=="lens") stopCam(); renderSmart(); } };
// "Agregar a cotización" desde las tarjetas de Lens y del asistente
[ "lensResults","aiMsgs","paneGuide","paneList" ].forEach(id=>$(id).addEventListener("click",e=>{
  const s=e.target.dataset.add; if(!s) return; quote[s]=(quote[s]||0)+1; renderQuote(); e.target.textContent=T().added; }));

// ---------- LENS ----------
const setStatus=(m)=>$("lensStatus").textContent=m||"";
function showResults(list){
  const t=T();
  $("lensResults").innerHTML = list.length
    ? `<p class="status">${t.lens_found}</p>`+list.map(miniCard).join("")
    : `<p class="status">${t.lens_none}</p><a class="btn sm" href="${wa(lang==="es"?"Hola, no encuentro mi herramienta. Les envío la foto del modelo.":"Hello, I can't find my tool. I'll send you a photo of the model.")}" target="_blank" rel="noopener">${t.talk}</a>`;
}
function stopCam(){ if(stream){ stream.getTracks().forEach(x=>x.stop()); stream=null; } $("cam").hidden=true; $("shotBtn").hidden=true; $("camBtn").dataset.i18n="cam_open"; $("camBtn").textContent=T().cam_open; if($("snap").hidden) $("vfEmpty").hidden=false; }
async function startCam(){
  try{
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1920}}});
    $("cam").srcObject = stream; await $("cam").play();
    $("cam").hidden=false; $("snap").hidden=true; $("vfEmpty").hidden=true; $("shotBtn").hidden=false;
    $("camBtn").textContent=T().cam_close; setStatus("");
  }catch(_){ setStatus(T().cam_err); }
}
$("camBtn").onclick=()=>{ stream ? stopCam() : startCam(); };
function drawToCanvas(src,w,h){
  const max=1600, k=Math.min(1,max/Math.max(w,h)), c=$("snap");
  c.width=Math.round(w*k); c.height=Math.round(h*k);
  const x=c.getContext("2d"); try{ x.filter="grayscale(1) contrast(1.35)"; }catch(_){}
  x.drawImage(src,0,0,c.width,c.height); c.hidden=false; $("cam").hidden=true; $("vfEmpty").hidden=true; return c;
}
$("shotBtn").onclick=()=>{ const v=$("cam"); const c=drawToCanvas(v,v.videoWidth,v.videoHeight); stopCam(); runLens(c); };
$("fileIn").onchange=e=>{
  const f=e.target.files[0]; if(!f) return; stopCam();
  const img=new Image(); img.onload=()=>{ runLens(drawToCanvas(img,img.naturalWidth,img.naturalHeight)); URL.revokeObjectURL(img.src); };
  img.onerror=()=>setStatus(T().lens_fail); img.src=URL.createObjectURL(f); e.target.value="";
};
async function runLens(canvas){
  const t=T(); $("scan").hidden=false; $("lensResults").innerHTML=""; $("lensText").hidden=true;
  setStatus(t.lens_reading); $("lensProg").hidden=true;
  try{
    const text = await ocrImage(canvas,(s,p)=>{
      if(s==="loading") setStatus(t.lens_loading);
      if(s==="reading"){ setStatus(t.lens_reading); $("lensProg").hidden=false; $("lensProg").value=p; }
    });
    $("ocrOut").textContent=text.trim()||"—"; $("lensText").hidden=false;
    let found = matchSkus(text);
    if(!found.length){ const words=text.replace(/[^A-Za-zÁÉÍÓÚáéíóúñ ]/g," "); if(words.replace(/\s/g,"").length>=6) found = smartSearch(words,lang).slice(0,2); }
    setStatus(""); showResults(found);
  }catch(_){ setStatus(t.lens_fail); }
  finally{ $("scan").hidden=true; $("lensProg").hidden=true; }
}
$("lensManual").onsubmit=e=>{ e.preventDefault(); const v=$("lensIn").value.trim(); if(!v) return;
  let r=matchSkus(v); if(!r.length) r=smartSearch(v,lang).slice(0,3); showResults(r); };

// ---------- ASISTENTE IA ----------
function bubble(text,who,skus){
  const d=document.createElement("div"); d.className="bub "+who; d.textContent=text;
  if(skus&&skus.length){ const w=document.createElement("div"); w.className="minis"; w.innerHTML=skus.map(s=>miniCard(PRODUCTOS.find(p=>p.s===s))).join(""); d.appendChild(w); }
  $("aiMsgs").appendChild(d); $("aiMsgs").scrollTop=$("aiMsgs").scrollHeight; return d;
}
async function askAI(q){
  if(!q.trim()||aiBusy) return; aiBusy=true; bubble(q,"me");
  const typing=bubble(T().ai_thinking,"bot typing");
  await new Promise(r=>setTimeout(r,500));
  let res; 
  if(INV_CONF.endpoint){
    try{ const txt=await askRemote(q,lang); res={text:txt,skus:matchSkus(q).slice(0,3).map(p=>p.s)}; }
    catch(_){ res=asistente(q,lang); res.text=T().ai_err+"\n"+res.text; }
  } else res=asistente(q,lang);
  typing.remove(); const b=bubble(res.text,"bot",res.skus);
  if(res.miss||!res.skus.length&&res.text===T().ai_miss){ const a=document.createElement("a"); a.className="more"; a.href=wa(T().wa_q+q); a.target="_blank"; a.rel="noopener"; a.textContent=T().talk; b.appendChild(document.createElement("br")); b.appendChild(a); }
  aiBusy=false;
}
$("aiForm").onsubmit=e=>{ e.preventDefault(); const v=$("aiInput").value; $("aiInput").value=""; askAI(v); };
$("aiChips").onclick=e=>{ if(e.target.dataset.q) askAI(e.target.dataset.q); };
// Al cambiar de idioma se reinicia la conversación
document.querySelector(".lang").addEventListener("click",()=>{ $("aiMsgs").innerHTML=""; renderSmart(); });

renderSmart();

// ---------- GUÍA ¿Qué necesito? ----------
function lbl(list,k){ return (list.find(x=>x.k===k)||{}).l||k; }
function renderGuide(){
  GS = GS || {step:0,task:null,mat:null,use:null}; // seguro si se llama antes de cargar este archivo
  const t=T(), el=$("paneGuide"), steps=[["task",t.g_q1,t.g_tasks],["mat",t.g_q2,t.g_mats],["use",t.g_q3,t.g_uses]];
  if(GS.step<3){
    const [k,q,opts]=steps[GS.step];
    el.innerHTML=`<div class="gprog">${steps.map((x,i)=>`<i class="${i<=GS.step?"on":""}"></i>`).join("")}</div><h3>${q}</h3>
      <div class="gopts">${opts.map(o=>`<button type="button" data-g="${o.k}"><span>${o.i}</span>${o.l}</button>`).join("")}</div>
      ${GS.step?`<button type="button" class="btn ghost sm" data-gback>${t.g_back}</button>`:""}`;
  } else {
    const res=recommend(GS);
    el.innerHTML=`<h3>${t.g_result}</h3><p class="status">${lbl(t.g_tasks,GS.task)} · ${lbl(t.g_mats,GS.mat)} · ${lbl(t.g_uses,GS.use)}</p>`+
      (res.length ? `<div class="minis">${res.map(r=>{ const why=`<span class="why">${t.g_why}: ${attr(r.s).tasks.map(x=>lbl(t.g_tasks,x)).join(", ")} · ${attr(r.s).mats.map(x=>lbl(t.g_mats,x)).join(", ")}</span>`; return miniCard(PRODUCTOS.find(p=>p.s===r.s),why); }).join("")}</div>`
        : `<p class="status">${t.g_none}</p><a class="btn sm" href="${wa()}" target="_blank" rel="noopener">${t.talk}</a>`)+
      `<p><button type="button" class="btn ghost sm" data-grestart>${t.g_restart}</button></p>`;
  }
}
$("paneGuide").addEventListener("click",e=>{
  const k=["task","mat","use"][GS.step];
  if(e.target.closest("[data-g]")){ GS[k]=e.target.closest("[data-g]").dataset.g; GS.step++; renderGuide(); }
  else if(e.target.dataset.gback!==undefined){ GS.step=Math.max(0,GS.step-1); renderGuide(); }
  else if(e.target.dataset.grestart!==undefined){ GS={step:0,task:null,mat:null,use:null}; renderGuide(); }
});
renderGuide();
