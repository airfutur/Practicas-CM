/**
 * Created by parallels on 1/8/17.
 */
var menuState = {

    create: function () {

        game.add.sprite(100,40,'menulogo');

        button = game.add.button(250,450,'button',this.start,this);

        var loadingLabel = game.add.text(85,400,'Shot with spacebar, move with arrows',{font:'30px Courier',fill:'#FFFFFF'});
        // var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        // wkey.onDown.addOnce(this.start,this);

    },

    start: function () {
        game.state.start('play');

    },

};