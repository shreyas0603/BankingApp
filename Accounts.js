const Transaction = require("./Transcation")

class Account {

    static accountNo = 0
    constructor(bankName, bankBalance) {
        this.accountNo = Account.accountNo++
        this.bankName = bankName
        this.bankBalance = bankBalance
        this.passbook = []
    }

    static createAccount(name, mintotalBalance) {
        return new Account(name, mintotalBalance)
    }

    createTransaction(date, amount, senderid, receiverid, typeoftransaction, currentbalance) {
        try {
            if (typeof typeoftransaction != 'string' && typeoftransaction != 'deposit' && typeoftransaction != 'withdraw' && typeoftransaction != 'transfer') {
                throw new Error('Invalid transcation type')
            }
            if (typeof currentbalance < 0) {
                throw new Error('Insufficient Balance')
            }
            let transaction = Transaction.createTransaction(date, amount, senderid, receiverid, typeoftransaction, currentbalance)

            return transaction
        } catch (error) {
            console.log(error.message);
        }
    }

    deposit(amount, accountNo) {

        this.bankBalance = this.bankBalance + amount
        let depositTransaction = this.createTransaction(new Date(), amount, accountNo, accountNo, 'deposit', this.bankBalance)
        this.passbook.push(depositTransaction)
    }

    withdraw(amount, accountNo) {
        if (this.bankBalance <= 1000) {
            throw new Error('cannot withdraw because your account should have balance greater than Rs 1000')
        }
        this.bankBalance = this.bankBalance - amount
        let withdrawTransaction = this.createTransaction(new Date(), amount, accountNo, accountNo, 'withdraw', this.bankBalance)
        this.passbook.push(withdrawTransaction)
    }

    send(amount, senderid, receiverid) {
        if (this.bankBalance <= 1000) {
            throw new Error('cannot transfer because your account should have balance greater than Rs 1000')
        }
        this.bankBalance = this.bankBalance - amount
        let transferTransaction = this.createTransaction(new Date(), amount, senderid, receiverid, 'transfer', this.bankBalance)
        this.passbook.push(transferTransaction)
    }

    receive(amount, senderid, receiverid) {
        this.bankBalance = this.bankBalance + amount
        let transferTransaction = this.createTransaction(new Date(), amount, senderid, receiverid, 'transfer', this.bankBalance)
        this.passbook.push(transferTransaction)
    }


    getpassbook() {
        return this.passbook
    }


}

module.exports = Account