//Numbers

const num1 = 100;
const num2 = 50;

let val;

//Simple Maths

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math

val = Math.PI;

val = Math.round(2.4);//less than .5 it will show it as front digit eg:2
val = Math.round(2.5);//greater than or equal to .5 it will show nxt digit eg:3

val = Math.ceil(2.1);//if there is a decimal next to a number it will round and show it as nxt number

val = Math.floor(2.9);//it will not consider the decimal value it will give the front digit

val = Math.abs(-4);//it will give numbers in positive only

val = Math.sqrt(81);

val = Math.min(2,5,8,10,9);


val = Math.max(2,5,8,10,9);

val = Math.random();


val = Math.floor((Math.random()*100)/10);
console.log(val);
console.log(typeof val);