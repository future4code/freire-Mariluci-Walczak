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

let retorna =  confirm("Quer iniciar uma nova rodada ?")

// A rodada inicia sortear duas cartas ( o método já está pronto, é só chamar)

if(retorna) {
      let primeiraCartaUsuario = comprarCarta()
      let segundaCartaUsuario = comprarCarta()
      let primeiraCartaComputador = comprarCarta()
      let segundaCartaComputador = comprarCarta()

//Guardar o valor e a carta de cada jogador, somando em uma variável para cada jogador
   
      let pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
      let pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

// Mostrar no console a carta e pontuação de cada jogador
   
      console.log (`Cartas do Usuário : ${primeiraCartaUsuario.texto} - ${segundaCartaUsuario.texto} - pontos = ${pontosUsuario}`)
   
      console.log (`Cartas do Computador : ${primeiraCartaComputador.texto} - ${segundaCartaComputador.texto} - pontos = ${pontosComputador}`)
   
// Mostrar no console quem foi o vencedor do jogo
      if(pontosUsuario < pontosComputador){
         console.log("O computador ganhou!")
      } else if(pontosUsuario > pontosComputador){
         console.log("O usuário ganhou !")
      } else if(pontosUsuario === pontosComputador){
         console.log("Empate!")
      }
   
   } else {
      console.log("O jogo acabou")
   }














