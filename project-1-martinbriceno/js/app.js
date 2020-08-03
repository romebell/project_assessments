let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let result = document.getElementById('result').textContent;
let inputNumb = document.getElementById('inputNumb').value;
let numb1 = parseInt(result);
let numb2 = parseInt(inputNumb);




document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('plus').addEventListener('click', plusNumber);
    document.getElementById('minus').addEventListener('click', minusNumber);


    function plusNumber () {
        let result = document.getElementById('result').textContent;
        let inputNumb = document.getElementById('inputNumb').value;
        let numb1 = parseInt(result);
        let numb2 = parseInt(inputNumb);
        let numb3 = numb1 + numb2;
        if (numb3 < 0) {
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').innerHTML = numb3;

        } else {
            document.getElementById('result').style.color = 'black';
            document.getElementById('result').innerHTML = numb3;
        }

    };

    function minusNumber () {

        let result = document.getElementById('result').textContent;
        let inputNumb = document.getElementById('inputNumb').value;
        let numb1 = parseInt(result);
        let numb2 = parseInt(inputNumb);
        let numb3 = numb1 - numb2;
        if (numb3 < 0) {
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').innerHTML = numb3;

        } else {
            document.getElementById('result').style.color = 'black';
            document.getElementById('result').innerHTML = numb3;
        }




    };
});
