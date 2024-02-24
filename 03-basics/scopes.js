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
console.log(b);
//console.log(c);  //var is not used because even if c is used under the scope
//in if condition it can be called out on console while variables declared 
//by let and const doesn't 

function one(){
    const userName = "Sam"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);

    two()
}

one()

/*when there are nested functions, usually the child functions can access 
variables of the parent function */

if(true) {
    const username = "soumya"
    if(username === "soumya") {
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);;
}

//console.log(username);

//++++++++++++++++++++ interesting ++++++++++++++++++++++

console.log(addOne(5)); //this one can be accessed
function addOne(num){
    return num + 1
    
}

//addOne(5)

addTwo(5)    //this one cannot be accessed
const addTwo = function(num){
    return num + 2
    
}

//addTwo(5)
