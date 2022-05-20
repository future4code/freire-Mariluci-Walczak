/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de BlackJack !")

const mensagem = ""
const retorna = confirm("Quer iniciar uma nova rodada ?")

if(confirm === "OK") {
	retorna = true
} else {
	alert ("O jogo acabou")
}  

carta = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
arrayCartaUsuario = [texto,valor]
arrayCartaComputador = [texto,valor]
const somaCartasUsuario = 0
const somaCartasComputador = 0

if(retorna === true){
   if (somaCartasUsuario <=21){
      cartasUsuario[iu] = comprarCarta()
      arrayCartaUsuario[texto,valor] = carta.valor,carta.texto
      somaCartasUsuario = somaCartasUsuario + cartasUsuario[iu].texto
      iu++
   } else if(somaCartasComputador <=21){
      cartasComputador[ic] =comprarCarta()
      arrayCartaComputador[texto,valor] = carta.valor,carta.texto
      somaCartasComputador = somaCartasComputador + cartasComputador[ic].texto
      ic++
   }
   fimDeJogo()
}

const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

const totalizar = fimDeJogo ()
   if (somaCartasUsuario < somaCartasComputador){
      console.log (`Computador ganhou !`)
      console.log (`${arrayCartaComputador[valor.texto]}`)
   } else if(somaCartasUsuario > somaCartasComputador){
      console.log (`Usuário ganhou !`)
      console.log (`${arrayCartaUsuario[valor.texto]}`)
   }else{
      console.log (`Empate !`)
      console.log (`${arrayCartaUsuario[valor.texto]}`)
      console.log (`${arrayCartaComputador[valor.texto]}`)
   }
