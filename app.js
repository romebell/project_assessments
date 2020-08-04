let count = 0

function main() {
    const buttonInc = document.querySelector('#increase');
    const buttonDec = document.querySelector('#decrease');
    const numValue = parseInt(document.querySelector("#input").value);
    let displayNumber = document.getElementById('number');
    buttonInc.addEventListener('click', function() {
        count += (numValue);
        displayNumber.innerHTML = count;
        
        console.log(displayNumber);
    });
    
    
    buttonDec.addEventListener('click', function() {
        count -= numValue;
        displayNumber.innerHTML = count;
    });
    
}

