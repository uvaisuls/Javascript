

const name = "steve";

//For And Example
// const age = 10;
// const age = 18;
// const age = 50;
// const age = 80;

//For OR Example
// const age = 18;
const age = 10; 

// OR|| - either one of them should be true
// AND&& - Both of them should be true

//Example of AND Operator

if(age > 0 && age <12){
    console.log(`${name} is a child`);
}else if(age >=13 && age <= 19){
    console.log(`${name} is a teenager`);
}else if(age >= 20 && age <=70){
    console.log(`${name} is adult`);
}else{
    console.log(`${name} age is bared`);
}

//Example of OR Operator

if(age > 16 || age < 65){
    console.log(`${name} can not run in the children's race`);
}else if(age > 5 || age < 16){
    console.log(`${name} can participate in the race`)
}else{
    console.log("Give the correct age");
}