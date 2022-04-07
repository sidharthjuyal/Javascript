let m = Math;

// displays the whole Math object
console.log(m);


// Math properties(constants)
console.log("The value of Math.E is", Math.E);
console.log("The value of Math.PI is", Math.PI);
console.log("The value of Math.LN2 is", Math.LN2);
console.log("The value of Math.SQRT1_2 is", Math.SQRT1_2);
console.log("The value of Math.LOG2E is", Math.LOG2E);


// Math methods
let a = 34.64534;
let b = 69;

console.log("The value of a and b is ", a, b)
console.log("3 to the power 2 is ", Math.pow(3,2));
console.log("square root of 50 is ", Math.sqrt(50));
console.log("The value of a and b rounded is ", Math.round(a));

// ceil - gives rounded-UP value
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.1 rounded up to nearest integer is ", Math.ceil(5.1));

// floor - gives rounded-DOWN value
console.log("5.8 rounded DOWN to nearest integer is ", Math.floor(5.8));
console.log("5.1 rounded DOWN to nearest integer is ", Math.floor(5.1));

// abs function - gives absolute value
console.log("The absolute value of -5.6 is ", Math.abs(-5.6));

// trigonometric functions
console.log("the value of sin(0) is ", Math.sin(0));
console.log("the value of sin(PI/2) is ", Math.sin(Math.PI/2));
// now you can experiment with cos, tan, cot etc.

// min-max functions
console.log("minimum value between 4,5,6 is ", Math.min(4,5,6));
console.log("maximum value between 4,5,6 is ", Math.max(4,5,6));


// Generating a random function
let r1= Math.random();
// random number between a and b = a + (b-a)*Math.random()

// between 1 and 100
let r2= 1 + (99)*Math.random();
// between 1 and 1000
let r3= 1 + (999)*Math.random();


console.log("Thr random number is ", r1);
console.log("Thr random number btw 1 & 100 is ", Math.round(r2));
console.log("Thr random number btw 1 & 1000 is ", Math.round(r3));
