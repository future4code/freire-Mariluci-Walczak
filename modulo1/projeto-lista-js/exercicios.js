// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    altura =+prompt("Digite altura : ")
    largura =+prompt("Digite largura : ")

    const valorArea = altura * largura
    console.log(valorArea)
    return altura, largura
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual =+prompt("Digite ano atual : ")
    anoNascimento =+prompt("Digite o ano do seu nascimento : ")

    const suaIdade = anoAtual - anoNascimento
    console.log(suaIdade)
     return anoAtual,anoNascimento
}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui
       const calculaIMC = peso / (altura*altura)
     return calculaIMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    nome = prompt("Digite o seu nome : ")
    idade = prompt("Digite sua idade : ")
    email = prompt("Digite o seu email :")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
    return nome,idade,email

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1 = prompt("Digite a sua primeira cor favorita : ")
    cor2 = prompt("Digite a sua segunda cor favorita : ")
    cor3 = prompt("Digite a sua terceira cor favorita : ")

    const listaDeCores =[]

    listaDeCores.push(cor1)
    listaDeCores.push(cor2)
    listaDeCores.push(cor3)

    console.log(listaDeCores) 
    return cor1,cor2,cor3

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
    const retornaStringEmMaiuscula = string.toUpperCase()

    //console.log(palavraMaiuscula)
    return retornaStringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
     
     const calculaIngressosEspetaculo = custo / valorIngresso

     return calculaIngressosEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    const resultado = string1.length == string2.length
    return resultado
 }
 

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array[0]
  return array [0]  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const retorna = array.pop()
  return retorna
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
        
     const arrayPrimeiro = array.length
     const arrayGuarda = array[0]
     array[0] = array[arrayPrimeiro -1]
     array[arrayPrimeiro -1] = arrayGuarda
     
     return array  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const resultado = (string1.toUpperCase() === string2.toUpperCase())
  return resultado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  //return (ano % 400) === 0  || ((ano % 4 === 0 ) && (ano % 100 != 0) 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}