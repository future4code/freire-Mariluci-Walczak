//Exercícios de interpretação de código

//Exercício Nr. 01 a) 
//Será impresso o array sem as informações, pois não teve
//o retorno desejado
//[undefined, undefined, undefined]

//Exercício Nr. 02 a)
//Será impresso os nomes que existem no array
//'Amanda Rangel', 'Laís Petra', 'Letícia Chijo

//Exercício Nr. 03 a)
//{ nome: "Amanda Rangel", apelido: "Mandi" }
//{ nome: "Laís Petra", apelido: "Laura" }

//Exercícios de escrita de código

//Exercício Nr.01 a)
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
 
 /* const novoArrayNome = pets.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayNome)
 */

//Exercício Nr.01 b)
  /*  const novoArrayRaca = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 }) 
  console.log(novoArrayRaca) */
 
//Exercício Nr.01 c)

/*  const novoArrayRaca = pets.filter((item,index,array) =>{
     return item.raca === "Poodle"
 })
 console.log(novoArrayRaca)

  const novoArrayMensagens = novoArrayRaca.map((item,index) =>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a,${item.nome} !`
  })   

console.log(novoArrayMensagens)
 */
   
//Exercício Nr.02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] 

 //Exercício Nr.02 a)
/* const novoNome = produtos.map((item,index,array) =>{
    return item.nome
})
console.log(novoNome) */

//Exercício Nr.02 b)

const arrayComDesconto = produtos.map((item, preco) => {
    return (item.preco - (item.preco * 0.05))  
})

console.log(arrayComDesconto) 


//Exercício Nr.02 c)

/* const novoArrayBebidas = produtos.filter((item,index,array) =>{
    return item.categoria === "Bebidas"
})
console.log(novoArrayBebidas) */

//Exercício Nr.02 d)
//d) Crie um novo array que contenha apenas os objetos cujo 
//nome contenha a palavra "Ypê"

const novoArrayYpe = produtos.filter((item) =>{
    if(item.nome.includes("Ypê")){
        
        return true
    }
})
console.log(novoArrayYpe) 

//Exercício Nr.02 e)

const novoArrayFrase = novoArrayYpe.map((item,index) => {
    return `Compre,${item.nome}, por R$ ,${item.preco}`
})
console.log(novoArrayFrase)



