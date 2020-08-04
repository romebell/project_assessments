console.log(input)
let buttAdd = document.getElementById('plus');



let buttMinus = document.getElementById('minus');




let output = document.getElementById('output');

document.addEventListener('DOMContentLoaded', ()=>{
   
  
   
   
   
   buttAdd.addEventListener('click', () => {
   let input = document.getElementById('input').value;
   let inputOne = parseInt(input);
   let outputOne = parseInt(output.textContent)
   
   
   output.textContent = inputOne + outputOne;
   console.log(output.textContent)
   if(outputOne + inputOne < 0){
      output.style.color = 'red'
   } else {
      output.style.color = 'black'
   }
   
   
   

   })
   buttMinus.addEventListener('click', () => {
      let input = document.getElementById('input').value;
      let inputOne = parseInt(input);
      
      let outputOne = parseInt(output.textContent)
      console.log(outputOne)
      
      output.textContent = outputOne - inputOne;
      console.log(output.textContent)
      if(outputOne - inputOne < 0){
         output.style.color = 'red'
      } else {
         output.style.color = 'black'
      }
      
   })

   

})