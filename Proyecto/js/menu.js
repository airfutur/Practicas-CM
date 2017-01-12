/**
 * Created by parallels on 1/8/17.
 */
var menuState = {

    create: function () {
        bsosound = game.add.audio('bso');
        bsosound.play();
        game.add.sprite(100,40,'menulogo');

        button = game.add.button(250,450,'button',this.start,this);

        var loadingLabel = game.add.text(85,400,'Shot with spacebar, move with arrows',{font:'30px Courier',fill:'#FFFFFF'});

    },

    start: function () {
        game.state.start('play');

    },

};

// Pongo aqui las funciones necesarias para el juego de forma que esten bien organizadas

var player, imp, imp2, fireButton, bsosound, shotsound, ammunitionpack, healthpack;
var bullets, healthsound, reloadsound;
var bulletTime = 0;
var firingTimer = 0;
var combat;
var platforms;
var cursors;
var dir = "";
var imp1health = 60, imp2health = 60, imp3health = 60, imp4health = 60;

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet && (municion>0))
        {
            //  And fire it
            if(dir=="move_left") {
                bullet.scale.x=-1;
                bullet.reset(player.x - 40, player.y + 6);
                bullet.body.velocity.x = -1670;
                bulletTime = game.time.now + 100;
            }
            else {
                bullet.scale.x=1;
                bullet.reset(player.x + 40, player.y + 6);
                bullet.body.velocity.x = 1670;
                bulletTime = game.time.now + 100;
            }
            shotsound.play();
            municion--;
        }
        municion_text.text="Ammunition: "+municion;
    }

}

function impDamage (player, imp) {
    vida-=0.5;
    vida_text.text = "Health: "+vida.toFixed(0);

    imp.animations.play('atack');

    if (vida<=0){
        player.kill();
        vida_text.text = "Health: 0";

        game.state.start('lose');


    }


}

function resetBullet (bullet) {
    8
    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function impBulletDamage (){
    bullet.kill();
    monsterscream.play();


    imp1health-=5;

    if (imp1health<1){
        imp.kill();
        monsterscream.stop();
    }

}

function imp2BulletDamage (){
    bullet.kill();
    monsterscream.play();

    imp2health-=5;

    if (imp2health<1){
        imp2.kill();
        monsterscream.stop();
    }

}

function imp3BulletDamage (){
    bullet.kill();
    monsterscream.play();

    imp3health-=5;

    if (imp3health<1){
        imp3.kill();
        monsterscream.stop();
    }

}

function imp4BulletDamage (){
    bullet.kill();
    monsterscream.play();

    imp4health-=5;

    if (imp4health<1){
        imp4.kill();
        monsterscream.stop();
    }

}


function bulletImpact (bullet,platforms){
    bullet.kill();
}

function healthRecover (player,healthpack){
    healthpack.kill();
    healthsound.play();
    vida+=50;

    if(vida>100){
        vida = 100;
    }
    vida_text.text = "Health: "+vida.toFixed(0);

}

function ammunitionRecover (player,ammunitionpack){
    ammunitionpack.kill();
    reloadsound.play();
    municion+=25;

    if(municion>50){
        municion = 50;
    }
    municion_text.text = "Ammunition: "+municion.toFixed(0);

}
