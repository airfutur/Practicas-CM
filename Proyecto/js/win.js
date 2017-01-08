/**
 * Created by parallels on 1/8/17.
 */
var winState = {
    create: function () {
        var winLabel = game.add.text(80,80,'HAS GANADO!',{font:'30px Courier',fill:'#FFFFFF'});

        var startLabel = game.add.text(80,300,'Pulsa w para volver al menu',{font:'30px Courier',fill:'#FFFFFF'});

        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.restart,this);

    },

    restart: function(){
        game.state.start('menu');
    },
}