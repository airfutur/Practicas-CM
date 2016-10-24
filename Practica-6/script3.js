var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
// Imprimimos la fecha actual en el elemento <p id="demo"></p> document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

