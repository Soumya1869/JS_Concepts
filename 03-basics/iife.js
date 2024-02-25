//immediately invoked function expressions (IIFE)

(function one() {
    //named IIFE
    console.log(`DB Connected`);
})();

//()()
//first paranthesis is function definition second is  function call

//problem occured by the pollution of global scope is removed by using IIFE
//also it is the function that executes immediately

( (name) => {    //simple IIFE
    console.log(`DB Connected To ${name}`);
})('soumya')


