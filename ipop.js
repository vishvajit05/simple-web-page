// Take name input (string)
const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
console.log("Hello", name);



//input a number and print all numbers from 1 to that number


let n = prompt("Enter a number: ");
n = parseInt(n);

console.log("n:", n);

for (let i = 1; i <= n; i++) {
    console.log(i);
}