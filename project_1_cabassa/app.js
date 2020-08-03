const modifier = document.getElementById("modifier");
const display = document.getElementById("display");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

display.textContent = 0;
modifier.value = 1;

plus.addEventListener("click", function (e) {
    display.textContent = display.textContent + modifier.value;
});

minus.addEventListener("click", function (e) {
    display.textContent = display.textContent - modifier.value;
});


