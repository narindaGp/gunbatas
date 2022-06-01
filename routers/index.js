const express = require('express')
const router = express.Router();
const Controller = require('../controller')
const fs = require('fs')

let isLogin = false

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/trial', (req, res) => {
    if (isLogin) {
        res.render('trial')      
    } else {
        res.render('restricted')
    }
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))
    const {email, password} = req.body
    let isUserEmail = false
    let isPassword = false

    users.forEach(user => {
        if (user.email === email) {
            isUserEmail = true
        }
        if (isUserEmail === true && user.password === password) {
            isPassword = true
        }
    });

    if (isUserEmail === false) {
        // res.send('user not found')
        res.render('restricted')
    } 
    
    if (isPassword === false) {
        // res.send('password incorrect')
        res.render('restricted')
    } else {
        isLogin = true
        // res.send('login successfully')
        res.render('home')
    }
    
})

module.exports = router;