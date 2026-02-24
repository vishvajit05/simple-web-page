//print the series 100,97,91,82,70,55,37,16, -8, -32, -56, -80, -104, -128, -152, -176, -200, -224, -248, -272....

const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
n = parseInt(n);
let x=100;


let j=3;
for(let i=1; i<=n; i++){
    console.log(x);
    let a=j*i;

    x=x-a;
   
}
