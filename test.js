//print series 25, 26, 30, 39, 55, 80, 116, 165, 231, 320, 437, 590, 785, 1030, 1331, 1700, 2165, 2740, 3445, 4300.....

const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
n = parseInt(n);
let x=25;


let count=1;
for(let i=1; i<=n; i++){
    console.log(x);

    x=i*i+x;
    if(count==n){
        break;
    }
    count++;
    
    
}
