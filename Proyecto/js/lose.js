/**
 * Created by parallels on 1/8/17.
 */
var loseState = {
    create: function () {

        imp1health = 60, imp2health = 60;

        var winLabel = game.add.text(80,80,'you lose.... :(',{font:'30px Courier',fill:'#FFFFFF'});

        var startLabel = game.add.text(80,300,'Press W to go back main menu',{font:'30px Courier',fill:'#FFFFFF'});

        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.restart,this);

    },

    restart: function(){
        game.state.start('menu');
    },
}