/* Proeléctricos Popayán · lógica principal (CONFIG, catálogo, calculadoras, garantías, cotización) */
const LOGO="assets/img/logo-medallon.webp";
/* =========================================================================
   1. CONFIGURACIÓN PRINCIPAL (EDITA AQUÍ TUS DATOS REALES)
   ========================================================================= */
const CONFIG = {
  nombre: "Proeléctricos Popayán",
  direccion: "Calle 4 #21C-14, Popayán, Cauca",
  correo: "proelectricospopayan@hotmail.com",
  facebook: "https://www.facebook.com/share/1E17P7FDqw/",
  whatsapp: "573000000000", // <-- REEMPLAZA CON TU NÚMERO REAL (57 + 10 dígitos, sin + ni espacios)
  nit: "Por actualizar",    // <-- REEMPLAZA CON TU NIT REAL
  dewalt: "https://www.dewalt.com.co/es-co",
  // Opcional: enlaces CSV publicados desde Google Sheets
  csvInventario: "", // columnas: referencia,precio,stock
  csvGarantias: ""   // columnas: caso,estado,actualizado,nota
};

const HORARIO = {
  zona: "America/Bogota",
  dias: {
    1:[[8,12],[14,17.5]], 2:[[8,12],[14,17.5]], 3:[[8,12],[14,17.5]],
    4:[[8,12],[14,17.5]], 5:[[8,12],[14,17.5]], 6:[[8,13]]
  }
};

/* =========================================================================
   2. ICONOS SVG PROPIOS
   ========================================================================= */
const Y="#FFC20E",K="#0B0B0C",G="#C2C5CA",DG="#43474D";
const ICONS = {
  drill:`<svg viewBox="0 0 120 80"><rect x="24" y="12" width="60" height="28" rx="9" fill="${Y}"/><rect x="34" y="12" width="32" height="9" rx="3" fill="${K}"/><rect x="84" y="19" width="12" height="14" fill="${DG}"/><rect x="96" y="24" width="18" height="4" rx="2" fill="${G}"/><path d="M40 40h22l-7 24H35z" fill="${K}"/><rect x="28" y="62" width="36" height="13" rx="3" fill="#222"/><rect x="34" y="66" width="12" height="5" fill="${Y}"/></svg>`,
  grinder:`<svg viewBox="0 0 120 80"><rect x="8" y="30" width="62" height="22" rx="11" fill="${Y}"/><rect x="14" y="30" width="24" height="22" rx="8" fill="${K}"/><rect x="66" y="22" width="22" height="38" rx="6" fill="${Y}"/><path d="M86 18a24 24 0 0 1 0 46z" fill="${DG}"/><ellipse cx="96" cy="41" rx="5" ry="25" fill="${G}"/><rect x="48" y="50" width="10" height="22" rx="4" fill="${K}"/></svg>`,
  saw:`<svg viewBox="0 0 120 80"><circle cx="64" cy="48" r="28" fill="${G}"/><circle cx="64" cy="48" r="28" fill="none" stroke="${K}" stroke-width="4" stroke-dasharray="3 5"/><circle cx="64" cy="48" r="7" fill="${K}"/><path d="M26 44a38 34 0 0 1 76-4v-8H34z" fill="${Y}"/><rect x="26" y="20" width="14" height="30" rx="5" fill="${K}"/></svg>`,
  hammer:`<svg viewBox="0 0 120 80"><rect x="22" y="22" width="64" height="26" rx="8" fill="${Y}"/><rect x="30" y="22" width="30" height="9" rx="3" fill="${K}"/><rect x="86" y="30" width="10" height="10" fill="${DG}"/><rect x="96" y="33" width="22" height="4" rx="2" fill="${G}"/><path d="M26 22q-14 2-14 20t14 18h14V48H30z" fill="none" stroke="${K}" stroke-width="9" stroke-linejoin="round"/></svg>`,
  inverter:`<svg viewBox="0 0 120 80"><path d="M40 20c0-9 36-9 36 0" fill="none" stroke="${Y}" stroke-width="4" stroke-linecap="round"/><rect x="18" y="20" width="74" height="46" rx="8" fill="${DG}"/><rect x="18" y="20" width="74" height="11" rx="6" fill="${Y}"/><circle cx="40" cy="49" r="10" fill="${K}"/><circle cx="40" cy="49" r="3" fill="${Y}"/><rect x="58" y="40" width="26" height="12" rx="3" fill="${K}"/><path d="M92 54c12 0 14 14 4 14" fill="none" stroke="${G}" stroke-width="4"/></svg>`,
  sander:`<svg viewBox="0 0 120 80"><rect x="20" y="56" width="80" height="12" rx="4" fill="${DG}"/><rect x="24" y="62" width="72" height="6" fill="${G}"/><path d="M28 56c0-26 13-38 32-38s32 12 32 38z" fill="${Y}"/><circle cx="60" cy="34" r="9" fill="${K}"/></svg>`,
  mototool:`<svg viewBox="0 0 120 80"><rect x="24" y="30" width="58" height="20" rx="10" fill="${Y}"/><rect x="38" y="30" width="22" height="20" rx="6" fill="${K}"/><rect x="82" y="34" width="14" height="12" fill="${DG}"/><rect x="96" y="38" width="18" height="4" rx="2" fill="${G}"/></svg>`,
  motor:`<svg viewBox="0 0 120 80"><rect x="22" y="56" width="62" height="8" rx="2" fill="${K}"/><rect x="24" y="20" width="60" height="38" rx="8" fill="${DG}"/><g fill="${Y}"><rect x="34" y="20" width="5" height="38"/><rect x="46" y="20" width="5" height="38"/><rect x="58" y="20" width="5" height="38"/><rect x="70" y="20" width="5" height="38"/></g><rect x="84" y="26" width="10" height="26" rx="3" fill="${K}"/><rect x="94" y="36" width="20" height="6" rx="2" fill="${G}"/></svg>`,
  wire:`<svg viewBox="0 0 120 80"><rect x="28" y="12" width="10" height="56" rx="3" fill="${Y}"/><rect x="82" y="12" width="10" height="56" rx="3" fill="${Y}"/><rect x="38" y="20" width="44" height="40" fill="#C8793A"/><g stroke="#7c461b" stroke-width="2"><path d="M38 28h44M38 36h44M38 44h44M38 52h44"/></g></svg>`,
  safety:`<svg viewBox="0 0 120 80"><path d="M20 56a40 38 0 0 1 80 0z" fill="${Y}"/><rect x="54" y="14" width="12" height="42" fill="${K}"/><rect x="12" y="56" width="96" height="9" rx="4" fill="${K}"/></svg>`,
  gear:`<svg viewBox="0 0 120 80"><g fill="${Y}" transform="translate(60 40)"><rect x="-7" y="-32" width="14" height="14" rx="2"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(45)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(90)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(135)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(180)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(225)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(270)"/><rect x="-7" y="-32" width="14" height="14" rx="2" transform="rotate(315)"/><circle r="23"/></g><circle cx="60" cy="40" r="10" fill="${K}"/></svg>`,
  tools:`<svg viewBox="0 0 120 80"><rect x="16" y="32" width="88" height="38" rx="6" fill="${Y}"/><rect x="44" y="18" width="32" height="16" rx="5" fill="none" stroke="${G}" stroke-width="5"/><rect x="16" y="48" width="88" height="6" fill="${K}"/></svg>`
};

/* =========================================================================
   3. DATOS DEL NEGOCIO
   ========================================================================= */
const CATEGORIAS = [
  {id:"taladro-inal",ico:"drill",es:"Taladros inalámbricos",en:"Cordless drills",tags:"taladro atornillador perforar madera metal pared bateria 20v 12v"},
  {id:"taladro-alam",ico:"drill",es:"Taladros alámbricos",en:"Corded drills",tags:"taladro cable electrico percutor concreto"},
  {id:"amoladora",ico:"grinder",es:"Amoladoras y pulidoras",en:"Grinders",tags:"amoladora pulidora esmeriladora cortar metal baldosa ceramica desbastar"},
  {id:"sierra",ico:"saw",es:"Sierras",en:"Saws",tags:"sierra circular caladora madera tablas carpinteria cortar"},
  {id:"martillo",ico:"hammer",es:"Martillos y rotomartillos",en:"Rotary hammers",tags:"rotomartillo demoledor martillo concreto cemento picar romper sds"},
  {id:"inversor",ico:"inverter",es:"Inversores soldadores",en:"Welding inverters",tags:"inversor soldador soldadora soldadura electrodo arco 6011 6013 7018"},
  {id:"alambre",ico:"wire",es:"Alambre esmaltado",en:"Enameled wire",tags:"alambre cobre esmaltado embobinado bobinar awg motor transformador"},
  {id:"repuestos",ico:"gear",es:"Repuestos y taller",en:"Spare parts",tags:"repuesto inducido campo estator mandril carbones rodamiento mantenimiento arreglo"},
  {id:"lijadora",ico:"sander",es:"Lijadoras",en:"Sanders",tags:"lijadora lijar madera pintura acabado orbital banda"},
  {id:"mototool",ico:"mototool",es:"Mototool",en:"Rotary tools",tags:"mototool grabar pulir cortar detalle dremel"},
  {id:"motor",ico:"motor",es:"Motores eléctricos",en:"Electric motors",tags:"motor electrico bomba ventilador monofasico trifasico"},
  {id:"seguridad",ico:"safety",es:"Equipo de seguridad",en:"Safety gear",tags:"seguridad guantes casco gafas careta mascarilla epp"}
];

const PRODUCTOS = [
  {s:"DCD806D2-B3",c:"taladro-inal",ico:"drill",es:"Kit taladro/percutor 1/2\" 20V MAX* XR sin carbones",en:"1/2\" 20V MAX* XR brushless hammer drill kit",spec:{es:"20V MAX* XR · Brushless · 1/2\"",en:"20V MAX* XR · Brushless · 1/2\""},type:"cordless",u:"https://www.dewalt.com.co/es-co/producto/dcd806d2-b3/kit-de-taladro-atornilladorpercutor-12-13mm-sin-carbones-20v-max-xr",tags:"profesional obra concreto madera metal atornillar 20v xr brushless"},
  {s:"DCD706F2-B3",c:"taladro-inal",ico:"drill",es:"Kit taladro percutor/atornillador 3/8\" 12V MAX*",en:"3/8\" 12V MAX* hammer drill kit",spec:{es:"12V MAX* · Compacto · Percutor",en:"12V MAX* · Compact · Hammer"},type:"cordless",u:"https://www.dewalt.com.co/es-co/producto/dcd706f2-b3/kit-de-taladro-percutoratornillador-inalambrico-de-38-10mm-12v-max",tags:"liviano compacto acabados drywall ladrillo hogar 12v"},
  {s:"DCD701F2-B3",c:"taladro-inal",ico:"drill",es:"Kit taladro/atornillador 3/8\" inalámbrico 12V MAX*",en:"3/8\" 12V MAX* cordless drill kit",spec:{es:"12V MAX* · Liviano · Hogar/Muebles",en:"12V MAX* · Light · Home"},type:"cordless",u:"https://www.dewalt.com.co/es-co/producto/dcd701f2-b3/kit-de-taladroatornillador-de-38-10mm-inalambrico-12v-max",tags:"muebles atornillar madera hogar liviano 12v"},
  {s:"DWE4577-B3",c:"amoladora",ico:"grinder",es:"Esmeriladora angular 7\" (180mm) 2700W",en:"7\" (180mm) 2700W angle grinder",spec:{es:"2700 W · Disco 7\" · Trabajo pesado",en:"2700 W · 7\" Disc · Heavy duty"},type:"corded",u:"https://www.dewalt.com.co/es-co/producto/dwe4577-b3/esmeriladora-angular-7-180mm-2700w",tags:"pulidora grande concreto metal cortar desbastar 2700w 180mm"},
  {s:"DWE4314-B3",c:"amoladora",ico:"grinder",es:"Esmeriladora angular 4-1/2\"–5\" 1500W",en:"4-1/2\"–5\" 1500W angle grinder",spec:{es:"1500 W · 4-1/2\" a 5\" · Taller",en:"1500 W · 4-1/2\"–5\" · Workshop"},type:"corded",u:"https://www.dewalt.com.co/es-co/producto/dwe4314-b3/esmeriladora-angular-de-4-12-115mm-5-125mm-1500w",tags:"pulidora baldosa ceramica metal cortar pulir 1500w 115mm 125mm"},
  {s:"DWE575K-B3",c:"sierra",ico:"saw",es:"Kit sierra circular 7-1/4\" (185mm) 1800W",en:"7-1/4\" (185mm) 1800W circular saw kit",spec:{es:"1800 W · Hoja 7-1/4\" · Con cable",en:"1800 W · 7-1/4\" Blade · Corded"},type:"corded",u:"https://www.dewalt.com.co/es-co/producto/dwe575k-b3/kit-de-sierra-circular-electrica-de-7-14-185mm-de-1800w",tags:"cortar madera tabla triplex carpinteria techo 1800w 185mm"},
  {s:"D25481K-B3",c:"martillo",ico:"hammer",es:"Kit rotomartillo combinado SDS MAX 1-9/16\" 6.1J",en:"SDS MAX 1-9/16\" 6.1J rotary hammer kit",spec:{es:"SDS MAX · 6.1 J · Concreto",en:"SDS MAX · 6.1 J · Concrete"},type:"corded",u:"https://www.dewalt.com.co/es-co/producto/d25481k-b3/kit-de-rotomartillo-combinado-sds-max-de-1-916-40mm-de-61j",tags:"perforar concreto cemento cincel picar sds max obra"},
  {s:"D25960K-B3",c:"martillo",ico:"hammer",es:"Kit martillo demoledor hexagonal 1-1/8\" 40 lb",en:"1-1/8\" hex 40 lb demolition hammer kit",spec:{es:"Hex 1-1/8\" · 40 lb · Demolición",en:"Hex 1-1/8\" · 40 lb · Demolition"},type:"corded",u:"https://www.dewalt.com.co/es-co/producto/d25960k-b3/kit-de-martillo-demoledor-hexagonal-en-linea-de-1-18-de-40-lbs",tags:"demoler picar romper piso losa concreto pesado hexagonal"}
];

const INVENTARIO = {};
const CASOS_DEMO = [{caso:"DEMO-001",estado:"En reparación",actualizado:"2026-11-26",nota:"Cambio de escobillas y mantenimiento preventivo en curso."}];
let CASOS = CASOS_DEMO.slice();

const KITS = [
  {id:"hogar",es:"Kit básico del hogar",en:"Basic home kit",d_es:"Arreglos, muebles e instalación de estantes.",d_en:"Home repairs, furniture and shelves.",items:["DCD701F2-B3"],extra:{es:"+ Martillo, lijadora y gafas",en:"+ Hammer, sander & glasses"}},
  {id:"obra",es:"Kit para obra pesada",en:"Job-site heavy kit",d_es:"Perforar concreto, cortar y desbastar a diario.",d_en:"Concrete drilling, cutting and grinding.",items:["D25481K-B3","DWE4314-B3","DCD806D2-B3"],extra:{es:"+ Equipo de seguridad",en:"+ Safety equipment"}},
  {id:"solda",es:"Kit de soldadura y metal",en:"Welding & metal kit",d_es:"Soldadura con electrodo + limpieza de cordón.",d_en:"Stick welding + weld prep & grinding.",items:["DWE4314-B3"],extra:{es:"+ Inversor soldador, careta y guantes",en:"+ Welding inverter, helmet & gloves"}}
];

const REPUESTOS = {
  tools:[
    {id:"taladro",es:"Taladro",en:"Drill",parts:["mandril","inducido","campo","carbones","rodamientos","interruptor","engranajes","cable"]},
    {id:"rotomartillo",es:"Rotomartillo",en:"Rotary hammer",parts:["inducido","campo","mandril","carbones","rodamientos","percusion","interruptor","engranajes"]},
    {id:"demoledor",es:"Demoledor",en:"Demolition hammer",parts:["inducido","campo","carbones","rodamientos","percusion","interruptor","cable"]},
    {id:"sierra",es:"Sierra",en:"Saw",parts:["inducido","campo","carbones","rodamientos","interruptor","engranajes","guarda"]},
    {id:"pulidora",es:"Pulidora / Amoladora",en:"Grinder",parts:["inducido","campo","carbones","rodamientos","interruptor","engranajes","guarda"]}
  ],
  parts:{
    inducido:{es:"Inducido (Armadura)",en:"Armature",s_es:"Olor a quemado, chispas fuertes o sin fuerza.",s_en:"Burning smell, heavy sparks or power loss."},
    campo:{es:"Campo (Estator)",en:"Field (Stator)",s_es:"Sobrecalentamiento o dispara el breaker.",s_en:"Overheating or trips breaker."},
    mandril:{es:"Mandril / Portabrocas",en:"Chuck",s_es:"La broca patina, baila o no aprieta.",s_en:"Bit slips, wobbles or won't tighten."},
    carbones:{es:"Carbones (Escobillas)",en:"Carbon brushes",s_es:"Chispas y encendido intermitente.",s_en:"Sparking and intermittent start."},
    rodamientos:{es:"Rodamientos (Baleros)",en:"Bearings",s_es:"Ruido fuerte, vibración o eje trabado.",s_en:"Loud noise, vibration or seized shaft."},
    interruptor:{es:"Interruptor / Gatillo",en:"Switch / Trigger",s_es:"No enciende o no regula velocidad.",s_en:"Won't start or no speed control."},
    engranajes:{es:"Engranajes / Piñones",en:"Gears / Pinions",s_es:"Ruido metálico; gira el motor pero no la punta.",s_en:"Grinding noise; motor runs without drive."},
    percusion:{es:"Sistema de percusión",en:"Hammer mechanism",s_es:"Gira bien pero no golpea o golpea débil.",s_en:"Spins fine but weak/no hammering."},
    cable:{es:"Cable de poder",en:"Power cord",s_es:"Cortado, pelado o hace falso contacto.",s_en:"Cut, frayed or loose contact."},
    guarda:{es:"Guarda protectora",en:"Safety guard",s_es:"Rota, floja o faltante.",s_en:"Broken, loose or missing."}
  }
};

const ELECTRODOS = [
  {mm:1.6,in:"1/16",min:30,max:50},{mm:2.0,in:"5/64",min:40,max:75},
  {mm:2.5,in:"3/32",min:60,max:100},{mm:3.2,in:"1/8",min:90,max:140},
  {mm:4.0,in:"5/32",min:120,max:190},{mm:5.0,in:"3/16",min:160,max:250}
];
const WELD_SIZES = [120,140,160,200,250,315];

const AWG = [];
for(let n=36;n>=6;n--){
  const d = 0.127 * Math.pow(92,(36-n)/39);
  const a = Math.PI/4 * d * d;
  AWG.push({n, d, a, r:17.24/a, i:a*3});
}

const USOS = [
  {t_es:"Perforar madera o metal",t_en:"Drill wood or metal",h_es:"Taladro inalámbrico o alámbrico",h_en:"Cordless or corded drill",c:"taladro-inal"},
  {t_es:"Perforar o picar concreto",t_en:"Drill or chip concrete",h_es:"Rotomartillo SDS / Demoledor",h_en:"SDS Rotary / Demolition hammer",c:"martillo"},
  {t_es:"Cortar baldosa o pulir metal",t_en:"Cut tile or grind metal",h_es:"Amoladora / Pulidora 4-1/2\" o 7\"",h_en:"Angle grinder 4-1/2\" or 7\"",c:"amoladora"},
  {t_es:"Cortar tablas y triplex",t_en:"Cut boards & plywood",h_es:"Sierra circular 7-1/4\"",h_en:"7-1/4\" Circular saw",c:"sierra"},
  {t_es:"Soldar con electrodo",t_en:"Stick welding",h_es:"Inversor soldador",h_en:"Welding inverter",c:"inversor"},
  {t_es:"Embobinar motor o transformador",t_en:"Wind motor or transformer",h_es:"Alambre de cobre esmaltado AWG",h_en:"Enameled copper wire AWG",c:"alambre"},
  {t_es:"Cambiar inducido, campo o mandril",t_en:"Replace armature, field or chuck",h_es:"Repuestos y taller técnico",h_en:"Spare parts & repair shop",c:"repuestos"}
];

const I18N = {
  es:{
    brand_sub:"Servicio autorizado · Garantía y repuestos",
    nav_home:"Inicio",nav_cat:"Catálogo",nav_rep:"Repuestos",nav_war:"Garantías",nav_tools:"Calculadoras",nav_con:"Contacto",
    hero_badge:"Servicio autorizado DEWALT · Garantía y repuestos",
    hero_title:"Potencia real y respaldo <span>en Popayán</span>",
    hero_lead:"Herramienta eléctrica DEWALT, inversores soldadores, alambre de cobre esmaltado y repuestos originales. Somos servicio autorizado en garantía y repuestos, con asesoría directa sin intermediarios.",
    cta_wa:"Cotizar por WhatsApp",cta_cat:"Ver Catálogo",
    hero_box_t:"Respaldo Local Directo",
    hero_box_d:"Si tu herramienta DEWALT falla, no tienes que enviarla a otra ciudad. La recibimos y gestionamos aquí mismo.",
    quick_t:"¿Qué necesitas hoy?",
    q_cat_t:"Catálogo",q_cat_d:"Busca por texto, voz o foto de la placa",
    q_rep_t:"Repuestos y Taller",q_rep_d:"Inducidos, campos, mandriles, carbones y arreglos",
    q_war_t:"Garantía DEWALT",q_war_d:"Requisitos, radicación y consulta de estado",
    q_calc_t:"Calculadoras",q_calc_d:"Amperaje de soldadura y calibres AWG 36–6",
    home_cats_t:"Lo que manejamos",home_cats_d:"Toca una categoría para filtrar el catálogo o preguntar disponibilidad.",
    kits_t:"Kits recomendados",kits_d:"Armados para empezar tu proyecto sin olvidar nada. Cotízalos en un toque.",
    cat_title:"Catálogo inteligente",cat_sub:"Busca por modelo (ej. DWE4577), por tarea o toma una foto a la etiqueta con el botón de cámara.",
    search_ph:"¿Qué buscas? Ej: cortar baldosa, DWE4577…",
    lens_t:"Búsqueda por foto (Local)",
    lens_loading:"Descargando lector de texto (solo la 1ª vez)…",
    lens_reading:"Leyendo etiqueta de la foto…",
    lens_found:"¡Coincidencias encontradas en el catálogo!",
    lens_none:"No reconocimos una referencia en línea. Prueba acercando más la placa o envíanos la foto por WhatsApp.",
    lens_err:"No pudimos leer esa imagen. Revisa tu conexión o escribe la referencia arriba.",
    lens_retry:"Otra foto",lens_ask:"Enviar consulta",lens_raw:"Ver texto detectado",lens_clear:"Ver todo el catálogo",
    lens_priv:"Versión BETA: enfoca bien la placa o caja de la herramienta. La foto se analiza en tu dispositivo y no se guarda.",
    ideas:["Perforar concreto","Cortar baldosa","Atornillar","Cortar madera","Demoler piso","Alambre AWG"],
    f_all:"Todas",add_q:"Agregar",added:"En lista <svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='m5 12.5 4.5 4.5L19 7.5'/></svg>",ask_price:"Consultar precio",stock_in:"Disponible",stock_out:"Agotado",stock_ask:"Confirmar stock",
    rep_title:"Repuestos y Servicio Técnico",rep_sub:"Elige tu herramienta, marca las piezas que fallan y envía tu solicitud directa por WhatsApp.",
    rep_form_t:"Solicitar repuesto o reparación",rep_types:["Repuesto","Mantenimiento preventivo","Reparación / arreglo"],
    gar_t:"<svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='8' width='18' height='12' rx='2'/><path d='M9 8V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2M3 13h18M11 13v2h2v-2'/></svg>Mis herramientas guardadas",gar_d:"Guarda marca y modelo en tu celular para llenar formularios en un toque.",gar_save:"Guardar esta herramienta",gar_empty:"Ninguna guardada aún.",
    f_name:"Nombre completo *",f_phone:"Teléfono / WhatsApp *",f_wa:"Enviar por WhatsApp",f_mail:"Enviar por correo",
    rep_f_type:"¿Qué necesitas?",rep_f_tool:"Herramienta",rep_f_brand:"Marca",rep_f_model:"Modelo / Referencia",rep_f_parts:"Repuestos marcados",rep_f_issue:"Describe la falla o síntoma",
    war_title:"Garantía Autorizada DEWALT",war_sub:"Recibimos tu equipo en Popayán, verificamos cobertura y gestionamos diagnóstico o reparación.",
    war_bring:"Qué debes traer",
    war_steps:["Trae tu herramienta a Calle 4 #21C-14, Popayán.","La revisamos y verificamos si aplica garantía DEWALT.","Gestionamos diagnóstico o reparación con repuestos originales.","Te avisamos por WhatsApp cuando esté lista para recoger."],
    war_reqs:["Factura o comprobante de compra","La herramienta con sus accesorios","Etiqueta legible con modelo y serie","Tu nombre y número de WhatsApp"],
    trk_t:"Consultar estado de tu caso",trk_d:"Ingresa el número de orden entregado en el mostrador (prueba con DEMO-001).",trk_go:"Ver",
    trk_states:["Recibida","Revisión","Taller","Lista","Entregada"],trk_none:"No encontramos ese número de caso. Revisa el código o escríbenos por WhatsApp.",trk_ready:"¡Tu herramienta está lista! Puedes pasar a recogerla.",
    wf_t:"Pre-radicar garantía",wf_model:"Modelo DEWALT *",wf_serial:"Número de serie (opcional)",wf_date:"Fecha preferida de visita",wf_slot:"Jornada",wf_issue:"¿Qué falla presenta? *",
    slots:["Cualquiera","Mañana (8:00 a 12:00)","Tarde (2:00 a 5:30)"],
    faq_t:"Preguntas frecuentes",
    faqs:[
      {q:"¿Cómo sé si mi herramienta DEWALT tiene garantía?",a:"Depende de la fecha de compra y las condiciones de fábrica. Tráela con la factura y la revisamos sin compromiso."},
      {q:"¿También arreglan herramientas fuera de garantía o de otras marcas?",a:"Sí, ofrecemos mantenimiento y reparación. Escríbenos la marca y el modelo por WhatsApp para confirmar repuestos."},
      {q:"¿Cuál es el horario de atención?",a:"Lunes a viernes de 8:00 a. m. a 12:00 m. y de 2:00 a 5:30 p. m. Sábados de 8:00 a. m. a 1:00 p. m."}
    ],
    weld_t:"Calculadora: Inversor Soldador",weld_d:"Elige el diámetro del electrodo y el voltaje para saber el amperaje y el consumo estimado.",
    weld_elec:"Diámetro del electrodo",weld_volt:"Voltaje disponible",w_k1:"Amperaje típico",w_k2:"Inversor mín.",w_k3:"Consumo aprox.",
    w_warn110:"A 110 V este consumo supera un tomacorriente común (15–20 A): usa 220 V.",
    w_note:"Valores orientativos para electrodo revestido (~85 % eficiencia). Confirma el rango en la caja del electrodo y verifica protecciones con un electricista.",
    w_cta:"Cotizar inversor adecuado",
    wire_t:"Alambre de Cobre Esmaltado (AWG 36–6)",wire_d:"Ingresa la corriente del bobinado (A) para sugerir el calibre a 3 A/mm² de referencia.",wire_amps:"Corriente del bobinado (Amperios)",
    uses_t:"Guía rápida: ¿Qué herramienta usar?",
    con_t:"Visítanos en Popayán",con_d:"Atención en mostrador, ventas, repuestos y recepción de garantías DEWALT.",
    call:"Llamar",dir:"Cómo llegar",cf_t:"Escríbenos directamente",cf_topic:"Tema",cf_msg:"Mensaje *",
    topics:["Cotización de herramienta","Repuestos / reparación","Inversores soldadores","Alambre esmaltado","Garantía DEWALT","Otro"],
    q_title:"Mi lista de cotización",q_empty:"Aún no has agregado productos del catálogo.",q_send:"Cotizar por WhatsApp",q_print:"PDF / Imprimir",q_clear:"Vaciar",
    cmp_title:"Comparador",cmp_clear:"Limpiar comparador",
    open_now:"Abierto ahora",closed_now:"Cerrado ahora",closes:"cierra",opens:"abre",
    legal:"Proeléctricos es centro de servicio autorizado DEWALT en Popayán. DEWALT y sus logotipos son marcas registradas de sus respectivos propietarios."
  },
  en:{
    brand_sub:"Authorized service · Warranty & parts",
    nav_home:"Home",nav_cat:"Catalog",nav_rep:"Parts",nav_war:"Warranty",nav_tools:"Calculators",nav_con:"Contact",
    hero_badge:"DEWALT authorized service · Warranty & spare parts",
    hero_title:"Real power & local support <span>in Popayán</span>",
    hero_lead:"DEWALT power tools, welding inverters, enameled copper wire and genuine spare parts. We are an authorized service center for warranty and spare parts, with direct advice and no middlemen.",
    cta_wa:"Quote on WhatsApp",cta_cat:"Browse Catalog",
    hero_box_t:"Direct Local Support",
    hero_box_d:"If your DEWALT tool fails, no need to ship it out of town. We receive and handle it right here.",
    quick_t:"What do you need today?",
    q_cat_t:"Catalog",q_cat_d:"Search by text, voice or nameplate photo",
    q_rep_t:"Parts & Repair",q_rep_d:"Armatures, fields, chucks, brushes & service",
    q_war_t:"DEWALT Warranty",q_war_d:"Requirements, submission & case tracking",
    q_calc_t:"Calculators",q_calc_d:"Welding amperage & AWG 36–6 copper wire",
    home_cats_t:"What we carry",home_cats_d:"Tap a category to filter the catalog or ask availability.",
    kits_t:"Recommended Kits",kits_d:"Put together to start your project right away. Request a quote in one tap.",
    cat_title:"Smart Catalog",cat_sub:"Search by model (e.g. DWE4577), by job, or snap the label with the camera button.",
    search_ph:"What do you need? E.g. cut tile, DWE4577…",
    lens_t:"Photo Search (Local)",
    lens_loading:"Loading text reader (first time only)…",
    lens_reading:"Reading label from photo…",
    lens_found:"Matches found in our catalog!",
    lens_none:"No online model recognized. Try a closer shot of the nameplate or message us on WhatsApp.",
    lens_err:"Couldn't read that image. Check your connection or type the model above.",
    lens_retry:"Try another",lens_ask:"Ask on WhatsApp",lens_raw:"View detected text",lens_clear:"Show full catalog",
    lens_priv:"BETA: focus clearly on the tool nameplate or box. Processed locally on your device, never stored.",
    ideas:["Drill concrete","Cut tile","Drive screws","Cut wood","Demolish floor","AWG wire"],
    f_all:"All",add_q:"Add",added:"Added <svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='m5 12.5 4.5 4.5L19 7.5'/></svg>",ask_price:"Ask price",stock_in:"In stock",stock_out:"Out of stock",stock_ask:"Confirm stock",
    rep_title:"Spare Parts & Service",rep_sub:"Pick your tool, select worn parts and send your request directly via WhatsApp.",
    rep_form_t:"Request part or repair",rep_types:["Spare part","Preventive maintenance","Repair"],
    gar_t:"<svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='8' width='18' height='12' rx='2'/><path d='M9 8V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2M3 13h18M11 13v2h2v-2'/></svg>My saved tools",gar_d:"Save brand and model on your phone to autofill forms in one tap.",gar_save:"Save this tool",gar_empty:"No tools saved yet.",
    f_name:"Full name *",f_phone:"Phone / WhatsApp *",f_wa:"Send via WhatsApp",f_mail:"Send by email",
    rep_f_type:"What do you need?",rep_f_tool:"Tool",rep_f_brand:"Brand",rep_f_model:"Model",rep_f_parts:"Selected parts",rep_f_issue:"Describe the fault or symptom",
    war_title:"DEWALT Authorized Warranty",war_sub:"We receive your tool in Popayán, verify coverage and handle diagnosis or repair.",
    war_bring:"What to bring",
    war_steps:["Bring your tool to Calle 4 #21C-14, Popayán.","We inspect it and verify DEWALT warranty coverage.","We handle diagnosis or repair with genuine parts.","We notify you on WhatsApp when it's ready."],
    war_reqs:["Invoice or proof of purchase","Tool with its accessories","Readable model & serial label","Your name and WhatsApp number"],
    trk_t:"Track your warranty case",trk_d:"Enter the case number given at the counter (try DEMO-001).",trk_go:"Check",
    trk_states:["Received","Review","Workshop","Ready","Delivered"],trk_none:"Case not found. Double-check the code or message us on WhatsApp.",trk_ready:"Your tool is ready for pickup!",
    wf_t:"Pre-submit warranty",wf_model:"DEWALT Model *",wf_serial:"Serial number (optional)",wf_date:"Preferred visit date",wf_slot:"Time slot",wf_issue:"What is the issue? *",
    slots:["Any","Morning (8:00 AM – 12:00 PM)","Afternoon (2:00 – 5:30 PM)"],
    faq_t:"Frequently Asked Questions",
    faqs:[
      {q:"How do I know if my DEWALT tool is under warranty?",a:"It depends on purchase date and factory terms. Bring it with the invoice and we'll check it."},
      {q:"Do you repair out-of-warranty tools or other brands?",a:"Yes, we offer maintenance and repairs. Message us the brand and model on WhatsApp to confirm parts."},
      {q:"What are your business hours?",a:"Mon–Fri 8:00 AM–12:00 PM & 2:00–5:30 PM. Saturday 8:00 AM–1:00 PM."}
    ],
    weld_t:"Calculator: Welding Inverter",weld_d:"Pick electrode diameter and voltage to estimate amperage and input draw.",
    weld_elec:"Electrode diameter",weld_volt:"Supply voltage",w_k1:"Typical Amps",w_k2:"Min. Inverter",w_k3:"Approx. Draw",
    w_warn110:"At 110 V this exceeds a standard outlet (15–20 A): use 220 V.",
    w_note:"Reference values for coated electrodes (~85% efficiency). Check electrode box and verify electrical circuit.",
    w_cta:"Quote suitable inverter",
    wire_t:"Enameled Copper Wire (AWG 36–6)",wire_d:"Enter winding current (A) for a 3 A/mm² reference gauge suggestion.",wire_amps:"Winding current (Amps)",
    uses_t:"Quick Guide: Which tool to use?",
    con_t:"Visit us in Popayán",con_d:"Counter sales, spare parts and DEWALT warranty reception.",
    call:"Call",dir:"Directions",cf_t:"Write to us directly",cf_topic:"Topic",cf_msg:"Message *",
    topics:["Tool quote","Spare parts / repair","Welding inverters","Enameled wire","DEWALT warranty","Other"],
    q_title:"My quote list",q_empty:"No products added yet.",q_send:"Send on WhatsApp",q_print:"PDF / Print",q_clear:"Clear",
    cmp_title:"Compare Tools",cmp_clear:"Clear comparison",
    open_now:"Open now",closed_now:"Closed now",closes:"closes",opens:"opens",
    legal:"Proeléctricos is an authorized DEWALT service center in Popayán. DEWALT and its logos are trademarks of their respective owners."
  }
};

/* =========================================================================
   4. ESTADO, UTILIDADES Y MOTOR OCR LOCAL (BETA)
   ========================================================================= */
const $ = id => document.getElementById(id);
const norm = s => String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const esc = s => String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fold = s => String(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/O/g,"0").replace(/[IL]/g,"1");
let lang = localStorage.getItem("pe_lang") === "en" ? "en" : "es";
const T = () => I18N[lang];
const waUrl = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || (lang==="es"?"Hola Proeléctricos, necesito información":"Hello Proeléctricos, I need info"))}`;
const money = v => new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(v);

let state = {
  view: "inicio",
  cat: "all",
  q: "",
  lensSkus: null,
  quote: JSON.parse(localStorage.getItem("pe_quote") || "{}"),
  cmp: [],
  repTool: "taladro",
  repParts: {},
  weldIdx: 3,
  garage: JSON.parse(localStorage.getItem("pe_garage") || "[]")
};

function saveQuote(){ try{localStorage.setItem("pe_quote",JSON.stringify(state.quote))}catch(_){} }
function saveGarage(){ try{localStorage.setItem("pe_garage",JSON.stringify(state.garage))}catch(_){} }

function lev1(a,b){
  if(Math.abs(a.length-b.length)>1) return false;
  let i=0,j=0,d=0;
  while(i<a.length&&j<b.length){
    if(a[i]===b[j]){i++;j++;continue}
    if(++d>1) return false;
    if(a.length>b.length) i++; else if(a.length<b.length) j++; else {i++;j++}
  }
  return d+(a.length-i)+(b.length-j)<=1;
}

function matchSkus(text){
  const t = fold(text), out = [];
  if(t.length < 3) return out;
  PRODUCTOS.forEach(p=>{
    const full = fold(p.s), base = fold(p.s.split("-")[0]);
    let sc = 0;
    if(t.includes(full)) sc = 10;
    else if(t.includes(base)) sc = 8;
    else if(base.length >= 5){
      for(const L of [base.length, base.length-1, base.length+1]){
        for(let i=0; i+L<=t.length && !sc; i++){
          if(lev1(t.slice(i,i+L), base)) sc = 6;
        }
        if(sc) break;
      }
    }
    if(sc) out.push({p, sc});
  });
  return out.sort((a,b)=>b.sc-a.sc).map(x=>x.p);
}

function searchProducts(query){
  const skuHits = matchSkus(query);
  const toks = norm(query).split(/\s+/).filter(w => w.length > 1);
  if(!toks.length && !skuHits.length) return PRODUCTOS;
  const map = new Map();
  skuHits.forEach((p,i)=> map.set(p.s, {p, score: 20 - i}));
  PRODUCTOS.forEach(p=>{
    const cat = CATEGORIAS.find(c=>c.id===p.c);
    const hay = norm(`${p.s} ${p.es} ${p.en} ${p.tags} ${cat?cat.es+" "+cat.en+" "+cat.tags:""}`);
    let score = map.has(p.s) ? map.get(p.s).score : 0;
    if(hay.includes(norm(query))) score += 10;
    toks.forEach(tk => {
      if(hay.includes(tk)) score += 3;
      else if(tk.length>4 && hay.includes(tk.slice(0,4))) score += 1.5;
    });
    if(score > 0) map.set(p.s, {p, score});
  });
  return [...map.values()].sort((a,b)=>b.score-a.score).map(x=>x.p);
}

function loadTesseract(){
  return new Promise((ok,ko)=>{
    if(window.Tesseract) return ok();
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
    s.onload = ok;
    s.onerror = () => ko(new Error("ocr-load"));
    document.head.appendChild(s);
  });
}

async function runImageOCR(file){
  const t = T();
  $("lensBox").hidden = false;
  $("lensScan").hidden = false;
  $("lensActions").hidden = true;
  $("lensDet").hidden = true;
  $("lensProg").hidden = true;
  $("lensStatus").textContent = t.lens_reading;

  const url = URL.createObjectURL(file);
  try{
    const img = await new Promise((ok,ko)=>{
      const el = new Image();
      el.onload = () => ok(el);
      el.onerror = ko;
      el.src = url;
    });
    const max = 1400;
    const scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = $("lensCanvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    const ctx = canvas.getContext("2d");
    try{ ctx.filter = "grayscale(1) contrast(1.35)"; }catch(_){}
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    let detected = "";
    if("TextDetector" in window){
      try{
        const blocks = await new TextDetector().detect(canvas);
        detected = blocks.map(b => b.rawValue).join(" ").trim();
      }catch(_){}
    }
    if(!detected){
      $("lensStatus").textContent = t.lens_loading;
      await loadTesseract();
      $("lensProg").hidden = false;
      $("lensProg").value = 0;
      const res = await Tesseract.recognize(canvas, "eng", {
        logger: m => {
          if(m.status === "recognizing text"){
            $("lensStatus").textContent = t.lens_reading;
            $("lensProg").value = m.progress || 0;
          }
        }
      });
      detected = (res.data && res.data.text ? res.data.text : "").trim();
    }

    $("lensRaw").textContent = detected || "—";
    $("lensDet").hidden = false;

    let matches = matchSkus(detected);
    if(!matches.length){
      const cleanWords = detected.replace(/[^A-Za-z0-9ÁÉÍÓÚáéíóúñÑ ]/g, " ").replace(/\s+/g, " ").trim();
      if(cleanWords.length >= 4){
        matches = searchProducts(cleanWords).slice(0, 3);
      }
    }

    if(matches.length){
      state.lensSkus = matches.map(p => p.s);
      state.cat = "all";
      state.q = "";
      $("searchInput").value = "";
      $("lensStatus").textContent = `${t.lens_found} (${matches.length})`;
      $("lensWa").href = waUrl((lang==="es"?"Hola, busqué por foto estas referencias: ":"Hello, I searched by photo for: ") + state.lensSkus.join(", "));
      renderCatalog();
    } else {
      state.lensSkus = null;
      $("lensStatus").textContent = t.lens_none;
      $("lensWa").href = waUrl(lang==="es"?"Hola Proeléctricos, tengo una foto de una herramienta/repuesto y necesito ayuda para identificarla.":"Hello Proeléctricos, I have a photo of a tool/part and need help identifying it.");
      renderCatalog();
    }
    $("lensActions").hidden = false;
  } catch(_){
    state.lensSkus = null;
    $("lensStatus").textContent = t.lens_err;
    $("lensWa").href = waUrl(lang==="es"?"Hola Proeléctricos, quiero enviarles la foto de una herramienta para cotizar.":"Hello Proeléctricos, I want to send a tool photo for a quote.");
    $("lensActions").hidden = false;
  } finally {
    URL.revokeObjectURL(url);
    $("lensScan").hidden = true;
    $("lensProg").hidden = true;
  }
}

/* ===== HORARIO EN VIVO ===== */
function fmtHour(h){
  const hh=Math.floor(h), mm=Math.round((h-hh)*60), h12=((hh+11)%12)+1, p=String(mm).padStart(2,"0");
  return `${h12}:${p} ${hh<12?(lang==="es"?"a. m.":"AM"):(lang==="es"?"p. m.":"PM")}`;
}
function renderStatus(){
  const now = new Date(new Date().toLocaleString("en-US",{timeZone:HORARIO.zona}));
  const ranges = HORARIO.dias[now.getDay()] || [];
  const h = now.getHours() + now.getMinutes()/60;
  const cur = ranges.find(r => h>=r[0] && h<r[1]);
  const next = ranges.find(r => r[0]>h);
  const el = $("liveStatus");
  if(cur){
    el.className = "dot-live";
    el.innerHTML = `<i></i><span>${T().open_now} · ${T().closes} ${fmtHour(cur[1])}</span>`;
  } else {
    el.className = "dot-live off";
    el.innerHTML = `<i></i><span>${T().closed_now}${next ? ` · ${T().opens} ${fmtHour(next[0])}` : ""}</span>`;
  }
}

/* =========================================================================
   5. RENDERIZADO DE VISTAS
   ========================================================================= */
function renderHome(){
  $("homeCats").innerHTML = CATEGORIAS.map(c=>{
    const count = PRODUCTOS.filter(p=>p.c===c.id).length;
    return `<button type="button" class="cat-tile" data-pick-cat="${c.id}">
      <span class="cico">${ICONS[c.ico]||ICONS.tools}</span>
      <strong>${c[lang]}</strong>
      <small>${count ? `${count} ref.` : (lang==="es"?"Consultar":"Ask us")}</small>
    </button>`;
  }).join("");

  $("homeKits").innerHTML = KITS.map(k=>`
    <article class="card" style="background:var(--steel);border-color:#3a3f46;color:#eee">
      <h3 style="font-size:1.5rem;color:var(--y);text-transform:uppercase">${k[lang]}</h3>
      <p style="font-size:.92rem;color:#ccc">${k["d_"+lang]}</p>
      <p style="font:600 .8rem var(--mono);color:#ddd">${k.items.join(" · ")} ${k.extra[lang]}</p>
      <div class="cta-row" style="margin-top:auto">
        <button type="button" class="btn sm" data-add-kit="${k.id}">+ ${T().add_q}</button>
        <a class="btn sm wa" href="${waUrl((lang==="es"?"Hola, quiero cotizar el ":"Hello, quote for ")+k[lang]+": "+k.items.join(", ")+" "+k.extra[lang])}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </article>`).join("");
}

function renderCatalog(){
  const t = T();
  $("searchInput").placeholder = t.search_ph;
  $("ideaChips").innerHTML = t.ideas.map(i=>`<button type="button" class="chip" data-idea="${esc(i)}">${esc(i)}</button>`).join("");
  $("catFilters").innerHTML = [{id:"all",es:t.f_all,en:t.f_all},...CATEGORIAS].map(c=>
    `<button type="button" class="chip" role="tab" aria-selected="${state.cat===c.id}" data-cat="${c.id}">${c[lang]}</button>`
  ).join("");

  let list;
  if(state.lensSkus && state.lensSkus.length){
    list = state.lensSkus.map(s => PRODUCTOS.find(p=>p.s===s)).filter(Boolean);
  } else {
    const ranked = state.q ? searchProducts(state.q) : PRODUCTOS;
    list = ranked.filter(p => state.cat==="all" || p.c===state.cat);
  }

  $("clearLensBtn").hidden = !(state.lensSkus && state.lensSkus.length);
  $("catCount").textContent = state.lensSkus
    ? `${list.length} ${lang==="es"?"coincidencias por foto":"photo matches"}`
    : `${list.length} ${lang==="es"?"referencias en línea":"models online"}`;

  $("openCmpBtn").hidden = state.cmp.length < 2;
  $("cmpLabel").textContent = `${t.cmp_title} (${state.cmp.length})`;

  if(!list.length){
    const curCat = CATEGORIAS.find(c=>c.id===state.cat);
    const label = curCat ? curCat[lang] : state.q;
    $("catalogGrid").innerHTML = `<div class="card" style="grid-column:1/-1;text-align:center;padding:24px">
      <h3 style="font-size:1.5rem;text-transform:uppercase">${esc(label || (lang==="es"?"Sin resultados en línea":"No online matches"))}</h3>
      <p style="color:var(--muted);margin:6px 0 14px">${lang==="es"?"Sí manejamos esta línea en almacén. Pregunta por referencias, precios y disponibilidad directa por WhatsApp.":"We carry this line in store. Ask for models, prices and stock on WhatsApp."}</p>
      <div class="cta-row" style="justify-content:center">
        <a class="btn wa" href="${waUrl((lang==="es"?"Hola, busco información sobre: ":"Hello, I need info about: ")+label)}" target="_blank" rel="noopener"><svg class="bi" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>${t.cta_wa}</a>
        ${state.cat==="alambre"?`<a class="btn dark" href="#herramientas">${lang==="es"?"Ver tabla AWG":"See AWG table"}</a>`:""}
        ${state.cat==="repuestos"?`<a class="btn dark" href="#repuestos">${lang==="es"?"Ir a Repuestos":"Go to Parts"}</a>`:""}
      </div>
    </div>`;
    return;
  }

  $("catalogGrid").innerHTML = list.map((p,idx)=>{
    const inv = INVENTARIO[p.s] || {};
    const price = inv.precio != null ? money(inv.precio) : t.ask_price;
    const stClass = inv.stock == null ? "" : (inv.stock > 0 ? "in" : "out");
    const stTxt = inv.stock == null ? t.stock_ask : (inv.stock > 0 ? t.stock_in : t.stock_out);
    const inQ = !!state.quote[p.s];
    const inC = state.cmp.includes(p.s);
    return `<article class="prod-card">
      ${(state.q || state.lensSkus) && idx===0 ? `<span class="best-tag">${state.lensSkus?"<svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='M4 8h3l1.5-2.5h7L17 8h3v11H4z'/><circle cx='12' cy='13' r='3.5'/></svg>Match":"Top"}</span>`:""}
      <div class="prod-pic">${ICONS[p.ico]||ICONS.drill}</div>
      <span class="sku">${p.s}</span>
      <h3>${p[lang]}</h3>
      <p class="spec-line">${p.spec[lang]}</p>
      <div class="meta-row">
        <span class="price">${price}</span>
        <span class="stock-pill ${stClass}">${stTxt}</span>
      </div>
      <div class="prod-acts">
        <button type="button" class="btn sm" data-add="${p.s}">${inQ ? t.added : "+ "+t.add_q}</button>
        <button type="button" class="icon-btn ${inC?"on":""}" data-cmp="${p.s}" title="${t.cmp_title}"><svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='M12 4v16M7 20h10M5 8h14'/><path d='M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z'/></svg></button>
        <a class="icon-btn" href="${p.u}" target="_blank" rel="noopener" title="DEWALT">↗</a>
      </div>
    </article>`;
  }).join("");
}

function renderRepuestos(){
  const t = T();
  const tool = REPUESTOS.tools.find(x=>x.id===state.repTool) || REPUESTOS.tools[0];
  $("repToolTabs").innerHTML = REPUESTOS.tools.map(x=>
    `<button type="button" class="chip" role="tab" aria-selected="${x.id===tool.id}" data-rtool="${x.id}">${x[lang]}</button>`
  ).join("");
  $("repPartsGrid").innerHTML = tool.parts.map(pid=>{
    const p = REPUESTOS.parts[pid], on = !!state.repParts[pid];
    return `<article class="card" style="border-color:${on?"var(--k)":"var(--line)"};border-left:6px solid ${on?"var(--y)":"#bbb"}">
      <h3 style="font-size:1.3rem;text-transform:uppercase">${p[lang]}</h3>
      <p style="font-size:.88rem;color:var(--muted)">${p["s_"+lang]}</p>
      <button type="button" class="btn sm ${on?"":"ghost"}" data-rpart="${pid}" style="margin-top:auto">${on?(lang==="es"?"Marcado <svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='m5 12.5 4.5 4.5L19 7.5'/></svg>":"Selected <svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='m5 12.5 4.5 4.5L19 7.5'/></svg>"):(lang==="es"?"Lo necesito":"I need it")}</button>
    </article>`;
  }).join("");

  $("rTool").innerHTML = REPUESTOS.tools.map(x=>`<option value="${x.id}">${x[lang]}</option>`).join("");
  $("rTool").value = tool.id;
  $("rType").innerHTML = t.rep_types.map(x=>`<option>${x}</option>`).join("");
  $("rParts").value = tool.parts.filter(id=>state.repParts[id]).map(id=>REPUESTOS.parts[id][lang]).join(", ");
}

function renderGarantias(){
  const t = T();
  $("warSteps").innerHTML = t.war_steps.map((s,i)=>`<li><b>${i+1}.</b> ${s}</li>`).join("");
  $("warReqs").innerHTML = t.war_reqs.map(r=>`<li>${r}</li>`).join("");
  $("wSlot").innerHTML = t.slots.map(s=>`<option>${s}</option>`).join("");
  $("faqList").innerHTML = t.faqs.map(f=>`<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
}

function renderCalcs(){
  const t = T(), e = ELECTRODOS[state.weldIdx] || ELECTRODOS[3], v = +($("wVolt").value || 220);
  const vout = 20 + 0.04 * e.max;
  const iin = (vout * e.max / 0.85) / v;
  const size = WELD_SIZES.find(x=>x>=e.max);

  $("wElec").innerHTML = ELECTRODOS.map((x,i)=>`<option value="${i}">${x.mm} mm (${x.in}")</option>`).join("");
  $("wElec").value = state.weldIdx;
  $("wTable").innerHTML = `<thead><tr><th>${t.weld_elec}</th><th>${t.w_k1}</th></tr></thead><tbody>` +
    ELECTRODOS.map((x,i)=>`<tr class="${i===state.weldIdx?"hl":""}"><td><b>${x.mm} mm (${x.in}")</b></td><td>${x.min}–${x.max} A</td></tr>`).join("") + `</tbody>`;
  $("wAmps").textContent = `${e.min}–${e.max} A`;
  $("wMin").textContent = size ? `≥ ${size} A` : "> 315 A";
  $("wIn").textContent = `≈ ${Math.round(iin)} A`;
  $("wWarn").hidden = !(v === 110 && iin > 16);
  $("waWeld").href = waUrl((lang==="es"?"Hola, necesito asesoría para un inversor soldador para electrodo de ":"Hello, I need welding inverter advice for electrode ")+`${e.mm} mm (${v} V)`);

  $("wireTable").innerHTML = `<thead><tr><th>AWG</th><th>Ø (mm)</th><th>mm²</th><th>Ref. (A)</th><th></th></tr></thead><tbody>` +
    AWG.map(x=>`<tr data-awg="${x.n}"><td><b>${x.n}</b></td><td>${x.d.toFixed(3)}</td><td>${x.a.toFixed(3)}</td><td>${x.i.toFixed(2)} A</td><td><a href="${waUrl((lang==="es"?"Hola, quiero cotizar alambre de cobre esmaltado calibre AWG ":"Hello, quote for enameled copper wire AWG ")+x.n)}" target="_blank" rel="noopener" style="font-weight:700;color:var(--cu)">${lang==="es"?"Cotizar":"Quote"}</a></td></tr>`).join("") + `</tbody>`;
  updateWireCalc();

  $("usesTable").innerHTML = `<thead><tr><th>${lang==="es"?"Trabajo":"Job"}</th><th>${lang==="es"?"Herramienta":"Tool"}</th><th></th></tr></thead><tbody>` +
    USOS.map(u=>`<tr><td>${u["t_"+lang]}</td><td><b>${u["h_"+lang]}</b></td><td><button type="button" class="btn sm ghost" data-pick-cat="${u.c}">${lang==="es"?"Ver":"View"}</button></td></tr>`).join("") + `</tbody>`;
}

function updateWireCalc(){
  const val = parseFloat(String($("wireAmps").value).replace(",","."));
  document.querySelectorAll("#wireTable tr.hl").forEach(r=>r.classList.remove("hl"));
  if(!(val > 0)){ $("wireOut").textContent = ""; return; }
  const hit = AWG.find(x => x.i >= val);
  if(!hit){ $("wireOut").textContent = lang==="es" ? "> 40 A: consúltanos por paralelo" : "> 40 A: ask us"; return; }
  $("wireOut").textContent = `AWG ${hit.n} · Ø ${hit.d.toFixed(3)} mm`;
  const row = document.querySelector(`#wireTable tr[data-awg="${hit.n}"]`);
  if(row){ row.classList.add("hl"); row.scrollIntoView({block:"nearest",behavior:"smooth"}); }
}

function renderContacto(){
  const t = T();
  const realPhone = /^\d{10,15}$/.test(CONFIG.whatsapp) && CONFIG.whatsapp !== "573000000000";
  $("contactInfo").innerHTML = `
    <li><b><svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><path d='M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z'/><circle cx='12' cy='10' r='2.4'/></svg>${lang==="es"?"Dirección":"Address"}</b>${CONFIG.direccion}</li>
    <li><b><svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3.5 2'/></svg>${lang==="es"?"Horario":"Hours"}</b>${lang==="es"?"Lun–Vie: 8:00 a. m. – 12:00 m. y 2:00 – 5:30 p. m. · Sáb: 8:00 a. m. – 1:00 p. m.":"Mon–Fri: 8:00 AM – 12:00 PM & 2:00 – 5:30 PM · Sat: 8:00 AM – 1:00 PM"}</li>
    <li><b><svg class='bi' viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='5.5' width='18' height='13' rx='2'/><path d='m3.5 7 8.5 6.5L20.5 7'/></svg>${lang==="es"?"Correo":"Email"}</b><a href="mailto:${CONFIG.correo}">${CONFIG.correo}</a></li>`;
  $("conWa").href = waUrl();
  $("conCall").hidden = !realPhone;
  $("conCall").href = "tel:+" + CONFIG.whatsapp;
  $("conDir").href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(CONFIG.direccion);
  $("conFb").href = CONFIG.facebook;
  if(!$("mapFrame").src) $("mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(CONFIG.direccion) + "&output=embed";
  $("cTopic").innerHTML = t.topics.map(x=>`<option>${x}</option>`).join("");
}

function renderQuoteModal(){
  const skus = Object.keys(state.quote).filter(s => PRODUCTOS.some(p=>p.s===s));
  const totalQty = skus.reduce((a,s)=>a+state.quote[s],0);
  $("qCount").textContent = totalQty;
  $("qEmpty").hidden = !!skus.length;
  $("qSendWa").hidden = !skus.length;
  $("qPrintBtn").hidden = !skus.length;
  $("qClearBtn").hidden = !skus.length;

  $("qList").innerHTML = skus.map(s=>{
    const p = PRODUCTOS.find(x=>x.s===s);
    return `<li class="q-item">
      <div><strong>${p.s}</strong><br><small style="color:var(--muted)">${p[lang]}</small></div>
      <div class="stepper">
        <button type="button" data-qd="-1" data-qs="${s}">−</button>
        <b>${state.quote[s]}</b>
        <button type="button" data-qd="1" data-qs="${s}">+</button>
      </div>
    </li>`;
  }).join("");

  const body = (lang==="es"?"Hola Proeléctricos, quiero cotizar:\n":"Hello Proeléctricos, quote request:\n") +
    skus.map(s => `- ${s} (${PRODUCTOS.find(x=>x.s===s)[lang]}) x${state.quote[s]}`).join("\n");
  $("qSendWa").href = waUrl(body);
}

function renderGarage(){
  document.querySelectorAll("[data-garage]").forEach(box=>{
    const wrap = box.querySelector("[data-gchips]");
    wrap.innerHTML = state.garage.length ? state.garage.map((g,i)=>`
      <span class="g-chip">
        <button type="button" data-gfill="${i}">${esc((g.b?g.b+" ":"")+g.m)}</button>
        <button type="button" class="gx" data-gdel="${i}">×</button>
      </span>`).join("") : `<small style="color:var(--muted)">${T().gar_empty}</small>`;
  });
}

function renderAll(){
  const t = T();
  document.documentElement.lang = lang;
  $("langToggle").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t[el.dataset.i18n];
    if(val != null) el.innerHTML = val;
  });
  $("heroWa").href = waUrl();
  $("waFloat").href = waUrl();
  $("hubWa").href = waUrl();
  $("footMeta").textContent = `© ${new Date().getFullYear()} ${CONFIG.nombre} · ${CONFIG.direccion} · NIT ${CONFIG.nit}`;
  renderStatus();
  renderHome();
  renderCatalog();
  renderRepuestos();
  renderGarantias();
  renderCalcs();
  renderContacto();
  renderQuoteModal();
  renderGarage();
}

/* =========================================================================
   6. ROUTER & EVENTOS
   ========================================================================= */
const VIEWS = ["inicio","catalogo","repuestos","garantias","herramientas","contacto"];
function route(){
  const hash = (location.hash.slice(1) || "inicio").split("/")[0];
  const v = VIEWS.includes(hash) ? hash : "inicio";
  state.view = v;
  document.querySelectorAll(".view").forEach(el => el.hidden = el.dataset.view !== v);
  document.querySelectorAll("#deskNav a, #drawerNav a").forEach(a => a.setAttribute("aria-current", a.dataset.v===v ? "page" : "false"));
  window.scrollTo({top:0,behavior:"instant"});
}
window.addEventListener("hashchange", route);

$("langToggle").onclick = () => {
  lang = lang === "es" ? "en" : "es";
  try{localStorage.setItem("pe_lang",lang)}catch(_){}
  renderAll();
};

// Eventos de búsqueda por imagen (BETA local)
$("lensBtn").onclick = () => $("lensFile").click();
$("lensRetry").onclick = () => $("lensFile").click();
$("lensFile").onchange = e => {
  const f = e.target.files && e.target.files[0];
  if(!f) return;
  e.target.value = "";
  runImageOCR(f);
};
function clearLens(){
  state.lensSkus = null;
  $("lensBox").hidden = true;
  renderCatalog();
}
$("lensClose").onclick = clearLens;
$("clearLensBtn").onclick = clearLens;

// Delegación global de clics
document.addEventListener("click", e => {
  const pickCat = e.target.closest("[data-pick-cat]");
  if(pickCat){
    state.lensSkus = null;
    $("lensBox").hidden = true;
    state.cat = pickCat.dataset.pickCat;
    state.q = ""; $("searchInput").value = "";
    renderCatalog();
    location.hash = "#catalogo";
    return;
  }
  const catBtn = e.target.closest("[data-cat]");
  if(catBtn){
    state.lensSkus = null;
    state.cat = catBtn.dataset.cat;
    renderCatalog();
    return;
  }
  const ideaBtn = e.target.closest("[data-idea]");
  if(ideaBtn){
    state.lensSkus = null;
    state.q = ideaBtn.dataset.idea;
    $("searchInput").value = state.q;
    state.cat = "all";
    renderCatalog();
    return;
  }
  const addBtn = e.target.closest("[data-add]");
  if(addBtn){
    const s = addBtn.dataset.add;
    state.quote[s] = (state.quote[s] || 0) + 1;
    saveQuote(); renderQuoteModal(); renderCatalog();
    return;
  }
  const kitBtn = e.target.closest("[data-add-kit]");
  if(kitBtn){
    const k = KITS.find(x=>x.id===kitBtn.dataset.addKit);
    if(k){ k.items.forEach(s => state.quote[s] = (state.quote[s]||0)+1); saveQuote(); renderQuoteModal(); $("quoteDlg").showModal(); }
    return;
  }
  const cmpBtn = e.target.closest("[data-cmp]");
  if(cmpBtn){
    const s = cmpBtn.dataset.cmp, i = state.cmp.indexOf(s);
    if(i>=0) state.cmp.splice(i,1);
    else if(state.cmp.length < 3) state.cmp.push(s);
    else alert(lang==="es"?"Máximo 3 herramientas para comparar.":"Max 3 tools to compare.");
    renderCatalog();
    return;
  }
  const rTool = e.target.closest("[data-rtool]");
  if(rTool){ state.repTool = rTool.dataset.rtool; state.repParts = {}; renderRepuestos(); return; }

  const rPart = e.target.closest("[data-rpart]");
  if(rPart){
    const id = rPart.dataset.rpart;
    if(state.repParts[id]) delete state.repParts[id]; else state.repParts[id] = 1;
    renderRepuestos(); return;
  }
  if(e.target.closest("[data-close]")){ e.target.closest("dialog").close(); return; }

  // Garaje
  const gBox = e.target.closest("[data-garage]");
  if(gBox){
    const form = gBox.closest("form");
    if(e.target.dataset.gsave !== undefined){
      const m = (form.elements.model?.value||"").trim();
      const b = (form.elements.brand?.value||"").trim();
      const s = (form.elements.serial?.value||"").trim();
      if(!m) return;
      state.garage.push({b,m,s}); state.garage = state.garage.slice(-6);
      saveGarage(); renderGarage();
    } else if(e.target.dataset.gfill !== undefined){
      const item = state.garage[+e.target.dataset.gfill];
      if(!item) return;
      if(form.elements.model) form.elements.model.value = item.m;
      if(form.elements.brand && item.b) form.elements.brand.value = item.b;
      if(form.elements.serial && item.s) form.elements.serial.value = item.s;
    } else if(e.target.dataset.gdel !== undefined){
      state.garage.splice(+e.target.dataset.gdel, 1);
      saveGarage(); renderGarage();
    }
  }
});

// Buscador de texto y voz
$("searchInput").oninput = e => {
  state.lensSkus = null;
  state.q = e.target.value.trim();
  renderCatalog();
};
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if(SR){
  $("micBtn").hidden = false;
  $("micBtn").onclick = () => {
    const rec = new SR(); rec.lang = lang==="es"?"es-CO":"en-US";
    $("micBtn").classList.add("on");
    rec.onend = () => $("micBtn").classList.remove("on");
    rec.onresult = e => {
      state.lensSkus = null;
      state.q = e.results[0][0].transcript;
      $("searchInput").value = state.q;
      renderCatalog();
    };
    try{rec.start()}catch(_){}
  };
}

// Modales Cotización y Comparador
$("openQuoteBtn").onclick = () => { renderQuoteModal(); $("quoteDlg").showModal(); };
$("qClearBtn").onclick = () => { state.quote = {}; saveQuote(); renderQuoteModal(); renderCatalog(); };
$("qList").onclick = e => {
  const s = e.target.dataset.qs; if(!s) return;
  state.quote[s] += +e.target.dataset.qd;
  if(state.quote[s] <= 0) delete state.quote[s];
  saveQuote(); renderQuoteModal(); renderCatalog();
};
$("qPrintBtn").onclick = () => {
  const skus = Object.keys(state.quote);
  if(!skus.length) return;
  $("printDoc").innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;border-bottom:3px solid #FFC20E;padding-bottom:10px">
      <img src="${LOGO}" width="70">
      <div><h1 style="margin:0">${CONFIG.nombre}</h1><p style="margin:2px 0">${CONFIG.direccion} · ${CONFIG.correo}</p></div>
    </div>
    <h2>${T().q_title} (${new Date().toLocaleDateString("es-CO")})</h2>
    <table><thead><tr><th>Ref.</th><th>Producto</th><th>Cant.</th><th>Precio</th></tr></thead><tbody>` +
    skus.map(s=>{
      const p = PRODUCTOS.find(x=>x.s===s), inv = INVENTARIO[s]||{};
      return `<tr><td>${s}</td><td>${p[lang]}</td><td>${state.quote[s]}</td><td>${inv.precio!=null?money(inv.precio):T().ask_price}</td></tr>`;
    }).join("") + `</tbody></table><p style="font-size:11px;color:#555">Cotización informativa sujeta a disponibilidad y confirmación en almacén.</p>`;
  window.print();
};

$("openCmpBtn").onclick = () => {
  const cols = state.cmp.map(s => PRODUCTOS.find(p=>p.s===s)).filter(Boolean);
  $("cmpTable").innerHTML = `
    <thead><tr><th></th>${cols.map(p=>`<th>${p.s}</th>`).join("")}</tr></thead>
    <tbody>
      <tr><th>Producto</th>${cols.map(p=>`<td><b>${p[lang]}</b></td>`).join("")}</tr>
      <tr><th>Detalle</th>${cols.map(p=>`<td>${p.spec[lang]}</td>`).join("")}</tr>
      <tr><th>Tipo</th>${cols.map(p=>`<td>${p.type==="cordless"?(lang==="es"?"Inalámbrica":"Cordless"):(lang==="es"?"Con cable":"Corded")}</td>`).join("")}</tr>
      <tr><th>Precio</th>${cols.map(p=>`<td>${INVENTARIO[p.s]?.precio!=null?money(INVENTARIO[p.s].precio):T().ask_price}</td>`).join("")}</tr>
    </tbody>`;
  $("cmpDlg").showModal();
};
$("cmpClearBtn").onclick = () => { state.cmp = []; renderCatalog(); $("cmpDlg").close(); };

// Calculadoras & repuestos
$("rTool").onchange = e => { state.repTool = e.target.value; state.repParts = {}; renderRepuestos(); };
$("wElec").onchange = e => { state.weldIdx = +e.target.value; renderCalcs(); };
$("wVolt").onchange = renderCalcs;
$("wireAmps").oninput = updateWireCalc;

// Seguimiento de caso
$("trkForm").onsubmit = e => {
  e.preventDefault();
  const code = $("trkInput").value.trim().toUpperCase();
  if(!code){ $("trkOut").innerHTML = ""; return; }
  const hit = CASOS.find(c => c.caso.toUpperCase() === code);
  if(!hit){
    $("trkOut").innerHTML = `<p class="err-msg">${T().trk_none}</p>`;
    return;
  }
  const n = norm(hit.estado);
  const idx = n.includes("entreg")?4 : n.includes("list")?3 : n.includes("repar")||n.includes("taller")?2 : n.includes("revis")?1 : 0;
  $("trkOut").innerHTML = `
    <ol class="tl">${T().trk_states.map((st,i)=>`<li class="${i<idx?"done":i===idx?"now":""}"><span>${i+1}</span>${st}</li>`).join("")}</ol>
    <p><b>${esc(hit.caso)}</b> · ${esc(hit.estado)} ${hit.actualizado?`(${esc(hit.actualizado)})`:""}</p>
    ${hit.nota?`<p style="font-size:.9rem;color:var(--muted);margin-top:4px">${esc(hit.nota)}</p>`:""}
    ${idx===3?`<p class="ok-msg" style="margin-top:8px">${T().trk_ready}</p>`:""}`;
};

// Formularios (WhatsApp + Correo)
function buildMsg(title, pairs){
  return title + "\n" + pairs.map(([k,v])=>`${k}: ${v||"-"}`).join("\n");
}
function handleForm(formId, errId, getTitle, getPairs, mailBtnId){
  const form = $(formId), err = $(errId);
  const validate = () => {
    const ok = form.checkValidity();
    err.hidden = ok;
    err.textContent = lang==="es"?"Completa los campos obligatorios (*) antes de enviar.":"Please fill in the required fields (*).";
    if(!ok) form.reportValidity();
    return ok;
  };
  form.onsubmit = e => { e.preventDefault(); if(validate()) window.open(waUrl(buildMsg(getTitle(), getPairs(form))), "_blank", "noopener"); };
  $(mailBtnId).onclick = () => {
    if(!validate()) return;
    location.href = `mailto:${CONFIG.correo}?subject=${encodeURIComponent(getTitle())}&body=${encodeURIComponent(buildMsg(getTitle(), getPairs(form)))}`;
  };
}

handleForm("repForm","rErr", () => lang==="es"?"Solicitud de Repuesto / Servicio":"Spare Part / Service Request", f => [
  ["Nombre",f.elements.name.value],["Teléfono",f.elements.phone.value],["Servicio",f.elements.type.value],
  ["Herramienta",f.elements.tool.value],["Marca",f.elements.brand.value],["Modelo",f.elements.model.value],
  ["Repuestos",f.elements.parts.value],["Detalle",f.elements.issue.value]
], "rMailBtn");

handleForm("warForm","wErr", () => lang==="es"?"Pre-radicación Garantía DEWALT":"DEWALT Warranty Request", f => [
  ["Nombre",f.elements.name.value],["Teléfono",f.elements.phone.value],["Modelo",f.elements.model.value],
  ["Serie",f.elements.serial.value],["Fecha visita",f.elements.date.value],["Jornada",f.elements.slot.value],
  ["Falla",f.elements.issue.value]
], "wMailBtn");

handleForm("conForm","cErr", () => lang==="es"?"Consulta Web Proeléctricos":"Website Inquiry", f => [
  ["Nombre",f.elements.name.value],["Teléfono",f.elements.phone.value],["Tema",f.elements.topic.value],["Mensaje",f.elements.msg.value]
], "cMailBtn");

/* =========================================================================
   7. CARGA OPCIONAL DE GOOGLE SHEETS (CSV)
   ========================================================================= */
function parseCSV(text){
  return text.trim().split(/\r?\n/).map(line => line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.replace(/^"|"$/g,"").trim()));
}
async function loadSheets(){
  if(CONFIG.csvInventario){
    try{
      const rows = parseCSV(await (await fetch(CONFIG.csvInventario,{cache:"no-store"})).text());
      rows.slice(1).forEach(r => {
        if(!r[0]) return;
        INVENTARIO[r[0].toUpperCase()] = { precio: r[1]?+r[1].replace(/\D/g,""):null, stock: r[2]!==""?+r[2]:null };
      });
    }catch(_){}
  }
  if(CONFIG.csvGarantias){
    try{
      const rows = parseCSV(await (await fetch(CONFIG.csvGarantias,{cache:"no-store"})).text());
      const parsed = rows.slice(1).filter(r=>r[0]).map(r=>({caso:r[0],estado:r[1]||"Recibida",actualizado:r[2]||"",nota:r[3]||""}));
      if(parsed.length) CASOS = parsed;
    }catch(_){}
  }
  renderAll();
}

renderAll();
route();
loadSheets();
setInterval(renderStatus, 60000);
