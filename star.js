

// for(let i=1; i<=5;i++){
//     console.log("*");

// }




// let y="*"
// for(let k=1; k<=5;k++){
//     console.log(x);
//     y=y+"*"
// }

/*print patt 
*
*
*
**
*
***
*
****
*
*****

*/

let n = 4;
console.log("*");


for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
  console.log("*");

}