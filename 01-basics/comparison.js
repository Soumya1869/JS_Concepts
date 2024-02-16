console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // o/p = false
console.log(null == 0); // o/p = false
console.log(null >= 0); // o/p = true
/* the reason is that an equality check == and
 comparisons > < >= <= work differently. Comaprisons
 convert null to a number, treating it as 0.
  that's why (3)null>= 0 is true and null>0 is false. */

  //same thing goes with undefined
  console.log(undefined > 0); //it gives false in every case
  console.log("2" === 2); 

  //conversions like these should be avoided.