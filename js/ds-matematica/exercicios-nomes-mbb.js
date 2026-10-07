(() => {
  'use strict';

  const names = window.DSMathGeneratorData?.names;
  if (!names) return;

  Object.assign(names, {
    variacao: 'Proporcionalidade entre Grandezas',
    algebra: 'Linguagem Algébrica',
    funcao1: 'Função Afim',
    reta: 'Gráfico da Função do 1º Grau',
    partes: 'Funções Definidas por Partes',
    quadratica: 'Função Quadrática',
    parabola: 'Gráfico da Função Quadrática',
    quadrado: 'Proporcionalidade ao Quadrado',
    transformacoes: 'Transformações de Gráficos',
    pa: 'Progressão Aritmética (PA)',
    tangente: 'Tangente de um Ângulo',
    porcentagem: 'Porcentagem',
    ladrilhamento: 'Ladrilhamento do Plano',
    grandezas: 'Grandezas Compostas',
    dados: 'Estatística: Tabelas, Gráficos e Amostragem'
  });
})();
