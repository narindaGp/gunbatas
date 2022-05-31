const express = require('express')
const router = express.Router();
const Controller = require('../controller')
const fs = require('fs')

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

router.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))
    console.log(req.body, users)
    res.send(users)
})

module.exports = router;