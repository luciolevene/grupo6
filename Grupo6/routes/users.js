var express = require('express');
var router = express.Router();
const usersController = require('../controllers/userController');

router.get('/register', usersController.register);
router.post('/processRegister', usersController.processRegister);   // <- POST

router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);         // <- POST

router.get('/profile', usersController.profile);
router.get('/profile/:id', usersController.profilePorId);           // (opcional, como el de tu compañero)
router.get('/logout', usersController.logout);

module.exports = router;
