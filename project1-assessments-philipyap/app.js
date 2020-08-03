document.addEventListener('DOMContentLoaded', ()  =>{  
    let num1 = document.querySelector('#num1')
    let num2 = document.querySelector('#num2')
    let positive = document.querySelector('#positive')
    let negative = document.querySelector('#negative')
    

    positive.addEventListener('click', function(){
        num1.value = parseInt(num1.value) + 1
        num2.value = parseInt(num2.value) + 1
        
    })
    negative.addEventListener('click', function(){
        num1.value = parseInt(num1.value) -1
        num2.value = parseInt(num2.value) - 1
                
    })
})