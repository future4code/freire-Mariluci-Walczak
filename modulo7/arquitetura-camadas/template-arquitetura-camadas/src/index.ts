import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`OK - Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/ping", pingRouter)
app.use("/users", userRouter)