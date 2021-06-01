const productModel = require("../models/productModel")




//menu controller takes the request, response and next object
function getProducts (req, res, next) {
    productModel.getProducts((err, products) => {
            if (err) {
                res.sendStatus(500) //this is just for error handling
            }
            res.render('products', {products});
        });

}

function getProduct (req, res, next) {
    const product = productModel.getProduct(req.params.id);
    //res.json(product);
    res.render('users',{product})

}














module.exports = {
    getProducts,
    getProduct
}