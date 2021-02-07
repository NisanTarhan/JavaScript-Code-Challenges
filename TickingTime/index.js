/*
In this challenge, you'll create a ticking clock in the document body.
The index.html file contains a div with an ID of clock.
Using callback functions and DOM manipulation, output a ticking digital
clock which displays the current hours, minutes, and seconds.

1. Ticking clock
2. Div with an id of "clock"
3. Display the current hours, minutes, and seconds
*/

function clock() {
    const clickNode = document.querySelector("#clock");
    return setInterval(() => {
        let date = new Date();
        let currentTime = date.toLocaleTimeString();
        clickNode.textContent = currentTime;
    }, 1000)
}

clock();