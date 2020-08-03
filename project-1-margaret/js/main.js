// console.log('hello');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let input = document.querySelector('input')
let output = document.querySelector('h1')

let defaultNum = parseInt(input.defaultValue)

plus.addEventListener('click', function() {
    let currentNum = parseInt(output.textContent)
    let inputNum = parseInt(input.value)

    currentNum += inputNum
    output.textContent = currentNum
})

minus.addEventListener('click', function() {
    let currentNum = parseInt(output.textContent)
    let inputNum = parseInt(input.value)

    currentNum -= inputNum
    output.textContent = currentNum
})

