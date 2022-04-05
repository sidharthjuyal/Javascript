// array is a special type of object
// making an array
let array1=[1,2,true,"sid",undefined];
console.log(array1);
console.log(array1[3]);

//making an array using new keyword
let array2=new Array(41,20,33,true,"sid",undefined);

// array length
console.log(array2.length);

// sorting array
array2=array2.sort();
console.log(array2);

// push an element in the end
array2.push("This is s pushed element");
console.log(array2);

// see this
let array3=new Array(5);
array3.push(100);
console.log(array3);
