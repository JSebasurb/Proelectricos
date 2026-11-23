// GUÍA "¿Qué necesito?": puntúa cada producto según trabajo, material y frecuencia de uso.
const attr = s => ATTR[s] || {type:"",spec:{es:"—",en:"—"},tasks:[],mats:[],level:"both"};
function recommend({task,mat,use}){
  return PRODUCTOS.map(p=>{
    const a=attr(p.s); if(!a.tasks.includes(task)) return null;   // el trabajo es obligatorio
    if(mat && !a.mats.includes(mat)) return null;                     // el material también debe ser compatible
    let score = a.tasks[0]===task ? 3 : 2;
    const mats = mat ? [mat] : [];
    if(mats.length) score += 2 + 0.5/a.mats.length;                  // desempata a favor del especialista
    if(use && (a.level===use || a.level==="both")) score += 1;
    return {s:p.s,score,task,mats};
  }).filter(Boolean).sort((x,y)=>y.score-x.score).slice(0,3);
}
