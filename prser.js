//print serise 500,499,491,464,400,275,59,.....


//500,500-1=499
//499,499-8=491
//491,491-27=464
//464,464-64=400
//400,400-125=275
//275,275-216=59


const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
n = parseInt(n);
let x=500;

for(let i=1; i<=n; i++){
    console.log(x);
    let a=(i**3);
    x=x-a;  
}