//Variables

//var - Global scope or function scope
//let - block scope
//const - block scope and cannot reassigned

//Example of var
var a = "karni";
console.log(a);
a = "Uvaisul";
console.log(a)

//Example of let
let b = "Mask";
console.log(b);
b = "Man";
console.log(b);

//Example of Const
const c = "Constant ";
console.log(c);
// c = "Meow" //this will give a syntax error
// console.log(c)

//INIT - Initialize 
// variable declared without value

let greet; 
console.log(greet); //The Output will be undefined(Means no value declared)
greet = "Hello!";
console.log(greet)

//variable declaring cases

var firstname; //Normal case
var firstName; //Camel case
var first_name; //Underscore 
var FirstName; //Pascal Case
var $firstname; //Dollar symbol