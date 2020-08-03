let result = document.getElementById('result').textContent;
// let plus = document.getElementById('plus');
// let minus = document.getElementById('minus');
let inputNumb = document.getElementById('inputNumb').value;
let numb1 = parseInt(result);
let numb2 = parseInt(inputNumb);




document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('plus').addEventListener('click', plusNumber);
    document.getElementById('minus').addEventListener('click', minusNumber);


    function plusNumber () {
        let numb3 = numb1 + numb2;
        document.getElementById('result').innerHTML = numb3;
        console.log(numb3);
        result = numb3;

    };

    function minusNumber () {

        let numb3 = numb1 - numb2;
        document.getElementById('result').innerHTML = numb3;
        console.log(result);
        result = numb3;

    };
});
