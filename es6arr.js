let num=[1,2,3,4,5,6,7,8,9,10];
console.log("numbers:",num);

num.forEach(n=> console.log(n));

let squared=num.map(n=> n*n);
console.log("squared numbers:",squared);


let even=num.filter(n=> n%2===0);
console.log("even numbers:",even);

let result=num.find(n=> n==3);
console.log("first>3:",result);

let arr=[10,20,30,40,50];

arr.splice(1,1);
console.log("after splice (1,1):",arr);
arr.splice(1,2);
console.log("after splice(1,2):",arr);

let part=arr.slice(1,4);
console.log("after slice(1,4):",part);


num.sort((a,b)=> a-b);
console.log("sorted numbers:",num);

let sum=num.reduce((acc,n)=> acc+n,0);
console.log("sum of numbers:",sum);


let cart=[200,150,300];
let total=cart.reduce((acc,price)=> acc+price,0);
console.log("total price:",total);

