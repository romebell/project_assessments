// Global Variables
let input = document.querySelector('.input-value'); 
let display = document.querySelector('.display');
let plus = document.querySelector('.increase');
let minus = document.querySelector('.decrease');
let displayValue = parseInt(display.textContent);


document.addEventListener('DOMContentLoaded', event => {
    // Event Listener for plus button
    plus.addEventListener('click', () => {
        let getDisplayValue = parseInt(display.textContent); // Converts number strings into integer of display result storing into variable
        let getInputValue = parseInt(input.value); // Converts number strings into integer of input tag value storing into variable
        display.textContent = getDisplayValue + getInputValue; // changing the value of display result by adding the display result value and input value
        changeDisplayColor();
    })
    // Event Listener for minus button
    minus.addEventListener('click', () => {
        let getDisplayValue = parseInt(display.textContent); // Converts number strings into integer of display result storing into variable
        let getInputValue = parseInt(input.value); // Converts number strings into integer of input tag value storing into variable
        display.textContent = getDisplayValue - getInputValue;// changing the value of display result by substracting the display result value and input value
        changeDisplayColor();
    })
})

// changes the color of the displaying result to red when gets negative
function changeDisplayColor() {
    let displayValue = parseInt(display.textContent)
    if (displayValue < 0 ) {
        display.style.color = 'red';
    } else if (displayValue === 0){
        display.style.color = 'black';
    } else {
        display.style.color = 'black';
    }
}

// Mouse Events for both Buttons
plus.onmouseover = function() {
    plus.style.backgroundColor = 'white';
    plus.style.color = 'gray';
};
plus.onmouseleave = function() {
    plus.style.backgroundColor = 'gray';
    plus.style.color = 'white';
};
minus.onmouseover = function() {
    minus.style.backgroundColor = 'white';
    minus.style.color = 'gray';
};
minus.onmouseleave = function() {
    minus.style.backgroundColor = 'gray';
    minus.style.color = 'white';
};