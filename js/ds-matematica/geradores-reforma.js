(() => {
  'use strict';
  const data=window.DSMathGeneratorData;
  if(!data)return;
  const {G,R,P,BR,F}=data;

  G.variacao=function(level){
    if(level===1){
      const k=R(2,12),x=R(2,9),answer=k*x;
      return {
        kind:'number',answer,tolerance:0,
        question:`Uma oficina produz ${k} peças por minuto, sempre no mesmo ritmo. Quantas peças produz em ${x} minutos?`,
        hint:'A taxa por minuto é constante. Multiplique taxa × tempo.',
        solution:`P=${k}·${x}=${answer} peças. A relação é diretamente proporcional: P/t=${k}.`,
        key:`v1|${k}|${x}`
      };
    }

    if(level===2){
      const k=R(3,9),b=R(2,12);
      const A=[[1,k+b],[2,2*k+b],[3,3*k+b]];
      const B=[[1,k],[2,2*k],[4,4*k]];
      return {
        kind:'mc',answer:'b',
        options:[
          {id:'a',label:'Somente a tabela A'},
          {id:'b',label:'Somente a tabela B'},
          {id:'c',label:'As duas tabelas'},
          {id:'d',label:'Nenhuma das tabelas'}
        ],
        question:`Qual tabela representa proporcionalidade direta?<br><br><strong>A:</strong> ${A.map(p=>`(${p[0]}, ${p[1]})`).join(', ')}<br><strong>B:</strong> ${B.map(p=>`(${p[0]}, ${p[1]})`).join(', ')}`,
        hint:'Calcule y/x em mais de uma linha de cada tabela.',
        solution:`Na B: ${k}/1=${2*k}/2=${4*k}/4=${k}. Na A existe um valor inicial ${b}, então y/x muda. Resposta: somente B.`,
        key:`v2|${k}|${b}`
      };
    }

    if(level===3){
      const k=R(4,15),x1=R(2,6),y1=k*x1,x2=x1+R(3,8),answer=k*x2;
      return {
        kind:'number',answer,tolerance:0,
        question:`Uma relação é diretamente proporcional. Quando x=${x1}, y=${y1}. Qual deve ser o valor de y quando x=${x2}?`,
        hint:'Primeiro descubra a constante k fazendo y/x. Depois use y=kx.',
        solution:`k=${y1}/${x1}=${k}. Logo y=${k}·${x2}=${answer}.`,
        key:`v3|${k}|${x1}|${x2}`
      };
    }

    if(level===4){
      const fixed=R(5,20),rate=R(2,8),distance=R(3,9);
      const total=fixed+rate*distance;
      return {
        kind:'mc',answer:'d',
        options:[
          {id:'a',label:`É proporcional porque o preço aumenta R$ ${rate} por km.`},
          {id:'b',label:`É proporcional porque ${distance} km custam ${BR(total)}.`},
          {id:'c',label:'É proporcional sempre que o gráfico é uma reta crescente.'},
          {id:'d',label:`Não é proporcional: existe uma cobrança inicial de ${BR(fixed)}.`}
        ],
        question:`Um aplicativo cobra ${BR(fixed)} de taxa inicial e ${BR(rate)} por quilômetro. Em uma viagem de ${distance} km, o preço é ${BR(total)}. Qual afirmação descreve corretamente a relação entre distância e preço?`,
        hint:'Pergunte quanto custaria uma viagem de 0 km e se o gráfico passaria pela origem.',
        solution:`A regra é y=${rate}x+${fixed}. Como y(0)=${fixed}, a reta não passa pela origem e y/x não é constante. Portanto não há proporcionalidade direta.`,
        key:`v4|${fixed}|${rate}|${distance}`
      };
    }

    const k=R(3,9),x1=R(1,3),x2=x1+1,x3=x2+1,x4=x3+1;
    const good=[k*x1,k*x2,k*x3,k*x4];
    const badIndex=R(0,3),error=P([-2,-1,1,2])*k;
    const observed=[...good]; observed[badIndex]+=error;
    const labels=['1ª','2ª','3ª','4ª'];
    return {
      kind:'mc',answer:String.fromCharCode(97+badIndex),
      options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label:`${label} medição: x=${[x1,x2,x3,x4][i]}, y=${observed[i]}`})),
      question:`Um experimento deveria seguir uma relação diretamente proporcional com constante k=${k}. Uma das medições abaixo é incompatível com o modelo. Qual é ela?`,
      hint:`Em um modelo proporcional, cada valor deveria satisfazer y=${k}x. Compare um por um.`,
      solution:`Os valores esperados são ${good.join(', ')}. A ${labels[badIndex]} medição deveria ser ${good[badIndex]}, mas foi registrada como ${observed[badIndex]}.`,
      key:`v5|${k}|${x1}|${badIndex}|${error}`
    };
  };
})();
