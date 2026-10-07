(() => {
  'use strict';
  const data = window.DSMathGeneratorData;
  if (!data) return;
  const {G,R,P,F,BR} = data;
  const bags = window.__DSMathVarietyBags || (window.__DSMathVarietyBags = {});
  const shuffle = a => { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];} return b; };
  const families = level => level<=1?[0,1,2]:level===2?[0,1,2,3]:level===3?[1,2,3,4]:[0,2,3,4];
  const fam = (topic,level) => { const k=topic+'|'+level; if(!bags[k]||!bags[k].length) bags[k]=shuffle(families(level)); return bags[k].pop(); };
  const num = (q,h,s,a,k,t=0)=>({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const mc = (q,h,s,answer,labels,k)=>({kind:'mc',question:q,hint:h,solution:s,answer,options:labels.map((label,i)=>({id:String.fromCharCode(97+i),label})),key:k});
  const open = (q,h,s,k)=>({question:q,hint:h,solution:s,key:k});
  const sg = n => n>=0?`+${n}`:`${n}`;
  const qlead = a => a===1?'x²':a===-1?'−x²':`${a}x²`;
  const qlin = b => b===0?'':b===1?'+x':b===-1?'−x':b>0?`+${b}x`:`−${Math.abs(b)}x`;
  const qconst = c => c===0?'':c>0?`+${c}`:`−${Math.abs(c)}`;
  const qexpr = (a,b,c) => `${qlead(a)}${qlin(b)}${qconst(c)}`;
  const addDisplay = (a,b) => b<0?`${a}−${Math.abs(b)}`:`${a}+${b}`;

  // Linguagem algébrica — mantém a mesma letra no enunciado e na resolução.
  G.algebra = function(level){
    const f=fam('algebra',level),a=R(2,7),b=R(3,18),x=R(2,9);
    if(f===0){const y=a*x+b;return num(`Na regra y=${a}x+${b}, qual é o valor de y quando x=${x}?`,'Substitua x e respeite a ordem das operações.',`y=${a}·${x}+${b}=${y}.`,y,`af|calcula|${a}|${b}|${x}`);}
    if(f===1){
      const c=P([
        {nome:'uma locadora',fn:'C',v:'h',un:'hora',fixa:'taxa inicial',dep:'tempo em horas'},
        {nome:'um estacionamento',fn:'P',v:'t',un:'hora',fixa:'entrada',dep:'tempo de permanência'},
        {nome:'um serviço de impressão',fn:'C',v:'q',un:'unidade',fixa:'preparação',dep:'quantidade de unidades impressas'}
      ]);
      return open(`${c.nome} cobra ${BR(b)} de ${c.fixa} e ${BR(a)} por ${c.un}. Escreva ${c.fn}(${c.v}), o custo total em função do ${c.dep}.`,'Separe a parte fixa da parte que varia.',`${c.fn}(${c.v})=${a}${c.v}+${b}. O termo ${a}${c.v} varia com a quantidade; ${b} permanece fixo.`,`af|modelo|${c.fn}|${c.v}|${a}|${b}`);
    }
    if(f===2){const y=a*x+b;return num(`A regra é y=${a}x+${b}. Sabemos que o resultado foi y=${y}. Qual valor de x foi usado?`,'Faça o caminho inverso: retire o valor fixo e depois divida pelo multiplicador.',`${y}−${b}=${a*x}; ${a*x}/${a}=${x}.`,x,`af|inverso|${a}|${b}|${y}`);}
    if(f===3)return mc(`Qual classificação está correta para as escritas abaixo?`,'Expressão não afirma igualdade; equação iguala duas expressões; fórmula relaciona grandezas.',`3x+7 é expressão; 3x+7=22 é equação; P=6+2,5d é uma fórmula que relaciona preço e distância.`,'d',['3x+7 é uma equação.','3x+7=22 é apenas uma expressão sem igualdade.','P=6+2,5d não relaciona grandezas.','3x+7 é expressão, 3x+7=22 é equação e P=6+2,5d pode ser usada como fórmula.'],`af|classifica|${a}`);
    return open('Um colega escreveu “3x significa 3+x”. Explique o erro e dê um exemplo numérico que mostre o significado correto de 3x.','Número ao lado de letra indica multiplicação.','3x significa 3·x. Por exemplo, se x=4, então 3x=12, enquanto 3+4=7.',`af|erro|${x}`);
  };

  // Função afim — inclui variação negativa e domínio coerente com o contexto.
  G.funcao1 = function(level){
    const f=fam('funcao1',level),a=R(2,8),b=R(6,20),x=R(1,8);
    if(f===0){const y=a*x+b;return num(`Uma função de custo é C(x)=${a}x+${b}. Qual é o custo para x=${x}?`,'Leia C(x) como a saída produzida para a entrada x.',`C(${x})=${a}·${x}+${b}=${y}.`,y,`f1a|valor|${a}|${b}|${x}`);}
    if(f===1)return mc(`Uma empresa usa C(h)=${a}h+${b} para calcular uma cobrança por hora. O que representam ${a} e ${b}?`,'Compare com “valor por hora + taxa inicial”.',`${a} é a variação por hora e ${b} é o valor inicial.`,'a',[`${a} é o preço por hora e ${b} é a cobrança inicial.`,`${a} é o número de horas e ${b} é a saída.`,'Os dois valores são variáveis.','Não é possível interpretar os coeficientes.'],`f1a|coef|${a}|${b}`);
    if(f===2){const y=a*x+b;return num(`Uma assistência cobra ${BR(b)} de visita e ${BR(a)} por hora. Um atendimento custou ${BR(y)}. Quantas horas foram cobradas?`,'Retire primeiro a visita; depois divida pelo preço por hora.',`${y}−${b}=${a*x}; ${a*x}/${a}=${x} horas.`,x,`f1a|inverso|${a}|${b}|${x}`);}
    if(f===3){const a2=a+R(1,4),b2=Math.max(0,b-R(1,4));return open(`Compare os planos A(x)=${a}x+${b} e B(x)=${a2}x+${b2}. Sem fazer uma tabela inteira, explique qual começa mais caro e qual cresce mais rápido.`,'O termo independente mostra o valor inicial; o coeficiente de x mostra a variação por unidade.',`A começa em ${b} e B em ${b2}; portanto ${b>b2?'A':'B'} começa mais caro. B varia ${a2} por unidade e A ${a}; portanto B cresce mais rápido.`,`f1a|compara|${a}|${b}|${a2}|${b2}`);}
    const rate=P([4,6,8]),initial=rate*R(8,14),minutes=R(2,Math.min(8,initial/rate));
    return open(`Um reservatório começa com ${initial} L e perde ${rate} L por minuto. Escreva V(t), calcule V(${minutes}) e explique até qual valor de t a regra faz sentido fisicamente.`,'Valor inicial menos perda por minuto. O modelo físico deixa de fazer sentido quando o volume ficaria negativo.',`V(t)=${initial}−${rate}t. V(${minutes})=${initial-rate*minutes} L. O reservatório zera em t=${initial/rate}; no contexto, usamos 0≤t≤${initial/rate}.`,`f1a|decresce|${initial}|${rate}|${minutes}`);
  };

  // Reta — inclui o caso vertical para consolidar a divisão por zero.
  G.reta = function(level){
    const f=fam('reta',level),dx=R(2,6),m=P([-4,-3,-2,2,3,4]),dy=m*dx;
    if(f===0)return num(`Ao avançar ${dx} unidades na horizontal, uma reta varia ${dy} na vertical. Qual é seu coeficiente angular?`,'Faça variação vertical ÷ variação horizontal.',`m=${dy}/${dx}=${m}.`,m,`ra|delta|${dx}|${dy}`);
    if(f===1){const y0=R(1,10),x0=R(0,4),x1=x0+dx,y1=y0+dy;return num(`Uma reta passa por (${x0}, ${y0}) e (${x1}, ${y1}). Calcule m.`,'Calcule Δy e Δx separadamente.',`Δy=${y1}−${y0}=${dy}; Δx=${x1}−${x0}=${dx}; m=${m}.`,m,`ra|pontos|${x0}|${y0}|${x1}|${y1}`);}
    if(f===2){const loss=R(2,7);return mc(`Um reservatório perde ${loss} litros por minuto de forma constante. Se volume está no eixo y e tempo no eixo x, como será o sinal da inclinação?`,'Quando x aumenta, y diminui.','A variação vertical é negativa enquanto o tempo aumenta, então m<0.','b',['m>0','m<0','m=0','Não existe inclinação'],`ra|contexto|${loss}`);}
    if(f===3){const bb=R(-5,10),xx=R(1,5),y=m*xx+bb;return num(`A reta y=${m}x${sg(bb)} passa pelo ponto (${xx}, y). Qual é a coordenada y?`,'Substitua x na equação.',`y=${m}·${xx}${sg(bb)}=${y}.`,y,`ra|ponto|${m}|${bb}|${xx}`);}
    if(P([true,false])) return open(`A reta vertical x=${R(2,7)} possui coeficiente angular m do tipo Δy/Δx? Explique.`,'Numa reta vertical, dois pontos diferentes possuem o mesmo x.',`Não. Entre dois pontos da reta vertical, Δx=0; calcular Δy/Δx exigiria divisão por zero. Por isso não existe um coeficiente angular definido por esse quociente.`,`ra|vertical|${m}`);
    const m2=m>0?m+R(1,3):m-R(1,3);return open(`Duas retas têm coeficientes angulares m₁=${m} e m₂=${m2}. Compare as inclinações e explique o que o sinal e o valor absoluto indicam.`,'O sinal indica subir/descer; o valor absoluto compara quão inclinada é.',`${Math.abs(m2)>Math.abs(m)?'A segunda':'A primeira'} tem maior inclinação em módulo. Sinal positivo indica subida da esquerda para a direita; negativo, descida.`,`ra|compara|${m}|${m2}`);
  };

  // Funções por partes — testa deliberadamente o valor exatamente no limite.
  G.partes = function(level){
    const f=fam('partes',level),limit=R(5,12),base=R(15,30),extra=R(2,6),x=limit+R(1,6);
    if(f===0){const total=base+extra*(x-limit);return num(`Um plano custa ${BR(base)} até ${limit} GB. Acima disso, cobra ${BR(extra)} por GB excedente. Quanto paga quem usa ${x} GB?`,'Descubra primeiro apenas o excedente.',`Excedente=${x}−${limit}=${x-limit} GB. Acréscimo=${BR(extra*(x-limit))}. Total=${BR(total)}.`,total,`pa|tarifa|${limit}|${base}|${extra}|${x}`,.01);}
    if(f===1){const value=P([Math.max(1,limit-1),limit,limit+1]);const first=value<=limit;return mc(`Uma função usa a regra A para x≤${limit} e a regra B para x>${limit}. Qual regra deve ser usada quando x=${value}?`,'Observe com atenção se o sinal inclui ou exclui o limite.',`${value}${first?'≤':'>'}${limit}; portanto usa-se a regra ${first?'A':'B'}.` ,first?'a':'b',['Regra A','Regra B','As duas ao mesmo tempo','Nenhuma'],`pa|limite|${limit}|${value}`);}
    if(f===2)return open(`Explique com suas palavras o que significa “0<t≤${limit}” em uma função definida por partes.`,'Leia como duas condições simultâneas.',`t é maior que zero e, ao mesmo tempo, menor ou igual a ${limit}. Essa é a faixa em que a regra vale.`,`pa|leitura|${limit}`);
    if(f===3)return mc(`Um estudante calculou uma cobrança acima do limite de ${limit} unidades aplicando o preço extra a TODAS as ${x} unidades. Qual é o erro?`,'O preço extra vale apenas para o que ultrapassa o limite.',`O excedente é ${x-limit}, não ${x}. Só a parte acima do limite recebe a nova regra.`,'c',['Ele deveria multiplicar por zero.','Ele deveria ignorar o limite.','Ele aplicou a segunda regra também à parte da primeira faixa.','Funções por partes não representam tarifas.'],`pa|erro|${limit}|${x}`);
    return open(`Num gráfico por partes, uma regra vale para x≤${limit} e outra para x>${limit}. Como você representaria o ponto de fronteira de cada parte?`,'Ponto preenchido indica valor incluído; ponto vazio indica valor excluído.',`Na parte x≤${limit}, o ponto em x=${limit} é incluído e pode ser desenhado preenchido. Na parte x>${limit}, o valor x=${limit} é excluído e, quando for útil indicar a fronteira, pode aparecer como ponto vazio.`,`pa|grafico|${limit}`);
  };

  // Parábola — o exercício de discriminante agora produz Δ positivo, zero e negativo.
  G.parabola = function(level){
    const f=fam('parabola',level),r1=R(-4,1),r2=r1+R(2,5),a=P([-2,-1,1,2]),b=-a*(r1+r2),c=a*r1*r2;
    if(f===0)return mc(`Para f(x)=${qexpr(a,b,c)}, o sinal de a permite concluir o quê?`,'O sinal de a controla a abertura.',a>0?'A parábola abre para cima e o vértice é mínimo.':'A parábola abre para baixo e o vértice é máximo.',a>0?'a':'b',['Abre para cima e tem mínimo.','Abre para baixo e tem máximo.','É sempre crescente.','Não possui vértice.'],`pbf|concavidade|${a}|${b}|${c}`);
    if(f===1)return mc(`Quais valores fazem f(x)=${qexpr(a,b,c)} valer zero?`,'Raízes são os valores de x para os quais f(x)=0.',`As raízes são ${r1} e ${r2}; no gráfico, são os pontos em que a parábola cruza o eixo x.`,'c',[`${r1+r2} apenas`,`${c} apenas`,`${r1} e ${r2}`,'Nenhum valor real'],`pbf|raizes|${a}|${r1}|${r2}`);
    if(f===2){const xv=(r1+r2)/2,yv=a*xv*xv+b*xv+c;return num(`Uma parábola tem raízes ${r1} e ${r2}. Qual é a coordenada x do eixo de simetria?`,'O eixo fica exatamente no ponto médio entre as raízes.',`x=(${addDisplay(r1,r2)})/2=${F(xv)}. O vértice está sobre essa linha${Number.isInteger(yv)?` e tem y=${yv}`:''}.`,xv,`pbf|simetria|${r1}|${r2}`,.001);}
    if(f===3){
      const type=P(['two','double','none']);
      let aa=1,bb,cc,delta,meaning;
      if(type==='two'){const u=R(-4,0),v=u+R(2,5);bb=-(u+v);cc=u*v;delta=bb*bb-4*cc;meaning='duas raízes reais diferentes e dois cruzamentos com o eixo x';}
      else if(type==='double'){const u=R(-3,3);bb=-2*u;cc=u*u;delta=0;meaning='uma raiz real repetida; a parábola toca o eixo x no vértice';}
      else {const u=R(-3,3),q=R(1,4);bb=-2*u;cc=u*u+q;delta=bb*bb-4*cc;meaning='nenhuma raiz real; a parábola não encontra o eixo x';}
      return open(`Para f(x)=${qexpr(aa,bb,cc)}, o discriminante é Δ=${delta}. O que seu sinal permite prever sobre as raízes e o gráfico?`,'Use: Δ>0 → duas raízes; Δ=0 → uma raiz repetida; Δ<0 → nenhuma raiz real.',`Como Δ=${delta}, temos ${meaning}.`,`pbf|delta|${bb}|${cc}|${delta}`);
    }
    const xv=(r1+r2)/2,yv=a*xv*xv+b*xv+c;return mc(`Uma situação é modelada por f(x)=${qexpr(a,b,c)}. Qual análise reúne corretamente raízes, simetria e extremo?`,'Use raízes, ponto médio e sinal de a.',`Raízes: ${r1} e ${r2}; eixo x=${F(xv)}; vértice é ${a>0?'mínimo':'máximo'}${Number.isInteger(yv)?` com y=${yv}`:''}.`,'d',[`Raízes ${r1} e ${r2}, mas eixo de simetria x=0.`,'A parábola não possui eixo de simetria.','O sinal de a não interfere em máximo ou mínimo.',`Raízes ${r1} e ${r2}; eixo x=${F(xv)}; vértice é ${a>0?'mínimo':'máximo'}.`],`pbf|analise|${a}|${r1}|${r2}`);
  };

  // Porcentagem — nível alto alterna juros e mudanças sucessivas de base.
  G.porcentagem = function(level){
    const f=fam('porcentagem',level),p=P([5,8,10,12,15,20,25,30]),v=R(5,30)*20;
    if(f===0)return num(`Quanto é ${p}% de ${BR(v)}?`,'Transforme a porcentagem em p/100 e multiplique pela base.',`${p}/100·${v}=${BR(v*p/100)}.`,v*p/100,`pcf|parte|${p}|${v}`,.01);
    if(f===1){const novo=v*(1+p/100);return num(`Um produto de ${BR(v)} recebe aumento de ${p}%. Qual é o novo preço?`,'Calcule o aumento e some ao valor antigo.',`Aumento=${BR(v*p/100)}; novo=${BR(novo)}.`,novo,`pcf|aumento|${p}|${v}`,.01);}
    if(f===2){const novo=v*(1-p/100);return num(`Um produto de ${BR(v)} recebe desconto de ${p}%. Qual é o preço final?`,'Calcule a parte descontada e retire da base.',`Desconto=${BR(v*p/100)}; final=${BR(novo)}.`,novo,`pcf|desconto|${p}|${v}`,.01);}
    if(f===3){const antigo=v,novo=v+v*p/100;return num(`Um valor passou de ${BR(antigo)} para ${BR(novo)}. Qual foi a variação percentual?`,'Mudança ÷ valor antigo × 100.',`Mudança=${BR(novo-antigo)}; (${F(novo-antigo)})/${antigo}·100=${p}%.`,p,`pcf|variacao|${p}|${v}`,.01);}
    if(P([true,false])){
      const i=P([1,2,3,4])/100,t=R(2,5),c=R(5,20)*100,mont=c*(1+i)**t,simples=c*(1+i*t);
      return open(`Compare ${BR(c)} aplicados a ${F(i*100)}% ao mês por ${t} meses em juros simples e compostos. Explique por que os resultados são diferentes.`,'No simples, a base não muda; no composto, o saldo vira a nova base.',`Simples: ${BR(simples)}. Compostos: ${BR(mont)}. Nos compostos, cada período calcula a porcentagem sobre um saldo já alterado.`,`pcf|juros|${c}|${i}|${t}`);
    }
    const start=R(5,20)*20,up=P([10,20,25]),down=P([10,20,25]),after=start*(1+up/100),final=after*(1-down/100);
    return open(`Um valor de ${BR(start)} aumenta ${up}% e depois diminui ${down}%. Calcule o resultado final e explique por que não basta fazer ${up}−${down}.`,'A segunda porcentagem usa o valor já alterado como nova base.',`Após o aumento: ${BR(after)}. Depois da redução: ${BR(final)}. As porcentagens usam bases diferentes, por isso não se combinam apenas subtraindo os percentuais.`,`pcf|sucessivas|${start}|${up}|${down}`);
  };

  // Grandezas compostas — inclui bit e byte no contexto de DS.
  G.grandezas = function(level){
    const f=fam('grandezas',level);
    if(f===0){const d=R(6,30)*10,t=P([2,3,4,5]),v=d/t;return num(`Um veículo percorre ${d} km em ${t} h. Qual é a velocidade média?`,'Velocidade média = distância ÷ tempo.',`${d}/${t}=${F(v)} km/h.`,v,`grf|vel|${d}|${t}`,.01);}
    if(f===1){const mb=R(4,20)*100,s=R(4,20),tx=mb/s;return num(`Um arquivo de ${mb} MB é transferido em ${s} s. Qual é a taxa média em MB/s?`,'Dados ÷ tempo.',`${mb}/${s}=${F(tx)} MB/s.`,tx,`grf|dados|${mb}|${s}`,.02);}
    if(f===2){const kmh=P([36,54,72,90,108]);return num(`Converta ${kmh} km/h para m/s sem usar apenas a regra decorada.`,'Transforme quilômetros em metros e horas em segundos.',`${kmh}·1000/3600=${F(kmh/3.6)} m/s.`,kmh/3.6,`grf|converte|${kmh}`,.02);}
    if(f===3){const m=R(20,80)*10,v=R(2,10)*10,d=m/v;return num(`Uma amostra tem massa ${m} g e volume ${v} cm³. Qual é a densidade em g/cm³?`,'Massa ÷ volume.',`${m}/${v}=${F(d)} g/cm³.`,d,`grf|densidade|${m}|${v}`,.02);}
    if(P([true,false])) return mc('Qual leitura da unidade está correta?','A barra “/” pode ser lida como “por” ou “dividido por”.','MB/s significa megabytes divididos por segundo.','d',['km/h significa horas multiplicadas por quilômetros.','g/L significa litros por grama.','m² significa metros divididos por metros.','MB/s significa megabytes divididos por segundo.'],'grf|unidade');
    const MB=R(5,30),Mbps=MB*8;
    return num(`Uma transferência ocorre a ${MB} MB/s. Qual é a taxa equivalente em Mb/s?`,'B maiúsculo indica byte; b minúsculo indica bit. 1 byte = 8 bits.',`${MB}·8=${Mbps} Mb/s.`,Mbps,`grf|bitbyte|${MB}`,.01);
  };
})();