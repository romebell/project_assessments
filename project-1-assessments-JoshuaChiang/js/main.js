const incrementResult = document.querySelector("h1");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const incrementInput = document.querySelector("#incrementor");

function addNumber()
{
    let incrementor = parseFloat(document.getElementById("incrementor").value, 10);
    let original = parseFloat(document.getElementById("origin").textContent, 10);
    
    let sum = original + incrementor;
    incrementResult.textContent = sum;

    if (incrementResult.textContent === "NaN")
    {
        incrementResult.textContent = original;
        if (original >= 0)
        {
            incrementResult.style.color = "black";
        }
        else
        {
            incrementResult.style.color = "red";
        }
    }
    else
    {
        if (sum >= 0)
        {
            incrementResult.style.color = "black";
        }
        else
        {
            incrementResult.style.color = "red";
        }
    }
}

function subtractNumber()
{
    let incrementor = parseFloat(document.getElementById("incrementor").value, 10);
    let original = parseFloat(document.getElementById("origin").textContent, 10);
    
    let difference = original - incrementor;
    incrementResult.textContent = difference;

    if (incrementResult.textContent === "NaN")
    {
        incrementResult.textContent = original;
        if (original >= 0)
        {
            incrementResult.style.color = "black";
        }
        else
        {
            incrementResult.style.color = "red";
        }
    }
    else
    {
        if (difference >= 0)
        {
            incrementResult.style.color = "black";
        }
        else
        {
            incrementResult.style.color = "red";
        }
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    incrementInput.defaultValue = 1;

    plusButton.addEventListener("click", function()
    {
        addNumber();
    });

    minusButton.addEventListener("click", function()
    {
        subtractNumber();
    });

})