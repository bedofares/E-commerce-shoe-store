const db = require('../services/database.js').config;

function getProducts(cb){
    db.query("SELECT * FROM products", function (err, products, fields) {
        if (err) { cb(err) } //this is just for error handling
        //console.log(products);
        cb(null, products)
    });
}

function getProduct (cb,id) {
    let sql = "SELECT * FROM products WHERE id= " + parseInt(id);//parse to change id from string to integer
    db.query( sql, function (err, product, fields) {
        if(err){

            cb(err)
        }
        console.log(product)
        cb(null,product)
    });

}







//Export functions so we can use them in the controller
module.exports = {
    getProducts,
    getProduct
}
