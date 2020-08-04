# Project Assessments
- Making a counter that when clicking plus or minus to display on the html and also when typing in a number in the input box to be able to add 1 or minus 1 to it conitnuosly.

## steps

- start with html set up with linking style.css and script app.js

- in HTML make 2 buttons, one for minus and one for add

- in HTML make input box and type number because were donly doing numbers

-in Html add an h1 with a class so I can later grab that element to to display from java script the result of clicking minus or plus.
- javascript make functions for adding and subtracting for the input. And make for the out put to show on screen. 

## Code Snippet HTML

1. Created one main dive to have all my buttons and input in there.

```Html
<div class="container"> 
        <h1 id="output">0</h1>
        <button onclick="" id="plus">+</button>
        <input type="number" name="" id="input" value="1">
        <button id="minus"> <span id="minus">-</span></button>
    </div>
```
## Code snippet for Javascript
2. Started with my variables for each button and made one for the h1 to start at zero so I can add to later on my functions to go up by one number

```Js
let clickAdd = 0;

//making add button

let buttAdd = document.getElementById('plus');

//making minus button
let buttMinus = document.getElementById('minus');

//making input bar to grab element then use later
let input = document.getElementById('input');

//this is to get the h1 id and display on html
let output = document.getElementById('output');

```

3. making the button Listen for click on the addEventListener and add a fat arrow () => {} function inside to have the input.value. found a reference on w3schools on how to come about it. https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number. I did the same for subtraction. At first I thought I had to make  seperate function to grab the elementId then .innertext to show on screen for each adding and subctracting. Then I figure what if i can just throw it in there by grabbing the id for h1 id called input and made it equal to the input.value that was already defined in there.

```Js
buttAdd.addEventListener('click', () => {
    //start with input and give . value
    //The parseInt() function parses a string and returns an integer.
    //https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number.
    //pass in current value input.value then add 1
 input.value = parseInt(input.value) + 1;
 output.innerText = parseInt(input.value);
    //can do the same for subtract
    // document.getElementById('output')

})
```

## Change to 3. 
3. correction on the input.value to make it subtract and add the correct way. it was previously moving in increments of one either way plus and mine. now it adding or minusing the previous integer with my corrected function 
```JS 
buttAdd.addEventListener('click', () => {
   let input = document.getElementById('input').value;
   let inputOne = parseInt(input);
   let outputOne = parseInt(output.textContent)
   
   
   output.textContent = inputOne + outputOne;
   console.log(output.textContent)
   
   

   })
   buttMinus.addEventListener('click', () => {
      let input = document.getElementById('input').value;
      let inputOne = parseInt(input);
      
      let outputOne = parseInt(output.textContent)
      console.log(outputOne)
      
      output.textContent = outputOne - inputOne;
      console.log(output.textContent)
      
   })


```

## Code snippet for CSS

4. I wanted to make CSS last because the most important thing was the have this application work, which was done in javascript. Next I started with the div class .container to give a font-family: san serif and to have it centered by using text align. I tried using display: flex, but it made everything show up side by side and because of time I just wanted it to be simple and as close to the main project.;

```CSS
.container {
    font-family: sans-serif;
    text-align: center;
   }

```
5. For each button I played with the padding size and font size to try and get it bigger. The plus and minus button were not even when i would put the same padding. One was long than the other so I had to play with it to make it close to each other size.

```CSS

#plus{
    padding: 15px 20px;
    font-size: 20px;
    margin: 10px;
   
}

#minus{
    padding: 15px 6px;
    font-size: 20px;
    margin: 10px;
   
   
    
}

#input{
    padding: 14px 40px;
    font-size: 20px;
    width: 20px;
    height: 20px;
}

```
6. Added styel.color and found an if statement if the integer is less than 0 to turn it red 

```js
if(outputOne - inputOne < 0){
         output.style.color = 'red'
      } else {
         output.style.color = 'black'
      }

```

## Conclusion 
I started out ok with setting up the html then went on to the javascript. Here is where im always stuck on what to do first. so I wrote in green text of what i should have to ge this thing working and went over the project-1-assessment read me for ideas of how to start. Im glad the instructors went over what it should be doing and how it looks because seeig something visual gives me an idea on how the mechanics should work. The Css was straight forward I can play on decently to see how I can style it little by little. 

## Comfort level from 1 - 5 
I would say a 2.5, I only say that, because I hope to be able to do the task without looking up on google how to create a function for what I needed in the project. I understand how to write it partially, but I dont know most of the time what is needed to make it work. I am able to grab the elementById that I set up in the html. Then the part where after the event listenters and setting up all my variables is the difficult part for me. 

## references 
- padding examples for buttons and padding.
 
 button
https://www.w3schools.com/css/css3_buttons.asp
 input bar
https://www.w3schools.com/css/css_form.asp

dom input number onto screen
https://www.w3schools.com/jsref/dom_obj_number.asp

looking up parseInt to help in javscript 
https://www.w3schools.com/jsref/jsref_parseint.asp#:~:text=The%20parseInt()%20function%20parses,number%20to%20a%20decimal%20number.

looking up examples on how to use parseInt to increment values

https://stackoverflow.com/questions/9186346/javascript-onclick-increment-number

w3 example of making numbers go up on click

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_number_stepup




