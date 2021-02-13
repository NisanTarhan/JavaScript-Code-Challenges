/*
    Recursion is when a function calls itself with an argument that gets progressively smaller and smaller until a base case is reached.
    Once that base case is reached, the previous stack of executions returns and your solution is calculated.

    Suppose you're playing Scrabble with your best friend and you want to know how many possible combinations of letters you can make with the letters you have.
    Create a recursive function that takes in a string of letters and calculates the number of possible combinations you can play. Calculating the number of possible
    combinations of a set of values is known as a factorial. We achieve a factorial solution by starting with the total number of items in the set and multiplying it
    by each proceeding number of values until we reach one.
*/

//Iterative Solution
function numPermutations(letters) {
    let total;
    for (let i = 1; i <= letters.length; i++) {
        if (total === undefined) {
            total = i;
            continue;
        }
        total *= i
    }
    return total;
}
console.log(numPermutations("Nisan"))

//Recursive Solution 1
function numPermutationsRecursively(letters) {
    if (letters.length === 1) {
        return 1;
    }
    return letters.length * numPermutationsRecursively(letters.slice(1));
}
console.log(numPermutationsRecursively("Nisan"))

//Recursive Solution 2
let stringValue = "Nisan";

function calculatePermutation(lengthOfString) {
    if (lengthOfString === 0) {
        return 1;
    }
    return lengthOfString * calculatePermutation(lengthOfString - 1);
}
console.log(calculatePermutation(stringValue.length))
