const express = require('express')
const router = express.Router();
const Controller = require('../controller')


let isLogin = false
let playerEmail ='';

router.get('/', Controller.home);

router.get('/trial', Controller.trial);
// router.get('/trial', (req, res) => {
//     if (isLogin) {
//         res.render('trial', { title: 'Trial Rock Paper Scissors' })      
//     } else {
//         res.render('restricted', { title: 'Restricted - Trial Rock Paper Scissors' })
//     }
// });

router.get('/login', Controller.login);

router.post('/login', Controller.postLogin)

module.exports = router;