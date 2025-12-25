//DOM -document object model

//document - Html element or tags in page
let val ;
val= document;
val = document.domain;
val = document.URL;

console.log(val);

//change style
const change = document.getElementById("head-2");

change.style.backgroundColor = "blue";
change.style.color = "white";
change.style.padding = "20px";

//change Content

const cont = document.getElementById("head-1");

cont.innerText = "Hello"; //innertext for textremove or add

cont.innerHTML = `<span style="color: white;background-color:blue">Hello World!</span>`

console.log(cont);

//querry Selector - it only select one item or element

const Qs_1 = document.querySelector(".everything");

console.log(Qs_1);

const Qs_2 = document.querySelector("#head-3");

console.log(Qs_2);

//Multi element

const item = document.getElementsByClassName("everything");

console.log(item);// It will be in HTML Collection
console.log(typeof item); //object

//html collection is not an element. it will be like array but its not an array its an object.

//type conversion
const items = Array.from(item);
console.log(items);

items.forEach(function(val,index,arr){
    console.log(`${val}-${index}`)
    console.log(`${arr}`)
})