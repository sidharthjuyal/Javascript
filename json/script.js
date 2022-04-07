console.clear();

let jsonObj = {
    name:"Sidharth",
    Channel: "Winter Nights",
    Brother: "Sushant Bandhani",
    food: "Cauli-flower"
}

// converting a valid javascript object to a string by JSON.sytringify
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

// using string functions on the string now
myJsonStr = myJsonStr.replace('Sidharth', 'Parth');
console.log(myJsonStr);

// converting a valid JSON string to a js object by JSON.parse
newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);

/*
JSON stands for javascript object notation.
JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.
JSON is a lightweight data interchange format.
JSON is language independent.
*/
