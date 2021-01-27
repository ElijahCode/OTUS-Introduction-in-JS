//exercise #1
const user = { name : 'John'};

let input = prompt('Input a user age:');

user.age = input;

console.log('Result for exercise #1:');
console.log(user);
console.log('');

//exercise #2

const admin = Object.assign({}, user);

admin.role = 'admin';

console.log('Result for exercise #2:');
console.log(admin);
console.log('');

//exercise #3

let {name, age, role} = admin;

console.log('Result for exercise #3:');
console.log(`name = ${name}, age = ${age}, role = ${role}`);
console.log('');