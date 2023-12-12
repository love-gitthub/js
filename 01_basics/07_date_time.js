//Date (object)
/*

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
*/


/*
let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());
*/

console.log(Math.floor(Date.now()/1000));

let NewDate=new Date()
console.log(NewDate);
console.log(NewDate.getMonth());
console.log(NewDate.getDay());

NewDate.toLocaleString('default',{
    weekday:"long"


})






