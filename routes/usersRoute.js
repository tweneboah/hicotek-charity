const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
//Controllers
const userController = require('../controllers/usersController')
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', userController.home)
router.post('/register', [
    check('username', 'Username cannot be empty').not().isEmpty(),
    check('firstname', 'First name cannot be empty').not().isEmpty(),
    check('lastname', 'Last name cannot be empty').not().isEmpty(),
    check('country', 'Country cannot be empty').not().isEmpty(),
    check('email', 'Enter a valid Email').isEmail(),
    check('password', 'Password cannot be empty').not().isEmpty(),
], userController.postRegister);

router.get('/register', userController.getRegistrationForm)


router.get('/login', userController.getLoginForm)

router.post('/login', [
    check('username', 'Invalid username/password').not().isEmpty(),
    check('password', 'Invalid username/password').not().isEmpty()
], userController.postLogin);

router.get('/dashboard', isLoggedIn.isLoggedIn,
    userController.dashboard)


module.exports = router