//Exercícios de interpretação de código
 // 1 - a) -
 //10
 //50

 // 1 - b) -
 // Não apareceria nada no console
 // Para aparecerr alguma coisa no console, precisa do console.log

 // 2 - a) -
 // recebe um texto digitado pelo usuário, aplica no texto os métodos de 
 //mudar para letra minúscula e verificar se existe no texto a palavra cenoura.
 
 // 2 - b) - 
 // i - true
 // ii - true
 // iii - true

//Exercícios de escrita de código
// Exercício nr. 01 - a)
//
 function minhaInformacao (){
       const nome = "Karol"
       const idade = 26
       const cidade = "Sáo Paulo"
       const profissao = "Estudante"
       return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}` 
   }
   const imprimi = minhaInformacao()
   console.log(imprimi) 

   // Exercício nr. 01 - b)

    function informacaoPessoa(nome,idade,cidade,profissao){
    const nomePessoa = "Mariluci"
    const idadePessoa = 55
    const cidadePessoa = "Goiânia"
    const profissaoPessoa = "Auxiliar Adm."
    return `Eu sou ${nomePessoa}, tenho ${idadePessoa} anos, moro em ${cidadePessoa} e sou ${profissaoPessoa}` 
   }
   const mostra = informacaoPessoa()
   console.log(mostra)

   // Exercício nr. 02 a)
   function soma(numeroUm,numeroDois){
       const somaNumeros = numeroUm+numeroDois
       return somaNumeros
   }
   console.log(soma(20,42)) 
   

//Exercício nr. 02 - b)

 function doisNumeros(num1,num2){
   const resultado = num1 >= num2
   return resultado
}
console.log(doisNumeros(15,85)) 

//Exercício nr. 02 -  c)

 function recebeNumero(recebeNumUm){
    const devolve = recebeNumUm % 2 == 0
        return devolve
}
console.log(recebeNumero(10)) 

//Exercício nr. 02 -  d)

function mensagem(frase){
    const tamanho = frase.length
    const fraseMaiuscula = frase.toUpperCase()
    
    return tamanho,fraseMaiuscula
}
console.log(mensagem("Tenho que prestar mais atenção"))

//Exercício nr. 03

  function somarNumeros(primeiroNumero,segundoNumero){
    primeiroNumero =+prompt("Digite o primeiro número : ")
    segundoNumero =+prompt("Digite o segundo número : ")

    const somarDoisNumeros = primeiroNumero+segundoNumero

    const subtrairDoisNumeros = primeiroNumero-segundoNumero

    const multiplicarDoisNumeros = primeiroNumero*segundoNumero

    const dividirDoisNumeros = primeiroNumero/segundoNumero
    
    console.log("Números inseridos : ",primeiroNumero, " e ",segundoNumero)
    console.log(`Soma : ${somarDoisNumeros}`)
    console.log(`Diferença : ${subtrairDoisNumeros}`)
    console.log(`Multiplicação : ${multiplicarDoisNumeros}`)
    console.log(`divisão : ${dividirDoisNumeros}`)

    return primeiroNumero,segundoNumero

}
somarNumeros() 

