const res = require("express/lib/response")
const express = require('express')
const fs = require('fs')

class Controller {
    static home(req, res){
        let playerEmail = ''
        res.render('home', { title: 'Gunbatas homepage', player: playerEmail})
    }

    static trial(req, res){
        res.render('trial', { title: 'Trial Rock Paper Scissors' })
    }

    static login(req, res){
    }

    static postLogin(req, res){
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
        res.send({email, password, users, req})
        // res.render('restricted', { title: 'User not found' })
    } 
    
    if (isPassword === false) {
        res.send({email, password, users, req})
        // res.send('password incorrect')
        // res.render('restricted', { title: 'Password invalid' })
    } else {
        let isLogin = true
        // res.send('login successfully')
        let playerEmail = email 
        res.send({email, password, users, req})
        // res.render('home', { title: `Gunbatas - ${player = playerEmail}` })
    }
    
}
    
}

module.exports = Controller