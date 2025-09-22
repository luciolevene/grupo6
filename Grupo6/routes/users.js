var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.register); 
router.post('/register', userController.processRegister);
router.get('/login', userController.login);      
router.post('/login', userController.processLogin); 
router.get('/profile', userController.profile);   
router.post('/logout', userController.logout);   


module.exports = router;