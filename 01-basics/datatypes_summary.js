//JS is dynamically typed language
// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const  loggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNum = 3737374980998763869n


// Reference type/non primitive

//arrays, objects, functions

const heros = ["shaktimaan", "naagraj", "doga"]
// objects: 
let myObj = {
    name: "soumya",
    age: 21,
}

//function

const myFunc = function(){
    console.log("hellooo");
}

//to know datatype

console.log(typeof outsideTemp);  //object for null
console.log(typeof myFunc); //function
console.log(typeof heros); //object
console.log(typeof anotherId); //symbol

//+++++++++++++++++++++++++++++++++++++++++++++++++

// memory : stack(primitive) , heap(non primitive)

let myName = "shef"
let anotherName = myName
anotherName = "soumya"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sam@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in stack, we get copy of the stored value,while in heap we get reference
//of that value and all the changes in heap occur in the original value
