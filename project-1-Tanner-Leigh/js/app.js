console.log("hello front end")
let result = 0

function add(e) {
    result += parseInt(input.value);
    console.log(result);
    e.preventDefault();
    changeNumber();
}
document.getElementById('plus').addEventListener('click', add);

function subtract(e) {
    result -= parseInt(input.value);
    console.log(result);
    e.preventDefault();
    changeNumber();
}
document.getElementById('minus').addEventListener('click', subtract);

function changeNumber() {
    document.getElementById('number').innerHTML=result;
    if (result < 0 ) {
        document.getElementById('number').style.color = 'red'
    } else {
        document.getElementById('number').style.color = 'black'
    }
}

let input = document.getElementById('input');
input.defaultValue=1;
console.log(input);