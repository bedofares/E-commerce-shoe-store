//import node module express
const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');



router.get('/',(req,res)=>{
    // Read cookies
    res.send('Hallo world');
   // res.render('cart')
})

//router.get('/cart',productController.getCart)
router.get('/cart',productController.getProductCart)



router.get('/cookies',(req,res)=>{
    // Read cookies
    console.log(req.cookies)
// Set cookie
    res.cookie('myCookie', 'Hello World')
    res.send('Cookie was set');
})











//export the router that we imported in app.js
module.exports = router;