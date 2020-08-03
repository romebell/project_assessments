console.log('My files are connected');

document.addEventListener('DOMContentLoaded', function() {
	let finalNumber = 0;

	function plusClick() {
		finalNumber += input;
		
		newNumber();
	}
	document.getElementById('plus').addEventListener('click', plusClick);

	function minusClick() {
		finalNumber -= input;
		
		newNumber();
	}
	document.getElementById('minus').addEventListener('click', minusClick);

	function newNumber() {
		document.getElementById('output').innerHTML = finalNumber;
	}
	let input = (document.getElementById('input').defaultValue = 1);
});
