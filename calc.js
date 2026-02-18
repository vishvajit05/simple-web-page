const prompt = require("prompt-sync");
let c = prompt("Enter an operator (+, -, *, /): ");
let a = prompt("Enter a number: ");
let b = prompt("Enter another number: ");

a = parseInt(a);
b = parseInt(b);

switch (c) {
    case "+":
        console.log("Addition:", a + b);
        break;

    case "-":
        console.log("Subtraction:", a - b);
        break;

    case "*":

        console.log("Multiplication:", a * b);
        break;

    case "/":
        console.log("Division:", a / b);
        break;

    default:
        console.log("Invalid operator");
}
