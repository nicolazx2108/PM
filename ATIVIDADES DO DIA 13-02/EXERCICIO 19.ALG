Algoritmo "exercicio 18"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
ano: inteiro
inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite um ano:")
leia(ano)

se (ano mod 400 = 0) entao
escreval("O ano ", ano, " é bissexto.")
senao
se (ano mod 4 = 0) e (ano mod 100 <> 0) entao
escreval("O ano ", ano, " é bissexto.")
senao
escreval("O ano ", ano, " NÃO é bissexto.")
fimse
fimse


Fimalgoritmo