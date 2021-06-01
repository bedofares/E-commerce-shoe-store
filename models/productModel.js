const db = require('../services/database.js').config;

function getProducts(cb){
    db.query("SELECT * FROM products", function (err, products, fields) {
        if (err) { cb(err) } //this is just for error handling
        //console.log(products);
        cb(null, products)
    });
}

function getProduct (id) {
    let product = products.find(element => element.id === parseInt(id))
    if(product !== undefined){
        return product;

    }else{
        return 'Error 404: This user could not be found.'
    }

}






//Export functions so we can use them in the controller
module.exports = {
    getProducts,
    getProduct
}
