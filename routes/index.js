const express = require('express')
const { signup, login } = require('../controller');
const router = express.Router()

//router.get('/',main)

//api
router.post('/signup', signup)
router.post('/login', login)

module.exports = router;