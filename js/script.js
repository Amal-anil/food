// function scroll() {
//     document.getElementById("nav1").style.backgroundColor = "rgba(0,0,0,.5)";
// }

function submit1() {
    console.log("hekko");
    let x = document.getElementById("name").value;
    y = document.getElementById("mail").value;

    if (x == "") {
        alert("please enter the name");
        return false;
    } else {
        alert("Table booked sucessfully.");
        return true;
    }
}

// Get the div
var myDiv = document.getElementById("nav1");

// Listen for scroll event on the window object
window.addEventListener("scroll", function () {
    // Get the current scroll position of the window
    var scrollTop = window.pageYOffset;

    // If the scroll position is greater than 50px, change color of div to red
    if (scrollTop > 50) {
        myDiv.style.backgroundColor = "rgba(0,0,0,.5)";
    } else {
        myDiv.style.backgroundColor = "";
    }
});
