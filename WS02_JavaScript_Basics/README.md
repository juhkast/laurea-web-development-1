# Workshop 02 – JavaScript Basics

In this workshop, you will practice the basic concepts of JavaScript.

Create the following structure in your course repository:

WS02_JS_basics/
├── index.html
└── js/
    └── script.js

Connect `script.js` to your HTML page using the `<script>` element.

## Exercise 1 – Developer Tools and Console

Open your `index.html` page in a browser and open Developer Tools (F12).

Open the **Console** and try the following commands:

console.log("Hello World!");
alert("Hello World!");

Try also writing something incorrectly and observe the error message in the Console.

## Exercise 2 – Variables

Create variables for your name, age and favourite animal.

For example:

const name = "John";
let age = 25;
const favouriteAnimal = "Red Panda";

Print the values to the Console using `console.log()`.

Then create a sentence using the variables and print it to the Console.

Example output:

Hello! My name is John and my favourite animal is the Red Panda.

## Exercise 3 – User Input

Ask the user for their name using `prompt()`.

Store the answer in a variable and print a greeting to the Console.

Example:

Hello Juho! Welcome to JavaScript.

## Exercise 4 – Conditionals

Ask the user for their age using `prompt()`.

Create an `if / else` statement:

- If the user is 18 or older, display:
  "You are an adult."
- Otherwise display:
  "You are under 18."

Print the result to the Console.

## Exercise 5 – Functions

Create a function called `greetUser`.

The function should receive a name as a parameter and print a greeting.

Example:

function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("John");

Modify the function and test it with different names.

## Bonus – Connect JavaScript to the Page

Add a heading and a button to your HTML page.

When the button is clicked, use JavaScript to display a message.

You can experiment with:

alert("JavaScript works!");

Try changing the message to something of your own.

## Submission

1. Complete the exercises in your `WS02_JS_basics` folder.
2. Commit and push your changes to GitHub.
3. Make sure the files are visible in your GitHub repository.
4. Submit the link to your repository in Canvas.