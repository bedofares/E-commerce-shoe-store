const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');




// router.get('/', productController.getProducts)

router.get('/:id',productController.getProduct)

router.post('/:id',productController.addToCart)

router.post('/:id/delete',productController.deleteProduct)














module.exports = router;