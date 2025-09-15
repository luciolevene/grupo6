var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/', productsController.lista);
router.get('/detail/:id?', productsController.detalle); 
router.get('/add', productsController.add);

module.exports = router;
