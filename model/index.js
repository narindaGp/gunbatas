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
        cb({code: 401, message: 'User not found'})
    } 
    
    if (isPassword === false) {
        cb({code: 401, message: 'Password incorrect'})
    } else {
        let isLogin = true
        playerEmail = email;
        cb(null, {email})

    }
  }

}

module.exports = Model;