/* AVERAGE FUNCTION

function average(numbers){
  // find the sum of numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  // return the division of the sum by the length of the array
  return sum / numbers.length;
}

let studentGrades = [56, 79, 99, 87, 77, 98];
console.log(average(studentGrades));

********************************************/



/* PRINT EVEN NUMBERS function

function printEvenNumbers(numbers){
  for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
      console.log(numbers[i])
    }
  }
}

let myNumbers = [3, 5, 6, 7, 9, 10];

console.log(printEvenNumbers(myNumbers));

*********************************************/


/* NOTES ON SCOPE

There are two types of scope:
- Global
- Local

Global SCOPE
When you create a variable that exists by itself and not within
a function, that is Global Scope. Not declaring a variable
within a function makes it accesible anywhere on that page.



Local Scope
When declaring a variable within a function it will only be
accesible within that particular function. You will not be
able to use it anywhere outside the function.

**********************************************/


/* Notes on the DOM (Document Object Model)

HOW TO PASS INFORMATION FROM HTML TO JAVASCRIPT FILE

Retrieving DOM elements
There are 3 main ways to access HTML elements using the DOM:
- document.getElementById();
- document.getElementsByTagName(); (plural)
- document.getElementsByClassName(); (plural)

document.getElementById();
This is the most commonly used DOM method. Pulls in the info
of an html element with a certain ID.

document.getElementsByTagName();
Works the same as by ID but by using a tag name such as a,
li, em, etc...

document.getElementsByClassName();
Works the same except uses class names instead of the id.



Retrieving Input Values
In order to retrieve values from inputs, you must append .values
to the API.

E.g. document.getElementById('firstName').value;


parseInt();
In order to retrieve a number from an input you must use the
parseInt() method to convert the input string.

E.g. var age = parseInt(document.getElementById('age').value);

So if age was input as '30' the parseInt() method will make
it the number 30.


Using:
- getElementById();
- addEventListener();

****************************/





/* PASS HTML FORM INFO TO THE CONSOLE USING .addEventListener

let btn = document.getElementById('btn');

//when this btn is click print the fname and the age.

function printUserInput(){
  let firstName = document.getElementById('firstName').value;
  let age = parseInt(document.getElementById('age').value);
  age += 2;
  console.log(firstName);
  console.log(age);
}

btn.addEventListener('click', printUserInput);

****************************************************/


/* DOM .innerHTML property

.innerHTML is a DOM property that we can use in 2 ways.
- Retrieving HTML text that already exists on the page
- Posting data from our JavaScript into the HTML

Retrieving text
Similar to .value, you can retrieve the text within an HTML
element using the .innerHTML property.

E.g. var text = document.getElementById('paragraph').innerHTML;

Post more information to the HTML Document

var text = document.getElementById('paragraph').innerHTML;

document.getElementById('paragraph').innerHTML = text + " and I am awesome!";

****************************************************/

/* PRACTICE IDEA */
// Create a program that will take a user input and show it in the HTML doc.

function sendMessage(){
  let message = document.getElementById('message').value;
  document.getElementById('userMessage').innerHTML = message;
}

btn.addEventListener('click', sendMessage);
