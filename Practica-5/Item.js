/**
 * Created by boyander on 11/10/16.
 */

var Item = function Item(imagen,precio){
    this.image = imagen;
    this.price = precio;
};

// Get random price in range min, max
Item.prototype.getPrice = function(){
   return this.price;
}

exports.Item = Item;
