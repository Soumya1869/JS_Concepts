//singleton (created by constructors not literals)
Object.create //constructor method

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "soumya",
    "full name" : "Soumya Singh",
   // mySym : "mykey1",
   [mySym]: "mykey1",
    age: 21,
    location: "lucknow",
    email: "sam@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"]
}

 //full name cannot be printed by jsUser.full name method
//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])
//console.log(jsUser[mySym]); //string

jsUser.email = "sam@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "sam@ms.com"
//console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(jsUser.greeting()); //undefined //function[anonymous]
console.log(jsUser.greeting2()); //not a function


