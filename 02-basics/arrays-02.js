const marvel_heros = ["thor", "loki", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); //it takes array inside array
//console.log(marvel_heros[3][1]);

//const all_heros = marvel_heros.concat(dc_heros) //concat creates a new array from the existing arrays
//console.log(all_heros);

//we use another method for this i.e. spread operation

const all_new_heros = [...marvel_heros, ...dc_heros] //we can add more values in this method similarly using ...
console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_anotherArr = another_arr.flat(Infinity) //should give exact depth
//flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_anotherArr);

console.log(Array.isArray("soumya"));
console.log(Array.from("soumya")); //converts into array
console.log(Array.from({name: "soumya"})); //gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







