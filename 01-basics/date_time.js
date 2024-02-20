 //Dates

 let myDate = new Date()
// console.log(myDate);
 console.log(myDate.toString()); //Tue Feb 20 2024 12:10:53 GMT+0530 (India Standard Time)
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleString()); //20/2/2024, 12:12:51 pm
 console.log(typeof myDate);  //object  

 //how to input date

//let myCreatedDate = new Date(2024, 0, 20)
//let myCreatedDate = new Date(2024, 0, 20, 5, 3)
let myCreatedDate = new Date("2024-01-14") //we can also use MM-DD-YYYY format

//console.log(myCreatedDate.toDateString()); // Sat Jan 20 2024
//console.log(myCreatedDate.toLocaleString()); // 20/1/2024, 5:03:00 am
console.log(myCreatedDate.toLocaleString()); // 14/1/2024, 5:30:00 am

let myTimeStamp = Date.now()
//console.log(myTimeStamp); //gives a long value 1708412056228
//console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

//string interpolation
console.log(`${newDate.getDay()} and time `);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    era: "long"
}));