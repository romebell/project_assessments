// document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('increase').addEventListener('click', clickAdd);
    document.getElementById('decrease').addEventListener('click', clickSub);
	let input = document.getElementById('input');
	input.defaultValue = 1;
	console.log(input)
    
    let displayNumber = 0;
	function clickAdd(e) {
		displayNumber += parseInt(input.value);
		//finalNumber += input
		e.preventDefault();
		number();
		
	}
	function clickSub(e) {
        displayNumber -= parseInt(input.value);
		//finalNumber-= input
		e.preventDefault();
		number();
		
        

	}

	function number() {
		document.getElementById('number').innerHTML = displayNumber;
	}
	
	
	
