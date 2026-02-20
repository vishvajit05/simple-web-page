//square using function

const prompt = require("prompt-sync" )();
let a = prompt("Enter a number: ");
function square(n) {
console. log(n * n);
}
a = parseInt(a);
square(a);


//prime number using function

const prompt = require("prompt-sync" )();
let num = prompt("Enter a number: ");
function isPrime(n) {
    if (n <= 1) {
        return false;
    }  
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
num = parseInt(num);
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}
