$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    // Obtenemos el objeto context
    var ctx = canvas.getContext("2d");
    var img1 = document.getElementById("campo");
    var img2 = document.getElementById("madrid");
    ctx.drawImage(img1, 105, 105,590,390);
    ctx.fillStyle = "#3F3F3F";
    ctx.fillRect(100, 100, 600, 400);
    ctx.fillStyle="#FF8822";
    ctx.font="30px Arial";
    ctx.fillText("Hello World", 125, 80);
    ctx.drawImage(img1, 105, 105,590,390);

});

/* window.onload = function() {
 var c = document.getElementById("myCanvas");
 var ctx = c.getContext("2d");
 var img = document.getElementById("scream");
 ctx.drawImage(img, 10, 10);
 }

 $( document ).ready(function() {
 var pos = 0;
 function render(){
 var canvas = document.getElementById("mycanvas");
 var ctx = canvas.getContext("2d");
 ctx.clearRect(0,0,canvas.width, canvas.height);
 ctx.fillStyle = "#336699";
 ctx.fillRect(10+pos, 10, 100, 100);
 pos = (pos + 1)%100;
 const.log(pos);
 };
 setInterval(render, 100);
 });

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
 // Imprimimos la fecha actual en el elemento <p id="demo"></p>
 }
 */

