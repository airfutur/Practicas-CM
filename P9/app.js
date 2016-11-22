/**
 * Created by parallels on 11/22/16.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    // 193x71 es el tamaño de cada cuadro, hay 3 en la imagen
    game.load.image('background','assets/starfield.jpg');

}

var button;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');
    var n=0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var key = 'boton-'+n;
            game.add.button(i * 100, j * 100, key, actionOnClick, {keyname:n}, 0, 0, 0);
            n++;
        }
    }
}
// Cuadro 2 para raton por encima, cuadro 1 para fuera y cuadro 0 para cuando se clic

//var a=0,b=0;
function actionOnClick () {
    console.log("Tecla pulsada: "+this.keyname);
    /* c=0;
    if (llave=="button-1"){
        if (c=0)a=7;
        else if (c=1) b=7;
        else console.log('Error');
    }
    else if (llave=="button-2"){
        accion_boton_2();
    }
    */
}

