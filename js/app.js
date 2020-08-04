document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    let countElement = document.getElementById('count');
    

    document.getElementById('plus').addEventListener('click', function plus() {
        count ++;
        countElement.value = count;
    } )
    document.getElementById('minus').addEventListener('click', function minus(){
        count --;
        countElement.value = count;

    })

})


