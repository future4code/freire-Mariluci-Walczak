// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const quantidade = array.length
    return quantidade
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const invertido = array.reverse()
    return invertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort ((num1, num2) => num1 - num2)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numeroPar) => {
        return numeroPar % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosParesElevados = array.filter((numeroPar) => {
        if(numeroPar % 2 === 0){
            return numeroPar
        }
    })
 return numerosParesElevados.map((pares) => Math.pow(pares,2))
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0
  let maior = -Infinity
  while ( i < array.length){
      if(array[i] > maior){
          maior = array[i]
      }
      i++
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior, menor
    if(num1 > num2){
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    const retorno = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca:maior - menor
    }
    return retorno
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = []
    for(let i = 0; i < n; i++){
        numeros.push (i*2)
    }
    return numeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
        }else {
            return "Isósceles"
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let i = 0
    let maior = -Infinity
    let menor = -Infinity
    let segundoMaior, segundoMenor 
    while ( i < numeros.length) {
        if(numeros[i] > maior){
            maior = numeros[i]
            


        }

    }

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const novoFilme = []
    filme.atores.map((ator ) => {
        return novoFilme.push("${ator}, ")
    })
    novoFilme[0] = novoFilme[0].replace("","")
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}. `   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((clientes) => {
        clientes.compras.map((compras) => {
            clientes.saldoTotal = clientes.saldoTotal - compras
        })
        clientes.compras = []
        return clientes

    })

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
