const express = require('express');

const router = express.Router();
const victimController = require('../controllers/victimsController')


router.get('/victim', victimController.getVictimForm);

module.exports = router;