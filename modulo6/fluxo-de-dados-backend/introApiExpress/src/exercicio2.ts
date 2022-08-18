import express from "express";
import cors from 'cors';
import { produtos } from './dataProd'

const app = express();
app.use(express.json());
app.use(cors())

//- Exercício 1
//Crie uma nova API do zero (ou utilizando um template) e desenvolva
// um endpoint de teste com método `**GET`** no path **`“/test”`** que
// retorna uma mensagem genérica avisando que a API está funcional.

app.get("/test", (req, res) => {
    res.send("API está Funcional")
})
console.log("API Funcional")

//- Exercício 2
//Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. 
//Cada produto será representado por um objeto com propriedades:
// id (`string`), name (`string`) e price (`number`). 
//Popule manualmente o array com pelo menos 3 produtos.


//Exercício 3
//Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos
// atualizada. A id do produto deve ser gerada automaticamente pela API.
app.post("/produtos", (req, res) => {

    type produtos = {
        id: string,
        name: string,
        price: number
    }
    const novoProd: produtos = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price
    }
    produtos.push(novoProd)
    res.send(produtos)
})

//Exercicio 4
//Crie um endpoint que retorna todos os produtos.
app.get("/produtos", (req, res) => {
    res.send(produtos)
})

//Exercício 5
//Crie um endpoint que edita o preço de um determinado produto e retorna 
//a lista de produtos atualizada.

app.put("produtos/:id/price", (req, res) => {
    const id = String(req.params.id)

    for (let listaAtualizada of produtos)
        if (listaAtualizada.id === id)
            res.send(produtos)
})
/* app.put("/produtos/price/:id", (req, res) => {
    const listaAtualizada:produtos[] = produtos.map ((item) => {
        if (item.id ===(req.params.id)){
            return {...item, price:req.body.price}
        }
        return item
    })
    res.send(listaAtualizada)
}) */


//Exercício 6
//Construa um endpoint que deleta um determinado produto e retorna a lista 
//de produtos atualizada.

app.delete("produtos/:id", (req, res) => {
    const listaAtualizada = produtos.map(prod => {
        if (prod.id === req.params.id) {
            return {
                ...prod, produtos: []
            }
        } else {
            return prod
        }
    })
    res.send(listaAtualizada)
})

//Exercício 7
//Refatore o endpoint do exercício 3 (criar produto) para que sejam 
//implementados fluxos de validação dos dados recebidos (`name` e `price`)

//- erro caso um ou nenhum deles forem recebidos
//- erro caso `name` seja diferente de `string`
//- erro caso `price` seja diferente de `number`
//- erro caso `price` seja igual ou menor que `0`
//- erro caso algo inesperado aconteça

/* app.post("/produtos", (req, res) => {

    try {
        type produtos = {
            id: string,
            name: string,
            price: number
        }
        const novoProd: produtos = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price

            if ( !name || !price){
                throw new Error("Verifique se nome e preço estão corretos")
            }
            if (name === number){
                throw new Error("Verifique a informação precisa se string")

            }
        }
        
        produtos.push(novoProd)
        res.send(produtos)

    } catch (error: any) {

    }


}) */





//Exercício 8
//Refatore o endpoint do exercício 5 (editar produto) para que sejam 
//implementados fluxos de validação dos dados recebidos (`price`)

//- erro caso `price` não seja recebido
//- erro caso `price` seja diferente de `number`
//- erro caso `price` seja igual ou menor que `0`
//- erro caso o produto a ser editado não seja encontrado
//- erro caso algo inesperado aconteça

//Exercício 9
//Refatore o endpoint do exercício 6 (deletar produto) para que sejam 
//implementados fluxos de validação dos dados recebidos

//- erro caso o produto escolhido não seja encontrado
//- erro caso algo inesperado aconteça




app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003 - Exercício 1 [localhost:3003]")
})
