let fruits=["apple","banana","grapes","orange"];
console.log("fruits:",fruits);

fruits.push("mango");
console.log("fruits:",fruits);  

fruits.pop();
console.log("fruits:",fruits);

fruits.unshift("kiwi");
console.log("fruits:",fruits);

fruits.shift();
console.log("fruits:",fruits);

console.log("fruits length:",fruits.length);

console.log("fruits index of banana:",fruits.indexOf("banana"));    

console.log("fruits includes grapes:",fruits.includes("grapes"));
console.log("fruits includes grapes:",fruits.includes("watermelon"));