const name="love"
const repocount=10
console.log(` hello my name is ${name} and my repocount is ${repocount}`);   //string interpulation


const  gameName= new String('lo-ve')

//string methods
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString=gameName.substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-2,3)

console.log(anotherString);


//trim go to documentation
const newStringOne= "      love  "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url="https:lovesingh.com/hey"
console.log(url.replace('.com','.ccom'))

console.log(url.includes('love'))



console.log(gameName.split('-'));