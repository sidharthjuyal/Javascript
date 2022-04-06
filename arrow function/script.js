function greet()
{
    console.log('Good morning');
}

// but what is an arrow function?
// arrow function
greet = (name)=> {
    console.log('Good morning '+name);
}
setTimeout(greet,3000,"sid");
// but i will show you a shortcut
setTimeout((name)=>{console.log("Goodbye " + name)},6000,"sid");
// compare this setTimeout with above setTimeout 


// some more example
let sum1=(a,b)=>{
    return a+b;
}
// but the above can also be shortened
let sum2=(a,b)=> a+b;
// check this inside googel devConsole
// some more example
let half= a=> a/2;
// some more example
let greeting=()=>console.log('Goodmorning');


// important
let obj1={
    greeting: "Goodmorning! ",
    names:["sid","kid","jid","pid"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+"Hello "+student);
        });
    }
}
// lexical this
// if you have a arrow function inside an object then the this pointer in the arrow function is of the parent object and not the function itself.

// if it's a simple function inside an object then the this belongs to the function.

obj1.speak();