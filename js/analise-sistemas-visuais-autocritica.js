(() => {
  'use strict';
  const stage = Number(document.body.dataset.stage ?? -1);
  const visualByTitle = title => [...document.querySelectorAll('.visual[data-diagram-title]')].find(v => v.dataset.diagramTitle === title);

  if(stage === 4){
    const dfd = visualByTitle('DFD Nível 0 — circulação dos dados')?.querySelector('svg');
    if(dfd){
      const flowGroup = [...dfd.querySelectorAll('g')].find(g => g.getAttribute('marker-end') === 'url(#dfd-arr)' || g.querySelector('path[marker-end="url(#dfd-arr)"]')) || [...dfd.querySelectorAll('g')].find(g => g.getAttribute('stroke') === '#334155' && g.querySelectorAll('path').length > 10);
      const paths = flowGroup ? [...flowGroup.querySelectorAll('path')] : [];
      if(paths[4]) paths[4].setAttribute('d','M1010 278 C825 315 610 340 438 375');
      if(paths[7]) paths[7].remove();

      const labels=[...dfd.querySelectorAll('text')];
      const findLabel=text=>labels.find(el=>el.textContent.trim()===text);
      const order=findLabel('ordem para diagnóstico');
      if(order){order.setAttribute('x','700');order.setAttribute('y','330');}
      const diag=findLabel('diagnóstico / teste');
      if(diag) diag.textContent='diagnóstico';
      const repair=findLabel('reparo / teste / entrega');
      if(repair) repair.textContent='reparo / teste';
    }
  }

  if(stage === 5){
    const bpmn=visualByTitle('BPMN TO-BE — colaboração e responsabilidades')?.querySelector('svg');
    if(bpmn){
      const seqGroup=[...bpmn.querySelectorAll('g')].find(g=>g.getAttribute('stroke')==='#334155' && g.querySelectorAll('path').length>=10);
      const paths=seqGroup?[...seqGroup.querySelectorAll('path')]:[];
      if(paths[10]) paths[10].setAttribute('d','M1515 353 H1540 V95 H1487');
      const sim=[...bpmn.querySelectorAll('text')].find(el=>el.textContent.trim()==='Sim' && Number(el.getAttribute('x'))>1450);
      if(sim){sim.setAttribute('x','1520');sim.setAttribute('y','330');}
    }
  }

  if(stage === 7){
    const useCase=visualByTitle('Casos de Uso — objetivos dos atores')?.querySelector('svg');
    if(useCase){
      const ellipse=[...useCase.querySelectorAll('ellipse')].find(el=>el.getAttribute('cx')==='625' && el.getAttribute('cy')==='390');
      if(ellipse) ellipse.setAttribute('cx','440');
      const label=[...useCase.querySelectorAll('text')].find(el=>el.textContent.trim()==='Registrar decisão');
      if(label) label.setAttribute('x','440');
      const association=[...useCase.querySelectorAll('line')].find(el=>el.getAttribute('x1')==='135' && el.getAttribute('y1')==='245');
      if(association){association.setAttribute('x2','335');association.setAttribute('y2','390');}
    }
  }

  if(stage === 8){
    const domain=visualByTitle('Modelo de Domínio — conceitos e relações')?.querySelector('svg');
    if(domain){
      const relationLines=[...domain.querySelectorAll('line')];
      const old=relationLines.find(el=>el.getAttribute('x1')==='765' && el.getAttribute('y1')==='355');
      if(old){
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d','M815 110 H930 V505 H860');
        path.setAttribute('fill','none');
        path.setAttribute('stroke','#334155');
        path.setAttribute('stroke-width','2');
        old.replaceWith(path);
      }
      const labels=[...domain.querySelectorAll('text')];
      const relation=labels.find(el=>el.textContent.trim()==='detalha peças');
      if(relation){relation.textContent='possui itens de peça';relation.setAttribute('x','925');relation.setAttribute('y','300');}
      const one=labels.find(el=>el.textContent.trim()==='1' && el.getAttribute('x')==='775' && el.getAttribute('y')==='385');
      if(one){one.setAttribute('x','830');one.setAttribute('y','100');}
      const many=labels.find(el=>el.textContent.trim()==='0..*' && el.getAttribute('x')==='775' && el.getAttribute('y')==='460');
      if(many){many.setAttribute('x','875');many.setAttribute('y','495');}
    }

    const states=visualByTitle('Diagrama de Estados — ciclo de vida da ordem')?.querySelector('svg');
    if(states){
      const flowGroup=[...states.querySelectorAll('g')].find(g=>g.getAttribute('stroke')==='#334155' && g.querySelectorAll('path').length>=8);
      const paths=flowGroup?[...flowGroup.querySelectorAll('path')]:[];
      const wrong=paths.find(p=>p.getAttribute('d')?.startsWith('M920 330'));
      if(wrong) wrong.setAttribute('d','M910 125 C885 190 850 190 830 155');
      const fail=[...states.querySelectorAll('text')].find(el=>el.textContent.trim()==='teste falha');
      if(fail){fail.setAttribute('x','865');fail.setAttribute('y','205');}
    }
  }

  window.dispatchEvent(new CustomEvent('mbb:visuais-autocritica-prontos',{detail:{stage}}));

  if(!window.__MBB_VISUALIZADOR_SITE__ && !document.querySelector('script[data-mbb-visualizador-site]')){
    const script=document.createElement('script');
    script.src='/js/mbb-visualizador-site.js?v=20260927-1';
    script.dataset.mbbVisualizadorSite='1';
    document.body.appendChild(script);
  }
})();
