var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.register); 
router.get('/login', userController.login);      
router.get('/profile', userController.profile);   
router.get('/processRegister', userController.processRegister);
router.get('/processLogin', userController.processLogin);
router.get('/logout', userController.logout);   



module.exports = router;