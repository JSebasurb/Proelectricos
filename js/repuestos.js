// REPUESTOS Y SERVICIO TÉCNICO: piezas por tipo de herramienta, buscador, solicitud y FAQ.
// Las piezas listadas son las más comunes en cada herramienta; la disponibilidad se confirma por modelo.
var REPUESTOS = {
 parts:[
  {id:"inducido",ico:"armature",n:{es:"Inducido (armadura)",en:"Armature (rotor)"},
   d:{es:"Parte giratoria del motor, con bobinado y colector.",en:"The motor's rotating part, with windings and commutator."},
   s:{es:"Olor a quemado, chispas fuertes, pérdida de potencia o no arranca.",en:"Burning smell, heavy sparking, power loss or won't start."}},
  {id:"campo",ico:"stator",n:{es:"Campo (estator)",en:"Field (stator)"},
   d:{es:"Parte fija del motor, con las bobinas que generan el campo magnético.",en:"The motor's fixed part, with the coils that create the magnetic field."},
   s:{es:"Calentamiento excesivo, olor a quemado o se dispara la protección.",en:"Overheating, burning smell or the protection trips."}},
  {id:"mandril",ico:"chuck",n:{es:"Mandril (portabrocas)",en:"Chuck"},
   d:{es:"Pieza que sujeta la broca.",en:"The part that holds the bit."},
   s:{es:"La broca patina o se mueve, no cierra bien o hace ruido.",en:"The bit slips or wobbles, won't tighten or is noisy."}},
  {id:"carbones",ico:"gear",n:{es:"Carbones (escobillas)",en:"Carbon brushes"},
   d:{es:"Llevan la corriente al inducido y se desgastan con el uso.",en:"They carry current to the armature and wear out with use."},
   s:{es:"Chispas, funcionamiento intermitente o pérdida de fuerza.",en:"Sparking, intermittent running or loss of power."}},
  {id:"rodamientos",ico:"gear",n:{es:"Rodamientos (baleros)",en:"Bearings"},
   d:{es:"Soportan el eje y reducen la fricción.",en:"They support the shaft and reduce friction."},
   s:{es:"Ruido, vibración o calentamiento.",en:"Noise, vibration or heat."}},
  {id:"interruptor",ico:"gear",n:{es:"Interruptor (gatillo)",en:"Switch (trigger)"},
   d:{es:"Enciende la herramienta y regula la velocidad.",en:"Turns the tool on and regulates speed."},
   s:{es:"No enciende, enciende a ratos o no regula la velocidad.",en:"Won't start, starts intermittently or doesn't regulate speed."}},
  {id:"engranajes",ico:"gear",n:{es:"Engranajes y piñones",en:"Gears and pinions"},
   d:{es:"Transmiten el giro del motor al eje de trabajo.",en:"They transmit the motor's rotation to the working shaft."},
   s:{es:"Ruido áspero, pierde fuerza o gira pero no transmite.",en:"Grinding noise, loses power or spins without transmitting."}},
  {id:"percusion",ico:"hammer",n:{es:"Mecanismo de percusión",en:"Hammering mechanism"},
   d:{es:"Pistón y cilindro que generan el golpe en rotomartillos y demoledores.",en:"Piston and cylinder that create the blow in rotary and demolition hammers."},
   s:{es:"Gira pero no golpea, o golpea débil.",en:"Spins but doesn't hammer, or hammers weakly."}},
  {id:"cable",ico:"gear",n:{es:"Cable de alimentación",en:"Power cord"},
   d:{es:"Cable y conexión que alimentan la herramienta.",en:"The cord and connection that power the tool."},
   s:{es:"Cable cortado, recalentado o con falsos contactos.",en:"Cut or overheated cord, or loose connections."}},
  {id:"guarda",ico:"grinder",n:{es:"Guarda o protector",en:"Guard"},
   d:{es:"Protege al usuario del disco o la hoja.",en:"Protects the user from the disc or blade."},
   s:{es:"Guarda rota, floja o faltante.",en:"Broken, loose or missing guard."}}
 ],
 tools:[
  {id:"taladro",ico:"drill",n:{es:"Taladro",en:"Drill"},parts:["mandril","inducido","campo","carbones","rodamientos","interruptor","engranajes","cable"]},
  {id:"rotomartillo",ico:"hammer",n:{es:"Rotomartillo",en:"Rotary hammer"},alias:{mandril:{es:"Portabrocas SDS (mandril)",en:"SDS chuck"}},parts:["inducido","campo","mandril","carbones","rodamientos","percusion","interruptor","engranajes"]},
  {id:"demoledor",ico:"hammer",n:{es:"Demoledor",en:"Demolition hammer"},parts:["inducido","campo","carbones","rodamientos","percusion","interruptor","cable"]},
  {id:"sierra",ico:"saw",n:{es:"Sierra",en:"Saw"},parts:["inducido","campo","carbones","rodamientos","interruptor","engranajes","guarda"]},
  {id:"pulidora",ico:"grinder",n:{es:"Pulidora / amoladora",en:"Polisher / grinder"},parts:["inducido","campo","carbones","rodamientos","interruptor","engranajes","guarda"]}
 ]
};
var REP_TOOL="taladro", repSel={};

function repPartName(tool,p){ return (tool.alias&&tool.alias[p.id]||p.n)[lang]; }
function renderRepuestos(){
  if(typeof REPUESTOS==="undefined"||!REPUESTOS) return;   // seguro si se llama antes de cargar este archivo
  const t=T(), tool=REPUESTOS.tools.find(x=>x.id===REP_TOOL)||REPUESTOS.tools[0];
  $("repServ").innerHTML=t.rep_services.map(s=>`<article class="card"><span class="ico">${s.i}</span><h3>${s.t}</h3><p>${s.d}</p></article>`).join("");
  $("repTools").innerHTML=REPUESTOS.tools.map(x=>`<button role="tab" aria-selected="${x.id===tool.id}" data-rt="${x.id}">${x.n[lang]}</button>`).join("");
  $("repParts").innerHTML=tool.parts.map(id=>{ const p=REPUESTOS.parts.find(x=>x.id===id), on=!!repSel[id];
    return `<article class="card part${on?" sel":""}"><div class="pic2">${ICONS[p.ico]||ICONS.gear}</div><h3>${repPartName(tool,p)}</h3><p>${p.d[lang]}</p><p class="signs"><b>${t.rep_signs}:</b> ${p.s[lang]}</p><button type="button" class="btn sm${on?"":" ghost"}" data-part="${id}">${on?t.rep_selected:t.rep_need}</button></article>`; }).join("");
  const keep=$("rTool").value||tool.id;
  $("rTool").innerHTML=REPUESTOS.tools.map(x=>`<option value="${x.id}">${x.n[lang]}</option>`).join(""); $("rTool").value=tool.id;
  $("rType").innerHTML=t.rep_types.map(x=>`<option>${x}</option>`).join("");
  $("rParts").value=tool.parts.filter(id=>repSel[id]).map(id=>repPartName(tool,REPUESTOS.parts.find(x=>x.id===id))).join(", ");
  $("homePartsRow").innerHTML=["armature","stator","chuck","gear"].map((k,i)=>`<div class="hp"><div class="cico">${ICONS[k]}</div><b>${[REPUESTOS.parts[0].n,REPUESTOS.parts[1].n,REPUESTOS.parts[2].n,{es:"Carbones y más",en:"Brushes and more"}][i][lang]}</b></div>`).join("");
  $("repAcc").innerHTML=t.rep_faq.map(f=>`<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
}
$("repTools").addEventListener("click",e=>{ if(e.target.dataset.rt){ REP_TOOL=e.target.dataset.rt; repSel={}; renderRepuestos(); } });
$("rTool").addEventListener("change",e=>{ REP_TOOL=e.target.value; repSel={}; renderRepuestos(); });
$("repParts").addEventListener("click",e=>{ const id=e.target.dataset.part; if(!id) return; if(repSel[id]) delete repSel[id]; else repSel[id]=1; renderRepuestos(); });

function repText(){
  const f=$("rForm"), v=n=>f.elements[n].value.trim(), t=T(), tool=REPUESTOS.tools.find(x=>x.id===v("tool"));
  return `${t.rep_msg_head}\n${t.wf_n}: ${v("name")}\n${t.wf_p}: ${v("phone")}\n${t.rep_f_type}: ${v("type")}\n${t.rep_f_tool}: ${tool?tool.n[lang]:v("tool")}\n${t.rep_f_brand}: ${v("brand")||"-"}\n${t.wf_m}: ${v("model")||"-"}\n${t.rep_f_parts}: ${v("parts")||"-"}\n${t.wf_i}: ${v("issue")||"-"}`;
}
function repOK(){
  const f=$("rForm"), ok=f.checkValidity() && (f.elements.parts.value.trim()||f.elements.issue.value.trim());
  $("rErr").hidden=!!ok; $("rErr").textContent=T().rep_err; if(!ok&&f.reportValidity&&!f.checkValidity()) f.reportValidity(); return !!ok;
}
$("rForm").addEventListener("submit",e=>{ e.preventDefault(); if(repOK()) window.open(wa(repText()),"_blank","noopener"); });
$("rMail").addEventListener("click",()=>{ if(repOK()) location.href=`mailto:${NEGOCIO.correo}?subject=${encodeURIComponent(T().rep_msg_head)}&body=${encodeURIComponent(repText())}`; });
renderRepuestos();
