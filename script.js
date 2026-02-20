let a;
let b;

a=20;
b=23;

console.log("addtion:",a+b)
console.log("sub:",a-b)
console.log("div",a/b)
console.log("mul:",a*b)

 age =46




if (age>=18){
    console.log("eligible")
    if(age==18){
        console.log("it is equal")
    }

}
else{
    console.log("not eligible")
}


 console.log("next")

for(i=2;i<=10;i=i+2){
    console.log(i)
}


 console.log("next")


for(i=3;i<=10;i+=2){
    
    console.log(i)
    if (i==5)
        break
}
 console.log("next")

for(i=10;i>=1;i--){
    console.log(i)
}

a=0
for(i=0;i<=10;i++){
    a=a+i
    
    console.log(a)

}

fact=1
for(i=1;i<=5;i++){
    fact=fact*i
    console.log(fact)
}


 console.log("next")

 let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);

 console.log("next")




 console.log("next")


num = 1234;


for (rev = 0; num > 0; num = Math.floor(num / 10)) {
    digit = num % 10;
    rev = rev * 10 + digit;
}

console.log(rev);

 console.log("net");



