const user = {
    username: "soumya",
    price: 101,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage()

console.log(this);   //this refers to an empty object in this one
/*
function one(){
    let username = "hitesh"
    console.log(this.username);   //undefined
}

one()      */
/*
const one = function() {
    let username = "soumya"
    console.log(this.username);    //undefined
}       

one()           */

const one = () => {                    //arrow  function
    let username = "soumya"
    console.log(this);    //undefined
}       

//one() 

//basic arrow function: () => {}
//const addTwo = (num1, num2) => {       //explicit return
 //   return num1 + num2
//}
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)    //implicit return
//curly braces ke sath return statement dena hi pdega, but when
//using paranthesis then return statement is not needed

//const addTwo = (num1, num2) => {username: "soumya"}   //object cannot be returned like this
const addTwo = (num1, num2) => ({username: "soumya"}) 
console.log(addTwo(4, 7));

const myArr = [2, 5, 3, 7, 8]

myArr.forEach(() => {})