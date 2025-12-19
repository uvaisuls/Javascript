//String

const firstName = "Uvaisul";
const lastName = "Karni";

let val;

//Concatenation in manual method

val  = firstName + lastName;

//Concatenation in manual method with space

val  = firstName+"  "+lastName;

//Append

val = "Uvaisul";
val += "karni";

//Length

val = firstName.length

//Concat

val = firstName.concat(" ",lastName    );

//ChangeCases

val = firstName.toUpperCase();
val = lastName.toLowerCase();

//Indexing - it starts from 0

val = firstName[1];

//CharAt

val = firstName.charAt(3);

//Slice

const Fruit = "Banana";

val = Fruit.slice(1); //anana
val = Fruit.slice(-3); //ana
val  = Fruit.slice(0,3); //Ban

//Split

const greet = "Hello Welcome To Learn JavaScript Program";
val = greet.split(" ");
val = greet.split("");

//Replace 

val = firstName.replace("Uvaisul","Karni");

//Includes

val = greet.includes('Hello');

//CharCodeAt UTF-16 code

val = Fruit.charCodeAt(0);

//CodePointAt

val = Fruit.codePointAt(3);

//SubString

val = greet.substring(3,10);

//Substr last digit specifies the legth to be shown

val = firstName.substr(1,5);






console.log(val);