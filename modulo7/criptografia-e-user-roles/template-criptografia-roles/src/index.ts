import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {v4} from "uuid"
import { Autheticator } from "./services/Authenticator"
import { AuthenticationData } from "./types"
import login from "./endpoints/login"
import { Console } from "console"
import { HashManager } from "./services/HashManager"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)


//Exercício 1
//a) *O que são os `round` e `salt`? 
//round - quantidade de rodadas que o método Bcrypt utiliza
//para completar o ciclo de segurança  da senha.
// salt - O que é salt em hash?
//O salt é utilizado no processo de hashing para forçar sua unicidade. 
//O salt aumenta a complexidade do hash. Sem onerar ou dificultar a senha do usuário. 
//E com isso se proteger de ataques como Rainbow tables.

//Que valores são recomendados para o `round`? 12
//Que valor você usou? Por quê? É um valor que não se torna muito lento
//na criação de uma string aleatória para a senha.

//b) *Instale o bcryptjs no seu projeto e comece criando a função 
//generateHash(), que será responsável por **criptografar** uma 
//string usando o bcryptjs. 
//Exercício realizado no arquivo HashManager.ts 

const testandoHash = async () => {
    //console.log("hash")
    const password = "labenu"
    const password1 = "labenu2"

    const instanceHash = new HashManager()
    const hash = await instanceHash.hash(password1)
    console.log("HASH ---> ", hash)

    const compareHash:boolean = await instanceHash.compareHash(password, hash)
    if(!compareHash){
        console.log("credenciais inválidas")
    } else {
        console.log("LOGADO COM SUCESSO")
    }
}
testandoHash()

//c) *Agora, crie a função que verifique se uma string é 
//correspondente a um hash, use a função `compare` do bcryptjs*
//Exercício realizado no arquivo HashManager.ts

//Exercício 2

//a) *Para realizar os testes corretamente, qual deles você deve modificar
// primeiro? O cadastro ou o login? Justifique. O cadastro. Antes de enviar
// a senha para o banco, devemos criptografar, para dificultar os ataques 
//chamado raibow table.

//b) *Faça a alteração do primeiro endpoint - Cadastro
//Exercício realizado no createUser.ts e request.rest

//c) *Faça a alteração do segundo endpoint - Login
//Exercício realizado no login.ts e request.rest

//d) *No exercício de hoje, nós criamos o endpoint `user/profile`. 
//Também temos que modificar esse endpoint devido à adição da criptografia?
// Justifique.

//Exercício 3
//a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. 
//Considere que pode assumir os valores `normal`  e `admin`. 
//Coloque `normal` como valor padrão.

//b) *Altere o type `AuthenticationData e a função getData()` para 
//representarem esse novo tipo no token.*

//c) *Altere o cadastro para receber o tipo do usuário e criar o token 
//com essa informação. (Não esqueça de adicionar na função query para 
//inserir agora o valor de role do usuário à coluna role no banco)*

//d) *Altere o login para criar o token com o `role` do usuário*

//Exercício 4


