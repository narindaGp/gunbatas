const { Router } = require('express');
const express = require('express')
// const { Router } = require('express')
// const router =  express.Router();
// const app = express()
const routes = Router()
const port = 3000


routes.use('/', (req, res, next) => {
  
})

routes.listen(port, () => {
  console.log(`Gunbatas is online on port ${port}`)
})