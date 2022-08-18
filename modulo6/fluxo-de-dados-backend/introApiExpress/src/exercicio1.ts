import express from 'express'
import cors from 'cors'
import { users } from './data'


const app = express();
app.use(express.json());
app.use(cors())

//Exercício1 
/* app.get("/ping", (req, res) => {
    res.send("Pong")
})
console.log("Pong") */

//Exercício2
//Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres
// (”to dos”). Crie uma variável de tipo para representar cada afazer.

type Tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício3
//Crie um array de afazeres para servir como base de dados da nossa API e utilize
// a tipagem desenvolvida no exercício anterior. 

const tarefas: Tarefas[] = [
    {
        userId: 1,
        id: 1,
        title: "Estudar",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Caminhar",
        completed: true
    },
    {
        userId: 2,
        id: 1,
        title: "Cozinhar",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "Descansar",
        completed: false
    }
]

//Exercício4
//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo 
//com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda
// estão em andamento.

/* app.get("/toDoListStatus", (req, res) => {
    const afazeres = req.query.completed
  
    const listaTarefas = tarefas.filter((status) => {
        return status.completed.toString() === afazeres
    })
        res.send({listaTarefas})
}) */

//Exercício5
//Construa um endpoint de criação de afazer. A resposta deve retornar o array de 
//afazeres atualizado.

/* app.post("/createAfazeres", (req, res) => {
    const novoAfazer: Tarefas = {
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    }
    tarefas.push(novoAfazer)
    res.send(tarefas)
}) */

//Exercício6
//Construa um endpoint de edição do status de um afazer, ou seja, de completo 
//para incompleto e vice-versa.
/* app.put("/editStatus/:id", (req, res) => {
    const idTarefas = Number(req.params.id)

    const editaTarefa = tarefas.filter((status) => {
        return status.id === idTarefas
    })
    editaTarefa[0] = {
        ...editaTarefa[0],
        completed: !editaTarefa[0].completed
    }
    const listaAtualizada = tarefas.map((status) => {
        if (status.id === idTarefas) {
            return editaTarefa[0]
        } else {
            return status
        }
    })
    res.send(listaAtualizada)
}) */



//Exercício7
//Construa um endpoint que deleta um determinado afazer de acordo com sua id.

//Exercício8
//Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

//Exercício9
//Crie a documentação Postman dos endpoints desenvolvidos






app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003 - Exercício 1 [localhost:3003]")
})

