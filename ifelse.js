// //syntax

// if(something){
//     do something;
// }else{
//     do something else;
// }


const id = 100;
if(id == "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// ==== - checking the value and type is correct 
if(id === "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

//!= - Not equal
if(id != "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// !== - checking the value and type is correct
if(id !== "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

//Test if undefined

let greet;

if(typeof greet !== 'undefined'){
    console.log(`The Value is ${greet}`);
}else{
    console.log('No value');
}


//Greater or Lesser Than

//1
if(100 > 100){
    console.log("CORRECT")
}else{
    console.log("INCORRECT");
}

//2
if(100 >= 100){
    console.log("CORRECT")
}else{
    console.log("INCORRECT");
}

//3
if(100 < 99){
    console.log("CORRECT")
}else{
    console.log("INCORRECT");
}

//4
if(100 <= 99){
    console.log("CORRECT")
}else{
    console.log("INCORRECT");
}

//elseif

const clr = "Yellow";

if(clr === "Red"){
    console.log("Colour is Red")
}else if(clr === "blue"){
    console.log("Colour is blue")
}else if(clr === "green"){
    console.log("Colour is green")
}else{
    console.log("Colour is not red, blue or green")
}

