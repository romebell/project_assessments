document.addEventListener('DOMContentLoaded', ()=> {

const container = document.querySelector('.container')
const element = document.querySelector('.element')

const plusButton = document.querySelector('#plus-button')
const minusButton = document.querySelector('#minus-button')
currentValue = document.querySelector('.calculator').value 
// const inputNumber = document.querySelector('input-number')






plusButton.addEventListener('click', addNumber)
function addNumber(){
    inputNumber = document.querySelector('#input-number').value
    console.log(inputNumber)
    
    screen = inputNumber + screen
    displayNumber = document.querySelector('.calculator').value
    console.log(displayNumber)

}



// display.setAttribute('id', 'display')
// const plusButton = document.createElement('button')
// plusButton.setAttribute('id','plus-button')
// plusButton.innerText = '+'
// const minusButton = document.createElement('button')
// minusButton.setAttribute('id','minus-button')
// minusButton.innerText = '-'
// const inputNumber = document.createElement('input')
// function dsiplayNumber(){
    


// }


// var x = document.getElementById("input-number").value;



// plusButton.addEventListener('click',addNumber(inputX,displayedNum))

// function addNumber(x,y){
//     var inputX = document.getElementById("input-number").value;
//     var y = inputX + 

// }





// function addNumber(x,y){
    
//    resultNumber.innerText = x+y

// //     sum = inputX + displayedNum;
// // console.log(sum)


// }
// var inputX = document.getElementById("input-number").value;
// var displayedNum = resultNumber.innerHTML;
// console.log(inputX)
// console.log(displayedNum)


})
