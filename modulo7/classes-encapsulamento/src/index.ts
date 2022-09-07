import app from "./app";
import {UserAccount} from "./UserAccount";
import {Transaction} from "./Transaction";
import {Bank} from "./Bank"

//Exercício 1
//Analise a classe `UserAccount` abaixo. Perceba quais propriedades
// são públicas e quais são privadas e responda as perguntas 
//discursivas em comentários no arquivo `index.ts`

//a) *Para que serve o construtor dentro de uma classe e como fazemos
// para chamá-lo?*
//Serve para criar (instanciar) objetos.
// constructor()

//b) Copie o código abaixo para o seu exercício de hoje; 
//crie uma instância dessa classe (dê o nome, cpf e idade que você
// quiser). 
//Quantas vezes a mensagem "Chamando o construtor da classe User"
// foi impressa no terminal? Uma vez

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?
//Através de utilizar os métodos públicos getters e setters.

  const userAccount1: UserAccount = new UserAccount(
    "111.111.111-11", "Lucia",30
  )
  console.table(userAccount1)

//Exercício 2

const transaction1: Transaction = new Transaction (
  "Testando", 200, "05/09/2022"
  )

const accounts1:Bank = new Bank ([userAccount1])

userAccount1.setTransaction(transaction1)

console.log(userAccount1, userAccount1.getTransaction())

