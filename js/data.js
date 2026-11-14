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
 {s:"DCD806D2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd806d2-b3/kit-de-taladro-atornilladorpercutor-12-13mm-sin-carbones-20v-max-xr",c:"drill",ico:"drill",es:"Kit taladro/percutor 1/2\" 20V MAX* XR sin carbones",en:"1/2\" 20V MAX* XR brushless drill/hammer kit"},
 {s:"DCD706F2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd706f2-b3/kit-de-taladro-percutoratornillador-inalambrico-de-38-10mm-12v-max",c:"drill",ico:"drill",es:"Kit taladro percutor/atornillador 3/8\" 12V MAX*",en:"3/8\" 12V MAX* hammer drill/driver kit"},
 {s:"DCD701F2-B3",u:"https://www.dewalt.com.co/es-co/producto/dcd701f2-b3/kit-de-taladroatornillador-de-38-10mm-inalambrico-12v-max",c:"drill",ico:"drill",es:"Kit taladro/atornillador 3/8\" inalámbrico 12V MAX*",en:"3/8\" 12V MAX* cordless drill/driver kit"},
 {s:"DWE4577-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe4577-b3/esmeriladora-angular-7-180mm-2700w",c:"grinder",ico:"grinder",es:"Esmeriladora angular 7\" (180mm) 2700W",en:"7\" (180mm) angle grinder 2700W"},
 {s:"DWE4314-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe4314-b3/esmeriladora-angular-de-4-12-115mm-5-125mm-1500w",c:"grinder",ico:"grinder",es:"Esmeriladora angular 4-1/2\"–5\" 1500W",en:"4-1/2\"–5\" angle grinder 1500W"},
 {s:"DWE575K-B3",u:"https://www.dewalt.com.co/es-co/producto/dwe575k-b3/kit-de-sierra-circular-electrica-de-7-14-185mm-de-1800w",c:"saw",ico:"saw",es:"Kit sierra circular 7-1/4\" (185mm) 1800W",en:"7-1/4\" (185mm) circular saw kit 1800W"},
 {s:"D25481K-B3",u:"https://www.dewalt.com.co/es-co/producto/d25481k-b3/kit-de-rotomartillo-combinado-sds-max-de-1-916-40mm-de-61j",c:"hammer",ico:"hammer",es:"Kit rotomartillo combinado SDS MAX 1-9/16\" 6.1J",en:"SDS MAX combination rotary hammer kit 1-9/16\" 6.1J"},
 {s:"D25960K-B3",u:"https://www.dewalt.com.co/es-co/producto/d25960k-b3/kit-de-martillo-demoledor-hexagonal-en-linea-de-1-18-de-40-lbs",c:"hammer",ico:"hammer",es:"Kit martillo demoledor hexagonal 1-1/8\" 40 lb",en:"1-1/8\" hex demolition hammer kit 40 lb"}
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
