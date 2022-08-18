import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}
type listUser = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
//Dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado.

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type:UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//-Exercício 1 
//Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
//a. Qual método HTTP você deve utilizar para isso? get
//b. Como você indicaria a entidade que está sendo manipulada? "/users"

app.get("/users", (req, res) => {
  res.send(users);
});

//-Exercício 2
//Agora, vamos refatorar o exercício 1 e implementar uma funcionalidade que 
//busque todos os usuários que tenham uma propriedade `type` específica, 
//recebendo apenas um `type` por vez. Após isso, responda:
//a.* Como você passou os parâmetros de type para a requisição? Por quê?
//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos 
//sejam utilizados?

app.get("/users/:type", (req, res) => {
  const userType = users.filter((user) => {
    if(user.type === req.params.type){
      return user
    }
  })
  res.send(userType);
});


//Exercício 3
//Vamos agora praticar o uso de buscar mais variáveis. Refatore novamente o 
//exercício 1 e implemente a funcionalidade de search, para encontrar um usuário 
//buscando por nome.
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso 
//nenhum usuário tenha sido encontrado.

app.get("/users/search/:name", (req, res) => {
  try{
    const userName = users.filter((user) => {
      if (user.name === req.params.name){
        return user
      }
    })
    if (!userName.length) {
      throw new Error(`O nome ${req.params.name} não foi encontrado`)
    }
    res.send(userName)
  }catch(error : any){
    res.status(500).send({message: error.message})
  }
})

//Exercício 4
//Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas.
//Comecemos criando um usuário na nossa lista. 
//Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto
//de usuários.

//a. Mude o método do endpoint para `PUT`. O que mudou? aparentemente nada, icluiu o usuário

//b. Você considera o método `PUT` apropriado para esta transação? Não
//Por quê? Put atualiza a entidade, se não existe ele inclui

app.post ("/users", (req, res) =>{
  let errorCode: number = 400;
  try{
    const {id, name, email, type, age} = req.body; // desconstrução
   
    if (!id || !name || !email || !type || !age){
      errorCode = 422;
      throw new Error("Por favor, verificar os campos !");
    }
    const novoUser: User = {
      id,
      name,
      email,
      type,
      age,
    }

    users.push(novoUser)

    res.status(201).send({message: 'Usuário criado com sucesso'})

  } catch (error: any){
    res.status(errorCode).send({message: error.message})
  }
});









// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Ok - Server is running at port 3003')
})
