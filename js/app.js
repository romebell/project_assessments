document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    let counterResult = document.getElementById('counter');
    let userInput = document.getElementById('count')


    document.getElementById('plus').addEventListener('click', function plus() {
        console.log(userInput.value)
        count = parseInt(count)+ parseInt(userInput.value);
        counterResult.value = count;
    
    })
    
    document.getElementById('minus').addEventListener('click', function minus(){
        count = parseInt(count)- parseInt(userInput.value);
        counterResult.value = count;
        
    })
    
})





