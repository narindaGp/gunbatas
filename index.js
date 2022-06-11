const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'))
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => {
  console.log(`Gunbatas is online on port ${port}`)
})