var myVar = setInterval(myTimer, 1000);
var d = 60;
function myTimer() {
    if (d!=0) {
        document.getElementById("demo").innerHTML = d;
        d-=1;
    }
    else {
        document.getElementById("demo").innerHTML = "BOOM!";
    }
}
/*
$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    // Obtenemos el objeto context
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
})
    */
