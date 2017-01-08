/**
 * Created by parallels on 1/8/17.
 */
var menuState = {

    create: function () {

        var loadingLabel = game.add.text(80,80,'pulsa w para empezar a jugar',{font:'30px Courier',fill:'#FFFFFF'});
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.start,this);

    },

    start: function () {
        game.state.start('play');

    },

};