document.addEventListener('DOMContentLoaded', function(){
    var count = 0;
    var countElement = document.getElementById('count');

    document.getElementById('plus').addEventListener('click', function plus() {
        count ++;
        countElement.value = count;
    } )
    document.getElementById('minus').addEventListener('click', function minus(){
        count --;
        countElement.value = count;
    })
    
   

   


})
