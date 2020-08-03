document.addEventListener('DOMContentLoaded', function (){


 //call your DOM elements here
 const plusBtn = document.getElementById('plus-btn');
 const minusBtn = document.getElementById('minus-btn');
 let inputField = document.getElementById('input-field');
 let displayTotal = document.getElementById('display');
 
var count = 0;
//functions here

let showNum = () => {
    displayTotal.textContent = count;
}


 const addInput = () => {
    inputField = parseInt(inputField.value);
    count = count + inputField;
    console.log(count);
    showNum();
 }


const subtractInput = () => {
    inputField = parseInt(inputField.value);
    count = count - inputField;
    console.log(count);
    showNum();
}

//event listeners for on click
plusBtn.addEventListener('click', addInput);
minusBtn.addEventListener('click', subtractInput);

})