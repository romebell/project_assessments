const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const output = document.getElementById("output");

let outputVal = 0;

output.textContent = outputVal;
//
// console.log(input);

minus.addEventListener("click", function () {
    let outputVal = 0;
    console.log("clicked minus");
    const input = document.getElementById("int").value;
    console.log(input);
    output.textContent = outputVal - input;
});

plus.addEventListener("click", function () {
    let outputVal = 0;
    console.log("clicked plus");
    const input = document.getElementById("int").value;
    console.log(input);
    output.textContent = outputVal + input;
});

