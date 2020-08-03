



document.addEventListener('DOMContentLoaded', () => {
    let output = document.getElementById('total');
    let number = document.getElementById('input');
    let add = document.getElementById('adds');
    let sub = document.getElementById('subs');
    // output.innerText = `${result}`
    add.addEventListener('click', one);
    sub.addEventListener('click', two);


    // output = 0;
    number = 1;
    let result;

    function currentNum(){
        output.textContent = output;
    }


    function one(number, output){
        console.log('clicked');
        let numbers = number(document.getElementById(input).value);
        result = numbers += output;
        // console.log(result);
        // output.textContent = `${result}`;
        return result;
        currentNum();
        
    }
    // output.textContent = `${result}`;
    console.log(result);
   

    function two(number, output){
        console.log('clicked');
       result = number-=output;
       output.textContent = `${result}`;
    }
    
    output.innerText = `${result}`

})