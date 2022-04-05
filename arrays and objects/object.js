let myVar1=21;   //int
let myVar2="Sidharth";   //string
let myVar3=true;   //boolean
let var4;   
console.log(var4);  
// prints undefined


// object { name:value, ...}
let object={
    name: "Sidharth",
    salary:10,
    channel: "Winter Nights",
    "channel 2":"none", //if you have space in name then you have to enclose it inside double quotes
    age:21,
}

console.log(object);

// accessing object elements ( both are same )
console.log(object.name);   //(i)
console.log(object['name']);   //(ii)

console.log(object['channel 2']); //for this case you cannot use (i) you will have to use (ii) only because the name contains a whitespace
