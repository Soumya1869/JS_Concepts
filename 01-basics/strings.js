const name = "soumya"
const repoCount = 50
 
//console.log(name + repoCount + " value"); //old method

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('soumyaa-ss-com')
//string is an object
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//original value doesn't changes
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4) //ignores negative values
console.log(newString); //4th character does not includes

const anotherString = gameName.slice(-6, 4)
console.log(anotherString); 

const newStringOne = "   soumya   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trims the blank starting and ending spaces

const url = "https://sam.com/soumya%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('som'));

//converting string to array

console.log(gameName.split('-'));