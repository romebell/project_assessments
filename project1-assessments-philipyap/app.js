document.addEventListener('DOMContentLoaded', ()  =>{  
    let num1 = document.querySelector('#num1')
    let num2 = document.querySelector('#num2')
    let positive = document.querySelector('#positive')
    let negative = document.querySelector('#negative')
    

    positive.addEventListener('click', function(){
        num1.value = parseInt(num1.value) + 1
        
        if (num1.value < 0){
            num1.style.color = 'red'
            
        }      
    })
    negative.addEventListener('click', function(){
        num1.value = parseInt(num1.value) -1
        
        if (num1.value < 0){
            num1.style.color = 'red'
            
        }       
    })
    
})