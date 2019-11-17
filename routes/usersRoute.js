const express = require('express');
const router = express.Router();
//Controllers
const userController = require('../controllers/usersController')

router.get('/', userController.home)
router.post('/register', userController.postRegister);
router.get('/register', userController.getRegistrationForm)
router.get('/login', userController.getLoginForm)
router.post('/login', userController.postLogin)
module.exports = router