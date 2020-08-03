// console.log('hello');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let input = document.querySelector('input')
let output = document.querySelector('h1')

let currentNum = parseInt(output.textContent)
let inputNum = parseInt(input.value)

plus.addEventListener('click', function() {
    currentNum += inputNum
    
    output.textContent = currentNum
})

minus.addEventListener('click', function() {
    console.log(input.value);
})

console.log(typeof currentNum, typeof inputNum);