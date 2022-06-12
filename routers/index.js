const express = require('express')
const router = express.Router();
const Controller = require('../controller')
const fs = require('fs')

let isLogin = false
let playerEmail ='';

router.get('/', Controller.home);

router.get('/trial', Controller.trial);

router.get('/login', Controller.login);

router.post('/login', Controller.postLogin)
router.post('/api/v1/login', Controller.actionLogin)

module.exports = router;