//Type Conversion 
let val; // Init

//Number to String 
val = String(123);
val = String(4+5);

//Bool to String
val = String(true);

//Array to String
val = String([1,2,3,4,])

//String to Numner
val = Number('1');
val = Number('5'+'5');
val = Number('5+5');

//ParseInt, ParseFloat
val = parseInt('101.23');
val = parseFloat('101.43');


console.log(val);
console.log(typeof val);