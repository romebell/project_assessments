console.log('My files are connected');


// I know i need to include parseInt, but each place I try and implement 
//it throws back NaN in my output
document.addEventListener('DOMContentLoaded', function() {
	let input = document.getElementById('input');
	input.defaultValue = 1;
	console.log(input)
    
    let finalNumber = 0;
	function plusClick(e) {
		finalNumber += parseInt(input.value);
		//finalNumber += input
		e.preventDefault();
		newNumber();
		turnRed();
	}
	document.getElementById('plus').addEventListener('click', plusClick);
	function minusClick(e) {
        finalNumber -= parseInt(input.value);
		//finalNumber-= input
		e.preventDefault();
		newNumber();
		turnRed();
        

	}
	document.getElementById('minus').addEventListener('click', minusClick);

	function newNumber() {
		document.getElementById('output').innerHTML = finalNumber;
	}
	
	function turnRed() {
		document.getElementById('output').innerHTML=finalNumber;
		if (finalNumber < 0 ) {
			document.getElementById('output').style.color = 'red'
		} else {
			document.getElementById('output').style.color = 'black'
		}
	}
	
});
