// 1 to 20 using loop print
i=1 
while(i<=10){
    console.log(i)
    i++;
}

 console.log("next")

do{
    console.log(i);
    i++;
}
while(i<=20);

console.log("next")

//even no


let j=2;
while(j<=20){
     console.log(j)
     j+=2;
}



 console.log("next")


 let k=1;
 let sum=0;
while(k<=10){
     console.log(k);
     sum=sum+k
     k++;

}
 console.log("addtion is:",sum)


 console.log("next")



 //reverse no


 let num=263648;
 let rev=0;
while(num>0){
    rev=rev*10+(num%10);
    num=Math.floor(num/10);
     
     
}
console.log("rev no:",rev)