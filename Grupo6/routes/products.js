var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/', productController.lista);
router.get('/detail/:id?', productController.detalle); 
router.get('/add', productController.add);

module.exports = router;
