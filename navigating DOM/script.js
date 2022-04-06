/* accessing an element by it's ID */

let main = document.getElementById('main');
console.log(main);
let nav = document.getElementById('nav');
console.log(nav); 


/* accessing elements by their class */
let container = document.getElementsByClassName('container');
// this container variable will contain the array of elements having container classes.
console.log(container);
console.log(container[0]);
console.log(container[1]);


/* accessing elements by their selectors */
let selector = document.querySelector('.container');
console.log("Selector returns: ", selector);
//if there are multiple classes then it will fetch the first element with that class

/*
   CSS SELECTORS

-> Simple selectors (select elements based on name, id, class)
-> Combinator selectors (select elements based on a specific relationship between them)
-> Pseudo-class selectors (select elements based on a certain state)
-> Pseudo-elements selectors (select and style a part of an element)
-> Attribute selectors (select elements based on an attribute or attribute value) 

 */


let sel=document.querySelectorAll('.container');
console.log("Selector returns: ", sel);
// selects all .containers

