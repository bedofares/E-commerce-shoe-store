//import node module express
const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');



/*router.get('/',(req,res)=>{
    res.send('Hallo world');
})*/
router.get('/', productController.getProducts)


router.get('/cart',productController.getProductCart)



//export the router that we imported in app.js
module.exports = router;