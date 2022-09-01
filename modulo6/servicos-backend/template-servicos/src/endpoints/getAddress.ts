import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress"
// import { isBinaryExpression } from "typescript"

export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
       
        //foi utilizado antes de inserir no banco
        // console.log(result.data)
        // res.send(result.data)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            complemento: result.data.complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        res.status(200).send(address)
    } catch (error: any) {
        res.status(500).send(error.message)
    }

}