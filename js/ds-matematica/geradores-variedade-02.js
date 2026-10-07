(() => {
  'use strict';

  const data=window.DSMathGeneratorData;
  if(!data)return;
  const {G,R,P,F,BR}=data;
  const bags=window.__DSMathVarietyBags||(window.__DSMathVarietyBags={});
  const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;};
  const families=level=>level<=1?[0,1,2]:level===2?[0,1,2,3]:level===3?[1,2,3,4]:[0,2,3,4];
  const fam=(topic,level)=>{const k=topic+'|'+level;if(!bags[k]||!bags[k].length)bags[k]=shuffle(families(level));return bags[k].pop();};
  const num=(q,h,s,a,k,t=0)=>({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const mc=(q,h,s,answer,labels,k)=>({kind:'mc',question:q,hint:h,solution:s,answer,options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label})),key:k});
  const open=(q,h,s,k)=>({question:q,hint:h,solution:s,key:k});
  const sg=n=>n>=0?`+${n}`:`${n}`;

  G.quadratica=function(level){
    const f=fam('quadratica',level),a=P([-3,-2,-1,1,2,3]),b=R(-5,5),c=R(-8,8),x=R(-3,3);
    if(f===0){const y=a*x*x+b*x+c;return num(`Calcule f(${x}) para f(x)=${a}x²${sg(b)}x${sg(c)}.`,'Calcule x² primeiro e depois substitua cada termo.',`f(${x})=${a}·${x*x}${sg(b*x)}${sg(c)}=${y}.`,y,`q|valor|${a}|${b}|${c}|${x}`);}
    if(f===1)return mc('Qual expressão é quadrática?','Procure o maior expoente de x e verifique se o coeficiente de x² é diferente de zero.','A expressão com termo x² e coeficiente não nulo é quadrática.','b',[`${a}x${sg(c)}`,`${a}x²${sg(b)}x${sg(c)}`,`${c}`,`${b||2}x³+1`],`q|identifica|${a}|${b}|${c}`);
    if(f===2)return open(`Na função f(x)=${a}x²${sg(b)}x${sg(c)}, explique o que já é possível prever observando apenas o sinal de a e o valor de c.`,'a ajuda a prever a concavidade; c é f(0).',`${a>0?'Como a>0, a parábola abre para cima.':'Como a<0, a parábola abre para baixo.'} Como c=${c}, o gráfico cruza o eixo y em (0, ${c}).`,`q|interpreta|${a}|${b}|${c}`);
    if(f===3){const vals=[0,1,2,3].map(n=>a*n*n);return mc(`A tabela de y=${a}x² para x=0,1,2,3 produz ${vals.join(', ')}. Qual observação é correta?`,'Compare as diferenças entre valores consecutivos.','As diferenças não são constantes; isso combina com o comportamento quadrático.','d',['Os valores formam sempre uma PA.','A taxa de variação é constante.','O gráfico é uma reta.','As diferenças mudam; o ritmo de crescimento também muda.'],`q|tabela|${a}`);}
    return open('A área de um quadrado depende do lado L pela regra A=L². Explique por que a situação é quadrática e o que acontece com a área quando o lado dobra.','Compare L² com (2L)².','A variável aparece ao quadrado. Se L dobra, A passa de L² para (2L)²=4L²; portanto a área quadruplica.',`q|area|${a}`);
  };

  G.parabola=function(level){
    const f=fam('parabola',level),r1=R(-4,1),r2=r1+R(2,5),a=P([-2,-1,1,2]),b=-a*(r1+r2),c=a*r1*r2;
    if(f===0)return mc(`Para f(x)=${a}x²${sg(b)}x${sg(c)}, o sinal de a permite concluir o quê?`,'O sinal de a controla a abertura.',a>0?'A parábola abre para cima e o vértice é mínimo.':'A parábola abre para baixo e o vértice é máximo.',a>0?'a':'b',['Abre para cima e tem mínimo.','Abre para baixo e tem máximo.','É sempre crescente.','Não possui vértice.'],`pb|concavidade|${a}|${b}|${c}`);
    if(f===1)return mc(`Quais valores fazem f(x)=${a}x²${sg(b)}x${sg(c)} valer zero?`,'Raízes são os valores de x para os quais f(x)=0.',`As raízes são ${r1} e ${r2}; no gráfico, são os pontos em que a parábola cruza o eixo x.`,'c',[`${r1+r2} apenas`,`${c} apenas`,`${r1} e ${r2}`,'Nenhum valor real'],`pb|raizes|${a}|${r1}|${r2}`);
    if(f===2){const xv=(r1+r2)/2,yv=a*xv*xv+b*xv+c;return num(`Uma parábola tem raízes ${r1} e ${r2}. Qual é a coordenada x do eixo de simetria?`,'O eixo fica exatamente no ponto médio entre as raízes.',`x=(${r1}+${r2})/2=${F(xv)}. O vértice está sobre essa linha${Number.isInteger(yv)?` e tem y=${yv}`:''}.`,xv,`pb|simetria|${r1}|${r2}`,.001);}
    if(f===3){const delta=b*b-4*a*c;return open(`Um colega calculou Δ=${delta} para f(x)=${a}x²${sg(b)}x${sg(c)}. Explique o que o discriminante informa e como ele se relaciona com as raízes.`,'Pense no sinal de Δ.',`${delta>0?'Como Δ>0, existem duas raízes reais distintas.':delta===0?'Como Δ=0, existe uma raiz real dupla.':'Como Δ<0, não há raízes reais.'} O discriminante indica quantos cruzamentos com o eixo x podem ocorrer.`,`pb|delta|${a}|${b}|${c}`);}
    const xv=(r1+r2)/2,yv=a*xv*xv+b*xv+c;return mc(`Uma situação é modelada por f(x)=${a}x²${sg(b)}x${sg(c)}. Qual análise reúne corretamente raízes, simetria e extremo?`,'Use raízes, ponto médio e sinal de a.',`Raízes: ${r1} e ${r2}; eixo x=${F(xv)}; vértice é ${a>0?'mínimo':'máximo'}${Number.isInteger(yv)?` com y=${yv}`:''}.`,'d',[`Raízes ${r1} e ${r2}, mas eixo de simetria x=0.`,'A parábola não possui eixo de simetria.','O sinal de a não interfere em máximo ou mínimo.',`Raízes ${r1} e ${r2}; eixo x=${F(xv)}; vértice é ${a>0?'mínimo':'máximo'}.`],`pb|analise|${a}|${r1}|${r2}`);
  };

  G.quadrado=function(level){
    const f=fam('quadrado',level),a=R(1,6),x=R(2,7);
    if(f===0){const y=a*x*x;return num(`Se y=${a}x², calcule y para x=${x}.`,'Eleve x ao quadrado antes de multiplicar por a.',`y=${a}·${x*x}=${y}.`,y,`qq|valor|${a}|${x}`);}
    if(f===1)return mc(`Em y=${a}x², x passa de ${x} para ${2*x}. O que acontece com y?`,'Compare (2x)² com x².','Dobrar x multiplica x² por 4; portanto y também fica quatro vezes maior.','c',['y dobra.','y triplica.','y quadruplica.','y não muda.'],`qq|dobra|${a}|${x}`);
    if(f===2){const y=a*x*x,x2=x+1,y2=a*x2*x2;return open(`Compare os pares (${x}, ${y}) e (${x2}, ${y2}) da relação y=${a}x². Explique por que a razão y/x não é constante, mas y/x² é.`,'Calcule as duas razões em cada ponto.',`No primeiro, y/x=${F(y/x)} e y/x²=${a}. No segundo, y/x=${F(y2/x2)} e y/x²=${a}. A constante está ligada ao quadrado de x.`,`qq|razao|${a}|${x}|${x2}`);}
    if(f===3)return mc('Qual situação combina melhor com uma relação proporcional ao quadrado?','Procure uma grandeza que dependa naturalmente de x².','A área de um quadrado depende do quadrado do lado.','b',['Preço de produtos com valor unitário fixo.','Área de um quadrado em função do lado.','Distância percorrida com velocidade constante.','Mensalidade fixa.'],`qq|contexto|${a}`);
    return open('Uma pessoa afirma: “se o lado de um quadrado aumenta 50%, a área também aumenta 50%”. Analise a afirmação.','Use um lado inicial L e compare com 1,5L.','A nova área é (1,5L)²=2,25L². Portanto a área aumenta 125%, não 50%. O efeito é quadrático.',`qq|critica|${a}`);
  };

  G.transformacoes=function(level){
    const f=fam('transformacoes',level),h=R(1,5),k=R(1,6);
    if(f===0)return mc(`Comparando y=x² com y=x²+${k}, o que acontece?`,'O número foi somado fora do quadrado.',`Todos os valores de y aumentam ${k}; o gráfico sobe ${k} unidades.`,'b',[`Vai ${k} para a direita.`,`Sobe ${k}.`,'Reflete no eixo x.','Fica mais estreito.'],`tr|vertical|${k}`);
    if(f===1)return mc(`Comparando y=x² com y=(x−${h})², o que acontece?`,`Veja em qual x o quadrado vira zero: (${h}−${h})².`,`O vértice passa para x=${h}; o gráfico se desloca ${h} unidades à direita.`,'a',[`Vai ${h} à direita.`,`Vai ${h} à esquerda.`,`Sobe ${h}.`,'Reflete.'],`tr|horizontal|${h}`);
    if(f===2)return open('Explique por que y=−x² é uma reflexão de y=x² em relação ao eixo x.','Compare os valores de y para o mesmo x.','Cada saída troca de sinal: se x² produz y positivo, −x² produz o oposto negativo. Os pontos são espelhados verticalmente.','tr|reflexao');
    if(f===3){const aa=R(2,5);return mc(`Qual expressão mantém o vértice em (0,0) e multiplica todas as alturas de y=x² por ${aa}?`,'Procure uma multiplicação positiva fora da função.',`y=${aa}x² faz exatamente isso.`,'d',[`y=x²+${aa}`,`y=(x−${aa})²`,'y=−x²',`y=${aa}x²`],`tr|escala|${aa}`);}
    return open(`Descreva as transformações que levam y=x² até y=−(x−${h})²+${k}.`,'Leia a expressão por partes: x−h, sinal negativo e +k.',`x−${h} desloca ${h} para a direita; o sinal negativo reflete no eixo x; +${k} desloca ${k} para cima.`,`tr|combina|${h}|${k}`);
  };

  G.pa=function(level){
    const f=fam('pa',level),a1=R(2,15),r=P([-5,-4,-3,2,3,4,5]),n=R(5,12);
    if(f===0)return num(`Observe ${a1}, ${a1+r}, ${a1+2*r}, ${a1+3*r}, ... Qual é a razão r da PA?`,'Subtraia um termo pelo anterior.',`${a1+r}−${a1}=${r}. A mesma diferença se repete.`,r,`pa|razao|${a1}|${r}`);
    if(f===1){const ans=a1+(n-1)*r;return num(`Numa PA, a₁=${a1} e r=${r}. Qual é o ${n}º termo?`,'Da posição 1 à posição n acontecem n−1 passos.',`a${n}=${a1}+(${n}−1)·(${r})=${ans}.`,ans,`pa|termo|${a1}|${r}|${n}`);}
    if(f===2){const target=a1+(n-1)*r;return num(`Uma sequência começa em ${a1} e muda ${r} a cada posição. Em qual posição aparece o termo ${target}?`,'Use aₙ=a₁+(n−1)r e resolva para n.',`${target}=${a1}+(n−1)·(${r}); daí n=${n}.`,n,`pa|posicao|${a1}|${r}|${target}`);}
    if(f===3){const rr=R(2,6),rows=R(5,10),first=R(10,20),ans=first+(rows-1)*rr;return num(`Uma arquibancada tem ${first} lugares na primeira fileira e cada nova fileira tem ${rr} lugares a mais. Quantos lugares há na ${rows}ª fileira?`,'Modele as fileiras como uma PA.',`a${rows}=${first}+(${rows}−1)·${rr}=${ans}.`,ans,`pa|arquibancada|${first}|${rr}|${rows}`);}
    return open('Explique por que a palavra “razão” em uma PA não significa a mesma operação que “razão” em proporcionalidade.','Na PA observamos diferença entre termos; na proporcionalidade, divisão entre grandezas.','Na PA, r é a diferença constante entre termos consecutivos. Em proporcionalidade, razão é uma comparação por divisão. A palavra é a mesma, mas o contexto matemático é diferente.',`pa|linguagem|${r}`);
  };
})();