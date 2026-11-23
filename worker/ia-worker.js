// Servidor mínimo (Cloudflare Workers) para el asistente con IA real. SIN PROBAR: revísalo antes de usarlo.
// 1) Crea un Worker, pega este código. 2) Agrega el secreto ANTHROPIC_API_KEY (Settings > Variables).
// 3) Pon la URL del Worker en INV_CONF.endpoint (js/data.js). La clave NUNCA va en la página.
const ALLOWED_ORIGIN = "https://TU-USUARIO.github.io"; // cambia por tu dominio
const MODEL = "claude-haiku-5-5";
export default {
  async fetch(req, env){
    const cors = {"Access-Control-Allow-Origin":ALLOWED_ORIGIN,"Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST,OPTIONS"};
    if(req.method==="OPTIONS") return new Response(null,{headers:cors});
    if(req.method!=="POST") return new Response("Method not allowed",{status:405,headers:cors});
    const {question,lang,catalog,updated} = await req.json();
    if(!question || question.length>500) return new Response("Bad request",{status:400,headers:cors});
    const system = `Eres el asistente de Proelectricos (ferretería y centro de servicio autorizado DEWALT en Popayán, Colombia). Responde en ${lang==="en"?"English":"español"}, breve y amable. Usa SOLO este catálogo: ${JSON.stringify(catalog)} (actualizado: ${updated||"desconocido"}). Si precio o stock es null, di que un asesor lo confirma por WhatsApp. Nunca inventes precios, existencias, promociones ni políticas de garantía.`;
    const r = await fetch("https://api.anthropic.com/v1/messages",{method:"POST",
      headers:{"x-api-key":env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01","content-type":"application/json"},
      body:JSON.stringify({model:MODEL,max_tokens:400,system,messages:[{role:"user",content:question}]})});
    if(!r.ok) return new Response("Upstream error",{status:502,headers:cors});
    const j = await r.json();
    return new Response(JSON.stringify({answer:j.content?.[0]?.text||""}),{headers:{...cors,"Content-Type":"application/json"}});
  }
};
