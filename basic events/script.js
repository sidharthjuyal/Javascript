// to change css of an element, use  element.style.property

// on click event
function toggleHide() {

    let para = document.getElementById('para');
    if (para.style.display != "none") {
        para.style.display = "none";
    }
    else {
        para.style.display = "block";
    }
}

// mouseover event
let head1 = document.getElementById('head');

head1.addEventListener("mouseover", function run() {
    alert("Mouse on head");
});

// mouseout event
let head2 = document.getElementById('head');

head2.addEventListener("mouseout", function run() {
    alert("Mouse now out");
});


// on click without using HTML
/*

let btn = document.getElementById('btn');
btn.addEventListener("click", function togglehide() {
    let para = document.getElementById('para');
    if (para.style.display != "none") {
        para.style.display = "none";
    }
    else {
        para.style.display = "block";
    }
});

*/



/*
browser events:
    click
    contextmenu
    mouseover/mouseout
    mousedown/mouseup
    mousemove

    submit
    focus

    DOMContentLoaded

    transitioned
*/
