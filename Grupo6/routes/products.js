var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/', productController.lista);
router.get('/detail/:id', productController.detalle); 
router.get('/add', productController.addProduct);
router.get('/search', productController.search); 
   

module.exports = router;
