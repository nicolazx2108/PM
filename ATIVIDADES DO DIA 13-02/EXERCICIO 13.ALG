Algoritmo "exercicio 13"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
valor, valorFinal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite o valor da compra:")
leia(valor)

se valor > 100 entao
valorFinal <- valor - (valor * 0.10)
senao
valorFinal <- valor
fimse

escreval("Valor final da compra: R$ ", valorFinal:0:2)


Fimalgoritmo