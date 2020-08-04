let count = 0;
const countEl = document.getElementById("count");

function plus(){
    let number = parseInt(document.getElementById('number').value);
    count = count + number;
    countEl.innerHTML = count;
    if(count < 0){
        countEl.style.color = "#FF0000"
    }else{
        countEl.style.color = "#000000"
    }
}
function minus(){
    let number = parseInt(document.getElementById('number').value);
    count = count - number
    countEl.innerHTML = count; 
    if(count < 0){
        countEl.style.color = "#FF0000"
    }else{
        countEl.style.color = "#000000"
    }
    
}
