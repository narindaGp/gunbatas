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
