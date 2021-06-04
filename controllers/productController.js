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
    productModel.getProduct((err, product) => {
        if (err) {
            //res.sendStatus(500) //this is just for error handling
            res.status(404)
            next(err)
        }
        res.render('product' , {product});
    },req.params.id);

}

















module.exports = {
    getProducts,
    getProduct
}