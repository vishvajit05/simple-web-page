//print tibo series


const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
n = parseInt(n);

 
let a = 0, b = 1,c=1;
 console.log(a);
 console.log(b);
 console.log(c);

for (let i = 2; i < n; i++) {
    let d = a + b + c;
    console.log(d);
    a = b;
    b = c;
    c=d;
}





