// if-else

let age1 = 34;

if (age1 > 19) {
    console.log("you are an adult!");
}
else {
    console.log("you are not an adult!");
}


// if-else ladder
let age2 = 160;

if (age2 >= 13 && age2 <= 19) {
    console.log("you are teenager!");
}
else if (age2 > 19 && age2 <150) {
    console.log("you are an adult!");
}
else if(age2>150)
{
    console.log("Maybe you are lying or maybe you are a monster!");
}
else {
    console.log("you are a small kid!");
}
