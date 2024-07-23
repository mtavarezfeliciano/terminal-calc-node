const rs = require("readline-sync");

console.log("Welcome, this is a redo of an already approved assignment.");

const validSymbols = ["+", "-", "*", "/"];
// let isValidOperation = false;
let operation;

// while (!isValidOperation) {
//   operation = rs.question("What operation would you like to perform?");
//   if (validSymbols.includes(operation)) {
//     isValidOperation = true;
//   } else {
//     console.log("That is not a valid operation. Please try again.");
//   }
// }

const isValidOperation = () => {
  let op;
  while (true) {
    op = rs.question("What operation would you like to perform?");
    if (validSymbols.includes(op)) {
      return op;
    } else {
      console.log("not a valid operation");
    }
  }
};

// const getNum = (str) => {
//   while(true) {
//     const num = rs.question(`What is the ${str} number? `);

//     if (!isNaN(num) && num !== '') {
//       console.log(num);
//       return Number.parseInt(num);
//     } else {
//       console.log('That is not a valid number.');
//     }
//   }
// };

const getNum = (str) => {
  while (true) {
    const num = rs.question(`What is the ${str} number? `);
    if (!isNaN(num) && num !== "") {
      return parseFloat(num);
    } else {
      console.log("not a valid number");
    }
  }
};

// const num1 = getNum('first');
// const num2 = getNum('second');

const operations = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
};

//the functions for the calculations

// function add(num1, num2) {
//   return num1 + num2;
// }
// function sub(num1, num2) {
//   return num1 - num2;
// }
// function multi(num1, num2) {
//   return num1 * num2;
// }
// function div(num1, num2) {
//   return num1 / num2;
// }

// if (operation == "+") {
//   console.log("The result is " + add(num1, num2));
// } else if (operation == "-") {
//   console.log("The result is " + sub(num1, num2));
// } else if (operation == "*") {
//   console.log("The result is " + multi(num1, num2));
// } else if (operation == "/") {
//   console.log("The result is " + div(num1, num2));
// }

operation = isValidOperation();
const num1 = getNum('first');
const num2 = getNum('second');
const result = operations[operation](num1, num2);

console.log(`The result is ${result}`);