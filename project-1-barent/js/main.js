document.addEventListener('DOMContentLoaded', () => {
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');    
    let numField = document.getElementById('number-field');
    let displayNum = document.getElementById('display-number');
    numField.value = 1;
    plusButton.addEventListener('click', () => {
        displayNum.innerText = addNumbers(displayNum, numField);
    })
    minusButton.addEventListener('click', () => {
        displayNum.innerText = subtractNumbers(displayNum, numField);
    })
})

const addNumbers = (displayNum, numField) => {
    let displayInt = parseInt(displayNum.innerText);
    let numFieldInt = parseInt(numField.value)
    let newVal = displayInt + numFieldInt;
    console.log(newVal);
    return newVal;
};

const subtractNumbers = (displayNum, numField) => {
    let displayInt = parseInt(displayNum.innerText);
    let numFieldInt = parseInt(numField.value);
    let newVal = displayInt - numFieldInt;
    console.log(newVal);
    return newVal;
};