/**
 * Created by boyander on 11/10/16.
 */

var Item = function Item(imagen){
    this.image = imagen;
    this.talla = "S";
    this.unidades = 1;
    this.price = 0.00;
};

// Get random price in range min, max
Item.prototype.getPrice = function(){
    var min = 15;
    var max = 200;
    return (Math.random() * (max - min) + min).toFixed(2);
}

Item.prototype.getTalla = function(){
    var min = 1;
    var max = 3;
    var res = Math.floor((Math.random() * max) + min);
    if (res == 1){return "S"}
    else if (res == 2){return "M"}
    else return "L"
}

Item.prototype.getUnidades = function(){
    var min = 0;
    var max = 1000;
    return Math.floor((Math.random() * max) + min);
}

exports.Item = Item;
