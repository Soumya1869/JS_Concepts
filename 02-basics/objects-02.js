//const fbUser = new Object() //singleton
const fbUser = {} //non singleton object

fbUser.id = "123ab"
fbUser.name = "Sam"
fbUser.isLoggedIn = false

//console.log(fbUser);

const regUser = {
    email: "sam@gmail.com",
    fullName: {
        userName: {
            firstName: "Sam",
            lastName : "Singh"
        }
    }
}

console.log(regUser.fullName.userName.firstName);
//optional chaining : adding ? after fullname or any if it doesn't exist in case if 
//function does not exist it will throw undefined

//combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2, obj4) //i{} is an optional parameter as it is an empty object, it gives guaranteed result
const obj3 = {...obj1, ...obj2, ...obj4} //spread
console.log(obj3);

const users = [
    {
    id: 1,
    email: "s@g.com"
},
{
    id: 1,
    email: "s@g.com"
},
{
    id: 1,
    email: "s@g.com"
}]

users[1].email

console.log(fbUser);
console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('isLogged'));


//+++++++++++++++++ destructuring of objects++++++++++++++++++

const course = {
    courseName : "sarcasm 101",
    price: 101,
    courseInstructor : "chandler"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

//json API -> Javascript Object Notation
/* {
    "name": "sam",
    "coursename" = "sarcasm"
    "price": "free"
}   */
//APIs in array form
/* [
    {},
    {},
    {}
]  */

