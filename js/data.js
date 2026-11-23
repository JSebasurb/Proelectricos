// CAPA 1 · DATOS: edita aquí todo (contacto, textos ES/EN, productos, FAQ del chatbot).
const NEGOCIO = {
  direccion: "Calle 4 #21C-14, Popayán",
  correo: "proelectricospopayan@hotmail.com",
  facebook: "https://www.facebook.com/share/1E17P7FDqw/",
  whatsapp: "57XXXXXXXXXX", // ← número real con indicativo 57, sin + ni espacios
  dewalt: "https://www.dewalt.com.co/es-co"
};
const D = NEGOCIO.dewalt + "/productos/herramientas-electricas/";

const I18N = {
 es:{
  nav_products:"Productos", nav_systems:"Baterías", nav_warranty:"Servicio autorizado", nav_contact:"Contacto",
  hero_kicker:"Popayán · Herramienta eléctrica · Inversores",
  hero_title:"Solidez garantizada para tu trabajo",
  hero_text:"Herramienta eléctrica DEWALT, inversores y centro de servicio autorizado DEWALT en Popayán. Asesoría directa para que elijas el equipo correcto y no pares.",
  hero_cta1:"Ver productos", hero_cta2:"Cotizar por WhatsApp",
  prod_title:"Herramientas eléctricas", prod_sub:"Taladros, amoladoras, sierras, rotomartillos y combos DEWALT. Pregunta por disponibilidad y precio.",
  pop_title:"Referencias populares",
  sys_xr:"Baterías y herramientas inalámbricas de 20V MAX* XR® para los trabajos más exigentes.",
  sys_flex:"Una sola batería que cambia de voltaje según la herramienta: potencia y tiempo de uso para obra pesada.",
  sys_note:"*Tecnología y especificaciones según el fabricante. Consulta compatibilidad de baterías con nuestro equipo.",
  inv_title:"Inversores de energía", inv_text:"Llévate energía a donde la necesites. Te ayudamos a calcular la potencia según los equipos que vas a conectar.",
  inv_card_t:"¿Qué inversor necesito?", inv_card_d:"Dinos qué herramientas o equipos vas a usar y te recomendamos.", inv_cta:"Pedir asesoría",
  war_title:"Centro de servicio autorizado DEWALT en Popayán",
  war_text:"Si tu herramienta DEWALT falla, no tienes que viajar a otra ciudad. Recibimos tu equipo y gestionamos la garantía o reparación.",
  war_bring:"Qué debes traer", war_link:"Ver política de garantía DEWALT",
  svc_title:"Servicio y ayuda",
  con_title:"Visítanos", con_mail:"Correo", addr:"Dirección", hours:"Horario", mail:"Correo",
  horario:"Lunes a sábado (ajustar horario real)",
  legal:"Proelectricos es centro de servicio autorizado DEWALT en Popayán. DEWALT y sus logotipos son marcas registradas de sus respectivos propietarios.",
  chat_fab:"💬 ¿Te ayudo?", chat_title:"Asistente Proelectricos", chat_send:"Enviar", chat_ph:"Escribe tu pregunta…",
  chat_hi:"¡Hola! ¿En qué te ayudo? Elige una opción o escribe tu pregunta.",
  chat_unk:"No estoy seguro de eso. Escríbenos por WhatsApp y un asesor te responde.", chat_agent:"\nHablar con un asesor",
  wa_default:"Hola Proelectricos, necesito información", wa_q:"Hola, mi consulta: ",
  more:"Ver en DEWALT",
  lineas:[
   {t:"Taladros", d:"Inalámbricos y percutores, 12V y 20V MAX*.", u:"taladros"},
   {t:"Amoladoras", d:"Esmeriladoras angulares para corte y desbaste.", u:"amoladoras"},
   {t:"Sierras", d:"Circulares y más, para madera y construcción.", u:"sierras"},
   {t:"Combos", d:"Kits con herramienta, baterías y cargador.", u:"combos"}
  ],
  populares:[
   {t:"Esmeriladora angular 7\" 2700W", s:"DWE4577-B3"},
   {t:"Kit taladro/atornillador 20V MAX* XR sin carbones", s:"DCD806D2-B3"},
   {t:"Rotomartillo SDS MAX 1-9/16\" 6.1J", s:"D25481K-B3"},
   {t:"Sierra circular 7-1/4\" 1800W", s:"DWE575K-B3"}
  ],
  pasos:["Trae tu herramienta a la Calle 4 #21C-14.","La revisamos y verificamos si aplica garantía.","Gestionamos el diagnóstico o la reparación.","Te avisamos cuando esté lista."],
  requisitos:["Factura o comprobante de compra","La herramienta con sus accesorios","Número de modelo y serie (ver etiqueta)","Tu nombre y un número de contacto"],
  servicios:[
   {t:"Servicio y soporte", d:"Atención para tu herramienta, repuestos y dudas técnicas."},
   {t:"Dónde comprar", d:"Estamos en la Calle 4 #21C-14, Popayán. Visítanos o escríbenos."},
   {t:"Garantía de productos", d:"Información de garantía, reparación o reemplazo de tu producto DEWALT."}
  ],
  sug:["Garantía DEWALT","Inversores","Ubicación","Horario","Cotizar"],
  faq:[
   {k:["hola","buenas","buenos"],r:"¡Hola! Soy el asistente de Proelectricos. Pregúntame por productos, garantía DEWALT, inversores, ubicación u horario."},
   {k:["factura","documento","requisito","traer","llevar"],r:"Para garantía lleva: factura de compra, la herramienta con accesorios, número de modelo y serie, y un contacto."},
   {k:["garantia","dewalt","reparar","reparacion","falla","dañ"],r:"Somos centro de servicio autorizado DEWALT en Popayán. Trae tu herramienta con la factura y la revisamos. Escribe «documentos» para ver qué llevar."},
   {k:["inversor","energia","planta","solar"],r:"Manejamos inversores de energía. Dinos qué equipos quieres conectar y te recomendamos la potencia."},
   {k:["bateria","20v","60v","flexvolt","xr"],r:"Trabajamos sistemas DEWALT 20V MAX* XR y FlexVolt 60V MAX*. Consulta compatibilidad por WhatsApp."},
   {k:["taladro","amoladora","esmeriladora","sierra","rotomartillo","combo","herramienta"],r:"Tenemos herramienta eléctrica DEWALT: taladros, amoladoras, sierras, rotomartillos y combos. Pide disponibilidad por WhatsApp."},
   {k:["donde","direccion","ubicacion","local","llegar"],r:"Estamos en la Calle 4 #21C-14, Popayán. El mapa está en la sección Contacto."},
   {k:["horario","hora","abren","cierran"],r:"Horario: Lunes a sábado (ajustar horario real). Confirma por WhatsApp antes de venir."},
   {k:["precio","cuanto","cotiza","valor"],r:"El precio depende de la referencia. Pide tu cotización por WhatsApp con el nombre o modelo."},
   {k:["correo","email"],r:"Nuestro correo: "+NEGOCIO.correo},
   {k:["facebook","redes"],r:"Síguenos en Facebook: "+NEGOCIO.facebook},
   {k:["whatsapp","telefono","llamar","contacto","asesor"],r:"Usa el botón de WhatsApp en Contacto y un asesor te atiende."},
   {k:["envio","domicilio"],r:"Para envíos o domicilios consúltanos por WhatsApp."}
  ]
 },
 en:{
  nav_products:"Products", nav_systems:"Batteries", nav_warranty:"Authorized service", nav_contact:"Contact",
  hero_kicker:"Popayán · Power tools · Inverters",
  hero_title:"Guaranteed toughness for your job",
  hero_text:"DEWALT power tools, inverters and an authorized DEWALT service center in Popayán. Direct advice so you pick the right gear and keep working.",
  hero_cta1:"View products", hero_cta2:"Get a quote on WhatsApp",
  prod_title:"Power tools", prod_sub:"DEWALT drills, grinders, saws, rotary hammers and combo kits. Ask about availability and price.",
  pop_title:"Popular models",
  sys_xr:"20V MAX* XR® cordless batteries and tools for the most demanding jobs.",
  sys_flex:"One battery that switches voltage with the tool: power and runtime for heavy-duty work.",
  sys_note:"*Technology and specifications per manufacturer. Ask us about battery compatibility.",
  inv_title:"Power inverters", inv_text:"Take power wherever you need it. We help you size the inverter for the equipment you plan to connect.",
  inv_card_t:"Which inverter do I need?", inv_card_d:"Tell us which tools or equipment you will use and we will recommend one.", inv_cta:"Ask for advice",
  war_title:"DEWALT authorized service center in Popayán",
  war_text:"If your DEWALT tool fails, you don't have to travel to another city. We receive your tool and handle the warranty or repair.",
  war_bring:"What to bring", war_link:"DEWALT warranty policy",
  svc_title:"Service and help",
  con_title:"Visit us", con_mail:"Email", addr:"Address", hours:"Hours", mail:"Email",
  horario:"Monday to Saturday (set real hours)",
  legal:"Proelectricos is an authorized DEWALT service center in Popayán. DEWALT and its logos are trademarks of their respective owners.",
  chat_fab:"💬 Need help?", chat_title:"Proelectricos assistant", chat_send:"Send", chat_ph:"Type your question…",
  chat_hi:"Hi! How can I help? Pick an option or type your question.",
  chat_unk:"I'm not sure about that. Message us on WhatsApp and an advisor will answer.", chat_agent:"\nTalk to an advisor",
  wa_default:"Hello Proelectricos, I need information", wa_q:"Hello, my question: ",
  more:"See on DEWALT",
  lineas:[
   {t:"Drills", d:"Cordless and hammer drills, 12V and 20V MAX*.", u:"taladros"},
   {t:"Grinders", d:"Angle grinders for cutting and grinding.", u:"amoladoras"},
   {t:"Saws", d:"Circular saws and more, for wood and construction.", u:"sierras"},
   {t:"Combo kits", d:"Kits with tool, batteries and charger.", u:"combos"}
  ],
  populares:[
   {t:"7\" angle grinder 2700W", s:"DWE4577-B3"},
   {t:"20V MAX* XR brushless drill/driver kit", s:"DCD806D2-B3"},
   {t:"SDS MAX 1-9/16\" rotary hammer 6.1J", s:"D25481K-B3"},
   {t:"7-1/4\" circular saw 1800W", s:"DWE575K-B3"}
  ],
  pasos:["Bring your tool to Calle 4 #21C-14.","We inspect it and check warranty eligibility.","We handle the diagnosis or repair.","We let you know when it's ready."],
  requisitos:["Invoice or proof of purchase","The tool with its accessories","Model and serial number (see label)","Your name and a contact number"],
  servicios:[
   {t:"Service & support", d:"Help with your tool, spare parts and technical questions."},
   {t:"Where to buy", d:"We are at Calle 4 #21C-14, Popayán. Visit or message us."},
   {t:"Product warranty", d:"Warranty, repair or replacement information for your DEWALT product."}
  ],
  sug:["DEWALT warranty","Inverters","Location","Hours","Quote"],
  faq:[
   {k:["hello","hi ","hey"],r:"Hi! I'm the Proelectricos assistant. Ask me about products, DEWALT warranty, inverters, location or hours."},
   {k:["invoice","document","require","bring"],r:"For warranty bring: proof of purchase, the tool with accessories, model and serial number, and a contact."},
   {k:["warranty","dewalt","repair","fail","broken"],r:"We are an authorized DEWALT service center in Popayán. Bring your tool with the invoice and we'll inspect it. Type \"documents\" to see what to bring."},
   {k:["inverter","power supply","solar","energy"],r:"We carry power inverters. Tell us what you want to connect and we'll recommend the right power."},
   {k:["battery","batteries","20v","60v","flexvolt","xr"],r:"We work with DEWALT 20V MAX* XR and FlexVolt 60V MAX* systems. Ask compatibility on WhatsApp."},
   {k:["drill","grinder","saw","hammer","combo","tool"],r:"We have DEWALT power tools: drills, grinders, saws, rotary hammers and combo kits. Ask availability on WhatsApp."},
   {k:["where","address","location","find you"],r:"We're at Calle 4 #21C-14, Popayán. The map is in the Contact section."},
   {k:["hours","open","close","schedule"],r:"Hours: Monday to Saturday (set real hours). Confirm on WhatsApp before visiting."},
   {k:["price","cost","how much","quote"],r:"Price depends on the model. Ask for a quote on WhatsApp with the name or model."},
   {k:["email","mail"],r:"Our email: "+NEGOCIO.correo},
   {k:["facebook","social"],r:"Follow us on Facebook: "+NEGOCIO.facebook},
   {k:["whatsapp","phone","call","contact","advisor"],r:"Use the WhatsApp button in Contact and an advisor will help you."},
   {k:["shipping","delivery"],r:"For shipping or delivery, ask us on WhatsApp."}
  ]
 }
};

// ---- Contenido ampliado (v3) ----
const PRODUCTOS = [
 {s:"DCD806D2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd806d2-b3/kit-de-taladro-atornilladorpercutor-12-13mm-sin-carbones-20v-max-xr",c:"taladro-inal",ico:"drill",es:"Kit taladro/percutor 1/2\" 20V MAX* XR sin carbones",en:"1/2\" 20V MAX* XR brushless drill/hammer kit"},
 {s:"DCD706F2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd706f2-b3/kit-de-taladro-percutoratornillador-inalambrico-de-38-10mm-12v-max",c:"taladro-inal",ico:"drill",es:"Kit taladro percutor/atornillador 3/8\" 12V MAX*",en:"3/8\" 12V MAX* hammer drill/driver kit"},
 {s:"DCD701F2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd701f2-b3/kit-de-taladroatornillador-de-38-10mm-inalambrico-12v-max",c:"taladro-inal",ico:"drill",es:"Kit taladro/atornillador 3/8\" inalámbrico 12V MAX*",en:"3/8\" 12V MAX* cordless drill/driver kit"},
 {s:"DWE4577-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe4577-b3/esmeriladora-angular-7-180mm-2700w",c:"amoladora",ico:"grinder",es:"Esmeriladora angular 7\" (180mm) 2700W",en:"7\" (180mm) angle grinder 2700W"},
 {s:"DWE4314-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe4314-b3/esmeriladora-angular-de-4-12-115mm-5-125mm-1500w",c:"amoladora",ico:"grinder",es:"Esmeriladora angular 4-1/2\"–5\" 1500W",en:"4-1/2\"–5\" angle grinder 1500W"},
 {s:"DWE575K-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe575k-b3/kit-de-sierra-circular-electrica-de-7-14-185mm-de-1800w",c:"sierra",ico:"saw",es:"Kit sierra circular 7-1/4\" (185mm) 1800W",en:"7-1/4\" (185mm) circular saw kit 1800W"},
 {s:"D25481K-B3",u:"https://www.dewalt.com.co/es-co/producto/d25481k-b3/kit-de-rotomartillo-combinado-sds-max-de-1-916-40mm-de-61j",c:"martillo",ico:"hammer",es:"Kit rotomartillo combinado SDS MAX 1-9/16\" 6.1J",en:"SDS MAX combination rotary hammer kit 1-9/16\" 6.1J"},
 {s:"D25960K-B3",u:"https://www.dewalt.com.co/es-co/producto/d25960k-b3/kit-de-martillo-demoledor-hexagonal-en-linea-de-1-18-de-40-lbs",c:"martillo",ico:"hammer",es:"Kit martillo demoledor hexagonal 1-1/8\" 40 lb",en:"1-1/8\" hex demolition hammer kit 40 lb"}
];
const CARGAS = [ // vatios de referencia; m = motor (pico de arranque)
 {id:"led",w:10,es:"Bombillo LED",en:"LED bulb"},
 {id:"cargador",w:100,es:"Cargador de batería / celular",en:"Battery / phone charger"},
 {id:"pc",w:150,es:"Computador portátil",en:"Laptop"},
 {id:"taladro",w:700,m:1,es:"Taladro eléctrico",en:"Electric drill"},
 {id:"rotomartillo",w:1000,m:1,es:"Rotomartillo",en:"Rotary hammer"},
 {id:"amoladora",w:1500,m:1,es:"Amoladora 4-1/2\"",en:"4-1/2\" grinder"},
 {id:"sierra",w:1800,m:1,es:"Sierra circular",en:"Circular saw"},
 {id:"compresor",w:1200,m:1,es:"Compresor pequeño",en:"Small compressor"}
];
const INV_SIZES = [300,600,1000,1500,2000,3000,5000,8000];

Object.assign(I18N.es,{
 nav_inv:"Inversores", nav_guide:"Guía",
 prod_sub:"Taladros, amoladoras, sierras y rotomartillos DEWALT. Filtra por tipo y cotiza por WhatsApp.",
 f_all:"Todos", f_drill:"Taladros", f_grinder:"Amoladoras", f_saw:"Sierras", f_hammer:"Rotomartillos", quote:"Cotizar",
 sys_title:"Elige tu sistema de batería", sys_sub:"Una batería, muchas herramientas. Escoge el voltaje según tu trabajo.",
 inv_title:"Calculadora de inversor", inv_text:"Marca lo que vas a conectar y te sugerimos la potencia del inversor.",
 calc_total:"Consumo total estimado", calc_rec:"Inversor sugerido", calc_none:"Elige equipos",
 calc_note:"Valores de referencia: revisa la placa de cada equipo. Incluye margen de seguridad y pico de arranque de motores. Confirma con nuestro asesor.",
 calc_over:"Más de 8000 W: consúltanos", inv_cta:"Confirmar con un asesor",
 guide_title:"Guía rápida para elegir y cuidar tu herramienta", guide_sub:"Información útil antes de comprar o de traer tu equipo al servicio.",
 sistemas:[
  {t:"12V MAX*",ico:"drill",d:"Compacta y liviana. Ideal para atornillar y taladrar en espacios reducidos, instalaciones y acabados.",uses:["Atornillado y ensamble","Instalaciones eléctricas","Mantenimiento en altura"]},
  {t:"20V MAX* XR®",ico:"battery",d:"El equilibrio entre potencia y autonomía para obra, taller y mantenimiento.",uses:["Taladros percutores","Amoladoras inalámbricas","Sierras y herramientas de corte"]},
  {t:"FLEXVOLT 60V MAX*",ico:"saw",d:"La batería cambia de voltaje según la herramienta: máxima potencia para trabajo pesado.",uses:["Sierras circulares","Corte y desbaste exigente","Obra y construcción"]}
 ],
 guia:[
  {q:"¿Qué significan 12V, 20V y 60V?",a:"El voltaje indica cuánta fuerza entrega la herramienta; los Ah (amperios-hora) indican cuánto dura la batería. Más voltaje, más potencia; más Ah, más tiempo de trabajo."},
  {q:"¿Qué es un motor sin carbones (brushless)?",a:"Es un motor con menos piezas que se desgastan: trabaja más frío, es más eficiente y suele durar más que uno con carbones."},
  {q:"¿Taladro, percutor o rotomartillo?",a:"El taladro/atornillador sirve para madera, metal y tornillos. El percutor añade impacto para mampostería liviana. El rotomartillo SDS es para concreto y perforación pesada."},
  {q:"Perform & Protect: menos polvo y vibración",a:"Es la línea de DEWALT pensada para reducir el polvo y la vibración durante el trabajo. Siempre complementa con gafas, guantes, protección auditiva y respiratoria."},
  {q:"Cuida tu herramienta",a:"Mantén limpias las rejillas de ventilación, usa accesorios adecuados, no dejes las baterías descargadas por mucho tiempo y revisa cable y carbones. Desconecta antes de cambiar discos o brocas."},
  {q:"Prepárate para la garantía",a:"Guarda la factura, ubica el número de modelo y serie en la etiqueta y no abras la herramienta. Las condiciones exactas están en la política oficial de DEWALT; te orientamos en el local."}
 ]
});
Object.assign(I18N.en,{
 nav_inv:"Inverters", nav_guide:"Guide",
 prod_sub:"DEWALT drills, grinders, saws and rotary hammers. Filter by type and get a quote on WhatsApp.",
 f_all:"All", f_drill:"Drills", f_grinder:"Grinders", f_saw:"Saws", f_hammer:"Rotary hammers", quote:"Get a quote",
 sys_title:"Choose your battery system", sys_sub:"One battery, many tools. Pick the voltage that fits your job.",
 inv_title:"Inverter calculator", inv_text:"Select what you will plug in and we'll suggest the inverter power.",
 calc_total:"Estimated total load", calc_rec:"Suggested inverter", calc_none:"Pick equipment",
 calc_note:"Reference values: check each device's label. Includes a safety margin and motor start-up peak. Confirm with our advisor.",
 calc_over:"Over 8000 W: contact us", inv_cta:"Confirm with an advisor",
 guide_title:"Quick guide to choosing and caring for your tool", guide_sub:"Useful information before you buy or bring your tool in for service.",
 sistemas:[
  {t:"12V MAX*",ico:"drill",d:"Compact and lightweight. Ideal for driving and drilling in tight spaces, installations and finishing.",uses:["Driving and assembly","Electrical installations","Overhead maintenance"]},
  {t:"20V MAX* XR®",ico:"battery",d:"The balance of power and runtime for job sites, workshops and maintenance.",uses:["Hammer drills","Cordless grinders","Saws and cutting tools"]},
  {t:"FLEXVOLT 60V MAX*",ico:"saw",d:"The battery switches voltage with the tool: maximum power for heavy-duty work.",uses:["Circular saws","Demanding cutting and grinding","Construction sites"]}
 ],
 guia:[
  {q:"What do 12V, 20V and 60V mean?",a:"Voltage tells you how much power the tool delivers; Ah (amp-hours) tells you how long the battery lasts. More voltage, more power; more Ah, more runtime."},
  {q:"What is a brushless motor?",a:"A motor with fewer wearing parts: it runs cooler, is more efficient and usually lasts longer than a brushed motor."},
  {q:"Drill, hammer drill or rotary hammer?",a:"A drill/driver is for wood, metal and screws. A hammer drill adds impact for light masonry. An SDS rotary hammer is for concrete and heavy drilling."},
  {q:"Perform & Protect: less dust and vibration",a:"DEWALT's line designed to reduce dust and vibration while you work. Always add safety glasses, gloves, hearing and respiratory protection."},
  {q:"Take care of your tool",a:"Keep vents clean, use the right accessories, don't leave batteries fully drained for long and check the cord and brushes. Unplug before changing discs or bits."},
  {q:"Get ready for warranty service",a:"Keep your invoice, find the model and serial number on the label and don't open the tool. Exact terms are in DEWALT's official policy; we'll guide you in store."}
 ],
 slides:undefined
});
I18N.es.slides=[
 {t:"Baterías 20V MAX* XR®",d:"Potencia sin cable para los trabajos más exigentes.",cta:"Ver sistemas",href:"#sistemas",ico:"battery"},
 {t:"FLEXVOLT 60V MAX*",d:"Una batería que cambia de voltaje con tu herramienta.",cta:"Ver herramientas",href:"#productos",ico:"saw"},
 {t:"Perform & Protect",d:"Menos polvo y menos vibración: herramientas pensadas para cuidarte.",cta:"Leer la guía",href:"#guia",ico:"grinder"},
 {t:"Servicio autorizado DEWALT en Popayán",d:"Garantía y reparación sin viajar a otra ciudad.",cta:"Cómo funciona",href:"#garantia",ico:"drill"}
];
I18N.en.slides=[
 {t:"20V MAX* XR® batteries",d:"Cordless power for the most demanding jobs.",cta:"See systems",href:"#sistemas",ico:"battery"},
 {t:"FLEXVOLT 60V MAX*",d:"One battery that switches voltage with your tool.",cta:"See tools",href:"#productos",ico:"saw"},
 {t:"Perform & Protect",d:"Less dust and less vibration: tools designed to protect you.",cta:"Read the guide",href:"#guia",ico:"grinder"},
 {t:"Authorized DEWALT service in Popayán",d:"Warranty and repair without traveling to another city.",cta:"How it works",href:"#garantia",ico:"drill"}
];

Object.assign(I18N.es,{
 about_title:"Sobre Proelectricos",
 about_text:"Somos una ferretería en Popayán enfocada en herramienta eléctrica e inversores, y centro de servicio autorizado DEWALT. Te asesoramos para elegir el equipo correcto y te acompañamos después de la compra con garantía y reparación.",
 points:["Especialistas en herramienta eléctrica","Inversores con asesoría de potencia","Servicio autorizado DEWALT en la ciudad","Atención directa por WhatsApp"],
 form_title:"Solicitud de garantía o servicio", form_sub:"Llena los datos y envíalos por WhatsApp o correo. Luego trae tu herramienta con la factura.",
 f_name:"Nombre completo", f_phone:"Teléfono", f_model:"Modelo de la herramienta", f_serial:"Número de serie (opcional)", f_issue:"¿Qué falla presenta?",
 f_consent:"Autorizo el tratamiento de mis datos según la", f_wa:"Enviar por WhatsApp", f_mail:"Enviar por correo",
 f_err:"Completa los campos obligatorios y acepta la política de datos.",
 priv:"Política de privacidad", terms:"Términos de uso", ft_nav:"Navegación", ft_follow:"Síguenos", ft_legal:"Legal", ft_official:"Sitio oficial DEWALT Colombia",
 wf_head:"Solicitud de garantía/servicio", wf_n:"Nombre", wf_p:"Teléfono", wf_m:"Modelo", wf_s:"Serie", wf_i:"Falla"
});
Object.assign(I18N.en,{
 about_title:"About Proelectricos",
 about_text:"We are a hardware store in Popayán focused on power tools and inverters, and an authorized DEWALT service center. We help you pick the right equipment and support you after purchase with warranty and repair.",
 points:["Power tool specialists","Inverters with power sizing advice","Authorized DEWALT service in town","Direct support on WhatsApp"],
 form_title:"Warranty or service request", form_sub:"Fill in the details and send them by WhatsApp or email. Then bring your tool with the invoice.",
 f_name:"Full name", f_phone:"Phone", f_model:"Tool model", f_serial:"Serial number (optional)", f_issue:"What is the problem?",
 f_consent:"I authorize the processing of my data according to the", f_wa:"Send via WhatsApp", f_mail:"Send by email",
 f_err:"Fill in the required fields and accept the data policy.",
 priv:"Privacy policy", terms:"Terms of use", ft_nav:"Navigation", ft_follow:"Follow us", ft_legal:"Legal", ft_official:"Official DEWALT Colombia site",
 wf_head:"Warranty/service request", wf_n:"Name", wf_p:"Phone", wf_m:"Model", wf_s:"Serial", wf_i:"Problem"
});

// Horario estructurado para el indicador "Abierto ahora". Activa y ajusta con el horario REAL.
const HORARIO = { activo:false, zona:"America/Bogota", dias:{1:[8,18],2:[8,18],3:[8,18],4:[8,18],5:[8,18],6:[8,13]} }; // 0=dom ... 6=sáb, [apertura,cierre] en horas

Object.assign(I18N.es,{
 skip:"Saltar al contenido", search_ph:"Buscar por nombre o referencia…", no_results:"No encontramos esa referencia. Escríbenos y la consultamos.",
 add_q:"Agregar a cotización", added:"Agregado ✓", sheet:"Ficha DEWALT",
 q_title:"Mi lista de cotización", q_empty:"Aún no has agregado productos.", q_send:"Enviar por WhatsApp", q_clear:"Vaciar", q_close:"Cerrar",
 q_pill:"🧾 Mi cotización", q_head:"Hola Proelectricos, quiero cotizar:", con_dir:"Cómo llegar", open_now:"Abierto ahora", closed_now:"Cerrado ahora",
 trust:["Servicio autorizado DEWALT","Asesoría en inversores","Garantía y reparación local","Respuesta por WhatsApp"]
});
Object.assign(I18N.en,{
 skip:"Skip to content", search_ph:"Search by name or model…", no_results:"We couldn't find that model. Message us and we'll check.",
 add_q:"Add to quote", added:"Added ✓", sheet:"DEWALT page",
 q_title:"My quote list", q_empty:"You haven't added any products yet.", q_send:"Send via WhatsApp", q_clear:"Clear", q_close:"Close",
 q_pill:"🧾 My quote", q_head:"Hello Proelectricos, I'd like a quote for:", con_dir:"Get directions", open_now:"Open now", closed_now:"Closed now",
 trust:["Authorized DEWALT service","Inverter advice","Local warranty and repair","Replies on WhatsApp"]
});

// ---- PROMOCIONES: edita, agrega o borra. Se ocultan solas al pasar la fecha "hasta" (AAAA-MM-DD, null = sin vencimiento).
// Si no queda ninguna vigente, la sección desaparece. Los textos de abajo son EJEMPLOS: reemplázalos.
const PROMOS = [
 {hasta:"2026-12-31", ico:"drill",
  badge:{es:"Ejemplo",en:"Example"},
  t:{es:"Promoción en kits de taladro",en:"Drill kit promotion"},
  d:{es:"Texto de ejemplo: describe aquí la oferta real, referencias incluidas y condiciones.",en:"Sample text: describe the real offer, included models and conditions here."}},
 {hasta:"2026-12-24", ico:"grinder",
  badge:{es:"Ejemplo",en:"Example"},
  t:{es:"Amoladoras y discos",en:"Grinders and discs"},
  d:{es:"Texto de ejemplo: usa esta tarjeta para una oferta de amoladoras, discos o accesorios.",en:"Sample text: use this card for an offer on grinders, discs or accessories."}},
 {hasta:null, ico:"inverter",
  badge:{es:"Ejemplo",en:"Example"},
  t:{es:"Asesoría gratis en inversores",en:"Free inverter advice"},
  d:{es:"Texto de ejemplo: cuéntanos qué vas a conectar y te recomendamos la potencia.",en:"Sample text: tell us what you'll connect and we'll recommend the right power."}}
];
const TOPICS = {
 es:["Cotización de productos","Inversores","Garantía / servicio técnico","Otro"],
 en:["Product quote","Inverters","Warranty / service","Other"]
};
Object.assign(I18N.es,{
 nav_promo:"Promociones", promo_title:"Promociones", promo_sub:"Ofertas vigentes en Proelectricos. Pregunta por disponibilidad.",
 promo_cta:"Quiero esta promo", promo_until:"Hasta el", promo_last:"¡Último día!", promo_left:"Quedan {n} días",
 cform_title:"Escríbenos", cform_sub:"Cuéntanos qué necesitas y te respondemos por WhatsApp o correo.",
 c_email:"Correo (opcional)", c_topic:"Tema", c_msg:"Mensaje", cf_head:"Consulta desde la página web"
});
Object.assign(I18N.en,{
 nav_promo:"Promotions", promo_title:"Promotions", promo_sub:"Current offers at Proelectricos. Ask about availability.",
 promo_cta:"I want this offer", promo_until:"Until", promo_last:"Last day!", promo_left:"{n} days left",
 cform_title:"Write to us", cform_sub:"Tell us what you need and we'll reply by WhatsApp or email.",
 c_email:"Email (optional)", c_topic:"Topic", c_msg:"Message", cf_head:"Inquiry from the website"
});

Object.assign(I18N.es,{
 search_ph:"¿Qué necesitas hacer? Ej: perforar concreto", best:"Mejor opción", mic:"Buscar por voz", results_for:"Resultados para", clear_s:"Ver todo",
 ideas:["Cortar baldosa","Perforar concreto","Atornillar","Cortar madera","Demoler piso","Pulir metal"],
 chat_rec:"Para eso te pueden servir:"
});
Object.assign(I18N.en,{
 search_ph:"What do you need to do? E.g. drill concrete", best:"Best match", mic:"Voice search", results_for:"Results for", clear_s:"Show all",
 ideas:["Cut tile","Drill concrete","Drive screws","Cut wood","Demolish floor","Polish metal"],
 chat_rec:"These could work for that:"
});

// ---- INVENTARIO (precios y existencias) ----
// Llénalo aquí o, mejor, desde una hoja de Google Sheets publicada como CSV (ver README).
// precio: número en pesos (COP) o null · stock: unidades (0 = agotado) o null = "confirmar con asesor".
// NO se inventan datos: mientras estén en null, el asistente remite a un asesor.
const INV_CONF = {
  csvUrl: "",        // URL del CSV publicado (columnas: referencia,precio,stock,nota). Opcional.
  catalogoCsv: "",   // CSV del catálogo (ver plantillas/catalogo.csv). Vacío = catálogo incluido en la página.
  promosCsv: "",
  publicacionesCsv: "", // CSV de publicaciones/novedades (plantillas/publicaciones.csv)     // CSV de promociones (plantillas/promos.csv)
  garantiasCsv: "",  // CSV de casos de garantía (plantillas/garantias.csv). SOLO número de caso y estado.
  endpoint: "",      // URL de tu servidor de IA (ver worker/ia-worker.js). Vacío = asistente local.
  actualizado: null  // ej: "2026-11-21" (se muestra en las respuestas)
};
const INVENTARIO = {
 "DCD806D2-B3":{precio:null,stock:null},
 "DCD706F2-B3":{precio:null,stock:null},
 "DCD701F2-B3":{precio:null,stock:null},
 "DWE4577-B3":{precio:null,stock:null},
 "DWE4314-B3":{precio:null,stock:null},
 "DWE575K-B3":{precio:null,stock:null},
 "D25481K-B3":{precio:null,stock:null},
 "D25960K-B3":{precio:null,stock:null}
};

Object.assign(I18N.es,{
 nav_smart:"Lens · IA", smart_title:"Herramientas inteligentes", smart_sub:"Encuentra tu herramienta con la cámara o pregúntale a nuestro asistente.",
 dev_note:"En desarrollo: estas funciones están en pruebas y pueden equivocarse. Confirma precio y disponibilidad con un asesor.",
 tab_lens:"📷 Lens", tab_ai:"⚡ Asistente IA",
 cam_open:"Abrir cámara", cam_shot:"Capturar", cam_file:"Tomar o subir foto", cam_close:"Cerrar cámara",
 cam_empty:"Apunta a la etiqueta o placa de la herramienta y toma la foto", cam_err:"No pudimos abrir la cámara. Usa «Tomar o subir foto».",
 lens_reading:"Leyendo la etiqueta…", lens_loading:"Cargando lector de texto (solo la primera vez)…", lens_found:"Coincidencias en nuestra base:",
 lens_none:"No reconocimos una referencia. Prueba con más luz y la etiqueta bien enfocada, o escribe el modelo abajo.", lens_fail:"No se pudo leer la foto. Escribe el modelo abajo.",
 lens_manual_ph:"O escribe el modelo (ej. DWE4577)", lens_go:"Buscar", ocr_text:"Texto detectado",
 lens_priv:"La foto se procesa en tu dispositivo y no se guarda. El lector de texto se descarga una vez desde un CDN.",
 ai_title:"Asistente Proelectricos IA", ai_ph:"Pregunta por precios, disponibilidad o qué te sirve…", ai_send:"Enviar", ai_thinking:"Pensando…",
 ai_hello:"¡Hola! Puedo consultar nuestra base de productos: precios, disponibilidad y recomendaciones. ¿Qué buscas?",
 ai_chips:["¿Hay taladros disponibles?","¿Cuánto cuesta el DWE4577-B3?","Recomiéndame algo para cortar madera","Compara las amoladoras"],
 ai_mode_local:"Modo local · responde con la base de productos de esta página", ai_mode_remote:"IA conectada",
 ai_tail:"Los precios y el inventario se confirman con un asesor.", ai_tail_date:"Datos actualizados el",
 ai_h_price:"Esto encontré sobre precios:", ai_h_stock:"Esto encontré sobre disponibilidad:", ai_h_cmp:"Comparación de opciones:", ai_h_rec:"Te pueden servir:",
 ai_miss:"No encontré eso en nuestra base. Dime la referencia o para qué lo necesitas, o consulta a un asesor por WhatsApp.",
 ai_greet:"¡Hola! Pregúntame por precios, disponibilidad o qué herramienta te sirve para un trabajo.", ai_err:"Hubo un problema con la IA conectada; te respondo con la base local.",
 price_ask:"Precio: consúltalo", stock_in:"Disponible", stock_out:"Agotado por ahora", stock_ask:"Confirma disponibilidad", talk:"Hablar con un asesor"
});
Object.assign(I18N.en,{
 nav_smart:"Lens · AI", smart_title:"Smart tools", smart_sub:"Find your tool with the camera or ask our assistant.",
 dev_note:"Under development: these features are in testing and may be wrong. Confirm price and availability with an advisor.",
 tab_lens:"📷 Lens", tab_ai:"⚡ AI Assistant",
 cam_open:"Open camera", cam_shot:"Capture", cam_file:"Take or upload photo", cam_close:"Close camera",
 cam_empty:"Point at the tool's label or rating plate and take the photo", cam_err:"We couldn't open the camera. Use \"Take or upload photo\".",
 lens_reading:"Reading the label…", lens_loading:"Loading text reader (first time only)…", lens_found:"Matches in our database:",
 lens_none:"We didn't recognize a model number. Try better light and a sharp label, or type the model below.", lens_fail:"We couldn't read the photo. Type the model below.",
 lens_manual_ph:"Or type the model (e.g. DWE4577)", lens_go:"Search", ocr_text:"Detected text",
 lens_priv:"The photo is processed on your device and not stored. The text reader is downloaded once from a CDN.",
 ai_title:"Proelectricos AI Assistant", ai_ph:"Ask about prices, availability or what fits…", ai_send:"Send", ai_thinking:"Thinking…",
 ai_hello:"Hi! I can check our product database: prices, availability and recommendations. What are you looking for?",
 ai_chips:["Are drills available?","How much is the DWE4577-B3?","Recommend something to cut wood","Compare the grinders"],
 ai_mode_local:"Local mode · answers from this page's product database", ai_mode_remote:"AI connected",
 ai_tail:"Prices and stock are confirmed with an advisor.", ai_tail_date:"Data updated on",
 ai_h_price:"Here's what I found on prices:", ai_h_stock:"Here's what I found on availability:", ai_h_cmp:"Comparison of options:", ai_h_rec:"These could work:",
 ai_miss:"I couldn't find that in our database. Tell me the model or what you need it for, or ask an advisor on WhatsApp.",
 ai_greet:"Hi! Ask me about prices, availability or which tool fits a job.", ai_err:"There was a problem with the connected AI; answering from the local database.",
 price_ask:"Price: ask us", stock_in:"Available", stock_out:"Out of stock for now", stock_ask:"Confirm availability", talk:"Talk to an advisor"
});

// ---- Atributos para la guía y el comparador (v9) ----
// tasks: la primera es la principal · mats: materiales · level: home | pro | both
const ATTR = {
 "DCD806D2-B3":{type:"cordless",spec:{es:"20V MAX* XR · sin carbones",en:"20V MAX* XR · brushless"},tasks:["drill","drive"],mats:["wood","metal","drywall","concrete"],level:"pro"},
 "DCD706F2-B3":{type:"cordless",spec:{es:"12V MAX* · percutor",en:"12V MAX* · hammer drill"},tasks:["drive","drill"],mats:["wood","metal","drywall","concrete"],level:"both"},
 "DCD701F2-B3":{type:"cordless",spec:{es:"12V MAX*",en:"12V MAX*"},tasks:["drive","drill"],mats:["wood","metal","drywall"],level:"home"},
 "DWE4577-B3":{type:"corded",spec:{es:"2700 W · 7\"",en:"2700 W · 7\""},tasks:["grind","cut"],mats:["metal","concrete","tile"],level:"pro"},
 "DWE4314-B3":{type:"corded",spec:{es:"1500 W · 4-1/2\"–5\"",en:"1500 W · 4-1/2\"–5\""},tasks:["grind","cut"],mats:["metal","tile"],level:"both"},
 "DWE575K-B3":{type:"corded",spec:{es:"1800 W · 7-1/4\"",en:"1800 W · 7-1/4\""},tasks:["cut"],mats:["wood"],level:"both"},
 "D25481K-B3":{type:"corded",spec:{es:"SDS MAX · 6.1 J",en:"SDS MAX · 6.1 J"},tasks:["drill","demolish"],mats:["concrete"],level:"pro"},
 "D25960K-B3":{type:"corded",spec:{es:"Hex 1-1/8\" · 40 lb",en:"Hex 1-1/8\" · 40 lb"},tasks:["demolish"],mats:["concrete"],level:"pro"}
};
Object.assign(I18N.es,{
 tab_guide:"🧭 ¿Qué necesito?", g_q1:"¿Qué trabajo vas a hacer?", g_q2:"¿En qué material?", g_q3:"¿Con qué frecuencia la usarás?",
 g_tasks:[{k:"drill",i:"🕳️",l:"Perforar / taladrar"},{k:"drive",i:"🔩",l:"Atornillar"},{k:"cut",i:"✂️",l:"Cortar"},{k:"grind",i:"✨",l:"Pulir / desbastar"},{k:"demolish",i:"🔨",l:"Demoler / picar"}],
 g_mats:[{k:"wood",i:"🪵",l:"Madera"},{k:"metal",i:"⚙️",l:"Metal"},{k:"concrete",i:"🧱",l:"Concreto / ladrillo"},{k:"tile",i:"🔲",l:"Baldosa / cerámica"},{k:"drywall",i:"🏠",l:"Drywall / yeso"}],
 g_uses:[{k:"home",i:"🏡",l:"Ocasional (hogar)"},{k:"pro",i:"🏗️",l:"Frecuente (obra / taller)"}],
 g_back:"← Atrás", g_restart:"Empezar de nuevo", g_result:"Te recomendamos", g_none:"No tenemos una opción clara para esa combinación. Escríbenos y te asesoramos.",
 g_why:"Sirve para", type_cordless:"Inalámbrica", type_corded:"Eléctrica (cable)", lvl_home:"Hogar", lvl_pro:"Profesional", lvl_both:"Hogar y profesional",
 cmp_add:"Comparar", cmp_on:"Comparando ✓", cmp_pill:"⚖️ Comparar", cmp_title:"Comparador", cmp_max:"Puedes comparar hasta 3 productos.", cmp_clear:"Limpiar",
 r_type:"Tipo", r_spec:"Especificación", r_tasks:"Trabajos", r_mats:"Materiales", r_level:"Uso", r_price:"Precio", r_stock:"Disponibilidad",
 q_print:"Imprimir / PDF", pr_title:"Cotización", pr_date:"Fecha", pr_total:"Total estimado", pr_tbd:"Por confirmar con un asesor",
 pr_note:"Cotización informativa sujeta a disponibilidad y confirmación de precios.", pr_cols:["Ref.","Producto","Cant.","Precio","Disponibilidad"],
 install:"📲 Instalar app"
});
Object.assign(I18N.en,{
 tab_guide:"🧭 What do I need?", g_q1:"What job will you do?", g_q2:"On what material?", g_q3:"How often will you use it?",
 g_tasks:[{k:"drill",i:"🕳️",l:"Drilling"},{k:"drive",i:"🔩",l:"Driving screws"},{k:"cut",i:"✂️",l:"Cutting"},{k:"grind",i:"✨",l:"Grinding / polishing"},{k:"demolish",i:"🔨",l:"Demolition / chipping"}],
 g_mats:[{k:"wood",i:"🪵",l:"Wood"},{k:"metal",i:"⚙️",l:"Metal"},{k:"concrete",i:"🧱",l:"Concrete / brick"},{k:"tile",i:"🔲",l:"Tile / ceramic"},{k:"drywall",i:"🏠",l:"Drywall / plaster"}],
 g_uses:[{k:"home",i:"🏡",l:"Occasionally (home)"},{k:"pro",i:"🏗️",l:"Often (job site / shop)"}],
 g_back:"← Back", g_restart:"Start over", g_result:"We recommend", g_none:"We don't have a clear option for that combination. Message us and we'll advise you.",
 g_why:"Good for", type_cordless:"Cordless", type_corded:"Corded", lvl_home:"Home", lvl_pro:"Professional", lvl_both:"Home and professional",
 cmp_add:"Compare", cmp_on:"Comparing ✓", cmp_pill:"⚖️ Compare", cmp_title:"Comparison", cmp_max:"You can compare up to 3 products.", cmp_clear:"Clear",
 r_type:"Type", r_spec:"Specification", r_tasks:"Jobs", r_mats:"Materials", r_level:"Use", r_price:"Price", r_stock:"Availability",
 q_print:"Print / PDF", pr_title:"Quote", pr_date:"Date", pr_total:"Estimated total", pr_tbd:"To be confirmed by an advisor",
 pr_note:"Informational quote subject to availability and price confirmation.", pr_cols:["Ref.","Product","Qty","Price","Availability"],
 install:"📲 Install app"
});

// ---- v10: reseñas, videos, analítica (todo opcional: vacío = no se muestra) ----
const GOOGLE = { placeId: "" };            // ID de lugar de Google para enlaces de reseñas
const TESTIMONIOS = [];                    // {n:"Nombre", r:5, t:{es:"...",en:"..."}} — solo reseñas REALES
const VIDEOS = [];                         // {id:"ID_YOUTUBE", t:{es:"...",en:"..."}}
const ANALYTICS = { goatcounter: "" };     // tu código de GoatCounter (ej. "proelectricos")
const CASOS_DEMO = [{caso:"DEMO-001",estado:"En reparación",actualizado:"2026-11-20",nota:"Caso de demostración"}];

Object.assign(I18N.es,{
 trk_title:"Consulta el estado de tu garantía", trk_sub:"Escribe el número de caso que te entregamos al recibir tu herramienta.",
 trk_ph:"Número de caso (ej. PE-0123)", trk_go:"Consultar", trk_none:"No encontramos ese caso. Revisa el número o escríbenos.", trk_updated:"Actualizado", trk_demo:"Caso de demostración (aún no está conectada la hoja real).",
 trk_states:["Recibida","En revisión","En reparación","Lista","Entregada"], trk_ready:"¡Tu herramienta ya está lista! Puedes pasar a recogerla.", trk_priv:"Solo se consulta con el número de caso; no se muestran datos personales.",
 f_date:"Fecha preferida de visita (opcional)", f_slot:"Jornada", slots:["Cualquiera","Mañana","Tarde"],
 tab_list:"📝 Mi lista", list_title:"Pega tu lista de materiales", list_sub:"Una línea por producto. Ej: «2 amoladoras», «DWE4577-B3 x1», «taladro para pared».",
 list_ph:"2 amoladoras\n1 taladro para pared\nDWE575K-B3 x1", list_go:"Analizar lista", list_add:"Agregar seleccionados a mi cotización", list_none:"Sin coincidencia", list_exact:"Referencia exacta", list_sug:"Sugerencia", list_added:"Agregados ✓", list_empty:"Escribe al menos una línea.",
 notify:"Avísame cuando llegue", share:"Compartir", share_text:"Mira esto en Proelectricos:",
 qr_open:"Código QR", qr_title:"Código QR de la página", qr_print:"Imprimir cartel", qr_poster:"Escanea y cotiza por WhatsApp", qr_err:"No se pudo generar el QR. Revisa tu conexión.",
 rev_title:"Lo que dicen nuestros clientes", rev_see:"Ver reseñas en Google", rev_write:"Déjanos tu reseña", vid_title:"Videos y consejos", vid_play:"Reproducir"
});
Object.assign(I18N.en,{
 trk_title:"Check your warranty status", trk_sub:"Enter the case number we gave you when we received your tool.",
 trk_ph:"Case number (e.g. PE-0123)", trk_go:"Check", trk_none:"We couldn't find that case. Check the number or message us.", trk_updated:"Updated", trk_demo:"Demo case (the real sheet isn't connected yet).",
 trk_states:["Received","Under review","In repair","Ready","Delivered"], trk_ready:"Your tool is ready! You can come pick it up.", trk_priv:"Lookup uses only the case number; no personal data is shown.",
 f_date:"Preferred visit date (optional)", f_slot:"Time of day", slots:["Any","Morning","Afternoon"],
 tab_list:"📝 My list", list_title:"Paste your materials list", list_sub:"One line per product. E.g. \"2 grinders\", \"DWE4577-B3 x1\", \"drill for walls\".",
 list_ph:"2 grinders\n1 drill for walls\nDWE575K-B3 x1", list_go:"Analyze list", list_add:"Add selected to my quote", list_none:"No match", list_exact:"Exact model", list_sug:"Suggestion", list_added:"Added ✓", list_empty:"Write at least one line.",
 notify:"Notify me when it's back", share:"Share", share_text:"Check this out at Proelectricos:",
 qr_open:"QR code", qr_title:"Page QR code", qr_print:"Print poster", qr_poster:"Scan and get a quote on WhatsApp", qr_err:"Couldn't generate the QR. Check your connection.",
 rev_title:"What our customers say", rev_see:"See reviews on Google", rev_write:"Leave us a review", vid_title:"Videos and tips", vid_play:"Play"
});

// ---- v11: PUBLICACIONES (inicio dinámico: aviso superior, carrusel y novedades) ----
// tipo: novedad | promo | aviso | consejo · destacado:true → aparece en el carrusel del inicio
// fecha: se publica desde ese día (puedes programar a futuro) · hasta: se oculta después de esa fecha (opcional)
// Los textos de abajo son EJEMPLOS (ejemplo:true): reemplázalos o bórralos.
const POSTS = [
 {id:"e1",fecha:"2026-11-20",tipo:"novedad",destacado:true,ejemplo:true,ico:"drill",enlace:"",
  titulo:{es:"Ejemplo: llegó nuevo inventario",en:"Example: new stock has arrived"},
  texto:{es:"Texto de ejemplo. Aquí cuentas la novedad real: qué llegó, para qué sirve y cómo cotizarlo por WhatsApp.",en:"Sample text. Describe the real news here: what arrived, what it's for and how to get a quote on WhatsApp."}},
 {id:"e2",fecha:"2026-11-18",tipo:"consejo",destacado:false,ejemplo:true,ico:"grinder",enlace:"",
  titulo:{es:"Ejemplo: consejo para cuidar tu herramienta",en:"Example: tip to care for your tool"},
  texto:{es:"Texto de ejemplo. Usa esta tarjeta para consejos de uso, mantenimiento o seguridad.",en:"Sample text. Use this card for usage, maintenance or safety tips."}},
 {id:"e3",fecha:"2026-11-15",tipo:"aviso",destacado:false,ejemplo:true,ico:"battery",enlace:"",
  titulo:{es:"Ejemplo de aviso: horario especial",en:"Example notice: special hours"},
  texto:{es:"Los avisos aparecen en una barra amarilla arriba de toda la página.",en:"Notices appear in a yellow bar at the top of the page."}}
];
Object.assign(I18N.es,{
 nav_posts:"Novedades", posts_title:"Novedades y publicaciones", posts_sub:"Lo último de Proelectricos: llegadas, consejos y avisos.",
 tipo_novedad:"Novedad", tipo_promo:"Promoción", tipo_aviso:"Aviso", tipo_consejo:"Consejo",
 read_more:"Leer más", read_less:"Leer menos", post_cta:"Más información", post_wa:"Consultar por WhatsApp", more_posts:"Ver más publicaciones",
 example:"Ejemplo", promo_ends:"Termina en"
});
Object.assign(I18N.en,{
 nav_posts:"News", posts_title:"News and posts", posts_sub:"The latest from Proelectricos: arrivals, tips and notices.",
 tipo_novedad:"News", tipo_promo:"Promotion", tipo_aviso:"Notice", tipo_consejo:"Tip",
 read_more:"Read more", read_less:"Read less", post_cta:"More information", post_wa:"Ask on WhatsApp", more_posts:"See more posts",
 example:"Example", promo_ends:"Ends in"
});

// ---- v12: CATEGORÍAS reales del almacén ----
const CATEGORIAS = [
 {id:"lijadora",ico:"sander",n:{es:"Lijadoras",en:"Sanders"},d:{es:"Lijadoras para dar acabado a madera, pintura y superficies planas.",en:"Sanders to finish wood, paint and flat surfaces."}},
 {id:"taladro-inal",ico:"drill",n:{es:"Taladros inalámbricos",en:"Cordless drills"},d:{es:"Taladros y atornilladores a batería para trabajar sin tomacorriente.",en:"Battery drills and drivers to work without an outlet."}},
 {id:"taladro-alam",ico:"drill",n:{es:"Taladros alámbricos",en:"Corded drills"},d:{es:"Taladros con cable: potencia constante para trabajos largos.",en:"Corded drills: steady power for long jobs."}},
 {id:"sierra",ico:"saw",n:{es:"Sierras",en:"Saws"},d:{es:"Sierras para cortar madera y otros materiales.",en:"Saws to cut wood and other materials."}},
 {id:"amoladora",ico:"grinder",n:{es:"Amoladoras y pulidoras",en:"Grinders"},d:{es:"Amoladoras para cortar, desbastar y pulir metal y piedra.",en:"Grinders to cut, grind and polish metal and stone."}},
 {id:"inversor",ico:"inverter",n:{es:"Inversores",en:"Inverters"},d:{es:"Inversores de energía para tener corriente alterna desde una batería.",en:"Power inverters to get AC power from a battery."}},
 {id:"mototool",ico:"mototool",n:{es:"Mototool",en:"Rotary tools (Mototool)"},d:{es:"Mototool para grabar, cortar, pulir y trabajos de detalle.",en:"Rotary tools to engrave, cut, polish and do detail work."}},
 {id:"motor",ico:"motor",n:{es:"Motores",en:"Motors"},d:{es:"Motores eléctricos para máquinas, bombas y ventiladores.",en:"Electric motors for machines, pumps and fans."}},
 {id:"alambre",ico:"wire",n:{es:"Alambre de cobre esmaltado",en:"Enameled copper wire"},d:{es:"Alambre para embobinado, desde calibre 36 hasta 6.",en:"Winding wire, from gauge 36 to 6."}},
 {id:"martillo",ico:"mallet",n:{es:"Martillos y rotomartillos",en:"Hammers and rotary hammers"},d:{es:"Martillos de mano, mazos y rotomartillos para golpear, picar y perforar.",en:"Hand hammers, mallets and rotary hammers to strike, chip and drill."}},
 {id:"seguridad",ico:"safety",n:{es:"Equipo de seguridad",en:"Safety equipment"},d:{es:"Guantes, casco, gafas y más para trabajar protegido.",en:"Gloves, helmets, glasses and more to work protected."}},
 {id:"repuestos",ico:"gear",n:{es:"Repuestos y servicio",en:"Spare parts and service"},d:{es:"Repuestos (inducido, campo, mandril y más) y mantenimiento o arreglo de taladros, rotomartillos, demoledores, sierras y pulidoras.",en:"Spare parts (armature, field, chuck and more) plus maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers."}},
 {id:"otras",ico:"tools",n:{es:"Demás herramienta",en:"More tools"},d:{es:"Herramienta manual y otros equipos del almacén.",en:"Hand tools and other equipment from the store."}}
];

Object.assign(I18N.es,{
 nav_home:"Inicio", nav_catalog:"Catálogo", nav_wty:"Garantías", nav_blog:"Blog",
 view_titles:{inicio:"Inicio",catalogo:"Catálogo",garantias:"Garantías",blog:"Blog",contacto:"Contacto"},
 home_cats_title:"Lo que vendemos", home_cats_sub:"Elige una categoría para ver el catálogo o preguntar por referencias.",
 info_title:"Información importante", info_sub:"Lo esencial para visitarnos, cotizar y atender tu garantía.",
 ic_loc:"Dónde estamos", ic_hours:"Horario", ic_warr:"Garantía autorizada DEWALT", ic_warr_d:"Recibimos y gestionamos tu herramienta aquí, sin viajar a otra ciudad.",
 ic_quote:"Cómo cotizar", ic_quote_d:"Arma tu lista en el catálogo o escríbenos por WhatsApp con la referencia.", ic_go_map:"Cómo llegar", ic_go_warr:"Ver garantías", ic_go_quote:"Ir al catálogo",
 cat_title:"Categorías de productos", cat_sub:"Selecciona una categoría. Si aún no tiene referencias en línea, te asesoramos por WhatsApp.",
 cat_online:"en línea", cat_ask:"Consultar", cat_found:"Sí manejamos:", cat_noonline:"Aún no tenemos referencias cargadas en línea. Pregunta por modelos, precios y disponibilidad.",
 cat_more:"¿No ves tu referencia? Consúltanos y la buscamos.", wire_link:"Ver tabla de calibres", cat_related:"Guías relacionadas",
 sub_products:"Productos", sub_ai:"Asistente y Lens", sub_batt:"Baterías", sub_inv:"Inversores", sub_wire:"Calibres de alambre", sub_faq:"Preguntas",
 wire_title:"Alambre de cobre esmaltado: calibres AWG 36 a 6", wire_sub:"Alambre para embobinado de motores, transformadores y bobinas.",
 wire_calc:"¿Qué calibre necesito?", wire_amps:"Corriente del bobinado (A)", wire_res:"Calibre sugerido", wire_none:"Más de 40 A: usa un conductor mayor o varios en paralelo. Consúltanos.",
 wire_note:"Valores orientativos: diámetro del cobre desnudo (el esmalte suma una capa fina), resistencia a 20 °C y corriente de referencia de 3 A/mm² para bobinado. Depende de la ventilación, el aislamiento y el servicio. Confirma con un asesor.",
 wire_cols:["Calibre AWG","Ø cobre (mm)","Área (mm²)","Ω/km","Corriente ref. (A)","Usos típicos",""], wire_quote:"Cotizar", wire_msg:"Hola, quiero cotizar alambre esmaltado calibre ",
 wire_uses:[{from:36,to:31,t:"Bobinas muy finas: relés, sensores, solenoides pequeños"},{from:30,to:25,t:"Bobinas y transformadores pequeños, relés"},{from:24,to:19,t:"Transformadores y motores pequeños, solenoides"},{from:18,to:13,t:"Motores y transformadores medianos"},{from:12,to:6,t:"Motores y transformadores de mayor potencia"}],
 blog_title:"Blog: ¿qué herramienta uso y para qué?", blog_sub:"Guías cortas para elegir la herramienta correcta según el trabajo.",
 blog_uses_title:"Guía rápida: tarea → herramienta", blog_task:"Tarea", blog_tool:"Herramienta", blog_see:"Ver en catálogo", blog_all:"Todas", blog_read:"Leer guía", blog_min:"min de lectura",
 blog_back:"← Volver al blog", blog_related:"Herramientas relacionadas", blog_ask:"Preguntar por WhatsApp", blog_notfound:"No encontramos esa guía.",
 warr_faq_title:"Preguntas frecuentes de garantía",
 warr_faq:[{q:"¿Cómo sé si mi herramienta tiene garantía?",a:"Depende de las condiciones del fabricante y de la fecha de compra. Trae la herramienta y la factura: la revisamos y te informamos."},{q:"¿Cuánto tarda la revisión?",a:"Varía según el modelo y si hay repuestos. Con tu número de caso puedes ver el estado en esta misma página."},{q:"¿Reciben herramientas de otras marcas?",a:"Escríbenos la marca y el modelo por WhatsApp y te confirmamos si podemos revisarla."}]
});
Object.assign(I18N.en,{
 nav_home:"Home", nav_catalog:"Catalog", nav_wty:"Warranty", nav_blog:"Blog",
 view_titles:{inicio:"Home",catalogo:"Catalog",garantias:"Warranty",blog:"Blog",contacto:"Contact"},
 home_cats_title:"What we sell", home_cats_sub:"Pick a category to see the catalog or ask about models.",
 info_title:"Important information", info_sub:"The essentials to visit us, get a quote and handle your warranty.",
 ic_loc:"Where we are", ic_hours:"Hours", ic_warr:"Authorized DEWALT warranty", ic_warr_d:"We receive and handle your tool here, no need to travel to another city.",
 ic_quote:"How to get a quote", ic_quote_d:"Build your list in the catalog or message us on WhatsApp with the model.", ic_go_map:"Get directions", ic_go_warr:"See warranty", ic_go_quote:"Go to catalog",
 cat_title:"Product categories", cat_sub:"Select a category. If it has no models online yet, we advise you on WhatsApp.",
 cat_online:"online", cat_ask:"Ask us", cat_found:"We carry:", cat_noonline:"We don't have models loaded online yet. Ask about models, prices and availability.",
 cat_more:"Don't see your model? Ask us and we'll find it.", wire_link:"See gauge table", cat_related:"Related guides",
 sub_products:"Products", sub_ai:"Assistant and Lens", sub_batt:"Batteries", sub_inv:"Inverters", sub_wire:"Wire gauges", sub_faq:"FAQ",
 wire_title:"Enameled copper wire: AWG 36 to 6", wire_sub:"Winding wire for motors, transformers and coils.",
 wire_calc:"Which gauge do I need?", wire_amps:"Winding current (A)", wire_res:"Suggested gauge", wire_none:"Over 40 A: use a larger conductor or several in parallel. Ask us.",
 wire_note:"Reference values: bare copper diameter (enamel adds a thin layer), resistance at 20 °C and a reference current of 3 A/mm² for windings. It depends on ventilation, insulation and duty. Confirm with an advisor.",
 wire_cols:["AWG gauge","Copper Ø (mm)","Area (mm²)","Ω/km","Ref. current (A)","Typical uses",""], wire_quote:"Get a quote", wire_msg:"Hello, I want a quote for enameled wire gauge ",
 wire_uses:[{from:36,to:31,t:"Very fine coils: relays, sensors, small solenoids"},{from:30,to:25,t:"Small coils and transformers, relays"},{from:24,to:19,t:"Small transformers and motors, solenoids"},{from:18,to:13,t:"Medium motors and transformers"},{from:12,to:6,t:"Higher-power motors and transformers"}],
 blog_title:"Blog: which tool do I use, and for what?", blog_sub:"Short guides to pick the right tool for the job.",
 blog_uses_title:"Quick guide: task → tool", blog_task:"Task", blog_tool:"Tool", blog_see:"See in catalog", blog_all:"All", blog_read:"Read guide", blog_min:"min read",
 blog_back:"← Back to blog", blog_related:"Related tools", blog_ask:"Ask on WhatsApp", blog_notfound:"We couldn't find that guide.",
 warr_faq_title:"Warranty FAQ",
 warr_faq:[{q:"How do I know if my tool is under warranty?",a:"It depends on the manufacturer's conditions and the purchase date. Bring the tool and the invoice: we inspect it and let you know."},{q:"How long does the review take?",a:"It varies by model and parts availability. With your case number you can check the status on this same page."},{q:"Do you accept tools from other brands?",a:"Message us the brand and model on WhatsApp and we'll confirm whether we can inspect it."}]
});

Object.assign(I18N.es,{
 prod_title:"Catálogo en línea", prod_sub:"Filtra por categoría o escribe lo que necesitas hacer. Cotiza por WhatsApp.",
 pg_cat_t:"Catálogo", pg_cat_d:"Productos por categoría, asistente, Lens, calculadoras y respuestas a tus preguntas.",
 pg_warr_t:"Garantías y servicio técnico", pg_warr_d:"Centro de servicio autorizado DEWALT en Popayán: información, seguimiento de tu caso y solicitud de garantía.",
 pg_blog_t:"Blog", pg_blog_d:"Qué herramienta usar y para qué: lijadoras, taladros, sierras, inversores, motores, alambre y más.",
 pg_contact_t:"Contacto", pg_contact_d:"Visítanos, escríbenos o llámanos por WhatsApp."
});
Object.assign(I18N.en,{
 prod_title:"Online catalog", prod_sub:"Filter by category or type what you need to do. Get a quote on WhatsApp.",
 pg_cat_t:"Catalog", pg_cat_d:"Products by category, assistant, Lens, calculators and answers to your questions.",
 pg_warr_t:"Warranty and service", pg_warr_d:"Authorized DEWALT service center in Popayán: information, case tracking and warranty request.",
 pg_blog_t:"Blog", pg_blog_d:"Which tool to use and for what: sanders, drills, saws, inverters, motors, wire and more.",
 pg_contact_t:"Contact", pg_contact_d:"Visit us, write to us or message us on WhatsApp."
});

// ---- v13: Repuestos y servicio técnico ----
Object.assign(I18N.es,{
 nav_rep:"Repuestos", pg_rep_t:"Repuestos y servicio técnico", pg_rep_d:"Repuestos, mantenimiento y arreglo para taladros, rotomartillos, demoledores, sierras y pulidoras.",
 view_titles:{inicio:"Inicio",catalogo:"Catálogo",repuestos:"Repuestos y servicio",garantias:"Garantías",blog:"Blog",contacto:"Contacto"},
 rep_serv_title:"Qué hacemos", rep_serv_sub:"Vendemos repuestos y damos mantenimiento y arreglo a tu herramienta eléctrica.",
 rep_services:[{i:"⚙️",t:"Repuestos",d:"Inducido, campo, mandril, carbones, rodamientos y más para taladro, rotomartillo, demoledor, sierra y pulidora."},{i:"🧰",t:"Mantenimiento",d:"Limpieza, revisión y cambio de piezas de desgaste para que tu herramienta rinda más tiempo."},{i:"🔧",t:"Arreglo y reparación",d:"Diagnosticamos la falla y cambiamos la pieza dañada. Consulta tiempos y costos por WhatsApp."},{i:"📞",t:"Asesoría",d:"¿No sabes qué pieza necesitas? Cuéntanos los síntomas o envíanos una foto."}],
 rep_find_title:"¿Qué repuesto necesitas?", rep_find_sub:"Elige tu herramienta y marca las piezas que buscas. La disponibilidad se confirma por modelo.",
 rep_signs:"Señales", rep_need:"Lo necesito", rep_selected:"Seleccionado ✓",
 rep_form_title:"Solicitud de repuesto o servicio", rep_form_sub:"Llena los datos y envíalos por WhatsApp o correo. Si ya dejaste tu herramienta, consulta tu caso en Garantías.",
 rep_f_tool:"Herramienta", rep_f_type:"¿Qué necesitas?", rep_types:["Repuesto","Mantenimiento","Arreglo / reparación"], rep_f_brand:"Marca", rep_f_model:"Modelo", rep_f_parts:"Repuestos seleccionados", rep_f_issue:"Detalle o falla",
 rep_photo:"Después de enviar, mándanos por WhatsApp una foto de la pieza y de la placa de la herramienta.", rep_msg_head:"Solicitud de repuesto/servicio",
 rep_err:"Completa nombre y teléfono, marca un repuesto o describe la falla, y acepta la política de datos.",
 rep_faq:[{q:"¿Cómo sé qué repuesto necesito?",a:"Elige tu herramienta arriba y revisa las señales de cada pieza. Si no estás seguro, trae la herramienta o envíanos una foto y los síntomas."},{q:"¿Trabajan con todas las marcas?",a:"Escríbenos la marca y el modelo por WhatsApp y te confirmamos si tenemos el repuesto o podemos arreglarla."},{q:"¿Venden la pieza sola o también la instalan?",a:"Ambas opciones: puedes comprar el repuesto o dejarnos la herramienta para el arreglo. Consulta costos y tiempos por WhatsApp."}],
 rep_home_title:"Repuestos y servicio técnico", rep_home_text:"Vendemos repuestos (inducido, campo, mandril y más) y damos mantenimiento y arreglo a taladros, rotomartillos, demoledores, sierras y pulidoras.", rep_home_cta:"Ver repuestos",
 rep_slide:{t:"Repuestos y servicio técnico",d:"Inducido, campo, mandril y más. Mantenimiento y arreglo para tu herramienta.",cta:"Ver repuestos",href:"#repuestos",ico:"armature"}
});
Object.assign(I18N.en,{
 nav_rep:"Parts", pg_rep_t:"Spare parts and service", pg_rep_d:"Spare parts, maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers.",
 view_titles:{inicio:"Home",catalogo:"Catalog",repuestos:"Spare parts and service",garantias:"Warranty",blog:"Blog",contacto:"Contact"},
 rep_serv_title:"What we do", rep_serv_sub:"We sell spare parts and provide maintenance and repair for your power tools.",
 rep_services:[{i:"⚙️",t:"Spare parts",d:"Armature, field, chuck, brushes, bearings and more for drills, rotary hammers, demolition hammers, saws and polishers."},{i:"🧰",t:"Maintenance",d:"Cleaning, inspection and replacement of wear parts so your tool lasts longer."},{i:"🔧",t:"Repair",d:"We diagnose the fault and replace the damaged part. Ask for times and costs on WhatsApp."},{i:"📞",t:"Advice",d:"Not sure which part you need? Tell us the symptoms or send a photo."}],
 rep_find_title:"Which part do you need?", rep_find_sub:"Pick your tool and mark the parts you're after. Availability is confirmed by model.",
 rep_signs:"Signs", rep_need:"I need it", rep_selected:"Selected ✓",
 rep_form_title:"Spare part or service request", rep_form_sub:"Fill in the details and send them via WhatsApp or email. If you already left your tool, check your case under Warranty.",
 rep_f_tool:"Tool", rep_f_type:"What do you need?", rep_types:["Spare part","Maintenance","Repair"], rep_f_brand:"Brand", rep_f_model:"Model", rep_f_parts:"Selected parts", rep_f_issue:"Details or fault",
 rep_photo:"After sending, message us on WhatsApp a photo of the part and the tool's rating plate.", rep_msg_head:"Spare part/service request",
 rep_err:"Fill in name and phone, mark a part or describe the fault, and accept the data policy.",
 rep_faq:[{q:"How do I know which part I need?",a:"Pick your tool above and check each part's signs. If you're unsure, bring the tool or send us a photo and the symptoms."},{q:"Do you work with all brands?",a:"Message us the brand and model on WhatsApp and we'll confirm whether we have the part or can repair it."},{q:"Do you sell the part alone or also install it?",a:"Both: you can buy the part or leave the tool with us for repair. Ask for costs and times on WhatsApp."}],
 rep_home_title:"Spare parts and repair service", rep_home_text:"We sell spare parts (armature, field, chuck and more) and provide maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers.", rep_home_cta:"See spare parts",
 rep_slide:{t:"Spare parts and repair service",d:"Armature, field, chuck and more. Maintenance and repair for your tool.",cta:"See spare parts",href:"#repuestos",ico:"armature"}
});
I18N.es.slides.splice(3,0,I18N.es.rep_slide); I18N.en.slides.splice(3,0,I18N.en.rep_slide);
I18N.es.faq.splice(1,0,{k:["repuesto","inducido","mandril","carbones","rodamiento","estator","armadura","mantenimiento","arreglar","arreglo"],r:"Vendemos repuestos (inducido, campo, mandril y más) y damos mantenimiento y arreglo a taladros, rotomartillos, demoledores, sierras y pulidoras. Mira la sección Repuestos o escríbenos con la marca y el modelo."});
I18N.en.faq.splice(1,0,{k:["spare","armature","chuck","stator","bearing","maintenance","brushes"],r:"We sell spare parts (armature, field, chuck and more) and provide maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers. See the Spare parts section or message us with the brand and model."});

// ---- v14: blog que recomienda ----
Object.assign(I18N.es,{
 blog_title:"Guías y proyectos", blog_sub:"Aprende, elige bien y empieza tu próximo trabajo con las herramientas correctas.",
 blog_feat:"Guía destacada", blog_recs_title:"Recomendados por Proelectricos", blog_recs_sub:"Herramientas que sugerimos según el tipo de trabajo.", blog_for:"Ideal para",
 blog_kits_title:"Kits sugeridos", blog_kits_sub:"Armados para empezar un trabajo sin olvidar nada. Agrégalos a tu cotización o pídelos por WhatsApp.",
 kit_items:"Incluye", kit_add:"Agregar a mi cotización", kit_wa:"Cotizar kit por WhatsApp", kit_total:"Total estimado de las referencias en línea", kit_head:"Hola, quiero cotizar este kit: ",
 blog_guides_title:"Guías y proyectos", blog_type_all:"Todos", tipo_guia:"Guía", tipo_compra:"Guía de compra", tipo_proyecto:"Proyecto",
 blog_kit_title:"Kit recomendado para este trabajo", blog_more:"Más guías para ti", home_recs_title:"Recomendados por Proelectricos", home_recs_sub:"Herramientas que sugerimos según tu trabajo.", home_recs_cta:"Ver todas las guías y kits"
});
Object.assign(I18N.en,{
 blog_title:"Guides and projects", blog_sub:"Learn, choose well and start your next job with the right tools.",
 blog_feat:"Featured guide", blog_recs_title:"Recommended by Proelectricos", blog_recs_sub:"Tools we suggest depending on the type of job.", blog_for:"Ideal for",
 blog_kits_title:"Suggested kits", blog_kits_sub:"Put together to start a job without forgetting anything. Add them to your quote or ask on WhatsApp.",
 kit_items:"Includes", kit_add:"Add to my quote", kit_wa:"Get a kit quote on WhatsApp", kit_total:"Estimated total of the online models", kit_head:"Hello, I'd like a quote for this kit: ",
 blog_guides_title:"Guides and projects", blog_type_all:"All", tipo_guia:"Guide", tipo_compra:"Buying guide", tipo_proyecto:"Project",
 blog_kit_title:"Recommended kit for this job", blog_more:"More guides for you", home_recs_title:"Recommended by Proelectricos", home_recs_sub:"Tools we suggest for your job.", home_recs_cta:"See all guides and kits"
});
I18N.es.faq.splice(2,0,{k:["kits sugeridos","que comprar","guia de compra","primer taladro","primera herramienta","recomendados"],r:"En la sección Blog tienes recomendados, kits sugeridos, guías de compra y proyectos paso a paso para elegir bien. También puedes escribirnos qué trabajo vas a hacer y te asesoramos."});
I18N.en.faq.splice(2,0,{k:["suggested kits","what to buy","buying guide","first drill","first tool","recommended"],r:"The Blog section has recommended tools, suggested kits, buying guides and step-by-step projects to help you choose well. You can also tell us what job you'll do and we'll advise you."});

// ---- v15: SEO ----
Object.assign(I18N.es,{
 seo_h1:"Proelectricos Popayán: herramienta eléctrica, inversores, repuestos y servicio técnico DEWALT",
 ft_guides:"Guías", ft_guides_all:"Ver todas las guías",
 view_descs:{inicio:"Herramienta eléctrica DEWALT, inversores, repuestos y centro de servicio autorizado en Popayán. Calle 4 #21C-14.",catalogo:"Catálogo de herramienta eléctrica, inversores, lijadoras, taladros, sierras, Mototool, motores, alambre esmaltado y equipo de seguridad en Popayán.",repuestos:"Repuestos (inducido, campo, mandril, carbones) y mantenimiento y arreglo para taladros, rotomartillos, demoledores, sierras y pulidoras.",garantias:"Centro de servicio autorizado DEWALT en Popayán: información de garantía, seguimiento de tu caso y solicitud de servicio.",blog:"Guías de compra, proyectos y consejos: qué herramienta usar y para qué. Kits recomendados por Proelectricos.",contacto:"Visita Proelectricos en la Calle 4 #21C-14, Popayán, o escríbenos por WhatsApp y correo."}
});
Object.assign(I18N.en,{
 seo_h1:"Proelectricos Popayán: power tools, inverters, spare parts and authorized DEWALT service",
 ft_guides:"Guides", ft_guides_all:"See all guides",
 view_descs:{inicio:"DEWALT power tools, inverters, spare parts and authorized service center in Popayán, Colombia. Calle 4 #21C-14.",catalogo:"Catalog of power tools, inverters, sanders, drills, saws, rotary tools, motors, enameled wire and safety equipment in Popayán.",repuestos:"Spare parts (armature, field, chuck, brushes) and maintenance and repair for drills, rotary hammers, demolition hammers, saws and polishers.",garantias:"Authorized DEWALT service center in Popayán: warranty information, case tracking and service request.",blog:"Buying guides, projects and tips: which tool to use and for what. Kits recommended by Proelectricos.",contacto:"Visit Proelectricos at Calle 4 #21C-14, Popayán, or message us on WhatsApp and email."}
});
