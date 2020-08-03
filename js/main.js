



// document.addEventListener('DOMContentLoaded', () => {
    let output = document.getElementById('total');
    let numbers = document.getElementById('number');
    let add = document.getElementById('adds');
    let sub = document.getElementById('subs');
    // output.innerText = `${result}`
   


    output = 0;
    // number = 1;
    let result;

    // function currentNum(){
    //     output.textContent = output;
    // }

    function one(){
        let numChange = parseInt(numbers.value);
        let originalNum = parseInt(output.textContent);

        result = numChange + originalNum;
        // console.log(result);
        output.textContent = result;
    }

    function two(){
        let numChange = parseInt(numbers.value);
        let originalNum = parseInt(output.textContent);

        result = numChange - originalNum;
        // console.log(result);
        output.textContent = result;
    }
    // output.textContent = result;
    // console.log(output);
        // console.log('clicked');
        // let numbers = number.value;
        // console.log(numbers);
        // result = numbers += output;
        // console.log(result);
        // output.textContent = `${result}`;
        // return result;
        // currentNum();
        
    
    // output.textContent = `${result}`;
    // console.log(result);
   

    // function two(number, output){
    //     console.log('clicked');
    //    result = number-=output;
    //    output.textContent = `${result}`;
    // }
    
    // output.innerText = `${result}`

    add.addEventListener('click', one);
    sub.addEventListener('click', two);

// })