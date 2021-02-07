/*
    In this challenge, you'll be using the array reduce function to calculate the total bill
    from a trip to the coffee shop with your friends. Each person has ordered some number of
    coffees and you offer to pay the entire bill. Given an array of integers where each value
    is greater than zero, calculate the total price of all coffees. Each coffee costs $1.25.
    You should return your answer in the following format:
    "The total bill is <total>."
*/

const amountOfCoffee = [2, 3, 1, 5];
const costOfCoffee = 1.25;

// Solution 1
function calculateTotalBill(amountOfCoffee) {
    const totalAmount = amountOfCoffee.reduce((totalCoffee, numberOfCoffee) => {
        return totalCoffee += numberOfCoffee;
    });
    return `The total bill is $${totalAmount * costOfCoffee}`;
}

console.log(calculateTotalBill(amountOfCoffee))
// Solution 2
// function calculateTotalBill(amountOfCoffee, costOfCoffee) {
//     const total = amountOfCoffee.reduce((totalCoffee, numberOfCoffee) => {
//         return totalCoffee += numberOfCoffee * costOfCoffee;
//     }, 0);
//     return `The total bill is $${total}`;
// }

// console.log(calculateTotalBill(amountOfCoffee, costOfCoffee))