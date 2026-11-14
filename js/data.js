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
