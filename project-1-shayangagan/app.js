let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');
let display = document.querySelector('#display');
display.value = 0

btnAdd.addEventListener('click', () =>{
    display.value = parseInt(display.value) + parseInt(input.value);
    display.innerText = display.value;
});

btnSubtract.addEventListener('click', () =>{
    display.value = parseInt(display.value) - parseInt(input.value);
    display.innerText = display.value;
});