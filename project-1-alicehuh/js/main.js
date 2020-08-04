document.addEventListener('DOMContentLoaded', ()=> {

const plusButton = document.querySelector('#plus-button')
const minusButton = document.querySelector('#minus-button')
const screen = document.querySelector('.calculator')

plusButton.addEventListener('click', addNumber)
plusButton.addEventListener('mouseover',changeColor)
plusButton.addEventListener('mouseout', colorBack)
minusButton.addEventListener('click', minusNumber)
minusButton.addEventListener("mouseover", changeColor)
minusButton.addEventListener('mouseout', colorBack)

document.querySelector('#input-number').value = 1
document.querySelector('.calculator').innerHTML = 0

function addNumber(){

    inputNumber = document.querySelector('#input-number').value   
    displayNumber = document.querySelector('.calculator').innerHTML
    results = Number(inputNumber)+Number(displayNumber) 
    screen.innerText = results

    if(results<0){
        screen.style.color = "red";  
    }else{
        screen.style.color = "black";
    }
}



function minusNumber(){
    inputNumber = document.querySelector('#input-number').value
    displayNumber = document.querySelector('.calculator').innerHTML
    results = Number(displayNumber)-Number(inputNumber)
    screen.innerText = results
    
    if(results<0){
        screen.style.color = "red";  
    }else{
        screen.style.color = "black";
    }
    
    
}

function changeColor(event){
    event.target.style.backgroundColor = "white";
    event.target.style.color = "rgb(189, 188, 188)";    
}

function colorBack(event){
    event.target.style.backgroundColor = "rgb(189, 188, 188)";
    event.target.style.color = "white";
}




})
