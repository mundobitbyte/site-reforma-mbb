(() => {
  'use strict';
  const data = window.DSMathGeneratorData;
  if (!data) return;
  const {G,R,P,F,BR} = data;

  // Reta — mantém a progressão coerente com a aula: significado antes da fórmula compacta.
  G.reta = function(level){
    if(level===1){
      const dx=R(2,6),m=P([-4,-3,-2,2,3,4]),dy=m*dx;
      return {
        kind:'number',answer:m,tolerance:0,
        question:`Ao avançar ${dx} unidades na horizontal, uma reta varia ${dy} unidades na vertical. Qual é o coeficiente angular m?`,
        hint:'Coeficiente angular = variação vertical ÷ variação horizontal.',
        solution:`m=${dy}/${dx}=${m}. ${m>0?'Como o resultado é positivo, a reta sobe da esquerda para a direita.':'Como o resultado é negativo, a reta desce da esquerda para a direita.'}`,
        key:`rd1|${dx}|${dy}`
      };
    }
    if(level===2){
      const x1=R(0,4),dx=R(2,5),x2=x1+dx,m=P([-3,-2,2,3,4]),y1=R(2,10),y2=y1+m*dx;
      return {
        kind:'number',answer:m,tolerance:0,
        question:`Uma reta passa por (${x1}, ${y1}) e (${x2}, ${y2}). Calcule sua inclinação m.`,
        hint:'Primeiro calcule Δy = y₂−y₁ e Δx = x₂−x₁. Depois faça Δy/Δx.',
        solution:`Δy=${y2}−${y1}=${y2-y1}; Δx=${x2}−${x1}=${dx}; então m=${y2-y1}/${dx}=${m}.`,
        key:`rd2|${x1}|${y1}|${x2}|${y2}`
      };
    }
    if(level===3){
      const m=P([-4,-3,-2,2,3,4]),b=R(-8,10);
      return {
        kind:'mc',answer:m>0?'a':'b',
        options:[
          {id:'a',label:'Crescente'},
          {id:'b',label:'Decrescente'},
          {id:'c',label:'Constante'}
        ],
        question:`Considere a reta y=${m}x${b>=0?'+':''}${b}. Como ela se comporta quando avançamos da esquerda para a direita?`,
        hint:'Observe o sinal do coeficiente angular m.',
        solution:`m=${m}. Como m ${m>0?'é positivo, a reta é crescente':'é negativo, a reta é decrescente'}.`,
        key:`rd3|${m}|${b}`
      };
    }
    const m=P([-5,-4,-3,2,3,4,5]),b=R(-10,12),x=R(-2,5),y=m*x+b;
    return {
      kind:'mc',answer:'c',
      options:[
        {id:'a',label:`m=${b} e b=${m}`},
        {id:'b',label:`m=${m} e o ponto (${x}, ${y}) não pertence à reta`},
        {id:'c',label:`m=${m}, b=${b} e o ponto (${x}, ${y}) pertence à reta`},
        {id:'d',label:'Não é possível identificar a inclinação pela equação'}
      ],
      question:`A reta é y=${m}x${b>=0?'+':''}${b}. Qual afirmação está correta?`,
      hint:'Em y=mx+b, m é a inclinação e b é o valor de y quando x=0. Para testar um ponto, substitua x.',
      solution:`m=${m} e b=${b}. Para x=${x}, y=${m}·${x}${b>=0?'+':''}${b}=${y}; portanto o ponto (${x}, ${y}) pertence à reta.`,
      key:`rd4|${m}|${b}|${x}`
    };
  };

  // Parábola — evita cobrar forma de vértice antes de ensiná-la.
  G.parabola = function(level){
    if(level===1){
      const a=P([-3,-2,-1,1,2,3]);
      return {
        kind:'mc',answer:a>0?'a':'b',
        options:[
          {id:'a',label:'Abre para cima e possui mínimo'},
          {id:'b',label:'Abre para baixo e possui máximo'},
          {id:'c',label:'É uma reta'}
        ],
        question:`Em f(x)=${a}x²+2x−3, o gráfico abre para cima ou para baixo? O vértice representa máximo ou mínimo?`,
        hint:'Observe o sinal do coeficiente a, que multiplica x².',
        solution:`a=${a}. ${a>0?'Como a>0, a parábola abre para cima e o vértice é um ponto de mínimo.':'Como a<0, a parábola abre para baixo e o vértice é um ponto de máximo.'}`,
        key:`pb1|${a}`
      };
    }
    if(level===2){
      const r1=R(-4,1),r2=r1+R(2,5);
      const b=-(r1+r2),c=r1*r2;
      return {
        kind:'mc',answer:'c',
        options:[
          {id:'a',label:`x=${r1+r2} apenas`},
          {id:'b',label:`x=${c} apenas`},
          {id:'c',label:`x=${r1} e x=${r2}`},
          {id:'d',label:'A função não possui raízes'}
        ],
        question:`Para f(x)=x²${b>=0?'+':''}${b}x${c>=0?'+':''}${c}, quais valores abaixo fazem f(x)=0?`,
        hint:`Teste os valores candidatos substituindo x na expressão. Raiz é o valor de x que faz a saída ser zero.`,
        solution:`f(${r1})=0 e f(${r2})=0. Portanto as raízes são ${r1} e ${r2}; no gráfico, são os pontos em que a parábola cruza o eixo x.`,
        key:`pb2|${r1}|${r2}`
      };
    }
    if(level===3){
      const a=P([1,2,-1,-2]),h=R(-3,4),b=-2*a*h,c=R(-5,6);
      const yv=a*h*h+b*h+c;
      return {
        kind:'number',answer:h,tolerance:0,
        question:`Na função f(x)=${a}x²${b>=0?'+':''}${b}x${c>=0?'+':''}${c}, qual é a coordenada x do vértice?`,
        hint:'Use xᵥ=−b/(2a). Identifique primeiro os coeficientes a e b.',
        solution:`a=${a} e b=${b}. xᵥ=−(${b})/(2·${a})=${h}. O vértice está sobre x=${h}${Number.isFinite(yv)?` e sua altura seria f(${h})=${yv}`:''}.`,
        key:`pb3|${a}|${b}|${c}`
      };
    }
    if(level===4){
      const r1=R(-5,1),r2=r1+R(2,6),a=P([1,2]),b=-a*(r1+r2),c=a*r1*r2;
      return {
        kind:'mc',answer:'c',
        options:[
          {id:'a',label:`Δ=${b*b-4*a*c} e não existem raízes`},
          {id:'b',label:`As raízes são ${-r1} e ${-r2}`},
          {id:'c',label:`As raízes são ${r1} e ${r2}`},
          {id:'d',label:'A fórmula de raízes não pode ser usada'}
        ],
        question:`Resolva ${a}x²${b>=0?'+':''}${b}x${c>=0?'+':''}${c}=0 usando Δ=b²−4ac e x=(−b±√Δ)/(2a).`,
        hint:'Identifique a, b e c; calcule Δ; depois faça uma conta com + e outra com −.',
        solution:`a=${a}, b=${b}, c=${c}. Δ=${b}²−4·${a}·${c}=${b*b-4*a*c}. Então x=(−(${b})±√${b*b-4*a*c})/(2·${a}), resultando em x=${r1} e x=${r2}.`,
        key:`pb4|${a}|${r1}|${r2}`
      };
    }
    const a=P([1,2,-1,-2]),r1=R(-5,0),r2=r1+R(2,6),b=-a*(r1+r2),c=a*r1*r2;
    const xv=(r1+r2)/2,yv=a*xv*xv+b*xv+c;
    return {
      kind:'mc',answer:'d',
      options:[
        {id:'a',label:`As raízes são ${r1} e ${r2}, mas o vértice está em x=0.`},
        {id:'b',label:`A parábola não possui eixo de simetria.`},
        {id:'c',label:`O sinal de a não interfere em máximo ou mínimo.`},
        {id:'d',label:`As raízes são ${r1} e ${r2}; o eixo de simetria fica em x=${F(xv)} e o vértice é ${a>0?'mínimo':'máximo'}.`}
      ],
      question:`Considere f(x)=${a}x²${b>=0?'+':''}${b}x${c>=0?'+':''}${c}. Qual análise reúne corretamente raízes, simetria e comportamento da parábola?`,
      hint:'As raízes ficam simétricas em relação ao vértice. O ponto médio entre elas dá o eixo de simetria.',
      solution:`As raízes são ${r1} e ${r2}. O ponto médio é (${r1}+${r2})/2=${F(xv)}. Como a=${a}, o vértice é um ponto de ${a>0?'mínimo':'máximo'}${Number.isFinite(yv)?` e tem y=${F(yv)}`:''}.`,
      key:`pb5|${a}|${r1}|${r2}`
    };
  };

  // Transformações — agora os quatro tipos cobrados aparecem na aula.
  G.transformacoes = function(level){
    const k=R(2,6),h=R(1,5);
    if(level===1){
      return {
        kind:'mc',answer:'b',
        options:[
          {id:'a',label:`Desloca ${k} para a direita`},
          {id:'b',label:`Desloca ${k} para cima`},
          {id:'c',label:`Reflete no eixo x`}
        ],
        question:`Comparando y=x² com y=x²+${k}, o que acontece com o gráfico?`,
        hint:'O número foi somado fora do quadrado, portanto altera todas as alturas.',
        solution:`Todos os valores de y aumentam ${k}. O gráfico sobe ${k} unidades.`,
        key:`tr1|${k}`
      };
    }
    if(level===2){
      return {
        kind:'mc',answer:'a',
        options:[
          {id:'a',label:`Desloca ${h} unidades para a direita`},
          {id:'b',label:`Desloca ${h} unidades para a esquerda`},
          {id:'c',label:`Sobe ${h} unidades`}
        ],
        question:`Comparando y=x² com y=(x−${h})², para onde a parábola se desloca?`,
        hint:`Pergunte em qual x o quadrado passa a valer zero: (${h}−${h})²=0.`,
        solution:`O novo vértice ocorre em x=${h}; portanto a parábola se desloca ${h} unidades para a direita.`,
        key:`tr2|${h}`
      };
    }
    if(level===3){
      return {
        kind:'mc',answer:'c',
        options:[
          {id:'a',label:'Desloca para a direita'},
          {id:'b',label:'Desloca para cima'},
          {id:'c',label:'Reflete em relação ao eixo x'}
        ],
        question:'Comparando y=x² com y=−x², qual transformação ocorreu?',
        hint:'Todos os valores de y trocaram de sinal.',
        solution:'Multiplicar a função por −1 troca o sinal das alturas. A parábola é refletida em relação ao eixo x e passa a abrir para baixo.',
        key:'tr3'
      };
    }
    if(level===4){
      return {
        kind:'mc',answer:'d',
        options:[
          {id:'a',label:`y=x²+${k}`},
          {id:'b',label:`y=(x+${h})²`},
          {id:'c',label:'y=−x²'},
          {id:'d',label:`y=${k}x²`}
        ],
        question:`Qual expressão mantém o vértice em (0,0), não reflete o gráfico e multiplica todas as alturas de y=x² por ${k}?`,
        hint:'Procure uma multiplicação positiva feita fora da função.',
        solution:`y=${k}x² multiplica cada altura por ${k}, mantém o vértice em (0,0) e não provoca reflexão porque ${k}>0.`,
        key:`tr4|${k}`
      };
    }
    return {
      kind:'mc',answer:'b',
      options:[
        {id:'a',label:`y=(x+${h})²+${k}`},
        {id:'b',label:`y=−(x−${h})²+${k}`},
        {id:'c',label:`y=(x−${h})²−${k}`},
        {id:'d',label:`y=${k}(x+${h})²`}
      ],
      question:`Qual expressão representa y=x² deslocada ${h} para a direita, ${k} para cima e depois refletida em relação ao eixo x?`,
      hint:'Direita: x−h dentro do parêntese. Cima: +k fora. Reflexão: sinal negativo multiplicando o quadrado.',
      solution:`y=−(x−${h})²+${k}. Cada parte da expressão registra uma transformação diferente.`,
      key:`tr5|${h}|${k}`
    };
  };

})();
