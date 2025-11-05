var express = require('express');
var router = express.Router();
const usersController = require('../controllers/userController');

router.get('/register', usersController.register);
router.post('/processRegister', usersController.processRegister);

router.get('/login', usersController.login);
router.post('/processLogin', usersController.processLogin);

router.get('/profile', usersController.profile);
router.get('/profile/:id', usersController.profilePorId); // opcional

router.get('/logout', usersController.logout);

module.exports = router;