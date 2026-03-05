Algoritmo "exercicio 18"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
peso, altura, imc: real

inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite o peso (kg):")
leia(peso)
escreval("Digite a altura (m):")
leia(altura)

imc <- peso / (altura * altura)

escreval("IMC calculado: ", imc:0:2)

se imc < 18.5 entao
escreval("Classificação: Abaixo do peso")
senao
se imc >= 18.5 e imc < 25 entao
escreval("Classificação: Peso normal")
senao
se imc >= 25 e imc < 30 entao
escreval("Classificação: Sobrepeso")
senao
escreval("Classificação: Obesidade")
fimse
fimse
fimse



Fimalgoritmo