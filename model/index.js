const fs = require('fs')
let playerEmail = ''

class Model {
  static home(cb) {
    
    cb(null, { playerEmail})
  }
  static trial(cb) {
    
    cb(null, { playerEmail})
  }
  static login(cb) {
    
    cb(null, { playerEmail})
  }

  static postLogin(data, cb) {
    const users = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))

    // console.log('ini hasil user', users['data'])
    // res.send(users.data)
    const {email, password} = data
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
        // res.render('restricted', { title: 'User not found' })
        cb('User not found')
    } 
    
    if (isPassword === false) {
        // res.send('password incorrect')
        // res.render('restricted', { title: 'incorrect password' })
        cb('incorrect password')
    } else {
        isLogin = true
        // res.send('login successfully')
        // playerEmail = email 
        // res.render('home', { title: `Gunbatas - ${player = playerEmail}` })
        playerEmail = email;
        cb(null, email)

        // const outco
    }
  }

}

module.exports = Model;