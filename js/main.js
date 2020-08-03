let negative = document.getElementById("negative");
let positive = document.getElementById("positive");
let input = document.getElementById("input");
let value = document.getElementById("value");

negative.addEventListener("click", function(){
    value.textContent =(1*value.textContent)-(1*input.value) ;
})
positive.addEventListener("click",  function(){
    value.textContent= (1*value.textContent)+(1*input.value) ;
})

negative.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "white";
    event.target.style.color = "gray";
    setTimeout(function() {
        event.target.style.backgroundColor = "";
        event.target.style.color = "";
    }, 500);
}, false);

positive.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "white";
    event.target.style.color = "gray"
    setTimeout(function() {
        event.target.style.backgroundColor = "";
        event.target.style.color = "";
    }, 500);
}, false);