"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        return this._balance;
    }
    get testBalance() {
        return this.getBalance();
    }
    // getter
    get balance() {
        return this._balance;
    }
    // addDeposit(amount: number):void {
    //   this._balance = this._balance + amount;
    // }
    // setter
    set deposit(amount) {
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
