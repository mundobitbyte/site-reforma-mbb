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

  G.variacao=function(level){
    const f=fam('variacao',level),k=R(3,12),x=R(2,9);
    if(f===0){
      const c=P([['Uma gráfica imprime','cartões','minuto'],['Uma esteira separa','caixas','minuto'],['Um servidor transfere','MB','segundo']]),total=k*x;
      return num(`${c[0]} ${k} ${c[1]} por ${c[2]}, sempre no mesmo ritmo. Quantos ${c[1]} serão processados em ${x} ${c[2]}${x>1?'s':''}?`,'Identifique a taxa por unidade e multiplique pelo tempo.',`${k}·${x}=${total}. A taxa por ${c[2]} permanece constante, portanto a relação é proporcional.`,total,`v|direto|${c[1]}|${k}|${x}`);
    }
    if(f===1){const total=k*x;return num(`Uma máquina produziu ${total} peças em ${x} minutos mantendo ritmo constante. Qual é a produção por minuto?`,'Agora a incógnita é a taxa: total ÷ tempo.',`${total}/${x}=${k} peças por minuto.`,k,`v|inverso|${k}|${x}`);}
    if(f===2){
      const b=R(4,18),a1=k+b,a2=2*k+b,a3=3*k+b;
      return mc(`Um serviço apresenta os pares (quantidade, preço): (1, ${a1}), (2, ${a2}), (3, ${a3}). Qual conclusão é correta?`,'Calcule preço ÷ quantidade em mais de um par.',`As razões são ${a1}, ${F(a2/2)} e ${F(a3/3)}. Elas mudam porque existe um valor inicial ${b}.`,'c',['É proporcional porque o preço sempre aumenta.','É proporcional porque a diferença entre preços é constante.','Não é diretamente proporcional porque preço/quantidade não é constante.','As grandezas não possuem relação.'],`v|tabela|${k}|${b}`);
    }
    if(f===3){
      const fixed=R(5,20),rate=R(2,8),q=R(3,7),total=fixed+rate*q;
      return open(`Um aplicativo cobra ${BR(fixed)} de taxa inicial e ${BR(rate)} por quilômetro. Uma corrida de ${q} km custa ${BR(total)}. Explique por que distância e preço aumentam juntos, mas não formam uma proporcionalidade direta.`,'Pergunte o que acontece quando a distância é zero e se preço/distância fica constante.',`Mesmo em 0 km existe ${BR(fixed)}. A regra é P=${rate}d+${fixed}; por isso P/d muda conforme d. Crescer junto não basta para ser proporcional.`,`v|justifica|${fixed}|${rate}|${q}`);
    }
    const k2=k+R(1,5),t=R(2,6),d1=k*t,d2=k2*t;
    return mc(`Duas conexões transferem dados durante ${t} s. A primeira mantém ${k} MB/s e a segunda ${k2} MB/s. Qual afirmação compara corretamente as duas relações?`,'As duas seguem dados = taxa × tempo. Compare as constantes.',`A primeira transfere ${d1} MB e a segunda ${d2} MB. As duas são proporcionais ao tempo, mas possuem constantes diferentes.`,'b',['Só a conexão mais rápida é proporcional.','As duas são proporcionais ao tempo; muda a constante da relação.','Nenhuma é proporcional porque as taxas são diferentes.','Os dois gráficos precisam ser a mesma reta.'],`v|compara|${k}|${k2}|${t}`);
  };

  G.algebra=function(level){
    const f=fam('algebra',level),a=R(2,7),b=R(3,18),x=R(2,9);
    if(f===0){const y=a*x+b;return num(`Na regra y=${a}x+${b}, qual é o valor de y quando x=${x}?`,'Substitua x e respeite a ordem das operações.',`y=${a}·${x}+${b}=${y}.`,y,`a|calcula|${a}|${b}|${x}`);}
    if(f===1){const c=P([['uma locadora','C(h)','hora','taxa inicial'],['um estacionamento','P(t)','hora','entrada'],['um serviço de impressão','C(q)','unidade','preparação']]);return open(`${c[0]} cobra ${BR(b)} de ${c[3]} e ${BR(a)} por ${c[2]}. Escreva uma fórmula para o custo total em função da quantidade usada.`,'Separe a parte fixa da parte que varia.',`Uma possibilidade é ${c[1]}=${a}x+${b}, usando x para a quantidade. ${b} é a parte fixa e ${a} multiplica o valor que varia.`,`a|modelo|${c[1]}|${a}|${b}`);}
    if(f===2){const y=a*x+b;return num(`A regra é y=${a}x+${b}. Sabemos que o resultado foi y=${y}. Qual valor de x foi usado?`,'Faça o caminho inverso: retire o valor fixo e depois divida pelo multiplicador.',`${y}−${b}=${a*x}; ${a*x}/${a}=${x}.`,x,`a|inverso|${a}|${b}|${y}`);}
    if(f===3)return mc(`Na expressão C(q)=${a}q+${b}, usada para uma cobrança, qual interpretação faz mais sentido?`,'Pense no que muda e no que permanece fixo.',`q é a quantidade variável; ${a} é o custo por unidade; ${b} é o valor fixo.`,'d',[`${a} é uma variável e q é uma constante.`,`${b} deve mudar toda vez que q muda.`,'q representa necessariamente dinheiro.',`q pode variar, ${a} multiplica cada unidade e ${b} permanece fixo.`],`a|interpreta|${a}|${b}`);
    return open('Um colega escreveu “3x significa 3+x”. Explique o erro e dê um exemplo numérico que mostre o significado correto de 3x.','Número ao lado de letra indica multiplicação.','3x significa 3·x. Por exemplo, se x=4, então 3x=12, enquanto 3+4=7.',`a|erro|${x}`);
  };

  G.funcao1=function(level){
    const f=fam('funcao1',level),a=R(2,8),b=R(4,20),x=R(1,8);
    if(f===0){const y=a*x+b;return num(`Uma função de custo é C(x)=${a}x+${b}. Qual é o custo para x=${x}?`,'Leia C(x) como a saída produzida para a entrada x.',`C(${x})=${a}·${x}+${b}=${y}.`,y,`f1|valor|${a}|${b}|${x}`);}
    if(f===1)return mc(`Uma empresa usa C(h)=${a}h+${b} para calcular uma cobrança por hora. O que representam ${a} e ${b}?`,'Compare com “valor por hora + taxa inicial”.',`${a} é a variação por hora e ${b} é o valor inicial.`,'a',[`${a} é o preço por hora e ${b} é a cobrança inicial.`,`${a} é o número de horas e ${b} é a saída.`,'Os dois valores são variáveis.','Não é possível interpretar os coeficientes.'],`f1|coef|${a}|${b}`);
    if(f===2){const y=a*x+b;return num(`Uma assistência cobra ${BR(b)} de visita e ${BR(a)} por hora. Um atendimento custou ${BR(y)}. Quantas horas foram cobradas?`,'Retire primeiro a visita; depois divida pelo preço por hora.',`${y}−${b}=${a*x}; ${a*x}/${a}=${x} horas.`,x,`f1|inverso|${a}|${b}|${x}`);}
    if(f===3){const a2=a+R(1,4),b2=Math.max(0,b-R(1,4));return open(`Compare os planos A(x)=${a}x+${b} e B(x)=${a2}x+${b2}. Sem fazer uma tabela inteira, explique qual começa mais caro e qual cresce mais rápido.`,'O termo independente mostra o valor inicial; o coeficiente de x mostra a variação por unidade.',`A começa em ${b} e B em ${b2}; portanto ${b>b2?'A':'B'} começa mais caro. B varia ${a2} por unidade e A ${a}; portanto B cresce mais rápido.`,`f1|compara|${a}|${b}|${a2}|${b2}`);}
    return mc('Qual situação pode ser representada naturalmente por uma função constante?','Numa função constante, a saída não muda quando a entrada muda.','Uma mensalidade fixa sem cobrança por uso produz sempre o mesmo valor.','c',['Preço de frutas por quilograma.','Distância percorrida ao longo do tempo.','Mensalidade fixa que não depende da quantidade usada.','Custo com taxa inicial mais valor por hora.'],`f1|tipo|${a}`);
  };

  G.reta=function(level){
    const f=fam('reta',level),dx=R(2,6),m=P([-4,-3,-2,2,3,4]),dy=m*dx;
    if(f===0)return num(`Ao avançar ${dx} unidades na horizontal, uma reta varia ${dy} na vertical. Qual é seu coeficiente angular?`,'Faça variação vertical ÷ variação horizontal.',`m=${dy}/${dx}=${m}.`,m,`r|delta|${dx}|${dy}`);
    if(f===1){const y0=R(1,10),x0=R(0,4),x1=x0+dx,y1=y0+dy;return num(`Uma reta passa por (${x0}, ${y0}) e (${x1}, ${y1}). Calcule m.`,'Calcule Δy e Δx separadamente.',`Δy=${y1}−${y0}=${dy}; Δx=${x1}−${x0}=${dx}; m=${m}.`,m,`r|pontos|${x0}|${y0}|${x1}|${y1}`);}
    if(f===2){const loss=R(2,7);return mc(`Um reservatório perde ${loss} litros por minuto de forma constante. Se volume está no eixo y e tempo no eixo x, como será o sinal da inclinação?`,'Quando x aumenta, y diminui.','A variação vertical é negativa enquanto o tempo aumenta, então m<0.','b',['m>0','m<0','m=0','Não existe inclinação'],`r|contexto|${loss}`);}
    if(f===3){const b=R(-5,10),xx=R(1,5),y=m*xx+b;return num(`A reta y=${m}x${sg(b)} passa pelo ponto (${xx}, y). Qual é a coordenada y?`,'Substitua x na equação.',`y=${m}·${xx}${sg(b)}=${y}.`,y,`r|ponto|${m}|${b}|${xx}`);}
    const m2=m>0?m+R(1,3):m-R(1,3);return open(`Duas rampas são representadas por retas com coeficientes angulares m₁=${m} e m₂=${m2}. Compare as inclinações e explique o que o sinal e o valor absoluto indicam.`,'O sinal indica subir/descer; o valor absoluto compara quão inclinada é.',`${Math.abs(m2)>Math.abs(m)?'A segunda':'A primeira'} tem maior inclinação em módulo. Sinal positivo indica subida da esquerda para a direita; negativo, descida.`,`r|compara|${m}|${m2}`);
  };

  G.partes=function(level){
    const f=fam('partes',level),limit=R(5,12),base=R(15,30),extra=R(2,6),x=limit+R(1,6);
    if(f===0){const total=base+extra*(x-limit);return num(`Um plano custa ${BR(base)} até ${limit} GB. Acima disso, cobra ${BR(extra)} por GB excedente. Quanto paga quem usa ${x} GB?`,'Descubra primeiro apenas o excedente.',`Excedente=${x}−${limit}=${x-limit} GB. Acréscimo=${BR(extra*(x-limit))}. Total=${BR(total)}.`,total,`p|tarifa|${limit}|${base}|${extra}|${x}`,.01);}
    if(f===1){const below=R(1,limit);return mc(`Uma função usa a regra A para x≤${limit} e a regra B para x>${limit}. Qual regra deve ser usada quando x=${below}?`,'Compare o valor com o limite antes de calcular.',`Como ${below}≤${limit}, usa-se a regra A.`,'a',['Regra A','Regra B','As duas ao mesmo tempo','Nenhuma'],`p|escolhe|${limit}|${below}`);}
    if(f===2)return open(`Explique com suas palavras o que significa “0<t≤${limit}” em uma função definida por partes.`,'Leia como duas condições simultâneas.',`t é maior que zero e, ao mesmo tempo, menor ou igual a ${limit}. Essa é a faixa em que a regra vale.`,`p|leitura|${limit}`);
    if(f===3)return mc(`Um estudante calculou uma cobrança acima do limite de ${limit} unidades aplicando o preço extra a TODAS as ${x} unidades. Qual é o erro?`,'O preço extra vale apenas para o que ultrapassa o limite.',`O excedente é ${x-limit}, não ${x}. Só a parte acima do limite recebe a nova regra.`,'c',['Ele deveria multiplicar por zero.','Ele deveria ignorar o limite.','Ele aplicou a segunda regra também à parte da primeira faixa.','Funções por partes não representam tarifas.'],`p|erro|${limit}|${x}`);
    return open(`Crie uma regra por partes para um estacionamento que cobra ${BR(base)} até ${limit} horas e acrescenta ${BR(extra)} por hora excedente. Explique como decidir qual regra usar.`,'Separe “até o limite” e “acima do limite”.',`Uma possibilidade: P(t)=${base}, se 0<t≤${limit}; P(t)=${base}+${extra}(t−${limit}), se t>${limit}. Primeiro compare t com ${limit}; só depois calcule.`,`p|modelo|${limit}|${base}|${extra}`);
  };
})();