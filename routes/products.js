const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');




router.get('/', productController.getProducts)

//router.get('/cart',productController.getCart)
router.get('/:id',productController.getProduct)

router.post('/:id',productController.addToCart)


router.post('/:id/delete',productController.deleteProduct)


//router.post('/addtocartss',productController.addToCart)













module.exports = router;