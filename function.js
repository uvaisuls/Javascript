

//Function as 2 Phase

//1. Creation phase
//2. Execution phase

//Function statement or Function Declaration

greet();
const firstName = "Khan";

//While using function with function keyword we can call the function in the top
function greet(){
    console.log("hello");   //body of the function 
}
greet(); //Function invotion, Function call

greeting("Uvaisul","Karni")
function greeting(firstName, lastName){
    console.log(firstName, lastName)
}
greeting("Uvaisul","Arsheeya")


//Function Expression (=)

const add = function(x, y){
    return x+y; //we cannot call add funtion in the top 
}
console.log(add(3,5));

const sum = function(x, y){
    console.log(x+y); 
}
sum(5,5);