//{.} object are key and value pairs
//{.} object are reference type
//{.} object are mutable in nature

const person={
    //Property
    firstName : "Uvaisul",
    lastName : "Karni",
    age : 20,
    email : "uk@gmail.com",
    hobbies : ["traveling","swiming","sleeping"],
    address : {
        street : "Main Street",
        area : "Redhills",
        city : "Chennai"
    },
    //Method - Funtion inside object is known as method
    getFullName : function(){
        return this.firstName + this.lastName;
        //or else
        //return person.firstName + person.lastName;
    },
}

let val;

//Geting specific value from the object

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies;
//for a particular value of array
val = person.hobbies[2];

val = person.address;
//paricular address type
val = person.address.city;

val = person.getFullName();



console.log(val);