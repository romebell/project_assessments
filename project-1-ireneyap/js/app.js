let count = 0;
const countEl = document.getElementById("count");

function plus(){
    if(count<200){
        count++;
        countEl.value = count;
    }
}
function minus(){
    if (count > -200) {
    count--;
    countEl.value = count;
    }  
}

function number(){
    let number = document.getElementById('number')
    number++
    number.innerHTML = number;
    


}
