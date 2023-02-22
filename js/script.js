function scroll() {
    document.getElementById("nav1").style.backgroundColor = "rgba(0,0,0,.5)";
}

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
