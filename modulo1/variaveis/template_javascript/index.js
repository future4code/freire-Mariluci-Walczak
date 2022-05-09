//console.log(10)
//EXERCÍCIOS DE INTERPRETAÇÃO
//1. b=5

//2. a = 10
//b = 20
//Vai dar erro, não declarou a variável c,
//para receber valor da varíavel a.

//3.let p (horasDias)
// let t (valorDia)
//alert ("Voce recebe ${valorDias/horasDias} por hora")

//Exercícios de escrita de código
//1. Construa um programa
let nome
let idade

console.log (typeof nome)
console.log (typeof idade)
// undefined - falta valor na variável

nome = prompt("Qual o seu nome ?")
idade = prompt ("Qual a sua idade ?")

console.log (typeof nome)
console.log (typeof idade)
//tipo das variáveis string
//mesmo digitando número na idade, ele não reconhece

console.log (" Olá meu nome é ",nome, " eu tenho ",idade, " anos")

//2. Escreva um programa que faça 3 perguntas
let perguntaUm = true
let perguntaDois = true
let perguntaTres = true

perguntaUm = prompt ("Você está usando uma roupa azul hoje ?")
console.log ("Você está usando uma roupa azul hoje ?", perguntaUm)

perguntaDois = prompt ("Você estuda na Labenu ?")
console.log ("Você estuda na Labenu ?", perguntaDois)

perguntaTres = prompt ("Hoje é segunda feira  ?")
console.log ("Hoje é segunda feira ?", perguntaTres)


//3. Suponha que temos duas variáveis ae b
let a = 10
let b = 25
let c = 0

//let a = 10
//let b = 20
//c = a
//b = c
//a = b
//console.log(a, b, c)

console.log ("valor atual de A", a)
c = a
a = b
// Depois de trocado, tem o seguinte resultado:
console.log("O novo valor de A é", a) // O novo valor de a é 25

console.log ("valor atual de B", b)
b = c
// Depois de trocado, tem o seguinte resultado:
console.log("O novo valor de B é", c) // O novo valor de a é 10
