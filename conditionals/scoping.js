console.clear();

// 1. var
// var has global scope
var string1="This is a string1";
var string2="This is a string2";
console.log(string1);
console.log(string2);
console.log("\n");


// 2. let
/* let has a block level scope
   see the below example  */

// a) var
var v="outer v";
{
    var v="inner v";
    console.log(v);
}
console.log(v);

// b) let
let a="outer a";
{
    let a="inner a";
    console.log(a);
}
console.log(a);


// 3.const
const c="This cannot be changed";
// c = "I want to change this";  //this will give error
console.log(c);

