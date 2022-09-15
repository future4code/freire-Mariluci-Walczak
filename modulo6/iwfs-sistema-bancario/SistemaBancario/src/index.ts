import express from 'express'
import cors from 'cors'
import { client, transaction } from './data'
import { clients } from './clients'


const app = express()
app.use(express.json())
app.use(cors())


app.post("/clients", (req, res) => {
  try {

      const {name, cpf, birthDate} = req.body

      if (!name || !cpf || !birthDate) {
          res.statusCode = 400
          throw new Error("Não foi possível cadastrar o cliente, informação incompleta !")
      }
      if (name === " " || cpf === " " || birthDate === " "){
        res.statusCode = 400
          throw new Error("Impossível cadastrar o cliente, informação incompleta")
      }

      const [day, month, year] = birthDate.split('/')
      const birthDateFormatted = new Date(`${year}-${month}-${day}`)

      const birthDateinMilliseconds = birthDateFormatted.getTime()
      const today = new Date().getTime()

      const age = Math.floor((today - birthDateinMilliseconds) / (1000 * 60 * 60 * 24 * 365))

      if (age < 18) {
          res.statusCode = 406
          throw new Error("Cliente precisa ter idade igual ou maior que 18 anos!")
      }

      const clientIndex = clients.findIndex(client => client.cpf === cpf)

    
      if (clientIndex >= 0) {
          res.statusCode = 409
          throw new Error("Esse CPF já foi cadastrado!")
      }

      const newUser: client = {
          id: clients.length + 1,
          name,
          cpf,
          birthDate: birthDateFormatted,
          balance: 0,
          statement: []
      }

      clients.push(newUser)

      res.status(201).send("Cliente cadastrado com sucesso")
  } catch (error:any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})

app.get("/clients", (req, res) => {
  try {

      if(!clients.length) {
          res.statusCode = 404
          throw new Error("Não temos clientes cadastrados")
      }
  
      res.status(200).send(clients)
  } catch (error: any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})

app.get("/clients/:cpf", (req, res) => {
  try {

      const cpf = req.params.cpf
      const client = clients.find(c => c.cpf == cpf)
      if(!client) {
          res.statusCode = 404
          throw new Error("Cliente não encontrado")
      }

      res.status(200).send({saldo: client.balance, name: client.name })
  } catch (error: any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})


app.post("/clients/:cpf/payment", (req, res) => {
  try {

      const cpf = req.params.cpf
      const {value, description} = req.body
      let {date} = req.body

      if (!date) {
          date = Date.now()
      }

      const [day, month, year] = date.split('/')
      const dateFormatted = new Date(`${year}-${month}-${day}`)

      if (!value || !description) {
          res.statusCode = 400
          throw new Error("Não foi possível realizar o pagamento, informações incompletas")
      }

      const clientIndex = clients.findIndex(client => client.cpf === cpf)
      
      if (clientIndex < 0) {
          res.statusCode = 404
          throw new Error("Cliente não encontrado")
      }

      const client = clients[clientIndex]

      const newTransaction: transaction = {
          value,
          date: dateFormatted,
          description
      }

      if (Math.abs(value) > client.balance) {
          res.statusCode = 406
          throw new Error("Saldo insuficiente")
      }

      client.statement.push(newTransaction)
      
      res.status(201).send("Pagamento realizado com sucesso")
  
  } catch (error: any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})

app.put("/clients/:cpf/:name/deposit", (req, res) => {
  try {

      const {cpf, name} = req.params
      const {value, description} = req.body
      let {date} = req.body
      
      const [day, month, year] = date.split('/')
      const dateFormatted = new Date(`${year}-${month}-${day}`)

      if (!cpf || !name || !value || !description || !date) {
          res.statusCode = 400
          throw new Error("Não foi possível atualização, informações incompletas")
      }

      const clientIndex = clients.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())

      if (clientIndex < 0) {
          res.statusCode = 404
          throw new Error("Não foi possível atualização, cliente não existe !")
      }

      clients[clientIndex].statement.push({
          value,
          date: dateFormatted,
          description
      })
      
      res.status(200).send("Deposito realizado com sucesso")
  } catch (error:any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})

app.put("/clients/:cpf/:name/balance", (req, res) => {
  try {

      const {cpf, name} = req.params

      const clientIndex = clients.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())

      if (clientIndex < 0) {
          res.statusCode = 404
          throw new Error("Não foi possível atualização, cliente não existe !")
      }

      let newBalance = clients[clientIndex].balance

      clients[clientIndex].statement.forEach(balance => {
          newBalance += balance.value
      })

      clients[clientIndex].balance = newBalance

      res.status(200).send("Saldo atualizado com sucesso !")
  } catch (error:any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})

app.post("/clients/:cpf/:name/transfer", (req, res) => {
  try {

      const {cpf, name} = req.params
      const {nameDestination, cpfDestination} = req.body
      const {statement} = req.body
      const {value, description} = statement
      let {date} = statement

      const [day, month, year] = date.split('/')
      const dateFormatted = new Date(`${year}-${month}-${day}`)

      if (!cpf || !name || !nameDestination || !cpfDestination) {
          res.statusCode = 400
          throw new Error("Não foi possível fazer a transferência, informações incompletas")
      }
      
      const clientIndex = clients.findIndex(client => client.cpf === cpf && client.name.toLowerCase() === name.toLowerCase())

      // Verifica se o CPF e o name já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
      if (clientIndex < 0) {
          res.statusCode = 404
          throw new Error("Não foi possível fazer a transferência, cliente não cadastrado")
      }

      const client = clients[clientIndex]

      // O método Math.abs() retorna o valor absoluto de um número. O valor absoluto de um número é o valor sem sinal.
      if (Math.abs(value) > client.balance) {
          res.statusCode = 406
          throw new Error("Saldo insuficiente")
      }

      const clientDestinationIndex = clients.findIndex(client => client.cpf === cpfDestination)

      if (clientDestinationIndex < 0) {
          res.statusCode = 404
          throw new Error("Não foi possível fazer a transferência, cliente não cadastrado")
      }

      const clientDestination = clients[clientDestinationIndex]

      const newTransaction: transaction = {
          value: - value,
          date: new Date(),
          description: `Transferência de ${client.name} para ${nameDestination}`
      }

      const newTransaction2: transaction = {
          value: value,
          date: new Date(),
          description: `Transferência de ${client.name} para ${nameDestination}`
      }

      client.statement.push(newTransaction)
      clientDestination.statement.push(newTransaction2)

      res.status(200).send("Transferência realizada com sucesso !")
  } catch (error:any) {
      if (res.statusCode == 200) {
          res.status(500).send(error.message)
      } else {
          res.status(res.statusCode).send(error.message)
      }
  }
})



// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req, res) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Ok - Server is running at port 3003')
})