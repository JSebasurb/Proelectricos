// LENS: lee texto de una foto (OCR) y lo busca en la base de productos.
const fold = s => s.toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/O/g,"0").replace(/[IL]/g,"1"); // tolera confusiones del OCR (O/0, I/1/L)
function matchSkus(text){
  const t = fold(text), out = [];
  PRODUCTOS.forEach(p=>{
    const full = fold(p.s), base = fold(p.s.split("-")[0]);
    let sc = 0;
    if(t.includes(full)) sc = 10; else if(t.includes(base)) sc = 8;
    else for(const L of [base.length, base.length-1, base.length+1]){
      for(let i=0; i+L<=t.length && !sc; i++) if(lev1(t.slice(i,i+L), base)) sc = 6;
      if(sc) break;
    }
    if(sc) out.push({p,sc});
  });
  return out.sort((a,b)=>b.sc-a.sc).map(x=>x.p);
}
function loadTesseract(){
  return new Promise((ok,ko)=>{
    if(window.Tesseract) return ok();
    const s=document.createElement("script");
    s.src="https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
    s.onload=ok; s.onerror=()=>ko(new Error("ocr-load")); document.head.appendChild(s);
  });
}
async function ocrImage(canvas, onStatus){
  if("TextDetector" in window){ // lector nativo (Chrome Android), si existe
    try{ const r=await new TextDetector().detect(canvas), txt=r.map(x=>x.rawValue).join(" "); if(txt.trim()) return txt; }catch(_){}
  }
  onStatus && onStatus("loading");
  await loadTesseract();
  const res = await Tesseract.recognize(canvas,"eng",{logger:m=>{ if(m.status==="recognizing text") onStatus&&onStatus("reading",m.progress); }});
  return res.data.text || "";
}
