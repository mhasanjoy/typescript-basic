class BankAccount {
  readonly id: number;
  protected name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log(`My current balance is ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}
const myAccount = new BankAccount(13, "Joy", 0.5);
console.log(myAccount);

class StudentAccount extends BankAccount {
  test() {
    this.name = "Md. Mehedi Hasan";
  }
}
