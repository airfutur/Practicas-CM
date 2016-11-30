/**
 * Created by parallels on 11/22/16.
 */
var game = new Phaser.Game(360, 500, Phaser.AUTO, 'phaser-example', { preload: preload, create: create});
 console.log("hola");
function preload() {

    // game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    // 193x71 es el tamaño de cada cuadro, hay 3 en la imagen
    game.load.image('boton-0','icons/siete.png');
    game.load.image('boton-1','icons/cuatro.png');
    game.load.image('boton-2','icons/uno.png');
    game.load.image('boton-3','icons/cero.png');
    game.load.image('boton-4','icons/ocho.png');
    game.load.image('boton-5','icons/cinco.png');
    game.load.image('boton-6','icons/dos.png');
    game.load.image('boton-7','icons/igual.png');
    game.load.image('boton-8','icons/nueve.png');
    game.load.image('boton-9','icons/seis.png');
    game.load.image('boton-10','icons/tres.png');
    game.load.image('boton-11','icons/division.png');
    game.load.image('boton-12','icons/clear.png');
    game.load.image('boton-13','icons/mas.png');
    game.load.image('boton-14','icons/menos.png');
    game.load.image('boton-15','icons/por.png');

}

var a="",b="",c=0,res=0,llave="", text, button;

function create() {

    game.stage.backgroundColor = '#DDDDDD';
    var style = { font: "32px Arial", fill: "#ff0044", align: "center" };
    text = game.add.text(100, 400, "", style);

    var n=0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var key = 'boton-'+n;
            button = game.add.button(i * 100, j * 100, key, actionOnClick, {keyname:n}, 0, 0, 0);
            button.events.onInputDown.add(onInputDown);
            button.events.onInputUp.add(onInputUp);
            n++;
        }
    }

}
// Cuadro 2 para raton por encima, cuadro 1 para fuera y cuadro 0 para cuando se clic

function actionOnClick () {

    llave = this.keyname;

    if (llave == 0){
        if(c == 0) a += String(7);
        else b += String(7);
    }
    else if (llave == 1){
        if(c == 0) a += String(4);
        else b += String(4);
    }
    else if (llave == 2){
        if(c == 0) a += String(1);
        else b += String(1);
    }
    else if (llave == 3){
        if(c == 0) a += String(0);
        else b += String(0);
    }
    else if (llave == 4){
        if(c == 0) a += String(8);
        else b += String(8);
    }
    else if (llave == 5){
        if(c == 0) a += String(5);
        else b += String(5);
    }
    else if (llave == 6){
        if(c == 0) a += String(2);
        else b += String(2);
    }
    else if (llave == 8){
        if(c == 0) a += String(9);
        else b += String(9);
    }
    else if (llave == 9){
        if(c == 0) a += String(6);
        else b += String(6);
    }
    else if (llave == 10){
        if(c == 0) a += String(3);
        else b += String(3);
    }

    else if (llave == 11 || llave == 13 || llave == 14 || llave == 15){
        c = llave;
    }

    else if(llave == 7){

        if (c == 13){
            res = Number(a) + Number(b);
        }
        else if (c == 14){
            res = Number(a) - Number(b);
        }
        else if (c == 15){
            res = Number(a) * Number(b);
        }
        else if (c == 11){
            res = Number(a) / Number(b);
        }
        else {
            res = Number(a);
        }

        text.text = "Result: " + String(res);
        a = res;
        res = 0;
        c = 0;
        b = "";

    }

    else {
        res = 0;

        text.text = "Result: " + String(res);

        c = 0;
        a = "";
        b = "";
    }

}

function onInputUp(button) {

    game.add.tween(button.scale).to({x: 1, y: 1}, 200, Phaser.Easing.Cubic.Out, true);
}

function onInputDown(button) {

    game.add.tween(button.scale).to({x: 0.8, y: 0.8}, 200, Phaser.Easing.Cubic.Out, true);
}

