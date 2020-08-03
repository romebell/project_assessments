var input = document.querySelector('.input-value');
var display = document.querySelector('.display');
var plus = document.querySelector('.increase');
var minus = document.querySelector('.decrease');
var displayValue = parseInt(display.textContent);

document.addEventListener('DOMContentLoaded', event => {
    plus.addEventListener('click', () => {
        var getDisplayValue = parseInt(display.textContent);
        let getInputValue = parseInt(input.value);
        display.textContent = getDisplayValue + getInputValue;
        changeDisplayColor();
    })
    minus.addEventListener('click', () => {
        var getDisplayValue = parseInt(display.textContent);
        let getInputValue = parseInt(input.value);
        display.textContent = getDisplayValue - getInputValue;
        changeDisplayColor();
    })
})

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