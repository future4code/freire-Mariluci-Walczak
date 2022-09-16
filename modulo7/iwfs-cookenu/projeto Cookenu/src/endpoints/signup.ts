import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";

export async function signup (req: Request, res: Response) {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password ) {
            res.status(422).send(
                "Insira corretamente as informações de 'name', 'email', 'password'"
                );
        }
        //fazer verificação de password com 6 caracteres

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

    } catch (error) {
        res.status(400).send(error.message);
    }
}
