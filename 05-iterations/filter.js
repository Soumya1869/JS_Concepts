const coding = ["js", "ruby", "java", "python","cpp"]

const values = coding.forEach( (item) => {
   // console.log(item);
    return item;
})

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter( (num) => {
  //  num > 4   //it didn't return anything
  return num > 4
})
//console.log(newNums);
//it's because you have written it in scope {}
//and when you start a scope you have to give return function

const numbers = []

myNums.forEach( (num) => {
    if (num > 4) {
        numbers.push(num)
    }
})

console.log(numbers);

const books = [
    {
        title: 'Book one' , genre : 'fiction' , publish: 1981 , edition: 2004
    },
    {
        title: 'Book two' , genre : 'fiction' , publish: 1981 , edition: 2005
    },
    {
        title: 'Book three' , genre : 'fiction' , publish: 1981 , edition: 2017
    },
    {
        title: 'Book four' , genre : 'non-fiction' , publish: 1982 , edition: 2002
    },
    {
        title: 'Book five' , genre : 'history' , publish: 1992 , edition: 2013
    },
    {
        title: 'Book six' , genre : 'fantasy' , publish: 1989, edition: 2003
    },
    {
        title: 'Book seven' , genre : 'drama' , publish: 1993 , edition: 2008
    },
    {
        title: 'Book eight' , genre : 'science' , publish: 2002 , edition: 2012
    },
    {
        title: 'Book nine' , genre : 'science' , publish: 1981 , edition: 1989
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'history')

userBooks = books.filter( (bk) => bk.publish >= 1980 && bk.genre === 'history')

console.log(userBooks);




