Algoritmo "exercicio 14"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/02/2026
Var
// Seção de Declarações das variáveis 
a, b, c: real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite o lado a:")
leia(a)
escreval("Digite o lado b:")
leia(b)
escreval("Digite o lado c:")
leia(c)

se (a + b > c) entao
se (a + c > b) entao
se (b + c > a) entao
escreval("Os lados formam um TRIÂNGULO válido.")
senao
escreval("Os lados NÃO formam um triângulo.")
fimse
senao
escreval("Os lados NÃO formam um triângulo.")
fimse
senao
escreval("Os lados NÃO formam um triângulo.")
fimse


Fimalgoritmo