import {UserAccount} from "./UserAccount"

export class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getAccounts(): UserAccount[]{
      return this.accounts;
    }
  
    /* public setAccounts(newaccounts: UserAccount[]): void{
      this.accounts = [...this.accounts, newaccounts];
    } */
  
  } 