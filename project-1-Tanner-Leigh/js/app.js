console.log("hello front end")
let result = 0

function add() {
    result += input;
    console.log(result);
    changeNumber();
}
document.getElementById('plus').addEventListener('click', add);

function subtract() {
    result -= input;
    console.log(result);
    changeNumber();
}
document.getElementById('minus').addEventListener('click', subtract);

function changeNumber() {
    document.getElementById('number').innerHTML=result;
}


let input = document.getElementById('input').defaultValue=1
console.log(input)