const Customer = require("./Customer");

let g1 = Customer.newAdmin('Shyam', 'Singh')

let user1 = g1.newCustomer('Ram', 'Yadav')
let user2 = g1.newCustomer('Prashant', 'Mane')
console.log(g1.getAllCustomer());

g1.updateCustomer(2, 'firstName', 'Rohit')
console.log(g1.getAllCustomer());

// g1.deleteCustomer(2)
// console.log(g1.getAllCustomer());

g1.createBank('Yes Bank')
g1.createBank('State Bank of India')
g1.createBank('Icici Bank')
console.log(g1.getAllBank());


g1.updateBank(1, 'fullName', 'Bank of Baroda')
console.log(g1.getAllBank());

g1.deleteBank(1)
console.log(g1.getAllBank());


//customer functionality

user1.createAccount(0)
user1.createAccount(2)
user2.createAccount(2)
console.log(user1.getAllAccount())
console.log(user2.getAllAccount())

user1.deleteAccount(0)
console.log(user1.getAllAccount())

user1.deposit(1, 2000)
console.log(user1.getAllAccount())


user2.deposit(2, 3000)
console.log(user2.getAllAccount())
user2.withdraw(2, 500)
console.log(user2.getAllAccount())

//reference 
// console.log(user1);
// console.log(user1.getAllAccount());
// console.log(user2);
// console.log(user2.getAllAccount());
// console.log(g1.getAllCustomer());


user1.transferTo(500, 1, 2, 2)
console.log(user1.getAllAccount())
console.log(user2.getAllAccount())



console.log(user1.passbook(1));
console.log('================================================');
console.log(user2.passbook(2));







