/**
 * Created by parallels on 1/8/17.
 */
var game = new Phaser.Game(800,600,Phaser.AUTO,'gameDiv');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('play2',play2State);
game.state.add('play3',play3State);
game.state.add('win',winState);
game.state.add('lose',loseState);

game.state.start('boot');
