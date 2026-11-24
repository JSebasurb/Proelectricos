// BÚSQUEDA INTELIGENTE (sin servidor): entiende tareas ("cortar baldosa"), sinónimos ES/EN y errores de tipeo.
const TAGS = {
 "taladro-inal":"taladro taladrar perforar atornillar tornillo tornillos destornillador madera metal pared drywall mueble muebles ensamblar instalar inalambrico bateria drill drilling screw screws driver wood wall furniture cordless battery",
 amoladora:"amoladora esmeriladora pulidora esmerilar amolar pulir desbastar cortar corte disco metal baldosa ceramica piedra oxido grinder grinding polish cut cutting disc metal tile stone rust",
 sierra:"sierra circular cortar corte madera tabla tablas carpinteria techo construccion triplex saw cut cutting wood board carpentry roof plywood",
 martillo:"rotomartillo martillo concreto cemento perforar demoler demolicion picar romper cincel piso pared escombro sds pesado hammer concrete cement drill demolish demolition break chisel floor wall heavy",
 "DCD806D2-B3":"profesional obra pesado sin carbones brushless 20v xr potente professional jobsite heavy brushless powerful",
 "DCD706F2-B3":"12v liviano compacto acabados espacios reducidos percutor ligero lightweight compact tight spaces hammer",
 "DCD701F2-B3":"12v liviano compacto acabados espacios reducidos hogar casa ligero lightweight compact home",
 "DWE4577-B3":"7 pulgadas grande concreto bloque pesado 2700w large big block heavy",
 "DWE4314-B3":"4-1/2 uso general pequena taller 1500w general small workshop",
 "DWE575K-B3":"7-1/4 1800w kit cable electrica corded",
 "D25481K-B3":"sds max combinado perforar concreto grueso combination thick",
 "D25960K-B3":"demoledor demoler picar romper piso losa 40 libras demolition breaker slab"
};
const STOP = new Set("para de del un una unos unas algo quiero necesito busco como el la los las con que y o en por mi me hacer usar for to a an the i need want something with and or of in my use do how".split(" "));
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\-\/ ]/g," ");
const stem = w => w.length>4 ? w.slice(0,4) : w;
function lev1(a,b){ // ¿distancia de edición ≤ 1?
  if(Math.abs(a.length-b.length)>1) return false;
  let i=0,j=0,d=0;
  while(i<a.length&&j<b.length){
    if(a[i]===b[j]){i++;j++;continue}
    if(++d>1) return false;
    if(a.length>b.length) i++; else if(a.length<b.length) j++; else {i++;j++}
  }
  return d+(a.length-i)+(b.length-j)<=1;
}
function smartSearch(query, lang){
  const toks = norm(query).split(/\s+/).filter(t=>t&&!STOP.has(t));
  if(!toks.length) return [];
  const sku = norm(query).replace(/\s/g,"");
  return PRODUCTOS.map(p=>{
    const words = norm((TAGS[p.c]||"")+" "+(TAGS[p.s]||"")+" "+p.es+" "+p.en).split(/\s+/).filter(Boolean);
    const stems = new Set(words.map(stem));
    const spec = new Set(norm(TAGS[p.s]||"").split(/\s+/).filter(Boolean).map(stem)); // etiquetas propias del modelo pesan más
    let score = 0, hits = 0;
    if(sku.length>=3 && norm(p.s).replace(/\s/g,"").includes(sku)) score += 10;
    toks.forEach(t=>{
      let s=0;
      if(words.includes(t)) s=3;
      else if(stems.has(stem(t))) s=2;
      else if(t.length>=5 && !/\d/.test(t) && words.some(w=>w.length>=5&&lev1(t,w))) s=1.5;
      if(s){ if(spec.has(stem(t))) s+=1; score+=s; hits++; }
    });
    if(hits>1) score += hits*0.5; // premia cubrir más palabras
    return {p,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.p);
}

Object.assign(TAGS,{
 repuestos:"repuesto repuestos pieza piezas inducido armadura rotor campo estator mandril portabrocas carbones escobillas rodamiento rodamientos balero engranaje piñon mantenimiento reparacion arreglo arreglar taller spare spares parts armature stator chuck brushes bearing gear maintenance repair service",
 "taladro-alam":"taladro alambrico alambricos cable electrico corded drill percutor concreto perforar",
 lijadora:"lijadora lijadoras lijar lija orbital banda disco acabado superficie madera pintura pulir sander sanding sandpaper finish wood paint",
 inversor:"inversor inversores soldador soldadores soldadora soldadoras soldar soldadura electrodo electrodos arco tig mma varilla careta welder welders welding inverter electrode arc stick",
 mototool:"mototool moto tool dremel minitorno grabar tallar pulir cortar afilar detalle rotary engrave carve polish sharpen",
 motor:"motor motores electrico monofasico trifasico hp rebobinar bobinado ventilador bomba electric motor rewind",
 alambre:"alambre cobre esmaltado embobinado bobinar bobina calibre awg transformador magnet wire enameled copper winding coil gauge",
 seguridad:"seguridad guantes casco gafas proteccion epp tapabocas mascarilla auditiva calzado safety gloves helmet goggles protection mask earmuffs",
 otras:"herramienta herramientas manual llave destornillador alicate tools hand wrench screwdriver pliers"
});
TAGS.martillo += " martillo mazo clavar golpear hammer mallet nails";
// Búsqueda por categoría: sirve aunque aún no haya productos cargados en esa categoría
function searchCats(query){
  const toks=norm(query).split(/\s+/).filter(t=>t&&!STOP.has(t)); if(!toks.length) return [];
  return CATEGORIAS.map(c=>{
    const words=norm((TAGS[c.id]||"")+" "+c.n.es+" "+c.n.en).split(/\s+/).filter(Boolean), stems=new Set(words.map(stem));
    let score=0; toks.forEach(t=>{ if(words.includes(t)) score+=3; else if(stems.has(stem(t))) score+=2; else if(t.length>=5&&!/\d/.test(t)&&words.some(w=>w.length>=5&&lev1(t,w))) score+=1.5; });
    return {c,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.c);
}
