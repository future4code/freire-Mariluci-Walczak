```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let num = 0
  for(let cont = 0; cont < arrayDeNumeros.length; cont++){
    if(arrayDeNumeros[cont] === numeroEscolhido){
      num = num + 1 
    } 
  }
  if (num === 0){
    return `Número não encontrado`
  } else {
    return `O número ${numeroEscolhido} aparece ${num}x`
  }
}```