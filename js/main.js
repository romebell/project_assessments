
let currentNum = document.getElementById('currentNumber');
let input = document.getElementById('number');
let add = document.getElementById('addition');
let subtract = document.getElementById('subtraction');

output = 0;
// number = 1;
let result;



function one(){
    let numChange = parseInt(input.value);
    let originalNum = parseInt(currentNum.textContent);
    
    result = numChange + originalNum;
    currentNum.textContent = result;
    console.log(result);

    if (currentNum.textContent >= 0){
        currentNum.style.color = 'black';
    }
}

function two(){
    let numChange = parseInt(input.value);
    let originalNum = parseInt(currentNum.textContent);
    
    result = originalNum - numChange;
    currentNum.textContent = result;

    if (currentNum.textContent < 0){
        currentNum.style.color = 'red';
    }
}

add.addEventListener('click', one);
subtract.addEventListener('click', two);

