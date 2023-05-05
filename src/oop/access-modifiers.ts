class BankAccount {
  readonly id: number;
  protected name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  private getBalance(): number {
    return this._balance;
  }
  get testBalance(): number {
    return this.getBalance();
  }
  // getter
  get balance(): number {
    return this._balance;
  }

  // addDeposit(amount: number):void {
  //   this._balance = this._balance + amount;
  // }
  // setter
  set deposit(amount: number) {
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

console.log(myAccount.balance);
myAccount.deposit = 25000;
console.log(myAccount);
