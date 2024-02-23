//functions

function sayMyname(){
    console.log("S");
    console.log("a");
    console.log("m");
}

//sayMyname() //reference

/* function addTwoNos(number1, number2){      //parameters
    console.log(number1 + number2);
}   */

function addTwoNos(number1, number2){
   // let result = number1 + number2
    // return result

    return number1 + number2
    //console.log("soumya");    //doesn't work after return statement
}


const result = addTwoNos(3, 5)     //arguments
//console.log(`Result: `, result);

function loginUserMessage(username = 'sam'){
    //if(username == undefined){
        if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sam"));
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){   //... is a rest operator
      return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "sam",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArr = [200, 400, 500, 100]

function returnSecondValue(getArr){
    return getArr[2]
}
//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,500,1000]));

