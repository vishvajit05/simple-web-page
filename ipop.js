//const process =require("node:process");

//let name=process.argv[2];
//console.log("hellow",name);

const prompt = require("prompt-sync")
 //let name =prompt("Enter your name:")
 //console.log("hellow",name);


 let n=prompt("enter a number:");
 n= parseInt(n);
 console.log("n:",n);

 for (let i=1;i<=n;i++){
    console.log(i);
 }
