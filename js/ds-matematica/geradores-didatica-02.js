(() => {
  'use strict';
  const data = window.DSMathGeneratorData;
  if (!data) return;
  const {G,R,P,F,BR} = data;

  // PA — exercícios passam pela construção da ideia e pela leitura da notação.
  G.pa = function(level){
    const a1=R(2,15),r=P([-5,-4,-3,2,3,4,5]),n=R(5,12);
    if(level===1){
      return {
        kind:'number',answer:r,tolerance:0,
        question:`Observe a sequência ${a1}, ${a1+r}, ${a1+2*r}, ${a1+3*r}, ... Qual é a diferença constante r entre termos consecutivos?`,
        hint:'Subtraia um termo pelo anterior.',
        solution:`${a1+r}−${a1}=${r}. A mesma diferença aparece nos demais pares, então r=${r}.`,
        key:`pa1|${a1}|${r}`
      };
    }
    if(level===2){
      const ans=a1+(n-1)*r;
      return {
        kind:'number',answer:ans,tolerance:0,
        question:`Numa PA, a₁=${a1} e r=${r}. Qual é o ${n}º termo?`,
        hint:'Para chegar da posição 1 à posição n, são n−1 passos: aₙ=a₁+(n−1)r.',
        solution:`a${n}=${a1}+(${n}−1)·(${r})=${ans}.`,
        key:`pa2|${a1}|${r}|${n}`
      };
    }
    if(level===3){
      return {
        kind:'mc',answer:'b',
        options:[
          {id:'a',label:`aₙ=${a1}+n·(${r})`},
          {id:'b',label:`aₙ=${a1}+(n−1)·(${r})`},
          {id:'c',label:`aₙ=${a1}·n·(${r})`},
          {id:'d',label:'Não é possível escrever uma regra'}
        ],
        question:`Uma PA começa em ${a1} e muda ${r} a cada nova posição. Qual regra representa corretamente o termo aₙ?`,
        hint:'O primeiro termo já está na posição 1; até a posição n acontecem n−1 mudanças.',
        solution:`aₙ=${a1}+(n−1)·(${r}). O fator n−1 conta quantos passos ocorreram depois do primeiro termo.`,
        key:`pa3|${a1}|${r}`
      };
    }
    if(level===4){
      const ans=a1+(n-1)*r;
      return {
        kind:'number',answer:ans,tolerance:0,
        question:`Uma arquibancada tem ${a1} lugares na primeira fileira e cada nova fileira tem ${Math.abs(r)} lugares ${r>0?'a mais':'a menos'} que a anterior. Quantos lugares há na ${n}ª fileira?`,
        hint:'Modele as fileiras como uma PA e use aₙ=a₁+(n−1)r.',
        solution:`a${n}=${a1}+(${n}−1)·(${r})=${ans}.`,
        key:`pa4|${a1}|${r}|${n}`
      };
    }
    const ans=a1+(n-1)*r;
    return {
      kind:'mc',answer:'d',
      options:[
        {id:'a',label:'n pode assumir qualquer número real, como 2,5'},
        {id:'b',label:'r representa uma divisão entre os termos'},
        {id:'c',label:`O termo ${n} é obtido fazendo ${a1}+${n}·(${r})`},
        {id:'d',label:`aₙ=${a1}+(n−1)·(${r}) e n assume posições inteiras 1,2,3,...`}
      ],
      question:`Para uma PA com a₁=${a1} e r=${r}, qual afirmação interpreta corretamente a fórmula e o domínio?`,
      hint:'Uma posição da sequência é contada: 1ª, 2ª, 3ª... e o primeiro termo já ocupa a posição 1.',
      solution:`A regra é aₙ=${a1}+(n−1)·(${r}); para n=${n}, a${n}=${ans}. O domínio é discreto porque n representa posições inteiras da sequência.`,
      key:`pa5|${a1}|${r}|${n}`
    };
  };

  // Tangente — progressão prática: inclinação, tangente, arctan, reta e ângulos além de 90°.
  G.tangente = function(level){
    if(level===1){
      const run=R(4,12),rise=R(1,Math.max(1,Math.floor(run/2))),ratio=rise/run;
      return {
        kind:'number',answer:Number((ratio*100).toFixed(2)),tolerance:0.01,
        question:`Uma rampa sobe ${rise} m enquanto avança ${run} m na horizontal. Qual é sua inclinação percentual?`,
        hint:'Faça subida ÷ avanço e multiplique por 100.',
        solution:`${rise}/${run}=${F(ratio)}. Em porcentagem: ${F(ratio*100)}%. Isso indica quanto a rampa sobe a cada 100 unidades de avanço horizontal.`,
        key:`tg1|${rise}|${run}`
      };
    }
    if(level===2){
      const run=R(4,12),rise=R(1,8),ratio=rise/run;
      return {
        kind:'number',answer:Number(ratio.toFixed(3)),tolerance:0.005,
        question:`Num triângulo que representa uma inclinação, o cateto oposto mede ${rise} e o adjacente mede ${run}. Calcule tan(θ).`,
        hint:'tan(θ)=cateto oposto ÷ cateto adjacente.',
        solution:`tan(θ)=${rise}/${run}≈${F(ratio)}. Essa razão mede quanto há de subida para cada unidade de avanço.`,
        key:`tg2|${rise}|${run}`
      };
    }
    if(level===3){
      const rise=R(1,4),run=R(5,12),ratio=rise/run,angle=Math.atan(ratio)*180/Math.PI;
      return {
        kind:'number',answer:Number(angle.toFixed(1)),tolerance:0.2,
        question:`Uma rampa tem razão subida/avanço igual a ${F(ratio)}. Aproximadamente qual é seu ângulo θ em graus?`,
        hint:'Use a função inversa: θ=arctan(razão). Na calculadora, use tan⁻¹ em modo DEG.',
        solution:`θ=arctan(${F(ratio)})≈${F(angle)}°. O arco-tangente recebe a razão de inclinação e devolve o ângulo.`,
        key:`tg3|${rise}|${run}`
      };
    }
    if(level===4){
      const ang=P([30,45,60]);
      const vals={30:Math.sqrt(3)/3,45:1,60:Math.sqrt(3)};
      const m=vals[ang];
      return {
        kind:'number',answer:Number(m.toFixed(3)),tolerance:0.005,
        question:`Uma reta forma ${ang}° com o eixo x. Qual é aproximadamente seu coeficiente angular m?`,
        hint:'m=tan(θ). Use os valores conhecidos de 30°, 45° e 60° ou uma calculadora.',
        solution:`m=tan(${ang}°)≈${F(m)}. O coeficiente angular e a tangente descrevem a mesma inclinação.`,
        key:`tg4|${ang}`
      };
    }
    return {
      kind:'mc',answer:'c',
      options:[
        {id:'a',label:'tan(90°)=0 porque a reta é vertical'},
        {id:'b',label:'tan(120°)=√3 porque todo ângulo acima de 90° tem tangente positiva'},
        {id:'c',label:'tan(90°) não é definida e tan(120°)=−√3'},
        {id:'d',label:'Tangente só existe entre 0° e 90°'}
      ],
      question:'Qual afirmação descreve corretamente a tangente em 90° e 120°?',
      hint:'Em 90° o avanço horizontal é zero. Em 120°, a reta é decrescente quando lida da esquerda para a direita.',
      solution:'Em 90° teríamos divisão por zero, portanto a tangente não é definida. Já tan(120°)=tan(180°−60°)=−tan(60°)=−√3.',
      key:'tg5'
    };
  };

  // Porcentagem — juros só aparece depois que a leitura de C, i, t e M foi ensinada.
  G.porcentagem = function(level){
    const p=P([5,8,10,12,15,20,25,30]),v=R(5,30)*20;
    if(level===1){
      return {
        kind:'number',answer:v*p/100,tolerance:0.01,
        question:`Quanto é ${p}% de ${BR(v)}?`,
        hint:'Transforme ${p}% em ${p}/100 e multiplique pelo valor de referência.',
        solution:`${p}/100·${v}=${BR(v*p/100)}.`,
        key:`pc1|${p}|${v}`
      };
    }
    if(level===2){
      const novo=v*(1+p/100);
      return {
        kind:'number',answer:novo,tolerance:0.01,
        question:`Um valor de ${BR(v)} aumenta ${p}%. Qual é o novo valor?`,
        hint:'Calcule primeiro ${p}% do valor antigo e depois some.',
        solution:`Aumento=${BR(v*p/100)}. Novo valor=${BR(v)}+${BR(v*p/100)}=${BR(novo)}.`,
        key:`pc2|${p}|${v}`
      };
    }
    if(level===3){
      const antigo=v,novo=v+v*p/100;
      return {
        kind:'number',answer:p,tolerance:0.01,
        question:`Um valor passa de ${BR(antigo)} para ${BR(novo)}. Qual foi a variação percentual?`,
        hint:'Mudança = novo−antigo. Depois divida pela base antiga e multiplique por 100.',
        solution:`Mudança=${BR(novo-antigo)}. (${novo-antigo})/${antigo}·100=${p}%.`,
        key:`pc3|${p}|${v}`
      };
    }
    const i=P([1,2,3,4])/100,t=R(2,5),c=R(5,20)*100;
    const mont=c*(1+i)**t;
    if(level===4){
      return {
        kind:'number',answer:Number(mont.toFixed(2)),tolerance:0.02,
        question:`Capital C=${BR(c)}, taxa i=${F(i*100)}% ao mês e tempo t=${t} meses. Em juros compostos, qual é aproximadamente o montante M?`,
        hint:'Use M=C(1+i)^t. Antes de substituir, transforme a taxa em decimal.',
        solution:`M=${c}(1+${i})^${t}≈${BR(mont)}. C é o valor inicial, i a taxa por período, t o número de períodos e M o valor final.`,
        key:`pc4|${c}|${i}|${t}`
      };
    }
    const simples=c*(1+i*t),diff=mont-simples;
    return {
      kind:'mc',answer:'c',
      options:[
        {id:'a',label:'Os dois montantes são sempre iguais porque a taxa é a mesma.'},
        {id:'b',label:`Juros simples dão ${BR(mont)} e compostos dão ${BR(simples)}.`},
        {id:'c',label:`Simples: ${BR(simples)}; compostos: ${BR(mont)}. A diferença ocorre porque a base dos compostos cresce.`},
        {id:'d',label:'Nos juros compostos a porcentagem é sempre calculada sobre o capital inicial.'}
      ],
      question:`Compare ${BR(c)} a ${F(i*100)}% ao mês durante ${t} meses nos regimes simples e composto.`,
      hint:'No simples, use sempre o capital inicial como base. No composto, o saldo de um período vira a base do seguinte.',
      solution:`Simples: C(1+it)=${BR(simples)}. Compostos: C(1+i)^t=${BR(mont)}. Diferença aproximada: ${BR(diff)}.`,
      key:`pc5|${c}|${i}|${t}`
    };
  };
})();
