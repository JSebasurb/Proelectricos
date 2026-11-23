// LISTA DE MATERIALES: convierte texto libre ("2 amoladoras", "DWE4577-B3 x1") en productos del catálogo.
function parseList(text,lang){
  return text.split(/\r?\n|;/).map(l=>l.trim()).filter(Boolean).map(line=>{
    let qty=1, desc=line, m;
    if((m=line.match(/^(\d{1,3})\s*(?:x|×|und?\.?|unidades?|pzs?|piezas?)?\s+(.+)$/i))){ qty=+m[1]; desc=m[2]; }
    else if((m=line.match(/^(.+?)\s*[x×]\s*(\d{1,3})$/i))){ desc=m[1]; qty=+m[2]; }
    let hit=matchSkus(desc)[0], conf="exact";
    if(!hit){ hit=smartSearch(desc,lang)[0]; conf=hit?"suggested":"none"; }
    return {line,qty,sku:hit?hit.s:null,conf};
  });
}
