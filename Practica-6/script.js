/**
 * Created by parallels on 10/19/16.
 */
$( document ).ready(function() {
    var canvas = document.getElementById("canvas");
    // Obtenemos el objeto context
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
})