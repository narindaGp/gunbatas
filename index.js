<<<<<<< HEAD
// import express  from 'express';
// import client from './client';
// import server from './server';

const express = require('express');
const client = require('./client');
const server = require('./server');

const port = 4040;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(express.urlencoded({ extended: true }));

app.use("/", client);
app.use("/api/v1", server);

app.listen(port, () => {
  console.log(`Gunbatas app listening on port ${port}`);
});
=======
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
>>>>>>> parent of ddfc754... separate client and server
