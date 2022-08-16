import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { userInfo } from 'os';

//console.log("Estou indo")

const app = express()
app.use(express.json())
app.use(cors())

/* app.listen(3003,() => {
    console.log("Servidor rodando na porta 3003: [http://localhost:3003]")
}) */

/* type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
const users: User[] = [
    {
        id: 1,
        name: 'Marcelo',
        phone: 111111,
        email: 'marcelo@gmail',
        website: 'marcelo.com.br'
    },
    {
        id: 2,
        name: 'Sofia',
        phone: 222222,
        email: 'sofia@gmail',
        website: 'sofia.com.br'
    },
    {
        id: 3,
        name: 'Ricardo',
        phone: 333333,
        email: 'ricardo@gmail',
        website: 'ricardo.com.br'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 444444,
        email: 'miguel@gmail',
        website: 'miguel.com.br'
    }
] */

/* app.get('/users', (req, res) => {
    res.send(users)
}) */

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

/* app.get("https://jsonplaceholder.typicode.com/", (req, res) => {          
    res.send("Hello from Express")
}) */

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}
const posts: Post[] = [
    {
        id: 1,
        title: 'O poder',
        body: 'do Silencio',
        userId: 5
    },
    {
        id: 2,
        title: 'Antes que o ',
        body: 'cafe esfrie',
        userId: 5
    },
    {
        id: 1,
        title: 'As coisas que voce',
        body: 'so ve quando desacelera',
        userId: 6
    },
    {
        id: 2,
        title: 'Desbloqueie',
        body: 'o poder da sua mente',
        userId: 7
    },
    {
        id: 3,
        title: 'A promessa',
        body: 'de um Amigo',
        userId: 7
    }
]
//dentro de um array

/* app.get('/posts', (req, res) => {
    res.send(posts)
}) */ 

app.get('/posts', (req, res) => {
    // res.send(posts)
    const novoPost = posts.map(user => {
        return user.id
    }).flat(1)
    const userId = novoPost.map(index => {
        return index
    }).flat(1)

    res.send(userId)
}) 

