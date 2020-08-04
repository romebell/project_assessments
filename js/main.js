const plusButton = document.querySelector('.increase-btn');
const minusButton = document.querySelector('.decrease-btn');
const mainOuput = document.querySelector('.main-output')
let count = 1;
    function outputChangeColor () {
        mainOuput.textContent = count;
        if (count < 0) {
            mainOuput.style.color = 'red';
        } else {
            mainOuput.style.color = 'black';
        }
    }

plusButton.addEventListener('click',function() {
    let inputNum = Number(document.getElementById('input-value').value);
        count += inputNum;
        outputChangeColor ()
});
minusButton.addEventListener('click',function() {
    let inputNum = Number(document.getElementById('input-value').value);
     count -= inputNum
    outputChangeColor ()
});

