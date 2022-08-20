import express from 'express'
import cors from 'cors'
// import { NumericLiteral } from 'typescript'
import { client, transaction } from './types';
import { clients } from './clients';


const app = express()
app.use(express.json())
app.use(cors())

app.post('/clients/create', (req, res) => {
  try {
    const{name, cpf, dateOfBirth} = req.body
    
    const [day, month, year] = dateOfBirth.split("/")

    const date = new Date(`${year}-${month}- ${day}`)

    const ageInMilisseconds: number = Date.now() - date.getTime()
    const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

    if (ageInYears < 18){
      res.statusCode = 406
      throw new Error("Idade deve ser maior que 18 anos")

    }

    types.push({
      name,
      cpf,
      dateOfBirth,
      balance: 0,
      statement:[]
    })
    res.status(201).send("Conta criada com sucesso !")
  } catch (error: any) {
    console.log(error)
    res.send(error.message)

  }
})

app.get ('/users/all', (req, res) => {
  
  try {
    if(!accounts.length){
      res.statusCode = 404
      throw new Error("Nenhuma conta foi encontrada")
    }
    res.status(200).send(accounts)
    
  } catch (error :any) {
    res.send(error.message)
  }
})










// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req, res) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Ok - Server is running at port 3003')
})