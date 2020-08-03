const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

function isNeg (result) {
    if (result < 0) {
        document.querySelector('.output').style.color = 'red'
    } else {
        document.querySelector('.output').style.color = 'black'
    }
}
document.addEventListener('DOMContentLoaded', function() {

    plus.addEventListener('click', () => {
        const inputValue = document.querySelector('input').value
        const outputValue = document.querySelector('.output').textContent
        let result = parseInt(outputValue, 10) + parseInt(inputValue, 10)
        document.querySelector('.output').textContent = result
        isNeg(result)
    })
    minus.addEventListener('click', () => {
        const inputValue = document.querySelector('input').value
        const outputValue = document.querySelector('.output').textContent
        let result = parseInt(outputValue, 10) - parseInt(inputValue, 10)
        document.querySelector('.output').textContent = result
        isNeg(result)
    })
})