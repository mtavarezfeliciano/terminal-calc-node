const rs = require("readline-sync");

console.log("Welcome, Nicholas, or Andrei. :^)");

let validSymbols = ["+", "-", "*", "/"];
let isValidOperation = false;

let operation;

//check if you using an actual operation symbol or naw

while (!isValidOperation) {
  operation = rs.question("What operation would you like to perform?");
  if (validSymbols.includes(operation)) {
    isValidOperation = true;
  } else {
    console.log("That is not a valid operation. Please try again.");
  }
}

const getNum = (str) => {
  while(true) {
    const num = rs.question(`What is the ${str} number? `);

    if (!isNaN(num) && num !== '') {
      console.log(num);
      return Number.parseInt(num);
    } else {
      console.log('That is not a valid number.');
    }
  }
};

const num1 = getNum('first');
const num2 = getNum('second');

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

if (operation == "+") {
  console.log("The result is " + add(num1, num2));
} else if (operation == "-") {
  console.log("The result is " + sub(num1, num2));
} else if (operation == "*") {
  console.log("The result is " + multi(num1, num2));
} else if (operation == "/") {
  console.log("The result is " + div(num1, num2));
}


