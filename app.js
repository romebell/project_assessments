let inputNum = document.getElementById('input1').value;
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let text1 = document.querySelector('h1');
document.addEventListener('DOMContentLoaded', function () {
    
})

plusButton.addEventListener('click', event => {
    
    const newValue = Number(inputNum) || 0;
    const newText = Number(text1) || 0;
    console.log(newText)
    text1.innerText = newValue + newText;
})

minusButton.addEventListener('click', event => {
    text1.textContent = text1.value - inputNum;
})