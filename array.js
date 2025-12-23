//Array Method

const number = [4,12,27,36,41,56,72,89,98];

let val;

//array length

val = number.length;

//check if is array

val = Array.isArray(number);

//find index of value 

val = number.indexOf(72); //index value will be return
val = number.indexOf(110); //-1 will be return because of value is not in the array

//change into array index value

number[1] = 13; // to change the value using index number

//get index value 

val = number[1];
val = number[14]; // if the index value is not in the array it wull show it as undefined

//immuttable -  it cannot be change 
//muttable - It can be change

const fruit = ["apple","banana","grapes","Kiwi"];

//Push method - to add value in the end of the array

fruit.push("jackfruit");

//pop method - to remove value from the end of the array

fruit.pop();

//unshift - to add value in the start of the array

fruit.unshift("jackfruit");

//shift - to remove front value from the array

fruit.shift();

//splice - to add and remove item
//with the use of splice we can add and remove item from the middle of the array

//add item
fruit.splice(0,0,"jackfruit");

//remove item
fruit.splice(0,1);

//to add multiple array
fruit.splice(2,0,"jackfruit","mango")
//2 - it the start index. It will add value before the index 2
//0 - Delete count, how many item to be deleted

//to remove multiple item
fruit.splice(1,3);


console.log(fruit);
console.log(number);
console.log(val);