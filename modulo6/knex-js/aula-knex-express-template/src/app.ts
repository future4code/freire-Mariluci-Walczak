import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';

//EXERCÍCIOS PARA HJ - 24/08/2022

console.log("[Freire] Conectando ao banco");

const app = express()
app.use(express.json())
app.use(cors())


//Exercício 1
/* 
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) */ 
// bata no http://localhost:3003/users/001 e veja o que acontece no terminal

//Exercício 2

 app.post('/Actor',async (req,res) => {
    try {
         const result = await connection.raw(`
            INSERT INTO Actor (id,name,salary,birth_date,gender)
            VALUES( 
               " ${req.body.id}",
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birth_date}",
                "${req.body.gender}"
            );
            `)
                res.status(201).send("Cadastrado com sucesso")
    } catch (error:any) {
                res.status(500).send(error.sqlMessage || error.message)
    }
}) 

//a) Uma função que receba um salário e um id e realiza a atualização do salário
// do ator em questão
app.put('/actor/:id/:name', async (req, res) => {
    try {
        await connection("Actor")
        .update({
            salary:req.body.salary
        })
        .where ({id: req.params.id,
            name: req.params.name
        })
        res.send("Alteração realizada com sucesso")
        
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send(error.sqlMessage || error.message)
    }
});

//b) Uma função que receba um id e delete um ator da tabela
app.delete ('/actor/:id', async (req, res) => {
    try {
        const result = await connection("Actor")
        .delete()
        .where({ id: req.params.id })
        res.send("Exclusão realizada com sucesso")
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send(error.sqlMessage || error.message)
    }
});

//c) Uma função que receba um `gender` e devolva a média dos salários de atrizes 
//ou atores desse `gender`

app.get('/actor/:gender', async (req, res) => {
    try {
        const result = await connection("Actor")
        .avg("salary as average")
        .where({gender: req.params.gender})    
        res.send("Consulta realizada com sucesso")
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send(error.sqlMessage || error.message)  
    }
});

//Exercício 3
//a) -
app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const result = await connection.raw (`
       SELECT * FROM Actor
       where id = "${id}"
      `) ;
        res.status(200).send(result);
    } catch (error: any) {
        console.log(error.message);
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

  //b) -
  app.get("/actor", async (req, res) => {
    try {
 //     const count = await count Actor(req.query.gender as string);
      res.status(200).send({
 //       quantity: count,
      });
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });
  
  //Exercício 4






















const server = app.listen (3003,()=>{
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})