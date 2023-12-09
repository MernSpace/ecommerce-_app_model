//nothing here

const express = require('express');
const router = express.Router()
const productController = require('../controller/productContoller')




router.post('/create-product',productController.createProduct)


module.exports =router;