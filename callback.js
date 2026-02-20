
 const prompt = require('prompt-sync')();

let age = prompt("Please enter your age: ");
age = parseInt(age);
function checkAge(age) {
    if (age < 18) {
        console.log("not accepted for job");
    } else {
        console.log("accepted for job");
    }

}
checkAge(age);
 
