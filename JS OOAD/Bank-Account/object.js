function createAccount(accountHolder, accountNumber, initialBalance = 0) {
    let balance = initialBalance;

    return {
        accountHolder,
        accountNumber,

        deposit(amount) {
            if (typeof amount === 'number' && amount > 0) {
                balance += amount;
                console.log("Deposit successfully added");
            } else {
                console.log("Invalid deposit amount");
            }
        },

        withdraw(amount) {
            if (typeof amount === 'number' && amount > 0 && amount <= balance) {
                balance -= amount;
                console.log("Withdrawal successfully done");
            } else {
                console.log("Invalid withdrawal amount or insufficient funds");
            }
        },

        getBalance() {
            console.log(`Account holder: ${accountHolder}, Balance: ${balance}`);
            return balance;
        }
    };
}


function Bank() {
    return {
        accounts: [],

        addAccount(account) {
            if (!account.accountHolder || !account.accountNumber) {
                console.log("Data error");
                return;
            }
            this.accounts.push(account);
            console.log(`${account.accountHolder} created account successfully`);
        },

        findAccount(accountNumber) {
            return this.accounts.find(acc => acc.accountNumber === accountNumber);
        },

        getTotalBalance() {
            let total = 0;
            this.accounts.forEach(acc => {
                total += acc.getBalance();
            });
            return total;
        }
    };
}

const acc1 = createAccount("Alice", "123", 1000);
const acc2 = createAccount("Bob", "456", 500);

const bank = Bank();
bank.addAccount(acc1);
bank.addAccount(acc2);

acc1.deposit(200);
acc2.withdraw(100);

console.log("Total bank balance:", bank.getTotalBalance());


