/**
 * Created by boyander on 11/10/16.
 */

var Item = function Item(nombre, imagen, precio){
    this.title = nombre;
    this.imagen = imagen;
    this.price = precio;
};

// Get random price in range min, max
Item.prototype.getPrice = function(){
   return this.price;
}

exports.Item = Item;
