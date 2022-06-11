const res = require("express/lib/response")

class View {
  static home(req, res, next) {
    res.render('home', { title: 'Gunbatas homepage', player: ''})
  }

  static trial(req, res, next) {
    res.render('trial', { title: 'Trial Rock Paper Scissors' })      
  }

  static login(req, res, next) {
    res.render('login', { title: 'Login page' })
  }
}

module.exports = View;