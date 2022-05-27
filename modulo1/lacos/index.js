//Exercícios de interpretação de código

//Exercício Nr.01 
//Criou uma condição onde o índice i irá executar o loop
// até que ele seja menor que 5.
//E depois será impresso o valor do índice i.

//Exercício Nr.02 a)
//Todos os números maiores que 18

//Exercício Nr.02 b)
//Um índice.

//Exercício Nr.03
//*
//**
//***
//****
//4

//Exercícios de escrita de código
//Exercício Nr.01

/* let quantPet = Number(prompt("Quantos pets você tem ?"))
if (quantPet === 0){
    console.log("Que pena! Você pode adotar um pet!")
    }else { 
        let arrayNomePet = []
        for(let i = 0; i < quantPet; i = i+1){
        arrayNomePet.push(prompt("Qual o nome do seu pet ?"))  
    }     
    console.log(arrayNomePet) 
    } */
     
  
//Exercício Nr.02 a) 

 /* const arrayOriginal = [80, 30, 130, 40, 60, 21]

 function imprimeArrayOriginal (arrayOriginal){
 
    for(let i of arrayOriginal){
     console.log(i)
 }
}
imprimeArrayOriginal(arrayOriginal)   */

/* //Exercício Nr.02 b) 

  const arrayOriginal = [80, 30, 130, 40, 60, 21]

 function imprimeArrayOriginal (arrayOriginal){
 
    for(let i of arrayOriginal){
     console.log(i/10)
 }
}
imprimeArrayOriginal(arrayOriginal) */   

//Exercício Nr.02 c) 

const arrayOriginal = [80, 30, 130, 40, 60, 21]

function imprimeArrayOriginal (arrayOriginal){
    
    for(let i of arrayOriginal){
        let arrayPar = []
       if (arrayOriginal[i] % 2 === 0){
           arrayPar.push(arrayOriginal[i])
           }
            console.log(i)
    }
}
imprimeArrayOriginal(arrayPar)   


