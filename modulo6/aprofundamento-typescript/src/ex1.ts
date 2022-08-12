//a)
//let minhaString: string = 1
//O tipo 'number' não pode ser atribuído ao tipo 'string'.

//b)
//let meuNumero: number = 1
let meuNumero : number | string // declarando uma variável tipo Union

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const mr: Pessoa = {
    nome: "Mariluci",
    idade: 10,
    corFavorita: "verde"
}

const malu: Pessoa = {
    nome: "Karol",
    idade: 18,
    corFavorita: "azul"
}

const hj: Pessoa = {
    nome: "Bento",
    idade: 20,
    corFavorita: "pink"
}

//d)
type ArcoIris = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorArcoIris{
    vermelho="vermelho",
    laranja="laranja",
    amarelo="amarelo",
    verde="verde",
    azul="azul,",
    anil="anil,",
    violeta="violeta"
}

const arcoIris:ArcoIris ={
    nome:"Marcelo",
    idade:32,
    corFavorita:CorArcoIris.vermelho
}
console.table(arcoIris)
