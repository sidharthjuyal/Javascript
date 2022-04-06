console.log("Lets begin date and time");

/*
function timer()
{
let dt1 = new Date();
console.log(dt1);
document.getElementById('timer').innerHTML=dt1;
}

setInterval(timer,1000);
*/


// beautiful date and time 

function timer() {
    let newDate = new Date();

    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let hour = newDate.getHours();
    let date = newDate.getDate();
    let minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    console.log(newDate);
    document.getElementById('timer').innerHTML = date + "-" + month + "-" + year + " , " + hour + ":" + minute + ":" + seconds;
}

setInterval(timer, 1000);
