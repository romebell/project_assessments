let count = 0
let incrementer = 1

let countDiv
let form

document.addEventListener("DOMContentLoaded", () => {
    countDiv = document.querySelector("#counter")
    incrementDiv = document.querySelector("#incrementer")
    form = document.querySelector("form")

    countDiv.textContent = count
    incrementDiv.value = incrementer


    form.addEventListener("submit", (e) => {
        let button = e.submitter.textContent
        incrementer = parseInt(e.target[1].value)
        e.preventDefault()

        if (button === "+") {
            count += incrementer

            countDiv.textContent = count
        } else if (button === "-") {
            count -= incrementer

            countDiv.textContent = count
        }

        if (count < 0) {
            countDiv.setAttribute("class", "negative")
        } else {
            countDiv.removeAttribute("class")
        }

    })
})