let l="es"; try{l=localStorage.getItem("lang")==="en"?"en":"es"}catch(_){}
function setL(x){ document.documentElement.lang=x; document.querySelectorAll("[data-l]").forEach(e=>e.hidden=e.dataset.l!==x);
 document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===x)); try{localStorage.setItem("lang",x)}catch(_){} }
document.querySelector(".lang").onclick=e=>{ if(e.target.dataset.lang) setL(e.target.dataset.lang) };
setL(l);
