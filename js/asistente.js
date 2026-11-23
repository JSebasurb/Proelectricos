// ASISTENTE: responde preguntas sobre la base (productos + inventario). Local por defecto; IA remota opcional.
const info = sku => INVENTARIO[sku] || {};
const money = (v,lang) => new Intl.NumberFormat(lang==="es"?"es-CO":"en-US",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(v);
function priceTxt(sku,lang){ const v=info(sku).precio; return v!=null ? money(v,lang) : I18N[lang].price_ask; }
function stockState(sku){ const s=info(sku).stock; return s==null ? "ask" : s>0 ? "in" : "out"; }
function stockTxt(sku,lang){ return I18N[lang]["stock_"+stockState(sku)]; }

function parseCSV(text){
  const rows=[]; let row=[],cur="",q=false;
  for(let i=0;i<text.length;i++){ const c=text[i];
    if(q){ if(c==='"'){ if(text[i+1]==='"'){cur+='"';i++} else q=false } else cur+=c }
    else if(c==='"') q=true; else if(c===","){row.push(cur);cur=""}
    else if(c==="\n"||c==="\r"){ if(c==="\r"&&text[i+1]==="\n")i++; row.push(cur);cur="";rows.push(row);row=[] } else cur+=c;
  }
  if(cur||row.length){row.push(cur);rows.push(row)}
  return rows.filter(r=>r.some(x=>x.trim()));
}
function applyCSV(text){
  const rows=parseCSV(text), head=rows.shift().map(h=>norm(h).trim());
  const ix=n=>head.findIndex(h=>h.startsWith(n)), iS=ix("ref"), iP=ix("prec"), iT=ix("stock")>=0?ix("stock"):ix("exist");
  const num=v=>{ const n=String(v||"").replace(/[^\d]/g,""); return n===""?null:+n };
  rows.forEach(r=>{ const sku=(r[iS]||"").trim().toUpperCase(); if(!sku) return;
    INVENTARIO[sku]={precio:num(r[iP]),stock:iT>=0?num(r[iT]):null}; });
  return rows.length;
}
async function loadInventario(){
  if(!INV_CONF.csvUrl) return;
  try{ const r=await fetch(INV_CONF.csvUrl,{cache:"no-store"}); applyCSV(await r.text()); if(!INV_CONF.actualizado) INV_CONF.actualizado=new Date().toISOString().slice(0,10); }catch(_){}
}

function asistente(q, lang){
  const L=(a,b)=>lang==="es"?a:b, t=I18N[lang], n=norm(q), has=r=>r.test(n);
  if(has(/^(hola|buenas|buenos|hi|hello|hey)\b/) && n.trim().split(/\s+/).length<4) return {text:t.ai_greet,skus:[]};
  if(has(/repuesto|inducido|armadura|estator|mandril|portabrocas|carbones|escobilla|rodamiento|balero|mantenimiento|arregl|reparar|reparacion|spare|armature|stator|chuck|brushes|bearing|maintenance|repair/) && !matchSkus(q).length)
    return {text:L("Sí: vendemos repuestos (inducido, campo, mandril y más) y damos mantenimiento y arreglo a taladros, rotomartillos, demoledores, sierras y pulidoras. Mira la sección Repuestos o dime marca y modelo y un asesor te confirma disponibilidad.","Yes: we sell spare parts (armature, field, chuck and more) and provide maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers. See the Spare parts section or tell me the brand and model and an advisor will confirm availability."),skus:[],cats:["repuestos"],miss:true};
  const price=has(/precio|cuesta|cuanto|valor|cotiz|price|cost|how much/),
        stock=has(/\bhay\b|disponib|stock|tienen|existen|quedan|available|do you have/),
        cmp=has(/compar|versus|\bvs\b|diferencia|difference|which is better|cual es mejor/);
  let items=matchSkus(q);
  const core=n.replace(/\b(compara\w*|comparar|comparacion|diferencia\w*|versus|vs|precio\w*|cuesta\w*|cuanto|valor|cotiz\w*|hay|disponib\w*|stock|tienen|existen|quedan|recomiend\w*|recomendar|cost|price|how|much|compare|difference|available|have|you|do|which|better|recommend)\b/g," ");
  if(!items.length) items=smartSearch(core,lang);
  if(!items.length){
    const cats=searchCats(core);
    if(cats.length) return {text:L("Sí manejamos: "+cats.map(c=>c.n.es).join(", ")+". Aún no tenemos esas referencias cargadas en línea; un asesor te confirma modelos, precios y disponibilidad.","We carry: "+cats.map(c=>c.n.en).join(", ")+". Those models aren't loaded online yet; an advisor will confirm models, prices and availability."),skus:[],cats:cats.map(c=>c.id),miss:true};
    return {text:t.ai_miss,skus:[],miss:true};
  }
  items=items.slice(0,cmp?4:3);
  const head = cmp ? t.ai_h_cmp : price&&!stock ? t.ai_h_price : stock&&!price ? t.ai_h_stock : t.ai_h_rec;
  const lines=items.map(p=>`• ${p[lang]} (${p.s}) — ${priceTxt(p.s,lang)} · ${stockTxt(p.s,lang)}`);
  const date=INV_CONF.actualizado?` ${t.ai_tail_date} ${INV_CONF.actualizado}.`:"";
  return {text:`${head}\n${t.ai_tail}${date}`, skus:items.map(p=>p.s), lines};
}
async function askRemote(q, lang){ // opcional: servidor propio con IA (ver worker/ia-worker.js)
  const r=await fetch(INV_CONF.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
    question:q, lang, updated:INV_CONF.actualizado,
    catalog:PRODUCTOS.map(p=>({sku:p.s,name:p[lang],category:p.c,price:info(p.s).precio??null,stock:info(p.s).stock??null}))})});
  if(!r.ok) throw new Error("remote"); const j=await r.json(); return j.answer;
}
