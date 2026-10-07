(() => {
  'use strict';
  const data=window.DSMathGeneratorData;if(!data)return;
  const {G,R,P,F,BR}=data;
  const bags=window.__DSMathVarietyBags||(window.__DSMathVarietyBags={});
  const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;};
  const families=level=>level<=1?[0,1,2]:level===2?[0,1,2,3]:level===3?[1,2,3,4]:[0,2,3,4];
  const fam=(topic,level)=>{const k=topic+'|'+level;if(!bags[k]||!bags[k].length)bags[k]=shuffle(families(level));return bags[k].pop();};
  const num=(q,h,s,a,k,t=0)=>({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const mc=(q,h,s,answer,labels,k)=>({kind:'mc',question:q,hint:h,solution:s,answer,options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label})),key:k});
  const open=(q,h,s,k)=>({question:q,hint:h,solution:s,key:k});
  G.tangente=function(level){
    const f=fam('tangente',level);
    if(f===0){const run=R(4,12),rise=R(1,Math.max(1,Math.floor(run/2))),ratio=rise/run;return num(`Uma rampa sobe ${rise} m enquanto avança ${run} m na horizontal. Qual é sua inclinação percentual?`,'Faça subida ÷ avanço e multiplique por 100.',`${rise}/${run}=${F(ratio)}. Em porcentagem: ${F(ratio*100)}%.`,Number((ratio*100).toFixed(2)),`tg|percentual|${rise}|${run}`,.02);}
    if(f===1){const run=R(4,12),rise=R(1,8),ratio=rise/run;return num(`Num triângulo que representa uma inclinação, o cateto oposto mede ${rise} e o adjacente mede ${run}. Calcule tan(θ).`,'tan(θ)=oposto ÷ adjacente.',`tan(θ)=${rise}/${run}≈${F(ratio)}.`,Number(ratio.toFixed(3)),`tg|tan|${rise}|${run}`,.005);}
    if(f===2){const rise=R(1,4),run=R(5,12),ratio=rise/run,angle=Math.atan(ratio)*180/Math.PI;return num(`Uma rampa tem razão subida/avanço igual a ${F(ratio)}. Aproximadamente qual é seu ângulo θ em graus?`,'Use θ=arctan(razão) em modo DEG.',`θ=arctan(${F(ratio)})≈${F(angle)}°.`,Number(angle.toFixed(1)),`tg|arctan|${rise}|${run}`,.2);}
    if(f===3){const ang=P([30,45,60]),vals={30:Math.sqrt(3)/3,45:1,60:Math.sqrt(3)},m=vals[ang];return open(`Uma reta forma ${ang}° com o eixo x. Explique por que seu coeficiente angular pode ser obtido por m=tan(θ) e interprete o valor aproximado ${F(m)}.`,'Coeficiente angular e tangente comparam a mesma coisa: subida e avanço horizontal.',`m=tan(${ang}°)≈${F(m)}. Isso indica quantas unidades a reta varia verticalmente para cada 1 unidade de avanço horizontal.`,`tg|reta|${ang}`);}
    return mc('Qual afirmação descreve corretamente 90° e 120°?','Em 90° o avanço horizontal é zero; em 120° a reta é decrescente.','tan(90°) não é definida e tan(120°)=−√3.','c',['tan(90°)=0.','tan(120°)=√3.','tan(90°) não é definida e tan(120°)=−√3.','Tangente só existe entre 0° e 90°.'],'tg|angulos');
  };
  G.porcentagem=function(level){
    const f=fam('porcentagem',level),p=P([5,8,10,12,15,20,25,30]),v=R(5,30)*20;
    if(f===0)return num(`Quanto é ${p}% de ${BR(v)}?`,'Transforme a porcentagem em p/100 e multiplique pela base.',`${p}/100·${v}=${BR(v*p/100)}.`,v*p/100,`pc|parte|${p}|${v}`,.01);
    if(f===1){const novo=v*(1+p/100);return num(`Um produto de ${BR(v)} recebe aumento de ${p}%. Qual é o novo preço?`,'Calcule o aumento e some ao valor antigo.',`Aumento=${BR(v*p/100)}; novo=${BR(novo)}.`,novo,`pc|aumento|${p}|${v}`,.01);}
    if(f===2){const novo=v*(1-p/100);return num(`Um produto de ${BR(v)} recebe desconto de ${p}%. Qual é o preço final?`,'Calcule a parte descontada e retire da base.',`Desconto=${BR(v*p/100)}; final=${BR(novo)}.`,novo,`pc|desconto|${p}|${v}`,.01);}
    if(f===3){const antigo=v,novo=v+v*p/100;return num(`Um valor passou de ${BR(antigo)} para ${BR(novo)}. Qual foi a variação percentual?`,'Mudança ÷ valor antigo × 100.',`Mudança=${BR(novo-antigo)}; (${novo-antigo})/${antigo}·100=${p}%.`,p,`pc|variacao|${p}|${v}`,.01);}
    const i=P([1,2,3,4])/100,t=R(2,5),c=R(5,20)*100,mont=c*(1+i)**t,simples=c*(1+i*t);return open(`Compare ${BR(c)} aplicados a ${F(i*100)}% ao mês por ${t} meses em juros simples e compostos. Explique por que os resultados são diferentes.`,'No simples, a base não muda; no composto, o saldo vira a nova base.',`Simples: ${BR(simples)}. Compostos: ${BR(mont)}. Nos compostos, cada período calcula a porcentagem sobre um saldo já alterado.`,`pc|juros|${c}|${i}|${t}`);
  };
  G.ladrilhamento=function(level){
    const f=fam('ladrilhamento',level);
    if(f===0){const n=P([3,4,6]),ang=(n-2)*180/n,q=360/ang;return num(`Um polígono regular de ${n} lados tem ângulo interno de ${F(ang)}°. Quantas peças iguais se encontram em um ponto para completar 360°?`,'Divida 360° pelo ângulo interno.',`360/${F(ang)}=${F(q)}.`,q,`ld|fecha|${n}`);}
    if(f===1){const n=P([5,7,8,9,10]),ang=(n-2)*180/n;return mc(`Um polígono regular de ${n} lados tem ângulo interno de ${F(ang)}°. Ele consegue ladrilhar sozinho em torno de um vértice?`,'Veja se 360°/ângulo é inteiro.',`360/${F(ang)}≈${F(360/ang)}. Como não é inteiro, peças iguais não fecham sozinhas.`,'b',['Sim, porque qualquer polígono regular ladrilha.','Não, porque 360°/ângulo não é inteiro.','Sim, desde que as peças tenham tamanhos diferentes.','Não é possível decidir com ângulos.'],`ld|naofecha|${n}`);}
    if(f===2)return num('Dois octógonos regulares de 135° e um quadrado se encontram num vértice. Quantos graus faltam ou sobram para completar 360°?','Some 135+135+90 e compare com 360.','135+135+90=360. Não falta nem sobra nenhum grau.',0,'ld|misto',0);
    if(f===3)return open('Explique por que “parece encaixar no desenho” não é uma justificativa suficiente para afirmar que um ladrilhamento funciona.','Use a ideia de ângulos em torno do vértice.','O desenho pode enganar por escala. A justificativa matemática verifica se os ângulos que se encontram somam exatamente 360°, sem buracos nem sobreposição.','ld|justifica');
    return open('Crie uma combinação de polígonos regulares que complete 360° em um vértice. Mostre a soma dos ângulos.','Você pode usar quadrados, triângulos equiláteros ou hexágonos regulares.','Exemplo: 120°+120°+120°=360° com três hexágonos regulares; ou 90°+90°+90°+90°=360° com quatro quadrados.','ld|cria');
  };
})();