(() => {
  'use strict';
  const data = window.DSMathGeneratorData;
  if (!data) return;

  const {G,R,P} = data;
  if (typeof G.pa !== 'function') return;
  const base = G.pa;

  const num = (q,h,s,a,k,t=0) => ({kind:'number',question:q,hint:h,solution:s,answer:Number(a),tolerance:t,key:k});
  const open = (q,h,s,k) => ({question:q,hint:h,solution:s,key:k});

  G.pa = function(level){
    if (![3,4,5].includes(level)) return base(level);

    const useSum = R(1,10) <= (level === 5 ? 5 : 4);
    if (!useSum) return base(level);

    if (level === 3){
      const a1 = R(3,12), r = R(2,6), n = R(6,12);
      const an = a1 + (n-1)*r;
      const sum = n*(a1+an)/2;
      return num(
        `Uma PA começa em ${a1}, tem razão ${r} e possui ${n} termos considerados. Qual é a soma desses ${n} primeiros termos?`,
        `Primeiro encontre a${n}=a₁+(${n}−1)r. Depois use Sₙ=n(a₁+aₙ)/2.`,
        `a${n}=${a1}+(${n}−1)·${r}=${an}. Então S${n}=${n}·(${a1}+${an})/2=${sum}.`,
        sum,
        `pa-soma3|${a1}|${r}|${n}`
      );
    }

    if (level === 4){
      const first = P([40,50,60,80,100]);
      const step = P([10,15,20,25]);
      const n = R(8,14);
      const last = first + (n-1)*step;
      const total = n*(first+last)/2;
      return num(
        `Uma pessoa guarda R$ ${first} no primeiro mês e aumenta o depósito em R$ ${step} a cada mês. Quanto terá depositado ao todo ao final de ${n} meses?`,
        `Não confunda o depósito do ${n}º mês com o total. Descubra a${n} e depois calcule S${n}.`,
        `Os depósitos formam uma PA com a₁=${first}, r=${step} e n=${n}. O último depósito é a${n}=${first}+(${n}−1)·${step}=${last}. O total é S${n}=${n}·(${first}+${last})/2=${total}.`,
        total,
        `pa-soma4|depositos|${first}|${step}|${n}`
      );
    }

    const type = R(0,1);
    if (type === 0){
      const a1 = R(6,18), r = R(2,6), n = R(12,20);
      const an = a1 + (n-1)*r;
      const total = n*(a1+an)/2;
      return open(
        `Uma PA tem a₁=${a1}, razão ${r} e ${n} termos. Um aluno calculou a${n}=${an} e respondeu que esse é o total dos ${n} termos. Analise o erro e determine o total correto.`,
        `a${n} responde “quanto vale o ${n}º termo?”. Para o total, precisamos de S${n}.`,
        `O valor ${an} é apenas o ${n}º termo. Como Sₙ=n(a₁+aₙ)/2, temos S${n}=${n}·(${a1}+${an})/2=${total}. Portanto, a${n}=${an} e S${n}=${total} representam perguntas diferentes.`,
        `pa-soma5|erro-an-sn|${a1}|${r}|${n}`
      );
    }

    const a1 = R(10,25), r = P([-4,-3,-2]), n = R(6,10);
    const an = a1 + (n-1)*r;
    const total = n*(a1+an)/2;
    return num(
      `Uma PA decrescente começa em ${a1}, tem razão ${r} e serão somados seus ${n} primeiros termos. Qual é essa soma?`,
      `O fato de r ser negativo muda os termos, mas não muda a lógica da soma. Primeiro encontre a${n}.`,
      `a${n}=${a1}+(${n}−1)·(${r})=${an}. Depois S${n}=${n}·(${a1}+${an})/2=${total}.`,
      total,
      `pa-soma5|decrescente|${a1}|${r}|${n}`
    );
  };
})();
