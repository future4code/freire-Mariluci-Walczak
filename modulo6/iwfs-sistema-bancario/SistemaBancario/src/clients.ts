import { client } from "./data";

export const clients: client[] = [
    {
        id: 1,
        name: "Karol",
        cpf: ("999.999.999-01"),
        birthDate: new Date("2000-07-12"),
        balance: 2000,
        statement: []
    },
    {
        id: 2,
        name: "Lorena",
        cpf:  ("999.999.999-02"),
        birthDate: new Date("2004-03-19"),
        balance: 2700,
        statement: []
    },
    {
        id: 3,
        name: "Camila",
        cpf:  ("999.999.999-03"),
        birthDate: new Date("1995-12-29"),
        balance: 2700,
        statement: []
    }
]