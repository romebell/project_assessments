// console.log('hello');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let input = document.querySelector('input')
let output = document.querySelector('h1')

plus.addEventListener('click', function() {
    console.log(input.value);
})

minus.addEventListener('click', function() {
    console.log(input.value);
})

console.log(output.textContent+1);