// console.log('hello');
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let input = document.querySelector('input')
let output = document.querySelector('h1')

let defaultNum = parseInt(input.defaultValue)

function negative (num) {
    if (num < 0){
        return true
    }
}

plus.addEventListener('click', function() {
    let currentNum = parseInt(output.textContent)
    let inputNum = parseInt(input.value)

    currentNum += inputNum
    output.textContent = currentNum

    if (currentNum < 0) {
        output.style.color = 'red'
    }
    else {
        output.style = ''
    }    
})

minus.addEventListener('click', function() {
    let currentNum = parseInt(output.textContent)
    let inputNum = parseInt(input.value)

    currentNum -= inputNum
    output.textContent = currentNum

    if (currentNum < 0) {
        output.style.color = 'red'
    }
    else {
        output.style = ''
    }
})

