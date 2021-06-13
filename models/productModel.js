const db = require('../services/database.js').config;

function getProducts(cb){
    db.query("SELECT * FROM products", function (err, products, fields) {
        if (err) { cb(err) } //this is just for error handling
        //console.log(products);
        cb(null, products)
    });
}


function getProduct (cb,id) {
     let sql = "SELECT * FROM products INNER JOIN product_details ON products.id = product_details.id where products.id =" + parseInt(id) ;
     //let sql = "SELECT * FROM product_details INNER JOIN products ON product_details.id= products.id ";
    //console.log(sql)

    db.query( sql, function (err, product, fields) {
        if(err){

            cb(err)
        }
       console.log(product)
        cb(null,product)
    });

}

function addToCart (cb,input, id) {
    let sql = "INSERT INTO products_cart (product_size, product_width, product_color, product_quantity, product_id) VALUES ('"+input.product_sizee+"','"+input.product_widthh+"','"+input.product_colorr+"','"+input.product_quantityy+"', '" + id + "')";
    //console.log(sql)
    db.query( sql, function (err, product, fields) {
        if(err){
            cb(err, null)
        }
        cb(null, product)
    });

}

function getProductCart (cb,id) {
    //p. refer to product , c. refer to productsCart
    let sql = "SELECT p.*, c.* FROM products p, products_cart c WHERE p.id = c.product_id"
    //console.log(sql)

    db.query( sql, function (err, product, fields) {
        if(err){

            cb(err)
        }
        //console.log(product)
        cb(null,product)
    });

}

function deleteProduct(id, cb) {
    let sql = "DELETE FROM products_cart WHERE id = " + id;
    db.query(sql, function (err, result, fields) {
        if (err) {
            cb(err)
        }
        cb(null, result);
    })

}


//Export functions so we can use them in the controller
module.exports = {
    getProducts,
    getProduct,
    addToCart,
    getProductCart,
    deleteProduct
}
