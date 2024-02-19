const score = 400
//console.log(typeof score);

const balance = new Number(100) //defining number as object
//console.log(balance);  //o/p : [Number: 100]

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); //used during e-commerce application

const otherNumber = 23.8765

//console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//++++++++++++++++++ Maths ++++++++++++++++++++

/*console.log(Math); //object
console.log(Math.abs(-4)); //absolute
console.log(Math.round(4.567));
console.log(Math.ceil(4.2)); //ceiling chooses top value i.e. 5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,6,7,3,2)); //similarly max */

console.log(Math.random()); //gives value for 0 to 1
console.log(Math.floor(Math.random()*10) + 1); //in case if value comes to 0.04 something

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/* math.random() always gives value under 0 to 1 so values are always something
like 0.0222 or 0.45677 like this, now we multiply by 10 to shift decimal to get whole digit 
but in some case if random value is 0.022 something, we have to add 1 to avoid that case to get value above 1 to 9.
when we have to define values between min and max, we use math.random and multiplied
by max - min to provide range and added 1 to avoid 0.0 situation then added min
to whole math.random function. */
