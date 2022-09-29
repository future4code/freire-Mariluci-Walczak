import { UserDatabase } from "../database/UserDatabase"
import { ISignupInputDTO } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password }  = input

        if (!name || !email || !password) {
            throw new Error("Uma ou mais informações faltando")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Name inválido, deve ter no mínimo 3 caracteres")
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new Error("'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error(" 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error(" 'password' inválido, deve ter no mínimo 6 caracteres")
        }

        const isEmailAlreadyExist = await this.userDatabase
    }
}


