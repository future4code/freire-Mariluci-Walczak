
//----------------- OBJETOS -----------------
// DATA: 16/05/22
// TURMA: FREIRE

//Objetos

// let carro = {
//     cor: 'vermelho',
//     ano: 2020,
//     marca: "fiat",
//     airbag: true,
//     acelerar: () => {
//         console.log("vrum!!!")
//     },
//     listaDeVantagem: ["4 portas", "garantia 5 ano"]

// }

// console.log(carro["airbag"])

// const anoDoCarro = carro.ano
// console.log(anoDoCarro)

// const marcaDoCarro = carro.marca
// console.log(marcaDoCarro)

// const corDoCarro = carro["cor"]
// console.log("a cor do carro é:", corDoCarro)


// carro.marca = "volskvagen"
// console.log(carro.marca)

// console.log(carro.acelerar())



// //------------------exercicio 1
// const filme = {
//     diretor: "Peter Jackson",
//     nome: 'O senhor dos Anéis',
//     ano: 2002,
//     elenco: ["Elijah Wood", 
//             "Viggo Mortensen", 
//             "Sean Astin", 
//             "Orlando Bloom"],
//     assiti: true
// }

// console.log(filme.diretor)
// console.log(filme.nome)
// console.log(filme['ano'])
// console.log(filme.elenco[3])
// console.log(filme.assiti)

// //------------------exercicio 2
// let pessoa = {
//     nome: "Igor",
//     idade: 25,
//     generoMusica: "rock"
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, 
// ela tem ${pessoa.idade} anos e gosta muito  
// de ${pessoa.generoMusica}."
// `)


// //Objetos dentro de objetos
// const paiDePet = {
//     nome: "Caio Teixeira",
//     listaDeTelefone: [122332542435, 1123452362],
//     pet: {
//         nome: "Lupin",
//         raca: "Salsicha", 
//         idade: 1
//   },
//   endereco: {
//       rua: "Gertulio Vargas",
//       numemo: 1000
//   }
// }

// console.log(paiDePet.pet)
// console.log(paiDePet.pet.idade)
// console.log(paiDePet.listaDeTelefone[0])



//             //indice            0                               1                       2
// const instrutoras = [{nome: "Lais", modulo: 1}, {nome: "Amanda", modulo: 2}, {nome: "Chijo", modulo: 3}]


// // const objetoIstrutoras = {
// //     nome: "Lais",
// //     modulo: 1
// // }

// console.log(instrutoras[2].nome)


// const curso = {
//     nome: "Integral Full Stack",
//     linguagens: ["JS", "CSS", "HTML"]
// }

// console.log(curso)

// curso.numeroEstutantes = 150

// console.log(curso)


// //-------------------- exercicio 3
// const filme = {
//     diretor: "Peter Jackson",
//     nome: 'O senhor dos Anéis',
//     ano: 2002,
//     elenco: ["Elijah Wood", //0
//             "Viggo Mortensen", // 1
//             "Sean Astin", // 2
//             "Orlando Bloom"], // 3
//     assiti: true
// }

// console.log(filme.diretor)
// console.log(filme.nome)
// console.log(filme['ano'])
// console.log(filme.elenco[3])
// console.log(filme.assiti)

// //Passo A               0       1           2           3
// filme.personagens = ["Frodo", "Aragorn", "Samwise", "Legalolas"]
// console.log(filme)

// //Passo B
// console.log(filme.elenco[0], filme.personagens[0])
// console.log(filme.elenco[1], filme.personagens[1])
// console.log(filme.elenco[2], filme.personagens[2])
// console.log(filme.elenco[3], filme.personagens[3])

// //Passo C
// filme.elenco[0] = "xuxa"
// console.log(filme)


// //Passo D
// console.log(`O nome do filme é ${filme.nome}. Seus personagens são: 
// ${filme.personagens}`)


// const usuario = {
//     nome: 'Astrodev',
//     idade: 25,
//     email: 'astrodev@labenu.com.br'
//   }
//   console.log(usuario)



//   const novoUsuario = {
//       ...usuario,
//       nome: 'Julia',
//       sobreNome: "Moreira",
//       email: "julia.moreira@gmail.com"
//   }
//   console.log(novoUsuario)
//   console.log(novoUsuario.email)

//   console.log(usuario.nome)


//exercicio 4
let pessoaExercicio2 = {
    nome: "Igor",
    idade: 25,
    generoMusica: "rock"
}

let pessoaDeExemplo = {
    nome: "Lorran",
    idade: 25,
    generoMusica: "rock"
}

function funcaonova(num1, num2){
    soma = num1 + num2
    return soma
}

funcaonova(10, 20)


function criarObjeto(pessoa){
    const novaPessoa = {
        ...pessoa,
        listaComidas: ["brigadeiro", "bolo", "feijoda"],
        melhorAmigo: {
            nome: "Murilo",
            idade: 27
        }
    }
    return console.log(`O nome da pessoa é ${novaPessoa.nome} 
    e suas comidas preferidas são ${novaPessoa.listaComidas}. 
    Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}

criarObjeto(pessoa)
//Exercícios de interpretação de código
// Exercício nr.01 - a)
//Matheus Nachtergaele 
//Virginia Cavendish
//{canal:"Globo",horario:"14h" 

// Exercício nr.02
//{nome:"Juca", idade:3, raca"SRD"}
//{nome: 'Juba', idade: 3, raca: 'SRD'}
//{nome: 'Jubo', idade: 3, raca: 'SRD'}

// Exercício nr.03 - a)
//false (no objeto pessoa, buscar o valor da chave backender)
//undefined (falta valor, chave não foi declarada no objeto pessoa)


//Exercícios de escrita de código

//Exercício nr.01 - a)
  const pessoa = {
    nome:"Amanda",
    apelidos:["Amandinha","Mandinha","Mandi"]
}

function recebeObjeto(pessoa){
        
    return recebeObjeto

} 
console.log(`"Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}"`)

// Exercício nr.01 - b)

 const novoObjeto = {
    ...pessoa,
    listaApelidos:["Dinha","Dindinha","Mandinha"]
}
console.log(novoObjeto.listaApelidos)

recebeObjeto(novoObjeto) */

// Exercício nr.02  

console.log(100)

 const pessoaUm = {
    nome:"Bruno",
    idade:23,
    profissao:"Instrutor"
}

const pessoaDois = {
    nome:"Karoline",
    idade:26,
    profissao:"Desenvolvedora"
}

function minhaFuncaoUm(pessoaUm){
    const listaPessoaUm = []
    listaPessoaUm.nome
    listaPessoaUm.nome.length
    listaPessoaUm.idade
    listaPessoaUm.profissao
    listaPessoaUm.profissao.length 
    return listaPessoaUm
}
    
console.log(pessoaUm) 










// Exercício nr.03
