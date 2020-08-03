const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const output = document.getElementById("output");

let outputVal = 0;

output.textContent = outputVal;


minus.addEventListener("click", function () {
    console.log("clicked minus");
    const input = document.getElementById("int").value;
    console.log(`input is ${input}`);
    outputVal -= input;
    console.log(`outputVal is ${outputVal}`);
    output.textContent = outputVal;
});

plus.addEventListener("click", function () {
    console.log("clicked plus");
    const input = document.getElementById("int").value;
    console.log(`input is ${input}`);
    outputVal += Number(input);
    console.log(`outputVal is ${outputVal}`);
    output.textContent = outputVal
});

