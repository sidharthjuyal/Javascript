// setTimeOut -> allows us to run the function once after the interval of time

function greet(name,age)
{
    console.log("Hello Good Morning "+name+", your age is "+age);
}

let timeOut = setTimeout(greet,5000 /* milisecond */ ,"sid",21); //ID
console.log(timeOut);

clearTimeout(timeOut);

// setTimeout(greet(),2000)
// wrong syntax, dont call greet function just write its name



// setInterval
let intervalId = setInterval(greet,1000,"bob",30);  //ID
console.log(intervalId);
clearInterval(intervalId);

/*
setTimeout() triggers the expression only once while setInterval() keeps triggering expression regularly after the given interval of time.
*/


// example

function displayTime()
{
    let time=new Date();
    console.log(time);
    document.getElementById('timer').innerHTML = time;
}

setInterval(displayTime, 1000)