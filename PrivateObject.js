/*
    JavaScript Symbols where a new primitive data type introduced with ES6.
    Every value returned from a symbol is unique, meaning that we can use them
    as identifiers for object properties.
    In this challenge, you will create a user object that has three properties:
    Username,
    Password
    Age
    Using JavaScript Symbols, ensure that username and password are private fields on the user character.
    This means they shouldn't be accessible by calling user.username or user.password.
*/

let username = Symbol("username");
let password = Symbol("password");
let user = {
    [username]: "Nisan",
    [password]: 1234,
    age: 30
}

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.age);