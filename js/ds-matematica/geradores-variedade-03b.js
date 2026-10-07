(() => {
  'use strict';
  const data=window.DSMathGeneratorData;if(!data)return;
  const {G,R,P,F}=data;
  const bags=window.__DSMathVarietyBags||(window.__DSMathVarietyBags={});
  const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;};
  const families=level=>level<=1?[0,1,2]:level===2?[0,1,2,3]:level===3?[1,2,3,4]:[0,2,3,4];
  const fam=(topic,level)=>{const k=topic+'|'+level;if(!bags[k]||!bags[k].length)bags[k]=shuffle(families(level));return bags[k].pop();};
  const num=(q,h,s,a,k,t=0)=>({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const mc=(q,h,s,answer,labels,k)=>({kind:'mc',question:q,hint:h,solution:s,answer,options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label})),key:k});
  const open=(q,h,s,k)=>({question:q,hint:h,solution:s,key:k});
  G.grandezas=function(level){
    const f=fam('grandezas',level);
    if(f===0){const d=R(6,30)*10,t=P([2,3,4,5]),v=d/t;return num(`Um veículo percorre ${d} km em ${t} h. Qual é a velocidade média?`,'Velocidade média = distância ÷ tempo.',`${d}/${t}=${F(v)} km/h.`,v,`gr|vel|${d}|${t}`,.01);}
    if(f===1){const mb=R(4,20)*100,s=R(4,20),tx=mb/s;return num(`Um arquivo de ${mb} MB é transferido em ${s} s. Qual é a taxa média em MB/s?`,'Dados ÷ tempo.',`${mb}/${s}=${F(tx)} MB/s.`,tx,`gr|dados|${mb}|${s}`,.02);}
    if(f===2){const kmh=P([36,54,72,90,108]);return num(`Converta ${kmh} km/h para m/s sem usar apenas a regra decorada.`,'Transforme quilômetros em metros e horas em segundos.',`${kmh}·1000/3600=${F(kmh/3.6)} m/s.`,kmh/3.6,`gr|converte|${kmh}`,.02);}
    if(f===3){const m=R(20,80)*10,v=R(2,10)*10,d=m/v;return num(`Uma amostra tem massa ${m} g e volume ${v} cm³. Qual é a densidade em g/cm³?`,'Massa ÷ volume.',`${m}/${v}=${F(d)} g/cm³.`,d,`gr|densidade|${m}|${v}`,.02);}
    return mc('Qual leitura da unidade está correta?','A barra “/” pode ser lida como “por” ou “dividido por”.','MB/s significa megabytes divididos por segundo.','d',['km/h significa horas multiplicadas por quilômetros.','g/L significa litros por grama.','m² significa metros divididos por metros.','MB/s significa megabytes divididos por segundo.'],'gr|unidade');
  };
  G.dados=function(level){
    const f=fam('dados',level);
    if(f===0){const values=P([[2,3,2,4,3,2,5,3],[1,1,2,3,2,1,4,2],[4,5,4,6,5,4,7,4]]),target=P([...new Set(values)]),count=values.filter(v=>v===target).length;return num(`Considere os dados ${values.join(', ')}. Qual é a frequência absoluta do valor ${target}?`,'Conte quantas vezes o valor aparece.',`${target} aparece ${count} vez${count!==1?'es':''}.`,count,`da|freq|${values.join('-')}|${target}`);}
    if(f===1){const total=P([20,25,40,50,80,100]),count=R(1,Math.floor(total/2)),rel=count/total*100;return num(`Em ${total} respostas, ${count} escolheram a opção A. Qual é a frequência relativa em porcentagem?`,'Frequência relativa = parte ÷ total × 100.',`${count}/${total}·100=${F(rel)}%.`,rel,`da|rel|${total}|${count}`,.02);}
    if(f===2)return mc('Uma escola quer saber como todos os alunos chegam às aulas. Qual amostra tende a ser menos enviesada?','A amostra precisa representar grupos diferentes da população.','Sortear alunos de várias turmas e horários tende a representar melhor a escola.','c',['Entrevistar apenas alunos no estacionamento.','Entrevistar apenas quem chega de bicicleta.','Sortear alunos de várias turmas e horários.','Perguntar somente aos professores.'],'da|amostra');
    if(f===3)return open('Um diagrama de dispersão mostra que alunos que estudam mais horas tendem a ter notas maiores. Podemos concluir que aumentar as horas de estudo, sozinho, causa notas maiores? Explique.','Associação não é automaticamente causalidade.','Não. O gráfico mostra associação, mas outros fatores podem influenciar as duas variáveis. Para afirmar causa, seriam necessárias evidências adicionais.','da|causa');
    return open('Uma pesquisa em um aplicativo mostra 70% de aprovação, mas só usuários que abriram uma tela específica puderam responder. Que pergunta crítica você faria antes de confiar no resultado?','Pense em quem teve chance de entrar na amostra.','Perguntaria se quem respondeu representa todos os usuários. Se apenas um grupo específico viu a pesquisa, pode haver viés de seleção.','da|critica');
  };
})();