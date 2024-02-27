//if

const isUserLoggedIn = true
const temp = 61

/*
if(temp < 50 ){
     console.log("less than 50");
}
else {
console.log("temp is greater than 50");
}
*/
/*
if(3 != 2){        //if condition is true then only code in if will be executed
    console.log("executed");
}    */

//comparison operators: < , > , <= , >= , == , != , ===(checks for type too), !==
//2>=2

const score = 200

//if(score > 100 ) {
  //  const power = "fly"
  //  console.log(`User power: ${power}`);
//}

//console.log(`User power: ${power}`);  //not defined in this one as it is out of scope

const balance = 1000

//if(balance > 500) console.log("test");
/*
if(balance < 500){
    console.log("less than");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
*/

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const logEmail = true

if (UserLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || logEmail) {     //we can add multiple conditions
    console.log("User logged in");
}


 