(() => {
  'use strict';
  const data=window.DSMathGeneratorData;
  if(!data)return;
  const {G,R,P,F,BR}=data;
  const num=(q,h,s,a,k,t=0)=>({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const mc=(q,h,s,answer,labels,k)=>({kind:'mc',question:q,hint:h,solution:s,answer,options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label})),key:k});
  const open=(q,h,s,k)=>({question:q,hint:h,solution:s,key:k});
  const qlead=a=>a===1?'x²':a===-1?'−x²':`${a}x²`;
  const qlin=b=>b===0?'':b===1?'+x':b===-1?'−x':b>0?`+${b}x`:`−${Math.abs(b)}x`;
  const qconst=c=>c===0?'':c>0?`+${c}`:`−${Math.abs(c)}`;
  const qexpr=(a,b=0,c=0)=>`${qlead(a)}${qlin(b)}${qconst(c)}`;

  const base={
    variacao:G.variacao,
    algebra:G.algebra,
    funcao1:G.funcao1,
    quadratica:G.quadratica,
    pa:G.pa,
    grandezas:G.grandezas
  };

  G.variacao=function(level){
    if(level!==5)return base.variacao(level);
    const type=R(0,2);
    if(type===0){
      const k=R(4,9),x=R(3,7),y=k*x,missing=x+R(2,5);
      return open(`Uma tabela de uma relação entre quantidade x e resultado y contém os pares (1, ${k}), (${x}, ${y}) e (${missing}, ?). Sem montar uma nova regra do zero, descubra o valor que falta e justifique por que a relação é diretamente proporcional.`,
        'Verifique se y/x permanece constante. Depois use a mesma constante no par incompleto.',
        `Nos pares conhecidos, y/x=${k}. Logo a regra é y=${k}x. Para x=${missing}, y=${k}·${missing}=${k*missing}. A razão permanece ${k}, por isso a relação é diretamente proporcional.`,
        `vf|tabela|${k}|${x}|${missing}`);
    }
    if(type===1){
      const a=R(3,7),b=R(5,15);
      return mc(`Três serviços têm as regras A(x)=${a}x, B(x)=${a}x+${b} e C(x)=${a+2}x. Quais representam proporcionalidade direta entre x e o preço?`,
        'Proporcionalidade direta precisa ter a forma y=kx e passar pela origem.',
        `A e C têm a forma y=kx e valem zero quando x=0. B possui valor inicial ${b}, portanto não é diretamente proporcional.`,
        'c',
        ['Somente A.','Somente B.','A e C.','A, B e C.'],
        `vf|modelos|${a}|${b}`);
    }
    const k1=R(4,8),k2=k1+R(2,5),t=R(4,9);
    return open(`Duas máquinas trabalham em ritmos constantes: M1 produz ${k1} peças por minuto e M2 produz ${k2}. Após ${t} minutos, um colega afirma que “como os resultados são diferentes, apenas uma delas é proporcional ao tempo”. Analise a afirmação.`,
      'Relações proporcionais podem ter constantes diferentes.',
      `A afirmação é falsa. M1 segue P=${k1}t e M2 segue P=${k2}t. Nas duas, produção/tempo é constante e o gráfico passa pela origem. O fato de as constantes serem diferentes muda a inclinação das retas, não a proporcionalidade.`,
      `vf|critica|${k1}|${k2}|${t}`);
  };

  G.algebra=function(level){
    if(level!==5)return base.algebra(level);
    const type=R(0,2),a=R(3,8),b=R(5,18);
    if(type===0){
      const x1=2,x2=5,y1=a*x1+b,y2=a*x2+b;
      return mc(`Uma cobrança apresentou os pares (quantidade, preço) (${x1}, ${y1}) e (${x2}, ${y2}). Qual fórmula reproduz os dois dados?`,
        'Teste cada fórmula nos dois valores de entrada.',
        `A regra y=${a}x+${b} produz ${a}·${x1}+${b}=${y1} e ${a}·${x2}+${b}=${y2}.`,
        'b',
        [`y=${a+b}x`,`y=${a}x+${b}`,`y=${a+1}x+${b}`,`y=${a}x−${b}`],
        `af5|dados|${a}|${b}`);
    }
    if(type===1){
      return open(`Uma empresa cobra ${BR(b)} de preparação e ${BR(a)} por unidade. Um aluno escreveu C(q)=(${b}+${a})q. Explique por que a fórmula está errada e escreva uma regra correta.`,
        'A taxa de preparação acontece uma vez; não deve ser multiplicada pela quantidade.',
        `A expressão (${b}+${a})q multiplica também a preparação por q. A regra correta é C(q)=${a}q+${b}: ${a} varia com a quantidade e ${b} aparece uma única vez.`,
        `af5|erro-modelo|${a}|${b}`);
    }
    const q=R(4,9),total=a*q+b;
    return open(`Uma gráfica cobra uma preparação fixa e um valor por unidade. Para ${q} unidades, o total foi ${BR(total)}; o valor por unidade é ${BR(a)}. Descubra a preparação fixa e escreva a fórmula do custo C(q).`,
      'Retire do total a parte que depende da quantidade.',
      `Parte variável: ${a}·${q}=${BR(a*q)}. Preparação: ${BR(total)}−${BR(a*q)}=${BR(b)}. Portanto C(q)=${a}q+${b}.`,
      `af5|inverso-modelo|${a}|${b}|${q}`);
  };

  G.funcao1=function(level){
    if(level!==5)return base.funcao1(level);
    const type=R(0,2);
    if(type===0){
      const a=R(3,7),b=R(8,20),c=a+R(2,5),d=Math.max(0,b-R(3,7)),x=R(3,8);
      const A=a*x+b,B=c*x+d;
      return open(`Dois planos são A(x)=${a}x+${b} e B(x)=${c}x+${d}. Para x=${x}, qual é mais barato? Depois explique qual cresce mais rápido e por quê.`,
        'Calcule os dois valores em x e compare os coeficientes de x.',
        `A(${x})=${A} e B(${x})=${B}; portanto ${A<B?'A é mais barato':A>B?'B é mais barato':'os dois custam o mesmo nesse ponto'}. Como ${c}>${a}, B cresce mais rápido por unidade. O termo inicial apenas indica onde cada plano começa.`,
        `f15|planos|${a}|${b}|${c}|${d}|${x}`);
    }
    if(type===1){
      const loss=P([4,5,6,8]),initial=loss*R(10,18),target=loss*R(2,6),time=(initial-target)/loss;
      return num(`Um reservatório segue V(t)=${initial}−${loss}t. Em quantos minutos o volume chegará a ${target} L?`,
        'Iguale V(t) ao volume desejado e faça o caminho inverso.',
        `${target}=${initial}−${loss}t; ${loss}t=${initial-target}; t=${time}.`,
        time,`f15|limiar|${initial}|${loss}|${target}`);
    }
    const a=R(2,6),b=R(5,15),x=R(2,6),y=a*x+b;
    return open(`Uma função afim passa pela situação x=${x} → y=${y} e possui variação de ${a} unidades em y para cada aumento de 1 em x. Descubra o valor inicial b e escreva a função.`,
      'Use y=ax+b e substitua o par conhecido.',
      `${y}=${a}·${x}+b. Então b=${y-a*x}. A função é f(x)=${a}x+${b}.`,
      `f15|reconstroi|${a}|${b}|${x}`);
  };

  G.quadratica=function(level){
    if(level!==5)return base.quadratica(level);
    const type=R(0,2);
    if(type===0){
      const a=P([-3,-2,2,3]),c=R(-4,6);
      return open(`Considere f(x)=${qexpr(a,0,c)}. Sem desenhar ponto por ponto, diga a concavidade, o ponto onde o gráfico cruza o eixo y e explique o que acontece com f(x) quando trocamos x por −x.`,
        'Observe a, c e o fato de x² ter o mesmo valor para x e −x.',
        `${a>0?'Como a>0, a parábola abre para cima.':'Como a<0, a parábola abre para baixo.'} Como f(0)=${c}, o gráfico cruza o eixo y em (0,${c}). Como x²=(−x)², f(x)=f(−x); o gráfico é simétrico em relação ao eixo y.`,
        `q5|analise|${a}|${c}`);
    }
    if(type===1){
      const a=R(1,4);
      const vals=[-2,-1,0,1,2].map(x=>a*x*x);
      return mc(`Uma tabela, para x=−2,−1,0,1,2, apresenta y=${vals.join(', ')}. Qual modelo explica os dados?`,
        'Observe a simetria e compare y com x².',
        `Os valores são ${a} vezes x². Portanto y=${a}x².`,
        'd',
        [`y=${a}x`,`y=x+${a}`,`y=${a}x+1`,`y=${a}x²`],
        `q5|tabela|${a}`);
    }
    const a=P([-4,-3,-2,2,3,4]),b=R(-5,5),c=R(-6,6);
    return open(`Na função f(x)=${qexpr(a,b,c)}, identifique a, b e c e explique duas informações que já podem ser previstas sem calcular as raízes.`,
      'O sinal de a indica a concavidade; c é f(0).',
      `${a>0?`a=${a}, b=${b}, c=${c}. Como a>0, a parábola abre para cima e possui mínimo no vértice.`:`a=${a}, b=${b}, c=${c}. Como a<0, a parábola abre para baixo e possui máximo no vértice.`} Como f(0)=c=${c}, ela cruza o eixo y em (0,${c}).`,
      `q5|coef|${a}|${b}|${c}`);
  };

  G.pa=function(level){
    if(level!==5)return base.pa(level);
    const type=R(0,2);
    if(type===0){
      const r=P([-5,-4,-3,3,4,5]),a1=R(8,20),n=R(5,10),target=a1+(n-1)*r;
      return num(`Uma PA começa em ${a1} e tem razão ${r}. Em qual posição aparece o termo ${target}?`,
        'Use aₙ=a₁+(n−1)r e resolva para n.',
        `${target}=${a1}+(n−1)·(${r}); resolvendo, n=${n}.`,
        n,`pa5|posicao|${a1}|${r}|${target}`);
    }
    if(type===1){
      const r=P([-4,-3,3,4]),a1=R(5,18),a3=a1+2*r,n=R(7,12),an=a1+(n-1)*r;
      return open(`Numa PA, o 3º termo é ${a3} e a razão é ${r}. Descubra o primeiro termo e depois o ${n}º termo.`,
        'Do primeiro ao terceiro termo acontecem dois passos de razão r.',
        `a₃=a₁+2r. Logo a₁=${a3}−2·(${r})=${a1}. Depois a${n}=${a1}+(${n}−1)·(${r})=${an}.`,
        `pa5|a3|${a3}|${r}|${n}`);
    }
    const a=R(2,8),r=R(2,5);
    return mc(`Qual das sequências abaixo NÃO é uma PA?`,
      'Compare as diferenças entre termos consecutivos.',
      `Na alternativa C, as diferenças são ${r}, ${r+1} e ${r+2}; elas não permanecem constantes.`,
      'c',
      [
        `${a}, ${a+r}, ${a+2*r}, ${a+3*r}`,
        `${a+12}, ${a+8}, ${a+4}, ${a}`,
        `${a}, ${a+r}, ${a+2*r+1}, ${a+3*r+3}`,
        `${a}, ${a-r}, ${a-2*r}, ${a-3*r}`
      ],
      `pa5|detecta|${a}|${r}`);
  };

  G.grandezas=function(level){
    if(level!==5)return base.grandezas(level);
    const type=R(0,2);
    if(type===0){
      const size=R(6,18)*20,speed=P([40,48,64,80]),bits=size*8,time=bits/speed;
      return num(`Um arquivo de ${size} MB será baixado por uma conexão efetiva de ${speed} Mb/s. Desprezando perdas, quanto tempo o download leva?`,
        'Converta MB para Mb usando 1 byte = 8 bits; depois faça dados ÷ taxa.',
        `${size} MB=${bits} Mb. Tempo=${bits}/${speed}=${F(time)} s.`,
        Number(time.toFixed(2)),`gr5|download|${size}|${speed}`,.02);
    }
    if(type===1){
      const speed=P([54,72,90]),meters=R(3,10)*100,ms=speed/3.6,time=meters/ms;
      return num(`Um veículo mantém ${speed} km/h por ${meters} m. Aproximadamente quantos segundos leva para percorrer essa distância?`,
        'Primeiro converta km/h para m/s; depois use tempo = distância ÷ velocidade.',
        `${speed}/3,6=${F(ms)} m/s. Tempo=${meters}/${F(ms)}≈${F(time)} s.`,
        Number(time.toFixed(2)),`gr5|movimento|${speed}|${meters}`,.05);
    }
    const density=R(2,8),volume=R(4,12)*50,mass=density*volume;
    return num(`Um material tem densidade ${density} g/cm³. Uma peça desse material ocupa ${volume} cm³. Qual é a massa da peça?`,
      'Da relação densidade = massa/volume, faça o caminho inverso.',
      `massa=densidade·volume=${density}·${volume}=${mass} g.`,
      mass,`gr5|massa|${density}|${volume}`);
  };
})();
