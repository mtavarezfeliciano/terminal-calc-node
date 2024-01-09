var rs = require("readline-sync");

console.log("Welcome, Nicholas :^)");

//the functions for the calculations

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multi(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

let validSymbols = ["+", "-", "*", "/"];
let isValidOperation = false;

let operation;
let num1;
let num2;

//check if you using an actual operation symbol or naw

while (!isValidOperation) {
  operation = rs.question("What operation would you like to perform?");
  if (validSymbols.includes(operation)) {
    isValidOperation = true;
  } else {
    console.log("That is not a valid operation. Please try again.");
  }
}
// im sorry for all the notes its 1:43am at the moment and im going crazy.

num1 = parseInt(rs.question("Please enter the first number: "));

if (isNaN(num1)){
    console.log('That is not a number.');
    process.exit();
}

num2 = parseInt(rs.question("Please enter the second number: "));

if (isNaN(num2)){
    console.log('That is not a number.');
    process.exit();
}

//im going to use and abuse this exit function oh my god.

if (operation == "+") {
  console.log("The result is " + add(num1, num2));
} else if (operation == "-") {
  console.log("The result is " + sub(num1, num2));
} else if (operation == "*") {
  console.log("The result is " + multi(num1, num2));
} else if (operation == "/") {
  console.log("The result is " + div(num1, num2));
}
