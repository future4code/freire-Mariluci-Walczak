//Exercícios de interpretação de código
//Exercício 1
//resultado do valor de a = false
///resultado do valor de b = false
//resultado do valor de c = true
//resultado do valor de d = boolean

//Exercício 2.
// soma = 1010 (uniu o valor das varíaveis, concatenou)

//Exercício 3.
// O prompt retorna uma String.
//Precisa converter String para Number
//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//const primeiroNumeroDigitado = Number (primeiroNumero)
//const segundoNumeroDigitado = Number (segundoNumero)
//const soma = primeiroNumeroDigitado + segundoNumeroDigitado
//console.log(soma)

//Exercícios de escrita de código
//Exercício 01.
let idadeUsuario = prompt("Digite a sua idade : ")
let idadeAmigo = prompt("Digite a idade do seu melhor amigo(a) : ")
const comparacao = idadeUsuario > idadeAmigo
console.log ("Sua idade ", idadeUsuario, "é maior do que a do seu melhor amigo",
 idadeAmigo, "?", comparacao)

//Exercício 02.
let numeroPar = prompt("Digite um número par : ")
const numero = Number (numeroPar)
const resto = numero % 2
console.log ("Resto da divisão do número par % 2 = ", resto)
//c ) - divisão com diversos números pares resulto é exato
//d ) - divisão com número ímpar resultado não é exato, tem sempre vírgula.

//Exercício 03.
const idadeAnos = prompt("Qual a sua idade : ")
const idAnosNumero = Number (idadeAnos)
const meses = (idAnosNumero * 12)
console.log ("A idade do usuário em meses - ", meses)

const idDias = (meses * 365)
console.log ("A idade do usuário em dias - ", idDias)

horas = (idDias * 24)
console.log ("A idade do usuário em horas - ", horas)

const primeiroNumero = prompt("Digite o primeiro número")
const segundoNumero = prompt("Digite o segundo número")
const num1 = Number (primeiroNumero)
const num2 = Number (segundoNumero)
const maior = num1 > num2
console.log ("O primeiro número", num1, "é maior que o segundo número ? ", num2," - ", maior)

const igual = num1 === num2
console.log ("O primeiro número", num1, "é igual ao segundo número ? ", num2," - ", igual)

const divisivel = num1 % num2
console.log ("O primeiro número", num1, "é divisível pelo segundo número ?" , num2,
 divisivel === 0)

const divisaoSegundo = num2 % num1
console.log ("O segundo número", num2, "é divisível pelo primeiro número ?" , num1,
 divisaoSegundo === 0)
