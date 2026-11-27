/* Proeléctricos Popayán · menú hamburguesa + hero dinámico */
/* ===== Menú hamburguesa ===== */
(function(){
  const dr=$("drawer"),ov=$("drawerOv"),bg=$("burger");
  function open(o){
    dr.classList.toggle("open",o);ov.classList.toggle("open",o);
    bg.setAttribute("aria-expanded",o);dr.setAttribute("aria-hidden",!o);
    document.body.style.overflow=o?"hidden":"";
    (o?$("drawerClose"):bg).focus({preventScroll:true});
  }
  bg.addEventListener("click",()=>open(true));
  $("drawerClose").addEventListener("click",()=>open(false));
  ov.addEventListener("click",()=>open(false));
  dr.addEventListener("click",e=>{if(e.target.closest("#drawerNav a,#drawerWa"))open(false)});
  $("drawerLang").addEventListener("click",()=>$("langToggle").click());
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dr.classList.contains("open"))open(false)});
  matchMedia("(min-width:1180px)").addEventListener("change",e=>{if(e.matches&&dr.classList.contains("open"))open(false)});
})();

/* ===== Hero dinámico ===== */
(function(){
  let i=0;
  const sl=$("heroSlides"),nt=$("heroNotes"),dots=$("heroDots");
  const COPY={
    es:[
      {b:"Trayectoria",t:"Más de 20 años <span>de experiencia</span>",l:"Proeléctricos acompaña a talleres, técnicos y hogares de Popayán con herramienta eléctrica, repuestos y servicio autorizado.",nt:"Experiencia local",nd:"Más de dos décadas atendiendo a Popayán."},
      {b:"Servicio autorizado",t:"Tu garantía DEWALT <span>gestionada aquí mismo</span>",l:"Somos servicio autorizado: recibimos tu herramienta en Popayán y tramitamos la garantía sin que tengas que enviarla a otra ciudad.",nt:"Garantía DEWALT",nd:"Gestionamos tu caso directamente con la marca."},
      {b:"Soldadura y bobinados",t:"Inversores y <span>alambre esmaltado</span>",l:"Inversores soldadores, alambre de cobre esmaltado para rebobinado y todo para el taller eléctrico.",nt:"Para talleres",nd:"Te ayudamos a elegir el calibre y la potencia correctos."},
      {b:"Repuestos",t:"Repuestos <span>originales</span> a la mano",l:"Repuestos originales para tu herramienta DEWALT. Búscalos por referencia o escríbenos.",nt:"Búscalo por referencia",nd:"Usa el buscador de repuestos o escríbenos con la referencia."}
    ],
    en:[
      {b:"Our story",t:"Over 20 years <span>of experience</span>",l:"Proeléctricos has served workshops, technicians and households in Popayán with power tools, spare parts and authorized service.",nt:"Local experience",nd:"More than two decades serving Popayán."},
      {b:"Authorized service",t:"Your DEWALT warranty <span>handled right here</span>",l:"We are an authorized service center: we receive your tool in Popayán and process the warranty claim, no need to ship it to another city.",nt:"DEWALT warranty",nd:"We manage your case directly with the brand."},
      {b:"Welding & windings",t:"Inverters & <span>enameled wire</span>",l:"Welding inverters, enameled copper wire for rewinding and everything for the electrical workshop.",nt:"For workshops",nd:"We help you pick the right gauge and power."},
      {b:"Spare parts",t:"<span>Genuine</span> parts at hand",l:"Genuine spare parts for your DEWALT tool. Search by part number or message us.",nt:"Search by part number",nd:"Use the parts finder or message us the reference."}
    ]
  };
  function liveSlide(){
    const t=T(),es=lang==="es";
    const now=new Date(new Date().toLocaleString("en-US",{timeZone:HORARIO.zona}));
    const ranges=HORARIO.dias[now.getDay()]||[];
    const h=now.getHours()+now.getMinutes()/60;
    const cur=ranges.find(r=>h>=r[0]&&h<r[1]);
    let title;
    if(cur){title=`${t.open_now} <span>${t.closes} ${fmtHour(cur[1])}</span>`}
    else{
      const nx=ranges.find(r=>r[0]>h);let when="";
      if(nx){when=`${t.opens} ${fmtHour(nx[0])}`}
      else for(let k=1;k<=7;k++){
        const d=(now.getDay()+k)%7;
        if(HORARIO.dias[d]){const dt=new Date(now);dt.setDate(dt.getDate()+k);
          when=`${t.opens} ${dt.toLocaleDateString(es?"es-CO":"en-US",{weekday:"long"})} ${fmtHour(HORARIO.dias[d][0][0])}`;break}
      }
      title=`${t.closed_now} <span>${when}</span>`;
    }
    return {b:es?"Atención hoy":"Open hours",t:title,
      l:es?"Calle 4 #21C-14, Popayán. Lunes a viernes 8 am–12 m y 2–5:30 pm · Sábados 8 am–1 pm.":"Calle 4 #21C-14, Popayán. Mon–Fri 8 am–12 pm and 2–5:30 pm · Sat 8 am–1 pm.",
      nt:es?"Visítanos":"Visit us",nd:es?"Escríbenos por WhatsApp si vienes de otra zona y te confirmamos disponibilidad.":"Message us on WhatsApp if you're coming from afar and we'll confirm availability."};
  }
  function slides(){
    const t=T();
    const first={b:t.hero_badge,t:t.hero_title,l:t.hero_lead,nt:t.hero_box_t,nd:t.hero_box_d};
    return [first,...COPY[lang],liveSlide()];
  }
  function build(){
    const arr=slides();
    sl.innerHTML=arr.map((s,k)=>`<div class="slide${k===i?" on":""}"><span class="hero-badge">${s.b}</span><${k===0?"h1":"h2"} class="hl">${s.t}</${k===0?"h1":"h2"}><p class="hero-lead">${s.l}</p></div>`).join("");
    nt.innerHTML=arr.map((s,k)=>`<div class="slide${k===i?" on":""}"><strong>${s.nt}</strong><p>${s.nd}</p></div>`).join("");
    dots.innerHTML=arr.map((s,k)=>`<button type="button" class="dot${k===i?" on":""}" data-k="${k}" aria-label="${k+1}/${arr.length}"></button>`).join("");
  }
  function show(n){
    const len=sl.children.length;i=(n+len)%len;
    if(i===len-1)build();
    else{[sl,nt,dots].forEach(c=>[...c.children].forEach((el,k)=>el.classList.toggle("on",k===i)))}
  }
  dots.addEventListener("click",e=>{const b=e.target.closest(".dot");if(b)show(+b.dataset.k)});
  dots.addEventListener("animationend",()=>show(i+1));
  const box=document.querySelector(".hero-copy");
  const pause=o=>dots.classList.toggle("paused",o);
  box.addEventListener("mouseenter",()=>pause(true));
  box.addEventListener("mouseleave",()=>pause(false));
  box.addEventListener("focusin",()=>pause(true));
  box.addEventListener("focusout",()=>pause(false));
  let x0=null;
  sl.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;pause(true)},{passive:true});
  sl.addEventListener("touchend",e=>{
    pause(false);
    if(x0!=null){const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)show(i+(dx<0?1:-1));}
    x0=null;
  });
  const _render=renderAll;
  renderAll=function(){_render();build();$("drawerWa").href=waUrl();};
  build();$("drawerWa").href=waUrl();
})();
