document.addEventListener('DOMContentLoaded', function (){
 //call your DOM elements here
 const plusBtn = document.getElementById('plus-btn');
 const minusBtn = document.getElementById('minus-btn');
 let inputField = document.getElementById('input-field');
 let displayTotal = document.getElementById('display');
 
let count = 0;

//functions here
let showNum = () => {
    displayTotal.textContent = count;
    if (count < 0){
        displayTotal.style.color = 'red';
    } else if (count > 0) {
        displayTotal.style.color = 'black';
    }
}

 const addInput = () => {
    newInputField = parseInt(inputField.value);
    count += newInputField;
    //console.log(count);
    showNum();
 }


const subtractInput = () => {
    var newInputField = parseInt(inputField.value);
    count -= newInputField;
    //console.log(count);
    showNum();
}

//event listeners for on click
plusBtn.addEventListener('click', addInput);
minusBtn.addEventListener('click', subtractInput);

})