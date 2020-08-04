document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    let countElement = document.getElementById('count');
    let counterResult = document.getElementById('counter')
    

    document.getElementById('plus').addEventListener('click', function plus() {
        count ++;
        counterResult.value = count;
    } )
    document.getElementById('minus').addEventListener('click', function minus(){
        count --;
        counterResult.value = count;

    })

})


