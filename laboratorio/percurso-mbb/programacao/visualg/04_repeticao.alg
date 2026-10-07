algoritmo "Cantina_Repeticao"
var
   quantidade, subtotalCentavos: inteiro
inicio
   quantidade <- 0
   enquanto (quantidade < 1) ou (quantidade > 10) faca
      escreva("Quantidade de aguas (1 a 10): ")
      leia(quantidade)
      se (quantidade < 1) ou (quantidade > 10) entao
         escreval("Tente novamente com um inteiro de 1 a 10.")
      fimse
   fimenquanto
   subtotalCentavos <- 300 * quantidade
   escreval("Subtotal em centavos: ", subtotalCentavos)
fimalgoritmo
