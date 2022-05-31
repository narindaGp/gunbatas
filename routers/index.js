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
    const {email, password} = req.body
    let isUserEmail = false
    let isPassword = false

    users.forEach(user => {
        console.log(user.email, email);
        if (user.email === email) {
            isUserEmail = true
            if (user.password === password) {
                isPassword = true
            }
        }
    });

    if (isUserEmail === false) {
        res.send('user not found')
    } else {
        if (isPassword === false) {
            res.send('password incorrect')
        } else {
            res.send('login successfully')
        }
    }
})

module.exports = router;