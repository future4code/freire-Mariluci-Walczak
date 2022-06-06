//Exercícios de interpretação de código

//Exercício nr.01 a)
//Verifica se o número digitado o resto da divisão será igual a 0.
// Comparador de igualdade.

//Exercício nr.01 b)
//Números pares em que o resto da divisão seja igual a 0.

//Exercício nr.01 c)
//Números ímpares onde o resto da divisão será diferente de 0.

//Exercício nr.02 a)
//Para informar o preço da fruta solicitada

//Exercício nr.02 b)
//O preço da fruta Maçã é R$ 2.25

//Exercício nr.02 c)
//O preço da fruta Pêra é R$ 5 

//Exercício nr.03 a)
// Solicitando que seja digitado um número, e transformando string em number.

//Exercício nr.03 b)
//Esse número passou no teste
//Erro na execução do código

//Exercício nr.03 c)
// Sim.
//Não tratou a condicional para receber um número negativo

//Exercícios de escrita de código
//Exercício nr.01

 let idade = Number(prompt("Qual a sua idade? ")) 
if(idade >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir.")
} 

//Exercício nr.02

const turno = prompt("Qual o turno que você estuda ? M (matutino) ou V (vespertino) ou N (noturno)")

if(turno === "M"){
    console.log("Bom dia !")
   }   else if(turno === "V"){
    console.log("Boa tarde !")
   } else if(turno === "N"){
    console.log("Boa noite !")
   } else{
   console.log("Informe apenas as letras M - V ou N")
   } 

 //Exercício nr.03

 const turnoUm = prompt("Informe o turno que você estuda ? M (matutino) ou V (vespertino) ou N (noturno)")
 switch (turnoUm) {
    case "M":
        console.log("Bom dia !")
        break
    case "V":
        console.log("Boa tarde !")
        break
    case "N":
        console.log("Boa noite !")
        break
    default:
        console.log("Escolha apenas uma opção váida M, V ou N")
        break
 }
 
 //Exercício nr.04
 
const assistirFilme = (genero,ingresso) => {

    if (genero && ingresso){
        console.log("Bom filme !")
    } else {
        console.log("Escolha outro filme :( ")
    }
}

const genero = prompt("Qual gênero do filme que vamos assistir : Fantasia (F) ou Outro (O) ?")=== "F"
const ingresso = Number(prompt("Qual o valor do ingresso do cinema ?")) <= 15

assistirFilme(genero,ingresso) 


 


 
 