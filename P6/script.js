/**
 * Created by parallels on 10/25/16.
 */
$(document).ready(function() {
    console.log("ready");
    var Pala = function (x_start,y_end) {
        this.color_pala = "#336699";
        this.position = {x: x_start, y: 500};
        this.size = {w: 10, h: 100};
        this.y_end=y_end;

    };
    Pala.prototype.render = function (ctx) {
        ctx.fillStyle = this.color_pala;
        ctx.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);

    };
    Pala.prototype.goUp=function(){
        if(this.position.y>=0) this.position.y -=20;
    };
    Pala.prototype.goDown=function(){
        if(this.position.y+this.size.h<=this.y_end) this.position.y +=20;
    };

    Pala.prototype.setKeys = function(keyUp, keyDown){
        var _this = this;
        $(window).keydown(function(event) {
            //console.log("Key pressed is: " +event.which);
            if ( event.which == keyUp ) {
                _this.goUp()
            }else if( event.which == keyDown ){
                _this.goDown();
            }
        });
    };
    var Bola = function(start_pos_x, start_pos_y){
        this.position = {x:start_pos_x, y:start_pos_y};
        this.color_bola = "#FF0000";
        this.size = {w:10, h:10};
        this.angle = 45;
    };
    Bola.prototype.render = function(ctx){
        ctx.fillStyle = this.color_bola;
        ctx.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);
    };

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var pala_L = new Pala(10,canvas.height);
    var pala_R = new Pala(canvas.width-20,canvas.height);
    var puntosL = 0;
    var puntosR = 0;

    pala_L.setKeys(81,65); // Keys: Q, A
    pala_R.setKeys(87,83); // Keys: W, S

    var bola = new Bola(canvas.width/2, canvas.height/2);

    function updateBola(){

        if (bola.position.y<10){
            bola.angle -=90;
        }
        else if(bola.position.y > (canvas.height-10)){
            bola.angle-=90;

        }
        else if ((bola.position.x <20) && (pala_L.position.y<bola.position.y) && ((pala_L.position.y+100)>bola.position.y)){
            bola.angle-=90;
        }
        else if ((bola.position.x > (canvas.width-35)) && (pala_R.position.y<bola.position.y) && ((pala_R.position.y+100)>bola.position.y)){
            bola.angle-=90;
        }
        else if ( bola.position.x <10 ){
            puntosL++;
            bola.position.x=canvas.width/2;
            bola.position.y=canvas.height/2
            bola.angle=45;

        }
        else if (bola.position.x > canvas.width) {
            puntosR++;
            bola.position.x=canvas.width/2;
            bola.position.y=canvas.height/2;
            bola.angle= 135;

        }




        bola.position.x += Math.cos(bola.angle*Math.PI / 180)*20;
        bola.position.y += Math.sin(bola.angle*Math.PI / 180)*20;
    }



    function render() {

        updateBola();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#3F3F3F";
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "20px Arial";
        ctx.fillText("CuadradoFC", 50, 80);
        ctx.fillText("Puntos: "+puntosL, 50, 100);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(180, 70, 30, 30);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "20px Arial";
        ctx.fillText("CirculoFC", 650, 80);
        ctx.fillText("Puntos: "+puntosR, 650, 100);

        ctx.beginPath();
        ctx.arc(620, 80, 20, 0, 2 * Math.PI);
        ctx.fillStyle = '#0000FF';
        ctx.fill();
        ctx.stroke();

        pala_L.render(ctx);
        pala_R.render(ctx);
        bola.render(ctx);
    };
    setInterval(render,50);

});