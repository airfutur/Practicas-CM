/**
 * Created by parallels on 1/8/17.
 */


var bootState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //Paso al estado "load"
        game.state.start('load');
    }

};