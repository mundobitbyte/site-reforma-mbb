"use strict";
const formulario = document.querySelector("#simulacao");
const campo = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

function simular(evento) {
  evento.preventDefault();
  const quantidade = Number(campo.value);
  if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 10) {
    resultado.textContent = "Use uma quantidade inteira de 1 a 10.";
    return;
  }
  const subtotal_centavos = quantidade * 300;
  resultado.textContent = `Simulação: ${subtotal_centavos} centavos. Nenhuma venda registrada.`;
}

formulario.addEventListener("submit", simular);
