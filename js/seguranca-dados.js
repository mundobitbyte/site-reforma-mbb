(() => {
  const stages = [
    ['0','Por que precisamos proteger a informação?','00-por-que-proteger-informacao.html',true],
    ['1','O que, de fato, precisa ser protegido?','01-o-que-proteger.html',true],
    ['2','O que pode dar errado — e por quê?','02-o-que-pode-dar-errado.html',true],
    ['3','Quando o ataque tenta convencer uma pessoa','03-engenharia-social.html',true],
    ['4','Quem pode entrar — e o que pode fazer?','04-quem-pode-entrar.html',true],
    ['5','Como saber se um arquivo foi alterado?','05-hash-integridade.html',true],
    ['6','Como impedir que outra pessoa leia nossos dados?','06-criptografia.html',true],
    ['7','Como proteger uma informação enquanto ela viaja pela Internet?','07-https-certificados.html',true],
    ['8','Como esconder que uma informação existe? · Aprofundamento','08-esteganografia.html',true],
    ['9','Quando aquilo que digitamos vira parte de um comando','09-sql-injection.html',true],
    ['10','Se os dados forem perdidos, conseguimos recuperá-los?','10-backup-recuperacao.html',true],
    ['11','E se o servidor parar?','11-redundancia-disponibilidade.html',true],
    ['12','Quando o problema está no computador, na rede ou no ambiente físico','12-computador-rede-ambiente.html',true],
    ['13','Como descobrir o que aconteceu?','13-logs-monitoramento.html',true],
    ['14','Encontramos um incidente. O que fazemos agora?','14-resposta-incidente.html',true],
    ['15','Como transformar todos esses cuidados em regras da empresa?','15-politica-seguranca.html',true],
    ['16','Projeto final — Protegendo a empresa','16-projeto-final.html',true]
  ];
  const nav=document.querySelector('#courseNav');
  const current=document.body.dataset.stage??'';
  if(nav){
    const collapse=document.createElement('button');
    collapse.className='desktop-nav-collapse'; collapse.type='button'; collapse.textContent='← Recolher menu';
    collapse.addEventListener('click',()=>{const c=document.body.classList.toggle('nav-collapsed'); collapse.textContent=c?'→':'← Recolher menu';});
    nav.appendChild(collapse);
    const intro=document.createElement('a'); intro.className='nav-project'; intro.href='index.html'; intro.innerHTML='<strong>Conecta Serviços</strong><span>Uma pequena empresa que vai amadurecer sua segurança ao longo do módulo.</span>'; nav.appendChild(intro);
    const title=document.createElement('div'); title.className='nav-group-title'; title.textContent='Etapas'; nav.appendChild(title);
    stages.forEach(([number,label,href,available])=>{const item=document.createElement(available?'a':'span'); item.className=`stage-link${number===current?' active':''}${available?'':' future'}`; if(available)item.href=href; item.innerHTML=`<span class="stage-number">${number}</span><span>${label}</span>`; nav.appendChild(item);});
  }
  if(current!==''){
    const position=Number(current)+1,total=stages.length,text=document.querySelector('#progressText'),bar=document.querySelector('#progressBar');
    if(text)text.textContent=`Etapa ${current} de ${total-1}`;
    if(bar)bar.style.width=`${(position/total)*100}%`;
  }
  const toggle=document.querySelector('#menuToggle');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open'); toggle.setAttribute('aria-expanded',String(open));});
    nav.addEventListener('click',event=>{if(event.target.closest('a')&&window.innerWidth<=820){document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded','false');}});
  }
})();
