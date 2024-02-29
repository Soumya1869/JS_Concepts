//for of

//[{}, {}, {}]

const  arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet  of greetings) {
   // console.log(`Each char is ${greet}`);
}

//Maps : map is an object that holds key-value pairs and remembers the 
//original insertion order of the keys

const map = new Map()      //map holds unique values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ' :- ', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'COD'
}

//for (const [key, value] of myObj) {
//  console.log(key, ': ', value);
//}    //objects doesn't iterate like this using for of loops




