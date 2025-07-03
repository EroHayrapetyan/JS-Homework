function Account(accountHolder, accountNumber, initialBalance = 0) {

    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;

    let balance = initialBalance;


    this.deposit = function (amount) {
        if (typeof amount === 'number' && amount > 0) {
            balance += amount;
            console.log("Deposit succeeded");
        } else {
            console.log("Invalid amount");
        }
    };

    this.withdraw = function (amount) {
        if (typeof amount === 'number' && amount > 0 && amount <= balance) {
            balance -= amount;
            console.log("Withdrawal successfully done");
        } else {
            console.log("Invalid withdrawal amount or insufficient funds");
        }
    };

    this.getBalance = function () {
        console.log(`Balance for ${this.accountHolder}: ${balance}`);
        return balance;
    };
}


function Bank(){
    this.accounts = [];

    this.addAccount = function (account) {
        if (!account.accountHolder || !account.accountNumber) {
            console.log("Data error");
            return;
        }
        this.accounts.push(account);
        console.log(`${account.accountHolder} created account successfully`);
    }

    this.findAccount = function (accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    this.getTotalBalance = function () {
        let total = 0;
        this.accounts.forEach(acc => {
            total += acc.getBalance(); 
        });
        return total;
    }
}