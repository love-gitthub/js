// primitive(call by value)

// 7  types: string,number,boolean,null,undefined,symbol,bigint


const outsideTemp=null  //null
let userEmail;  //undefined

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);

const bigNumber=674744383


//Non Primitive(Reference)

//Array,Objects,Functions
const heros=["papa","maa"]


//objects
{
    name:"love"
    //age: 22,
}

//functions
 const myfunction=function(){
    console.log("hello world");
 }


 console.log(typeof bigNumber);




 //stack (primitive),Heap(non primitive)

 let myyoutubename="lovesingh"

 let anothername=myyoutubename
 anothername="code"
 console.log(anothername);
 console.log(myyoutubename);



 let userOne={
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo=userOne
 userTwo.email="love@google.com";
 console.log(userOne.email);
 console.log(userTwo.email);









