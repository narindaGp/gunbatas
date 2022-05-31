const express = require('express')
const router = express.Router();
const Controller = require('../controller')

// router.get('/', (req, res) => {
//     res.send('Hello World! Gunbatas index routes la bla')
// });


router.get('/', (req, res) => {
    res.render('home')
});

router.get('/trial', (req, res) => {
    res.render('trial')
});

router.get('/login', (req, res) => {
    res.render('login')
    // res.send('login hello from router')
});

// router.post('/login', (req, res))

module.exports = router;