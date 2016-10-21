/**
 * Created by boyander on 11/10/16.
 */

var express = require('express');
var Item = require('./Item.js').Item;
var app = express();

// Configure jade to be our rendering engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Enable boostrap from npm as a served static directory
app.use("/libs",express.static('node_modules/bootstrap/dist'));

// Our CSS and JS files
app.use("/public",express.static('public'));



// Use 500px API to get random pictures for our products
var API500px = require('500px');
var api500px = new API500px("YecP85RjzG08DN0MqvgFa0N780dNaDmJX6iTPbYp");
var pics = [];
api500px.photos.getPopular({'sort': 'created_at', 'rpp': '10','image_size':200},  function(error, results) {
    // Do something
    pics = results.photos.map(function(a){
        // Compose object to be used in show items template
        return new Item(a.image_url);
    });
});

// Render frontpage
app.get('/', function (req, res) {
    res.render('portada',{
        pics: [
            new Item("Zapatillas", "http://nikeoutletweb.com/wp-content/uploads/2014/10/zapatillas-nike-outlet.jpg", "50"),
            new Item("Chaqueta", "http://www.motonity.com/server/Portal_0003572/img/products/chaqueta-revit-roamer_755139_12570486.jpg", "150"),
            new Item("Leging","http://www.engineered-life.com/wp-content/uploads/2015/11/ceto-legging-back.jpg","20"),
            new Item("Zapatillas2", "http://nikeoutletweb.com/wp-content/uploads/2014/10/zapatillas-nike-outlet.jpg", "50"),
            new Item("Chaqueta2", "http://www.motonity.com/server/Portal_0003572/img/products/chaqueta-revit-roamer_755139_12570486.jpg", "150"),
            new Item("Leging2","http://www.engineered-life.com/wp-content/uploads/2015/11/ceto-legging-back.jpg","20")
        ]
    });
});


// Server start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
