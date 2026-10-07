document.addEventListener("DOMContentLoaded",()=>{
  const blocos=[...document.querySelectorAll("pre.terminal")];

  function copiarTexto(texto,botao){
    const concluir=()=>{
      const original=botao.dataset.labelOriginal||"Copiar";
      botao.textContent="Copiado ✓";
      botao.classList.add("copiado");
      window.setTimeout(()=>{
        botao.textContent=original;
        botao.classList.remove("copiado");
      },1400);
    };

    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(texto).then(concluir).catch(()=>copiarFallback(texto,concluir));
    }else{
      copiarFallback(texto,concluir);
    }
  }

  function copiarFallback(texto,callback){
    const area=document.createElement("textarea");
    area.value=texto;
    area.setAttribute("readonly","");
    area.style.position="fixed";
    area.style.opacity="0";
    document.body.appendChild(area);
    area.select();
    try{document.execCommand("copy");callback();}catch(_e){}
    area.remove();
  }

  blocos.forEach(pre=>{
    const comando=(pre.textContent||"").trim();
    if(!/^git\s/i.test(comando)) return;
    if(pre.closest(".terminal-shell")) return;

    const shell=document.createElement("div");
    shell.className="terminal-shell";

    const botao=document.createElement("button");
    botao.type="button";
    botao.className="terminal-copy";
    botao.textContent="Copiar";
    botao.dataset.labelOriginal="Copiar";
    botao.setAttribute("aria-label","Copiar comando para a área de transferência");

    pre.parentNode.insertBefore(shell,pre);
    shell.appendChild(botao);
    shell.appendChild(pre);

    botao.addEventListener("click",()=>copiarTexto(comando,botao));
  });
});
