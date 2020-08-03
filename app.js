let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let operatorValue = document.getElementById("operatorValue")
let counter = document.getElementById("counter");

operatorValue.value = 1;

let counterValue = 0;

plusButton.onclick = function addTo() {
    counterValue = +counterValue + +operatorValue.value;
    console.log(counterValue);
    counter.innerText = counterValue;
  if (counterValue < 0) {
    counter.style.color = "red";
    }
}

minusButton.onclick = function minusTo() {
  counterValue = +counterValue - +operatorValue.value;
  console.log(counterValue);
  counter.innerText = counterValue;

  if (counterValue < 0) {
    counter.style.color = "red"
  }
}
