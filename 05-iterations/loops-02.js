const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "swift by apple"
}


for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const prog = ["js", "java", "cpp", "py", "rb"]

for (const key in prog) {
  console.log(prog[key]);
}

const map = new Map()      //map holds unique values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
 //  console.log(key);    //map is not iteratable
}







