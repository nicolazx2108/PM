Algoritmo "exercicio 24"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
numero, soma: inteiro
contador: inteiro
inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
soma <- 0
contador <- 0

Escreva("Digite um número (0 para parar): ")
Leia(numero)

Enquanto numero <> 0 faca
soma <- soma + numero
contador <- contador + 1
Escreva("Digite outro número (0 para parar): ")
Leia(numero)
FimEnquanto

Escreva("Quantidade de números digitados: ", contador)
Escreva("Soma total: ", soma)


Fimalgoritmo