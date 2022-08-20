export type transaction = {
    value: number
    date: Date
    description: string
}

export type client = {
    name: string;
    cpf: string;
    date: Date;
    balance: number;
    statement: transaction[];
}
