class Account {

    #balance = 0;

    constructor(accountHolder, accountNumber) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }


    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }


    withdraw(amount) {
        if (typeof amount === 'number' && amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }
}
class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        if (!account.accountHolder || !account.accountNumber) {
            console.log("Data error");
            return;
        }
        this.accounts.push(account);
        console.log(`${account.accountHolder} created account successfully`);
    }

    findAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    getTotalBalance() {
        let total = 0;
        this.accounts.forEach(acc => {
            total += acc.getBalance(); // исправлено
        });
        return total;
    }
}

// Usage
const account1 = new Account("Alice", "12345");
const account2 = new Account("Bob", "67890");

const myBank = new Bank();
myBank.addAccount(account1);
myBank.addAccount(account2);

account1.deposit(200);
account2.deposit(500);
account2.withdraw(100);

console.log("Total bank balance:", myBank.getTotalBalance());