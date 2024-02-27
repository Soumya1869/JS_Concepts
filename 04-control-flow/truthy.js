const userEmail = [] //this considered true
//const userEmail = "sam@singh.ai"

if(userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

//we have taken no condiiton and taken given string 
//as a true value , so if string is present if condition 
//will run otherwise else will run.


//falsy values
// --> false, 0, -0, "", null, undefined, NaN, BigInt 0n

// truthy values: [], true, "0", 'false', " ", {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
