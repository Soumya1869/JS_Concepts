const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
   // console.log(val);
} )

/*
A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for each 
element in the array.
Performs the specified action for each element in an array. */

coding.forEach( (item) => {
   // console.log(item);
})

function printMe(item) {
   // console.log(item);
}

//coding.forEach(printMe)

coding.forEach(  (val, index, arr) => {
    console.log(val, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        langFileName: "js"
    },{
        languageName: "java",
        langFileName: "jdk"
    },{
        languageName: "python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langFileName);
})
