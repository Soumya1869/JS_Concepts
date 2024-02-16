const accountId = 101
let accountEmail = "soumya@gmail.com"
var accountPass = "12345"
accountCity = "lucknow" //variables can be declared like this but it's not safe
/* 
prefer not to use var because of issue in
block scope and functional space
*/
let accountState; //undefined
// accountId = 2
 console.log(accountId);

 console.table([accountId, accountEmail, accountPass, accountCity, accountState])
 //alert(3+3)
 console.log(9+3);
