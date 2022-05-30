const express = require('express')
const router = express.Router();
const Controller = require('../controller')

// router.get('/', (req, res) => {
//     res.send('Hello World! Gunbatas index routes la bla')
// });
router.get('/', (req, res) => {
    // res.send('Hello World! Gunbatas index routes la bla')
    res.render('home')
});

// router.get('/', Controller.home);



module.exports = router;