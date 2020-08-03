let text = document.querySelector("#num");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");

document.addEventListener("DOMContentLoaded", function () {
  plus.addEventListener("click", function () {
    let input = document.querySelector("#input1").value;
    let newInput = parseInt(input);
    let newText = parseInt(text.textContent);
    text.textContent = newText + newInput;
  });

  minus.addEventListener("click", function () {
    let input = document.querySelector("#input1").value;
    let newInput = parseInt(input);
    let newText = parseInt(text.textContent);
    text.textContent = newText - newInput;
  });
});
