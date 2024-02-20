//arrays

const myArr = [0, 1, 2, 3, 4, 5] //there can be different elements too like string, numbers etc
const myHeros = ["thor", "loki", "hulk"]
//arrays are objects
//arrays are resizable, can be a mix of datatypes.

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()
//console.log(myArr);

console.log(myArr.includes(9)); //outputs in boolean
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr); //gives [0,1,2,3,4,5]
console.log(newArr); // gives 0,1,2,3,4,5 -> turned into string 

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //gives [1,2]

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);  //gives [1,2,3]
console.log("C ", myArr); //original array is manipulated

