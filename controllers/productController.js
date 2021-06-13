const productModel = require("../models/productModel")

//menu controller takes the request, response and next object
function getProducts (req, res, next) {
    productModel.getProducts((err, products) => {
            if (err) {
                res.sendStatus(500) //this is just for error handling
            }
        productModel.getProductCart((err, product) => {
            if (err) {
                //res.sendStatus(500) //this is just for error handling
                res.status(404)
                //next(err)
            }
            res.render('products', {products : products , product: product});
        },req.params.id);

})}


function getProduct (req, res, next) {
    productModel.getProduct((err, product) => {
        if (err) {
            //res.sendStatus(500) //this is just for error handling
            res.status(404)
            next(err)
        }
        productModel.getProductCart((err, products) => {
            if (err) {
                //res.sendStatus(500) //this is just for error handling
                res.status(404)
                //next(err)
            }
        res.render('product' , {product:product , products:products});
    },req.params.id);

    },req.params.id)}



function addToCart (req, res, next) {
    productModel.addToCart((err, product) => {
        if (err) {
            //res.sendStatus(500) //this is just for error handling
            res.status(404)
            next(err)

        }
        if (product) {
            res.redirect('/')
        }
    }, req.body, req.params.id );

}


function getProductCart (req, res, next) {
    productModel.getProductCart((err, product) => {
        if (err) {
            //res.sendStatus(500) //this is just for error handling
            res.status(404)
            //next(err)
        }
        //console.log(product)
        res.render('cart' ,{product});
    },req.params.id);

}



function deleteProduct(req, res, next) {
    productModel.deleteProduct(
        req.params.id
        , (err, product) => {
            if (err) {
                return  res.sendStatus(500)
            }
            res.redirect('/cart');
        })
}




module.exports = {
    getProducts,
    getProduct,
    addToCart,
    getProductCart,
    deleteProduct
}