document.addEventListener('DOMContentLoaded', () => {
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');    
    let numField = document.getElementById('number-field');
    let displayNum = document.getElementById('display-number');
    numField.value = 1;
    plusButton.addEventListener('click', () => {
        addNumbers(displayNum, numField);
    })
    minusButton.addEventListener('click', () => {
        console.log('minus');
    })
})

const addNumbers = (displayNum, numField) => {
    let displayInt = parseInt(displayNum.innerText);
    let numFieldInt = parseInt(numField.value)
    console.log(displayInt, numFieldInt);
    let newVal = displayInt + numFieldInt;
    console.log(newVal);
};

const subractNumbers = () => {

};