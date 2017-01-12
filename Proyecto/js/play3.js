/**
 * Created by parallels on 1/12/17.
 */
var play3State = {

    create: function () {
        imp1health = 60;
        imp2health = 60;
        //  Habilito el sistema de fisicas arcade
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  Fondo de pantalla del escenario 1
        game.add.sprite(0, 0, 'back1');

        //  Creo el grupo plataformas que tendra el suelo y los dos bordes donde saltar
        platforms = game.add.group();

        // Activo las fisicas paratodo objeto creado en este grupo
        platforms.enableBody = true;

        //  Grupo de balas
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, 'bullet');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 1);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);


        // Aqui creo el suelo
        var ground = platforms.create(0, game.world.height - 50, 'ground');

        //  Hago que el suelo sea un elemento fijo en el juego y no se mueva al tocarlo.
        ground.body.immovable = true;

        //  Ahora creo plataformas
        var ledge = platforms.create(200, 400, 'ground2');
        ledge.body.immovable = true;

        ledge = platforms.create(530, 400, 'ground2');
        ledge.body.immovable = true;

        ledge = platforms.create(game.world.height/2, 300, 'ground2');
        ledge.body.immovable = true;

        ledge = platforms.create(600, 200, 'ground');
        ledge.body.immovable = true;

        // Añadir los sprites al jugador y a los monstruos
        player = game.add.sprite(32, game.world.height - 120, 'marine');
        imp = game.add.sprite(500, game.world.height - 120, 'imp');
        imp2 = game.add.sprite(600, game.world.height - 120, 'imp');
        imp3 = game.add.sprite(620, game.world.height - 120, 'imp');
        imp4 = game.add.sprite(620, game.world.height - 120, 'imp');

        // Añado los packs de municion y vida
        ammunitionpack = game.add.sprite(game.world.height/2+10, 200, 'ammunition');

        //  Hay que activar las fisicas en todos los objetos necesarios
        game.physics.arcade.enable(player);
        game.physics.arcade.enable(imp);
        game.physics.arcade.enable(imp2);
        game.physics.arcade.enable(imp3);
        game.physics.arcade.enable(imp4);
        game.physics.arcade.enable(ammunitionpack);


        //  Aqui fijo las propiedades de la fisica del jugador, como el rebote y la gravedad.
        player.body.bounce.y = 0.1;
        player.body.gravity.y = 800;
        player.body.collideWorldBounds = true;

        //Aqui fijo las fisicas de los monstruos
        imp.body.bounce.y = 0.1;
        imp.body.gravity.y = 400;
        imp.body.collideWorldBounds = true;

        imp2.body.bounce.y = 0.1;
        imp2.body.gravity.y = 400;
        imp2.body.collideWorldBounds = true;

        imp3.body.bounce.y = 0.1;
        imp3.body.gravity.y = 400;
        imp3.body.collideWorldBounds = true;

        imp4.body.bounce.y = 0.1;
        imp4.body.gravity.y = 400;
        imp4.body.collideWorldBounds = true;


        ammunitionpack.body.bounce.y = 0.2;
        ammunitionpack.body.gravity.y = 800;
        ammunitionpack.body.collideWorldBounds = true;


        //  Declaro las animaciones del jugador y monstruos. Mover a la izquierda, derecha, saltar...
        /* HAY QUE MODIFICARLAS!!! Se quedan en fase "beta" hasta navidad, ya que es un trabajo
         * de photoshop, paciencia e ir probando para que empasten bien y el juego se vea "smooth" */
        player.animations.add('walking', [11, 12, 13, 12], 9, true);
        player.anchor.setTo(.5, .5);
        player.scale.x=-1;

        imp.animations.add('walking', [2,7,2], 9, true);
        imp.animations.add('atack', [1,6], 9, true);
        imp2.animations.add('walking', [2,7,2], 9, true);
        imp2.animations.add('atack', [1,6], 9, true);
        imp3.animations.add('walking', [2,7,2], 9, true);
        imp3.animations.add('atack', [1,6], 9, true);
        imp4.animations.add('walking', [2,7,2], 9, true);
        imp4.animations.add('atack', [1,6], 9, true);

        // imp.animations.add('atack',[4,9,34,24],10,true);
        imp.anchor.setTo(.5, .5);
        imp2.anchor.setTo(.5, .5);
        imp3.anchor.setTo(.5, .5);
        imp4.anchor.setTo(.5, .5);


        //  Controles del juego.
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // Aqui creo el HUD con la vida y las balas disponibles. MODIFICAR CON IMAGENES

        var style = {font: "32px Arial", fill: "white", align: "center"};
        vida_text = game.add.text(game.world.width / 2 - 200, game.world.height - 36, "Health: " + vida.toFixed(0), style);
        municion_text = game.add.text(game.world.width / 2, game.world.height - 36, "Ammunition: " + municion.toFixed(0), style);


    },

    update: function(){

        //  Colision del jugador, los enemigos y los potenciadores/suministros con el suelo
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(imp, platforms);
        game.physics.arcade.collide(imp2, platforms);
        game.physics.arcade.collide(imp3, platforms);
        game.physics.arcade.collide(imp4, platforms);
        game.physics.arcade.collide(ammunitionpack, platforms);

        //  Comprobación de si el jugador choca con un imp, en ese caso llama a la función impDamage
        game.physics.arcade.overlap(player, imp, impDamage, null, this);
        game.physics.arcade.overlap(player, imp2, impDamage, null, this);
        game.physics.arcade.overlap(player, imp3, impDamage, null, this);
        game.physics.arcade.overlap(player, imp4, impDamage, null, this);

        // Comprobacion de si las balas impactan contra un enemigo
        game.physics.arcade.overlap(bullets, imp, impBulletDamage, null, this);
        game.physics.arcade.overlap(bullets, imp2, imp2BulletDamage, null, this);
        game.physics.arcade.overlap(bullets, imp3, imp3BulletDamage, null, this);
        game.physics.arcade.overlap(bullets, imp4, imp4BulletDamage, null, this);

        // Impacto contra las plataformas que elimina la bala
        game.physics.arcade.overlap(bullets, platforms, bulletImpact, null, this);


        // Impacto contra las plataformas que elimina la bala
        game.physics.arcade.overlap(player, ammunitionpack, ammunitionRecover, null, this);

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;
        imp.body.velocity.x = 0;
        imp2.body.velocity.x = 0;
        imp3.body.velocity.x = 0;
        imp4.body.velocity.x = 0;

        // Movimiento del jugador. Con los cursores movimiento y con la barra espaciadora se dispara

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -200;
            player.scale.x = 1;
            player.animations.play('walking');
            dir = 'move_left';
        }
        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 200;
            player.scale.x = -1;
            player.animations.play('walking');

            dir = 'move_right';

        }
        else {
            //  Stand still
            player.animations.stop();

            if (dir == 'move_left') {
                player.frame = 22;
            }
            else if (dir == 'move_right') {
                player.frame = 22;
            }

        }

        if (fireButton.isDown) {
            if (municion > 0) {
                player.frame = 27;
            }
            fireBullet();
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {

            player.body.velocity.y = -550;
        }

        // Inteligencia artificial de los imp (Enemigos)
        if (player.body.position.x < imp.body.position.x - 20) {
            imp.scale.x = 1;
            imp.body.velocity.x = game.rnd.integerInRange(-120,-80);
            imp.animations.play('walking');
        }
        else if (player.body.position.x > imp.body.position.x + 20) {
            imp.scale.x = -1;
            imp.body.velocity.x = game.rnd.integerInRange(80,120);
            imp.animations.play('walking');
        }
        else {
            imp.body.velocity.x = 0;
            imp.animations.stop();
        }


        if (player.body.position.x < imp2.body.position.x - 20) {
            imp2.scale.x = 1;
            imp2.body.velocity.x = game.rnd.integerInRange(-120,-30);
            imp2.animations.play('walking');
        }
        else if (player.body.position.x > imp2.body.position.x + 20) {
            imp2.scale.x = -1;
            imp2.body.velocity.x = game.rnd.integerInRange(20,100);;
            imp2.animations.play('walking');
        } else {
            imp2.body.velocity.x = 0;
            imp2.animations.stop();
        }

        if (player.body.position.x < imp3.body.position.x - 20) {
            imp3.scale.x = 1;
            imp3.body.velocity.x = game.rnd.integerInRange(-60,-40);
            imp3.animations.play('walking');
        }
        else if (player.body.position.x > imp3.body.position.x + 20) {
            imp3.scale.x = -1;
            imp3.body.velocity.x = game.rnd.integerInRange(80,120);
            imp3.animations.play('walking');
        } else {
            imp3.body.velocity.x = 0;
            imp3.animations.stop();
        }

        if (player.body.position.x < imp4.body.position.x - 20) {
            imp4.scale.x = 1;
            imp4.body.velocity.x = game.rnd.integerInRange(-120,-80);
            imp4.animations.play('walking');
        }
        else if (player.body.position.x > imp4.body.position.x + 20) {
            imp4.scale.x = -1;
            imp4.body.velocity.x = game.rnd.integerInRange(20,150);
            imp4.animations.play('walking');
        } else {
            imp4.body.velocity.x = 0;
            imp4.animations.stop();
        }

        if ((imp1health <= 1) && (imp2health <= 1) && (imp3health <= 1) && (imp4health <= 1)) {

            door = game.add.sprite(700,135,'door');
            game.world.bringToTop(player);
            door.animations.add('opening', [1,2,3], 3, true); // Repasar esta animacion, no funciona
            door.animations.play('opening');

            if ((player.body.position.x > 700) && (player.body.position.y < 180)){
                game.state.start('win');
            }

        }

    },

};