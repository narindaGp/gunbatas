const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! Gunbatas index routes lalala bla bla bla')
  });


// app.get('/', (req, res) => {
//     res.send('Hello World! Gunbatas index routes')
//   })


module.exports = router;