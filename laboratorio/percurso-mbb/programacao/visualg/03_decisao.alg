algoritmo "Cantina_Decisao"
var
   quantidade, estoque, subtotalCentavos: inteiro
inicio
   estoque <- 20
   escreva("Quantidade de aguas: ")
   leia(quantidade)
   se (quantidade < 1) ou (quantidade > 10) entao
      escreval("Quantidade recusada: use de 1 a 10.")
   senao
      se quantidade > estoque entao
         escreval("Estoque insuficiente.")
      senao
         subtotalCentavos <- 300 * quantidade
         escreval("Simulacao aceita em centavos: ", subtotalCentavos)
      fimse
   fimse
fimalgoritmo
