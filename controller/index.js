const res = require("express/lib/response");
const View = require("../views");
const Model = require("../model");
const axios = require("axios");

class Controller {
  static user = { isLogin: false, email: "" };

  static home(req, res, next) {
    console.log(Controller.user);
    Model.home((err, data) => {
      if (err) res.render("restricted", { err });
      else
        res.render("home", {
          title: "Gunbatas homepage",
          player: Controller.user.email,
        });
    });
  }

  static trial(req, res, next) {
    Model.trial((err, data) => {
      if (err) res.render("restricted", { err });
      else
        res.render("trial", {
          title: "Trial Rock Paper Scissors",
          player: data.playerEmail,
        });
    });
  }

  static login(req, res, next) {
    Model.login((err, data) => {
      if (err) res.render("restricted", { err });
      else
        res.render("login", {
          title: "Login page",
          player: data.playerEmail,
        });
    });
  }

  static async postLogin(req, res, next) {
    const { email, password } = req.body;
    const data = { email: email, password: password };

    const user = await axios.post("http://localhost:3000/api/v1/login", {
      data: data,
    });

    const userOutput = JSON.parse(user.config.data) 
    const userEmail = userOutput.data.email

    Controller.user = { isLogin: true, email: userEmail };
    res.redirect("/");
  }

  static actionLogin(req, res, next) {
    const { email, password } = req.body;
    const data = { email: email, password: password };

    Model.postLogin(data, (err, outcome) => {
      if (err) res.render("restricted", { err });
      else res.json({email: outcome});
      console.log(outcome);
      res.end();
    });
  }
}

module.exports = Controller;
