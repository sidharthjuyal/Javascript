var str="This is a string and it is a good string ";
console.log(str);

// indexOf() - gives the first occurence of substring
var position=str.indexOf('string');
console.log(position);

// lastIndexOf() - gives the first occurence of substring
position=str.lastIndexOf('string');
console.log(position);
console.log("\n");


// Substring of a string

/* 

//---------- 1. slice() ----------------

var substr= str.slice(1,5);
// 1 se leke 4 tak print hoga
console.log(substr);

*/
substr= str.slice(1,7);
// 1 se leke 6 tak print hoga
console.log(substr);



// -----------2.substring()--------------
substr=str.substring(1,7);
console.log(substr);
console.log("\n");

/*
difference between slice() and substring()?
-> slice can take negative values but substring() cant
*/


// ------------3.replace()---------------
// replaces first occurence
var replaced= str.replace('string','jinga');
console.log(str);
console.log(replaced);
console.log("\n");


// ------------4.toUpperCase()---------------
// ------------5.toLowerCase()---------------

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("\n");


// ------------6.concat()---------------
var newstring= str.concat('newstring');
console.log(newstring);
var newstring= str.concat(substr);
console.log(newstring);
console.log("\n");


// ------------7.trim()---------------
// trims whitespaces from the beginning and the end of string
var strWithWhitespaces="   this contains     whitespaces    ";
console.log(strWithWhitespaces);
console.log(strWithWhitespaces.trim());
console.log("\n");


// ------------7.charAt()---------------
var char=str.charAt(6);
var code=str.charCodeAt(6); //gives ASCII code of the character
console.log(char);
console.log(code);
console.log("\n");

// accessing a particular index element
console.log(str[2]);

