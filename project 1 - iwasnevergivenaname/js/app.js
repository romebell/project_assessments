const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const output = document.getElementById("output");

let outputVal = 0;

output.textContent = outputVal;


minus.addEventListener("click", function () {
    const input = document.getElementById("int").value;
    outputVal -= input;
    if (outputVal < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    output.textContent = outputVal;
});

plus.addEventListener("click", function () {
    const input = document.getElementById("int").value;
    outputVal += Number(input);
    if (outputVal < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    output.textContent = outputVal
});

