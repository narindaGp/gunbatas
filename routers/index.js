const express = require('express')
const router = express.Router();
const Controller = require('../controller')
const fs = require('fs')

let isLogin = false
let playerEmail ='';

router.get('/', (req, res) => {
    res.render('home', { title: 'Gunbatas homepage', player: playerEmail})
});

router.get('/trial', (req, res) => {
    if (isLogin) {
        res.render('trial', { title: 'Trial Rock Paper Scissors' })      
    } else {
        res.render('restricted', { title: 'Restricted - Trial Rock Paper Scissors' })
    }
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login page' })
});

router.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))

    // console.log('ini hasil user', users['data'])
    // res.send(users.data)
    const {email, password} = req.body
    let isUserEmail = false
    let isPassword = false

    users.data.forEach(user => {
        if (user.email === email) {
            isUserEmail = true
        }
        if (isUserEmail === true && user.password === password) {
            isPassword = true
        }

    });
    
    if (isUserEmail === false) {
        // res.send('user not found')
        res.render('restricted', { title: 'User not found' })
    } 
    
    if (isPassword === false) {
        // res.send('password incorrect')
        res.render('restricted', { title: 'User not found' })
    } else {
        isLogin = true
        // res.send('login successfully')
        playerEmail = email 
        res.render('home', { title: `Gunbatas - ${player = playerEmail}` })
    }
    
})

module.exports = router;