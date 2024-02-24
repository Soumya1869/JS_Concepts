var c = 300
let a = 100

//scope   //global scope
{}

if(true){           //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log(`Inner: `,a);
}

console.log(a);
//console.log(b);
//console.log(c);  //var is not used because even if c is used under the scope
//in if condition it can be called out on console while variables declared 
//by let and const doesn't 

