let negative = document.getElementById("negative");
let positive = document.getElementById("positive");
let input = document.getElementById("input");
let value = document.getElementById("value");

negative.addEventListener("click", function(){
    console.log((1*value.textContent)-(1*input.value));
})
positive.addEventListener("click",  function(){
    console.log( (1*value.textContent)+(1*input.value) );
})