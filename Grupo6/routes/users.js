var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.register); 
router.get('/login', userController.login);       
router.get('/profile', userController.profile);   

router.post('/logout', userController.logout);   
router.post('/register', userController.processRegister);

module.exports = router;