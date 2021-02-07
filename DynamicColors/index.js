/*
     Closures are functions that close over their lexical environment or their scope.
     This allows us to access an outer function scope from an inner function.
     We use closures in many different places. For example, if we're filtering
     an array of items, or if we're creating a timeout

     In this challenge, we'll use closures to create three buttons. Each button will represent a different color
     and we'll change the background color of the document body to the color value.
     Using a closure, create a function called change color that accepts a color value.
     When the button is clicked, the closure should be invoked and the body background color should be updated.

     1. Create three color buttons that change the document color on click.
     2. Use a closure.
*/

//Solution 1
const changebgColorToRed = changeBackgroundColor("red");
const changebgColorToGreen = changeBackgroundColor("green");
const changebgColorToBlue = changeBackgroundColor("blue");

document.querySelector('#red').addEventListener("click", changebgColorToRed)
document.querySelector('#green').addEventListener("click", changebgColorToGreen)
document.querySelector('#blue').addEventListener("click", changebgColorToBlue)

function changeBackgroundColor(color) {
     function changeColor() {
          document.body.style.background = color;
     }
     return changeColor;
}

//Solution 2
// document.querySelector('#red').addEventListener("click", () => changeColor("red"))
// document.querySelector('#green').addEventListener("click", () => changeColor("green"))
// document.querySelector('#blue').addEventListener("click", () => changeColor("blue"))

// function changeColor(color) {
//      document.body.style.background = color;
// }