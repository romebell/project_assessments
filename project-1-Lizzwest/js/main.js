console.log('My files are connected');


// I know i need to include parseInt, but each place I try and implement 
//it throws back NaN in my output
document.addEventListener('DOMContentLoaded', function() {
	let input = (document.getElementById('input').defaultValue = 1);
    
    let finalNumber = 0;
	function plusClick() {
		//finalNumber += parseInt(input.value);
		finalNumber += input
		
		newNumber();
	}
	document.getElementById('plus').addEventListener('click', plusClick);
	function minusClick() {
       // finalNumber -= parseInt(input.value);
		finalNumber-= input
		newNumber();
        

	}
	document.getElementById('minus').addEventListener('click', minusClick);

	function newNumber() {
		document.getElementById('output').innerHTML = finalNumber;
	}
	
	
});
