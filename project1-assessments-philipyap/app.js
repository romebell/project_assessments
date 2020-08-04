
    let num1 = 0;
    const countEl = document.getElementById('num1')
    
    function positive (){
        let num2 = parseInt(document.getElementById('num2').value);
        num1 = num1 + num2;
        countEl.innerHTML = num1;
        if(num1 < 0){
            num1.style.color = 'red';
        }
        else{
            num1.style.color = 'black';
        }
    }

    function negative(){
        let num2 = parseInt(document.getElementById('num2').value);
        num1 = num1 - num2;
        countEl.innerHTML = num1;
        if(num1 < 0){
            num1.style.color = 'red';
        }
        else{
            num1.style.color = 'black';
        }
    }