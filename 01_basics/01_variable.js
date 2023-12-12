const accountId=1457838
let accountEmail="lovesingh.com"
var accountPassword="12345"
/*
preffered not to use var
bcause of issue in block scope and functional scope
and in js if variable not assign then value is undefined
*/
accountcity="ambala"

//accountId=76544  not allowed
console.log(accountId);
accountEmail="singhlove.com"
accountPassword="54321"
accountcity="ara"
console.table([accountId,accountPassword,accountcity])
