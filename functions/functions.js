console.clear();

function goodBoy(Name,greetings="no greetings for you! ")  //default argument
{
    console.log(Name + " is a good boy");
    console.log(greetings + Name);
    console.log("\n");
}

let name1="sid";
let name2="vid";
let name3="jid";
let name4="kid";
let greeting="Good Morning! ";

goodBoy(name1);
goodBoy(name2,greeting);
goodBoy(name3,greeting);
goodBoy(name4,greeting);  //take something return nothing


function sum(a=0,b=0,c=0)  //take something return something
{
    let d=a+b+c;
    return d;
}

let result= sum(1,10,100);
console.log(result);

// min max
