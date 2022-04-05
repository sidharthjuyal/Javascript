// iterating OBJECTS in javascript
// we use for-in loop
let employee = {
    name:"sidharth",
    salary:10,
    channel:"Winter nights"
}

for(key in employee)
{
    console.log(`The ${key} of The employee is ${employee[key]}`)
}
