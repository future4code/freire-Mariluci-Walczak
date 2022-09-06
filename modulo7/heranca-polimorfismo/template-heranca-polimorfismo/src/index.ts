import {User} from "./User";
import {Customer} from "./Customer";
import { Client } from "./Interface";
import { client } from "./Client";
import { Place } from "./Place";


//HERANÇA

//- Exercício 1
//Analise a classe `User`. Perceba quais propriedades são 
//públicas e quais são privadas. 
//Copie esse código para o seu exercício de hoje; 
//crie uma instância dessa classe 
//(dê o nome, email, etc que você quiser) e imprima, 
//no terminal, o id, o nome e o email desse usuário.

const user: User = new User(
    "10", "teste@gmail.com", "teste", "xxxxxx"
)
//console.table(user)

//a) *Seria possível imprimir a senha (`password`) atrelada 
//a essa instância?* Sim

//b) *Quantas vezes a mensagem `"Chamando o construtor da 
//classe User"` foi impressa no terminal?* Uma vez

//Exercício 2
//Analise a Customer. Perceba quais propriedades são públicas 
//e quais são privadas. Copie esse código para o seu exercício 
//de hoje e crie uma instância dessa classe 
//(com as informações que você quiser). Atente-se ao fato de 
//que o Customer é uma subclasse (ou classe filha) da 
//classe User. Sabemos disso porque há a palavra extends 
//na declaração da classe Customer; e, em seu construtor, 
//foi usado o super.

const customer: Customer = new Customer(
    "20", "teste2@gmail.com", "teste2", "xxxxxx", "414-555" 
)
//console.table(customer)

//a) *Quantas vezes a mensagem `"Chamando o construtor da 
//classe Customer"` foi impressa no terminal?* Uma vez

//b) *Quantas vezes a mensagem `"Chamando o construtor da 
//classe User"` foi impressa no terminal? Por quê?* Uma vez
// A classe Customer é extensão da Classe User

//- Exercício 3
//Agora, imprima **todas as informações possíveis** da 
//instância que você criou: o id, o nome, o email, o valor 
//total de compra (`purchaseTotal`) e o cartão de crédito 
//(`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

const customer1: Customer = new Customer(
    "30", "teste3@gmail.com", "teste3", "xxxxxx", "414-555" 
)
//console.table(customer1)

//- Exercício 4
//Adicione um método público à classe `User`. 
//Esse método deve ter o nome de `introduceYourself`
//("apresente-se") e deve retornar a mensagem: 
//`"Olá, bom dia!"`. As classes filhas sempre têm acesso aos 
//métodos públicos da classe pai. Então, para realizar o 
//teste dessa sua função, faça com que a instância que você 
//criou para a classe `Customer` chame esse método

//console.log(customer.introduceYourself())

//a) *Seria possível imprimir a senha (`password`) 
//atrelada a essa instância?* *Por quê?* Na verdade não seria possível, pois
// ele está declarada com método privado, mais no VsCode, Typescript
//foi possível imprimir.

//- Exercício 5
//Altere o método que você acabou de criar para que ele imprima 
//a mensagem: `"Olá, sou ${nome do usuário}. Bom dia!"`. 
//Realize os mesmos testes anteriores.

//console.log(user.introduceYourself())

//POLIMORFISMO

//- Exercício 1
//Comece criando um objeto dessa interface, colocando a tipagem 
//correta. Perceba que você terá que dar uma implementação para o 
//método calculateBill(). Por enquanto, implemente de tal forma que
// sempre retorne 2 (ou qualquer outro número). Imprima todas as 
//informações que forem possíveis no terminal.

//console.log(client.calculateBill())

//a) Quais propriedades você conseguiu imprimir? ClculateBill
//Teve alguma que não foi possível? Por que isso aconteceu?

//Exercício 2
//a) *Mesmo sabendo que não é possível, tente criar uma instância 
//dessa classe (ou seja: `new Place(...)`). Qual foi o erro que 
//o Typescript gerou?*
//Não é possível criar um objeto de uma classe abstrata
//Cannot create an instace of an abstract class

//b) *Pense e responda: o que precisaríamos fazer para conseguir 
//efetivamente criar uma instância dessa classe?*
//const place = new Place()

//- Exercício 3
//a) *O que precisaríamos fazer para conseguir efetivamente criar 
//uma instância da classe Place? (última pergunta do exercício 
//anterior)* const place = new Place()

//b) *Por que a `Place` não é uma interface?*

//c) *Por que a classe `Place` é uma Classe Abstrata?*

